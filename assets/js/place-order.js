function orderNow() {
    // $("#message").show();      
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const orderDate = document.querySelector("#orderDate").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;

    let cartItem = JSON.parse(localStorage.getItem("cartElements"));

    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail = user != null ? user.email : null;
    try {        
        OrderValidation.validate(name, mobileNo, orderDate, address, cartItem, totalAmount)
        const orderObj = {

            name: name,
            mobileNo: mobileNo,
            orderDate: orderDate,
            address: address,
            products: cartItem,
            status: "ORDERED",
            totalAmount: parseInt(totalAmount),
            payment: "Cash On Delivery",
            email: loggedInEmail
        };
        console.log(orderObj);
        //1. Order the cake
        OrderService.orderCake(orderObj).then(res => {
            
            console.log(JSON.stringify(res.data));

            //2. After orders, reduce the stock quantity
            let products = orderObj.products;
            for (let productObj of products) {
                ProductService.reduceStock(productObj._id, productObj.quantity).then(res => {
                    
                    let data = res.data;
                    console.log(data);
                    localStorage.removeItem("cartElements");
                    $("#message").hide();
                    // localStorage.removeItem("totalAmount",null);
                    toastr.success(ErrorMessage.ORDER_IS_SUCCESS);
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 1000);
                }).catch(err => {
                    console.log(err);
                    toastr.error(ErrorMessage.ORDER_IS_FAILED);
                });
            }


        });

    }
    catch (err) {
        console.error(err.message);
        toastr.error(ErrorMessage.CATCH_ERROR);
    }
    
}


window.addEventListener('DOMContentLoaded', (event) => {


    document.querySelector("#totalAmount").value = CartService.getTotalAmount();
}

);