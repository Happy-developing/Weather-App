//selector
const input = document.querySelector('.cityName');
const city = document.querySelector('.displayCity');
const main = document.querySelector('.mainWeather');
const temp = document.querySelector('.temp-data');
const fellLikeTemp = document.querySelector('.feelsLike-data');
const windSpeed = document.querySelector('.windSpeed-data');
const submit = document.querySelector('.submit');

//event listener 
submit.addEventListener("click",getValue);

//functions
function getWeather(city){
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=kelvin`;
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data =>{
      console.log(data);
      showWeatherData(data)
    }).catch((error)=>{
      console.log(error);
      console.log('something happened')
    })
}

function getValue(){
  const city = input.value;
  getWeather(city);
}

function showWeatherData(weatherData){
  console.log(weatherData.cod);
  if (weatherData.cod===200){
    city.innerText = weatherData.name;
    main.innerText = weatherData.weather[0].main;
    temp.innerText = Math.floor(weatherData.main.temp - 273);
    fellLikeTemp.innerText = Math.floor(weatherData.main.feels_like - 273);
    windSpeed.innerText =weatherData.wind.speed;
  }else{
    city.innerText="City not found";
    main.innerText = '---';
    temp.innerText = '--';
    fellLikeTemp.innerText = '--';
    windSpeed.innerText ='--';
  }
 
  // minTemp.innerText = weatherData.name;
 //windSpeed.innerText = ;


}


