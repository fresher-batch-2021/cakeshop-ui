
const cartTemplate = (item) => {
  let count = 1;
  let content = `
  <tr>
  <td>${count}</td>
  <td><img class="cakeImg"src="assets/images/${item.imageUrl}" alt="img"></td>
     <td>${item.productName}</td>
     <td>${item.price}</td>
     <td>${item.quantity}</td>
     <td>${item.quantity * item.price}</td>
     <td><a onclick="deleteCartData(${count - 1})">delete</a></td>
     
   </tr>
   `;
  count++;
  return content;
}

function displayCartItems() {
  // $("#message").show();
  // setTimeout(() => {


  console.log("displayCartItems");
  let cartItem = JSON.parse(localStorage.getItem(Message.CART_ELEMENTS));
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

  let sum = 0;
  let total = 0;
  if (cartItem) {
    for (let item of cartItem) {
      total = item.quantity * item.price;
      content = content + cartTemplate(item);
      sum = sum + total;
    }

    localStorage.setItem("TOTAL_BILL_AMOUNT", sum);
    content += end;
    document.querySelector("#cartData").innerHTML = content;
  }
  else {
    console.log(Message.CART_EMPTY, cartItem);
  }
  $("#message").hide();
  // }, 2000);
}

// Deleting elements in cart
function deleteCartData(index) {

  let arr = JSON.parse(localStorage.getItem(Message.CART_ELEMENTS));//store the value in localstorage changed into json obj and store it in arr
  if (arr[index].quantity > 1) {
    arr[index].quantity--;
  }
  else {
    arr.splice(index, 1);
  }
  console.log(arr[index]);
  toastr.success("", Message.CART_ITEM_IS_DELETED,
    {
      timeOut: 1000
    });
  localStorage.setItem(Message.CART_ELEMENTS, JSON.stringify(arr));
  displayCartItems();
}

function cartcheck() {


  let cartItem = JSON.parse(localStorage.getItem(Message.CART_ELEMENTS));
  if (cartItem == null || cartItem == "") {
    toastr.error(Message.CART_EMPTY);

    window.location.href = "occasions.html";
  } else {
    window.location.href = "ordernow.html";
  }
}
displayCartItems();
function cartClear() {
  toastr.success(Message.CART_ITEM_IS_CLEARED);
  localStorage.removeItem(Message.CART_ELEMENTS);
  setTimeout(function () {
    window.location.reload();
  }, 500);

}

