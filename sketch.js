let personagem;
let fundo;
let sunny;

const tamanho = 64;
const velocidade = 64;

let andarX = 0; // Posição inicial do objeto
let andarY = 0;

let botao;

//executada apenas uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage("Tony.png");
  sunny = loadImage("sunny.png");
  fundo = loadImage("mar.jpg");
  gan = loadImage("ganhou.png");
  perd = loadImage("nami.png");
  perd2 = loadImage("god.png");
}

//fica executado até que o programa se encerre
function draw() {
  fill(245, 255, 250);
  text("ME AJUDE A ENCONTRAR O CAPITÃO", 10, 550);
  textSize(25);
  textStyle(BOLD);

  background(fundo, 70); //Img de fundo não precisa de coordenas
  image(sunny, 460, 230, 120, 150);
  image(sunny, 260, 230, 120, 150);
  image(sunny, 100, 230, 120, 150);
  // var , x, y , width, height

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

  image(personagem, andarX, andarY, tamanho, tamanho);

  //Escontrar luffy

  if (andarX === tamanho * 8 && andarY === tamanho * 5) {
    image(gan, 400, 380, 200, 200);
    //width e height retangulo

    //criar um botão

    botao = createButton("Reiniciar");
    //resetar o jogo
    botao.mousePressed(reset);
    //para o jogo (loop)
    noLoop();
  }
  //text(`x:${andarX} y: ${andarY}`, 500, 500)
  if (andarX === tamanho * 4 && andarY === tamanho * 5) {
    //Encontra Nami
    image(perd, 400, 380, 200, 200);
    //width e height retangulo

    //criar um botão

    botao = createButton("Reiniciar");
    //resetar o jogo
    botao.mousePressed(reset);
    //para o jogo (loop)
    noLoop();
  }
  if (andarX === tamanho * 2 && andarY === tamanho * 5) {
    //Encontra ussop
    image(perd2, 400, 380, 200, 200);
    //width e height retangulo

    //criar um botão

    botao = createButton("Reiniciar");
    //resetar o jogo
    botao.mousePressed(reset);
    //para o jogo (loop)
    noLoop();
  }
}

function reset() {
  andarX = 0;
  andarY = 0;
  botao.remove();
  loop();
}

//é chamada uma vez toda vez que uma tecla é pressionada.

function keyPressed() {
  //UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
  if (keyIsDown(DOWN_ARROW)) {
    andarY += velocidade;
  }

  if (keyIsDown(UP_ARROW)) {
    andarY -= velocidade;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    andarX += velocidade;
  }

  if (keyIsDown(LEFT_ARROW)) {
    andarX -= velocidade;
  }
}
