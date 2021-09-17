let buttons = document.getElementsByClassName("grid-buttons")

let i = 1
    while (i <= buttons.length)  {
        console.log(`button-${i}`)
        
        let button = document.getElementById(`button-${i}`)
        button.addEventListener('mouseenter', e => {
            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 150), rgb(0, 255, 155))';
            console.log("over")
            
        });
        
        button.addEventListener('mouseleave', e => {
            button.style.animationDuration = "3s";

            button.style.backgroundImage = 'linear-gradient(to right, rgb(0, 140, 255), rgb(0, 255, 255))';

        });
        i++;

    }


function Gameboard() {
    this.gridArray =    [null,null,null,
                        null,null,null,
                        null,null,null];
    
}


function Player(name, symbol) {
    this.name = name;
    this.wins
    this.symbol = symbol

}

function Game() {
    


}
    /*  


        player object
            wins

    */






























