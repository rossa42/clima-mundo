const axios = require('axios');
const https = require('https');;


const getClima = async(lat, long) => {

    const instance = axios.create({
        baseURL: 'http://api.openweathermap.org',
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const response = await instance.get('/data/2.5/weather', {
            params: {
                lat: lat,
                lon: long,
                units: 'metric',
                appid: '32f843d833c38373032f825c4a92418a'
            }
        })
        // .then(response => console.log(response.data.Results[0]))
        //.catch(error => console.log(error));

    if (response.data.main.temp.length === 0) {
        throw new Error(`No hay resultados para  ${direccion}`);
    }


    const data = response.data;
    return response.data.main.temp
        /* const data = response.data.Results[0];
         const dir = data.name;
         const latitud = data.lat;
         const longitud = data.lon;
         /* return {
              response.data
          }*/

}

module.exports = {
    getClima
}