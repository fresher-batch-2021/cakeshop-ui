loginCheck();

function ordernow()
{
    console.log("ordernow method");
    event.preventDefault();
    const name=document.querySelector("#name").value;
    const number=document.querySelector("#number").value;
     const date=document.querySelector("#date").value; 
    const address=document.querySelector("#address").value;
    const totalAmount=document.querySelector("#totalAmount").value;
    
    if(name==null||name.trim()==""){
        alert("no");
        return;
    }else if(mobileNo.length!=10)
    {
        alert("Please Enter a valid phone number ");
         return;
    }
    else
    {
    orderObj={
         Name:name,
         mobileNo:number,
         date:date,
         address:address,
        totalAmount:totalAmount
    };
   
CakeService.cartCake().then(res =>
    {
   console.log(res.data);
    alert("your order successfully placed");
    window.location.href="index.html";
}).catch(err=>{
    console.log(err.response.data);
    alert(" Your Order is Failed ");
});
    
}
}

const totalBillAmount = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value = totalBillAmount;