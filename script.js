function Player(name, symbol, wins) {
    this.playerName = name;
    this.wins = wins
    this.symbol = symbol

   
}


function checkGameStatus() {


    arr = []

    i = 0
    while (i <9){
        arr[i] = document.getElementById(`button-${i+1}`).innerHTML
        i++
    }


    const isEmpty = (element) => element == '';
    const allEqual = arr => arr.every( element => element === arr[0] )
        if ((arr.some(isEmpty)) == false) {
        console.log("game over")
    }
        else if (allEqual([arr[0],arr[1],arr[2]])) {
            console.log("win")

        }
}

let player1 = new Player((prompt("What's your name, player 1?")), 'X', 0)
let player2 = new Player((prompt("And your name, player 2?")), 'O', 0)


let turnCounter = 0
let currentPlayer = player1
console.log(`first plays ${player1.playerName}, who is the ${player1.symbol}`)

function newRound(turn) {
    console.log(0)
 

    if (turn%2 == 0) {
        console.log(1)

        currentPlayer = player1
        console.log(`currentPlayer is ${currentPlayer.playerName}, should be ${player1.playerName}`)
    }
    else {
        currentPlayer = player2
        console.log(2)
        console.log(`currentPlayer is ${currentPlayer.playerName}, should be ${player2.playerName}`)

    }

    turnCounter++
    console.log(turnCounter)

}

newRound(turnCounter)
let buttons = document.getElementsByClassName("grid-buttons")



function clickButton(player, button) {
    
    console.log(`${button.id} clicked by ${player.playerName}`)
    
    button.innerHTML = player.symbol;
    newRound(turnCounter)

}



let i = 1
    while (i <= buttons.length)  {
        //console.log(`button-${i}`)
        
        let button = document.getElementById(`button-${i}`)
        button.addEventListener('mouseenter', e => {
            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 150), rgb(0, 255, 155))';
           // console.log("over")
            
        });
        
        button.addEventListener('mouseleave', e => {
            button.style.animationDuration = "3s";

            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 255), rgb(0, 255, 255))';

        });

        button.addEventListener('click', e => {
            clickButton(currentPlayer,button)
        }
        );
        i++;

    }

let currentPlayerDiv = document.getElementById('player-announcer')



    /*  


        player object
            wins

    */






























