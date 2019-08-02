const axios = require('axios');
const fs = require('fs');
const ip = require('../config').rails
const dataSource = `${ip}`;

const httpMiddleware = (path, metodo = 'GET', body) => {
  const inicio = Date.now();
  const ruta = dataSource + path
  const method = metodo;
  let token;
  if (body && body.token) {
    token = String(body.token);
    delete body.token;
  }
  const mensaje = {
    method: method,
    url: ruta,
    data: body,
    'Authorization': 'Token token=' + token
    // headers: {'Content-Type': 'applichttp://localhost:5001/recintos/3/gestionesation/json'}
  }
  // if (metodo == 'PUT') {
    // mensaje.data = mensaje.data.body
  // }
  if (metodo != 'GET') {
    // console.log(ruta);
    // console.log(mensaje);
  }
  const response = axios(mensaje);

  response.finally(res => {
    const difference = Date.now() - inicio;
    console.log(`Reguest ${method} ${ruta}`);
    console.log(`${difference} ms`);
  });
  response.then(res => { });
  response.catch(error => {
    if (error.response) {
      fs.writeFile("./logs/lastreq", JSON.stringify(mensaje), (err) => {})
      fs.writeFile("./logs/lasterr.html", JSON.stringify(error.response.data), (err) => {
        if (err) {
          console.log('err FS');
        }
      });
    } else if (error.request) {
      ('error.request');
    } else {
      ('Error', 'error.message');
    }
    ('error.config');
  });
  return response;
}
module.exports = httpMiddleware;
