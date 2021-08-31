
function getCakeSection(category, cakeItems) {
    console.log("getCakeSection" , category );
    console.table(cakeItems);

    let content = "";
    var count = 0;
    content += "<h3>" + category + "</h3>";
    if(cakeItems){
    for (let cake of cakeItems) {
        content = content + `

<div class="cakerow">

<a href="product.html?id=${cake._id}">
<img class="cakeimg" id="cakeworld"src="images/${cake.imageUrl}" alt="img"></a>
<p>${cake.productName}</p>
<p>₹${cake.price}.00</p>

</div>`;
        count = count + 1;
        if (count == 5) {
            content = content + `<br>`;
            count = 0;
        }
    }
}
    return content;

}
function SearchCakes()
{
    CakeSearchService.getAllCakes().then(res=>{
        let data=res.data.rows;
        let occasionData=data.map(obj=>obj.doc);
        console.log(occasionData);
        
    });
}
//  SearchCakes();

/**
 * This functions 
 * 1. Call db and get all cakes
 * 2. Call display method and pass the cakes
 */
function getAllCakes(category){
    CakeService.getCakes().then(res => {
        const data = res.data.rows;
        const products = data.map(obj => obj.doc);
        console.log(products);
        displayCakes(products,category);
    }).catch(err => {
        console.log(err.data);
        // alert("failed in getting data");
    });

}

/**
 *  This function displays cakes category wise
 * If category is passed, it will display only the selected category
 * else it will display all category 
 * @param {*} products 
 * @param {*} category 
 */
function displayCakes(products, category ) {

        const categories = _.groupBy(products, 'category');

        console.log(JSON.stringify( categories));

        var content = "";
        if (products.length == 0) {
            alert("No cake items");
        }
        else if (category != null) {

            const cakeItems = categories[category];
            console.log("Category:", category, cakeItems);
            content += getCakeSection(category, cakeItems);// return html code



        }
        else {
            console.log("No category selected")
            for (let category in categories) {
                const cakeItems = categories[category];
                console.log("Category:", category, cakeItems);
                content += getCakeSection(category, cakeItems);// return html code

            }
        }
        console.log(content);
        document.querySelector("#container").innerHTML = content;

        // alert("succesful on getting data");
}

const params = new URLSearchParams(window.location.search.substr(1));
const category = params.get('category');
console.log("Selected Category in previous page:" + category);
getAllCakes(category);





