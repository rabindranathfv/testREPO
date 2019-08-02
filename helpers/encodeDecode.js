const crypto = require('crypto');
let password = 'p&wrd_equisdé';
const algorithm = 'aes192';

function encode(text){
  return `${text}`;
  // var cipher = crypto.createCipher(algorithm,password)
  // var crypted = cipher.update(text,'utf8','hex')
  // crypted += cipher.final('hex');
  // return crypted;
}
 
function decode(text){
  return `${text}`;
  // var decipher = crypto.createDecipher(algorithm,password)
  // var dec = decipher.update(text,'hex','utf8');
  // dec +=   + decipher.final('utf8');
  // return dec;
}

module.exports = {
    encode,decode
}