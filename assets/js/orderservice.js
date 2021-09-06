
class OrderService
{
   static getAllOrders()
   {
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders/_all_docs?include_docs=true";
   return axios.get(url,{ headers: {'Authorization': basicAuth }});
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
   static cancelOrder(id,orderObj)
   {
    const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders/${id}`;
     return axios.put(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
   static updateOrder(updateObj,_id)//product
   {
    const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_orders/${updateObj._id}`;
    return axios.put(url,updateObj,{headers:{'Authorization':basicAuth}});
   }
}