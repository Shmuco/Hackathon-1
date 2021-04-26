import { onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'
let food = getRandomFoodPosition()

const EXPANSION_RATE = 1

export function update(){
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
    
}

export function draw(gameBoard){
    let chicken = "<i class='fas fa-drumstick-bite' style='font-size:36px'></i>"
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        foodElement.innerHTML= chicken
        gameBoard.appendChild(foodElement)
        
    
}

function getRandomFoodPosition(){
let newFoodPosition
while (newFoodPosition==null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition()
}
return newFoodPosition
 
}