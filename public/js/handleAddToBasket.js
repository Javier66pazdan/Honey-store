/* eslint-disable no-undef,prefer-arrow-callback */
const quantityInput = document.querySelector('.product-quantity-input');
const orderBtn = document.querySelector('.order-btn');

orderBtn.addEventListener('click', async function () {
  if (quantityInput.value === '' || quantityInput.value <= 0) {
    console.log('złe liczby');
    // @TODO do poprawy walidacja
    return;
  }
  const data = {
    quantity: quantityInput.value,
    id: this.dataset.id,
  };
  await fetch('http://localhost:3000/basket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
});
