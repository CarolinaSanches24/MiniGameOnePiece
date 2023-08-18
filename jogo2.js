var a =100;// Horizontal luffty
var b = 50; // Verical luffy
var cQ = 80; // largura FRUTA 1
var dQ = 80; //altura FRUTA 1
var aP =0; // luffy 
var bP =380;// luffy 
var r = 100;
var s = 100;
var c; 
var vidas = 4;
var colisao = false
var pontos =0
let Gomu
let tijolo
let luffy
function jogo2(){
  
  background(redLine,70);
  textSize(16)
  text('Vidas Jogador :'+vidas, 400,30)
  text('Pontos:'+pontos,30,30);
  
  image(Gomu,a,b,cQ,dQ); // Fruta
  
  
   b +=6
  
  image(luffy,aP,bP,r,s) 
  if(mouseIsPressed && dist(mouseX,mouseY,aP,bP)<=r){
    aP=mouseX;
    bP=mouseY;
    
  }
  
  image(tijolo,0,480,r,s)
  image(tijolo,100,480,r,s)
  image(tijolo,200,480,r,s)
  image(tijolo,300,480,r,s)
  image(tijolo,400,480,r,s)
  image(tijolo,500,480,r,s)
  //Colisão
  c = dist(aP,bP,a,b)
   //Botão Voltar
 
  rect(x+30,y+320,w-50,h,10)
  textSize(30);
  text('Voltar',x+60,y+360)
  
    
   if(c>0 && c<r){
    colisao = true
     pontos++
}
  if(b>576 || colisao ==true){
    a= random(50,350)
    b=0
    colisao = false
 }
  if(b==300){
    vidas--
}
  
  if(vidas==0){
  background(gameOver,576)
  textSize(20)
  fill(248,248,255)
  text('Sua Pontuação: ' +pontos,x+200,y+340)
  noLoop()
   
  }
 
}


