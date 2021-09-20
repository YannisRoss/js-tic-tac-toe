function newPlayer(name, symbol, wins) {
    var player = Object.create(newPlayer.proto);
    player.name = name;
    player.symbol = symbol;
    player.wins = wins;
    return player;
  }
   
    newPlayer.proto = {
    getName: function() {
      return this.name;
    },
    getSymbol: function() {
        return this.symbol;
    },
    getWins: function() {
        return this.wins
    },
    addWin: function() {
        this.wins++
    },
    changeSymbol: function() {
        if (this.symbol == 'X') {
            this.symbol = 'O'
        }
        else {this.symbol = 'X'}
    }
    
  }
  let player1
  let player2
function createPlayers(){
    player1 = newPlayer((prompt("What's your name, player 1?")), 'X', 0)
    player2 = newPlayer((prompt("And your name, player 2?")), 'O', 0)

  return {player1,player2}
}

createPlayers()
/*
function Player(name, symbol, wins) {
    this.playerName = name;
    this.wins = wins
    this.symbol = symbol
  
}
*/

let gameOver = false
let stalemate = false
function updateWins(){
    winTrackerDiv.innerHTML = `${player1.getName()}: ${player1.getWins()}` + '\n' + `${player2.getName()}: ${player2.getWins()}` 

}
function checkGameStatus() {

    arr = []

    i = 0
    while (i <9){
        arr[i] = document.getElementById(`button-${i+1}`).innerHTML
        i++
    }

    const isEmpty = (element) => element == '';
    const allEqual = arr => arr.every( element => element === arr[0] && element !== '')
    winAnnouncerDiv = document.getElementById("winner-announcer")

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
            currentPlayer.wins++
            i = 0
            while (i < buttons.length){

                let disabledButton = buttons[i].cloneNode(true);
                buttons[i].replaceWith(disabledButton)
                i++
            } 
            console.log('win logged')
            winAnnouncerDiv = document.getElementById("winner-announcer")
                winAnnouncerDiv.innerHTML = `${currentPlayer.getName()} won!`
                currentPlayerDiv.innerHTML = ''
               // winTrackerDiv.innerHTML = `${player1.getName()}: ${player1.getWins()}` + '\n' + `${player2.getName()}: ${player2.getWins()}` 
                updateWins()
        }
        else if (stalemate && gameOver) {
            currentPlayerDiv.innerHTML = ''

            winAnnouncerDiv.innerHTML = `It's a tie!`


        }
}




let turnCounter = 0
let currentPlayer = player1
console.log(`first plays ${player1.getName()}, who is the ${player1.getSymbol()}`)
let currentPlayerDiv = document.getElementById('player-announcer')
let winTrackerDiv = document.getElementById('win-tracker')
   // winTrackerDiv.innerHTML = `${player1.getName()}: ${player1.getWins()}` + '\n' + `${player2.getName()}: ${player2.getWins()}` 
    updateWins()
let buttons = document.getElementsByClassName("grid-buttons")


function newRound(turn) {
 

    if (turn%2 == 0) {

        currentPlayer = player1
        console.log(`currentPlayer is ${currentPlayer.getName()}, should be ${player1.getName()}`)
    }
    else {
        currentPlayer = player2
        console.log(`currentPlayer is ${currentPlayer.getName()}, should be ${player2.getName()}`)

    }

    turnCounter++
    console.log(turnCounter)
    if (gameOver == false){currentPlayerDiv.innerHTML = `${currentPlayer.getName()}'s turn!`}

}

newRound(turnCounter)



function clickButton(player, button) {
    
    console.log(`${button.id} clicked by ${player.getName()}`)
    
    button.innerHTML = player.getSymbol();
    checkGameStatus()

    newRound(turnCounter)
       //button.removeEventListener('click', function(){clickButton(currentPlayer,button)})
    let disabledButton = button.cloneNode(true);
    button.replaceWith(disabledButton)
}


function buildGrid(){
let i = 1
    while (i <= buttons.length)  {
        
        let button = document.getElementById(`button-${i}`)
        button.innerHTML = ''
        button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 255), rgb(0, 255, 255))';

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
}

buildGrid()

function newGame(){
    let clearPlayersCheckbox = document.getElementById("clear-players-checkbox")
    if (clearPlayersCheckbox.checked){
        createPlayers()
        updateWins()
    }
    turnCounter++
    player1.changeSymbol()
    player2.changeSymbol()
    gameOver = false
    stalemate = false
    winAnnouncerDiv.innerHTML = ''
    buildGrid()
    clearPlayersCheckbox.checked = false
    newRound(turnCounter)
}


let newGameButton = document.getElementById("new-game-button")
    newGameButton.addEventListener('click', function(){newGame()})





























