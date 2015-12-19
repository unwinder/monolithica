/**
 * space game
 */


var spaceship = {
    coordinates:[{x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0},
                 {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:4,y:1}, {x:5,y:1}, {x:6,y:1},
                 {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:4,y:2},
                 {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3},
                 {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:6,y:4},
                 {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:4,y:5}, {x:5,y:5}, {x:6,y:5},
                 {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:4,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:9,y:6}, {x:10,y:6},
                 {x:1,y:7}, {x:2,y:7}, {x:3,y:7}, {x:4,y:7}, {x:5,y:7}, {x:6,y:7}, {x:7,y:7}, {x:8,y:7}, {x:9,y:7}, {x:10,y:7},
      {x:0,y:8}, {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:4,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:9,y:8}, {x:10,y:8}, {x:11,y:8}, {x:12,y:8}, {x:13,y:8},
      {x:0,y:8}, {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:4,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}, {x:9,y:9}, {x:10,y:9}, {x:11,y:9}, {x:12,y:9}, {x:13,y:9},
                 {x:1,y:10},{x:2,y:10}, {x:3,y:10}, {x:4,y:10},{x:5,y:10}, {x:6,y:10},{x:7,y:10}, {x:8,y:10},{x:9,y:10}, {x:10,y:10},
                 {x:1,y:11},{x:2,y:11}, {x:3,y:11}, {x:4,y:11},{x:5,y:11}, {x:6,y:11},{x:7,y:11}, {x:8,y:11},{x:9,y:11}, {x:10,y:11},
                 {x:1,y:12},{x:2,y:12}, {x:3,y:12}, {x:4,y:12},{x:5,y:12}, {x:6,y:12},
                 {x:1,y:13},{x:2,y:13}, {x:3,y:13}, {x:4,y:13},{x:5,y:13}, {x:6,y:13},
                 {x:1,y:14},{x:2,y:14}, {x:3,y:14}, {x:4,y:14},
                 {x:1,y:15},{x:2,y:15}, {x:3,y:15}, {x:4,y:15}, 
                 {x:1,y:16},{x:2,y:16}, {x:3,y:16}, {x:4,y:16}, {x:5,y:16}, {x:6,y:16}, 
                 {x:1,y:17},{x:2,y:17}, {x:3,y:17}, {x:4,y:17}, {x:5,y:17}, {x:6,y:17},],
};


function createAsteroids() {
  var asteroids = [];
  for (i = 0; i < 170; i++) {
    var speed = Math.floor((Math.random() * maxSpeed) + 1);
    var xOffset = Math.floor((Math.random() * (screenWidth * speed)) + 1); 
    var yOffset = Math.floor((Math.random() * screenHeight) + 1); 
    var width = Math.floor((Math.random() * 100) + 10); 
    var height = Math.floor((Math.random() * 100) + 10); 
    var randX = 1;
    var randY = 1;  
    asteroids[i] = { coordinates:[], speed:speed};
    for (var x = xOffset; x< xOffset + width; x += randX) {
      randX = Math.floor((Math.random() * 3) + 1);
      for (var y = yOffset; y < yOffset + height; y+= randY) {
        randY = Math.floor((Math.random() * 3) + 1);
        asteroids[i].coordinates.push ({x:x, y:y});
      }
    }
  }
  return asteroids;
}

function draw (item, color) {
  ctx.fillStyle=color;
  item.coordinates.forEach ( function (coordinate) { 
    ctx.fillRect(coordinate.x, coordinate.y, 1, 1);
  });
}

function checkForHit (spaceship, asteroid) {
  for(var i=0; i< asteroid.coordinates.length; i++) {
    if (asteroid.coordinates[i].x <= screenWidth && asteroid.coordinates[i].x >= 0) {
      gameBeaten=false;
      for(var j=0; j< spaceship.coordinates.length; j++) {
        if (spaceship.coordinates[j].x === asteroid.coordinates[i].x && spaceship.coordinates[j].y === asteroid.coordinates[i].y) {
          gameOver = true;
          return;
        }
      }
    }
  }
}

function moveAsteroid (asteroid) {
  drawIt = false;
  for (var i = 1; i<= asteroid.speed; i++) {
    asteroid.coordinates.forEach ( function (coordinate) { 
      coordinate.x=coordinate.x-1;
      if (coordinate.x < screenWidth) {
        drawIt = true;
      }
    });
    if (drawIt) {
      draw (asteroid, "gray");
    }
  }
}


function gameEnded () {
  
}

function checkForMove (spaceship) {
  if(input.isDown('DOWN')) {
    var canMove = true;
    for (var i = 0; i < spaceship.coordinates.length; i++) {
      if (spaceship.coordinates[i].y === screenHeight) {
        canMove = false;
        break;
      }
    }
    if (canMove) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y++;
      });
    }
  }

  if(input.isDown('UP')) {
    var canMove = true;
    for (var i = 0; i < spaceship.coordinates.length; i++) {
      if (spaceship.coordinates[i].y === 0) {
        canMove = false;
        break;
      }
    }
    if (canMove) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y--;
      });
    }
  }

  if(input.isDown('LEFT')) {
    var canMove = true;
    for (var i = 0; i < spaceship.coordinates.length; i++) {
      if (spaceship.coordinates[i].x === 0) {
        canMove = false;
        break;
      }
    }
    if (canMove) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x = coordinate.x - 1;
      });
    }
  }

  if(input.isDown('RIGHT') || input.isDown('d')) {
    var canMove = true;
    for (var i = 0; i < spaceship.coordinates.length; i++) {
      if (spaceship.coordinates[i].x === screenWidth) {
        canMove = false;
        break;
      }
    }
    if (canMove) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x = coordinate.x + 1;
      });
    }
  }
  draw (spaceship, "white");
}

function main () {
  checkForMove (spaceship);
  checkForMove (spaceship);
  ctx.drawImage(spaceBackground, 0, 0);
  checkForMove (spaceship);
  gameBeaten=true;
  for(var i=0; i< asteroids.length; i++) {
    checkForHit(spaceship, asteroids[i]);
    moveAsteroid(asteroids[i])
  }
  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.fillText("GAME OVER!", 300, 300);
    return;
  }
  if (gameBeaten) {
      ctx.fillStyle = "white";
      ctx.font = "bold 24px Arial";
      ctx.fillText("CONGRATULATIONS! You are an epic space pilot", 100, 300);
      return;
  } 
  setTimeout(main, 1000/60); 
}

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var screenWidth = canvas.width = 1100;
var screenHeight = canvas.height = 650;
var gameBeaten = false;
var gameOver = false;
var maxSpeed = 3;
var asteroids = createAsteroids();

document.body.appendChild(canvas);

var spaceBackground = new Image();
spaceBackground.src = "/monolithica/img/space_background.png";
spaceBackground.onload = function() {
  ctx.drawImage(spaceBackground, 0, 0);
}


main();

