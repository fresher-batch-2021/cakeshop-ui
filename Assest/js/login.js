function Login()
{
    // alert("validation");
    event.preventDefault();
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
 
    if(password.length < 8)
    {
        alert("password must be greater than 8 characters")
    }
   
    else 
    {
        // const loginObj={
        //     "email": email,
        //     "password": password
        //    };
        // console.log(loginObj);
        
        const dbUsername = 'apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx';
        const dbPassword = '85e4a7e36372ac1e47c80f4b81a78d62';
        const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop/_find";
    const loginObj = {
        selector:{
            email:email,
            password:password
            
        },
        fields:["_id","name","email"],
    };
        axios.post(url,loginObj, {headers : { Authorization:basicAuth}}).then(res=>
            {
                let data=res.data.docs;
                if (data.length==0)
                 {
                  alert("Invalid login credentials");  
                }
                else
                {
                    const user=0;
                console.log(data);
                alert("successfully logged in");
                window.location.href="index.html";
            }
            }).catch(err=>{
                console.error(err.response.data);
                alert("not login");
                
            });
           
             
    }
   
    
}