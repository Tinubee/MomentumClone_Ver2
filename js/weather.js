//cda1454b585bcb33d89d7c4cc9d0f41f
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const WEATHER_API_KEY = "cda1454b585bcb33d89d7c4cc9d0f41f";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = data.main.temp.toFixed(1);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
  /* promise : 당장 실행하지 않고 시간이 좀 걸린 뒤에 실행.(서버 응답 시간)
     .then()사용해야함 */
}

function onGeoError() {
  alert("Can't get your location");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
