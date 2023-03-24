var cityInputEl = document.getElementById("city-input");
var searchBtnEl = document.getElementById("search-btn");
var apiKey = "dedbff639ecca872d98341b397686bae";
var fiveDayTemp = document.getElementsByClassName("fiveDay-temp");
var fiveDayHumid = document.getElementsByClassName("fiveDay-humid");
var fiveDayWind = document.getElementsByClassName("fiveDay-wind");

function getApi(event) {
  console.log("hello");
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
      console.log(data);

      for (var i = 0; i < fiveDayTemp.length; i++) {
        var fiveDay = fiveDayTemp[i] 
       
        for (var i = 0; i < data.list.length; i+=8) {
        fiveDay.textContent = data.list[i].main.temp}


          //Distribute(fiveDayTemp.item(i))
       
       
       
       
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
}

//getApi()

searchBtnEl.addEventListener("click", getApi);
