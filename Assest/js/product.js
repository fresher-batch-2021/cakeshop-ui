function project()
{
    var content="";
    const projects=[{id:4,imageUrl:"choco-Butterscotch.png",name:"cake",price:"220"}];
    for(let cakes of projects){
     content = content+`
     <div class="productrow">
     <a href="product.html?id=${cakes.id}">
        <img class=""src="images/${cakes.imageUrl}" alt="img">
        </a>
        <p>${cakes.name}</p>
        <br>
        <p>${cakes.price}</p>
        <br>
        <p>product description......</p>
        <form onsubmit="tocart()">
        
        </form>
        </div>`;
    }
        document.querySelector("#productcontainer").innerHTML=content;
}
project();
{/* <a href="cart.html"><button type="submit">add to cart</button></a> */}