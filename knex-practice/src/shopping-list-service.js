'use strict';
require('dotenv').config();

const shoppingItems = {

  // get all articles
  getShoppingItems(db) {
    db.select('*')
      .from('shopping_list')
      .then(res => {
        return res;
      });
  },

  getById(db, id) {
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

  insertShoppingItem(db) {
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

  updateShoppingItem(db, id) {
    db.select('*')
      .from('shopping_list')
      .where({id: id})
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

  deleteShoppingItem(db, id) {
    db.select('*')
      .from('shopping_list')
      .where({ id: id })
      .del('*')
      .return('shopping_list');  
  }

};

module.exports = shoppingItems;