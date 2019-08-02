const socketIO = require('socket.io')
let io;
const crearSocket = (httpServer) => {
    if (io) {
        return io
    }
    // console.log(httpServer.maxListeners);
    io = socketIO.listen(httpServer);
    io.on('connection', socket => {
        console.log('connection');
        
    });
    io.on('message', data => {
        console.log(data);
        
    })
    return io;
    
}

// test
module.exports = {
    crearSocket
}