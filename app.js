/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
const colorButtons = document.querySelectorAll('.color')
const colorDisplay = document.querySelector('.colordisplay')

const start = document.querySelector('#start')
const restart = document.querySelector('#restart')
const levels = document.querySelector('#level')

let highScore = 0
let highScores = ['1' , '2' , '3']
let loser = false

document.getElementById("restart").addEventListener("click", function hidebutton() {
    this.style.display = "none";
  });

let colorsArray = ['green', 'red', 'blue', 'yellow']
let currentIndex = 0
let colorOptions = []
let playerChoices = [] // colorOptions
let currentColor = 0 // colorOptions
let clearColor = '#00000000'




/*------------------------ Cached Element References ------------------------*/
const play = document.querySelectorAll('#button')




/*----------------------------- Event Listeners -----------------------------*/

// colorButtons.forEach(button => addEventListener('click' , (e) => {
//    console.log(e.target)
// }));



/*-------------------------------- Functions --------------------------------*/

const randomColor = () => {
    let randomIndex = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[randomIndex]
    colorOptions.push(color)
    console.log(color)
    setTimeout(colorTimer, 500)
    hideButton()
}

const handleColorChoice = (event) => {
    const currentColor = event.target.id
    console.log(`'playerChoice' ${playerChoices}`)


    if (currentColor === colorOptions[currentIndex]) {
        console.log(`'color match' ${currentColor}`)
        currentIndex += 1;
        levels.innerText = `level: ${currentIndex +1}`

        console.log(currentIndex)
        if (currentIndex === colorOptions.length) {
            randomColor()
            currentIndex = 0
        }
    } else {
        console.log('color not a match')
        loser = true
        gameOver ()
        return ("Game Over! Try Again?")
    }
    
}
const tryAgain = () => {
    currentIndex = 0 
    currentColor = 0
    colorOptions = []
    levels.innerText = `Level: 1`   
}

const startGame = () => {
    currentIndex = 0 
    currentColor = 0
    colorOptions = []
    levels.innerText = `Level: 1`
    randomColor()
    hideButton()

}
const updateHighScore = () => {
    if (currentIndex > highScore) {
        highScore = currentIndex;
        console.log(highScore)
        localStorage.setItem("highScore", highScore);
        highScores.push(highScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
};


start.addEventListener('click', startGame)
restart.addEventListener('click', startGame);

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', handleColorChoice)
}

tryAgain()


const colorTimer = () => {
    for (let i = 0; i < colorOptions.length; i++) {
        setTimeout(() => {
            colorDisplay.style.background = colorOptions[i];
        }, i * 750); 
    }
    setTimeout(colorClear, colorOptions.length * 750 + 500)
};

const colorClear = () => {
       colorDisplay.style.background = clearColor; 
}

colorTimer();
colorClear()



const button = document.getElementById("restart");
    function hideButton() {
    button.style.display = "none";
    }
    function showButton() {
    button.style.display = "block"; 
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
    showButton();
}
    button.addEventListener("click", hideButton);
gameOver() 
