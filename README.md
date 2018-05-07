# week1.day1.clickBox

## Instructions
1. Use command line to create a new project folder called `clickBox`
    - Navigate into the folder and create your required files (`index.html`, `sketch.js`) 
    - Include a reference to p5.js in your `index.html` file
2. In your `sketch.js`, setup your canvas (600x600)
    - Draw a square that takes up the whole canvas
    - Fill the square with the color blue
    - *NOTE: rectangles are centered using the upper left corner of the shape be default. See [`rectMode()`](https://p5js.org/reference/#/p5/rectMode) for more details.*
3. When the mouse is pressed, have the color of the box change from blue to red (it should stay that way, until pressed again)
4. When the mouse is pressed again, the color to should change back to red.

## Extra Credit
- Instead of only changing on mouse press, have the color also change when the spacebar is pressed.
- Remake your square to start at (0,0) and have a width and height of 100
    - *NOTE: let the square be centered at the upper left corner (no need to set `rectMode()`)*
    - This time, have the mouse clicks change the color of the square ONLY when the square is clicked. Think about where the `mouseX` and `mouseY` needs to be in order for it to be within the square.

## Helpful Resources
- [p5.js reference](https://p5js.org/reference/)

