#ReadMe.md
###What is it?
Radon JS is my Javascript Framework for building 2d canvas games in Javascript. The framework provides the user with a series of simple functions for building fantastic games in no time. The framework is designed for hobbyists and beginers.
##Documentation
Welcome to the documentation for my Javascript Game Framework.
###Getting Started

Radon has two main functions, the setup function and the draw function. The setup function is the first function called when your game begins, it is only called once in a game cycle. Within the setup function you should initiate all the starting variables for your game and do calculations you will only need to do once per game.

As you can see in the example below in this setup function the background for the canvas is set to red and the varibles for the initial positioning of the sprite are set up.
```javascript
function setup() {
  background("red");
  shape2 = {
        x: 50,
        y: 10,
        width: 10,
        height: 10,
        color: "black",
    };
}
```

The second function is the draw function, this function is called approxiametely 33 times per second. In this function you should manipulate your x and y values to move your characters, check for collisions and work with user input.

For example in the draw function below the x position of shape 1 is set to the mouse position and shape 1 is then redrawn at its new x coardinate.
```javascript
function draw() {
  shape1.x = mousePos.x;
  fillRect(shape1.x, shape1.y, shape1.width, shape1.height, shape1.color);
}
```
___

###Graphics eg. Drawing Squares, Sprites, Lines
___
**Drawing Squares**

The text below explains how to draw a square on a 2d canvas.
```javascript
fillRect(x, y, width, height, color)
```
> **Required** | X is the x coardinate at which the graphic is to be drawn.

> **Required** | Y is the Y coardinate at which the graphic is to be drawn.

> **Required** | Width is the width of the graphic

> **Required** | Height is the height of the graphic.

> **Optional** | Color is the color of the square drawn.

---
  A Demonstration

```javascript
function setup() {
    shape1 = { x: 1, y: 10, width: 10, height: 10, color: "black"};
    shape2 = { x: 50, y: 10, width: 10, height: 10, color: "black"};
}

function draw() {
    fillRect(shape1.x, shape1.y, shape1.width, shape1.height, shape1.color);
    fillRect(shape2.x, shape2.y, shape2.width, shape2.height, shape2.color);
}
```

The above code demonstrates how to draw two rectangles side by side on the canvas. As I explained above in the setup() function you declair the starting positions for your variables and in the draw() function you draw the rectanges at the starting points you declaired.
___
**Drawing Sprites**

Drawing Sprites is slightly more complacated than drawing squares as you have to firsly load the image for the sprite in the init() function before you can draw the sprite in the draw() function.
```javascript
init() {
myImage = loadImage("logo.png");
image = { x: 50, y: 10, width: 100, height: 100};
...
}

draw() {
drawImage(myImage, image.x, image.y, image.height, image.width);
...
}
```
> **Required** | The first variable is the image variable your declaired in your init() function.

> **Required** | X is the x coardinate at which the graphic is to be drawn.

> **Required** | Y is the Y coardinate at which the graphic is to be drawn.

> **Required** | Width is the width of the graphic

> **Required** | Height is the height of the graphic.


###Game Logic eg. Tweening & Collision Checks
___
###User Input eg. Keypresses, Mouse Clicks
___
###Sound eg. Background Music
**Playing Sound Effects**
```javascript
playSound(url);
//eg. playSound("jump.wav").
// Plays sound stored at URL.
```
___
###Data Handling eg. Local Storage
___
**Saving Local Data**
```javascript
saveLocalData(name, value, days)
//eg. saveLocalDate("highscore", "320", "365")
//Creates a local Variable High Score with a value of 320
//to be stored for 1 year.
```
**Reading Local Data**
```javascript
readLocalData(name)
//eg. var score = readLocalDate("highscore");
//Reads the Local Variable High Score
```
**Deleting Local Data**
```javascript
deleteLocalDate(name)
//eg. deleteLocalDate("highscore");
//Deleted the local Variable High Score
```
**HTTP Requests**
```javascript
http.request(url, successfunction);
//Requests Data from URL and executes successfunction
//With recieved data
```
###Others
___
No Others At The Moment.


> ###Todo:

> Create Graphic for Circle, Line ect...

> Add Docs for User Input

> Add Docs for sound functions + Add Bkground Music

> Build game logic for tweening... Collision checkr.
