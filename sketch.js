var map, car, form1, start, form2, form3;
var database, bg, radio;
var order, time, game;
var gameState = 0, playerCount;

function preload(){
  bg = loadImage("images/bg.jpg")
}

function setup() {
 createCanvas(1000, 600);
  database = firebase.database();
  start = new Start();
  game = new Game();
}

function draw() {
  background(bg);
  // background(239, 0, 143)
  start.display();
}
