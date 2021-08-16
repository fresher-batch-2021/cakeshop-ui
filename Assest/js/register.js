function register() {
    // alert("Register btn clicked");
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
                        const regObj = {
                            "name": name,
                            "email": email,
                            "mobileNo": mobileNo,
                            "password": password

                        };

                        console.log(regObj);
                        registerAPI(regObj);
                       



                        // alert("Successfully Registered");
                        //next page

                    }


                }
            }
        }
    }
}


function registerAPI(regObj){
    const dbUsername = 'apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx';
    const dbPassword = '85e4a7e36372ac1e47c80f4b81a78d62';
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop";
    axios.post(url, regObj, { headers: { Authorization: basicAuth } }).then(res => {
        let data = res.data;
        console.log(data);
        alert("successfully register");
        window.location.href = "login.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("Unable to Register");
    });

}