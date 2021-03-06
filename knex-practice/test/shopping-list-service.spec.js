'use strict';
require('dotenv');
const shoppingService = require('../src/shopping-list-service');
const knex = require('knex');

describe('shopping list service object', function () {
  let db;
  const testList = [
    {
      id: 1,
      name: 'First test item!',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      price: '12.00',
      category: 'Main'
    },
    {
      id: 2,
      name: 'Second test item!',
      date_added: new Date('2100-05-22T16:28:32.615Z'),
      price: '21.00',
      category: 'Snack'
    },
    {
      id: 3,
      name: 'Third test item!',
      date_added: new Date('1919-12-22T16:28:32.615Z'),
      price: '3.00',
      category: 'Lunch'
    },
    {
      id: 4,
      name: 'Third test item!',
      date_added: new Date('1919-12-22T16:28:32.615Z'),
      price: '0.99',
      category: 'Breakfast'
    },
  ]

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => db('shopping_list').truncate())

  afterEach(() => db('shopping_list').truncate())

  after(() => db.destroy())

  context(`Given 'shopping_list' has data`, () => {
    beforeEach(() => {
      return db
        .into('shopping_list')
        .insert(testList)
    })

    it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
      const expectedItems = testList.map(item => ({
        ...item,
        checked: false,
      }))
      return shoppingService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql(expectedItems)
        })
    })

    it(`getById() resolves an article by id from 'shopping_list' table`, () => {
      const idToGet = 3
      const thirdItem = testList[idToGet - 1]
      return shoppingService.getById(db, idToGet)
        .then(actual => {
          expect(actual).to.eql({
            id: idToGet,
            name: thirdItem.name,
            date_added: thirdItem.date_added,
            price: thirdItem.price,
            category: thirdItem.category,
            checked: false,
          })
        })
    })

    it(`deleteItem() removes an article by id from 'shopping_list' table`, () => {
      const articleId = 3
      return shoppingService.deleteItem(db, articleId)
        .then(() => shoppingService.getAllItems(db))
        .then(allItems => {
          // copy the test items array without the removed article
          const expected = testList
            .filter(article => article.id !== articleId)
            .map(item => ({
              ...item,
              checked: false,
            }))
          expect(allItems).to.eql(expected)
        })
    })

    it(`updateItem() updates an article from the 'shopping_list' table`, () => {
      const idOfItemToUpdate = 3
      const newItemData = {
        name: 'updated title',
        price: '99.99',
        date_added: new Date(),
        checked: true,
      }
      const originalItem = testList[idOfItemToUpdate - 1]
      return shoppingService.updateItem(db, idOfItemToUpdate, newItemData)
        .then(() => shoppingService.getById(db, idOfItemToUpdate))
        .then(article => {
          expect(article).to.eql({
            id: idOfItemToUpdate,
            ...originalItem,
            ...newItemData,
          })
        })
    })
  })

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return shoppingService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([])
        })
    })

    it(`insertItem() inserts an article and resolves the article with an 'id'`, () => {
      const newItem = {
        name: 'Test new name name',
        price: '5.05',
        date_added: new Date('2020-01-01T00:00:00.000Z'),
        checked: true,
        category: 'Lunch',
      }
      return shoppingService.insertItem(db, newItem)
        .then(actual => {
          expect(actual).to.eql({
            id: 1,
            name: newItem.name,
            price: newItem.price,
            date_added: newItem.date_added,
            checked: newItem.checked,
            category: newItem.category,
          })
        })
    })
  })
});
