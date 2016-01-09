/**
 * space game
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 

function getCookieScore(player) {
  var score=getCookie(player);
  if (score!="") {
      return parseInt (score);
  } else{
      return 0;
  }
} 


function initWillSpaceship() {
  return {
      coordinates: [{x:12,y:0},{x:13,y:0},{x:14,y:0},{x:15,y:0},{x:16,y:0},{x:17,y:0},{x:18,y:0},{x:19,y:0},
                    {x:13,y:1},{x:14,y:1},{x:15,y:1},{x:16,y:1},
                    {x:14,y:2},{x:15,y:2},{x:16,y:2},{x:17,y:2},
                    {x:14,y:3},{x:15,y:3},{x:16,y:3},{x:17,y:3},{x:18,y:3},
                    {x:7,y:4},{x:8,y:4},{x:9,y:4},{x:13,y:4},{x:14,y:4},{x:15,y:4},{x:16,y:4},{x:17,y:4},{x:18,y:4},
                    {x:9,y:5},{x:10,y:5},{x:12,y:5},{x:13,y:5},{x:14,y:5},{x:15,y:5}, {x:18, y:5}, {x:19, y:5},
                    {x:9,y:6}, {x:10, y:6}, {x:11, y:6}, {x:12, y:6}, {x:13, y:6}, {x:14, y:6}, {x:15, y:6}, {x:16, y:6}, {x:17, y:6}, {x:18, y:6}, {x:19, y:6}, {x:20, y:6},{x:21, y:6}, {x:22, y:6},
                    {x:9,y:7},{x:10,y:7},{x:12,y:7},{x:13,y:7},{x:14,y:7},{x:15,y:7}, {x:18, y:7}, {x:19, y:7},
                    {x:7,y:8},{x:8,y:8},{x:9,y:8},{x:13,y:8},{x:14,y:8},{x:15,y:8},{x:16,y:8},{x:17,y:8},{x:18,y:8},
                    {x:14,y:9},{x:15,y:9},{x:16,y:9},{x:17,y:9},{x:18,y:9},
                    {x:14,y:10},{x:15,y:10},{x:16,y:10},{x:17,y:10},
                    {x:13,y:11},{x:14,y:11},{x:15,y:11},{x:16,y:11},
                    {x:12,y:12},{x:13,y:12},{x:14,y:12},{x:15,y:12},{x:16,y:12},{x:17,y:12},{x:18,y:12},{x:19,y:12},],
                    speed:4,
                    minX:7, 
                    maxX:22,
                    minY:0,
                    maxY:12,
                    fire: {
                          coordinates:[

                    {x:3, y:4}, {x:4, y:4}, {x:5, y:4},
                    {x:1, y:5}, {x:2, y:5}, {x:3, y:5},
                    {x:2, y:6}, {x:4, y:6}, {x:6, y:6},
                    {x:3, y:7}, {x:4, y:7}, {x:5, y:7},

                    ]
                    },
                    
  } 
}


function initSpaceship() {
  return {
    coordinates:[{x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0},
                 {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:4,y:1}, {x:5,y:1}, {x:6,y:1},
                 {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:4,y:2},
                 {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3},
                 {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:6,y:4},
                 {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:4,y:5}, {x:5,y:5}, {x:6,y:5},
                 {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:4,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:9,y:6}, {x:10,y:6},
                 {x:1,y:7}, {x:2,y:7}, {x:3,y:7}, {x:4,y:7}, {x:5,y:7}, {x:6,y:7}, {x:7,y:7}, {x:8,y:7}, {x:9,y:7}, {x:10,y:7},
                 {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:4,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:9,y:8}, {x:10,y:8}, {x:11,y:8}, {x:12,y:8}, {x:13,y:8},
                 {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:4,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}, {x:9,y:9}, {x:10,y:9}, {x:11,y:9}, {x:12,y:9}, {x:13,y:9},
                 {x:1,y:10},{x:2,y:10}, {x:3,y:10}, {x:4,y:10},{x:5,y:10}, {x:6,y:10},{x:7,y:10}, {x:8,y:10},{x:9,y:10}, {x:10,y:10},
                 {x:1,y:11},{x:2,y:11}, {x:3,y:11}, {x:4,y:11},{x:5,y:11}, {x:6,y:11},{x:7,y:11}, {x:8,y:11},{x:9,y:11}, {x:10,y:11},
                 {x:1,y:12},{x:2,y:12}, {x:3,y:12}, {x:4,y:12},{x:5,y:12}, {x:6,y:12},
                 {x:1,y:13},{x:2,y:13}, {x:3,y:13}, {x:4,y:13},{x:5,y:13}, {x:6,y:13},
                 {x:1,y:14},{x:2,y:14}, {x:3,y:14}, {x:4,y:14},
                 {x:1,y:15},{x:2,y:15}, {x:3,y:15}, {x:4,y:15}, 
                 {x:1,y:16},{x:2,y:16}, {x:3,y:16}, {x:4,y:16}, {x:5,y:16}, {x:6,y:16}, 
                 {x:1,y:17},{x:2,y:17}, {x:3,y:17}, {x:4,y:17}, {x:5,y:17}, {x:6,y:17},],
                 speed:5,
                 minX:1, 
                 maxX:13,
                 minY:0,
                 maxY:17,
                 fire: {
                   coordinates:[
                                {x:0,y:0}, 
                                {x:0,y:1}, 
                                {x:0,y:2}, 
                                {x:0,y:3}, 
                                {x:0,y:4}, 
                                {x:0,y:5}, 
                                {x:0,y:6},
                                {x:0,y:7}, 
                                {x:0,y:8}, 
                                {x:0,y:9}, 
                                {x:0,y:10},
                                {x:0,y:12},
                                {x:0,y:13},
                                {x:0,y:14},
                                {x:0,y:15}, 
                                {x:0,y:16}, 
                                {x:0,y:17},
                                ]
                 },
  };
}




function initJerrySpaceship() {
  return {
      coordinates:[
{x:10, y:1}, {x:11, y:1},
{x:10, y:2}, {x:11, y:2},
{x:9, y:3}, {X:10, y:3}, {x:11, y:3}, {x:12, y:3}, {x:13, y:3}, {x:14, y:3}, {x:15, y:3},
{x:10, y:4}, {x:11, y:4},
{x:10, y:5}, {x:11, y:5}, {x:12, y:5},
{x:10, y:6}, {x:11, y:6}, {x:12, y:6}, {x:13, y:6},
{x:8, y:7}, {x:9, y:7}, {x:10, y:7}, {x:11, y:7}, {x:12, y:7}, {x:13, y:7}, {x:14, y:7}, {x:15, y:7}, {x:16, y:7}, {x:17, y:7},
{x:8, y:8}, {x:9, y:8}, {x:10, y:8}, {x:11, y:8}, {x:12, y:8}, {x:13, y:8}, {x:14, y:8}, {x:15, y:8}, {x:16, y:8}, {x:17, y:8}, {x:18, y:8},
{x:9, y:9}, {x:10, y:9}, {x:11, y:9}, {x:12, y:9},  {x:18, y:9}, {x:19, y:9},
{x:9, y:10}, {x:10, y:10}, {x:11, y:10}, {x:12, y:10},  {x:18, y:10}, {x:19, y:10},
{x:8, y:11}, {x:9, y:11}, {x:10, y:11}, {x:11, y:11}, {x:12, y:11}, {x:13, y:11}, {x:14, y:11}, {x:15, y:11}, {x:16, y:11}, {x:17, y:11}, {x:18, y:11},
{x:8, y:12}, {x:9, y:12}, {x:10, y:12}, {x:11, y:12}, {x:12, y:12}, {x:13, y:12}, {x:14, y:12}, {x:15, y:12}, {x:16, y:12}, {x:17, y:12},
{x:10, y:13}, {x:11, y:13}, {x:12, y:13}, {x:13, y:13},
{x:10, y:14}, {x:11, y:14}, {x:12, y:14},
{x:10, y:15}, {x:11, y:15},
{x:9, y:16}, {X:10, y:16}, {x:11, y:16}, {x:12, y:16}, {x:13, y:16}, {x:14, y:16}, {x:15, y:16},
{x:10, y:17}, {x:11, y:17},
{x:10, y:18}, {x:11, y:18},
],
speed:5,
minX:8, 
maxX:18,
minY:1,
maxY:18,
fire: {
  coordinates:[
  {x:3, y:6}, {x:4, y:6}, {x:5, y:6},
  {x:1, y:7}, {x:2, y:7}, {x:3, y:7},
  {x:2, y:8}, {x:4, y:8}, {x:6, y:8},
  {x:3, y:9}, {x:4, y:9}, {x:5, y:9},

  {x:3, y:11}, {x:4, y:11}, {x:5, y:11},
  {x:1, y:12}, {x:2, y:12}, {x:3, y:12}, {x:5, y:12},
  {x:2, y:13}, {x:3, y:13}, {x:4, y:13}, {x:6, y:13},
  {x:4, y:14}, {x:5, y:14},
  ]
},
  };
}







function createAsteroids() {

  var asteroids = [];
  for (i = 0; i < asteroidCount; i++) {
    var speed = Math.floor((Math.random() * maxSpeed) + 1);
    var xOffset = Math.floor((Math.random() * (canvasWidth * speed)) + asteroidMaxSize); 
    var yOffset = Math.floor((Math.random() * canvasHeight) - (asteroidMaxSize/2)); 
    var width = Math.floor((Math.random() * asteroidMaxSize) + asteroidMinSize); 
    var height = Math.floor((Math.random() * asteroidMaxSize) + asteroidMinSize); 
    var randX = 1;
    var randY = 1;  
    var x;
    var y;
    
    
    asteroids[i] = { coordinates:[], speed:speed, corners:[],direction:0};
    if (level === "crazy") {
      var direction = Math.floor((Math.random() * 3) + 1);
      asteroids[i].direction = direction - 2;
    } 
    for (x = xOffset; x< xOffset + width; x += randX) {
      randX = Math.floor((Math.random() * 3) + 1);
      for (y = yOffset; y < yOffset + height; y+= randY) {
        if (x === xOffset && y === yOffset) {
          asteroids[i].corners.push({x:x, y:y});
        }
        randY = Math.floor((Math.random() * 3) + 1);
        asteroids[i].coordinates.push ({x:x+2, y:y+2});
      }
    }
    asteroids[i].corners.push ({x:x-2, y:y-2});
  }
  return asteroids;
}


function isHit (spaceship, asteroid) {
  for(var j=0; j< spaceship.coordinates.length; j++) {
    if (spaceship.coordinates[j].x >= asteroid.corners[0].x && spaceship.coordinates[j].x <= asteroid.corners[1].x &&
        spaceship.coordinates[j].y >= asteroid.corners[0].y && spaceship.coordinates[j].y <= asteroid.corners[1].y) {
      return true
    }
  }
  return false;
}

function moveAsteroid (asteroid) {
  ctx.fillStyle="gray";


  if (level === "impossible") {
    if (Math.floor((Math.random() * 7) + 1)===1) {
      var direction = Math.floor((Math.random() * 3) + 1);
      direction=direction - 2;
      asteroid.direction = direction;
    }
  }
  for (var i = 1; i<= asteroid.speed; i++) {
    // decrement the corners since asteroid moving to left
    asteroid.corners[0].x--;
    asteroid.corners[0].y += asteroid.direction;
    asteroid.corners[1].x--;
    asteroid.corners[1].y += asteroid.direction;
    asteroid.coordinates.forEach ( function (coordinate) { 
      // decrement all the coordinates since asteroid moving to left
      coordinate.x--;
      coordinate.y += asteroid.direction;
      if (i == asteroid.speed && asteroid.corners[0].x<=canvasWidth && asteroid.corners[1].x>=0) {
        ctx.fillRect(coordinate.x, coordinate.y, 1, 1);
      } 
    });
  }
}


function draw (item, color) {
  ctx.fillStyle=color;
  item.coordinates.forEach ( function (coordinate) { 
    ctx.fillRect(coordinate.x, coordinate.y, 1, 1);
  });
}

function checkForMove (spaceship) {
  draw (spaceship, "white");
  if(input.isDown('DOWN')) {
    if (spaceship.maxY < canvasHeight) {
      spaceship.maxY++;
      spaceship.minY++;
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y++;
      });
      spaceship.fire.coordinates.forEach ( function (coordinate) { 
        coordinate.y++;
      });
    }
  }
  if(input.isDown('UP')) {
    if (spaceship.minY > 0) {
      spaceship.minY--;
      spaceship.maxY--;
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y--;
      });
      spaceship.fire.coordinates.forEach ( function (coordinate) { 
        coordinate.y--;
      });
    }
  }
  if(input.isDown('LEFT')) {
    if (spaceship.minX > 0) {
      spaceship.minX--;
      spaceship.maxX--;
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x--;
      });
      spaceship.fire.coordinates.forEach ( function (coordinate) { 
        coordinate.x--;
      });
    }
  }
  if(input.isDown('RIGHT') || input.isDown('d')) {
    if (spaceship.maxX < canvasWidth) {
      spaceship.minX++;
      spaceship.maxX++;
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x++;
      });
      spaceship.fire.coordinates.forEach ( function (coordinate) { 
        coordinate.x++;
      });
      draw (spaceship.fire, "red");
    }
  }
}

function checkForBeaten (spaceship, asteroid) {
  if (spaceship.coordinates[0].x < asteroid.corners[1].x) {
    gameBeaten = false;
  }
}

function main () {
  for(var i=0; i< spaceship.speed; i++) {
    ctx.drawImage(spaceBackground, 0, 0);
    checkForMove (spaceship);
  }
  gameBeaten=true;
  
  for(var i=0; i< asteroids.length; i++) {
    moveAsteroid (asteroids[i]);
    if (isHit (spaceship, asteroids[i])) {
      //lives--;
      //setTimeout(init, 5000);
      gameOver=true;
      break;
    }
    checkForBeaten (spaceship, asteroids[i]);
  }
  document.getElementById ("lives").innerHTML = lives;
  if (gameOver) {
    ctx.fillStyle = "black";
    ctx.font = "bold 24px Arial";
    ctx.fillText("GAME OVER", 450, 400);
    score--;
    document.cookie=player + "=" + score + "; path=/"; 
    document.getElementById ("score").innerHTML = score;
    disableButtons(null);
    return;
  }
  if (gameBeaten) {
      ctx.fillStyle = "black";
      ctx.font = "bold 24px Arial";
      ctx.fillText("Congratulations " + player + "! " +  levelMsg, 400, 400);
      score += levelPoints;
      document.cookie=player + "=" + score + "; path=/"; 
      document.getElementById ("score").innerHTML = score;
      disableButtons(null);
      return;
  } 
  if (!paused) {
    setTimeout(main, 1000/60); 
  }
}

function disableButtons(disabled) {
  document.getElementById("beginGame").disabled=disabled;
}

function init () {
  disableButtons(true);
  if (level === "beginner") {
    asteroidCount = 100;
    maxSpeed = 2;
    levelPoints = 1;
    levelMsg = "You are on the way.";
  } else if (level === "intermediate") {
    asteroidCount = 180;
    maxSpeed = 3;
    levelPoints = 5
    levelMsg = "You are actually pretty good.";
  } else if (level === "expert") {
    asteroidCount = 230;
    maxSpeed = 3;
    levelPoints = 10;
    levelMsg = "You are an epic space pilot!";
  } else if (level === "crazy") {
    asteroidCount = 250;
    maxSpeed = 3;
    levelPoints = 15;
    levelMsg = "You've been practicing way too long.";
  }  else if (level === "impossible") {
    asteroidCount = 180;
    maxSpeed = 3;
    levelPoints = 20;
    levelMsg = "You have superhuman abilities.";
  }
  gameBeaten = false;
  gameOver = false;
  if (spaceshipSelect === "willSpaceship") {
    spaceship=initWillSpaceship();
  } else if (spaceshipSelect === "jerrySpaceship") {
    spaceship=initJerrySpaceship();
  } else {
    spaceship=initSpaceship();
  }
  asteroids = createAsteroids();
  document.getElementById ("player").innerHTML = player;
  score = getCookieScore (player);
  document.getElementById ("score").innerHTML = score;
  setTimeout(main, 1000/60);
}

var asteroids =[];
var score = 0;
var player = "";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidth = canvas.width = 1100;
var canvasHeight = canvas.height = 650;
var asteroidMaxSize = 100;
var asteroidMinSize = 10;
var lives=3;
var gameBeaten = false;
var gameOver = false;
var maxSpeed = 3;
var paused = false;
var spaceshipSelect;
var spaceship;
var asteroidCount = 0;
var levelPoints = 0;
document.body.appendChild(canvas);
var spaceBackground = new Image();
spaceBackground.src = "../img/space_background.png";
spaceBackground.onload = function() {
  ctx.drawImage(spaceBackground, 0, 0);
}


document.addEventListener('keydown', function(e) {
  if (String.fromCharCode(e.keyCode) == 'P') {
    if (paused) {
      paused = false;
      setTimeout(main, 1000/60);
    } else {
      paused = true;
    }
  }
});


