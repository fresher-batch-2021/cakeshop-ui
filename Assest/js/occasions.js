var cakes=[{imageurl:"birthday-cake.png",name:"cake1",price:"500"},{imageurl:"birthday-cake1.png",name:"cake2",price:"400"},{imageurl:"pexels 2.jpg",name:"cake3",price:"450"},{imageurl:"pexels 4.jpg",name:"cake4",price:"456"},{imageurl:"stepcake1.jpg",name:"cake5",price:"489"},{imageurl:"stepcake1.jpg",name:"cake6",price:"600"}];
let content="";
var count =0;
for(let cake of cakes)
{
     content=content+ `
    <div class="cakerow">
<a href="product.html"><img class="cakeimg" id="cakeworld"src="images/${cake.imageurl}" alt="img"></a>
    <p>cakename = ${cake.name}</p>
    <p>cakeprice = ${cake.price}</p>
<a href="ordernow.html">ordernow</a>
</div>`;  
count=count+1;  
if(count==3)
    {
        content=content+ `<br>`;
        count=0;
    }

document.querySelector("#container").innerHTML=content;
}
