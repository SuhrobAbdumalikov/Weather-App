const userBtn = document.querySelector("#userBtn");
const weatherIcon = document.querySelector("#weatherImg");
const tempText = document.querySelector("#tempText");
const cityName = document.querySelector("#cityName");
const humidityText = document.querySelector("#humidityText");
const windText = document.querySelector("#windText");
const ChangeLocation = document.querySelector("#ChangeLocation");
const wetherCondition = document.querySelector("#wetherCondition");

ChangeLocation.city.focus();

//====>> get Weather Api
const getWeather = async (city) => {
  const APiData = await getData(city);
  return APiData;
};

//===>> get location
ChangeLocation.addEventListener("submit", (el) => {
  el.preventDefault();
  const enterName = ChangeLocation.city.value.trim();
  ChangeLocation.reset();
   getWeather(enterName)
    .then((data) => {
      console.log(data);
      wetherCondition.textContent = `${data.weather[0].main}`;
      tempText.textContent = `${Math.round(data.main.temp)}`;
      cityName.textContent = `${data.name},${data.sys.country}`;
      humidityText.textContent = `${data.main.humidity}%`;
      windText.textContent = `${data.wind.speed}kn/h`;

      if(wetherCondition.textContent == `${(data.weather[0].main = "Clouds")}`) {
        weatherIcon.src = '../images/clouds.png'
      }else if(wetherCondition.textContent == `${(data.weather[0].main = "Clear")}`) {
       weatherIcon.src = '../images/clear.png'
     }else if(wetherCondition.textContent == `${data.weather[0].main = "Rain"}`) {
          weatherIcon.src = '../images/rain.png'
     }else if(wetherCondition.textContent == `${data.weather[0].main = "Drizzle"}`) {
          weatherIcon.src = '../images/drizzle.png'
     }else if(wetherCondition.textContent == `${data.weather[0].main = "Mist"}`) {
          weatherIcon.src = '../images/mist.png'
     }

    })
    .catch((err) => {
      tempText.textContent = `0`;
      cityName.textContent = `Error!`;
      humidityText.textContent = `0%`;
      windText.textContent = `0km/h`;
      wetherCondition.textContent = `Nothing`;
    });
});

//====> user btn click
userBtn.addEventListener("click", () => {
    const enterName = ChangeLocation.city.value.trim();
     getWeather(enterName);
  });
