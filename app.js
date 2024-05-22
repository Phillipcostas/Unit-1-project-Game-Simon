/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
const colorButtons = document.querySelectorAll('.color')
const colorDisplay = document.querySelector('.colordisplay')

const start = document.querySelector('#start')
const restart = document.querySelector('#restart')
const levels = document.querySelector('#level')

let highScore = false
let loser = false

let level = document.getElementById('level')



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
    setTimeout(colorTimer, 1000)
    
}


const handleColorChoice = (event) => {
    const currentColor = event.target.id
    console.log(`'playerChoice' ${playerChoices}`)
    //event.target.style.background = "red"
    //div.style.background = colorOptions 


    if (currentColor === colorOptions[currentIndex]) {
        console.log(`'color match' ${currentColor}`)
        currentIndex += 1;
        level.innerText = `level: ${currentIndex +1}`
        //console.log(level)

        console.log(currentIndex)
        if (currentIndex === colorOptions.length) {
            randomColor()
            currentIndex = 0
        }
    } else {
        console.log('color not a match')
        loser = true
        return console.log("You lose! :-(")
        
    }
    
}
const tryAgain = () => {

}

const startGame = () => {
    currentIndex = 0 
    currentColor = 0
    colorOptions = []
    level.innerText = `Level: 1`
    randomColor()
}

start.addEventListener('click', startGame)
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', handleColorChoice)
}

tryAgain()
restart.addEventListener('click' , startGame);


const colorTimer = () => {
    colorDisplay.style.background = colorOptions ; 
    setTimeout(colorDisplay.textContent, 1000)
    clearTimeout(colorDisplay)
    
}

