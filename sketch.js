const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snowBackground;


function preload(){
  snowBackground = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
 Snow = createSprite(400, 200, 50, 50); 
}

function draw() {
  background(snowBackground);
    
  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
     
  }
}