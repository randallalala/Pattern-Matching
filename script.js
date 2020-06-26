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

let runPattern = []
let playerPattern = []
let gameLevel = 2

for (let i = 0; i < 2; i++) {
    let random = Math.floor(Math.random() * 3) + 1;
    runPattern.push(random);
    // console.log(random);
    // let showcolor.id = function [random]  // wtffffff toggle this color id
}
console.log(runPattern);


//------------------------------------------------- visual notifier when colors are clicked----------------

// $("#1").click(function () {
//     $(this).toggleClass('opaque');
//     $this = $(this)
//     setTimeout(function () {
//         $this.toggleClass('opaque')}, 500);
// });

for (let num of runPattern) {
$("#"+num).fadeOut(1000).fadeIn(1000);
setTimeout(function () {}, 2000);
  }

// document.getElementById("1").addEventListener("click", function(){
//     console.log("hi");
// });

document.getElementById("1").addEventListener("click", function(){
    let random = Math.floor(Math.random() * 3) + 1;
    playerPattern.push(random);
});

console.log(playerPattern);

// container.addEventListener("click", clicked);
// function clicked(event) {
//     document.querySelector('.' + event.target.className)
// }