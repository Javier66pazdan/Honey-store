/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line no-undef
const remove = document.querySelector('.remove');

remove.addEventListener('click', async function () {
  const { id } = this.dataset;
  console.log(id);
  // eslint-disable-next-line no-undef
  await fetch(`/basket/${id}`, {
    method: 'DELETE',
  });
});
