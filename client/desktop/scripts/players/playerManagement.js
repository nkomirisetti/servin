// TODO move this code somewhere else so players can join during the game
socket.on('new-player', function (player) {
    console.log(player);
    players.push(player);
    if (screen === 'host') {
        ('.playersList').append(createPlayerIcon(player));
    }
    socket.emit('acknowledge-player', player);
});

socket.on('mobile-left', function (player) {
    if (screen === 'host'){
        $('#' + player.uniqueID).fadeOut(1000, function () {
            $('#' + player.uniqueID).remove();
        });
    }

    const index = players.findIndex(function (item, i) {
        return item.uniqueID === player.uniqueID;
    });
    players.splice(index, 1);

    if (screen != 'host' && players.length === 0){
        alert('It look\'s like everyone left the game');
        location.reload(); 
    }
});