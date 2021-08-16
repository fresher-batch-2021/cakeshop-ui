function project()
{
    var content="";
    
    const param=new URLSearchParams(window.location.search.substr(1));
    var id = param.get("id");

    const dbUsername = 'apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx';
    const dbPassword = '85e4a7e36372ac1e47c80f4b81a78d62';
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    
    const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/${id}`;
    axios.get(url,{headers:{'Authorization':basicAuth}}).then(res =>{
        
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