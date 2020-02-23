const createWaitScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let titleContainer = $(`
    <div class='titleContainer'>
        <div id='waitScreenLabel' class='titleTextMobile'></div>
    </div>`);
    rootContainer.append(titleContainer);


    if (amIDriver()) {
        $('#waitScreenLabel').text('Once everyone is in, hit start!');
        let startButton = $('<button>Start!</button>');
        // TODO oneline all of this
        startButton.click(function () {
            socket.emit('start-room', myUniqueID);
        });
        titleContainer.append(startButton);
    } else {
        $('#waitScreenLabel').text('Waiting for ' + myDriver.userName + ' to start the game!');
    }

    titleContainer.fadeOut(0).fadeIn(1000);

    socket.on('room-starting', function () {
        socket.off('room-starting');
        titleContainer.stop().fadeOut(1000, function () {
            socket.off('driver-change');
            createLobbyPlayerScreen();
        });
    });

    socket.on('driver-change', function (newDriver) {
        myDriver = newDriver;
        titleContainer.stop().fadeOut(1000, function () {
            createWaitScreen();
        });
    });
};