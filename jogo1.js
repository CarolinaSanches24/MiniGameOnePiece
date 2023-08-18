let personagem
let fundo
let sunny

const tamanho = 64
const velocidade = 64

let andarX = 0 // Posição inicial do objeto
let andarY = 0
let botao
function jogo1(){
 
  
  text('ME AJUDE A ENCONTRAR O CAPITÃO',10,550)
  textSize(25)
  textStyle(BOLD)
 
  
  background(fundo,70);
  image(sunny,460,230,120,150);
  image(sunny,260,230,120,150);
  image(sunny,100,230,120,150);
  

  //Botão Voltar
  rect(x+20,y+250,w-50,h-20,10)
  text('Voltar',x+60,y+275)
  
  

 if (andarX < 0) {
    andarX = 0;
  }

  if (andarY < 0) {
    andarY = 0;
  }
  if (andarX > tamanho * 8) {
    andarX = tamanho * 8;
  }

  if (andarY > tamanho * 8) {
    andarY = tamanho * 8;
  }
  
  
 image(personagem, andarX, andarY, tamanho, tamanho)
  //Escontrar luffy
  
  if(andarX === tamanho*8 && andarY === tamanho*5){
  
    image(gan,400,380,200,200);
    //width e height retangulo
    
  
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //para o jogo (loop)
    noLoop()
  }
  if(andarX === tamanho*4 && andarY === tamanho*5){
  //Encontra Nami
    image(perd,400,380,200,200);
    //width e height retangulo
    
    //criar um botão
    
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //para o jogo (loop)
    noLoop()
  }
  if(andarX === tamanho*2 && andarY === tamanho*5){
  //Encontra ussop
    image(perd2,400,380,200,200);
    //width e height retangulo
    
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //para o jogo (loop)
    noLoop()
    
  }
  
}


function reset(){
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

//é chamada uma vez toda vez que uma tecla é pressionada.

function keyPressed() { //Movimentado com teclado
  //UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
  if(keyCode === DOWN_ARROW){ //Para baixo
    andarY += velocidade 
   
  }
  
  if(keyCode === UP_ARROW){//Para cima
    andarY -= velocidade
  }
  
  if(keyCode === RIGHT_ARROW){//Para direita
    andarX += velocidade
  }
  
  if(keyCode === LEFT_ARROW){//para esquerda
    andarX -= velocidade
  }
}