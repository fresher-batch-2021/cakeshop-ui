function project()
{
    var content="";
    
    const param=new URLSearchParams(window.location.search.substr(1));
    var id = parseInt(param.get("category"));
    
    const url=`https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/products/${id}`;
    axios.get(url).then(res =>{
        let cakes=res.data;


        content = content+`
     <div class="productrow">
     <a href="product.html?id=${cakes.id}">
        <img class=""src="images/${cakes.imageUrl}" alt="img">
        </a>
        <p>${cakes.productName}</p>
        <br>
        <p>${cakes.price}</p>
        <br>
        <p>product description......</p>
        <button type="button" onClick="tocart(${cakes.id},'${cakes.imageUrl}','${cakes.productName}',${cakes.price})">Add to cart</button>
        
        
        </div>`;
        document.querySelector("#productcontainer").innerHTML=content;
    }).catch(err=>{
        alert("failed in getting data");
    })


}
project();

function tocart(id,imageUrl,name,price)
{
    
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    var qty=1;
    

    
    let index = cartItems.findIndex(cartItems=>cartItems.Id == id);// If item already exist, update the quantity
    
    console.log(index);
    if (index != -1){
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Qty++;
        cartItems[index] = cartObj;
 
    }
    else{
       let cartObj = {Id:id,name:name,price:price,imageUrl:imageUrl,Qty:qty}; // if item not exist, add new item to cart
    console.log(cartObj);
    cartItems.push(cartObj);
    }
    
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
    window.location.href="cart.html";

}