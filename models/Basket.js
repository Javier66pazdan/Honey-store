const { JARS } = require('../data/honey-jars');

class Basket {
  constructor() {
    this.basket = [{ id: 1, quantity: 2 }, { id: 3, quantity: 3 }];
  }

  add(product) {
    this.basket.push(product);
  }

  getAll() {
    return this.basket;
  }

  delete(id, quantity) {
    this.basket.splice(id, 1);
  }

  clearAll() {
    this.basket.length = 0;
  }

  summary() {
    let price = 0;
    this.basket.forEach((obj) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const [, singleJar] of Object.entries(JARS)) {
        if (singleJar.id === obj.id) {
          price += obj.quantity * singleJar.price;
        }
      }
    });
    return price.toFixed(2);
  }
}

const basket = new Basket();

module.exports = {
  basket,
};
