const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
const port = process.env.PORT || 4001;

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User Connected!');

    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    socket.on('change color', (color) => {
        console.log('Color Changed to: ', color);
        io.sockets.emit('change color', color);
    });



    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });

});

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});