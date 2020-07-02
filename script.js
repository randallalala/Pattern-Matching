// document.querySelector('red').addEventListener('click', function(event){
//     // let click = event.target.value;
//     // let output = inputHappened(clicked);

//---------------------------------------------- TO FIX -------------------------------------------------------


//---------------------------------------------- GLOBAL VARIABLES ----------------------------------------------
let audio = new Audio('homer_scream.mp3');
audio.volume = 0.2;
let runPattern = [];
let playerPattern = [];
let gameLevel = 1;
let levelsCompleted = 0;
let movesCounter = 0;
let downloadTimer = null;
let patternTimerRef = null;
let globalIndex = 0;
// console.log(patternTimerRef);
let msg = document.createElement('p');
let body = document.querySelector("body");
msg.id = "msg";
body.appendChild(msg);
let gameState = false;
let difficulty = document.getElementById("difficulty");


//---------------------------------------------- RANDOM PATTERN LOOP  --------------------------------------------


function randomPattern() {

    for (let i = 0; i < gameLevel; i++) {

        let random = Math.floor(Math.random() * 4) + 1;
        runPattern.push(random);
        patternTimerRef = i + 4; // num of seconds in timer + 4sec 
        document.getElementById("progressBar").max = patternTimerRef;

    }
    // console.log(patternTimerRef);
    level(); //level counter
    moves(); // moves counter
    blinker(); // sound and flash for button
    clearInterval(downloadTimer); // clear timer interval 
    timer(); //
    // console.log(gameState);
    console.log("Pattern " + runPattern);
}

//------------------------------------------------- START BUTTON / PLAYER PATTERN ---------------------------------

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
            movesCounter++; // moves counter of player
            audio.play(); //  trigger sound when player clicks
        });

        document.getElementById("2").addEventListener("click", function () {
            playerPattern.push(2); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++; // moves counter of player
            audio.play(); // trigger sound when player clicks
        });

        document.getElementById("3").addEventListener("click", function () {
            playerPattern.push(3); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++; // moves counter of player
            audio.play(); //  trigger sound when player clicks
        });

        document.getElementById("4").addEventListener("click", function () {
           
            
            playerPattern.push(4); // push selection into array
            $(this).fadeOut(100).fadeIn(100); // blink when user select square
            compare();
            movesCounter++; // moves counter
            audio.play(); //  trigger sound when player clicks
        })
    }
})



//--------------------------------------------------- COMPARING CHECKER -------------------------------------------


