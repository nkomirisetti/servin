const mobileSetup = function () {
    let rootContainer = $('#rootContainer');
    rootContainer.empty();

    let titleContainer = $(`
        <div class='titleContainer'>
            <div class='titleTextMobile'>Let's Start Servin'</div>
        </div>`);

    titleContainer.append('<input type=\'text\' id=\'gameCodeEntry\' class=\'textBox\' placeholder=\'Game Code\'><br>');
    titleContainer.append('<input type=\'text\' id=\'playerNameEntry\' class=\'textBox\' placeholder=\'Player Name\'><br>');

    let proceedButton = $('<button>Next</button>');
    proceedButton.click(function () {
        const enteredName = $('#playerNameEntry').val().trim().toLowerCase();
        const enteredRoomCode = $('#gameCodeEntry').val().trim().toUpperCase();

        if (validateRoomCodeInput(enteredRoomCode, enteredName)) {
            myName = enteredName;
            myGameCode = enteredRoomCode;
            
            titleContainer.fadeOut(2000, 'linear').delay(1000).queue(function () {
                setupPlayerSelectScreen();
            });
        }
    });

    titleContainer.append(proceedButton);
    titleContainer.fadeOut(0).delay(1000).fadeIn(2000, 'linear');
    
    rootContainer.append(titleContainer);
};

// TODO add background music, potentially to a music class, better to host