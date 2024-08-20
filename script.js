const MAX_LEFT = 151;
const MAX_RIGHT = 165;
const ASTEROID_FALL = 15;
const MAX_POS = 165;
const TEN = 10;

let jetLocation = 158;
let fighterJet = document.createElement("img");
fighterJet.src = "Assets//vector-fighter-jet-icon-design.jpg";
document.getElementById(jetLocation).appendChild(fighterJet);
setImageSize();

let asteroid1 = document.createElement("img");
asteroid1.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid2 = document.createElement("img");
asteroid2.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid3 = document.createElement("img");
asteroid3.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid4 = document.createElement("img");
asteroid4.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid5 = document.createElement("img");
asteroid5.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid6 = document.createElement("img");
asteroid6.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid7 = document.createElement("img");
asteroid7.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid8 = document.createElement("img");
asteroid8.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid9 = document.createElement("img");
asteroid9.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid10 = document.createElement("img");
asteroid10.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid11 = document.createElement("img");
asteroid11.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid12 = document.createElement("img");
asteroid12.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid13 = document.createElement("img");
asteroid13.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid14 = document.createElement("img");
asteroid14.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid15 = document.createElement("img");
asteroid15.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid16 = document.createElement("img");
asteroid16.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid17 = document.createElement("img");
asteroid17.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid18 = document.createElement("img");
asteroid18.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid19 = document.createElement("img");
asteroid19.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid20 = document.createElement("img");
asteroid20.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid21 = document.createElement("img");
asteroid21.src = "Assets//asteroid-icon-flat-style-vector.jpg";
let asteroid22 = document.createElement("img");
asteroid22.src = "Assets//asteroid-icon-flat-style-vector.jpg";

let explosion = document.createElement("img");
explosion.src = "Assets//explosion-vector-13.jpg";

function setImageSize() {
    let images = document.querySelectorAll("img");
    images.forEach((image) => {
        image.style.width = "50px"; 
        image.style.height = "50px";
    });
}

window.addEventListener("keydown", function (moveJet) {
    if (moveJet.defaultPrevented) {
        return;
    }  
    switch (moveJet.key) {      
        case "ArrowLeft":
            if (jetLocation > MAX_LEFT) {
                --jetLocation;
                document.getElementById(jetLocation).appendChild(fighterJet);
            }        
            break;
        case "ArrowRight":
            if (jetLocation < MAX_RIGHT) {
                ++jetLocation;
                document.getElementById(jetLocation).appendChild(fighterJet);
            }
            break;
        default:
            return;
    }  
    moveJet.preventDefault();
}, true);

let asteroidPositionSets = [[-7, -1], [-11, -4], [-13, -9], [-6, -3], [-14, -10, 
    -8], [-7, -5, 0], [-12, -2], [-10, -4], [-8, -6], [-13, -1]];
let asteroidSets = [[asteroid1, asteroid2], [asteroid3, asteroid4], [asteroid5, 
    asteroid6], [asteroid7, asteroid8], [asteroid9, asteroid10, asteroid21], [
    asteroid11, asteroid12, asteroid22], [asteroid13, asteroid14], [asteroid15,
    asteroid16], [asteroid17, asteroid18], [asteroid19, asteroid20]];  

function asteroidShower() {
    let positionSetsActive = time;
    for (let i = 0; i < positionSetsActive; ++i) {        
        for (let j = 0; j < asteroidPositionSets[i].length; ++j) {                      
            asteroidPositionSets[i][j] += ASTEROID_FALL;                            
            if (asteroidPositionSets[i][j] > MAX_POS) {
                asteroidPositionSets[i][j] -= ASTEROID_FALL * TEN;                             
            }
            document.getElementById(asteroidPositionSets[i][j])
            .appendChild(asteroidSets[i][j]);                
            setImageSize(); 
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
    document.getElementById("playerPoints").innerHTML = `You scored ${time} 
    points`;
    time = 0;
    document.getElementById("ReloadPageButton").style.visibility = "visible";           
}

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