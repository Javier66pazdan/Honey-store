function getBasketFromReq(req) {
  const { basket } = req.cookies;
  return basket ? JSON.parse(basket) : [];
}

module.exports = {
  getBasketFromReq,
};
