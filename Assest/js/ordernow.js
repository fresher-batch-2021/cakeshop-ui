function ordernow()
{
    console.log("ordernow method");
    event.preventDefault();
    const name=document.querySelector("#name").value;
    const number=document.querySelector("#number").value;
     const date=document.querySelector("#date").value; 
    const address=document.querySelector("#address").value;
    const totalAmount=document.querySelector("#totalAmount").value;
    
    if(name==null||name.trim()==""){
        alert("no");
        return;
    }else if(mobileNo.length!=10)
    {
        alert("Please Enter a valid phone number ");
         return;
    }
    else
    {
    orderObj={
         Name:name,
         mobileNo:number,
         date:date,
         address:address,
        totalAmount:totalAmount
    };
    const dbUsername = 'apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx';
    const dbPassword = '85e4a7e36372ac1e47c80f4b81a78d62';
    const basicAuth = "Basic " +btoa(dbUsername+":"+dbPassword);
const url="https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_ordernow";
alert("helo");

axios.post(url,orderObj,{headers:{'Authorization':basicAuth}}).then(res =>{
   console.log(res.data);
    alert("your order successfully placed");
    window.location.href="index.html";
}).catch(err=>{
    console.log(err.response.data);
    alert(" Your Order is Failed ");
});
    
}
}
