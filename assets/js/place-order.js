function orderNow() {
    // $("#message").show();      
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const  decorations= [];
    
    let decorationsList = document.querySelectorAll(".search-choice");
    decorationsList.forEach( e=>{
        let item = e.children[0].innerText;
        console.log("Selected item:" , item)
        decorations.push(item);
    })
    console.log("Selected items:" , decorations);    


    const orderDate = document.querySelector("#orderDate").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;

    let cartItem = JSON.parse(localStorage.getItem(Message.CART_ELEMENTS));

    let user = JSON.parse(localStorage.getItem(Message.LOGGED_IN_USER));
    let loggedInEmail = user != null ? user.email : null;
    try {        
        OrderValidation.validate(name, mobileNo,decorations, orderDate, address, cartItem, totalAmount)
        const orderObj = {

            name: name,
            mobileNo: mobileNo,
            orderDate: orderDate,
            decorations:decorations,
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
                    localStorage.removeItem(Message.CART_ELEMENTS);
                    $("#message").hide();
                    // localStorage.removeItem("totalAmount",null);
                    toastr.success(Message.ORDER_IS_SUCCESS);
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 1000);
                }).catch(err => {
                    console.log(err);
                    toastr.error(Message.ORDER_IS_FAILED);
                });
            }
        });

    }
    catch (err) {
        console.error(err.message);
        toastr.error(Message.CATCH_ERROR);
    }
    
}


window.addEventListener('DOMContentLoaded', (event) => {


    document.querySelector("#totalAmount").value = CartService.getTotalAmount();
}

);