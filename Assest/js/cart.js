
function displayCartItems() {
let cartItem=JSON.parse(localStorage.getItem("cartElements"));

  let content = `<table>
  


<tr>
    <th class="cakeNo">Cake.No</th>
    <th class="cakeDesign">CakeDesign</th>
    <th class="cakePrice">cakePrice</th>
    <th class="cakeQuantity">CakeQuantity</th>
    <th class="delete">Delete</th>
</tr>`;
  let end = `</table>`;
  console.log(displayCartItems);
var count=0;
let sum=0;
let total=0;
  for (let item of cartItem) {
    total=item.Qty*item.price;
    content = content + `
                  <tr>
                  <td>${count}</td>
                     
                     <td>${item.name}</td>
                     <td>${item.price}</td>
                     <td>${item.Qty}</td>
                     <td><a onclick="deleteCartData(${count})">delete</a></td>
                   </tr> `;
  
sum=sum+total;              
count++;
  }
  
  content = content + end;
  
  document.querySelector("#cartdata").innerHTML = content;

}


// Deleting elements in cart
function deleteCartData(index){
  var arr=JSON.parse(localStorage.getItem("cartElements"));//store the value in localstorage changed into json obj and store it in arr
  if (arr[index].Qty>1)
   {
      arr[index].Qty--;
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
      window.location.href="occasionsz.html";
    } else 
    {
      window.location.href="ordernow.html";
    }
  }
  displayCartItems();

