var myName;
var myUniqueID;
var mySprite;
var myGameCode;

const buildInfoJSON = function () {
    return {
        'room': myGameCode,
        'userName': myName,
        'client': 'mobile',
        'uniqueID': myUniqueID,
        'icon': mySprite
    };
};