var cityInputEl = document.getElementById("city-input");
var searchBtnEl = document.getElementById("search-btn");
var apiKey = "dedbff639ecca872d98341b397686bae";
var fiveDayTemp = document.getElementsByClassName("fiveDay-temp");
var fiveDayHumid = document.getElementsByClassName("fiveDay-humid");
var fiveDayWind = document.getElementsByClassName("fiveDay-wind");
var  currentTemp = document.getElementById('temperature');
var currentHumid = document.getElementById('humidity');
var currentWind = document.getElementById('wind');
var currentUV = document.getElementById('uv-index');





function getApi(event) {
  event.preventDefault(); // fetch request gets a list of all the repos for the node.js organization
  var cityInput = cityInputEl.value;
  var requestUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityInput +
    "&limit=5&appid=" +
    apiKey;
  console.log(cityInput);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var lat = data[0].lat;
      console.log(lat);

      var lon = data[0].lon;
      console.log(lon);

      getWeather(lat, lon);
    });
}

function getWeather(lat, lon) {
  var requestWeather =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey;

  fetch(requestWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      for (var i = 0; i < fiveDayTemp.length; i++) {
        var temp = fiveDayTemp[i]; 
      
        var wind = fiveDayWind[i];
        var humid = fiveDayHumid[i];
        var currentDay = data.list[i*8];
        
        temp.textContent = currentDay.main.temp
      wind.textContent = currentDay.wind.speed
      humid.textContent = currentDay.main.humidity

    



        


      
       
       
       
       
        //Distribute(fiveDayTemp.item(i));
        // (fiveDayTemp[i].textContent = )
      }



      // for (var i = 0; i < fiveDayHumid.length; i += 8) {
      //   Distribute(fiveDayHumid.item(i));
      // }

      // for (var i = 0; i < fiveDayWind.length; i += 8) {
      //   Distribute(fiveDayWind.item(i));
      // }

      
    });

    var requestWeather2 = "https://api.openweathermap.org/data/2.5/weather?lat=" +  
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey;

    fetch(requestWeather2)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      currentTemp.textContent = data.main.temp
      currentHumid.textContent = data.main.humidity
      //currentUV.textContent = figure this out if it needs an api for the weather index
      currentWind.textContent = data.wind.speed 
    })



}

//getApi()

searchBtnEl.addEventListener("click", getApi);
