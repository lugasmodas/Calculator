/* Mudar o fundo de cor */
let r, g, b, timer = 7000;

function start() {
  setInterval(() => {
    trocaBackground();
  }, timer);
}

function trocaBackground() {
  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgba(${r},${g},${b},0.5)`
}

window.addEventListener("load", start);
/* ---------------------------------- */


/* Funcionalidades Calculadora */
let char = document.getElementsByClassName('btn'),
  dialogo = document.getElementById('dialogo');
let number = [0];
let isSum = false, isSub = false, isTimes = false, isDiv = false;

function selecionaChar(valor) {
  switch (valor) {
    case 8:
      return 7;
    case 9:
      return 8;
    case 10:
      return 9;

    case 12:
      return 4;
    case 13:
      return 5;
    case 14:
      return 6;

    case 16:
      return 1;
    case 17:
      return 2;
    case 18:
      return 3;

    case 19:
      return '+';
    case 15:
      return '-';

    case 21:
      return 0;

    default:
      return 'else';
  }
}

function seString(valor) {
  switch (valor) {
    case '+':
      return [true, false, false, false];

    case '-':
      return [false, true, false, false];

    case '*':
      return [false, false, true, false];

    case '/':
      return [false, false, false, true];
  }
}

function auxChar(valor) {
  let input = selecionaChar(valor);
  let aux;

  console.log('number', number);

  if (typeof input != 'string') {
    let indexOfNumber = number.length - 1;

    if (number[indexOfNumber] == 0) {
      number[indexOfNumber] = input;
    }
    else {
      aux = number[indexOfNumber].toString() + input.toString();
      aux = Number(aux);
      number[indexOfNumber] = aux;
    }

    dialogo.innerText = number[indexOfNumber];
  }
  else {
    let retorno = seString(input);
    let indexOfNumber = number.length

    if (isSum == true) {
      number[indexOfNumber - 2] += number[indexOfNumber - 1];
      dialogo.innerText = number[indexOfNumber - 2];
      number.pop();
    }

    if (isSub == true) {
      number[indexOfNumber - 2] -= number[indexOfNumber - 1];
      dialogo.innerText = number[indexOfNumber - 2];
      number.pop();
    }

    isSum = retorno[0];
    isSub = retorno[1];
    isTimes = retorno[2];
    isDiv = retorno[3];
    number.push(0);
  }

}

{
  /* Detectando a tecla apertada */
  char[0].addEventListener('click', function () { auxChar(0); });
  char[1].addEventListener('click', function () { auxChar(1); });
  char[2].addEventListener('click', function () { auxChar(2); });
  char[3].addEventListener('click', function () { auxChar(3); });
  char[4].addEventListener('click', function () { auxChar(4); });
  char[5].addEventListener('click', function () { auxChar(5); });
  char[6].addEventListener('click', function () { auxChar(6); });
  char[7].addEventListener('click', function () { auxChar(7); });
  char[8].addEventListener('click', function () { auxChar(8); });
  char[9].addEventListener('click', function () { auxChar(9); });
  char[10].addEventListener('click', function () { auxChar(10); });
  char[11].addEventListener('click', function () { auxChar(11); });
  char[12].addEventListener('click', function () { auxChar(12); });
  char[13].addEventListener('click', function () { auxChar(13); });
  char[14].addEventListener('click', function () { auxChar(14); });
  char[15].addEventListener('click', function () { auxChar(15); });
  char[16].addEventListener('click', function () { auxChar(16); });
  char[17].addEventListener('click', function () { auxChar(17); });
  char[18].addEventListener('click', function () { auxChar(18); });
  char[19].addEventListener('click', function () { auxChar(19); });
  char[20].addEventListener('click', function () { auxChar(20); });
  char[21].addEventListener('click', function () { auxChar(21); });
  char[22].addEventListener('click', function () { auxChar(22); });
  char[23].addEventListener('click', function () { auxChar(23); });
}