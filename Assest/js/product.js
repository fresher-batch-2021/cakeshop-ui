function project()
{
    var content="";
    
    for(let cakes of projects)
    {
        const param=new URLSearchParams(window.location.search.substr(1));
        var id = parseInt(param.get("id"));
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
    //   var url=``;
    //   axios.get(url).then(res=>
    //     )
        document.querySelector("#productcontainer").innerHTML=content;
}
project();
{/* <a href="cart.html"><button type="submit">add to cart</button></a> */}
// const projects=[{id:4,imageUrl:"choco-Butterscotch.png",name:"cake",price:"220"}];