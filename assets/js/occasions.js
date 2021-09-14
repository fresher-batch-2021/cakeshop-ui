
 /**
         * 1. Get all cakes
         * 2. Filter the cakes based on the input given
         * 3. Call display method to display cakes
         * */

  function searchCake(){
    const cake = document.querySelector("#cakeFilter").value;
    console.log("Search Cake - " + cake);

    CakeService.getCakes().then(res=>{
        let cakes = res.data.rows.map(obj=>obj.doc);
        console.table(cakes);
        let filteredCakes = CakeSearchService.searchCake(cakes, cake);
        console.table(filteredCakes);
        displayCakes(filteredCakes);


    })

}

//document.querySelector("#cakeFilter").value="f";/
// searchCake();



function occasionsTemplate(cake)
{
   let content=`

    <div class="cakerow">    
        <a href="" onclick=event.preventDefault();navigateByUrl('product?id=${cake._id}')>
        <figure>
          <img class="cakeimg" id="cakeworld"src="assets/images/${cake.imageUrl}" alt="img">
        </figure>
        </a>
      <p>${cake.productName}</p>
      <p>₹${cake.price}.00</p>
    
    </div>`;
    return content;
}
function getCakeSection(category, cakeItems) {
    

    console.log("getCakeSection", category);
    console.table(cakeItems);

    let content = "";
    let count = 0;
    content += "<h3>" + category + "</h3>";
    if (cakeItems) {
        for (let cake of cakeItems) {
            content = content +occasionsTemplate(cake);
            count = count + 1;
            if (count == 5) {
                content = content + `<br>`;
                count = 0;
            }
        }
    }

    return content;


}

function SearchCakes() {
    CakeSearchService.getAllCakes().then(res => {
        let data = res.data.rows;
        let occasionData = data.map(obj => obj.doc);
        console.log(occasionData);

    });
}
/**
 * This functions 
 * 1. Call db and get all cakes
 * 2. Call display method and pass the cakes
 */
function getAllCakes(category) {
    CakeService.getCakes().then(res => {
        const data = res.data.rows;
        const products = data.map(obj => obj.doc);
        console.log(products);
        displayCakes(products, category);
    }).catch(err => {
        console.log(err);
        toastr.error(Message.PRODUCT_FAILED);
        
    });

}
/**
 *  This function displays cakes category wise
 * If category is passed, it will display only the selected category
 * else it will display all category 
 * @param {*} products 
 * @param {*} category 
 */
function displayCakes(products, category) {

    const categories = _.groupBy(products, Message.CATEGORY);

    console.log(JSON.stringify(categories));

    let content = "";
    if (products.length == 0) {
        toastr.error("No cake items");
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
}

function loadCakesFromDB(){
    console.log('DOM fully loaded and parsed');

    let hashValue = window.location.hash;
    let queryParams = hashValue.substr(hashValue.indexOf("?")+1);
    const params = new URLSearchParams(queryParams);
    console.log(params);

    const category = params.get(Message.CATEGORY);
    console.log("Selected Category in previous page:" + category);
    getAllCakes(category);
}

loadCakesFromDB();






