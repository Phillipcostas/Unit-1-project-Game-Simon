/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
const colorButtons = document.querySelectorAll('.color')

const start = document.querySelector('#start')
const restart = document.querySelector('#restart')

let highScore = false
let loser = false


let colorsArray = ['green', 'red', 'blue', 'yellow']
let currentIndex = 0
let colorOptions = []
let playerChoices = colorOptions
let currentColor = colorOptions



/*------------------------ Cached Element References ------------------------*/
const play = document.querySelectorAll('#button')




/*----------------------------- Event Listeners -----------------------------*/

// colorButtons.forEach(button => addEventListener('click' , (e) => {
//    console.log(e.target)
// }));



/*-------------------------------- Functions --------------------------------*/

const randomColor = () => {
    let randomIndex = [Math.floor(Math.random() * colorsArray.length)]
    const color = colorsArray[randomIndex]
    colorOptions.push(color)
    console.log(color)
}


const handleColorChoice = (event) => {
    const currentColor = event.target.id
    console.log(`'playerChoice' ${playerChoices}`)

    if (currentColor === colorOptions[currentIndex]) {
        console.log(`'color match' ${currentColor}`)
        currentIndex += 1;

        console.log(currentIndex)
        if (currentIndex === colorOptions.length) {
            randomColor()
            currentIndex = 0
        }
    } else {
        console.log('color not a match')
        loser = true
        return console.log("You lose! :-(")
        //Give player the option to restart the Game! 
    }
}
const tryAgain = () => {
    
}

const startGame = () => {
    currentIndex = 0 
    currentColor = 0
    colorOptions = []
    randomColor()
}

start.addEventListener('click', startGame)
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', handleColorChoice)
}

tryAgain()
restart.addEventListener('click' , startGame)