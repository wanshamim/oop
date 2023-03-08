const apiKey = '9fd7a449d055dba26a982a3220f32aa2';

const cityDropdown = document.getElementById('city-dropdown');
const weatherInfo = document.getElementById('weather-info');

cityDropdown.addEventListener('change', () => {
  const city = cityDropdown.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const weatherIconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;

      weatherInfo.innerHTML = `
        <img src="${weatherIconUrl}" alt="${weatherDescription}" />
        <p>current temperature: ${temperature} &deg;C</p>
        <p>${weatherDescription}</p>
        <p>minimum temperature: ${minTemp}°C</p>
        <p>maximum temperature: ${maxTemp}°C</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      console.error(error);
    });
});
