


function ordernow() {
    

    console.log("ordernow method");
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const flavours=document.querySelector("#flavours").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;

    let cartItem = JSON.parse(localStorage.getItem("cartElements"));

    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail = user != null ? user.email : null;
    try {
        OrderValidation.validate(name, mobileNo,flavours, date, address, cartItem, totalAmount)
        let orderObj = {
            name: name,
            mobileNo: mobileNo,
            date: date,
            address: address,
            products: cartItem,
            status: "ORDERED",
            totalAmount: parseInt(totalAmount),   
            payment:"Cash On Delivery",         
            email: loggedInEmail
        };

        console.log(orderObj);
        CakeService.cartCake(orderObj).then(res => {
    
            toastr.success("your order successfully placed");
            setTimeout(function()
            {
                window.location.href = "index.html";
            },5000);
            
        }).catch(err => {
            console.log(err.response.data);
            toastr.error(" Your Order is Failed ");
        });
    }

    catch (err) {
        console.error(err.message);
        toastr.error("Error" + err.message);
    }
    
}
const totalBillAmount = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value = totalBillAmount;


var name=localStorage.getItem("FLAVOURS");