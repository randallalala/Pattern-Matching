// document.querySelector('red').addEventListener('click', function(event){
//     // let click = event.target.value;
//     // function alert(){
//     //     if click 
//         alert("red");
//     }
//     // let output = inputHappened(clicked);


//-------------------------------------------- TO FIX -----------------------------------------


//---------------------------------------------- INTERVAL ----------------------------------------------

// clearInterval(interval);
// setInterval(function () {}, 1000);

//---------------------------------------------- GLOBAL VARIABLES ----------------------------------------
let audio = new Audio('homer_scream.mp3');
audio.volume = 0.3;
let runPattern = [];
let playerPattern = [];
let gameLevel = 1;
let levelsCompleted = 0;
let movesCounter = 0;
let downloadTimer = null
let patternTimerRef = null
let globalIndex = 0
// console.log(patternTimerRef);
let msg = document.createElement('p');
let body = document.querySelector("body");
msg.id = "msg";
body.appendChild(msg);
let gameState = false
let difficulty = document.getElementById("difficulty")



//---------------------------------------------- RANDOM PATTERN LOOP  ----------------------------------------


function randomPattern() {

    for (let i = 0; i < gameLevel; i++) {

        let random = Math.floor(Math.random() * 4) + 1;
        runPattern.push(random);
        //i=#of seconds allowed + 4sec 
        patternTimerRef = i + 4
        document.getElementById("progressBar").max = patternTimerRef;
        if (i == gameLevel) {
            gameState = true
            console.log("object");
        }

    }
    // console.log(patternTimerRef);
    level(); //level counter
    moves(); // moves counter
    blinker(); // sound and flash for button
    clearInterval(downloadTimer)
    wordTimer()
    console.log(gameState);
    console.log("Pattern " + runPattern);
}

//------------------------------------------------- START BUTTON / PLAYER PATTERN -------------------------------------

document.getElementById("startBtn").addEventListener('click', function () {
    gameState = true;

    if (gameState) {
        randomPattern();
        movesCounter = 1;
        this.style.display = 'none' // hide start button

        document.getElementById("1").addEventListener("click", function () {
            playerPattern.push(1); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++;
            audio.play();
        });

        document.getElementById("2").addEventListener("click", function () {
            playerPattern.push(2); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++;
            audio.play();
        });

        document.getElementById("3").addEventListener("click", function () {
            playerPattern.push(3); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++;
            audio.play();
        });

        document.getElementById("4").addEventListener("click", function () {
            playerPattern.push(4); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++;
            audio.play();
        })
    }
})

//--------------------------------------------------- COMPARING CHECKER -----------------------------


function compare() {
    if (JSON.stringify(runPattern[globalIndex]) == JSON.stringify(playerPattern[globalIndex])) {
        // console.log(globalIndex + '-Index correct');
        // console.log(playerPattern[globalIndex] + "-playerPattern correct");
        // console.log(runPattern[globalIndex] + "-runPattern correct");
        globalIndex++

        if (playerPattern.length == runPattern.length) {
            globalIndex = 0
            // console.log("deeeperr");
            if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {
                // console.log("Correct " + playerPattern);
                win(); // win msg on screen
                runPattern = []; // reset runpattern
                playerPattern = [];  // reset playerpattern
                if (difficulty.value == "normal") {
                    gameLevel++;
                }
                else if (difficulty.value == "extreme") {
                    gameLevel += 3;
                }
                levelsCompleted++;   // levels counter
                randomPattern();    // run next pattern

            } else {
                console.log("lose");
                msg.innerHTML = ""; //clear win msg
                return lose(); // lose msg on screen
                // gameState = false

            }
        }
    } else {
        console.log("lose");
        // gameState = false

        return lose(); // lose msg on screen
        // console.log(globalIndex + "-Index wrong");
        // console.log(playerPattern[globalIndex] + "-playerPattern wrong");
        // console.log(runPattern[globalIndex] + "-runPattern wrong");
    }
}



//--------------------------------------------------- CONTINUOUS COMPARE OPTION 2 ----------------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]

//--------------------------------------------------- RESET BUTTON  ------------------------------------

function resetBtn() {
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
            document.getElementById("sound").play()
        }, i * 1100);
    }
}

//--------------------------------------------------- WIN LOSE TIMEUP NOTIFICATION  ----------------------------

// function timeup() {
//     let body = document.querySelector("body");
//     let timeup = document.createElement('p');
//     timeup.id = "timeup";
//     body.appendChild(timeup);
//     document.getElementById('timeup').innerHTML = "Time's up, you have lost the game..";
// }

// function lose() {
//     let body = document.querySelector("body");
//     let lose = document.createElement('p');
//     lose.id = "lose";
//     body.appendChild(lose);
//     document.getElementById('lose').innerHTML = "Incorrect, you have lost the game..";
//     clearInterval(downloadTimer);
//     document.getElementById("progressBar").value = 0;
//     document.getElementById("countdown").innerHTML = "";
//     reset()
//     document.getElementById("win").innerHTML = "";
// }

function lose() {
    msg.innerHTML = "Incorrect, you have lost the game..";
    clearInterval(downloadTimer);
    document.getElementById("progressBar").value = 0;
    document.getElementById("countdown").innerHTML = "";
    reset()
    gameState = false

}

function win() {
    msg.innerHTML = "Correct! Next round will have an additional sequence added";
    gameState = false

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


//-----------------------------------------------------------  TIMER  ------------------------------------------

function wordTimer() {
    let timeleft = patternTimerRef;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            // document.getElementById("progressBar").value = 0 ;
            document.getElementById("countdown").innerHTML = "Time's Up! you have lost the game..";
            if (timeleft == 0) {
                document.getElementById("progressBar").value = 0;
                msg.innerHTML = "";
                gameState = false;
                reset();
            }
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            document.getElementById("progressBar").value = patternTimerRef - timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

//-------------------------------------------------- SHOW RESET BUTTON / RELOAD ON CLICK  ------------------------------------------

function reset() {
    playerPattern = [];
    runPattern = [];
    resetBtn();
    document.getElementById("resetBtn").addEventListener("click", function () {
        location.reload();
    })
}