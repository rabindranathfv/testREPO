const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const winston = require('winston');
const app = express();
const redisStore = require('connect-redis')(session);
const http = require('http');
const server = http.createServer(app);

const { port } = require('./config');
/*
const https = require('https');
const fs = require('fs');
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen( port, () => {
    console.log('listen in ' + port);    
}) */
const redisClient = require('./redis/client');
// console.log(redisClient);
const cookie = {
    maxAge: 1000 * 60 * 60,
}
app.use(session({
    /* store: new redisStore({
        client: redisClient,
        //ttl: 5,
        prefix: 'sesion'
    }), */
    saveUninitialized: false,
    resave: false,
    //expires: '10s',
    secret: 'x',
    cookie: cookie
}));
app.use(cors({
    origin: [
        'http://localhost:4200',
        'http://localhost:5000',
        'https://empackdev.forcast.cl',
    ],
    credentials: true,
}));
app.use(bodyParser());
ruta = './www';
app.use(express.static(path.join(__dirname, `${ruta}`)));
const api = require('./api');
// const rails = require('./api/rails');
// app.use('/api', rails);
app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `${ruta}/index.html`));
});

server.listen(port, () => {
    // winston.log('log', port)
});
const socket = require('./socket/server').crearSocket(server);