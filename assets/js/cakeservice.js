
class CakeService
{
     static getCategories()//images
   {
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_categories/_all_docs?include_docs=true";
    return axios.get(url,{ headers: {'Authorization': basicAuth } });
   }
   static getCakes()//occasions
   {
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/_all_docs?include_docs=true";
   return axios.get(url,{ headers: {'Authorization': basicAuth } });
   }
   static getCake(id)//product
   {
    const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/${id}`;
    return axios.get(url,{headers:{'Authorization':basicAuth}});
   }
   static orderCake(orderObj)//ordernow
   {
    const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders";
     return axios.post(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
   
}