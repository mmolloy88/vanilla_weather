var mykey = config.API_KEY;

document
  .getElementById("weather-search")
  .addEventListener("submit", weatherRequest);

async function weatherRequest(event) {
  event.preventDefault();

  // getting the data from the form in HTML
  const city = document.querySelector('input[name="city"]').value;

  // hitting the API for the relevant data linked to form inputs
  // (city is the cities name - mykey is hitting my private API key)
  const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${mykey}`;

  // fetching the data if it exists - waiting if the data is not returned right away
  const response = await fetch(urlString);

  // waiting to return the data as javascript object notation
  const data = await response.json();

  // console logging the JSON information
  console.log(data);

  // JSON returning an array with kelvin temperature data - converting to celcius
  const readableTemp = data.main.temp - 273.15;

  document.querySelector(
    "#weather-result"
  ).innerText = `The weather in ${city} is currently`;
  document.getElementById(
    "temperature-number"
  ).innerText = `${readableTemp.toFixed(1)}°C`;
}
