const setupJoinScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let titleContainer = $(`
    <div class="titleContainer">
        <div class="titleTextMobile">Lookin' for the host</div>
    </div>`);

    let proceedButton = $('<button id="startButton">Quit</button>');
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
        socket.emit('connection',buildInfoJSON());
    });

    socket.on('acknowledge', function (playerInfo) {
        if (playerInfo.uniqueID === myUniqueID) {
            hostLeftMobile();

            titleContainer.stop().fadeOut(1000, function() {
                socket.off('acknowledge');

                // TODO add code for being driver
                youreInScreen();
            });
        }
    });

    rootContainer.append(titleContainer);
};