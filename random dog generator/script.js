'use strict';

function inputListener() {
  $('#dog-form').on('submit', function(event) {
    $('.dog-image').empty();
    event.preventDefault();
    let dogInput = $('#dog-input').val();
    getInput(dogInput);
  });
}

function getInput(dogInput) {
    if (dogInput.length === 0) {
      let userInput = 3;
      pullDogImages(userInput);
      } else if (dogInput > 50) {
      alert('Number less then 50 needed');
      } else if (dogInput < 1 ) {
      alert('Number needed');
      } else {
      let userInput = dogInput;
      pullDogImages(userInput);
    }
  }

function pullDogImages(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => showDogs(responseJson))
    .catch(error => alert('There was an error'));
}

function showDogs(dogImages) {
    for (var i = 0; i < dogImages.message.length; i++) {
      $('.dog-image').append(`<img src="${dogImages.message[i]}">`);
    };
}

$(function() {
  inputListener();
}
);