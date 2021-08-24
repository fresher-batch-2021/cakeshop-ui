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
        
    console.table(myOrders);
    console.log(myOrders[0].products);      
    let content="";
    let count=0;
    for(let order of myOrders)
    {
        for(let item of order.products){
        content=content+`
        <img src="images/${item.imageUrl}" alt="img" width="30px">
        <p>${item.name}</p>
        <p>₹${item.price}.00</p>
        <p>${order.status}</p>
        <p>${order.date}</p>
        `;
        }
        count++;
    }
    console.log(content);
    document.querySelector("#ordercontainer").innerHTML = content;
});
}

myOrders();