
const play = document.querySelectorAll('#button')
const colorButtons = document.querySelectorAll('.color')
const colorDisplay = document.querySelector('.colordisplay')
const startBtn = document.querySelector('#start')
const levels = document.querySelector('#level')


let highScore = 0
let highScores = []
let loser = false

let colorsArray = ['green', 'red', 'blue', 'yellow']
let currentIndex = 0
let maxIndex = 0
let colorOptions = []
let playerChoices = [] 
let currentColor = 0 
let clearColor = '#00000000'

function setupApplication() {
    colorDisplay.style.display = "none";
    startBtn.addEventListener('click', () => {
        hideButton();
        colorDisplay.style.display = "block";
        startGame();
    });
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener('click', handleColorChoice)
    }
}

function hideButton() {
    startBtn.style.display = "none";
}

function showButton(btnText) {
    startBtn.style.display = "block";
    if (btnText) {
        startBtn.textContent = btnText
    }
}

const randomColor = () => {
    let randomIndex = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[randomIndex]
    colorOptions.push(color)
    console.log(color)
    setTimeout(colorTimer, 500)
}

const handleColorChoice = (event) => {
    const currentColor = event.target.id
    console.log(`'playerChoice' ${playerChoices}`)
    console.log('handle color choice', currentIndex, 'high score:', highScore)

    if (currentColor === colorOptions[currentIndex]) {
        console.log(`'color match' ${currentColor}`)
        currentIndex += 1;
        if (currentIndex > maxIndex) {
            maxIndex = currentIndex
        }
        levels.innerText = `level: ${currentIndex +1}`

        console.log(currentIndex)
        if (currentIndex === colorOptions.length) {
            randomColor()
            currentIndex = 0
        }
    } else {
        console.log('color not a match')
        loser = true
        gameOver()
    }
}

const startGame = () => {
    currentIndex = 0 
    currentColor = 0
    colorOptions = []
    levels.innerText = `Level: 1`
    maxIndex = 0
    randomColor();
}
const updateHighScore = () => {
    if (maxIndex > highScore) {
        highScore = maxIndex;
        console.log('highScore', highScore)
        localStorage.setItem("highScore", `${highScore}`);
        highScores.push(`${highScore}`);
        localStorage.setItem('highScores', JSON.stringify(highScores));
       
    }
    const currentHighScore = localStorage.getItem('highScore')
    console.log('cached value', currentHighScore)
}

const colorTimer = () => {
    
    for (let i = 0; i < colorOptions.length; i++) {
        setTimeout(() => {
            colorDisplay.style.background = 'transparent';
            setTimeout(() => {
                colorDisplay.style.background = colorOptions[i];
            }, 200); 
        }, i * 1000);
    }
    setTimeout(colorClear, colorOptions.length * 1000 + 500);
};

const colorClear = () => {
       colorDisplay.style.background = clearColor; 
}

const gameOver = () => {
    if (loser) { 
        updateHighScore()
        loser = true 
        currentIndex = 0 
        currentColor = 0
        colorOptions = []
        levels.innerText = `Level: 1`
    }

    showButton("Game Over!! Try Again");
}

setupApplication()