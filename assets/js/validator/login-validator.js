class LoginValidator
{
    static validate(password)
    {
        
        Validator.hasLength(password, 8 ,ErrorMessage.PASSWORD_MUST_BE_GREATER_THAN_8_CHARACTERS);
    }
}