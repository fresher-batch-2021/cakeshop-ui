class Validator{

    static isValidString(name,message){
        if(name.trim()==""||name==null){
            throw new Error(message);
        }
    }
    static isValidEmail(name,message){
        if (this.isValidEmail) {
            
        }
        if(name.trim()==""||name==null){
            throw new Error(message);
        }
    }
    static isValidNumber(name,message){
        if(name==null||isNaN(input)||input<0){
            throw new Error(message);
        }
    }
    static isValidPassword(name,message){
        if(name.trim()==""||name==null){
            throw new Error(message);
        }
    }

    static hasLength(num, size, message){

        if(num == null || (""+num).length < size){
            throw new Error(message);
        }
    }
}