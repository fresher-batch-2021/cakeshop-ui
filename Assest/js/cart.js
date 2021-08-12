// alert("hello");

function displayCartItems() {
let cartitem=JSON.parse(localStorage.getItem("cartElements"));

  let content = `<table>
  


<tr>
    <th class="cakeNo">Cake.No</th>
    <th class="cakeDesign">CakeDesign</th>
    <th class="cakePrice">cakePrice</th>
    <th class="cakeQuantity">CakeQuantity</th>
    <th class="delete">Delete</th>
</tr>`;
  let end = `</table>`;
var count=1;
  for (let item of cartitem) {
    
    content = content + `
                  <tr>
                  <td>${count}</td>
                     
                     <td>${item.name}</td>
                     <td>${item.price}</td>
                     <td>${item.Qty}</td>
                     <td><a onclick="deleteCartData(${count})">delete</a></td>
                   </tr> `;
                   count++;
  }
  content = content + end;
  document.querySelector("#cartdata").innerHTML = content;

}
displayCartItems();

// deleting elements in cart
function deleteCartData(index){
  var arr=JSON.parse(localStorage.getItem("cartElements"));
  arr.splice((index-1),1);
  console.log(arr[index-1]);
  localStorage.setItem("cartElements",JSON.stringify(arr));
  cartItems();
  }
  cartItems();

