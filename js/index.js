// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price=parseFloat(product.querySelector('.price span').innerHTML);  
  let quantity=parseFloat(product.querySelector('.quantity input').value);
  let subtotal=price*quantity;

  product.querySelector('.subtotal span').innerHTML=subtotal;
  
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total=0;
  let allProducts=document.getElementsByClassName('product');
  for (let i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i]);
    total=total+updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent=total;
}
// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget.parentNode.parentNode.rowIndex;
  document.getElementById('cart').deleteRow(target);
  calculateAll();

  
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here

let productName=document.getElementById('newProductName').value;
let productPrice=document.getElementById('newProductPrice').value;
let container=document.querySelector('tbody');

container.innerHTML=container.innerHTML + `
  <tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
`;
removeBtn=document.getElementsByClassName('btn-remove');

for (let i=0;i<removeBtn.length;i++){
  removeBtn[i].addEventListener('click',removeProduct);
}


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtn=document.getElementsByClassName('btn-remove');

  for (let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener('click',removeProduct);
  }
  
  let addBtn = document.getElementById('create');
  addBtn.addEventListener('click', createProduct);

  //... your code goes here
});
