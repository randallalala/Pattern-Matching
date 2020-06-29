// document.querySelector('red').addEventListener('click', function(event){
//     // let click = event.target.value;
//     // function alert(){
//     //     if click 
//         alert("red");
//     }
//     // let output = inputHappened(clicked);


//-------------------------------------------- TO FIX -----------------------------------------

// -- 1 bug, blinker  shows last index of array after each correct run
// -- 2 bug for moves counter, first round missing 1 count


//---------------------------------------------- INTERVAL ------------------------------------------

// clearInterval(interval);
// setInterval(function () {}, 1000);

//---------------------------------------------- GLOBAL VARIABLES --------------------------------

let runPattern = [];
let playerPattern = [];
let gameLevel = 2;
let status = null;
let levelsCompleted = 0;
let movesCounter = 0;

let timer;

randomPattern()
compare()


//---------------------------------------------- RESTART FUNCTION --------------------------------

function restart() {
    runPattern = [];
    playerPattern = [];
    gameLevel = 2;
    status = null;
    levelsCompleted = 0;
    movesCounter = 0;
    randomPattern()
    compare()

}

//---------------------------------------------- RANDOM PATTERN LOOP --------------------------------

function randomPattern() {

    for (let i = 0; i < gameLevel; i++) {

        let random = Math.floor(Math.random() * 3) + 1;
        runPattern.push(random);
    }

    level()
    moves()
    blinker()

    barTimer()
    wordTimer()
    console.log("Pattern " + runPattern);
}

//------------------------------------------------- PLAYER PATTERN -------------------------------------

document.getElementById("1").addEventListener("click", function () {

    playerPattern.push(1); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
    movesCounter++

});

document.getElementById("2").addEventListener("click", function () {

    playerPattern.push(2); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
    movesCounter++
});

document.getElementById("3").addEventListener("click", function () {

    playerPattern.push(3); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
    movesCounter++
});

//--------------------------------------------------- COMPARING CHECKER ---------------------------------

function compare() {
    if (playerPattern.length == runPattern.length) {

        if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {

            console.log("Correct " + playerPattern);
            status = "win"
            notification()
            runPattern = [];
            playerPattern = [];
            gameLevel++;
            levelsCompleted++;
            randomPattern()
        } else {

            console.log("lose")
            status = "lose"
            notification()
        }
    }
}

//--------------------------------------------------- CONTINUOUS COMPARE OPTION 2 ----------------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]

//--------------------------------------------------- COLOR SQUARES BLINKER  ----------------------------


function blinker() {

    // for (let i = 1; i < runPattern.length + 1; i++) {
    //     timer = setTimeout(function () {
        //         console.log("flash" +runPattern[i-1]);
        //         $("#" + runPattern[i - 1]).fadeOut(200).fadeIn(200);
    //     }, i*1500);
    // }
    for (let i = 1; i < runPattern.length + 1; i++) {
        //     setTimeout(function () {
        // $("#" + runPattern[i - 1]).fadeOut(200).fadeIn(200);
        // }, i*1100);
        
        $("#" + runPattern[i - 1]).delay(i*700).fadeOut(200).fadeIn(200);
    }

// clearTimeout(timer)
    // let i = 0; //  set your counter to 1
    // function myLoop() { //  create a loop function
    //     setTimeout(function () { //  call a 3s setTimeout when the loop is called
    //         $("#" + runPattern[i]).fadeOut(200).fadeIn(200);
    //         i++; //  increment the counter
    //         if (i < runPattern.length) { //  if the counter < 10, call the loop function
    //             myLoop(); //  ..  again which will trigger another 
    //         } //  ..  setTimeout()
    //     }, 1500)
    // }
    // myLoop();

}

//--------------------------------------------------- WIN LOSE NOTIFICATION  ----------------------------

function notification() {

    if (status == "win") {
        alert('Correct! \nNext round will have an additional sequence added');
    }

    if (status == "lose") {
        restart()
        alert("Incorrect, you have lost the game.. \nClick ok to restart");
    }

    if (status == "timeup") {
        restart()
        alert("Time's up, you have lost the game.. \nClick ok to restart");
    }
}

//----------------------------------------------------- NAME OF PLAYER  ----------------------------------

function getPlayerName() {

    let body = document.querySelector("body");
    let player = document.createElement('p');
    player.id = "player";
    playerName = prompt('Enter your name');
    body.appendChild(player);
    document.getElementById('player').innerHTML = "Hello " + playerName;

    if (playerName != null) {
        document.getElementById("player").innerHTML = "Hello Stranger";
    }
}
// getPlayerName();

//---------------------------------------------------- LEVELS COMPLETED  ----------------------------------

function level() {

    let body = document.querySelector("body");
    let levelIndicator = document.createElement('p');
    levelIndicator.id = "levels";
    body.appendChild(levelIndicator);
    document.getElementById('levels').innerHTML = "Levels Completed: " + levelsCompleted;

}

//----------------------------------------------------- # OF MOVES  ----------------------------------------

function moves() {

    let body = document.querySelector("body");
    let moves = document.createElement('p');
    moves.id = "moves";
    body.appendChild(moves);
    document.getElementById('moves').innerHTML = "Total Moves Made: " + movesCounter;
}


//------------------------------------------------------- TIMER - BAR ---------------------------------------------

function barTimer() {
    let bartimeleft = 8;
    let bardownloadTimer = setInterval(function () {

        if (bartimeleft <= 0 || status == "win") {
            clearInterval(bardownloadTimer);
                // status = "timeup"
                // notification()
        }

        document.getElementById("progressBar").value = 8 - bartimeleft;
        bartimeleft -= 1;
    }, 500); // ADD TRIGGER TO STOP GAME - PLAYER RAN OUT OF TIME
}
//----------------------------------------------------------- WORDED TIMER  ------------------------------------------
function wordTimer() {
    let timeleft = 8;
    let downloadTimer = setInterval(function () {

        if (timeleft <= 0|| status == "win") {
            clearInterval(downloadTimer );
            document.getElementById("countdown").innerHTML = "Time's Up!";
         

        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }

        timeleft -= 1;
    }, 500);
}


//----------------------------------------------------------- START BUTTON --------------------------------------------

// startBtn.addEventListener('click', function(){
// })