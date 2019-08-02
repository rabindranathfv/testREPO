const axios = require('axios');
const routes = require('express').Router();
const bodyParser = require('body-parser');
const ip = require('../config').rails
routes.use(bodyParser.json());

const dataSource = `${ip}api/`;

routes.post('', (req, res ) => {
    
    const body = req.body;    
    const modelo = body.modelo;
    const params = {
        variable: 'nombre',
        dato: body.dato,
        modelo,
        password: body.password
    };
    //console.log(params)
    const ruta = `${dataSource}login/operario`;
    
    const request = axios.post(ruta, params);
    request.then( respuesta => {
        //console.log('res');
        //console.log(respuesta.data);
        res.json(respuesta.data);
    });
    request.catch( err => {
        //console.log('err');
        //console.log(err.data);
        res.status(400);
        res.send(err.data);
    });
    
});
// module.exports = routes;
