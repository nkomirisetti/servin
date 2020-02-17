const mobileSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();
    
    let titleContainer = $(`
        <div class="titleContainer">
            <div class="titleTextMobile">Let's Start Servin'</div>
        </div>`);

    titleContainer.append('<input type="text" id="gameCodeEntry" class="textBox" placeholder="Game Code">');
    titleContainer.append('<br>');
    titleContainer.append('<input type="text" id="playerNameEntry" class="textBox" placeholder="Player Name">');
    titleContainer.append('<br>');
    let proceedButton = $('<button id="startButton">Next</button>');
    proceedButton.click(function () {

        if ($.trim($('#playerNameEntry').val()) == '') {
            alert('Make sure you enter a valid name!');
        } else if (!($('#gameCodeEntry').val().match(/^[A-Za-z]+$/) && $('#gameCodeEntry').val().length == 4)) {
            alert('Make sure your gamecode is valid!');
        } else {
            myName = $.trim($('#playerNameEntry').val()).trim().toLowerCase();
            myGameCode = $('#gameCodeEntry').val().trim().toUpperCase();
            titleContainer.fadeOut(2000, 'linear').delay(1000).queue(function () {
                setupPlayerSelectScreen();
            });
        }
    });

    $('#backgroundContainer').append(`
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
    `);
    titleContainer.append(proceedButton);
    titleContainer.fadeOut(1).delay(1000).fadeIn(2000, 'linear');
    rootContainer.append(titleContainer);
};

// TODO add background music, potentially to a music class
