class RegisterValidation 
{
   

    static isValidString(value,message){
        if(value.trim()=="",value==null){
            throw new Error(message);
        }
    }
    static isValidEmail(value,message){
        this.isValidString(value,"not a valid string");
        const emailPattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(emailPattern.test(value));
    }
    static isPasswordMatch(password,confirmPassword,message)
    {
        if(password!=confirmPassword){
            throw new Error(message);
        }
    }
    static isValidNumber(value,message)
    { if (value==""||value.length!=10)
     {
         throw new Error("Please Enter a valid Mobile Number");
    }
    }
}
