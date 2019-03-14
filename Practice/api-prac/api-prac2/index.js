/* eslint-disable no-undef */
'use strict';

function getRandomDogBreed() {
  fetch('https://dog.ceo/api/breed/hound/images/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
      .catch(error => console.log(error.code));
}

function handleSubmit() {
  $('.js-form').submit((event) => {
    event.preventDefault();
    console.log('submit clicked');
  });
  console.log('submit ready');
}