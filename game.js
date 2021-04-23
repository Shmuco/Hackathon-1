import { update as updateSnake ,draw as drawSnake, SNAKE_SPEED } from './snake.js'

// funtion to refersh the page in order to "repaint"
let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")

function main(currentTime){
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
}


function draw(){ // Used to draw the updated frame
    drawSnake(gameBoard)
}