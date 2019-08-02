const httpMiddleware = require('../helpers/httpMiddleware');
const key = require('../helpers/keys');

const routes = require('express').Router();
const bodyParser = require('body-parser');
let inicio;
routes.use( (req, res, next) => {
  // console.log(req.headers);
  inicio = Date.now();
  next();
});
routes.use(bodyParser());

/* const auth = require('../auth');
routes.use('/auth', auth); */

/* routes.post('/config', (req, res) => {
  // console.log(req.body);
  config = req.body;
});
routes.get('/config', (req, res) => {
  const respuesta = {
    object: config,
    message: 'config',
    status: 200
  }
  console.log('config');
  res.send({object: encode(respuesta)});
}); */
routes.get('/me', (req,res, next) => {
  const ruta = `/api/usuarios/${req.session.user}`;
  
  httpMiddleware(ruta)
  .then( response => {
    encode(response.data).then( encoded => {
      // res.send({object: encode(response.data), status: response.data.status, msg: response.data.msg});
      console.log(encoded)
      res.send(
        {
          object: encoded,
          status: response.data.status,
          msg: response.data.msg
        }
      );
    });
  });
})
routes.all('*', (req, res, next) => {
  // const path = req.body.param;
  const path = req.originalUrl;
  const body = req.body;
  const metodo = req.method;
  const respuesta = httpMiddleware(`${path}`, metodo, body);
  let login = false;
  // console.log(body);
  if (path.includes('/login')) {
    login = true;
  }
  console.log('NOME:::::::::::::::::::::::::::::::::');
  console.log(path);
  console.log('login:', login);
  // const metodo = req.body.method;
  // console.log(metodo);
  // respuesta.finally( () => console.log(`Petición ${Date.now() - inicio}`))
  respuesta.catch( error => {
    // res.send({ msg: 'error', object: [], status: 400 });
    // console.log(error.response.data);
    let status = 500;
    let msg = '';
    
    
    
    if ( error.response && error.response.data) {
      status = error.response.data.status
      msg = error.response.message;
    }
    res.status(status)
    res.send(msg)
  });
  if (!!login) {
      const request = httpMiddleware(`/api/usuarios?buscar_por=${body.variable}&dato=${body.dato}`, 'GET');
      request.then( objUser => {
        req.session.user = objUser.data.object[0].id;
        encode(objUser.data).then( encoded => {
          res.send(
            {
              object: encoded,
              status: objUser.data.status,
              msg: objUser.data.msg
            }
          );
        })
      });
  }
  if (!login) {
    respuesta.then(response => {
      if (response.data && response.data.object && response.data.object.reverse) {
        response.data.object.reverse();
      }
      encode(response.data).then( encoded => {
        res.send(
          {
            object: encoded,
            status: response.data.status,
            msg: response.data.msg
          }
        );
      })
      console.log(`Petición ${Date.now() - inicio}`)
    });
  }
});
/* routes.post('', (req, res, next) => {
  const path = req.body.param;
  const body = req.body;
  const metodo = req.body.method;
  
  console.log(path);
  console.log(body);
  console.log(metodo);
  
  
  
  const respuesta = httpMiddleware(`api/${path}`, metodo, body);
  respuesta.catch(error => {
    // res.status(400)
    res.send( {msg: 'error', object: [], status: 400} );
  });
  respuesta.then( response => res.json(response.data));
}); */
function encode(data) {
  const options = {
    issuer: '1',
    subject: '2',
    audience: '3'
  };
  const encoded = key.sign(data, options);
  encoded.catch( err => {
    console.log('ERROR');
  })/* 
  encoded.then( res => {
    console.log('ok');
    console.log('ok');
    console.log('ok');
    console.log('ok');
  }) */
  return encoded;
}
module.exports = routes;
