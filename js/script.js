let weatherAPIKey = 'eccde04f4cfb27bcc9d5b7f2f010833d';
let weatherBasEndpoint = 'https://api.openweathermap.org/data/2.5/weather?appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBasEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();

    console.log(weather);
}

getWeatherByCityName('New York');