function compare() {
    let globalIndex = playerPattern.length-1
    if (JSON.stringify(runPattern[globalIndex]) == JSON.stringify(playerPattern[globalIndex])) {
        // console.log(globalIndex + '-Index correct');
        // console.log(playerPattern[globalIndex] + "-playerPattern correct");
        // console.log(runPattern[globalIndex] + "-runPattern correct");
        // globalIndex++;

        if (playerPattern.length == runPattern.length) {
            globalIndex = 0;
            // console.log("deeeperr");
            if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {
                // console.log("Correct " + playerPattern);
                win(); // win msg on screen
                runPattern = []; // reset runpattern
                playerPattern = [];  // reset playerpattern
                if (difficulty.value == "normal") {
                    gameLevel++; // add one more pattern to next sequence
                }
                else if (difficulty.value == "extreme") {
                    gameLevel += 3; //add 3 more patterns to next sequence
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


//--------------------------------------------------- CONTINUOUS COMPARE OPTION 2 ------------------------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]

//--------------------------------------------------- RESET BUTTON  ----------------------------------------------

function resetBtn() {
    let resetBtn = document.createElement('button');
    resetBtn.id = "resetBtn";
    resetBtn.classList.add = "btn btn-secondary btn-lg";
    body.appendChild(resetBtn);
    document.getElementById('resetBtn').innerHTML = "Reset Game";

}

//--------------------------------------------------- COLOR SQUARES BLINKER+SOUND  ---------------------------------

function blinker() {

    for (let i = 1; i < runPattern.length + 1; i++) {
        setTimeout(function () { // delay for flash
            $("#" + runPattern[i - 1]).fadeOut(200).fadeIn(200);
            document.getElementById("sound").play();
        }, i * 900); // each flash 900ms apart 
    }
}

//--------------------------------------------------- WIN LOSE TIMEUP NOTIFICATION  ---------------------------------


function lose() {
    msg.innerHTML = "Incorrect, you have lost the game..";
    clearInterval(downloadTimer);
    document.getElementById("progressBar").value = 0;
    document.getElementById("countdown").innerHTML = "";
    reset();
    gameState = false;

}

function win() {
    msg.innerHTML = "Correct! Next round will have an additional sequence added";
    gameState = false;

}

//----------------------------------------------------- NAME OF PLAYER  -----------------------------------------------

function getPlayerName() {

    let body = document.querySelector("body");
    let player = document.createElement('p');
    player.id = "player";
    playerName = prompt('Enter your name');
    body.appendChild(player);
    document.getElementById('player').innerHTML = "Hello " + playerName;

    if (playerName == null) { // if no name entered, show stranger
        document.getElementById("player").innerHTML = "Hello Stranger";
    }
}
// getPlayerName();

//---------------------------------------------------- LEVELS COMPLETED  -----------------------------------------------

function level() {  // level counter

    let body = document.querySelector("body");
    let levelIndicator = document.createElement('p');
    levelIndicator.id = "levels";
    body.appendChild(levelIndicator);
    document.getElementById('levels').innerHTML = "Levels Completed: " + levelsCompleted;

}

//----------------------------------------------------- # OF MOVES  -----------------------------------------------------

function moves() {   // moves/click counter

    let body = document.querySelector("body");
    let moves = document.createElement('p');
    moves.id = "moves";
    body.appendChild(moves);
    document.getElementById('moves').innerHTML = "Total Moves Made: " + movesCounter;
}


//---------------------------------------------------  TIMER  ------------------------------------------------------------

function timer() {
    let timeleft = patternTimerRef; 
    downloadTimer = setInterval(function () { //trigger every 1s
        if (timeleft <= 0) { // keep running if more than 0s
            document.getElementById("countdown").innerHTML = "Time's Up! you have lost the game..";
            if (timeleft == 0) { // if timer 0s
                document.getElementById("progressBar").value = 0; // clear prog bar
                msg.innerHTML = ""; // reset back to empty
                gameState = false; 
                reset();
            }
        } else { //keep running words and progbar if havent reached 0s
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            document.getElementById("progressBar").value = patternTimerRef - timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

//-------------------------------------------------- SHOW RESET BUTTON / RELOAD ON CLICK  --------------------------------

function reset() {
    playerPattern = [];
    runPattern = [];
    resetBtn();
    document.getElementById("resetBtn").addEventListener("click", function () {
        location.reload();
    })
}

//-------------------------------------------------- TOP SCORERS  --------------------------------
let LSfirstName = localStorage.getItem('num1Name');
let LSfirstScore = localStorage.getItem('num1Score');
let LSsecondName = localStorage.getItem('num2Name');
let LSsecondScore = localStorage.getItem('num2Score');
let LSthirdName = localStorage.getItem('num3Name');
let LSthirdScore = localStorage.getItem('num3Score');
let LSfirstLevel = localStorage.getItem('levelFirst');
let LSsecondLevel = localStorage.getItem('levelSecond');
let LSthirdLevel = localStorage.getItem('levelThird');



//OPTIMIZED LEADERBOARD #1-#3 FUNCTIONS
//FN - TO FILL 3RD PLACE IN TABLE
const thirdGroup = () => {
    if(LSthirdName && LSthirdScore && LSthirdLevel){
        thirdName.textContent = `${LSthirdName}`;
        thirdScore.textContent = `${LSthirdScore}`;
        playerLevelThird.textContent = `${LSthirdLevel}`;
        
    }
}

// //FN - TO FILL 2ND PLACE IN TABLE
const secondGroup = () => {
    if(LSsecondName && LSsecondScore && LSsecondLevel){
        secondName.textContent = `${LSsecondName}`;
        secondScore.textContent = `${LSsecondScore}`;
        playerLevelSecond.textContent = `${LSsecondLevel}`;
    }
}

// //FN - TO FILL 1ST PLACE IN TABLE
const firstGroup = () => {
    if(LSfirstName && LSfirstScore && LSfirstLevel){
        firstName.textContent = `${LSfirstName}`;
        firstScore.textContent = `${LSfirstScore}`;
        playerLevelFirst.textContent = `${LSfirstLevel}`;
    }
}

//FN-TO CHECK IF HIGHSCORE IS EXCEEDED, IF YES, DISPLAY NEW HIGHSCORE
const isHighScore = () =>{
    if(LSfirstScore){
        highScoreDisplay.textContent = LSfirstScore;
    }
}


//FN - UPDATE WALL OF FAME SCOREBOARD WITH LOCALSTORAGE
const ranking = () => {

    //TRACK INPUT FOR TESTCASES
    scoreArray.unshift(totalScore);

    if(LSfirstScore){
        //IF THERE ARE EXISTING SCORES
            if(totalScore >= Number(LSfirstScore)){

                //store the array in localstorage, store as string, when get data need to convert(parse)
                if(LSsecondName){
                    LSthirdName =  LSsecondName;
                    LSthirdScore =  LSsecondScore;
                    LSthirdLevel = LSsecondLevel;
                    localStorage.setItem('num3Name', LSthirdName);
                    localStorage.setItem('num3Score', LSthirdScore);
                    localStorage.setItem('levelThird', LSthirdLevel)
                }


                LSsecondName =  LSfirstName;
                LSsecondScore =  LSfirstScore;
                LSsecondLevel = LSfirstLevel;
                localStorage.setItem('num2Name', LSsecondName);
                localStorage.setItem('num2Score', LSsecondScore);
                localStorage.setItem('levelSecond', LSsecondLevel)


                LSfirstScore = totalScore;
                LSfirstName = player;
                LSfirstLevel =  level.value;
                localStorage.setItem('num1Name', LSfirstName);
                localStorage.setItem('num1Score', LSfirstScore);
                localStorage.setItem('levelFirst', LSfirstLevel);

                
                resultModal();

            } 

            else if(totalScore > Number(LSsecondScore)) {

                if(LSsecondName){
                    LSthirdName =  LSsecondName;
                    LSthirdScore = LSsecondScore;
                    LSthirdLevel = LSsecondLevel;
                    localStorage.setItem('num3Name', LSthirdName);
                    localStorage.setItem('num3Score', LSthirdScore);
                    localStorage.setItem('levelThird', LSthirdLevel)
                }


                LSsecondName =  player;
                LSsecondScore =  totalScore;
                LSsecondLevel = level.value;
                localStorage.setItem('num2Name', LSsecondName);
                localStorage.setItem('num2Score', LSsecondScore);
                localStorage.setItem('levelSecond', LSsecondLevel)


            }

            else if(totalScore > Number(LSthirdScore)) {

                LSthirdName =  player;
                LSthirdScore =  totalScore;
                LSthirdLevel = level.value;
                localStorage.setItem('num3Name', LSthirdName);
                localStorage.setItem('num3Score', LSthirdScore);
                localStorage.setItem('levelThird', LSthirdLevel);
                

            }


    } else {
        //IF LEADERBOARD IS TOTALLY EMPTY
        if(totalScore){
            LSfirstScore = totalScore;
            LSfirstName = player;
            LSfirstLevel =  level.value;
            localStorage.setItem('num1Name', LSfirstName)
            localStorage.setItem('num1Score', LSfirstScore)
            localStorage.setItem('levelFirst', LSfirstLevel);

            resultModal();
        }
    }


//largest number

    console.log(localStorage);

    //localStorage array is doing unshift rather than push - just fyi

    //populate leaderboard
    firstGroup();
    secondGroup();
    thirdGroup();

}