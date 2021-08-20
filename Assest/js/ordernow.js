// loginCheck();
document.querySelector("#totalAmount").value=localStorage.getItem("TOTAL_BILL_AMOUNT");
function ordernow() {
    alert("hari");

    console.log("ordernow method");
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;

    let cartItem = JSON.parse(localStorage.getItem("cartElements"));

    try {
        OrderValidation.validate(name, mobileNo, date, address, cartItem, totalAmount)
        let orderObj = {
            name: name,
            mobileNo: mobileNo,
            date: date,
            address: address,
            products: cartItem,
            status: "ORDERED",
            totalAmount: totalAmount
        };

        CakeService.cartCake(orderObj).then(res => {
            //    console.log(res.data);
            alert("your order successfully placed");
            window.location.href = "index.html";
        }).catch(err => {
            console.log(err.response.data);
            alert(" Your Order is Failed ");
        });
    }

    catch (err) {
        console.error(err.message);
        alert("Error" + err.message)
    }
    
const totalBillAmount = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value = totalBillAmount;
}

