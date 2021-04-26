import { update as updateSnake ,draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'

import { update as updateFood, draw as drawFood} from './food.js'

import {outsideGrid} from './grid.js'

// funtion to refersh the page in order to "repaint"
let lastRenderTime = 0
let gameOver= false
const gameBoard = document.getElementById("game-board")

function main(currentTime){
    if (gameOver){
        if(confirm('Press ok if you want to play again 😀')){
       window.location= '/'
    }
    return
}
    window.requestAnimationFrame(main)
    const secondeSinceLastRenderTime =(currentTime - lastRenderTime)/1000 // gives us a variable in secods of how long between each refresh
    if (secondeSinceLastRenderTime<1/SNAKE_SPEED) return // This says if its hasnt been longer than 0.5 a second restart the function
    
    lastRenderTime = currentTime


    update()
    draw()
}

window.requestAnimationFrame(main)






function update(){ // Used to update position and food etc
    updateSnake()
    updateFood()
    checkDeath()
}


function draw(){ // Used to draw the updated frame
    gameBoard.innerHTML=""
    drawSnake(gameBoard)
    drawFood(gameBoard)

    
}

function checkDeath(){
    gameOver= outsideGrid(getSnakeHead()) || snakeIntersection()
}