/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/

const green = document.querySelector('#green')
const red= document.querySelector('#red')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

const start = document.querySelector('#start')
const restart = document.querySelector('#restart')

let winner = false 
let loser = false 

let sequence = []
let level = 0;

let colorsArray = ['green' , 'red' , 'blue' , 'yellow']
let currentIndex = colorsArray[0]
let colorOptions = []


/*------------------------ Cached Element References ------------------------*/
const play = document.querySelectorAll('#button')
const sequences = document.querySelector('sequence')




/*----------------------------- Event Listeners -----------------------------*/
green.addEventListener('click' , () => { 
    });
red.addEventListener('click' , () => {
    });
blue.addEventListener('click' , () => {
    });
yellow.addEventListener('click' , () => {
    });
    
restart.addEventListener('click' , () => {
    })





/*-------------------------------- Functions --------------------------------*/

const startGame = () => { 
        let randomIndex = [Math.floor(Math.random() * colorsArray.length)]
        const color = colorsArray[randomIndex]
      console.log(color)
        colorOptions.push(color)
}

start.addEventListener('click' , startGame)






























/* --------------------------DEAD CODE---------------------------------------*/
/*function nextRound() {
    level += 1; 
}
}


sequence.forEach(function (button) {
    button.addEventListener('click' , start)
})
*/


// for (let i = 0; i < colorsArray.length; i++) {