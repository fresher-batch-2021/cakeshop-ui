class CartService {

    static getTotalAmount() {

        let cartItems = JSON.parse(localStorage.getItem("cartElements")) || [];
        console.log(cartItems);
        let total = 0;
        if (cartItems) {
            for (let item of cartItems) {
                total += item.quantity * item.price;
            }
        }
        return total;
    }
}