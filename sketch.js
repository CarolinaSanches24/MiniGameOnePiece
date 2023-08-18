var tela = 1
var x = 160
var y=200
var w =200
var h =50

function preload(){
  imagem=loadImage('menu.jpg');
  personagem = loadImage('Tony.png')
  sunny=loadImage('sunny.png')
  fundo = loadImage('mar.jpg')
  gan =loadImage('ganhou.png')
  perd =loadImage('nami.png')
  perd2=loadImage('god.png')
  gameOver = loadImage('gameOver.png')
  Gomu = loadImage('Gomu.png')
  luffy = loadImage('Luffy.png')
  tijolo = loadImage('tijolo.jpg')
  redLine = loadImage('redLine.jpg')
  
}

function setup(){
  createCanvas(576,576);
   
}
function draw(){
  if(tela ==1){
    
      menu();
      
  }
  if(tela ==2){
      jogo1();
  }
  if(tela ==3){
      jogo2();
  }

}
