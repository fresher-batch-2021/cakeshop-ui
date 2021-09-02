class validator{

    isValidString(name,message){
        if(name.trim()==""||name==null){
            throw new Error(message);
        }
    }
}