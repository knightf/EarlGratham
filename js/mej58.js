	var canvas;
	var stage;
	var container;
	var count = 0;
	var txt, txtExist, bg;

	function init() {
		canvas = document.getElementById('stage');
		width = canvas.width;
		height = canvas.height;
		stage = new createjs.Stage(canvas);
		container = new createjs.Container();

		// enable touch interactions if supported on the current device:
		createjs.Touch.enable(stage);
		// enabled mouse over / out events
		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
		

		// load the source image:
		var img = new Image();
		img.src = "./images/bedroom.png";
		img.onload = function(){
			var bitmap;
			stage.addChild(container);
			bitmap = new createjs.Bitmap(img);
			container.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 0;
			stage.update();
		}
		
		var image = new Image();
		image.src = "./images/bedroom_drawer1.png";
		image.onload = handleImageLoad;

	}

	function handleImageLoad(event) {
	var image = event.target;
	var bitmap;

	// create and populate the screen with random daisies:
	
		bitmap = new createjs.Bitmap(image);
		container.addChild(bitmap);
		bitmap.x = 678;
		bitmap.y = 309;
		bitmap.cursor = "pointer";

		bg = new createjs.Shape();
		bg.graphics.beginFill(createjs.Graphics.getRGB(255,255,255,.5)).drawRoundRect(0, 450, 800, 100,10);
		container.addChildAt(bg, 0);

		stage.update();

		//load text
		txt = new createjs.Text("", "18px Arial", "#111");
		txt.text = "This wrapped multi-line text is rendered using the Text Object.\n\n";
		txt.text += "Text is fairly limited in canvas and EaselJS. It's fine for simple labels, titles, and HUD elements. \n\n";

		txtExist = new createjs.Text("", "18px Arial", "#111");
		txtExist.lineWidth = 800;
		txtExist.lineHeight = 22;
		txtExist.textBaseline = "top";
		txtExist.textAlign = "left";
		txtExist.y = 460;
		txtExist.x = 10;
		container.addChild(txtExist);

		bitmap.on("click", function (evt) {
			//container.removeChild(txtExist);
			count = 0;
		    txtExist.text = "";		
			createjs.Ticker.setFPS(60);
		    createjs.Ticker.addEventListener("tick", tick_text);
				
		//var g = new createjs.Graphics();
		//g.beginFill(createjs.Graphics.getRGB(200,200,200,.5));
		//g.drawRoundRect(0, 450, 800, 100,10);
		//bg.graphics.beginFill("#ABC").drawRoundRect(0, 450, 800, 100,10);	
		//stage.update();
		});
	}

	function tick_text(event) {
		count++;

		if(txtExist.text.length < txt.text.length - 1){
		// update the text:
		txtExist.text += txt.text[count];

		// draw a vector box of the appropriate width behind the text:
		//bg.graphics.clear().beginFill(createjs.Graphics.getRGB(255,255,255,.5)).drawRoundRect(0, 450, 800, 100,10);

		// update the stage:
		stage.update(event);
		}
	}
