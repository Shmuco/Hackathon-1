

// funtion to refersh the page in order to "repaint"
let lastRenderTime = 0
const SNAKE_SPEED = 2 //how many times per second the page refreshes
function main(currentTime){
    window.requestAnimationFrame(main)
    const secondeSinceLastRenderTime =(currentTime - lastRenderTime)/1000 // gives us a variable in secods of how long between each refresh
    if (secondeSinceLastRenderTime<1/SNAKE_SPEED) return // This says if its hasnt been longer than 0.5 a second restart the function
    
    lastRenderTime = currentTime
    console.log("Render")
}

window.requestAnimationFrame(main)

