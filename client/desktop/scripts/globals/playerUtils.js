const getPlayer = function (playerID) {
    for (let i = 0; i < players.length; i++) {
        if (playerID === players[i].uniqueID){
            return players[i];
        }
    }
};