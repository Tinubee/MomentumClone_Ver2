const API_KEY = Global.WEATHER_API_KEY;
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather .weather__text");
const weather2 = document.querySelector(".js-weathericon");

function getWeather(coords) {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${coords.lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const name = json.name;
      const temperature = json.main.temp;
      weather.innerHTML = `${Math.floor(temperature)}° @ ${name}`;
      weatherIconSet(json.weather[0].description);
    });
}

function weatherIconSet(description) {
  const icon = document.createElement("div");
  icon.className = "icon";
  if (description === "haze") {
  } else if (description === "haze") {
  }
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng,
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();
