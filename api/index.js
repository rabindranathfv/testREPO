const routes = require('express').Router();
const key = require('../helpers/keys');
// const source = require('../config').rails

const auth = require('../auth');
const rails = require('./rails');
const redis = require('./redisroutes')


routes.use((req, res, next) => {
    // console.log(req.headers);
    console.log(req.originalUrl);
    // console.log(req.session);
    
    
    next();
})

routes.use('/auth', auth);
routes.use('/data', redis, responseParser)
routes.use(rails);

module.exports = routes;

function responseParser(req, res) {
    console.log('RESPONSEPARSER');
    console.log(req.response);
    
    let message = {
        status: 400,
        object: null,
        msg: 'error'
    };
    const send = encode(req.response)
    send.then(object => {
        message = {
            status: req.status,
            object: object,
            msg: req.msg
        }
    });
    send.catch(error => {
        console.log(error);
    })
    send.finally(() => {
        res.send(message);
    });
}
function encode(data) {
    const options = {
        issuer: '1',
        subject: '2',
        audience: '3'
    };
    const encoded = key.sign(data, options);

    // console.log(encoded);

    return encoded;
}
