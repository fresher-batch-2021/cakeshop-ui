


function displayCartItems() {
  console.log("displayCartItems");
  let cartItem = JSON.parse(localStorage.getItem("cartElements"));
  console.log(cartItem);
  let content = `<table class="table table-bordered table-hover table-full-width">
  <thead>
<tr class="table-secondary">
    <th class="cakeNo">Cake.No</th>
    <th class="cakeImage">Cake Design</th>
    <th class="cakeDesign">Cake Name</th>
    <th class="cakePrice">cake Price</th>
    <th class="cakeQuantity">Cake Quantity</th>
    <th class="total">Total Amount</th>
    <th class="delete">Delete</th>
    
</tr>    
</thead><tbody class="table-secondary">`;
  let end = ` </tbody></table>`;
  console.log(displayCartItems);
  var count = 1;
  let sum = 0;
  let total = 0;

  if(cartItem){
  for (let item of cartItem) {
    total = item.Quantity * item.price;
    content = content + `
                  <tr>
                  <td>${count}</td>
                  <td><img class="cakeImg"src="images/${item.imageUrl}" alt="img"></td>
                     <td>${item.name}</td>
                     <td>${item.price}</td>
                     <td>${item.Quantity}</td>
                     <td>${item.Quantity * item.price}</td>
                     <td><a onclick="deleteCartData(${count - 1})">delete</a></td>
                     
                   </tr>
                   `;

    sum = sum + total;
    count++;
  }

  localStorage.setItem("TOTAL_BILL_AMOUNT", sum);
  content += end;
  document.querySelector("#cartData").innerHTML = content;
}
else{
console.log("Cart is empty" , cartItem);
}
}

// Deleting elements in cart
function deleteCartData(index) {

  var arr = JSON.parse(localStorage.getItem("cartElements"));//store the value in localstorage changed into json obj and store it in arr
  if (arr[index].Quantity > 1) {
    arr[index].Quantity--;
  }
  else {
    arr.splice(index, 1);
  }
  console.log(arr[index]);
  toastr.success("Item is deleted");
  localStorage.setItem("cartElements", JSON.stringify(arr));
  displayCartItems();
}

function cartcheck() {


  let cartItem = JSON.parse(localStorage.getItem("cartElements"));
  if (cartItem == null || cartItem == "") {
    toastr.error("cart is empty");
    window.location.href = "occasions.html";
  } else {
    window.location.href = "ordernow.html";
  }
}
displayCartItems();
function cartClear() {
  toastr.success("cart items is cleared");
  localStorage.removeItem("cartElements");
  setTimeout(function () {
    window.location.reload();
  }, 1000);

}

