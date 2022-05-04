let img; // Declare variable 'img'.
let spkr;
let hp;
let tv;
let cam;
let meta;
let books;
let netflix;


function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('images/room.png'); // Load the image
  spkr = loadImage('images/spkr.png')
  hp = loadImage('images/hp3.png')
  tv = loadImage('images/tv2.png')
  cam = loadImage('images/camera.png')
  meta = loadImage('images/meta.png')
  books = loadImage('images/books.png')
  netflix = loadImage('images/netflix.png')
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  // image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  // imageMode(CENTER);
  image(img, 0, 0, windowWidth, windowHeight);
  
  //books - goodreads
  if ((mouseX > (60/1920)*windowWidth) && (mouseX < (360/1920)*windowWidth) && (mouseY > (50/1080)*windowHeight) && (mouseY < (210/1080)*windowHeight)){
    image(books,(360/1920)*windowWidth, (215/1080)*windowHeight, (870/1920)*windowWidth, (580/1080)*windowHeight); 
  }
  
  //tv
  if ((mouseX > (960/1920)*windowWidth) && (mouseX < (1480/1920)*windowWidth) && (mouseY > (100/1080)*windowHeight) && (mouseY < (410/1080)*windowHeight)){
    image(tv, (650/1920)*windowWidth, (420/1080)*windowHeight, (786/1920)*windowWidth, (550/1080)*windowHeight); 
  }
  
  //camera
  if ((mouseX > (1730/1920)*windowWidth) && (mouseX < (1840/1920)*windowWidth) && (mouseY > (0/1080)*windowHeight) && (mouseY < (100/1080)*windowHeight)){
    image(cam, (1480/1920)*windowWidth, (110/1080)*windowHeight, (400/1920)*windowWidth, (600/1080)*windowHeight); 
  }
  
  //Laptop
  if ((mouseX > (710/1920)*windowWidth) && (mouseX < (950/1920)*windowWidth) && (mouseY > (730/1080)*windowHeight) && (mouseY < (850/1080)*windowHeight)){
    image(hp, (200/1920)*windowWidth, (380/1080)*windowHeight, (1000/1920)*windowWidth, (600/1920)*windowHeight); 
  }
  
  //Monitor
  if ((mouseX > (1480/1920)*windowWidth) && (mouseX < (1830/1920)*windowWidth) && (mouseY > (500/1080)*windowHeight) && (mouseY < (750/1080)*windowHeight)){
    image(netflix, (750/1920)*windowWidth, (300/1080)*windowHeight, (650/1920)*windowWidth, (815/1920)*windowHeight); 
  }
  
  //speaker
  if ((mouseX > (250/1920)*windowWidth) && (mouseX < (350/1920)*windowWidth) && (mouseY > (310/1080)*windowHeight) && (mouseY < (380/1080)*windowHeight)){
    image(spkr, (360/1920)*windowWidth, (400/1080)*windowHeight, (400/1920)*windowWidth, (560/1080)*windowHeight); 
  }
  
  //ipad on sofa
  if ((mouseX > (100/1920)*windowWidth) && (mouseX < (250/1920)*windowWidth) && (mouseY > (800/1080)*windowHeight) && (mouseY < (930/1080)*windowHeight)){
    image(meta, (240/1920)*windowWidth, (500/1080)*windowHeight,(890/1920)*windowWidth, (500/1080)*windowHeight); 
  }
  
  
}