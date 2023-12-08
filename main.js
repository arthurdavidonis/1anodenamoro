const yebbasDrake = document.getElementById("drake");
const flightBooked = document.getElementById("flight");
const playButton = document.getElementById("playBtn");
const playButton2 = document.getElementById("playBtn2");

function playYebbasSong(){
    yebbasDrake.play();
  
}
function pauseYebbasSong(){
    yebbasDrake.pause();
}




function tocarFlight(){
    flightBooked.play();
}
function pauseFlight(){
    flightBooked.pause();
}




playButton.addEventListener('dblclick', pauseYebbasSong);
playButton.addEventListener('click',playYebbasSong);




playButton2.addEventListener('click', tocarFlight);
playButton2.addEventListener('dblclick', pauseFlight);

