const setupLevelSelectScreen = function (pickingPlayerId) {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    currentScreen = 'levelSelect';

    let mainContainer = $('<div class=\'mainContainer\'></div>');
    mainContainer.append('<div class=\'mainTextDesktop\'>Waiting for ' + getPlayerByID(pickingPlayerId).userName + ' to pick a game</div>');

    mainContainer.css('display', 'none');
    mainContainer.fadeIn(2000, 'linear');

    rootContainer.append(mainContainer);

    let messagesList = $('<div class =\'messagesList\'></div>');
    mainContainer.append(messagesList);

    socket.on('recieve-message', function (message) {
        // TODO add messages list
    });
};