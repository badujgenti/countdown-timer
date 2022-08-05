// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

let startDate = new Date("Jan 01, 2023 00:00:00").getTime();

const countdown = () =>{
    
    let now = new Date().getTime();
    let difference = startDate - now ;
        

const seconds = 1000 ;
const minutes = seconds * 60 ;
const hours = minutes * 60 ;
const days = hours * 24;


let timeDays = Math.floor(difference / days);
let timeHours = Math.floor((difference % days )/hours);
let timeMinutes = Math.floor((difference % hours)/ minutes);
let timeSeconds = Math.floor((difference % minutes)/seconds);


document.getElementById("days").innerHTML = timeDays;
document.getElementById("hours").innerHTML = timeHours;
document.getElementById("minutes").innerHTML = timeMinutes;
document.getElementById("seconds").innerHTML = timeSeconds;


}


setInterval(countdown, 1000);


var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 