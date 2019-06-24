let rect1;
let rect2;
let rect3;
let rect4; 
let rect5; 
let rect6;
let allRect;
let animationSpeed;
let allLetters;
let spacing;
let monsterrat;
let logo;
let logo_x;
let logo_y;



function preload() {
    
    monsterrat = loadFont('../assets/Montserrat-Regular.ttf');
}

function setup(){
    const ui_canvas = createCanvas(600,100)
    logo_x = 0;
    logo_y = 0;
    logo = createGraphics(600, 100);
    console.log(logo);
    spacing = logo.width / 6
    rect1 = new Rectangle(0 , 0, [229, 38, 30]);
    rect2 = new Rectangle(spacing , 0, [235, 117, 50]);
    rect3 = new Rectangle(spacing  * 2 , 0, [247, 208, 56]);
    rect4 = new Rectangle(spacing  * 3, 0, [163, 224, 71]);
    rect5 = new Rectangle(spacing  * 4 , 0, [73, 218, 154]);
    rect6 = new Rectangle(spacing  * 5 , 0, [52, 187, 230]);
    rect7 = new Rectangle(spacing  * 6 , 0, [67, 85, 219]);
    animationSpeed = 5
    logo_Rect = [rect1, rect2, rect3, rect4, rect5, rect6, rect7];
    allLetters = ["J","O","L","L","Y","."]
}
    

function draw(){

    clear();
    
    
    
    background('##FFFAFA');
    for (obj of logo_Rect){
        logo.noStroke()
        logo.fill(obj.rgb[0], obj.rgb[1], obj.rgb[2]);
        logo.rect(obj.x, obj.y, spacing, 200);

        if (mouseX - logo_x <= logo.width && mouseX - logo_x >= 0 && mouseY - logo_y <= logo.height && mouseY - logo_y >= 0){    
            if(obj.x <= spacing * -1){
                obj.x = (logo_Rect.length -1) * spacing;
            }
            
            obj.x -= animationSpeed;
        }
        else
        {
            if(obj.x % spacing != 0){
                obj.x += animationSpeed / 2 ;
            }
        }
    } 

   

    let posX = 1


    for (letter of allLetters){

       
        logo.textSize(90);
        logo.textFont(monsterrat);
       
        logo.fill(255);
        logo.text(letter ,posX ,logo.height - 10);
        posX += spacing;
        

    }

   image(logo, logo_x, logo_y); 


}

class Rectangle {
    constructor(x, y, rgb){
    this.x = x;
    this.y = y;
    this.rgb = rgb;
    }
    
}