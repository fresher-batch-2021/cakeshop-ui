
function getCakeSection(category, cakeItems){
    console.log("getCakeSection");

    let content = "";
    var count = 0;
    content += "<h3>" + category + "</h3>";
    for (let cake of cakeItems) {
        content = content + `

<div class="cakerow">

<a href="product.html?id=${cake._id}">
<img class="cakeimg" id="cakeworld"src="images/${cake.imageUrl}" alt="img"></a>
<p>${cake.productName}</p>
<p>₹${cake.price}.00</p>
<a href="ordernow.html">ordernow</a>
</div>`;
        count = count + 1;
        if (count == 5) {
            content = content + `<br>`;
            count = 0;
        }

        

    }
    return content;

}


function displayCakes(category) 
{
    
    CakeService.getCakes().then(res => {
        const data = res.data.rows;
        const products = data.map(obj=>obj.doc);
        console.log(products);
        const categories = _.groupBy(products, 'category');
        console.log(categories);

        var content = "";
        if (products.length==0) {
            alert("No cake items");
        }
        else  if ( category !=null){
           
                 const cakeItems = categories[category];
                 console.log("Category:", category, cakeItems);
                 content+= getCakeSection(category, cakeItems);// return html code
                              
            
           
        }
        else{            
            
             for (let category in categories) {
                 const cakeItems = categories[category];
                 console.log("Category:", category, cakeItems);
                 content+= getCakeSection(category, cakeItems);// return html code
                              
             }
        }
        console.log(content);
        document.querySelector("#container").innerHTML = content;

        // alert("succesful on getting data");
    }).catch(err => {
        console.log(err.data);
        alert("failed in getting data");
    });




}

const params = new URLSearchParams(window.location.search.substr(1));
const category = params.get('category');
console.log("Selected Category in previous page:" + category);
displayCakes(category);



// var cakeObj={ "title": "Birthday" , items: [
//     { imageurl:"birthday-cake.png",
//     name:"cake1",price:"500"},
//     {imageurl:"birthday-cake1.png",name:"cake2",price:"400"},
//     {imageurl:"pexels 2.jpg",name:"cake3",price:"450"},
//     {imageurl:"pexels 4.jpg",name:"cake4",price:"456"},
//     {imageurl:"stepcake1.jpg",name:"cake5",price:"489"},
//      {imageurl:"stepcake1.jpg",name:"cake6",price:"600"},
//      {imageurl:"stepcake1.jpg",name:"cake5",price:"489"},
//      {imageurl:"stepcake1.jpg",name:"cake5",price:"489"},
//      {imageurl:"stepcake1.jpg",name:"cake5",price:"489"},
//      {imageurl:"stepcake1.jpg",name:"cake5",price:"489"}]};


