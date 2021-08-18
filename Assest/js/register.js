function register() {
    
    console.log("register");
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    console.log(name,email,mobileNo,password,confirmPassword);
   
                try {
                    RegisterValidation.validate(name,email,mobileNo,password,confirmPassword)

                    let regObj = {
                        name: name,
                        email: email,
                        mobileNo:mobileNo,
                        password:password,
                        confirmPassword:confirmPassword
                    }

                        console.log(regObj);
                        UserService.register(regObj).then(res =>
                            {
                               let data = res.data;
                               console.log(data);
                               alert("successfully register");
                               window.location.href = "login.html";
                           }).catch(err => {
                               console.log(err.response.data);
                               alert("Unable to Register");
                           });
                        }
                           catch(err)
                           {
                               
                                console.error(err.message);
                                alert("Error"+err.message)
                           }
                        
                        }
                    
                       
    
        

                        


                    




  
