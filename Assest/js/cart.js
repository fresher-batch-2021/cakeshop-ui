


function displayCartItems() {
  console.log("displayCartItems");
let cartItem=JSON.parse(localStorage.getItem("cartElements"));
// alert(cartItem);
console.log(cartItem);
  let content = `<table>
  <thead>
<tr>
    <th class="cakeNo">Cake.No</th>
    <th class="cakeDesign">CakeDesign</th>
    <th class="cakePrice">cakePrice</th>
    <th class="cakeQuantity">CakeQuantity</th>
    <th class="total">Total Amount</th>
    <th class="delete">Delete</th>
    
</tr>

    
</thead><tbody>`;
  let end = ` </tbody></table>`;
  console.log(displayCartItems);
var count=1;
let sum=0;
let total=0;
  for (let item of cartItem) {
    total=item.Quantity*item.price;
    content = content + `
                  <tr>
                  <td>${count}</td>
                     
                     <td>${item.name}</td>
                     <td>${item.price}</td>
                     <td>${item.Quantity}</td>
                     <td>${item.Quantity*item.price}</td>
                     <td><a onclick="deleteCartData(${count-1})">delete</a></td>
                     
                   </tr>
                   `;
                  
sum=sum+total;              
count++;
  }
  localStorage.setItem("TOTAL_BILL_AMOUNT", sum);
  
  content += end;
  
  document.querySelector("#cartData").innerHTML = content;



}

// Deleting elements in cart
function deleteCartData(index){
  var arr=JSON.parse(localStorage.getItem("cartElements"));//store the value in localstorage changed into json obj and store it in arr
  if (arr[index].Quantity>1)
   {
      arr[index].Quantity--;
  }
  else{
    arr.splice(index,1);
  }
  console.log(arr[index]);
  localStorage.setItem("cartElements",JSON.stringify(arr));
  displayCartItems();
  }

  function cartcheck()
  {
    let cartItem=JSON.parse(localStorage.getItem("cartElements"));
    if (cartItem==null||cartItem=="")
     {
      alert("cart is empty");
      window.location.href="occasions.html";
    } else 
    {
      window.location.href="ordernow.html";
    }
  }
  displayCartItems();

