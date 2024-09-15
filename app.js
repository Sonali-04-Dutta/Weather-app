const apikey = "01745e4e67751950da25898b60daa678";
const apiName= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
   const response = await fetch(apiName + city + `&appid=${apikey}`) ;
   let data = await response.json();
   console.log(data);


//update the city
let updateCity = document.querySelector(".city");
updateCity.innerHTML=data.name;

//update the temparature 
let updateTemp = document.querySelector(".temp");
updateTemp.innerHTML= Math.round(data.main.temp) + "°C";
//update the humidity
let updateHumidity = document.querySelector(".humidity");
updateHumidity.innerHTML=data.main.humidity + "%";
// Update the wind
let updateWind = document.querySelector(".wind");
updateWind.innerHTML=data.wind.speed + "km/h";
let condition = document.querySelector(".condition");
condition.innerHTML=data.weather[0].main;



if(data.weather[0].main == "Clouds"){
    weatherImg.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3177bB1vPxSGFR4duZ5G42PixKrRsS_9fPQ&s";
}
else if(data.weather[0].main == "Clear"){
    weatherImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nKGrcFaMFgu3GOv25wsf2Ul34UjybeyfFA&s";
}
else if(data.weather[0].main == "Rain"){
    weatherImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iVP31cZf9_BzIVfgTQIRwq6atSjA1TJBlw&s";
}
else if(data.weather[0].main == "Drizzle"){
    weatherImg.src="https://png.pngtree.com/png-vector/20210128/ourlarge/pngtree-thunderstorm-rainy-weather-png-image_2849609.jpg";
}
else if(data.weather[0].main == "Mist"){
    weatherImg.src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
}
else if(data.weather[0].main == "Haze"){
    weatherImg.src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
}
    }
   


searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


