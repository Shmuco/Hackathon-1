const GRID_SIZE=21
export function randomGridPosition() {
    return{
        x: Math.floor(Math.random()*GRID_SIZE )+1,
        y: Math.floor(Math.random()*GRID_SIZE )+1
    }
}
export function outsideGrid(position){
    if (position.x< 1){
        window.open("./Resume/resume.html")
    }else if (position.x > GRID_SIZE){
        window.open("https://github.com/barbie")
    }else if (position.y > GRID_SIZE){
        window.open("https://www.linkedin.com/showcase/barbie%C2%AE")
    }
    return(
        position.x < 1 || position.x > GRID_SIZE ||
        position.y <1  || position.y > GRID_SIZE
    )
}