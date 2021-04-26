# Hackathon-1
Gaming our way to portfolio.	Shmuel Cohen, Lilà Rougier

We understood the importance of collecting projects during our carrier in order to expose them as a window to our skills.
A good portfolio would give value to the works we have done already and expand the chances to get hired.

Our question was : how to make a good portfolio ? A portfolio that will attract the eye, create curiosity and stand out.

Inspired by the great parisian developer, Bruno Simon1 we decided to follow his concept and create a game that will lead us to discover our creative world.

We settled on a snake game, in memory of our childwood and as a symbole of our generation.
	
	The snake portfolio is an interface that allows to access our Github, Resume and LinkedIn profile.


I- Canvas and event Listeners
	One of the most commun ways we found to create a snake game with JavaScript was to use a canvas. 
	<canvas></canvas> 
It is a container element inserted in our HTML that allows us to draw graphics through JavaScript.
	In order to complete our project until the end, we want to open certain internet windows when our snake is hitting a certain place.
For that matter we wanted to use event listeners (calling functions for every window to be open) and we quickly realized that they are not compatible with the canvas element. 
After a couple of researches on stack overflow in how to by pass that with different functions, we decided to use a grid for the board and start coding without a canvas method.
	We devided our time in searching for explainations in how to structure our code and create a clear plan regrouping all the functions we would use.

II- Targetting our snake head
	We initialized a square that would be the base of our snake and thanks to that we could calculate where was the head of the snake. Every time the snake head would run into the « food » (an element positionned on the grid which the position is randomly generated), the array of the snake would go -2 (the base is sent at the end) and the base index[0] is deleted. The new element is adding at the end of the body of the snake. Our function getSnakeHead() is calling the index[0] of the snake.


	Export function getSnakeHead(){
		return snakeBody[0]
	}


III- Implementing our snake for our advertisment use

	Given the grid being set to a certain size and our snake evolving inside it we would create a function determinating if the position of the head (snakeBody[0]) is outside of the gid or inside.
Thanks to the position of the x.axis and the y.axis, we could determine if our head position was on the top, on the bottom, on the left side or on the right side.
	According to that position our function would open a window with our linkedin, our github or our resume.
	Export function outsideGrid(position){
if (position.x < 1){
	window.open(« https://www.linkedin.com/showcase/barbie%C2%AE »)
	}else if (position.x > GRID_SIZE){
	window.open(« https://github.com/barbie »)
	}else if (position.y > GRID_SIZE{
	window.open(« ./Resume/resume.html »)
}
}
	

	That project was a great way to review all the basics of Javascript we had learned, explore more Grid and the responsiveness of our page. 
	We also used DOM, which helped us understand better the interest of coding with it.
	It was a great challenge in how to create a specific style, elaborate a plan as a team, and sit hours on youtube to watch videos explaining the logic behind our snake game.
	Compromizing, leading, listening, and giving in brought us to complete our project in the best conditions a team should work, and we are very proud to present it to you.
	It is a creative project that brings together useful things and fun at the same time !

