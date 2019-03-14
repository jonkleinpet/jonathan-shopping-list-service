'use strict';

const express = require('express');
const router = express.Router();
const MOVIES = require('../movies.json');

function getMovies(req, res) {
  let results = MOVIES;
  const { search = '', searchType = 'film_title' } = req.params;

  if (search) {
    if (!['genre', 'country', 'avg_vote', 'film_title'].includes(searchType)) {
      return res.status(401).send('invalid search type');
    }

    if
  }
  
  res.send(results);
}

router.route('/movies').get((getMovies));

module.exports = router;