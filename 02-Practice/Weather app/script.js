const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const cityName = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const loading = document.querySelector('#loading');
const error = document.querySelector('#error');
const weatherIcon = document.querySelector('#weather-icon');
const searchBtn = document.querySelector('#search-btn')

function clearWeatherData() {
    cityName.textContent = "";
    temperature.textContent = "";
    description.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
}

weatherForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        error.textContent = "Please enter a city name";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=b1e154b4a0bb43a7b9d115759262202&q=${city}&aqi=no`;

    try {
        loading.classList.remove("hidden");
        searchBtn.disabled = true;
        error.textContent = "";
        clearWeatherData();

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "City not found");
        }

        cityName.textContent = data.location.name;
        temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
        description.textContent = `Condition: ${data.current.condition.text}`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        wind.textContent = `Wind: ${data.current.wind_kph} kph`;
        weatherIcon.src = data.current.condition.icon;

        cityInput.value = "";

    } catch (err) {
        error.textContent = err.message;
    } finally {
        loading.classList.add("hidden");
        searchBtn.disabled = false;
    }
});