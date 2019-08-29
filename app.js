const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv



const getInfo = async(direccion) => {
    try {
        let localizacion = await lugar.getLugarLatLng(argv.direccion);
        let temperatura = await clima.getClima(localizacion.latitud, localizacion.longitud)
        return `El clima de ${argv.direccion} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar El clima de ${argv.direccion}`;

    }


}

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log(error));