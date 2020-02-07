var roomCode = roomCodeGenerator(4);
var players = [];

const setupHostScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let mainContainer = $('<div class="mainContainer"></div>');
    mainContainer.append('<div class="mainText">Go To localhost:3000 on your phone and enter ' + roomCode + '</div>');
    mainContainer.css('display', 'none');
    mainContainer.fadeIn(2000, 'linear');

    rootContainer.append(mainContainer);

    let playersDiv = $('<div class ="playersList"></div>');
    mainContainer.append('<div class=\'subText\'>Players Joined:</div>');
    mainContainer.append(playersDiv);

    socket.on('connection', function (player) {
        players.push(player);
        playersDiv.append(createPlayerIcon(player));

        socket.on('left', function(player){
            $('#' + player.uniqueID).remove();
            const index = players.findIndex(function(item, i){
                return item.uniqueID === player.uniqueID;
            });
            players.splice(index,1);
        });
          
    });

    createRoom();
};

const createRoom = function () {
    socket.emit('join', {
        'room': roomCode,
        'client': 'desktop'
    });
};

const createPlayerIcon = function (player) {
    const photoURL = 'shared/assets/animals/' + player.icon + '.png';
    let newPlayer = $('<div class=\'playerDisplay\' id=' + player.uniqueID+'><img src="' + photoURL + '" ></img><div>' + player.userName + '</div></div>');
    return newPlayer;
};

const playerTest = function (iconName) {
    player = {
        'room': 'room',
        'userName': 'nikhil',
        'client': 'mobile',
        'uniqueID': roomCodeGenerator(4),
        'icon': iconName
    };

    players.push(player);
    $('.playersList').append(createPlayerIcon(player));
};