const API = "7a389b07aa4a8488b8a56d3e542a9138";

const iconEl = document.getElementById("icon");
const tempEl = document.getElementById("temperature");
const shaxarEl = document.getElementById("shaxar");

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${"Termiz"}&appid=${API}&units=metric`
)
  .then((res) => res.json())
  .then((data) => {
    const icon = data.weather[0].icon;
    const temp = data.main.temp;
    const location = data.name;

    iconEl.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    tempEl.textContent = `${temp} °C`;
    shaxarEl.textContent = `${location}`;
  });
