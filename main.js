'use strict';

const getRandomDogs_url = 'https://dog.ceo/api/breeds/image/random/3'
const getRandomDog_url = 'https://dog.ceo/api/breeds/image/random/'


function getDogImage(numberDogs) {
  let completeUrl = getRandomDog_url+`${numberDogs}`
  // console.log(completeUrl)
  fetch(completeUrl)
    .then(function(response) {
      let answer = response.json()
      return answer
    .then(function(answer){
      let imagesArray = answer.message
      createHtmlElement(imagesArray)
    })
    })
}
function watchforDog(){
  $('button').on('click', function(){
    event.preventDefault();
    $('.images-container').empty()
    let numberValue = $('#number').val()
    if (numberValue == 0 || numberValue == null){
      numberValue = 3
      getDogImage(numberValue)
    } else {
      getDogImage(numberValue)
    }
    })
  }

function createHtmlElement(imagesArray){
  for (let i = 0; i < imagesArray.length; i++){
    let stringer = `<img src="${imagesArray[i]}">`
    $('.images-container').append(stringer)
  }
}

function startapp(){
  console.log('start app working')
  watchforDog();
};
startapp();
