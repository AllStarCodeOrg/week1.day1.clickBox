let color, square_side_length;

function setup(){
    createCanvas(600,600);
    square_side_length = width;

    // Bonus - smaller square that changes on mouse click
    // square_side_length = 100;

    color = "blue";
}

function draw(){
    background("#454545");
    fill(color);
    rect(0,0,square_side_length,square_side_length);
}

function changeColor(){
    if(color === "red"){
        color = "blue";
    }else{
        color = "red";
    }
}

function mousePressed(){
    // Bonus - smaller square that changes on moues click
    // if(mouseX>100 || mouseY>100) return;
    changeColor();
}

// Bonus - change color when spacebar pressed
function keyPressed(){
    if(keyCode == 32){
        changeColor();
    }
}