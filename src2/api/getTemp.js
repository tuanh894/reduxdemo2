const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=bd73bb7c34125e4178da3c28ca619418&q='

function getTemp(cityName){
    return fetch(URL + cityName)
        .then(res => res.json())
        .then(resJSON => resJSON.list[0].main.temp)
}

export default getTemp;