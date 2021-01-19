const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).help().argv;


module.exports = {
    argv
}