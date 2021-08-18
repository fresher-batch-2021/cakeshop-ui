CakeService.getCategories().then(res=>{
    let data =res.data.rows;
    let categories=data.map(obj=>obj.docs);
    console.table(categories);
    let content="";
    for(let category of categories)
    {
        content=content+`
        <div class="items1" >
                   <a href="occasions.html?category=${category.name}">
                    <img src="images/${category.imageUrl}" alt="img"></a><br>
                    <p> ${category.name}</p>
                    
                </div>`;
                document.querySelector("#indexcontainer").innerHTML=content;
    }

});
