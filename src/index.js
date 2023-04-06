// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let priceNumericValue = Number(price.innerText);
  let subTotal = priceNumericValue * quantity.value
  product.querySelector('.subtotal span').innerText = subTotal
}

function calculateAll() {

  document.querySelectorAll('.product').forEach((currentProduct) => {
  updateSubtotal(currentProduct);
});


let totalCount = 0
document.querySelectorAll('.subtotal span').forEach((currentProduct) => {
  totalCount += Number(currentProduct.innerText)
});

console.log(totalCount)

document.querySelector('#total-value span').innerText = totalCount
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  (target.parentElement.parentElement).remove()
 
}

// ITERATION 5

function createProduct() {
  console.log("create button is pressed")
  const newProduct = document.createElement("tr")
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((currentButton) => {
    currentButton.addEventListener('click', removeProduct);
  } )

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
