/* eslint-disable no-undef,no-underscore-dangle,no-useless-return */
const { JARS } = require('../data/honey-jars');
const { Product } = require('./Product');

class Basket {
  constructor() {
    // this.basket = [{ id: 1, quantity: 2 }, { id: 3, quantity: 3 }];
    if (typeof window !== 'undefined') {
      this.basket = JSON.parse(localStorage.getItem('basket')) || [];
    } else {
      this.basket = [];
    }
  }

  _save() {
    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  _load() {
    JSON.parse(localStorage.getItem('basket'));
  }

  getBasket() {
    return this.basket;
  }

  add(id, quantity = 1) {
    // this.basket.forEach((product) => {
    //   if (product.id === id) {
    //     // eslint-disable-next-line no-param-reassign
    //     product.quantity += quantity;
    //     return;
    //   }
    // });
    const isProduct = this.basket.find((product) => product.id === Number(id));
    if (isProduct) {
      isProduct.quantity += Number(quantity);
    } else {
      this.basket.push(new Product(
        Number(id),
        Number(quantity),
      ));
    }
    // this._save();
    // console.log(this.basket);
  }

  update(id, quantity = 1) {
    const product = this.basket.find((obj) => obj.id === Number(id));
    product.quantity = Number(quantity);
    console.log(this.basket);
  }

  getAll() {
    const jarsInBasket = [];
    this.basket.forEach((obj) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const [, singleJar] of Object.entries(JARS)) {
        if (singleJar.id === Number(obj.id)) {
          jarsInBasket.push({
            quantity: obj.quantity,
            ...singleJar,
          });
        }
      }
    });
    return jarsInBasket;
  }

  delete(id) {
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
        if (singleJar.id === Number(obj.id)) {
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
