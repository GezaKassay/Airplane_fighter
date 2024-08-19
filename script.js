const MAX_LEFT = 151;
const MAX_RIGHT = 165;
const ASTEROID_FALL = 15;
const MAX_POS = 165;
const TEN = 10;

let jetLocation = 158;
let fighterJet = document.createElement("img");
fighterJet.src = "vector-fighter-jet-icon-design.jpg";
document.getElementById(jetLocation).appendChild(fighterJet);

let asteroid1 = document.createElement("img");
asteroid1.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid2 = document.createElement("img");
asteroid2.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid3 = document.createElement("img");
asteroid3.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid4 = document.createElement("img");
asteroid4.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid5 = document.createElement("img");
asteroid5.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid6 = document.createElement("img");
asteroid6.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid7 = document.createElement("img");
asteroid7.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid8 = document.createElement("img");
asteroid8.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid9 = document.createElement("img");
asteroid9.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid10 = document.createElement("img");
asteroid10.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid11 = document.createElement("img");
asteroid11.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid12 = document.createElement("img");
asteroid12.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid13 = document.createElement("img");
asteroid13.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid14 = document.createElement("img");
asteroid14.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid15 = document.createElement("img");
asteroid15.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid16 = document.createElement("img");
asteroid16.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid17 = document.createElement("img");
asteroid17.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid18 = document.createElement("img");
asteroid18.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid19 = document.createElement("img");
asteroid19.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid20 = document.createElement("img");
asteroid20.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid21 = document.createElement("img");
asteroid21.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid22 = document.createElement("img");
asteroid22.src = "asteroid-icon-flat-style-vector.jpg";

let explosion = document.createElement("img");
explosion.src = "explosion-vector-13.jpg";

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

function setImageSize() {
    let images = document.querySelectorAll("img");
    images.forEach((image) => {
        image.style.width = "50px"; 
        image.style.height = "50px";
    });
}
setImageSize();

let asteroidPositions = [-7, -1, -11, -4, -13, -9, -6, -3, -14, -10, -8, -7, -5
    , 0, -12, -2, -10, -4, -8, -6, -13, -1];
let time = 0;
let intervalID;

function increaseTime() {    
    ++time;
    document.getElementById("Time").innerHTML = time;
    asteoridShower();
    checkCollision();    
}
    
function startTimer() {
    document.getElementById("Time").innerHTML = "0";
    intervalID = setInterval(increaseTime, 1000);    
}

