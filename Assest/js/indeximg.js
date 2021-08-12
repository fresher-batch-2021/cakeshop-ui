var kings=[{imageurl:"pexelsdairy12.jpg",name:"Birthday"},
{imageurl:"anniversary min.png",name:"Anniversary"},
{imageurl:"for her.png",name:"Wedding Cake"},
{imageurl:"love3.png",name:"For your lover" }];
let content="";
for(let king of kings)
{
    content=content+`
    <div class="items1" >
               <a href="occasions.html?category=${king.name}"> <img src="images/${king.imageurl}" alt="img"></a><br>
                <p> ${king.name}</p>
                
            </div>`;
            document.querySelector("#indexcontainer").innerHTML=content;
}