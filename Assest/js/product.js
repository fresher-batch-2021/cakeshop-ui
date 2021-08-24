function project()
{
    console.log("product method");
    var content="";
    
    const param=new URLSearchParams(window.location.search.substr(1));
    var id = param.get("id");

    
   CakeService.getCake(id).then(res =>{
        
        let cake = res.data;
        console.log(cake);
       content = content+`
     <div class="productrow">
     <a href="product.html?id=${cake._id}">
        <img class=""src="images/${cake.imageUrl}" alt="img">
        </a>
        <p>${cake.productName}</p>
        <br>
        <p>${cake.price}</p>
        <br>
        <p>product description......</p>
        <button type="button" onClick="tocart(${cake.id},'${cake.imageUrl}','${cake.productName}',${cake.price})">Add to cart</button>
        <button ></button>
        
        </div>`;
        document.querySelector("#productcontainer").innerHTML=content;
    }).catch(err=>{
        console.log(err.response.data);
        alert("failed in getting data");
    })


}
project();

function tocart(id,imageUrl,name,price)
{
    
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    var quantity=1;
    

    
    let index = cartItems.findIndex(cartItems=>cartItems.Id == id);// If item already exist, update the quantity
    
    console.log(index);
    if (index != -1){
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Quantity++;
        cartItems[index] = cartObj;
 
    }
    else{
       let cartObj = {Id:id,
        name:name,price:price,imageUrl:imageUrl,Quantity:quantity}; // if item not exist, add new item to cart
    console.log(cartObj);
    cartItems.push(cartObj);
    }
    
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
    window.location.href="cart.html";

}
