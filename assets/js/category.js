CakeService.getCategories().then(res=>{
    const data =res.data.rows;
    const categories=data.map(obj=>obj.doc);
    console.table("category",categories);
    let content="";
    for(let category of categories)
    {
        let categoryName = category.name.trim();
        content=content+`
        <div class="items1">
                   <a href="occasions?category=${category.name}" onclick="event.preventDefault();navigateByUrl('occasions?category=${categoryName}')">
                    <img src="assets/images/${category.imageUrl}" alt="img"></a><br>
                    <p> ${category.name}</p>
                    
                </div>`;
                
    }
    document.querySelector("#indexContainer").innerHTML=content;

});
