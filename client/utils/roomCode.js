const roomCodeGenerator = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const validateRoomCodeInput = function (roomCode, userName) {
    if (userName == '') {
        alert('Make sure you enter a valid name!');
    } else if (!(roomCode.match(/^[A-Za-z]+$/) && roomCode.length == 4)) {
        alert('Make sure your gamecode is valid!');
    } else {
        return true;
    }
};
// TODO block some bad words