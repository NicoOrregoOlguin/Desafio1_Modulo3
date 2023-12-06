
let quantity = 0;
const price = 400000; 

function updateQuantityDisplay() {
  const quantityElement = document.querySelector('.cantidad');
  const totalElement = document.querySelector('.valor-total');

  quantityElement.innerHTML = quantity;
  totalElement.innerHTML = calculateTotal(quantity, price);
}

function calculateTotal(quantity, price) {
  return quantity * price;
}

function incrementQuantity() {
  quantity++;
  updateQuantityDisplay();
}

function decrementQuantity() {
  if (quantity > 0) {
    quantity--;
    updateQuantityDisplay();
  }
}

document.querySelector('button').addEventListener('click', incrementQuantity);
document.querySelectorAll('button')[1].addEventListener('click', decrementQuantity);

window.addEventListener('load', updateQuantityDisplay);
