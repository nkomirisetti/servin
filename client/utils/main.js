var socket;

$(document).ready(function() {
    socket = io();
    const isMobile = isMobileDevice();
    if (!isMobile) {
        desktopSetup();
    } else {
        mobileSetup();
    }
});

