const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

function RandomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random()* 6 )];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
})

function moveMole() {
    timerId = setInterval(RandomSquare, 500);
}



function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        document.getElementById('btnIniciar').style.display = "block";
        alert("¡FIN DEL JUEGO! tu puntuación: " + result);
    }
}

let countDownTimerId;

function BeginGame() {
    countDownTimerId = setInterval(countDown, 1000);
    moveMole();
    document.getElementById('btnIniciar').style.display = "none";
    {
        document.getElementById('audio').src ="Fall Guys Background Music Pa Pari Pa.mp3";
    }
}