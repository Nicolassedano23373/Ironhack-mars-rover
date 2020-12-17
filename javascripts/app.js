// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}if (rover.direction === "N") {
  rover.direction = "W";
} else if (rover.direction === "W") {
  rover.direction = "S";
} else if (rover.direction === "S") {
  rover.direction = "E";
} else if (rover.direction === "E") {
  rover.direction = "N"
}


function turnRight(rover){
  console.log("turnRight was called!");
}
if (rover.direction === "N") {
  rover.direction = "E";
} else if (rover.direction === "W") {
  rover.direction = "N";
} else if (rover.direction === "S") {
  rover.direction = "W";
} else if (rover.direction === "E") {
  rover.direction = "S"
}


function moveForward(rover){
  console.log("moveForward was called");

if (rover.direction === "N"){
  rover.y--;
} else if (rover.direction === "S"){
    rover.y++;
} else if (rover.direction === "E"){
  rover.x++;
} else if (rover.direction === "W"){
    rover.x--;
  }
}

function commands (steps){
  for(let i = 0; 1 < steps.length; i++){
     console.log(steps.charAt(i))
     let currentChar = steps.charAt(i)
     if (currentChar === "l"){
    turnLeft(rover);
     } else if (currentChar === "r") {
       turnRight(rover);
     } else if (currentChar === "f") {
      turnFo
     }
     rover.travelLog.push(currentChar);
     }
     console.log(rover.travelLog);
    }


