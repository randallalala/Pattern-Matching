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

//   clearInterval(interval);

// let interval = setInterval(function() {
//     let randomGen = Math.floor(Math.random() * 3) + 1;
//     console.log(randomGen);
//   }, 1200);


//---------------------------------------------- GLOBAL VARIABLES --------------------------


let runPattern = [];
let playerPattern = [];
let gameLevel = 2;


//---------------------------------------------- RANDOM PATTERN LOOP --------------------------

// IIFE
function randomPattern() {
        for (let i = 0; i < gameLevel; i++) {
            let random = Math.floor(Math.random() * 3) + 1;
            runPattern.push(random);
        }
        console.log("RunPattern " + runPattern);
        gameLevel++;
    }
    randomPattern()

//--------------------------------------- PLAYER PATTERN -------------------------------------------

// randomPattern();
// test loop sorta

document.getElementById("1").addEventListener("click", function () {
    playerPattern.push(1); // push selection into array
    // console.log("Player " + playerPattern);
    compare()
    $(this).fadeOut(500).fadeIn(500); // blink when user select square
});

document.getElementById("2").addEventListener("click", function () {
    playerPattern.push(2); // push selection into array
    // console.log("Player " + playerPattern);
    compare()
    $(this).fadeOut(500).fadeIn(500); // blink when user select square
});

document.getElementById("3").addEventListener("click", function () {
    playerPattern.push(3); // push selection into array
    // console.log("Player " + playerPattern);
    compare()
    $(this).fadeOut(500).fadeIn(500); // blink when user select square
});

//------------------------------------ COMPARING CHECKER ---------------------------------

function compare() {
    if (playerPattern.length == runPattern.length) {
        if (JSON.stringify(runPattern) == JSON.stringify(playerPattern)) {
            console.log("Player " + playerPattern);
            console.log("true");
            randomPattern();
        } else {
            console.log("false");
        }
    }
         else {
            console.log("error");
        }
}

//------------------------------------------------- COMPARE OPTION 2 ----------------

// runPattern.length === playerPattern.length && runPattern.every(function (value, index) {
// return value === playerPattern[index]

//------------------------------------------------- COLOR SQUARES BLINKER ----------------
(
    function blinker() {
        for (let num of runPattern) {
            $("#" + num).fadeOut(500).fadeIn(500);
            setTimeout(function () {}, 1000);
        }
    }
)()


//------------------------------------------------- ON CLICK CHECKER ----------------


// container.addEventListener("click", clicked);
// function clicked(event) {
//     document.querySelector('.' + event.target.className)
// }