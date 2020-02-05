var roomCode = roomCodeGenerator(4);

const setupHostScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let mainContainer = $('<div class="mainContainer"></div>');
    mainContainer.append('<div class="mainText">Go To localhost:3000 on your phone and enter ' + roomCode + '</div>');
    rootContainer.append(mainContainer);

    createRoom();

};

const createRoom = function () {
    socket.emit('join', {
        'room': roomCode,
        'client': 'desktop'
    });
};
