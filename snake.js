export const SNAKE_SPEED = 2 //how many times per second the page refreshes
const snakeBody = [{ x: 10, y:11},{ x: 11, y:11},{ x: 12, y:11}]

export function update(){
    console.log("update")
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    // snakeBody[0].x=snakeBody[0].x+1
    // snakeBody[0].x=snakeBody[0]
    snakeBody[0].x +=1
    snakeBody[0].x +=0
}

export function draw(gameBoard){
    snakeBody.forEach(segmet => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segmet.x
        snakeElement.style.gridColumnStart = segmet.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        
    })
}