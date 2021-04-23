export const SNAKE_SPEED = 2 //how many times per second the page refreshes
const snakeBody = [{ x: 11, y:11}]

export function update(){
    console.log("update")

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