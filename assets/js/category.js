CakeService.getCategories().then(res=>{
    const data =res.data.rows;
    const categories=data.map(obj=>obj.doc);
    console.table("category",categories);
    let content="";
    for(let category of categories)
    {
        content=content+`
        <div class="items1">
                   <a href="occasions.html?category=${category.name}">
                    <img src="assets/images/${category.imageUrl}" alt="img"></a><br>
                    <p> ${category.name}</p>
                    
                </div>`;
                
    }
    document.querySelector("#indexContainer").innerHTML=content;

});
