function project()
{
    var content="";
    const projects=[{imageUrl:"cake.png",name:"cake",price:"220"}];
    for(let cakes of projects){
     content = content+`
     <div class="productrow">
        <img class=""src="images/${cakes.imageUrl}" alt="img">
        <p>${cakes.name}</p>
        <br>
        <p>${cakes.price}</p>
        <br>
        <p>product description......</p>
        <form onsubmit="tocart()">
        
        </form>
        </div>`;
    }
        document.querySelector(".productcontainer").innerHTML=content;
}
project();
{/* <a href="cart.html"><button type="submit">add to cart</button></a> */}