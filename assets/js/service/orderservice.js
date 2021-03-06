
class OrderService
{
   static getAllOrders()
   {
    const url = myUrl+"cakeshop_orders/_all_docs?include_docs=true";
   return axios.get(url,{ headers: {'Authorization': basicAuth }});
   }

   static getOrder(id)
   {
    const url=myUrl+`cakeshop_orders/${id}`;
    return axios.get(url,{headers:{'Authorization':basicAuth}});
   }
   static orderCake(orderObj)
   {
    const url=myUrl+"cakeshop_orders";
     return axios.post(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
   static cancelOrder(id,orderObj)
   {
    const url=myUrl+`cakeshop_orders/${id}`;
     return axios.put(url,orderObj,{headers:{'Authorization':basicAuth}});
   }
   static updateOrder(updateObj,_id)//product
   {
    const url=myUrl+`cakeshop_orders/${updateObj._id}`;
    return axios.put(url,updateObj,{headers:{'Authorization':basicAuth}});
   }
}