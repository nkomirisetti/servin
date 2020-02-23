const randomNewDriver = function () {
    drivingPlayerIndex = Math.floor(Math.random() * players.length);
    socket.emit('driver-change', players[drivingPlayerIndex]);
};

const setNewDriver = function (newDriver) {
    // TODO later
};