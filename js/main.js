var game = {};		//whole game scope object

game.queue.bedRoomQueue = new createjs.LoadQueue();

 bedRoomQueue.on("complete", bedroomComplete, this);

 bedRoomQueue.loadManifest([
     {id: "bg", src:"./images/bedroom.png"},
     {id: "drawer1", src:"./images/bedroom_drawer1.png"},
     {id: "drawer2", src:"./images/bedroom_drawer2.png"},
     {id: "painting", src:"./images/bedroom_painting.png"},
 ]);

function bedroomComplete() {
	var image = bedRoomQueue.getResult("bg");
	
	var container = new createjs.Container();
	game.stage.addChild(container);
	bitmap = new createjs.Bitmap(image);
	container.addChild(bitmap);
	bitmap.x = 0;
	bitmap.y = 0;
	game.stage.update();
	bitmap.on("click", function (evt){alert('s')});
}

function init() {
	game.canvas = document.getElementById('stage');
	game.stage = new createjs.Stage(game.canvas);
	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(game.stage);
	// enabled mouse over / out events
	game.stage.enableMouseOver(10);
	game.stage.mouseMoveOutside = true;
}
