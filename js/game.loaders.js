game.loaders = {
	//init
	"init" : function(){
		//bedroom scene
		game.loaders.bedRoomQueue.on("complete", game.loaders.bedroomComplete, this);
		game.loaders.bedRoomQueue.loadManifest([
			{id: "bg", src:"./images/bedroom.png"},
			{id: "drawer1", src:"./images/bedroom_drawer1.png"},
			{id: "drawer2", src:"./images/bedroom_drawer2.png"},
			{id: "painting", src:"./images/bedroom_painting.png"},
		]);
		//babyroom scene
		game.loaders.babyRoomQueue.on("complete", game.loaders.babyroomComplete, this);
		game.loaders.babyRoomQueue.loadManifest([
			{id: "bg", src:"./images/babyroom.png"},
			{id: "door1", src:"./images/babyroom_door1.png"},
			{id: "door2", src:"./images/babyroom_door2.png"},
			{id: "painting", src:"./images/babyroom_painting.png"},
		]);
	},
	//bedroom scene
	"bedRoomQueue" : new createjs.LoadQueue(),
	"bedroomComplete" : function(){
		var queue = game.loaders.bedRoomQueue,
		    bedroom = new creatine.Scene(),
		    bg, painting, drawer1, drawer2;
		
		bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		bedroom.addChild(bgImg);
		bgImg.x = 0;
		bgImg.y = 0;

		painting = queue.getResult("painting");
		paintingImg = new createjs.Bitmap(painting);
		bedroom.addChild(paintingImg);
		paintingImg.x = 202;
		paintingImg.y = 51;

		drawer1 = queue.getResult("drawer1");
		drawer1Img = new createjs.Bitmap(drawer1);
		bedroom.addChild(drawer1Img);
		drawer1Img.x = 678;
		drawer1Img.y = 309;

		drawer2 = queue.getResult("drawer2");
		drawer2Img = new createjs.Bitmap(drawer2);
		bedroom.addChild(drawer2Img);
		drawer2Img.x = 678;
		drawer2Img.y = 339;
		
		//store the scene
		game.sceneList['bedroom'] = bedroom;
	},
	//babyroom scene
	"babyRoomQueue" : new createjs.LoadQueue(),
	"babyroomComplete" : function(){
		var queue = game.loaders.babyRoomQueue,
		    babyroom = new creatine.Scene(),
		    bg, painting, door1, door2;
		
		var bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		babyroom.addChild(bgImg);
		bgImg.x = 0;
		bgImg.y = 0;

		painting = queue.getResult("painting");
		paintingImg = new createjs.Bitmap(painting);
		babyroom.addChild(paintingImg);
		paintingImg.x = 700;
		paintingImg.y = 0;

		door1 = queue.getResult("door1");
		door1Img = new createjs.Bitmap(door1);
		babyroom.addChild(door1Img);
		door1Img.x = 60;
		door1Img.y = 150;

		door2 = queue.getResult("door2");
		door2Img = new createjs.Bitmap(door2);
		babyroom.addChild(door2Img);
		door2Img.x = 140;
		door2Img.y = 132;

		//store the scene
		game.sceneList['babyroom'] = babyroom;
	},
};
