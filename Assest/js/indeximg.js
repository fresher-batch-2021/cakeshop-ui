var kings=[{imageurl:"pexelsdairy12.jpg",name:"Birthday"},{imageurl:"anniversary min.png",name:"Annivesary"},{imageurl:"for her.png",name:"lovable one"},{imageurl:"love3.png",name:"for your lover" }];
let content="";
for(let king of kings)
{
    content=content+`
    <div class="items1" >
               <a href="occasions.html"> <img src="images/${king.imageurl}" alt="img"></a><br>
                <p> ${king.name}</p>
                
            </div>`;
            document.querySelector("#indexcontainer").innerHTML=content;
}