console.log("working Salley")

let reset = document.querySelector("button")
let tiles = document.querySelectorAll(".tile")
let currentTurn = 'red'
let winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


for(let i =0; i < tiles.length; i++){
    tiles[i].addEventListener("click",setTile)
}

reset.addEventListener("click",resetGame)

function setTile(e){
    let classes = e.target.classList
    let tilesAlreadySelected = classes.contains('red') || classes.contains('blue')
    if(tilesAlreadySelected){
        alert("pick another tile")
    } else {
        classes.add(currentTurn)
        changeTurn()
        checkForWinner()
    }
    
}

function changeTurn(){
    if(currentTurn=='red'){
        currentTurn='blue'
    }else{
        currentTurn = 'red'
    }
}

function resetGame(){
    for(let i =0; i < tiles.length; i++){
        tiles[i].classList.remove("red")
        tiles[i].classList.remove("blue")
    }
}

function checkForWinner(){
    for(let i =0; i < winningCombo.length; i++){
        let combo = winningCombo[i]
        foundWinner = true

        for (let j = 0; j< combo.length; j++){
            let tileIndex = combo[j]
            let hasTile = tiles[tileIndex].classList.contains(currentTurn)
            if(hasTile!==true){
                foundWinner = false
            }
        }
        if(foundWinner==true){
            alert(`Player ${currentTurn} Wins`)
            resetGame()
        }
    }
}