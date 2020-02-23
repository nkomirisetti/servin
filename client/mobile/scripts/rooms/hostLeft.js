const hostLeftMobile = function () {
    socket.on('host-left', function (hostInfo) {
        alert('It look\'s like the host was disconnected');
        location.reload();
    });
};