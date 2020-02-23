const setupPlayerSelectScreen = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();


    let mainContainer = $(`
        <div class='mainContainer'>
            <div class='mainTextMobile'>Pick a Friend!</div>
        </div>`);

    let playerContainers = $('<div id=\'playersList\'></div>');

    for (let i = 0; i < animalsList.length; i++) {
        playerContainers.append('<div class=\'playerDisplayMobile\' id=\'' + animalsList[i] + '\' onclick=\'playerSelected("' + animalsList[i] + '")\'><img src=\'shared/assets/animals/' + animalsList[i] + '.png\'>');
    }

    mainContainer.append(playerContainers);
    mainContainer.fadeOut(0).fadeIn(2000, 'linear');

    rootContainer.append(mainContainer);
};

const playerSelected = function (chosenSprite) {
    let flag = false;
    $('.playerDisplayMobile:not(#' + chosenSprite + ')').fadeTo(1500, 0.001).delay(1500).queue(function () {
        if (!flag) {
            flag = true;
            $('.mainContainer').fadeOut(2000, 'linear', function () {
                mySprite = chosenSprite;
                setupJoinScreen();
            });
        }
    });
};