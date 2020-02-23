const setupJoinScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let titleContainer = $(`
    <div class='titleContainer'>
        <div class='titleTextMobile'>Lookin' for the host</div>
    </div>`);

    let proceedButton = $('<button id=\'startButton\'>Quit</button>');
    proceedButton.click(function () {
        location.reload();
    });

    titleContainer.append(proceedButton);

    socket.emit('join', {
        'room': myGameCode,
        'client': 'mobile'
    });

    myUniqueID = roomCodeGenerator(5);

    titleContainer.fadeOut(0).fadeIn(2000, 'linear').queue(function () {
        socket.emit('join-room', buildInfoJSON());
    });

    socket.on('acknowledged', function (playerInfo) {
        if (playerInfo[0].uniqueID === myUniqueID) {
            hostLeftMobile();
            socket.off('acknowledged');
            console.log(playerInfo);
            myDriver = playerInfo[1];
            titleContainer.stop().fadeOut(1000, function () {
                createWaitScreen();
            });
        }
    });

    rootContainer.append(titleContainer);
};