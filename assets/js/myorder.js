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
        let orderedDate = new Date(order.date).toJSON(); //.substr(0, 10);
        let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");
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
        <p>${date}</p>
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
    
    OrderService.getOrder(id).then(res=>
        {
                let cfm = confirm("Do you want to cancel your Order ?");
                if (cfm) {
            let orderObj=res.data;
            orderObj.status="CANCELLED";
        
            
            OrderService.cancelOrder(id,orderObj)
            .then(res1=>{
                toastr.success("Your Order is Cancelled");
                setTimeout(function () {
                    window.location.reload();
                }, 5000);
                
            }).catch(err => {
                toastr.error("Order Can't Be Cancelled");
                console.log(err.response.message);
            })
        }})
  

}