class ProductService//product 
{
    static getProduct(id)//get id for product pages
    {
        const url=myUrl+`cakeshop_cakes/${id}`;
        return axios.get(url,{headers:{'Authorization':basicAuth}});
    }
    static async reduceStock(_id, quantity)//update product
    {
        const {data} = await this.getProduct(_id);
        data.quantity = data.quantity  -  quantity;
     const url=myUrl+`cakeshop_cakes/${_id}`;
     return axios.put(url,data,{headers:{'Authorization':basicAuth}});
    }

    static async increaseStock(_id, quantity)//update product
    {
        const {data} = await this.getProduct(_id);
        data.quantity = data.quantity  +  quantity;
     const url=myUrl+`cakeshop_cakes/${_id}`;
     return axios.put(url,data,{headers:{'Authorization':basicAuth}});
    }
 
  }
