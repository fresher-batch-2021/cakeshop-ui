var kings=[{imageurl:"pexelsdairy12.jpg",name:"Birthday"},{imageurl:"anniversary min.png",name:"Annivesary"},{imageurl:"for her.png",name:"lovable one"},{imageurl:"3333.jpg",name:"for your lover" }];
let content="";
for(let king of kings)
{
    content=content+`
    <div class="items1" >
                <img src="images/${king.imageurl}" alt="img"><br>
                <p> ${king.name}</p>
                
            </div>`;
            document.querySelector("#indexcontainer").innerHTML=content;
}