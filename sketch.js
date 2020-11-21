var dog, happyDog, database, foodS, foodStock, stock


function preload()
{
  dogImg=loadImage("./images/dogImg.png");
  dogImg1=loadImage("./images/dogImg1.png");
}
function setup() {
  database=firebase.database();
  createCanvas(500,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}



function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  console.log(foodStock);
  writeStock(foodS);
  dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
  noStroke();
        textSize(35)
        fill("green");
        text("food remaining  " + foodS, width-300, 50)

        noStroke();
        textSize(13)
        fill("green");
        text("Press up arrow to feed draggo milk ",130,10,300,20)
}
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0;
    } 
    else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }




