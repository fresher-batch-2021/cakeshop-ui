class OrderValidation {
    static validate(name, mobileNo, date, address, products, status, totalAmount) {
        if (name == null || name.trim() == "") {
            throw new Error("Name Cant be Blank");

        }
        else if (mobileNo.length < 10) {
            throw new Error("please Enter a Valid Number");


        }
        else if (products.length == 0 ){
            throw new Error("Please select any item");
        }
    }
}