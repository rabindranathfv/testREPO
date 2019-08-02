const redis = require('redis');

var async = require('async');
const redisPort = require('../config').redisPort
// const client = redis.createClient(7000);
const client = redis.createClient(redisPort);

client.flushall((err, res) => {
  console.log('borrado');    
})

const alerta = require('./modelos/alertas');
const config = require('./modelos/config')(client);
// alerta(client);



/* client.hmget('config', '*', (error, res ) => {
  console.log(res);
  console.log(error);
  
  
}) */
/* const loger = (error, res ) => {
  if (error ){
    console.log('error');
    console.log(error);
  } else {
    console.log('res');
    
    console.log(res);
  }
  
}
client.hgetall('config*', loger) */

//client.hset('xa  w', {data:123}, {data:123}, redis.print)
client.on('connect', error => {
  /* client.hgetall('user:5', (err, res )=> {
    // console.log(err);
    // console.log(res);
    
    
  }) */
  /* client.hmset('user:1', ['name', 'nombre'], (error, res) => {
    console.log('error', error);
    console.log(res);    
  });
  client.hgetall('user:1', (err, res) => {
    console.log(res);
    
  }) */
  if (error) {
    console.log(error);
  }
  // client.set('usrx', 'xyz');
  // client.del('impresoras:2')
  /* client.sadd('impresoras:2', 'alertas:default', (error, res) => {
    
    console.log('error');
    console.log(error);
    console.log(res);
    console.log('res');    
  }); */
  /* client.sinter('impresoras:2', 'alertas:0', (error, res ) => {
    console.log(error);
    console.log(res);
  }) */
  /* client.hgetall('impresoras:2', (error, reply) => {
    console.log('reply');
    console.log(reply);
    console.log(error);
    console.log('error');
  }) */
  // client.type('impresoras', (error, res) => {
  //   console.log(error);
  //   console.log(res);
    
    
  // })
  // client.smembers('impresoras', (error, res) => {
  //   console.log(res);
  //   console.log(error);
    
    
  // })
  // client.sinter('impresoras', (error, res) => {
  //   console.log(res);
  //   console.log(error);
    
    
  // })
  let cursor = 0;
  /// Filtro
  /* const x = client.scan(cursor, 'MATCH','alertas*', (error, respuesta) => {
    console.log(error);
    console.log(respuesta);
    
    console.log(cursor);
    console.log(x);
    
  }); */
  /* client.sinter('alertas:default', 'config:default', ( error, response) => {
    console.log(error);
    
    console.log(response);
    
  }) */
  //client.sadd('impresoras:2', 'config:default')
  //client.sadd('impresoras:2', 'alertas:default')

  /* client.hget('impresoras', 'config:default', (error, res) => {
    console.log(res);
    console.log(error);
    
  }) */
  /* client.sinter('impresoras:2', (error, res ) => {
    console.log(error);
    console.log(res);
  }) */

  
  /* client.hgetall('impresoras', (err, res) => {
    console.log(res);
    console.log(err);
    
    
  }) */
  console.log('connected');
  client.keys('*', (error, keys) => {
    async.map(keys, (key, cb) => {
      client.get(key, (error, value) => {
        const job = {};
        job['id'] = key;
        job['data'] = value;
        cb(null, job);
      })
    }, (error, res) => {
      console.log(`RES:`);
      // console.log(res);
    });
  });
  // client.keys('config:*', (error, respuesta) => {
  //   // console.log(respuesta);
    
  // });

});
// console.log(client);
client.on('error', r => {
  //console.log(148);
  
  //console.log(r);

})
// exports = client;
module.exports = client;
