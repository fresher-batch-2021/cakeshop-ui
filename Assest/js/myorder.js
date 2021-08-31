function myOrders()
{
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log("Email," , email);
    //get all orders
    OrderService.getAllOrders().then(res=>{
        let orders = res.data.rows.map(obj=>obj.doc);
        console.table(orders);
        //filter only my orders for the given email id
        let myOrders = orders.filter(obj=>obj.email == email);
        let hari=JSON.stringify(myOrders)
        
    console.table(myOrders);
    // console.log(myOrders[0].products);      
    let content="";
    let count=0;
    console.table(myOrders);
    for(let order of myOrders)
    {
       for(let item of order.products){
        content=content+` <div class="my-order-div">

        <img src="images/${item.imageUrl}" alt="img" width="200px">
        <p>${item.name}</p>
        <p>₹${item.price}.00</p>
        <p>${item.Quantity} Cakes </p>
        `;
       }
        content=content+ `
        <p>${order.status}</p>
        <p>${order.date}</p>
        <button class="order-btn" onclick="cancelOrdered('${order._id}')">Cancel Order</button> </div>
        `;
        count = count + 1;
        if (count == 5) {
            content = content + `<br>`;
            count = 0;
        }
    }
    count++;
    console.log(content);
    document.querySelector("#orderContainer").innerHTML = content;
});
}

myOrders();

function cancelOrdered(id)
{
    alert("order is cancelled");
    OrderService.getOrder(id).then(res=>
        {
            let orderObj=res.data;
            orderObj.status="CANCELLED";
            OrderService.cancelOrder(id,orderObj)
            .then(res1=>{
                alert("Successfully Deleted");
                window.location.reload();
            }).catch(err => {
                alert("error");
                console.log(err.response.message);
            })
        })
  

}