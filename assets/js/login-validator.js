class LoginValidator
{
    static validate(password)
    {
        
        Validator.hasLength(password, 8 ,"password must be greater than 8 characters");
    }
}