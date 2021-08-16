function ordernow()
{
    event.preventDefault();
    const name=document.querySelector("#name").value;
     const totalAmount=document.querySelector("#totalAmount").value;
    const orderDate=document.querySelector("#orderDate").value;
    const status=document.querySelector("#status").value;
    const address=document.querySelector("#address").value;
    const comments=document.querySelector("#comments").value;
    const createdDate=document.querySelector("#createdDate").value;
    const modifiedDate=document.querySelector("#modifiedDate").value;
    const deliverdDate=document.querySelector("#deliveryDate").value;
    const cancelledDate=document.querySelector("#cancelledDate").value;
    

    orderObj={
        id:1,
        applicationName:name,
        totalAmount:totalAmount,
        orderedDate:orderDate,
        status:status,
        address:address,
        comments:comments,
        createdDate:createdDate,
        modifiedDate:modifiedDate,
        deliverdDate:"hel",
        cancelledDate:cancelledDate


    };
const url="https://product-mock-api.herokuapp.com/orderapp/api/v1/orders?applicationName=giftshop";
alert("helo");
axios.post(url,orderObj).then(res =>{
    alert("your order successfully placed");
    window.location.href="index.html";
}).catch(err=>{
    alert("order failed");
});
    
}
