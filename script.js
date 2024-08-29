const MAX_LEFT = 151;
const MAX_RIGHT = 165;
const ASTEROID_FALL = 15;
const MAX_POS = 165;
const TEN = 10;
const ACTIVATE_NEXT_POS = 12;

let jetLocation = 158;
let fighterJet = document.createElement("img");
fighterJet.src = "Assets//vector-fighter-jet-icon-design.jpg";
document.getElementById(jetLocation).appendChild(fighterJet);
setImageSize();

let explosion = document.createElement("img");
explosion.src = "Assets//explosion-vector-13.jpg";

let asteroidPositionSets = [[-7, -1], [-11, -4], [-13, -9], [-6, -3], [-14, -10, 
    -8], [-7, -5, 0], [-12, -2], [-10, -4], [-8, -6], [-13, -1]];
let asteroidSets = [];
let asteroidNum = 0;

function createAsteroidsMatrix() {    
    for (let i = 0; i < asteroidPositionSets.length; ++i) {
        asteroidSets[i] = [];
        for (let j = 0; j < asteroidPositionSets[i].length; ++j) {            
            asteroidSets[i][j] = `asteroid${++asteroidNum}`;
        }
    }
}
createAsteroidsMatrix();

function createAsteroids() {
    for (let i = 0; i < asteroidSets.length; ++i) {    
        for (let j = 0; j < asteroidSets[i].length; ++j) {
            let img = document.createElement("img");
            img.id = asteroidSets[i][j];
            img.src = "Assets//asteroid-icon-flat-style-vector.jpg";
            img.style.visibility = "hidden";    
            document.body.appendChild(img);
            setImageSize();
        }
    }
}
createAsteroids();

let positionSetsActive = 1;
let prevTime = 0;

function asteroidShower() {    
    if (time - prevTime === ACTIVATE_NEXT_POS) {
        ++positionSetsActive;
        prevTime = time - 1;
    }
    for (let i = 0; i < positionSetsActive; ++i) {        
        for (let j = 0; j < asteroidPositionSets[i].length; ++j) {                      
            asteroidPositionSets[i][j] += ASTEROID_FALL;                            
            if (asteroidPositionSets[i][j] > MAX_POS) {
                asteroidPositionSets[i][j] -= ASTEROID_FALL * TEN;                             
            }
            document.getElementById(asteroidSets[i][j]).style.visibility = 
                "visible";          
            document.getElementById(asteroidPositionSets[i][j])
                .appendChild(document.getElementById(asteroidSets[i][j]));               
            if (asteroidPositionSets[i][j] === jetLocation) {
                checkCollision(asteroidPositionSets[i][j]);   
            }                            
        }    
    }
}

function checkCollision(location) {                 
    clearInterval(intervalID);
    document.getElementById(location).innerHTML = " ";
    document.getElementById(location).appendChild(explosion);
    setImageSize();
    document.getElementById("playerPoints").innerHTML = `You scored ${time}` + 
        ` points`;    
    time = 0;
    document.getElementById("ReloadPageButton").style.visibility = "visible";           
}

function setImageSize() {
    let images = document.querySelectorAll("img");
    images.forEach((image) => {
        image.style.width = "50px"; 
        image.style.height = "50px";
    });
}

window.addEventListener("keydown", function (moveJet) {         
    if (moveJet.code === "ArrowLeft" && jetLocation > MAX_LEFT) {
        --jetLocation;
        document.getElementById(jetLocation).appendChild(fighterJet);              
    } else if (moveJet.code === "ArrowRight" && jetLocation < MAX_RIGHT) {
        ++jetLocation;
        document.getElementById(jetLocation).appendChild(fighterJet);
    }     
});

let time = 0;
let intervalID;

function increaseTime() {    
    ++time;
    document.getElementById("Time").innerHTML = time;
    asteroidShower();
}
    
function startTimer() {
    document.getElementById("Time").innerHTML = "0";
    intervalID = setInterval(increaseTime, 1000);    
}

function startAndHide() {
    startTimer();
    document.getElementById("StartButton").style.visibility = "hidden";
}

document.getElementById("ReloadPageButton").style.visibility = "hidden";