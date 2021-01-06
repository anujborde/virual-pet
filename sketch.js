//Create variables here
var dog,di
var happy ,happyi
var foodS

var database
var Stock="20"
var stock

function preload()
{

di=loadImage("images/dogImg.png")
happyi=loadImage("images/dogImg1.png")

	//load images here
}

function setup() {
	createCanvas(1000, 1000);
  database=firebase.database();

 var foodstock=database.ref('Food');
  foodstock.on("value",readStock)
  

dog=createSprite(500,650,10,10)
dog.addImage(di)


}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
  if(foodS!==undefined){

  
  textSize(30)
  fill(0)
  text("NOTE:Press UP_ARROW Key to feed Drago milk!",200,50)
  text("Foodstock remaining="+foodS,200,200)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
 
  dog.addImage(happyi)
}
if(keyWentUp(UP_ARROW)){

  dog.addImage(di);
}
if(foodS===0){
  foodS=20
} 
 }


}

function readStock(data){
foodS=data.val();
//foodstock='Food'/"value"
}

function writeStock(x){
if(x<=0){
  x=0
}
else{x=x-1}  
database.ref('/').update({
Food:x

  })
}




