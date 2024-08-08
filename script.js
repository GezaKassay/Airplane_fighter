const SCREEN_WIDTH = window.screen.width;
const MAX_LEFT = 151;
const MAX_RIGHT = 165;
const ASTEROID_FALL = 15;
const MAX_POS = 165;
const TEN = 10;

function adjustZoom() {  
    let zoomLevel = 1;
    if (SCREEN_WIDTH > 1920) {
        zoomLevel = 1.25; 
    } else if (SCREEN_WIDTH < 1280) {
        zoomLevel = 0.75; 
    } else if (SCREEN_WIDTH < 768) {
        zoomLevel = 0.50;
    }
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
}

window.onload = adjustZoom;
window.onresize = adjustZoom;

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

let asteorids = ["asteroid1", "asteroid2", "asteroid3", "asteroid4", "asteroid5"
    , "asteroid6", "asteroid7","asteroid8", "asteroid9", "asteroid10", 
    "asteroid11", "asteroid12", "asteroid13", "asteroid14", "asteroid15",
    "asteroid16", "asteroid17", "asteroid18", "asteroid19", "asteroid20",
    "asteroid21",  "asteroid22"];
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

let clickCounter = 0;
let startPosition = [8, 14, 4, 11, 2, 6, 9, 12, 1, 5, 7, 8, 10, 15, 3, 13, 5, 11, 7, 9
    , 2, 14];

