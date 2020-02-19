const youreInScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    
    let titleContainer = $(`
    <div class="titleContainer">
        <div class="titleTextMobile">Once everyone is in, hit start!</div>
    </div>`);

    let startButton = $('<button>Start!</button>');
    startButton.click(function () {
        socket.emit('start-room',myUniqueID);
    });

    rootContainer.append(titleContainer);
    socket.on('room-starting', function(starterID) {
        console.log('starting the game');
        socket.off('room-starting');
        titleContainer.stop().fadeOut(1000);
        rootContainer.empty();
        //TODO open game selection screen

    });

    titleContainer.append(startButton);
    titleContainer.fadeOut(0).delay(500).fadeIn(3000);

};