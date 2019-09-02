// Rover Object Goes Here
// ======================

//Iteration 1
var rover = {
    direction: "N", 
    position: [4,4], 
    logs: []
}

// ======================
//Iteration 2
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "E";
      break; 
    case "E":
      rover.direction = "N";
      break;
   }  
 }

 function checkBounds() {
   if (
     rover.position[0] < 0 || rover.position > 9
     ||
     rover.position[1] < 0 || rover.position > 9
   ) {
     alert ("Out of bonds!")
     //rover.position = rover.logs[rover.logs.length -1];
     //rover.splice(rover.logs.length -1, 1);
     rover.position.pop(rover.position); 
   }
  
  }


function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "W";
      break; 
    case "W":
      rover.direction = "N";
      break;
      
    }  
 }

//Iteration 3
function moveForward(rover){
  console.log("moveForward was called"); 

  rover.logs.push([rover.position[0]], rover.position[1]); //Stored by value
  rover.logs.push(rover.position); // Stored by reference (not what we want)

  switch (rover.direction){
     case "N":        
       rover.position [1]++; 
       break;
      
     case "W":
        rover.position [1]--; 
       break;
      
     case "S":
        rover.position [1]--; 
       break;
      
     case "E":
        rover.position [1]++; 
        break;
    }
    checkBounds {};  
}  
  
//Iteration 4
  function instructRover(commands){
    if (validCommand(commands))
    for (var i = 0; i < command.length; i++){
      switch(commands [i]) {
        case "l": 
          turnLeft();
          break;
        case "r": 
          turnRight();
          break;  
        case "f": 
          moveForward();
          break;    
        default: 
          alert(command[i] + "is not a command!"); 
          return; 
          break; 
    }
}

function validCommand(commands) {
  for(var i = 0; i < command.length; i++) {
    if("flr".indexOf(commands[i]) === -1) {
      return false;
    }
  }
}
//Iteration 5 : 
