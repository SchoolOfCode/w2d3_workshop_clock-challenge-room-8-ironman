const hand = document.querySelector(".hand");

//Initialize the variable to be numbers
let count = 0;
let degree = 0;

function move6DegreePerSec () {

//Add one for every seconds
    count++;
//multiple by 6
    degree = count * 6;
    //console.log(degree);

//Rotate the hand
    hand.style.transform = `rotate(${degree}deg)`;// example of how to rotate the hand
    //console.log("Clock"); 
}

//Using setInterval in here to move the hand every seconds
let intervalID = setInterval(move6DegreePerSec, 1000);