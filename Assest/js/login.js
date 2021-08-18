function Login()
{
    
    console.log("login method");
    
    event.preventDefault();
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    console.log(email,password);
    //1.write try and catch block.
     try{
         //2.insert the login-validation.js call the class name and function name 
        LoginValidator.validate(email,password)
     
      //3.call backend api
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
        catch(err)
        {
            console.error(err.message);
            alert("Error"+err.message)
        }
           
            
    
}
   
    
