function fetchImages(query, showCallBack) {
   fetch(`https://dog.ceo/api/breed/${query}/images/random`)
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson)
    return responseJson
  }) 
  .then(responseJson => showCallBack(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function showResults(responseJson) {
  $('.results').removeClass('hidden');
  if (responseJson.status == 'error') {
    $('.results-img').replaceWith(
    `<br/>
    <img class="results-img" alt = 'Dog Breed not found, try again'>`
   )
  }
  else if (responseJson.status == 'success') {
    $('.results-img').replaceWith(
    `<br/>
    <img src="${responseJson.message}" class="results-img">`
    )
  }
}

function eventListener() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let eventTarget = $(event.currentTarget).find('.js-query');
    let myQuery = eventTarget.val();
    fetchImages(myQuery, showResults);
  });
}


$(function() {
  console.log('App working. Listening for input');
  eventListener();
}); 



