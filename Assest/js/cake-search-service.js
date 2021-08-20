// const cakes = [
//     {name:"Black Forest"},
//     {name:"White Forest"},
//     {name:"Ssss"},
// ];

class CakeSearchService{

   
    static searchCake(cakes, inputCakeName)
    {
        return cakes.filter(obj=>obj.productName.toLowerCase().indexOf(inputCakeName.toLowerCase()) !=-1);

    }
}

// const searchResults = getCakes(cakes, 'Black Forest');
// console.table(searchResults);

