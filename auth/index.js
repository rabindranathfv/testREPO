const routes = require('express').Router();
const http = require('../helpers/httpMiddleware');
const key = require('../helpers/keys');

// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

/* const expressJwt = require('express-jwt');
const options = {
    expiresIn: '5s'
} */
routes.get('/login', (req, res) => {
    console.log('GET LOGIN');
    const user = req.session ? req.session.user : false;
    
    // req.session.user ? res.status(200).send({loggedIn: true}) : res.status(200).send({loggedIn: false});
    console.log('user');
    console.log(user);
    console.log('user');
    
    let logged = { loggedIn: false };
    if (user) {
        logged = { loggedIn: true }
            // return res.status(200).send({object: encode({loggedIn: true})});
    } else {
        logged = { loggedIn: false }
            // return res.status(200).send({object: encode({loggedIn: false})});
    }
    encode(logged)
        .then(encoded => {
            /* 
                    console.log('user::::::::::::::::::');
                    console.log(user);
                    console.log('user::::::::::::::::::');
                    console.log(req.session)
                    console.log('user::::::::::::::::::'); */

            res.status(200).send({ object: encoded });
        })
});
const users = require('../redis/modelos/users');
routes.post('/logout', (req, res) => {
    req.session.destroy(() => {
        /// res.send({message: 'ok'})
        res.clearCookie('token').send();
    });
});
routes.post('/login', (req, res) => {
    console.log('post login');

    const password = req.body.password;
    const code = req.body.code;
    const url = `/api/usuarios?buscar_por=mail&dato=${code}`;
    const respuesta = http(url, 'GET')
        // .queyParams('buscar_por', 'nombre')
        // .queyParams('dato', code)
        .then(respuesta => {
            return respuesta.data.object[0];
        })
        .catch(error => console.log('error'))
        .then(usuario => {
            console.log(req.session);
            /* userIdHash = crypto.createHash('sha1').update(`${usuario.id}`).digest('base64');
            crypto.d */
            console.log('datos de login');
            console.log(usuario);
            console.log(usuario.id);
            req.session.user = usuario.id;
            //user:rDR41po8gfpi5g9cNpYWWk5easQ=
            users.save(usuario.id, {
                    nombre: 'usr5',
                    apellido_paterno: 'apellido5',
                    apellido_materno: 'null',
                    telefono_de_contacto: 'QWE',

                })
                // console.log(req.sessionID)
                // const token = jwt.sign(usuario, 'secret', {});
                // console.log(token);
            const option = {
                issuer: '1',
                subject: 'x',
                audience: '3'
            };
            //const token = key.sign(usuario, option);
            // console.log('#');
            // // console.log(key.decode(token))
            // console.log('#');
            // // console.log(key.verify(token, option))
            // console.log('#');
            // console.log(token);
            key.sign(usuario, option)
                .then(token => {

                    res.cookie('token', token) //.send()
                        .send({ object: token });
                })
                // .send(token);

        });
    return respuesta;
    //console.log(req.sessionID);
    //console.log(req.user);

    // req.session.cookie.expires=1543900526837;

    //console.log(req.session);
    // const token = jwt.sign({}, 'key', {
    //     expiresIn: '60s'
    // });
    // res.send({object:token, status: 200, message: 'token'})
    // key.sign()

});

module.exports = routes;

function encode(data) {
    const options = {
        issuer: '1',
        subject: '2',
        audience: '3'
    };
    const encoded = key.sign(data, options);
    return encoded;
}