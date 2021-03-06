function myOrders() {
    let email = JSON.parse(localStorage.getItem(Message.LOGGED_IN_USER))?.email;
    console.log("Email,", email);
    //get all orders
    OrderService.getAllOrders().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);
        console.table(orders);
        //filter only my orders for the given email id
        let myOrders = orders.filter(obj => obj.email == email);


        console.table(myOrders);
        // console.log(myOrders[0].products);      
        let content = "";

        console.table(myOrders);
        for (let order of myOrders) {
            let count = 0;
            let orderedDate = new Date(order.orderDate).toJSON(); //.substr(0, 10);
            let orderDate = moment(new Date(orderedDate)).format("DD-MM-YYYY");
            for (let item of order.products) {
                content = content + ` <div class="my-order-div">

        <img src="assets/images/${item.imageUrl}" alt="img" width="200px">
        <div class="my-order-p">
        <p>${item.productName}</p>
        <p>₹${item.price}.00</p>
        <p>${item.quantity} Cakes </p>
        `;
            }
            content = content + `
        <p>${orderDate}</p>
        <p>${order.status}</p>
        </div></div>`;
            if (order.status != "DELIVERED" && order.status != "CANCELLED") {
                content += `<button class="my-order-btn" onclick="cancelOrdered('${order._id}')">Cancel Order</button>`;
            }
            else {
                content += `<p></p>`;
            }

            count = count + 1;
            if (count == 5) {
                content = content + `<br>`;
                count = 0;
            }
        }
        // count++;
        console.log(content);
        document.querySelector("#orderContainer").innerHTML = content;
    });
}

myOrders();

function cancelOrdered(id) {
    let cfm = confirm("Do you want to delete the cake ?");
    if (cfm) {    
    OrderService.getOrder(id).then(res => {
        const orderObj = res.data;
        orderObj.status = "CANCELLED";
        OrderService.cancelOrder(id, orderObj).then(res => {
            console.log(JSON.stringify(res.data));
            const products = orderObj.products;
            for (let productObj of products) {
                ProductService.increaseStock(productObj._id, productObj.quantity)
                    .then(res1 => {
                        
                        toastr.success(Message.MYORDER_CANCEL);
                        setTimeout(function () {
                            window.location.reload();
                        }, 5000);

                    }).catch(err => {
                        toastr.error(Message.MYORDER_CANNOT_BE_CANCEL);
                        console.log(err.response.message);
                    });

            }
        }).catch(err => {
            console.log(err);
            toastr.error(Message.MYORDER_ERROR);
        });

    });
}

}
