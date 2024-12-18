// COIN FLIP SIMULATOR

// HTML Variables
let outputE1 = document.getElementById("output");
let headsE1 = document.getElementById("heads-out");
let tailsE1 = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputE1.innerHTML = "<img src='img/heads.png'>";
    numHeads += 1;
    headsE1.innerHTML = numHeads;
  } else {
    outputE1.innerHTML = "<img src ='img/tails.png'/> ";
    numTails++;
    tailsE1.innerHTML = numTails;
  }
}
