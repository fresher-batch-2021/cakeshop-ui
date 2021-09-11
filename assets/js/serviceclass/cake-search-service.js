
class CakeSearchService{

   
    static searchCake(cakes, inputCakeName)
    {
        return cakes.filter(obj=>obj.productName.toLowerCase().indexOf(inputCakeName.toLowerCase()) !=-1);

    }
}


