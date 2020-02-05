var socket;

$(document).ready(function() {
    socket = io();
    console.log(window.mobileCheck);
    const isMobile = isMobileDevice();
    if (!isMobile) {
        desktopSetup();
    } else {
        mobileSetup();
    }
});

