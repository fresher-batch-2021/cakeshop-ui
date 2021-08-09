function project()
{
    const projects=[{}]
    let content =`
        <img src="Assest/Images/${datas.imageUrl}" alt="img">
        <p>${datas.name}</p>
        <br>
        <p>${datas.price}</p>
        <br>
        <p>product description......</p>
        <form onsubmit="tocart()">
           <a href="cart.html"><button type="submit">add to cart</button></a>
        </form>`;
        document.querySelector(".productSpec").innerHTML=content;
}