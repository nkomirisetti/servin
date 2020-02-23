const playerSocketConnections = function () {
    socket.on('new-player', function (player) {
        if (currentScreen == 'host' || currentScreen == 'lobby') {
            appendPlayerIcon(player);
        }
        players.push(player);
        if (players.length === 1) {
            drivingPlayerIndex = 0;
        }
        socket.emit('acknowledge-player', [player, players[drivingPlayerIndex]]);
    });

    socket.on('player-left', function (player) {
        if (currentScreen === 'host') {
            removePlayerIcon(player);
        }

        if (players.length === 1) {
            if (currentScreen === 'host') {
                drivingPlayerIndex = -1;
                players = [];
            } else {
                alert('looks like everyone left :(');
                // TODO leave
            }
        } else {
            const oldDriverIndex = players[drivingPlayerIndex].uniqueID;
            players.splice(getIndexByID(player.uniqueID), 1);
            if (player.uniqueID === oldDriverIndex) {
                console.log('choosing new driver');
                randomNewDriver();
            }
        }
    });
};

const createRoom = function () {
    socket.emit('join', {
        'room': roomCode,
        'client': 'desktop'
    });
};