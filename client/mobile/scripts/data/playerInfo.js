var myName;
var myUniqueID;
var mySprite;
var myGameCode;
var myDriver;

const buildInfoJSON = function () {
    return {
        'room': myGameCode,
        'userName': myName,
        'client': 'mobile',
        'uniqueID': myUniqueID,
        'icon': mySprite
    };
};

const amIDriver = function() {
    return myUniqueID === myDriver.uniqueID;
};