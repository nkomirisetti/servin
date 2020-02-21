const youreInScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    
    let titleContainer = $(`
    <div class="titleContainer">
        <div class="titleTextMobile">Once everyone is in, hit start!</div>
    </div>`);

    socket.on('room-starting', function(startingPlayer) {
        console.log('starting the game');
        socket.off('room-starting');
        titleContainer.stop().fadeOut(1000);
        rootContainer.empty();
        //TODO open game selection screen
        if (startingPlayer === myUniqueID) {
            console.log('wow it me');
        }
    });

    let startButton = $('<button>Start!</button>');
    startButton.click(function () {
        socket.emit('start-room',myUniqueID);
    });
    titleContainer.append(startButton);
    
    titleContainer.fadeOut(0).delay(500).fadeIn(3000); 
    rootContainer.append(titleContainer);
};