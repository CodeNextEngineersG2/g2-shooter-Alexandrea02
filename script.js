// UI Variables
var canvas;
var gameScreen;
var scoreDisplay;

// Game Variables
var gameRunning;
var shipShooting;
var alienShooting;
var score;

// Ship Variables
var shipDiameter;
var shipX;
var shipY;
var shipSpeed;
var shipColor;

// Bullet Variables
var bulletDiameter;
var bulletX;
var bulletY;

// Alien Variables
var alienDiameter;
var alienX;
var alienY;
var alienVelocity;

// Alien Bullet Variables
var alienBulletDiameter;
var alienBulletX;
var alienBulletY;

function setup() {
 	canvas= createCanvas(500,400);
 	background(25,90,100);
 	gameScreen = select("#Game-screen");
 	canvas.parent(gameScreen);

 	shipColor="#0000ff";
 	shipDiameter=50;
 	shipSpeed=10;
 	shipX=250;
 	shipY=370;
 	bulletDiameter=30;
 	shipShooting=false;

 	alienDiameter=30;
 	alienX=15;
 	alienY=15;
 	alienVelocity=10;

 	alienBulletX=10
 	alienBulletY=10
 	alienBulletDiameter= 10;
 	alienShooting=false;


 }
  /*cnv.parent("Game-screen");
}

 /* This function is called once. Sets up the canvas, accesses HTML elements with
 * select(), and adds event listeners to those elements. Sets initial values of
 * variables by calling resetGame().
 */


/*
 * gameOver()
 * This function stops the game from running and shows an alert telling the
 * player what their final score is. Finally it resets the game by calling
 * resetGame()
 */


/*
 * resetGame()
 * This function "resets the game" by initializing ship, alien, and game
 * variables.
 */


 function draw(){
 	background(25,90,100);
 	drawShip();
 	drawBullet();
 	if(shipShooting==true){
 		drawBullet();
 	}
 	drawAlien();
 	if(alienShooting=true) {
 		drawAlienBullet();
 	}
 }

function drawShip() {
	fill(shipColor);
	ellipse(shipX,shipY,shipDiameter,shipDiameter);
	if(keyIsDown(LEFT_ARROW)&&shipX>shipDiameter/2) {
		shipX= shipX-shipSpeed;
	}
	if(keyIsDown(RIGHT_ARROW)&&shipX<width-shipDiameter/2) {
		shipX= shipX+shipSpeed;
	}
}
/*
 * drawShip()
 * This function draws the player's ship. It also controls the ship's
 * x value by checking if the player is holding down the left or right keys.
 */


function keyPressed() {
	if(keyCode===32 &&shipShooting==false) {
		bulletX=shipX;
		bulletY=shipY;
		shipShooting=true;
	} 

}

 /* This function runs automatically when the player presses the spacebar
 * (keyCode === 32). If they do, and a bullet is not currently being fired
 * ("shipShooting" variable is false), it positions the bullet relative to the
 * ship. Then it sets the "shipShooting" variable to "true", indicating a ship
 * bullet is currently being fired.
 */


function drawBullet() {
	if(bulletY > 0) {
		fill("#000000");
		ellipse(bulletX,bulletY,bulletDiameter,bulletDiameter);
		bulletY -=10;
	}
	else(shipShooting=false)
}


 /* This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left of the screen
 * and the player earns a point. The alien aslo becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */


function drawAlien() {
	alienX= alienX + alienVelocity;
	if(alienX>=width- alienDiameter/2 
		|| alienX<=alienDiameter/2) {
		alienVelocity*= -1;
		}
	fill("#ff0000");
	ellipse(alienX,alienY,alienDiameter,alienDiameter);
 	
 	if(random(4) <1 && !alienShooting) {
 		alienBulletX=alienX;
 		alienBulletY=alienY;
 		alienShooting=true;
 	}
 }
 /* This function draws an alien. It also checks to see if the alien has touched
 * the player's ship. If it has, the function calls gameOver().
 */


function drawAlienBullet(){
	if(alienBulletY<height) {
		ellipse(alienBulletX,alienBulletY,alienBulletDiameter,alienBulletDiameter);
		alienBulletY+=10;
	} 
	else{
		alienShooting=false
	}
}
 /* This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */


/*
 * resetAlien()
 * This function sets the alien to its original position at the top-left of
 * the screen. It also sets its velocity to its absolute value (so, if the
 * velocity was negative when it died, it becomes positive upon reset, making
 * it always start by moving to the right).
 */


/*
 * checkCollision(aX, aY, aD, bX, bY, bD)
 * This function first calculates the distance between two circles based on
 * their X and Y values. Based on the distance value, the function returns
 * "true" if the circles are touching, and false otherwise.
 * Circles are considered touching if
 * (distance <= (circle1Diameter + circle2Diameter) / 2)
 */
