'use strict';

function inputListener() {
  $('#input-select').on('submit', function(event) {
    $('.image-results').empty();
    event.preventDefault();
    let myBreed = $('#dog-input').val();
    console.log(myBreed);
    pullDogImages(myBreed);
  });
}

function pullDogImages(pickBreed) {
  console.log(`This ${pickBreed} was passed to the pullDogImages`);
  fetch(`https://dog.ceo/api/breed/${pickBreed}/images/random`)
        .then(response => {
        console.log(response);
        return response.json();
      })
      .then(responseJSON => {
      if (responseJSON.status == "error") {
      console.log(responseJSON.status);
      return randomBreed();
      } else if (responseJSON.status == "success") {
        console.log(responseJSON.status);
        return showDogs(responseJSON);
        } else {
        alert("Dead end.");
        }
        })
        .catch(error => console.log(error));
}

function showDogs(responseJSON) {
    console.log("showDogs fired.");
    $('image-results').append(`<img src="${responseJSON.message}">`);
}

function randomBreed() {
  console.log("We made it to Other option.");
  fetch(`https://dog.ceo/api/breeds/image/random/1`)
    .then(response => response.json())
    .then(responseJson => {
         showOther(responseJson);
      })
    .catch(error => alert("Something went wrong"));
}

function showOther(responseJson) {
  $('.result-notes').html(`This breed is unavailable.`);
  return $('.image-results').append(`<img src="${responseJson.message}">`);
  }

$(function() {
  inputListener();
}
);