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
  console.log(total);

  

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
  console.log('hola');

  let trNew = document.createElement('td'); 
  trNew.appendChild(document.createTextNode('Hello world!'));
  let productsQuantity=document.getElementsByClassName('product');
  console.log(productsQuantity.length);
  console.log(typeof(productsQuantity));
  var table = document.getElementById("cart");
  var row = table.insertRow(productsQuantity.length+1);
  row.classList.add('product');
  var cell1 = row.insertCell(0);
  cell1.classList.add('name');
  var cell2 = row.insertCell(1);
  cell2.classList.add('price');
  var cell3 = row.insertCell(2);
  cell3.classList.add('quantity');
  var cell4 = row.insertCell(3);
  cell4.classList.add('subtotal');
  var cell5 = row.insertCell(4);
  cell5.classList.add('action');

  cell1.innerHTML = "NEW CELL1";

  cell2.innerHTML = "NEW CELL2";



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
