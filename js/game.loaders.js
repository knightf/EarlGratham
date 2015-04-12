game.loaders = {
	//init
	"init" : function(){
		//components
		game.loaders.componentsQueue.on("complete", game.loaders.componentsComplete, this);
		game.loaders.componentsQueue.loadManifest([
			{id: "textboard", src: "./images/textboard.png"},
			{id: "funcboard", src: "./images/funcboard.png"},
		]);
		//scenes
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
	//components
	"componentsQueue" : new createjs.LoadQueue(),
	"componentsComplete" : function(){
		var queue = game.loaders.componentsQueue,
		    textboard, funcboard;

		textboard = queue.getResult("textboard");
		game.components.textBoard(new createjs.Bitmap(textboard));

		funcboard = queue.getResult("funcboard");
		game.components.funcBoard(new createjs.Bitmap(funcboard));
	},
	//scenes
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
		paintingImg.x = 208;
		paintingImg.y = 51;

		drawer1 = queue.getResult("drawer1");
		drawer1Img = new createjs.Bitmap(drawer1);
		bedroom.addChild(drawer1Img);
		drawer1Img.x = 678;
		drawer1Img.y = 309;
		game.util.bind.click(drawer1Img,[
			function(){game.util.text.show(game.data.script.bedroom.drawer1);},
		]);

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

		var painting = queue.getResult("painting");
		paintingImg = new createjs.Bitmap(painting);
		babyroom.addChild(paintingImg);

		//store the scene
		game.sceneList['babyroom'] = babyroom;
	},
};
