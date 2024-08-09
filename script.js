const MAX_LEFT = 151;
const MAX_RIGHT = 165;
const ASTEROID_FALL = 15;
const MAX_POS = 165;
const TEN = 10;

let jetLocation = 158;
let fighterJet = document.createElement("img");
fighterJet.style.width = "50px"; 
fighterJet.style.height = "50px";
fighterJet.src = "vector-fighter-jet-icon-design.jpg";
document.getElementById(jetLocation).appendChild(fighterJet);

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

let asteroid1 = document.createElement("img");
asteroid1.style.width = "50px"; 
asteroid1.style.height = "50px";
asteroid1.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid2 = document.createElement("img");
asteroid2.style.width = "50px"; 
asteroid2.style.height = "50px";
asteroid2.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid3 = document.createElement("img");
asteroid3.style.width = "50px"; 
asteroid3.style.height = "50px";
asteroid3.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid4 = document.createElement("img");
asteroid4.style.width = "50px"; 
asteroid4.style.height = "50px";
asteroid4.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid5 = document.createElement("img");
asteroid5.style.width = "50px"; 
asteroid5.style.height = "50px";
asteroid5.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid6 = document.createElement("img");
asteroid6.style.width = "50px"; 
asteroid6.style.height = "50px";
asteroid6.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid7 = document.createElement("img");
asteroid7.style.width = "50px"; 
asteroid7.style.height = "50px";
asteroid7.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid8 = document.createElement("img");
asteroid8.style.width = "50px"; 
asteroid8.style.height = "50px";
asteroid8.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid9 = document.createElement("img");
asteroid9.style.width = "50px"; 
asteroid9.style.height = "50px";
asteroid9.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid10 = document.createElement("img");
asteroid10.style.width = "50px"; 
asteroid10.style.height = "50px";
asteroid10.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid11 = document.createElement("img");
asteroid11.style.width = "50px"; 
asteroid11.style.height = "50px";
asteroid11.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid12 = document.createElement("img");
asteroid12.style.width = "50px"; 
asteroid12.style.height = "50px";
asteroid12.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid13 = document.createElement("img");
asteroid13.style.width = "50px"; 
asteroid13.style.height = "50px";
asteroid13.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid14 = document.createElement("img");
asteroid14.style.width = "50px"; 
asteroid14.style.height = "50px";
asteroid14.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid15 = document.createElement("img");
asteroid15.style.width = "50px"; 
asteroid15.style.height = "50px";
asteroid15.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid16 = document.createElement("img");
asteroid16.style.width = "50px"; 
asteroid16.style.height = "50px";
asteroid16.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid17 = document.createElement("img");
asteroid17.style.width = "50px"; 
asteroid17.style.height = "50px";
asteroid17.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid18 = document.createElement("img");
asteroid18.style.width = "50px"; 
asteroid18.style.height = "50px";
asteroid18.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid19 = document.createElement("img");
asteroid19.style.width = "50px"; 
asteroid19.style.height = "50px";
asteroid19.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid20 = document.createElement("img");
asteroid20.style.width = "50px"; 
asteroid20.style.height = "50px";
asteroid20.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid21 = document.createElement("img");
asteroid21.style.width = "50px"; 
asteroid21.style.height = "50px";
asteroid21.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid22 = document.createElement("img");
asteroid22.style.width = "50px"; 
asteroid22.style.height = "50px";
asteroid22.src = "asteroid-icon-flat-style-vector.jpg";

let explosion = document.createElement("img");
explosion.style.width = "50px"; 
explosion.style.height = "50px";
explosion.src = "explosion-vector-13.jpg";

