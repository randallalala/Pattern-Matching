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
// - remove alerts
//start button
//restart button


//---------------------------------------------- INTERVAL ------------------------------------------

// clearInterval(interval);
// setInterval(function () {}, 1000);

//---------------------------------------------- GLOBAL VARIABLES --------------------------------

let runPattern = [];
let playerPattern = [];
let gameLevel = 1;
let status = null;
let levelsCompleted = 0;
let movesCounter = 0;
let downloadTimer = null



//---------------------------------------------- RESTART FUNCTION --------------------------------

function restart() {
    runPattern = [];
    playerPattern = [];
    gameLevel = 1;
    status = null;
    levelsCompleted = 0;
    movesCounter = 0;
    downloadTimer = null
}

//---------------------------------------------- RANDOM PATTERN LOOP --------------------------------

function randomPattern() {

    for (let i = 0; i < gameLevel; i++) {

        let random = Math.floor(Math.random() * 4) + 1;
        runPattern.push(random);
    }

    level();
    moves();
    blinker();

    // barTimer()

    clearInterval(downloadTimer)
    wordTimer()
    console.log("Pattern " + runPattern);
}

//------------------------------------------------- START BUTTON / PLAYER PATTERN -------------------------------------

// getElementById('startBtn').style.display = 'block';

document.getElementById("startBtn").addEventListener('click', function () {

    randomPattern();
    movesCounter = 1;
    this.style.display = 'none'

    document.getElementById("1").addEventListener("click", function () {

        playerPattern.push(1); // push selection into array
        $(this).fadeOut(100).fadeIn(100); // blink when user select square
        compare();
        movesCounter++;

    });

    document.getElementById("2").addEventListener("click", function () {

        playerPattern.push(2); // push selection into array
        $(this).fadeOut(100).fadeIn(100); // blink when user select square
        compare();
        movesCounter++;
    });

    document.getElementById("3").addEventListener("click", function () {

        playerPattern.push(3); // push selection into array
        $(this).fadeOut(100).fadeIn(100); // blink when user select square
        compare();
        movesCounter++;
    });

    document.getElementById("4").addEventListener("click", function () {

        playerPattern.push(4); // push selection into array
        $(this).fadeOut(100).fadeIn(100); // blink when user select square
        compare();
        movesCounter++;
    })

})



//--------------------------------------------------- COMPARING CHECKER ---------------------------------

function compare() {
    if (playerPattern.length == runPattern.length) {

        if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {

            console.log("Correct " + playerPattern);
            status = "win";
            win();
            runPattern = [];
            playerPattern = [];
            gameLevel++;
            levelsCompleted++;
            randomPattern();

        } else {
            document.getElementById('win').innerHTML = " "; //clear win msg
            console.log("lose");
            lose();
            status = "lose";
            resetBtn();
            document.getElementById("resetBtn").addEventListener("click", function () {
                location.reload()
            })

        }
    }
}

//--------------------------------------------------- CONTINUOUS COMPARE OPTION 2 ----------------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]
//--------------------------------------------------- RESET BUTTON  ----------------------------


function resetBtn() {
    let body = document.querySelector("body");
    let resetBtn = document.createElement('button');
    resetBtn.id = "resetBtn";
    resetBtn.classList.add = "btn btn-secondary btn-lg";
    body.appendChild(resetBtn);
    document.getElementById('resetBtn').innerHTML = "Reset Game";
}

//--------------------------------------------------- COLOR SQUARES BLINKER  ----------------------------


function blinker() {

    for (let i = 1; i < runPattern.length + 1; i++) {
        setTimeout(function () {
            $("#" + runPattern[i - 1]).fadeOut(200).fadeIn(200);
        }, i * 1100);
    }
}

//--------------------------------------------------- WIN LOSE TIMEUP NOTIFICATION  ----------------------------


function timeup() {
    let body = document.querySelector("body");
    let timeup = document.createElement('p');
    timeup.id = "timeup";
    body.appendChild(timeup);
    document.getElementById('timeup').innerHTML = "Time's up, you have lost the game..";
}

function lose() {
    let body = document.querySelector("body");
    let lose = document.createElement('p');
    lose.id = "lose";
    body.appendChild(lose);
    document.getElementById('lose').innerHTML = "Incorrect, you have lost the game..";
}

function win() {
    let body = document.querySelector("body");
    let win = document.createElement('p');
    win.id = "win";
    body.appendChild(win);
    document.getElementById('win').innerHTML = "Correct! \nNext round will have an additional sequence added";
}

//----------------------------------------------------- NAME OF PLAYER  ----------------------------------

function getPlayerName() {

    let body = document.querySelector("body");
    let player = document.createElement('p');
    player.id = "player";
    playerName = prompt('Enter your name');
    body.appendChild(player);
    document.getElementById('player').innerHTML = "Hello " + playerName;

    if (playerName == null) {
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


//
//-----------------------------------------------------------  TIMER  ------------------------------------------

function wordTimer() {
    let timeleft = 10;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Time's Up!";


        } else {
            document.getElementById("progressBar").value = 10 - timeleft;
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }

        timeleft -= 1;
    }, 1000);
}