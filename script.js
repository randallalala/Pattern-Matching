// document.querySelector('red').addEventListener('click', function(event){
//     // let click = event.target.value;
//     // function alert(){
//     //     if click 
//         alert("red");
//     }
//     // let output = inputHappened(clicked);
//--------------------------------------------------------------------------------------------
//   });

// //     let display = function( data ){
// //     let output = document.querySelector('#output');
// //     output.innerText = data;
// //   }


// // function clicked(event) {
// //     let clickk = document.querySelector('.'+ event.target.className)

//--------------------------------------------------------------------------------------------

// @keyframes pop{
//     50%  {transform: scale(1.2);}
//   }
//   #pop:hover{
//     animation: pop 0.3s linear 1;}
//----------------------------------- OLD COLOR BLINKER TOGGLE -------------------------------------------------


// $("#1").click(function () {
//     $(this).toggleClass('opaque');
//     $this = $(this)
//     setTimeout(function () {
//         $this.toggleClass('opaque')}, 500);
// });


//---------------------------------------------- INTERVAL ----------------------------------------------

// clearInterval(interval);
// setInterval(function () {}, 1000);

//---------------------------------------------- GLOBAL VARIABLES --------------------------

let runPattern = [];
let playerPattern = [];
let gameLevel = 2;
let status = null;
randomPattern()
compare()

//---------------------------------------------- RANDOM PATTERN LOOP --------------------------

function randomPattern() {
    for (let i = 0; i < gameLevel; i++) {
        let random = Math.floor(Math.random() * 3) + 1;
        runPattern.push(random);
    }
    blinker() // blink for id color (TOFIX DELAY) 
    console.log("Pattern " + runPattern);
}

//--------------------------------------- PLAYER PATTERN -------------------------------------------

document.getElementById("1").addEventListener("click", function () {
    playerPattern.push(1); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
});

document.getElementById("2").addEventListener("click", function () {
    playerPattern.push(2); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
});

document.getElementById("3").addEventListener("click", function () {
    playerPattern.push(3); // push selection into array
    $(this).fadeOut(100).fadeIn(100); // blink when user select square
    compare()
});


//------------------------------------ COMPARING CHECKER ---------------------------------

function compare() {
    if (playerPattern.length == runPattern.length) {
        if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {
            console.log("Correct " + playerPattern);
            status = "win"
            notification()
            runPattern = [];
            playerPattern = [];
            gameLevel++;
            randomPattern()
        } else {
            console.log("false");
            status = "lose"
            notification()
        }
    }
}


//------------------------------------------ CONTINUOUS COMPARE OPTION 2 ----------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]

//------------------------------------------------- COLOR SQUARES BLINKER  ----------------
function blinker() {
    for (let num of runPattern) {
        $("#" + num).fadeOut(200).fadeIn(200);
        setTimeout(function () {}, 500);
    }
}


//------------------------------------------------- WIN LOSE NOTIFICATION  ----------------

function notification() {

    if (status == "win") {
        alert('Correct! Next round will have an additional sequence');
    }
    if (status == "lose") {
        alert('Incorrect, you have lost the game..');
    }

    // let playerOne = document.createElement('p');
    // playerOne.id = "player1";
    // container.appendChild(playerOne);
    // document.getElementById('player1').innerHTML = "Player 1: " + playerOneName;

}