function asteoridShower () {
    ++clickCounter;    
    if (clickCounter <= 1) {
        document.getElementById(startPosition[0]).appendChild(asteroid1);
        document.getElementById(startPosition[1]).appendChild(asteroid2);
    } else {        
        startPosition[0] += ASTEROID_FALL;
        startPosition[1] += ASTEROID_FALL;
        if (startPosition[0] > MAX_POS) {
            startPosition[0] -= ASTEROID_FALL * TEN;
            startPosition[1] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[0]).appendChild(asteroid1);
        document.getElementById(startPosition[1]).appendChild(asteroid2);   
    }
    if (clickCounter === 2) {
        document.getElementById(startPosition[2]).appendChild(asteroid3);
        document.getElementById(startPosition[3]).appendChild(asteroid4);
    } else if (clickCounter > 2) {
        startPosition[2] += ASTEROID_FALL;
        startPosition[3] += ASTEROID_FALL;
        if (startPosition[2] > MAX_POS) {
            startPosition[2] -= ASTEROID_FALL * TEN;
            startPosition[3] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[2]).appendChild(asteroid3);
        document.getElementById(startPosition[3]).appendChild(asteroid4);   
    }
    if (clickCounter === 3) {
        document.getElementById(startPosition[4]).appendChild(asteroid5);
        document.getElementById(startPosition[5]).appendChild(asteroid6);
    } else if (clickCounter > 3) {
        startPosition[4] += ASTEROID_FALL;
        startPosition[5] += ASTEROID_FALL;
        if (startPosition[4] > MAX_POS) {
            startPosition[4] -= ASTEROID_FALL * TEN;
            startPosition[5] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[4]).appendChild(asteroid5);
        document.getElementById(startPosition[5]).appendChild(asteroid6);   
    }
    if (clickCounter === 4) {
        document.getElementById(startPosition[6]).appendChild(asteroid7);
        document.getElementById(startPosition[7]).appendChild(asteroid8);
    } else if (clickCounter > 4) {
        startPosition[6] += ASTEROID_FALL;
        startPosition[7] += ASTEROID_FALL;
        if (startPosition[6] > MAX_POS) {
            startPosition[6] -= ASTEROID_FALL * TEN;
            startPosition[7] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[6]).appendChild(asteroid7);
        document.getElementById(startPosition[7]).appendChild(asteroid8);   
    }
    if (clickCounter === 5) {
        document.getElementById(startPosition[8]).appendChild(asteroid9);
        document.getElementById(startPosition[9]).appendChild(asteroid10);
        document.getElementById(startPosition[10]).appendChild(asteroid21);
    } else if (clickCounter > 5) {
        startPosition[8] += ASTEROID_FALL;
        startPosition[9] += ASTEROID_FALL;
        startPosition[10] += ASTEROID_FALL;
        if (startPosition[8] > MAX_POS) {
            startPosition[8] -= ASTEROID_FALL * TEN;
            startPosition[9] -= ASTEROID_FALL * TEN;
            startPosition[10] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[8]).appendChild(asteroid9);
        document.getElementById(startPosition[9]).appendChild(asteroid10);
        document.getElementById(startPosition[10]).appendChild(asteroid21);   
    }
    if (clickCounter === 6) {
        document.getElementById(startPosition[11]).appendChild(asteroid11);
        document.getElementById(startPosition[12]).appendChild(asteroid12);
        document.getElementById(startPosition[13]).appendChild(asteroid22);
    } else if (clickCounter > 6) {
        startPosition[11] += ASTEROID_FALL;
        startPosition[12] += ASTEROID_FALL;
        startPosition[13] += ASTEROID_FALL;
        if (startPosition[11] > MAX_POS) {
            startPosition[11] -= ASTEROID_FALL * TEN;
            startPosition[12] -= ASTEROID_FALL * TEN;
            startPosition[13] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[11]).appendChild(asteroid11);
        document.getElementById(startPosition[12]).appendChild(asteroid12);
        document.getElementById(startPosition[13]).appendChild(asteroid22);     
    }
    if (clickCounter === 7) {
        document.getElementById(startPosition[14]).appendChild(asteroid13);
        document.getElementById(startPosition[15]).appendChild(asteroid14);
    } else if (clickCounter > 7) {
        startPosition[14] += ASTEROID_FALL;
        startPosition[15] += ASTEROID_FALL;
        if (startPosition[14] > MAX_POS) {
            startPosition[14] -= ASTEROID_FALL * TEN;
            startPosition[15] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[14]).appendChild(asteroid13);
        document.getElementById(startPosition[15]).appendChild(asteroid14);   
    }
    if (clickCounter === 8) {
        document.getElementById(startPosition[16]).appendChild(asteroid15);
        document.getElementById(startPosition[17]).appendChild(asteroid16);
    } else if (clickCounter > 8) {
        startPosition[16] += ASTEROID_FALL;
        startPosition[17] += ASTEROID_FALL;
        if (startPosition[16] > MAX_POS) {
            startPosition[16] -= ASTEROID_FALL * TEN;
            startPosition[17] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[16]).appendChild(asteroid15);
        document.getElementById(startPosition[17]).appendChild(asteroid16);   
    }
    if (clickCounter === 9) {
        document.getElementById(startPosition[18]).appendChild(asteroid17);
        document.getElementById(startPosition[19]).appendChild(asteroid18);
    } else if (clickCounter > 9) {
        startPosition[18] += ASTEROID_FALL;
        startPosition[19] += ASTEROID_FALL;
        if (startPosition[18] > MAX_POS) {
            startPosition[18] -= ASTEROID_FALL * TEN;
            startPosition[19] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[18]).appendChild(asteroid17);
        document.getElementById(startPosition[19]).appendChild(asteroid18);   
    }
    if (clickCounter === 10) {
        document.getElementById(startPosition[20]).appendChild(asteroid19);
        document.getElementById(startPosition[21]).appendChild(asteroid20);
    } else if (clickCounter > 10) {
        startPosition[20] += ASTEROID_FALL;
        startPosition[21] += ASTEROID_FALL;
        if (startPosition[20] > MAX_POS) {
            startPosition[20] -= ASTEROID_FALL * TEN;
            startPosition[21] -= ASTEROID_FALL * TEN;
        }
        document.getElementById(startPosition[20]).appendChild(asteroid19);
        document.getElementById(startPosition[21]).appendChild(asteroid20);   
    }
}

