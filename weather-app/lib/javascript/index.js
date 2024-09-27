const apiKey = "c1f3385e185374ec2ce3e46800dba6a3";
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherResult = document.getElementById("weather-result");

// Displaying the weather data
const displayWeatherData = (data) => {
  const city = data.name;
  const country = data.sys.country;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherResult.innerHTML = `
      <h2>${city}, ${country}</h2>
      <h3>${description}</h3>
      <P>Temperature: ${temp}°C</P>
      <P>Humidity: ${humidity}%</P>
      <P>Wind Speed: ${windSpeed} m/s</P>
  `;
};

const showError = (message) => {
  weatherResult.innerHTML = `<P>${message}</P>`;
};

const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      showError("city not found. Please ener a valid city name");
      return;
    }
    displayWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};
getWeatherBtn.addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    getWeatherData(city);
  } else {
    alert("Please enter a city name.");
  }
});
