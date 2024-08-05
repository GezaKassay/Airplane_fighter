let fighterJet = document.createElement("img");
fighterJet.style.width = "50px"; 
fighterJet.style.height = "50px";
fighterJet.src = "vector-fighter-jet-icon-design.jpg";
document.getElementById("158").appendChild(fighterJet);

let asteroid = document.createElement("img");
asteroid.style.width = "50px"; 
asteroid.style.height = "50px";
asteroid.src = "asteroid-icon-flat-style-vector.jpg";
let asteroid1 = document.createElement("img");
asteroid1.style.width = "50px"; 
asteroid1.style.height = "50px";
asteroid1.src = "asteroid-icon-flat-style-vector.jpg";
document.getElementById("143").appendChild(asteroid);
document.getElementById("147").appendChild(asteroid1);

let maxLeft = 151;
let maxRight = 165;
let jetLocation = 158;

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
  
    switch (event.key) {      
        case "ArrowLeft":
            if (jetLocation > maxLeft) {
                --jetLocation;
                document.getElementById(jetLocation).appendChild(fighterJet);
            }        
            break;
        case "ArrowRight":
            if (jetLocation < maxRight) {
                ++jetLocation;
                document.getElementById(jetLocation).appendChild(fighterJet);
            }
            break;
        default:
            return;
    }
  
    event.preventDefault();
  }, true);