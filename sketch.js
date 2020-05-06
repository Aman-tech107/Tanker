// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var ground, tanker;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,10);

    tanker = new Tanker(200,200,80,20,45);
}

function draw() {
// Remember to update the Matter Engine and set the background.
    background(255,255,255);
    Engine.update(engine);

    fill("Grey");
    ground.display();
    tanker.display();
    drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}