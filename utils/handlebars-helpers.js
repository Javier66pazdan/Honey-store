const handlebarsHelpers = {
  setValue: (value) => (typeof value !== 'undefined' ? value : ''),
  // eslint-disable-next-line no-undef,camelcase
};

module.exports = {
  handlebarsHelpers,
};
