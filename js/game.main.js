var game = this.game || {};

game.init = function(){
	this.canvas = document.getElementById('stage');
	this.stage = new createjs.Stage(this.canvas);
	this.director = new creatine.Director(this.stage);
	//enable touch interactions if supported on the current device:
	createjs.Touch.enable(game.stage);
	//enabled mouse over / out events
	game.stage.enableMouseOver(10);
	game.stage.mouseMoveOutside = true;
	//force to refresh the canvas
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener('tick', onTick);
	//load manifest
	game.loaders.init();
	//load component
	game.components.textBoard();	//text bg
};

//an empty object to store the scenes for latter access
game.sceneList = {};

function onTick() {
    game.stage.update();
}

document.addEventListener("DOMContentLoaded", function(event){
	game.init();
});