function asteoridShower() {
    if (time >= 1) {         
        asteroidPositions[0] += ASTEROID_FALL;
        asteroidPositions[1] += ASTEROID_FALL;
        if (asteroidPositions[0] > MAX_POS) {
            asteroidPositions[0] -= ASTEROID_FALL * TEN;
            asteroidPositions[1] -= ASTEROID_FALL * TEN;           
        }
        document.getElementById(asteroidPositions[0]).appendChild(asteroid1);
        document.getElementById(asteroidPositions[1]).appendChild(asteroid2);
        setImageSize();           
    }
    if (time >= 2) {         
        asteroidPositions[2] += ASTEROID_FALL;
        asteroidPositions[3] += ASTEROID_FALL;
        if (asteroidPositions[2] > MAX_POS) {
            asteroidPositions[2] -= ASTEROID_FALL * TEN;
            asteroidPositions[3] -= ASTEROID_FALL * TEN;            
        }
        document.getElementById(asteroidPositions[2]).appendChild(asteroid3);
        document.getElementById(asteroidPositions[3]).appendChild(asteroid4);      
        setImageSize();            
    }
    if (time >= 3) {         
        asteroidPositions[4] += ASTEROID_FALL;
        asteroidPositions[5] += ASTEROID_FALL;
        if (asteroidPositions[4] > MAX_POS) {
            asteroidPositions[4] -= ASTEROID_FALL * TEN;
            asteroidPositions[5] -= ASTEROID_FALL * TEN;            
        }  
        document.getElementById(asteroidPositions[4]).appendChild(asteroid5);
        document.getElementById(asteroidPositions[5]).appendChild(asteroid6);
        setImageSize();         
    }
    if (time >= 4) {         
        asteroidPositions[6] += ASTEROID_FALL;
        asteroidPositions[7] += ASTEROID_FALL;
        if (asteroidPositions[6] > MAX_POS) {
            asteroidPositions[6] -= ASTEROID_FALL * TEN;
            asteroidPositions[7] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[6]).appendChild(asteroid7);
        document.getElementById(asteroidPositions[7]).appendChild(asteroid8);
        setImageSize();            
    }
    if (time >= 5) {          
        asteroidPositions[8] += ASTEROID_FALL;
        asteroidPositions[9] += ASTEROID_FALL;
        asteroidPositions[10] += ASTEROID_FALL;
        if (asteroidPositions[8] > MAX_POS) {
            asteroidPositions[8] -= ASTEROID_FALL * TEN;
            asteroidPositions[9] -= ASTEROID_FALL * TEN;
            asteroidPositions[10] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[8]).appendChild(asteroid9);
        document.getElementById(asteroidPositions[9]).appendChild(asteroid10);
        document.getElementById(asteroidPositions[10]).appendChild(asteroid21);
        setImageSize();          
    }
    if (time >= 6) {         
        asteroidPositions[11] += ASTEROID_FALL;
        asteroidPositions[12] += ASTEROID_FALL;
        asteroidPositions[13] += ASTEROID_FALL;
        if (asteroidPositions[11] > MAX_POS) {
            asteroidPositions[11] -= ASTEROID_FALL * TEN;
            asteroidPositions[12] -= ASTEROID_FALL * TEN;
            asteroidPositions[13] -= ASTEROID_FALL * TEN;
        } 
        document.getElementById(asteroidPositions[11]).appendChild(asteroid11);
        document.getElementById(asteroidPositions[12]).appendChild(asteroid12);
        document.getElementById(asteroidPositions[13]).appendChild(asteroid22);
        setImageSize();            
    }
    if (time >= 7) {          
        asteroidPositions[14] += ASTEROID_FALL;
        asteroidPositions[15] += ASTEROID_FALL;
        if (asteroidPositions[14] > MAX_POS) {
            asteroidPositions[14] -= ASTEROID_FALL * TEN;
            asteroidPositions[15] -= ASTEROID_FALL * TEN;
        } 
        document.getElementById(asteroidPositions[14]).appendChild(asteroid13);
        document.getElementById(asteroidPositions[15]).appendChild(asteroid14);
        setImageSize();      
    }
    if (time >= 8) {          
        asteroidPositions[16] += ASTEROID_FALL;
        asteroidPositions[17] += ASTEROID_FALL;
        if (asteroidPositions[16] > MAX_POS) {
            asteroidPositions[16] -= ASTEROID_FALL * TEN;
            asteroidPositions[17] -= ASTEROID_FALL * TEN;
        }  
        document.getElementById(asteroidPositions[16]).appendChild(asteroid15);
        document.getElementById(asteroidPositions[17]).appendChild(asteroid16);
        setImageSize();        
    }
    if (time >= 9) {        
        asteroidPositions[18] += ASTEROID_FALL;
        asteroidPositions[19] += ASTEROID_FALL;
        if (asteroidPositions[18] > MAX_POS) {
            asteroidPositions[18] -= ASTEROID_FALL * TEN;
            asteroidPositions[19] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[18]).appendChild(asteroid17);
        document.getElementById(asteroidPositions[19]).appendChild(asteroid18);
        setImageSize();        
    }
    if (time >= 10) {           
        asteroidPositions[20] += ASTEROID_FALL;
        asteroidPositions[21] += ASTEROID_FALL;
        if (asteroidPositions[20] > MAX_POS) {
            asteroidPositions[20] -= ASTEROID_FALL * TEN;
            asteroidPositions[21] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[20]).appendChild(asteroid19);
        document.getElementById(asteroidPositions[21]).appendChild(asteroid20);
        setImageSize();        
    }
}

function checkCollision() {    
    for (let i = 0; i < asteroidPositions.length; ++i) {       
        if (asteroidPositions[i] === jetLocation) {            
            clearInterval(intervalID);
            document.getElementById(asteroidPositions[i]).innerHTML = " ";
            document.getElementById(asteroidPositions[i]).appendChild(explosion);
            setImageSize();
            document.getElementById("playerPoints").innerHTML = `You scored 
            ${time} points`;
            time = 0;
        }
    }
}