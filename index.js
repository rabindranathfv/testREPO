const { exec } = require('child_process');
const configPuerto = require('./config').port;
const port = process.env.PORT || configPuerto;
console.log(`PID:   ${process.pid}`)
exec(`./runredis.sh`, (err, out, error) => {
    exec(`fuser ${port}/tcp -k`, (err, out, error) => {
        console.log(out);
        console.log(err);
        console.log(error);

        const server = require('./app.js');

    });
});
