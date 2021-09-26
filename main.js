import countrySelectMenu from "./selectMenu.js";
let allCountries = getAllCountries();
countrySelectMenu(allCountries);

const countrySelect = document.getElementById("countrySelect");
countrySelect.addEventListener("change", (e) => {
  e.preventDefault();
  const cityName = countrySelect.options[countrySelect.selectedIndex].text;
  const cityNameContainer = document.getElementById("cityName");
  cityNameContainer.innerText = `${cityName} Current Weather`;

  const countryKey = e.target.value;
  const currenConditionFetchUrl = `http://dataservice.accuweather.com/currentconditions/v1/${countryKey}?apikey=7Fy7Eq6xE3sP2EsEGPBSED4orwp227GW`;
  fetchData(currenConditionFetchUrl);
});

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  prepareWeatherCard(data);
}

function prepareWeatherCard(data) {
  const deg = document.getElementById("deg");
  deg.innerText = data[0].Temperature.Metric.Value;

  const weatherText = document.getElementById("weatherText");
  weatherText.innerText = data[0].WeatherText;

  const icon = document.getElementById("icon");
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${(
    data[0].WeatherIcon + ""
  ).padStart(2, "0")}-s.png`;
  icon.src = iconUrl;
}
