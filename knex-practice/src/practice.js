'use strict';
const app = require('./app');
require('dotenv').config();
const knexFn = require('knex');

const knex = knexFn({
  client: 'pg',
  connection: process.env.DB_URL,
  pool: { min: 0, max: 3 }
});

knex('amazong_products')
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({ name: 'Point of view gun' })
  .then(result => {
    console.log(result);
  });

console.log('connection sucessful');