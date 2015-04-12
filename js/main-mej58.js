
var game = {
	"loaders" : {
		"bedRoomQueue" : new createjs.LoadQueue(),
		"bedroomComplete" : function(){
			var queue = game.loaders.bedRoomQueue,
			    image = queue.getResult("bg"),
			    image_drawer1 = queue.getResult("drawer1"),
			    image_drawer2 = queue.getResult("drawer2"),
			    image_painting = queue.getResult("painting"),
			    bedroom = new creatine.Scene();

			bitmap = new createjs.Bitmap(image);
			bedroom.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 0;

			bitmap_drawer1 = new createjs.Bitmap(image_drawer1);
			bedroom.addChild(bitmap_drawer1);
			bitmap_drawer1.x = 678;
			bitmap_drawer1.y = 309;
			bitmap_drawer1.cursor = "pointer";

			bitmap_drawer2 = new createjs.Bitmap(image_drawer2);
			bedroom.addChild(bitmap_drawer2);
			bitmap_drawer2.x = 678;
			bitmap_drawer2.y = 339;
			bitmap_drawer2.cursor = "pointer";

			bitmap_painting = new createjs.Bitmap(image_painting);
			bedroom.addChild(bitmap_painting);
			bitmap_painting.x = 200;
			bitmap_painting.y = 51;
			bitmap_painting.cursor = "pointer";

			bg = new createjs.Shape();
			bg.graphics.beginFill(createjs.Graphics.getRGB(200,200,200,.5)).drawRoundRect(0, 450, 800, 100, 10);
			bedroom.addChild(bg);

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
