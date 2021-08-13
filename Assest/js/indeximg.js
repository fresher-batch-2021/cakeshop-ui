var kings=[{imageUrl:"pexelsdairy12.jpg",name:"Birthday"},
{imageUrl:"anniversary min.png",name:"Anniversary"},
{imageUrl:"for her.png",name:"Wedding Cake"},
{imageUrl:"love3.png",name:"Lovable One" }];
let content="";
for(let king of kings)
{
    content=content+`
    <div class="items1" >
               <a href="occasions.html?category=${king.name}"> <img src="images/${king.imageUrl}" alt="img"></a><br>
                <p> ${king.name}</p>
                
            </div>`;
            document.querySelector("#indexcontainer").innerHTML=content;
}