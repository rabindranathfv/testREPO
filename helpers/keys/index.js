// claves generadas usando http://travistidwell.com/jsencrypt/demo/
const fs = require('fs');
const jwt = require('jsonwebtoken');

var privateKEY = fs.readFileSync(`${__dirname}/private.key`, 'utf8');
var publicKEY = fs.readFileSync(`${__dirname}/public.key`, 'utf8');
// console.log(privateKEY);
// console.log(publicKEY);


module.exports = {
  /**
   * @param token
   * @param options : { issuer, subject, audience}
  */
  sign: function (payload, options) {
    // console.log(options);
    // Token signing options
    var signOptions = {
      issuer: options.issuer,
      subject: options.subject,
      audience: options.audience,
      // expiresIn:  "30d",    // 30 days validity
      algorithm: "RS256"
    };
    const respuesta = new Promise((resolve, reject) => {
      resolve(payload);
      /* jwt.sign(payload, privateKEY, signOptions, (error, token) => {
        // console.log('jwt.sign');
        if (error) {
          reject(error);
        }
        if (token) {
          // resolve(token);
          resolve(payload);
        }
        // console.log(error);
        // console.log(token);
        console.log('jwt.sign END');

      }); */
    });
    return respuesta;

  },


  verify: (token, options) => {
    /*
     vOption = {
      issuer: "Authorization/Resource/This server",
      subject: "iam@user.me", 
      audience: "Client_Identity" // this should be provided by client
     }  
    */
    var verifyOptions = {
      issuer: options.issuer,
      subject: options.subject,
      audience: options.audience,
      expiresIn: "30d",
      algorithm: ["RS256"]
    };

    try {
      return jwt.verify(token, publicKEY, verifyOptions);
    } catch (err) {
      return false;
    }
  },

  decode: (token) => {
    return jwt.decode(token, { complete: true });
    //returns null if token is invalid
  }
}