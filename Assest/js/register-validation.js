class RegisterValidation 
{
    
    static validate(name, email, mobileNo, password, confirmPassword) {
        if (name == "" || name == null || name.trim() == "") {
            throw new Error("name cant be blank");
        }

        else {
            if (email == "" || email == null || email.trim() == "") {
                throw new Error("please enter a valid email ");
            }
            else {
                if (mobileNo.length < 10) {
                    throw new Error("number is not valid");
                }
                else {

                    if (password.length < 8) {
                        throw new Error("password must be greater 8 characters");
                    }
                    else {

                        if (password != confirmPassword) {
                            throw new Error("password does not matching");
                        }

                    }
                }
            }
        }
    }
}
