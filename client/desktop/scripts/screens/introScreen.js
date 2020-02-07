const desktopSetup = function () {
    let rootContainer = $('#rootContainer');

    let titleContainer = $(`
        <div class="titleContainer">
            <div class="titleText">Let's Start Servin'</div>
            <div class="subText">All you need is a laptop, a phone, and friends!</div>
        </div>`);

    let proceedButton = $('<button id="startButton">START PLAYING</button>');
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