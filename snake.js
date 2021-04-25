import { getInputDirection } from "./input.js"


export const SNAKE_SPEED = 10 //how many times per second the page refreshes
const snakeBody = [{ x: 11, y:11}]
let newSegments=0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    console.log("update")
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x =  snakeBody[0].x +inputDirection.x
    snakeBody[0].y=snakeBody[0].y+ inputDirection.y 
}

export function draw(gameBoard){
    snakeBody.forEach(segmet => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segmet.y
        snakeElement.style.gridColumnStart = segmet.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        
    })
}

export function expandSnake(amount) {
    // newSegments= newSegments+amount
    newSegments+= amount
}

export function onSnake(position){
    return snakeBody.some(segment=>{
        return equalPostitons (segment,position)
    }

    )
}
function equalPostitons (pos1,pos2){
   return  pos1.x===pos2.x && pos1.y ===pos2.y
}

function addSegments (){
  for (let i = 0; i< newSegments;i++){
  snakeBody.push({ ...snakeBody [snakeBody.lengh -1]})//takes last elemant of snake, duplicates it and pushes it onto the end
  
}
newSegments=0
}