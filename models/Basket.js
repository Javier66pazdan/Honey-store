const { JARS } = require('../data/honey-jars');
const { Product } = require('./Product');

class Basket {
  constructor() {
    this.basket = [{ id: 1, quantity: 2 }, { id: 3, quantity: 3 }];
  }

  add(id, quantity = 1) {
    this.basket.push(new Product(
      id,
      quantity,
    ));
  }

  getAll() {
    const jarsInBasket = [];
    this.basket.forEach((obj) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const [, singleJar] of Object.entries(JARS)) {
        if (singleJar.id === obj.id) {
          jarsInBasket.push({
            quantity: obj.quantity,
            ...singleJar,
          });
        }
      }
    });
    return jarsInBasket;
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
