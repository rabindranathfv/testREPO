const client = (require('../client'));
const flat = require('../../helpers/flatObject');
const { encode, decode } = require('../../helpers/encodeDecode');
const async = require('async');
// const modelo = ''
/* const print = {
    alerta: 34,
} */

constructor = (modelo) => {
  /* client.hmset('impresoras:2', flat(print), (error, res) => {
    console.log(error, res);
  }); */
  /* client.del('impresoras:2', (error, res) => {
    console.log(error);
    console.log(res);
    
    
  }) */
  // client.hmset(`impresoras:2`, flat(print), (error, res ) => {
  //   console.log(res);
  //   console.log(error);    
  // });
  /* client.hget('impresoras:2', 'alerta', (error, res ) => {
    console.log('|||||');
    console.log(error);
    console.log(res);
    console.log('|||||');
  }) */
  return {
    modelo: modelo,
    check: function check( id, callback ) {
      
      const key = encode(`${id}`);
      return client.exists(`${modelo}:${key}`, callback)
    },
    save: function save(id, data, callback) {
      console.log('data', data);
      
      const key = encode(`${id}`);
      /* console.log('data, id');
      console.log(data);
      console.log(id);
      console.log('data, id'); */
      let postFunction;
      this.delete(id, () => {

        postFunction = client.hmset(`${modelo}:${key}`, flat(data), callback);
      });
      return postFunction;
      // return client.hmset(`${modelo}:${key}`, flat(data), callback);
    },
    saveHash: function saveHash(id, data, callback) {
      const key = encode(`${id}`);
      
      console.log(data);
      
      console.log('savehash:__________________');
      console.log(`${modelo}:${key}`);
      console.log(data.key);
      console.log('___________________________');
      const stringData = JSON.stringify(flat(data));
      console.log(stringData);
      console.log('***************************');
      client.sadd(`${modelo}:${key}`, data.key, stringData, callback);
    },
    read: function read(id, callback) {
      const key = decode(`${id}`);
      return client.hgetall(`${modelo}:${key}`, callback);
    },
    readList: function readList(/* id, */ responseCallback) {
      client.keys(`${modelo}:*`, (error, keys) => {
        async.map(keys, (key, callback) => {
          client.hgetall(key, (error, value) => {

            const lista = {};
            lista['key'] = key;
            lista['data'] = value;
            callback(null, lista);
          });
        }, (error, res) => {
          console.log('READLIST');
          
          console.log(res);
          responseCallback(res);
        });
      });
    },
    readHashes: function readHashes(id, callback) {
      client.sinter(id, (errorSinter, claves) => {  
        if (errorSinter) {
          return;
        }
        console.log('claves.keys');
        console.log('===========');
        console.log(claves);
        
        
        async.map( claves, (k, callback) => {
          // console.log('k');
          
        })
        // console.log(claves.keys);
        //claves.keys( a, b, (err, k) => {
        //  console.log(a);
        //  console.log(b);
        //  console.log(err);
        //  console.log(k);
        //})
        // const promesas = [];
        // console.log('RASDAHASES');
        
        /* claves.forEach( (clave, index, array) => {
          // console.log('clave : ' + clave);
          
          client.hgetall(clave, (error, hash) => {
            //promesas.push(hash);
          });
          if (index === array.length - 1) {
            Promise.all([...promesas]).then( promesaHashes => {
              console.log('promesahashes');
              
              console.log(promesaHashes);
              callback(promesaHashes);
            });
          }
        }); */
      });
    },
    delete: function del(id, callback) {
      client.del(`${modelo}:${id}`, callback);
    }
  }
}
module.exports = {
  // save,
  // read,
  constructor: constructor
}