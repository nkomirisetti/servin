const setupHostScreen = function () {
    currentScreen = 'host';

    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let mainContainer = $('<div class=\'mainContainer\'></div>');

    mainContainer.append('<div class=\'mainTextDesktop\'>Go To ' + global_url + ' on your phone and enter ' + roomCode + '</div>');
    mainContainer.append('<div class=\'subTextDesktop\'>Players Joined:</div>');
    mainContainer.append('<div id=\'playersDiv\' class =\'playersList\'></div>');

    mainContainer.fadeOut(0).fadeIn(2000, 'linear');
    rootContainer.append(mainContainer);

    playerSocketConnections();
    createRoom();

    socket.on('room-starting', function (startingPlayer) {
        socket.off('room-starting');
        mainContainer.stop().fadeOut(3000, function () {
            setupLevelSelectScreen(startingPlayer);
        });
    });
};

const appendPlayerIcon = function (player) {
    $('.playersList').append(createPlayerIcon(player));
};

const removePlayerIcon = function (player) {
    $('#' + player.uniqueID).fadeOut(1000, function () {
        $('#' + player.uniqueID).remove();
    });
};