'use strict';

const BookmarksService = {

  getAllBookmarks(knex) {
    return knex
      .select('*')
      .from('test_bookmarks');
  },

  getById(knex, id) {
    return knex
      .select('*')
      .from('test_bookmarks')
      .where({ id })
      .first();
  },

  addItem(knex, item){
    return knex
      .insert(item)
      .into('test_bookmarks')
      .returning('*')
      .then(rows => rows[0]);
  },

  deleteItem(knex, id){
    return knex
      .select('*')
      .from('test_bookmarks')
      .where({ id })
      .delete();
  },

  updateItem(knex, item, id) {
    return knex
      .select('*')
      .from('test_bookmarks')
      .where({ id })
      .update({
        title: item.title,
        url: item.url,
        description: item.description,
        rating: item.rating
      }, ['title', 'url', 'description', 'rating']);
  }

};

module.exports = BookmarksService;
