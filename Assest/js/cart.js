// alert("hello");

function displayCartItems() {
  let cartitem = [{ cakeno: 1, cakedesign: "fondant", cakeprice: 100, cakequantity: 1 },
  { cakeno: 1, cakedesign: "fondant", cakeprice: 100, cakequantity: 1 },
  { cakeno: 1, cakedesign: "fondant", cakeprice: 100, cakequantity: 1 }];

  let content = `<table>

<caption>cart Table</caption>
<tr>
    <th class="cakeno">Cake.no</th>
    <th class="cakedesign">Cakedesign</th>
    <th class="cakeprice">cakeprice</th>
    <th class="cakequantity">Cakequantity</th>
</tr>`;
  let end = `</table>`;

  for (let item of cartitem) {
    content = content + `
                  <tr>
                     <td>${item.cakeno}</td>
                     <td>${item.cakedesign}</td>
                     <td>${item.cakeprice}</td>
                     <td>${item.cakequantity}</td>
                   </tr> `
  }
  content = content + end;
  document.querySelector("#cartdata").innerHTML = content;

}
displayCartItems();


