
 game = {
	"loaders" : {
	
		"babyroomQueue" : new createjs.LoadQueue(),
		"babyroomComplete" : function(){
			var queue = game.loaders.babyRoomQueue,
			    image = queue.getResult("bg"),
			    babyroom = new creatine.Scene();
			bitmap = new createjs.Bitmap(image);
			babyroom.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 0;
			game.director.replace(babyroom);

		
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

		this.loaders.babyRoomQueue.on("complete", game.loaders.babyroomComplete, this);
		this.loaders.babyRoomQueue.loadManifest([
			{id: "bg", src:"./images/babyroom.png"},
			{id: "door1", src:"./images/babyroom_door1.png"},
			{id: "door2", src:"./images/babyroom_door2.png"},
			{id: "painting", src:"./images/babyroom_painting.png"},
	]);
	},

	
};	
	//whole game scope object

function onTick() {
    game.stage.update();
}

document.addEventListener("DOMContentLoaded", function(event){
	game.init();
});


