const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops = [];
var umbrella;
var rand;
var maxDrops= 100;
var thunderCreatedFrame = 0;
var thunder1, thunder2, thunder3, thunder4, thunder;



function preload(){
    boyImg = loadAnimation("images/walking8.png", "images/walking7.png",
        "images/walking6.png", "images/walking5.png", "images/walking4.png",
        "images/walking3.png", "images/walking2.png", "images/walking1.png");
        thunder1 = loadImage("images/thunder1.png");
        thunder2 = loadImage("images/thunder2.png");
        thunder3 = loadImage("images/thunder3.png");
        thunder4 = loadImage("images/thunder4.png");
    
}

function setup(){
   
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0)
    {
        for(var i = 0; i < maxDrops; i++)
        {
            drops.push(new Drop(random(0,400), random(0,400), 5));
        }
    }
}

function draw()
{
    background("black");  
    Engine.update(engine);

    umbrella.display();

    rand = Math.round(random(1, 4));
    if(frameCount % 80 === 0 && frameCount >= 1)
    {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(30, 370),random(10, 30),10,10);
        switch (rand) {
            case 1:
                thunder.addImage(thunder1);
                break;
            case 2:
                thunder.addImage(thunder2);
                break;
            case 3:
                thunder.addImage(thunder3);
                break;
            case 4:
                thunder.addImage(thunder4);
                break;
            default:break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder)
    {
        thunder.destroy();
    }

    for(var i = 0; i < maxDrops; i++)
    {
        drops[i].display();
        drops[i].updateY();
    }
}
