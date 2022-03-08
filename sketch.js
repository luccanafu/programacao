var ball 
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30,30)
ball.shapeColor="red" ;




}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("up"))
{ball.y -=5}

if (keyDown("down"))
{ball.y +=5}

if (keyDown("left"))
{ball.x -=5}

if (keyDown("right"))
{ball.x +=5}




}




