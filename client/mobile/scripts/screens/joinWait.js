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
        socket.emit('connection', {
            'room': myGameCode,
            'userName': myName,
            'client': 'mobile',
            'uniqueID': myUniqueID,
            'icon': mySprite
        });
    });

    socket.on('acknowledge', function (playerInfo) {
        if (playerInfo.uniqueID === myUniqueID) {
            hostLeftMobile();
            // add code for room join
            console.log('heck yeah!');
            console.log(titleContainer);
            // TODO figure out fade out
            youreInScreen();

            socket.off('acknowledge');
        }
    });

    rootContainer.append(titleContainer);
};