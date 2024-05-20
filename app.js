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

start.addEventListener('click' , () => { 
   
})

restart.addEventListener('click' , () => {
    
})





/*-------------------------------- Functions --------------------------------*/

startGame = (startBtn) => { startBtn.addEventListener('click' , startGame)
console.log('hi')
}

//function start () {
    
    
//}

sequence.forEach(function (button) {
    button.addEventListener('click' , start)
})

function nextRound() {
    level += 1; 
}