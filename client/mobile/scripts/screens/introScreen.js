const mobileSetup = function () {
    let rootContainer = $('#rootContainer');

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
        titleContainer.fadeOut(1500, function(){
            setupHostScreen();
        });
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