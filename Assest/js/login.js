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
        const loginObj={
            "email": email,
            "password": password
           };
        console.log(loginObj);
        const url="https://product-mock-api.herokuapp.com/cakeshopapp/api/v1/auth/login";
        axios.post(url,loginObj).then(res=>
            {
                let data=res.data;
                console.log(data);
                alert("successfully logged in");
                window.location.href="index.html";
            }).catch(err=>{
                console.error(err);
                alert("not login");
                
            });
           
             
    }
   
    
}