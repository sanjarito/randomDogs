'use strict';
const getRandomDogs_url = 'https://dog.ceo/api/breeds/image/random/3'
const getRandomDog_url = 'https://dog.ceo/api/breeds/image/random'

function getDogImages(numberDogs) {
  let completeUrl = getRandomDog_url+`/${numberDogs}`
  // console.log(completeUrl)
  fetch(completeUrl)
    .then(function(response) {
      let answer = response.json()
      return answer
    .then(function(answer){
      let imagesArray = answer.message
      createHtmlElements(imagesArray)
    })
    })
}

function watchforDogs(){
  $('.submit-Api').on('click', function(){
    event.preventDefault();
    $('.images-container').empty()
    let numberValue = $('#number').val()
    if (numberValue == 0 || numberValue == null){
      numberValue = 3
      getDogImages(numberValue)
    } else {
      getDogImages(numberValue)
    }
    })
  }


function createHtmlElements(imagesArray){
  for (let i = 0; i < imagesArray.length; i++){
    let stringer = `<img src="${imagesArray[i]}">`
    $('.images-container').append(stringer)
  }
}



// CODE ON ASSIGNMENT 3 BRANCH
function getsingleDog(breed){
  const breedUrl = `https://dog.ceo/api/breed/${breed}/images/random`
  console.log(breedUrl)
  fetch(breedUrl)
    .then(function(response) {
      let answer = response.json()
      console.log(answer)
      return answer
      })
    .then(function(answer){
      let dogImageUrl= answer.message
      createHtmlElement(dogImageUrl)
    })
    .catch(error => console.log(error));
}

function createHtmlElement(dogImageUrl){
    let stringer = `<img src="${dogImageUrl}">`

    $('.single-image-container').append(stringer)
  }


function watchforDog(){
  $('.submit-breed').on('click', function(){
    event.preventDefault();
    $('.images-container').empty()
    let breedValue = $('#breed').val()
    getsingleDog(breedValue)
    })
  }


function startapp(){
  console.log('start app working')
  watchforDogs();
  watchforDog();
};
startapp();
