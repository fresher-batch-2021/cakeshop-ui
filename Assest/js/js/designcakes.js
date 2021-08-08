var designs=[{imageurl:"cake11.jpg",name:"cake1",price:"400"}]
let content="";
for(let design of designs)
{
    content=content+` <div class="designcake">
<a href="cart.html"><img class="designimg" id="cakeworld" src="images/${design.imageurl}" alt="img"></a>
<p>cakename =${design.name}</p>
<p>cakeprice =${design.price}</p>
</div>`;
}
document.querySelector("#container").innerHTML=content;