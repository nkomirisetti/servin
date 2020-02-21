const playerSocketConnections = function () {
    socket.on('new-player', function (player) {
        if (currentScreen == 'host' || currentScreen == 'lobby') {
            appendPlayerIcon(player);
        }

        players.push(player);
        if (players.length === 1) {
            controllingPlayer = player;
        }

        socket.emit('acknowledge-player', controllingPlayer);
    });

    socket.on('mobile-left', function (player) {
        if (screen == 'host') {
            removePlayerIcon();
        }

        players.splice(findPlayerIndex(player), 1);
        if (player.uniqueID === controllingPlayer) {
            assignNewControllingPlayer();
        }
    });

};

const createRoom = function () {
    socket.emit('join', {
        'room': roomCode,
        'client': 'desktop'
    });
};