'use strict';
require('dotenv').config();
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

const shoppingItems = {

  // get all articles
  getShoppingItem() {
    db.select('*')
      .from('shopping_list')
      .then(res => {
        console.log(res);
      });
  },

  getById(id) {
    db.from('shopping_list')
      .select('*')
      .where('id', id)
      .first()
      .then(res => {
        return res;
      });
  },

  getShoppingItemById(id) {
    const shoppingItem = this.getById(id);
    return shoppingItem;
  },

  insertShoppingItem() {
    db.select('*')
      .from('shopping_list')
      .insert({
        id: 33,
        name: 'steak',
        price: 14.00,
        date_added: new Date(),
        checked: false,
        category: 'Main'
      }, '*')
      .into('shopping_list')
      .return('shopping_list');
  },

  updateShoppingItem(id) {
    db.select('*')
      .from('shopping_list')
      .where({ id: id })
      .update({
        id: id,
        name: 'steak',
        price: 14.00,
        date_added: new Date(),
        checked: false,
        category: 'Main'
      }, ['id', 'name', 'price', 'date_added', 'checked', 'category'])
      .return('shopping_list');
  },

  deleteShoppingItem(id) {
    db.select('*')
      .from('shopping_list')
      .where({ id: id })
      .del('*')
      .return('shopping_list');
  }
};


/* shoppingItems.getShoppingItemById(2);
shoppingItems.updateShoppingItem('2');
shoppingItems.deleteShoppingItem('1');
shoppingItems.getShoppingItem();
shoppingItems.insertShoppingItem('2');
 */
module.exports = shoppingItems;