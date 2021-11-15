/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line no-undef
const quantityInput = document.querySelector('.quantity');

quantityInput.addEventListener('change', async function () {
  const { id } = this.dataset;
  const quantity = {
    quantity: quantityInput.value,
  };
  // eslint-disable-next-line no-undef
  await fetch(`/basket/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(quantity),
  });
});
