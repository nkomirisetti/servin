var socket;

$(document).ready(function () {
    socket = io();
    const isMobile = isMobileDevice();
    backgroundSetup();
    if (!isMobile) {
        desktopSetup();
    } else {
        mobileSetup();
    }
});