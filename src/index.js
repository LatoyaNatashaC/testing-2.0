function search(event) {
  event.preventDefault();

  let textInput = document.querySelector(".search-input");
  let city = textInput.value;

  let h1 = document.querySelector("h1");
  if (textInput.value) {
    h1.innerHTML = `${textInput.value}`;
  } else {
    h1.innerHTML = null;
  }
  let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector(".current-temperature-value");
  displayTemperature.innerHTML = `${temperature}`;

  let displayCity = document.querySelector(".current-city");
  displayCity.innerHTML = response.data.city;
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", search);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");
let dayNight = now.getHours() < 12 ? "AM" : "PM";

let currentDate = document.querySelector("#currently");
currentDate.innerHTML = `${day} ${hours}:${minutes} ${dayNight}`;
