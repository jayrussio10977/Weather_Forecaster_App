var cityInputEl = document.getElementById("city-input")
var searchBtnEl = document.getElementById("search-btn") 

function getApi(event) {
    console.log("hello")
    event.preventDefault()   // fetch request gets a list of all the repos for the node.js organization
    var cityInput =  cityInputEl.value
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput +'&limit=5&appid=dedbff639ecca872d98341b397686bae';
    console.log(cityInput)
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    
        var lat = data[0].lat
        console.log(lat)

        var lon = data[0].lon
        console.log(lon)

        getWeather(lat,lon)
      });
    }


    function getWeather(lat,lon) {

        fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
       .then(function (data) {
        console.log(data)
    

    })

      }



    //getApi()

searchBtnEl.addEventListener("click", getApi)