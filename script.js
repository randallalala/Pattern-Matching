// document.querySelector('red').addEventListener('click', function(event){
//     // let click = event.target.value;
//     // function alert(){
//     //     if click 
//         alert("red");
//     }
//     // let output = inputHappened(clicked);


//-------------------------------------------- OLD COLOR BLINKER TOGGLE -----------------------------


// $("#1").click(function () {
//     $(this).toggleClass('opaque');
//     $this = $(this)
//     setTimeout(function () {
//         $this.toggleClass('opaque')}, 500);
// });


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
    blinker() // blink for id color (TO FIX DELAY) 
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

    for (let i=1; i<runPattern.length+1; i++) {
        setTimeout( function timer(){
            $("#" + runPattern[i-1]).fadeOut(200).fadeIn(200);
        }, i*1100 );
    }
    
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
}

//----------------------------------------------------- NAME OF PLAYER  ----------------------------------

function getPlayerName() {

    let body = document.querySelector("body");
    let player = document.createElement('p');
    player.id = "player";
    playerName = prompt('Enter your name');
    body.appendChild(player);
    document.getElementById('player').innerHTML = "Hello " + playerName;
}

getPlayerName();

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


//------------------------------------------------------- TIMER 1 --------------------------------------------

// function startTimer(duration, display) {
//     let timer = duration,
//         seconds;
//     setInterval(function () {
//         seconds = parseInt(timer % 60, 10);
//         display.textContent = seconds + "secs";
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

//------------------------------------------------------- TIMER 2 BAR ---------------------------------------------

// let timeleft = 5;
// let downloadTimer = setInterval(function () {
//     if (timeleft <= 0) {
//         clearInterval(downloadTimer);
//     }

//     document.getElementById("progressBar").value = 5 - timeleft;
//     timeleft -= 0.5;
// }, 500); // ADD TRIGGER TO STOP GAME - PLAYER RAN OUT OF TIME

//-------------------------------------------------------- WORDED TIMER -------------------------------------------

// function timerCountDownFunction() {

//     timerInterval = setInterval(timerCountDownFunction, 1000)
//     let body = document.querySelector("body");
//     let counDownTimer = document.createElement('p');
//     let gameTime = 5;
//     body.appendChild(counDownTimer);
//     gameTime--;
//     countDownTimer.innerHTML = (`Timer = ${gameTime}`);

//     if (gameTime === 0) {
//         alert(`Time's Up !!! \n Your Score is ${score}`);
//         clearInterval(timerInterval);
//         gameState = 1;
//     }
// }
//----------------------------------------------------------- WORDED TIMER 2 ------------------------------------------
// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   }
//   timeleft -= 1;
// }, 1000);

//----------------------------------------------------------- START BUTTON --------------------------------------------

// startBtn.addEventListener('click', function(){
// })

