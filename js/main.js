
var game = {
	"loaders" : {
		"bedRoomQueue" : new createjs.LoadQueue(),
		"bedroomComplete" : function(){
			var queue = game.loaders.bedRoomQueue,
			    image = queue.getResult("bg"),
			    bedroom = new creatine.Scene();
			bitmap = new createjs.Bitmap(image);
			bedroom.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 0;
			game.director.replace(bedroom);
		},
	},

	"init" : function(){
		this.canvas = document.getElementById('stage');
		this.stage = new createjs.Stage(this.canvas);
		this.director = new creatine.Director(this.stage);
		// enable touch interactions if supported on the current device:
		createjs.Touch.enable(game.stage);
		// enabled mouse over / out events
		game.stage.enableMouseOver(10);
		game.stage.mouseMoveOutside = true;

		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener('tick', onTick);

		this.loaders.bedRoomQueue.on("complete", game.loaders.bedroomComplete, this);
		this.loaders.bedRoomQueue.loadManifest([
			{id: "bg", src:"./images/bedroom.png"},
			{id: "drawer1", src:"./images/bedroom_drawer1.png"},
			{id: "drawer2", src:"./images/bedroom_drawer2.png"},
			{id: "painting", src:"./images/bedroom_painting.png"},
		]);
	},
};		//whole game scope object

function onTick() {
    game.stage.update();
}

document.addEventListener("DOMContentLoaded", function(event){
	game.init();
});
