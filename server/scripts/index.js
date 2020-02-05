const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, '../../client/index.html');

// start express
const server = express()
    .use(express.static('client'))
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log('Listening on port ' + PORT));

// start socket
const io = socketIO(server);

io.on('connection', function (socket) {

    // primary room joining
    socket.on('join', function (joiner) {
        
        const room = joiner.room;
        console.log('A ' + joiner.client + ' joined ' + room);
        socket.join(room);

        

        // establish channels
        socket.on('connection', function (message) {
            socket.broadcast.to(room).emit('connection', message);
        });
    });
});
