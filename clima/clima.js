const axios = require('axios');

const key = 'e39e11cdf521a2f059cb5194ee88c7d6';

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}