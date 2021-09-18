function Player(name, symbol, wins) {
    this.playerName = name;
    this.wins = wins
    this.symbol = symbol
  
}

function checkGameStatus() {
    let gameOver = false
    let stalemate = false
    arr = []

    i = 0
    while (i <9){
        arr[i] = document.getElementById(`button-${i+1}`).innerHTML
        i++
    }

    const isEmpty = (element) => element == '';
    const allEqual = arr => arr.every( element => element === arr[0] && element !== '')
     if (allEqual([arr[0],arr[1],arr[2]])) {
            console.log("wintop")
            gameOver = true
        }
        else if(allEqual([arr[3],arr[4],arr[5]])){
            console.log('winmid')
            gameOver = true

        }
        else if(allEqual([arr[6],arr[7],arr[8]])){
            console.log('winbot')
            gameOver = true

        }
        else if(allEqual([arr[0],arr[3],arr[6]])) {
            console.log('winL')            
            gameOver = true

        }
        
        else if(allEqual([arr[1],arr[4],arr[7]])) {
            console.log('winmidVert')
            gameOver = true

        }
        else if(allEqual([arr[2],arr[5],arr[8]])) {
            console.log('winR')
            gameOver = true

        }
        else if(allEqual([arr[0],arr[4],arr[8]])) {
            console.log('winFirstDiag')
            gameOver = true

        }
        else if(allEqual([arr[2],arr[4],arr[6]])) {
            console.log('win2ndDiag')
            gameOver = true

        }
        else if ((arr.some(isEmpty)) == false) {
            console.log("game over")
            gameOver = true
            stalemate = true
        }
          
        if (gameOver && stalemate == false){

        }
        
}

let player1 = new Player((prompt("What's your name, player 1?")), 'X', 0)
let player2 = new Player((prompt("And your name, player 2?")), 'O', 0)


let turnCounter = 0
let currentPlayer = player1
console.log(`first plays ${player1.playerName}, who is the ${player1.symbol}`)
let currentPlayerDiv = document.getElementById('player-announcer')
let winTrackerDiv = document.getElementById('win-tracker')
    winTrackerDiv.innerHTML = `${player1.playerName}: ${player1.wins}` + '\n' + `${player2.playerName}: ${player2.wins}` 


function newRound(turn) {
 

    if (turn%2 == 0) {

        currentPlayer = player1
        console.log(`currentPlayer is ${currentPlayer.playerName}, should be ${player1.playerName}`)
    }
    else {
        currentPlayer = player2
        console.log(`currentPlayer is ${currentPlayer.playerName}, should be ${player2.playerName}`)

    }

    turnCounter++
    console.log(turnCounter)
    currentPlayerDiv.innerHTML = `${currentPlayer.playerName}'s turn!`

}

newRound(turnCounter)
let buttons = document.getElementsByClassName("grid-buttons")



function clickButton(player, button) {
    
    console.log(`${button.id} clicked by ${player.playerName}`)
    
    button.innerHTML = player.symbol;
    newRound(turnCounter)
       //button.removeEventListener('click', function(){clickButton(currentPlayer,button)})
    let disabledButton = button.cloneNode(true);
    button.replaceWith(disabledButton)
    checkGameStatus()
}



let i = 1
    while (i <= buttons.length)  {
        
        let button = document.getElementById(`button-${i}`)
        button.addEventListener('mouseenter', e => {
            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 150), rgb(0, 255, 155))';
            
        });
        
        button.addEventListener('mouseleave', e => {
            button.style.animationDuration = "3s";

            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 255), rgb(0, 255, 255))';

        });

        button.addEventListener('click', function(){clickButton(currentPlayer,button)}

        );
        i++;

    }
































