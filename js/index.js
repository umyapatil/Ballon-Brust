const handelClick = document.getElementById("handel");
const ballons = document.querySelectorAll(".ballon-container");

let ballonHeight = 0;
let ballonNumber = 1;




handelClick.addEventListener("click",()=>{
    makeBallon(ballonNumber);
})




function makeBallon(number){

const pump = document.getElementById("pump");
const peak = document.getElementById("peak");
const ballonContainer = document.getElementById("ballonContainer"+number);
const ballon = document.getElementById("ballon-image"+number);
const letter = document.getElementById("letter"+number);
const rope = document.getElementById("rope"+number);


    handelClick.style.transform = "translatey(70px)";
    pump.style.transform = "scale(1.05,0.95)";
    peak.style.transform = "translate(-3px,-5px)";
    ballonContainer.style.transform = "translate(-3px,-5px)";
    ballonHeight+=50;
    ballon.style.height = ballonHeight+"px"
    console.log(ballonHeight)
    if(ballonHeight >= 200){
        letter.style.display = "block";
        rope.style.display = "block";
        ballonContainer.style.animationName = "flyBallon";
        ballonContainer.style.animationDuration = "20s";
        ballonContainer.style.animationDelay = "1s";
        ballonContainer.style.transform = "translate(-900px,-270px)";
        ballonNumber++;
        ballonHeight=0;
    }

    setTimeout(()=>{
        handelClick.style.transform = "translatey(0px)";
        pump.style.transform = "scale(1)";
        peak.style.transform = "translate(0)";
        // ballonContainer.style.transform = "translate(0px)";
    },250)

}

let brustSound = document.getElementById("sound");

for(let i=0 ; i<26 ; i++){
ballons[i].addEventListener("click",()=>{
    ballons[i].style.display = "none";
    brustSound.play();
})

}



