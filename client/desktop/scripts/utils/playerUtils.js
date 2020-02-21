const getPlayer = function (playerID) {
    for (let i = 0; i < players.length; i++) {
        if (playerID === players[i].uniqueID){
            return players[i];
        }
    }
};

const findPlayerIndex = function(player) {
    return players.findIndex(function (item, i) {
        return item.uniqueID === player.uniqueID;
    });
};

const createPlayerIcon = function (player) {
    const photoURL = 'shared/assets/animals/' + player.icon + '.png';
    let newPlayer = $('<div class=\'playerDisplayDesktop\' id=' + player.uniqueID + '><img src=\'' + photoURL + '\' ></img><div>' + player.userName + '</div></div>');
    newPlayer.fadeOut(0).fadeIn(1000);
    return newPlayer;
};
