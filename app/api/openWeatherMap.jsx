var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=89e26827b289d34bd62b6e60666ce777&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.response.data.message);
    });
  }
}
