/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
const colorButtons = document.querySelectorAll('.colors')

const start = document.querySelector('#start')
const restart = document.querySelector('#restart')

let winner = false 
let loser = false 

let sequence = []
let level = 0;

let colorsArray = ['green' , 'red' , 'blue' , 'yellow']
let currentIndex = 0
let colorOptions = []
let playerChoices = colorOptions


/*------------------------ Cached Element References ------------------------*/
//const play = document.querySelectorAll('#button')
//const sequences = document.querySelector('sequence')




/*----------------------------- Event Listeners -----------------------------*/

colorButtons.forEach(addEventListener('click' , (e) => {
    console.log(e.target)
}));



/*-------------------------------- Functions --------------------------------*/

const randomColor = () => {
    let randomIndex = [Math.floor(Math.random() * colorsArray.length)]
    const color = colorsArray[randomIndex]
    console.log(color)
    colorOptions.push(color)
}

const startGame = () => { 
      randomColor()
}
start.addEventListener('click' , startGame)


const handleColorChoice = (event) => {
    const currentColor = event.target.id

    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener('click', handleColorChoice)

    if (currentColor === colorOptions[currentIndex]) {
        currentIndex += 1; 
    
    if (currentIndex < colorOptions.length )
        if(currentIndex === colorOptions.length)
    randomColor()
        }
    }
}







//playerChoice.addEventListener('click' , )
