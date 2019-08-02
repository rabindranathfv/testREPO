const key = require('../helpers/keys');
const routes = require('express').Router();
const bodyParser = require('body-parser');
//const {read, save} = require('../redis/modelos/config')
const constructor = require('../redis/modelos/default').constructor;
routes.use(bodyParser());
routes.use((req, res, next) => {
  req.url = req.url.split('?')[0];
  console.log(req.url);
  console.log(req.method);
  
  console.log('REDIS');
  
  
  next();
});

routes.post('/:model', (req, res, next) => {
  const model = req.params.model;
  console.log(req.body);
  
  console.log('POST model: ' + model);  
  const id = req.body.key ? req.body.key : 'default';
  const db = constructor(model);

  db.save(id, req.body.data, (error, respuesta ) => {
    const data = {
      // object: JSON.parse(JSON.stringify(respuesta)),
      object: respuesta,
      message: 'config',
      status: 200
    };
    req.response = data;
    next();
  });
});
routes.get('/hashes/:model', (req, res, next) => {
  console.log('gethashes');
  const model = req.params.model;  
  const db = constructor(model);
  db.readHashes(model, hashdata => {
    req.response = {object: hashdata};
    req.status = 200;
    req.msg = 'obje';
    return next();
  });
});
routes.post('/hash/:model/:id', (req, res, next ) => {
  console.log('HASHMODEL');
  
  const model = req.params.model
  const id = req.params.id;
  const data = req.body; 
  const db = constructor(model);
  db.saveHash(id, data, (error, respuesta) => {    
    let resultado;
    if(error) {
      console.log('HASHERROR');
      resultado = {object: error}
    }
    if(respuesta) {
      resultado = {object: respuesta}
      console.log('HASHRESPUESTA');
    }
    req.response = resultado;
    next();
  });
});
routes.get('/list/:model', (req, res, next) => {
  const model = req.params.model
  console.log('getlist');
  const db = constructor(model);
  db.readList( data  => {
    req.response = {object: data};
    req.status = 200;
    return next();
  });
  
});
routes.get('/:model/:id', (req, res, next ) => {
  if (req.url.substr(0,6) === '/list/') {
    return next()
  }
  const model = req.params.model;  
  let id = req.params.id;
  const db = constructor(model);
  db.check(`${id}`, (error, existente) => {
    if (!existente) {
      id = 'default';
    }
    db.read(id, (err, respuesta ) => {
      if (err) {
        console.log(err);
      }
      const data = {
        object: respuesta,
        message: model,
        status: 200
      };
      req.response = data;
      next();
    });
  })
});

routes.delete('/:model/:id', (req, res, next) => {
  const model = req.params.model;
  const id = req.params.id
  const db = constructor(model);
  db.check(`${id}`, ( error, existe ) => {
    if (!existe) {
      req.response = {error: 'inexistente'};
      req.staus = 404;
      next()
    }
    db.delete(id, (error, response ) => {
      if (error) {
        console.log(error);
        req.response = error;
      }
      // res.send({object: encode({res: 'ok'})});
      req.response = {res: response};
      next();
    });
  });
});

function encode(data) {
  const options = {
    issuer: '1',
    subject: '2',
    audience: '3'
  };
  const encoded = key.sign(data, options);
  return encoded;
}
module.exports = routes;
