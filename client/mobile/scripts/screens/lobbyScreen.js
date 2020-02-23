const createLobbyPlayerScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    let titleContainer;

    if (amIDriver()) {
        titleContainer = $(`
        <div class='mainContainer'>
            <div class='mainTextMobile'>Pick a game!</div>
        </div>`);
        
        let playerContainers = $('<div class=\'gamesListMobile\'></div>');

        for (let i = 0; i < gamesList.length; i++) {
            playerContainers.append('<button class=\'gamesDisplayMobile\' id=\'' + gamesList[i].game_name + '\' onclick=\'gameSelected("' + gamesList[i].game_name + '")\'>' + gamesList[i].game_name + '</button>');
        }
        titleContainer.append(playerContainers);
        rootContainer.append(titleContainer);
    } else {
        titleContainer = $(`
        <div class='mainContainer'>
            <div class='mainTextMobile'>Waiting for ' + myDriver.userName + ' to pick a game!</div>
        </div>`);
        rootContainer.append(titleContainer);
    }

    titleContainer.fadeOut(0).fadeIn(1000);

    socket.on('driver-change', function (newDriver) {
        myDriver = newDriver;
        titleContainer.stop().fadeOut(1000, function () {
            createLobbyPlayerScreen();
        });
    });
};