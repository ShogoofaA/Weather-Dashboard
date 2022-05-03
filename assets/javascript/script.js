const searchbtn = document.querySelector('.search');

let city;
let bigImage = document.querySelector('.current');
let car1 = document.querySelector('.card1');
let car2 = document.querySelector('.card2');
let car3 = document.querySelector('.card3');
let car4 = document.querySelector('.card4');
let search = document.querySelector('.searchbar')

searchbtn.addEventListener('click', userInput);



function getWeather(city) {
  const APIKey = "2231a6f6c3cef8d0af3d2065fdecbd17";
  let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  console.log(queryURL)
  console.log(city)
  fetch(queryURL)
    .then(function(response) {
      if (response.ok) {
        
        response.json().then(function(data) {
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Network Error");
  });
}

function userInput(event) {
  city = search.value;
  getWeather(city);
}