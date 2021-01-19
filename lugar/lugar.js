const axios = require('axios');

const key = 'a19728a8c3msh8ed90f1830671e6p15594bjsn52fc085927a0';

const getLatLong = async(direccion) => {
    const encodeUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: { 'x-rapidapi-key': `${key}` }
    });

    const resp = await instance.get();

    if (resp.data.length < 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let data = resp.data.data[0];
    const dir = data.name;
    const lat = data.latitude;
    const lon = data.longitude;

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLatLong
}