let asteroidPositions = [8, 14, 4, 11, 2, 6, 9, 12, 1, 5, 7, 8, 10, 15, 3, 13, 5
    , 11, 7, 9, 2, 14];
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
    if (time <= 1) {
        document.getElementById(asteroidPositions[0]).appendChild(asteroid1);
        document.getElementById(asteroidPositions[1]).appendChild(asteroid2);
    } else {        
        asteroidPositions[0] += ASTEROID_FALL;
        asteroidPositions[1] += ASTEROID_FALL;
        if (asteroidPositions[0] > MAX_POS) {
            asteroidPositions[0] -= ASTEROID_FALL * TEN;
            asteroidPositions[1] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[0]).appendChild(asteroid1);
        document.getElementById(asteroidPositions[1]).appendChild(asteroid2);   
    }
    if (time === 2) {
        document.getElementById(asteroidPositions[2]).appendChild(asteroid3);
        document.getElementById(asteroidPositions[3]).appendChild(asteroid4);
    } else if (time > 2) {
        asteroidPositions[2] += ASTEROID_FALL;
        asteroidPositions[3] += ASTEROID_FALL;
        if (asteroidPositions[2] > MAX_POS) {
            asteroidPositions[2] -= ASTEROID_FALL * TEN;
            asteroidPositions[3] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[2]).appendChild(asteroid3);
        document.getElementById(asteroidPositions[3]).appendChild(asteroid4);   
    }
    if (time === 3) {
        document.getElementById(asteroidPositions[4]).appendChild(asteroid5);
        document.getElementById(asteroidPositions[5]).appendChild(asteroid6);
    } else if (time > 3) {
        asteroidPositions[4] += ASTEROID_FALL;
        asteroidPositions[5] += ASTEROID_FALL;
        if (asteroidPositions[4] > MAX_POS) {
            asteroidPositions[4] -= ASTEROID_FALL * TEN;
            asteroidPositions[5] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[4]).appendChild(asteroid5);
        document.getElementById(asteroidPositions[5]).appendChild(asteroid6);   
    }
    if (time === 4) {
        document.getElementById(asteroidPositions[6]).appendChild(asteroid7);
        document.getElementById(asteroidPositions[7]).appendChild(asteroid8);
    } else if (time > 4) {
        asteroidPositions[6] += ASTEROID_FALL;
        asteroidPositions[7] += ASTEROID_FALL;
        if (asteroidPositions[6] > MAX_POS) {
            asteroidPositions[6] -= ASTEROID_FALL * TEN;
            asteroidPositions[7] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[6]).appendChild(asteroid7);
        document.getElementById(asteroidPositions[7]).appendChild(asteroid8);   
    }
    if (time === 5) {
        document.getElementById(asteroidPositions[8]).appendChild(asteroid9);
        document.getElementById(asteroidPositions[9]).appendChild(asteroid10);
        document.getElementById(asteroidPositions[10]).appendChild(asteroid21);
    } else if (time > 5) {
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
    }
    if (time === 6) {
        document.getElementById(asteroidPositions[11]).appendChild(asteroid11);
        document.getElementById(asteroidPositions[12]).appendChild(asteroid12);
        document.getElementById(asteroidPositions[13]).appendChild(asteroid22);
    } else if (time > 6) {
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
    }
    if (time === 7) {
        document.getElementById(asteroidPositions[14]).appendChild(asteroid13);
        document.getElementById(asteroidPositions[15]).appendChild(asteroid14);
    } else if (time > 7) {
        asteroidPositions[14] += ASTEROID_FALL;
        asteroidPositions[15] += ASTEROID_FALL;
        if (asteroidPositions[14] > MAX_POS) {
            asteroidPositions[14] -= ASTEROID_FALL * TEN;
            asteroidPositions[15] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[14]).appendChild(asteroid13);
        document.getElementById(asteroidPositions[15]).appendChild(asteroid14);   
    }
    if (time === 8) {
        document.getElementById(asteroidPositions[16]).appendChild(asteroid15);
        document.getElementById(asteroidPositions[17]).appendChild(asteroid16);
    } else if (time > 8) {
        asteroidPositions[16] += ASTEROID_FALL;
        asteroidPositions[17] += ASTEROID_FALL;
        if (asteroidPositions[16] > MAX_POS) {
            asteroidPositions[16] -= ASTEROID_FALL * TEN;
            asteroidPositions[17] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[16]).appendChild(asteroid15);
        document.getElementById(asteroidPositions[17]).appendChild(asteroid16);   
    }
    if (time === 9) {
        document.getElementById(asteroidPositions[18]).appendChild(asteroid17);
        document.getElementById(asteroidPositions[19]).appendChild(asteroid18);
    } else if (time > 9) {
        asteroidPositions[18] += ASTEROID_FALL;
        asteroidPositions[19] += ASTEROID_FALL;
        if (asteroidPositions[18] > MAX_POS) {
            asteroidPositions[18] -= ASTEROID_FALL * TEN;
            asteroidPositions[19] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[18]).appendChild(asteroid17);
        document.getElementById(asteroidPositions[19]).appendChild(asteroid18);   
    }
    if (time === 10) {
        document.getElementById(asteroidPositions[20]).appendChild(asteroid19);
        document.getElementById(asteroidPositions[21]).appendChild(asteroid20);
    } else if (time > 10) {
        asteroidPositions[20] += ASTEROID_FALL;
        asteroidPositions[21] += ASTEROID_FALL;
        if (asteroidPositions[20] > MAX_POS) {
            asteroidPositions[20] -= ASTEROID_FALL * TEN;
            asteroidPositions[21] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(asteroidPositions[20]).appendChild(asteroid19);
        document.getElementById(asteroidPositions[21]).appendChild(asteroid20);   
    }
}

function checkCollision() {    
    for (let i = 0; i < asteroidPositions.length; ++i) {       
        if (asteroidPositions[i] === jetLocation) {            
            clearInterval(intervalID);
            document.getElementById(asteroidPositions[i]).innerHTML = " ";
            document.getElementById(asteroidPositions[i]).appendChild(explosion);
            document.getElementById("playerPoints").innerHTML = `You scored 
            ${time} points`;
            time = 0;
        }
    }
}