'use strict';

const express = require('express');
const bookmarksRouter = express.Router();
const logger = require('../logger');
const BookmarksService = require('./BookmarksService');
const bodyParser = express.json();
const xss = require('xss');
const uuid = require('uuid/v4');

bookmarksRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    BookmarksService.getAllBookmarks(knexInstance)
      .then(bookmarks => {
        res.json(bookmarks);
      })
      .catch(next);
  })

  .post(bodyParser, (req, res, next) => {
    const knexInstance = req.app.get('db');
    const { title, url, description, rating } = req.body;
    const newItem = {
      title,
      url,
      description,
      rating
    };

    BookmarksService
      .addItem(knexInstance, newItem)
      .then(bookmarks => {
        res.json(bookmarks);
      });  
  });

bookmarksRouter.route('/:id')
  .get((req, res, next) => {
    BookmarksService.getById(req.app.get('db'), req.params.id)
      .then(bookmark => {
        res.json({
          id: bookmark.id,
          title: xss(bookmark.title),
          url: xss(bookmark.url),
          description: xss(bookmark.description),
          rating: bookmark.rating
        });
      })
      .catch(next);
  })

  .delete((req, res, next) => {
    const itemId = req.params.id;
    BookmarksService.deleteItem(req.app.get('db'), itemId)
      .then(() => {
        res.status(201).end();
      })
      .catch(next);
  })

  .patch(bodyParser, (req, res, next) => {
    const { title, url, description, rating } = req.body;
    const update = {
      title,
      url,
      description,
      rating
    };

    BookmarksService.updateItem(req.app.get('db'), update, req.params.id)
      .then(update => {
        res.status(202);
        res.json(update);
      })
      .catch(next);
  });

module.exports = bookmarksRouter;
