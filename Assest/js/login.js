function Login()
{
    
    console.log("login method");
    
    event.preventDefault();
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
 
    if(password.length < 8)
    {
        alert("password must be greater than 8 characters")
    }
   
    else 
    {
        
        UserService.login(email,password).then(res=>
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
                localStorage.setItem("LoggedIn",JSON.stringify(true));
                alert("successfully logged in");
                window.location.href="index.html";
            }
            }).catch(err=>{
                console.error(err.response.data);
                alert("not login");
                
            });
           
             
    }
   
    
}