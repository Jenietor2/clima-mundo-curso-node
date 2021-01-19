const lugar = require('./lugar/lugar')
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLatLong(argv.direccion);
        const temperatura = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.dir} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${argv.direccion}`;
    }
}

getInfo(argv.direccion).then(console.log);