
let note_img;
let kalam;
let note_img_width = 300;
let note_img_height = 328;
let image_offset = 300;
let text_offset = 50;
let addnote_input;
let addnote_button;
let allNotes = [];
let overlapException = false;

function preload() {
    note_img = loadImage('images/note.png');
    kalam = loadFont('assets/Kalam-Regular.ttf');
}


function setup() {

    createCanvas(windowWidth, windowHeight)
    addnote_input = createInput();
    addnote_input.position(windowWidth/2, 65);

    addnote_button = createButton('add note');
    addnote_button.position(addnote_input.x + addnote_input.width, 65);
    addnote_button.mousePressed(addNote);

    getAllNotes();

}

function draw() {
    clear();
    background(50);
    

    if (allNotes.length > 0) {
        for (item of allNotes)
        {
            

            if(mouseX > item.x && mouseX < item.x + note_img_width && mouseY > item.y && mouseY < item.y + note_img_height) {
                item.rollover = true;
                
            } 
            else {
                item.rollover = false;
            }

            if(item.dragging) {
                item.x = mouseX + item.offsetX;
                item.y = mouseY + item.offsetY;
                console.log(item.x, item.y)
            
            
            }
        
            display(item);
        }
    }

    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function mousePressed(){
    let overlapException = false;
    for (item of allNotes) {
        if(mouseX > item.x && mouseX < item.x + note_img_width && mouseY > item.y && mouseY < item.y + note_img_height  && !overlapException) {
            item.dragging = true;
            item.offsetX = item.x - mouseX;
            item.offsetY = item.y - mouseY;
            overlapException = true;
        }

       
        
    }
}

function mouseReleased() {
    for (item of allNotes) {
       item.dragging = false;
       
    }
    overlapException = false;
}

function addNote() {
    const message = addnote_input.value();
    const newNote = new note(message);
    addnote_input.value('');

    allNotes.push(newNote);
    sendNote(newNote);

}

function display(note){
    image(note_img, note.x, note.y);
    text(note.message, note.x + text_offset, note.y + text_offset, note_img_width -text_offset, note_img_height - text_offset);
    textSize(25);
    textFont(kalam);
}

class note {
    constructor(message) {
        this.x = getRandomInt(windowWidth - image_offset);
        this.y = getRandomInt(windowHeight - image_offset);
        this.message = message;
        this.timestamp = Date.now();
        this.dragging = false;
        this.offsetX;
        this.offsetY;
        this.rollover = false;
        

    }
}
 
  