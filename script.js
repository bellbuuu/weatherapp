const inputbox=document.querySelector('.inputbox');
const weatherbody=document.querySelector('.weatherbody');
const searchbutton=document.getElementById('searchbutton');
const weatherimg=document.querySelector('.weatherimg');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const windspeed=document.getElementById('windspeed');

const notfound=document.querySelector('.notfound');

async function checkweather(city){
    
    try {
        const apikey="b1efd0218901ffe175d65514db3f7b22";
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
         const data=await fetch(`${url}`).then(response => response.json());

    //console.log(data);
    weatherbody.style.display="contents";
    notfound.style.display="none";
    temperature.innerHTML=`${Math.round(data.main.temp -273.15)} °C`;
    description.innerHTML=`${data.weather[0].description}`;
    humidity.innerHTML=`${data.main.humidity}%`;
    windspeed.innerHTML=`${data.wind.speed} km/hr`;
    
    switch(data.weather[0].main){
        case 'Clouds':
            weatherimg.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png";
            break;
        case 'Clear':
            weatherimg.src="https://cdn-icons-png.flaticon.com/512/831/831682.png";
            break;
        case 'Rain':
            weatherimg.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png";
            break;
        case 'Mist':
            weatherimg.src="https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Night_Fog_Humidity_Smog_Mist_Cloud_Apple_Flat_iOS_Weather-512.png";
            break;
        case 'Haze':
            weatherimg.src="https://cdn3.iconfinder.com/data/icons/weather-ios-11-1/50/Night_Fog_Humidity_Smog_Mist_Cloud_Apple_Flat_iOS_Weather-512.png";
            break;
        case 'Snow':
            weatherimg.src="https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg";
            break;
    
    }

} catch (error) {
        weatherbody.style.display="none";
        notfound.style.display="contents";
        
    }


}
searchbutton.addEventListener('click', () => {
    checkweather(inputbox.value);
  });
  