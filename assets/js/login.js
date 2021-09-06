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
                
                toastr.error("Invalid login credentials");  
                }
                else
                {
                
                console.log(data);
                localStorage.setItem("LOGGED_IN_USER",JSON.stringify(data[0]));
                
                toastr.success("successfully logged in");
                setTimeout(function () {
                        window.location.href = "index.html"
                    }, 1500);

                
                
                }
            }).catch(err=>{
                console.error(err);
                toastr.error("You Need Login First");
                
            });
        }
        catch(err)
        {
            console.error(err);
            
        }
           
            
    
}
   
    
