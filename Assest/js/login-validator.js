class LoginValidator
{
    static validate(email,password)
    {
     if(password.length < 8)
    {
        throw new Error("password must be greater than 8 characters");
    }
    }
}