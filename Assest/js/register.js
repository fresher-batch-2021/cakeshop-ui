function register() {
    
    console.log("register");
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    if (name == "" || name == null || name.trim() == "") {
        alert("name cant be blank");
    }

    else {

        if (email == "" || email == null || email.trim() == "") {
            alert("please enter a valid email ");
        }
        else {
            if (mobileNo.length < 10) {
                alert("number is not valid");
            }
            else {

                if (password.length < 8) {
                    alert("password must be greater 8 characters");
                }
                else {

                    if (password != confirmPassword) {
                        alert("password does not matching");
                    }

                    else {
                       const regObj  = {
                           name:  name,
                           email:email,
                           mobileNo:mobileNo,
                           password:password
                       }

                        // console.log(regObj);
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


                    }


                }
            }
        }
    }



// function registerAPI(regObj){
  
