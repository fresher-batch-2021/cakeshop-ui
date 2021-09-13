
class CakeService
{
     static getCategories()//images
   {
    const url = myUrl+"cakeshop_categories/_all_docs?include_docs=true";
    return axios.get(url,{ headers: {'Authorization': basicAuth } });
   }
   static getCakes()//occasions
   {
    const url = myUrl+"cakeshop_cakes/_all_docs?include_docs=true";
   return axios.get(url,{ headers: {'Authorization': basicAuth } });
   }
   static getCake(id)//product
   {
    const url=myUrl+`cakeshop_cakes/${id}`;
    return axios.get(url,{headers:{'Authorization':basicAuth}});
   }
   static orderCake(orderObj)//ordernow
   {
    const url=myUrl+"cakeshop_orders";
     return axios.post(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
   
}