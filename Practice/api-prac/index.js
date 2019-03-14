/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

function getDogApi(input) {
  // eslint-disable-next-line quotes
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(responseJson => console.log(message.status))
    .catch(error => alert(Response.status));
  
}

function breedInput() {
  let input = $('.js-text').val();
  return input;
}

function handleSubmit() {
  $('.js-form').submit((event) => {
    event.preventDefault();
    let input = breedInput();
    getDogApi(input);
    console.log('click');

  });
}


function generateJsonString(responseJson) {
  let string = '';
  /*for (let i = 0; i < responseJson.message.length; i++) {*/
    string += `<img src="${responseJson.message}" class="js-results-img">`;
  /*}
  console.log(string);*/
  return string;
  
}

function displayResults(responseJson) {
  const jsonString = generateJsonString(responseJson);
  $('.results').html(jsonString);
  $('.results').removeClass('hidden');
}

$(function() {
  console.log('loaded and waiting for input');
  handleSubmit();
});
