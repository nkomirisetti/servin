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
        socket.join(room);

        let playerInfo;

        console.log('A ' + joiner.client + ' joined ' + room);

        // establish channels
        socket.on('connection', function (player) {
            socket.broadcast.to(room).emit('new-player', player);
            console.log(player);
            playerInfo = player;
        });

        socket.on('acknowledge-player', function (player) {
            socket.broadcast.to(room).emit('acknowledge', player);
        });

        socket.on('disconnect', function () {
            console.log('A ' + joiner.client + ' left ' + room);
            if (joiner.client === 'desktop') {
                socket.broadcast.to(room).emit('host-left', playerInfo);
            } else {
                socket.broadcast.to(room).emit('mobile-left', playerInfo);
            }
        });
    });
});