const axios = require('axios');
const https = require('https');;


const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com',
        headers: { 'X-RapidAPI-Key': '0a9b3e3b8amshb1525e6bfdb469ep1cc41bjsndfd14416e96c' },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const response = await instance.get('/latlon.php?location=' + encodedURL)
        // .then(response => console.log(response.data.Results[0]))
        //.catch(error => console.log(error));
    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para  ${direccion}`);
    }

    const data = response.data.Results[0];
    const dir = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    return {
        dir,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLng
}