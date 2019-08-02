const routes = require('express').Router();
const bodyParser = require('body-parser');
const httpMiddleware = require('../helpers/httpMiddleware');
routes.use(bodyParser());

const action = 'action/'

routes.post('/armadosod', (req, res) => {
    const body = req.body;
    // body.tipo = 'armado';
    console.log('armado_sod');
    console.log(body);
    
    // console.log(body);
    httpMiddleware(action + 'sod', 'post', body)
    .then( respuesta => {
        console.log('exito');
        console.log(respuesta.data);
        res.json(respuesta.data);
    })
    .catch( err => {
        console.log('error');
        console.log(err.data);
        res.status(400).send('err')
    });
});

routes.post('/monitor', (req, res) => {
    const body = req.body;
    /* httpMiddleware(action + 'monitor', 'post', body)
    .then( respuesta => {
        console.log(respuesta.data);
        
        res.json(respuesta.data);
    })
    .catch( err => {
        console.log(err.data);
        
        res.status(400).send('err')
    }); */
});
routes.post('/gestions', (req, res) => {
    const body = req.body;
    httpMiddleware(action + 'gestion', 'post', body)
    .then( respuesta => {
        console.log('success gestions');
        console.log(respuesta.data);
        res.json(respuesta.data);
    })
    .catch( err => {
        console.log('err gestions');
        console.log(err.data);
        res.status(400).send('err')
    });
})

routes.post('/camaras', (req, res) => {
    const body = req.body;
    console.log(body);
    httpMiddleware(action + 'camara', 'post', body)
    .then( res => {
        console.log('ress');
        console.log(res.data);
    })
    .catch( err => {
        console.log('err');
    });
});
routes.post('/video', (req, res) => {
    const body = req.body;
    console.log(body);
    httpMiddleware(action + 'camara', 'post', body)
    .then( res => {
        console.log(res.data);
    })
    .catch( err => {
        // console.log('err');
    })
});
routes.post('/sciudadana', (req, res) => {
    const body = req.body;
    console.log(body);
    httpMiddleware(action + 'seguridad', 'post', body)
    .then( respuesta => {
        console.log('exito');
        console.log(respuesta.data);
        res.json(respuesta.data);
    })
    .catch( err => {
        console.log('error');
        console.log(err.data);
        res.status(400).send('err')
    });
});
routes.post('/action', (req, res) => {
    const actionSource = req.body;
    console.log(actionSource);
    if (actionSource.state === true) {
        actionSource.state = 1;
    }
    console.log('action::::');
    console.log(actionSource.state);    
    httpMiddleware(action + 'dorpc', 'post', actionSource)
    .then( respuesta => {
        console.log('exito');
        console.log(respuesta.data);
        // console.log('respuesta.data');
        actionSource.state = actionSource.state ? 1 : 0;
        // console.log(actionSource);
        // console.log(respuesta.data);
        res.json(actionSource)
    })
    .catch( error => {
        console.log('error')
        res.status(400)
        /////////////////////////
        // actionSource.state = !actionSource.state ? 1 : 0;
        res.send( actionSource );
    });
    // res.json({res:'res'});
});

module.exports = routes;
