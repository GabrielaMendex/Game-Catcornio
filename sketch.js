let personagem;
let grama;
let peixe;
let lago;
let arvore;
let posicaoPeixeX = 512;
let posicaoPeixeY = 512;
let contadorDePeixe = 0;

const tamanho = 64;

let andarX = 0;
let andarY = 0;

const velocidade = 64;

let botao;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage("personagem.gif");
  grama = loadImage("grama.avif");
  peixe = loadImage("peixe.gif");
  lago = loadImage("lago.png");
  arvore = loadImage("arvores.png");
}

function draw() {
  background(220);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      image(grama, tamanho * i, tamanho * j, tamanho, tamanho);
    }
  }
  
  image(lago, 20, 330, 250, 250);
  image(arvores, 390, 0, 170, 170);
  image(personagem, andarX, andarY, tamanho, tamanho);
  image(peixe, posicaoPeixeX, posicaoPeixeY, 50, 50);
  
  textSize(25);
  fill(204, 255, 204);
  text(contadorDePeixe + " Fishes", 430, 64);

  if (contadorDePeixe === 5) {
    rect(180, 240, 210, 80);
    textSize(45);
    fill(0, 51, 0);
    text("You Win!", 195, 300);
    
    botao = createButton("Reiniciar");
    botao.position(250, 320);

    botao.mousePressed(reset);
    noLoop();
  }
}

function reset() {
  andarX = 0;
  andarY = 0;
  posicaoPeixeX = 512;
  posicaoPeixeY = 512;
  contadorDePeixe = 0;
  botao.remove();
  loop();
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW) && andarY < 512) {
    andarY += velocidade;
    pegarPeixe();
  }

  if (keyIsDown(UP_ARROW) && andarY > 0) {
    andarY -= velocidade;
    pegarPeixe();
  }

  if (keyIsDown(RIGHT_ARROW) && andarX < 512) {
    andarX += velocidade;
    pegarPeixe();
  }

  if (keyIsDown(LEFT_ARROW) && andarX > 0) {
    andarX -= velocidade;
    pegarPeixe();
  }
}

function peixeRandomico() {
  var random = Math.random() * 576;
  return random - (random % 64);
}

function pegarPeixe() {
  if (andarX === posicaoPeixeX && andarY === posicaoPeixeY) {
    posicaoPeixeX = peixeRandomico();
    posicaoPeixeY = peixeRandomico();
    contadorDePeixe++;

    if (contadorDePeixe === 5) {
      andarX = 600;
      andarY = 600;
      posicaoPeixeX = 600;
      posicaoPeixeY = 600;
    }
  }
}
