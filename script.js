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
//--------------------------------------------------------------------------------------------



// $(".btn-new").click(function () { 
// gamePlay = true;
// currentScore = 0;
// endGameScore = 20;
// finalScores = [0, 0];
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

//   if(this.innerHTML === 'Play') 
//   { 
//     this.innerHTML = 'Pause';
//     boxOne.classList.add('horizTranslate');
//   } else {
//     this.innerHTML = 'Play';
//     var computedStyle = window.getComputedStyle(boxOne),
//         marginLeft = computedStyle.getPropertyValue('margin-left');
//     boxOne.style.marginLeft = marginLeft;
//     boxOne.classList.remove('horizTranslate');   }
//--------------------------------------------------------------------------------------------

//   clearInterval(interval);

// let interval = setInterval(function() {
//     let randomGen = Math.floor(Math.random() * 3) + 1;
//     console.log(randomGen);
//   }, 1200);

let runPattern = [];
let playerPattern = [];
let gameLevel = 2;

//----------------------------------------------random pattern loop

function randomPattern() {
    for (let i = 0; i < gameLevel; i++) {
        let random = Math.floor(Math.random() * 3) + 1;
        runPattern.push(random);
    }
    console.log(runPattern);
    runPattern = [];
    gameLevel++;
}

//----------------------------------------------for saved pattern from prev loop
// function randomPattern() {
//         let random = Math.floor(Math.random() * 3) + 1;
//         runPattern.push(random);
//         console.log(runPattern);
// } 
//---------------------------------------------

randomPattern();
// test loop sorta
document.getElementById("1").addEventListener("click", function () {
    playerPattern.push(1);
    console.log(playerPattern);
    // randomPattern();
});
document.getElementById("2").addEventListener("click", function () {
    playerPattern.push(2);
    console.log(playerPattern);
    // randomPattern();
});
document.getElementById("3").addEventListener("click", function () {
    playerPattern.push(3);
    console.log(playerPattern);
    // randomPattern();
});

function comparing(){
    for (let i = 0; i < runPattern.length; i++) {
        if(runPattern[i] === playerPattern[i]){
    }
}

}


// console.log(playerPattern);

//------------------------------------------------- visual notifier when colors are clicked----------------

// $("#1").click(function () {
//     $(this).toggleClass('opaque');
//     $this = $(this)
//     setTimeout(function () {
//         $this.toggleClass('opaque')}, 500);
// });

for (let num of runPattern) {
    $("#" + num).fadeOut(500).fadeIn(500);
    setTimeout(function () {}, 1000);
}



// document.getElementById("1").addEventListener("click", function(){
//     let random = Math.floor(Math.random() * 3) + 1;
//     playerPattern.push(random);
// });


// container.addEventListener("click", clicked);
// function clicked(event) {
//     document.querySelector('.' + event.target.className)
// }