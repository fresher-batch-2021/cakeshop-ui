class ProductService
{
    static getProduct(id){
        const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/${id}`;
        return axios.get(url,{headers:{'Authorization':basicAuth}});
    }
    static async updateStock(_id, quantity)//product
    {
        const {data} = await this.getProduct(_id);
        data.quantity = data.quantity  -  quantity;
     const url=`https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_cakes/${_id}`;
     return axios.put(url,data,{headers:{'Authorization':basicAuth}});
    }
 
  }
