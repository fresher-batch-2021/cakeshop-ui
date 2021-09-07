function register() {

    console.log("register");
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const role = "USER";
    console.log(name, email, mobileNo, password, confirmPassword);

    try {
        RegisterValidation.isValidString(name,"name is inValid");
        RegisterValidation.isValidEmail(email,"email is in valid");
        RegisterValidation.isValidNumber(mobileNo,"mobile number inValid");

        RegisterValidation.isPasswordMatch(password,confirmPassword,"password is not match");
        

        let regObj = {
            name: name,
            email: email,
            mobileNo: mobileNo,
            password: password,
            confirmPassword: confirmPassword,
            role: role
        }
        isEmailExists(email).then(res => {
            
            let exists = res;
            if (exists) {
                toastr.error("", ErrorMessage.THIS_EMAIL,//if its true it is an error
                    {
                        preventDuplicate: true
                    });


            }
            else {//if email is false, it is a new email id


                console.log(regObj);
                UserService.register(regObj).then(res1 => {
                    let data = res1.data;
                    console.log(data);
                    toastr.success("successfully register");
                    setTimeout(function () {
                        window.location.href = "login.html";
                    }, 3000)

                }).catch(err => {
                    console.log(err);
                    console.log(err?.response?.data);
                    toastr.error("Unable to Register");
                });
            }
        }).catch(err=>
        {

            console.error(err);
            toastr.error("Error" + err.message)
        });

    }
    catch(err){
        console.log(err);
        toastr.error(err.message);
    }

}
















