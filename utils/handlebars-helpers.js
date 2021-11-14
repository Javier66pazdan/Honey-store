const handlebarsHelpers = {
  setValue: (value) => (typeof value !== 'undefined' ? value : ''),
  priceify: (price) => price.toFixed(2),
};

module.exports = {
  handlebarsHelpers,
};
