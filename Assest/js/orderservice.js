const dbUsername = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
const dbPassword = "85e4a7e36372ac1e47c80f4b81a78d62";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
class OrderService
{
   static getAllOrders()
   {
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders/_all_docs?include_docs=true";
   return axios.get(url,{ headers: {'Authorization': basicAuth } });
   }

   static getOrder(id)
   {
    const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders/${id}`;
    return axios.get(url,{headers:{'Authorization':basicAuth}});
   }
   static orderCake(orderObj)
   {
    const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders";
     return axios.post(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
}