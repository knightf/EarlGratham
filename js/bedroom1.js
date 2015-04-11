	var canvas = document.getElementById('stage'),
		stage = new createjs.Stage(canvas),
		width = canvas.width,
		height = canvas.height,
		container;
	var images = {};

	function init() {
		



		// enable touch interactions if supported on the current device:
		createjs.Touch.enable(stage);
		// enabled mouse over / out events
		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

		

		// create and populate the screen with random daisies:
	
		
		images.bedroombg = new Image();
		images.bedroombg.src = "./images/bedroom.png";
		images.bedroombg.onload = function(event){
			// load the source image:
			var bitmap;
			container = new createjs.Container();
			stage.addChild(container);
			bitmap = new createjs.Bitmap(event.target);
			container.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 0;
			stage.update();
		}

		images.bedroomdrawer = new Image();
		images.bedroomdrawer.src = "./images/bedroom_drawer2.png";
		images.bedroomdrawer.onload = handleImageLoad;

	}

	function handleImageLoad(event) {
		var image = event.target;
		var bitmap;

	// create and populate the screen with random daisies:
	
		bitmap = new createjs.Bitmap(image);
		container.addChild(bitmap);
		bitmap.x = 0;
		bitmap.y = 0;
		bitmap.cursor = "pointer";
		stage.update();
		bitmap.on("click", function (evt) {
		var  txt = new createjs.Text("", "18px Arial", "#111");
		txt.text = "This wrapped multi-line text is rendered using the Text Object.\n\n";
		txt.text += "Text is fairly limited in canvas and EaselJS. It's fine for simple labels, titles, and HUD elements. \n\n";

		txt.lineWidth = 300;
		txt.lineHeight = 22;
		txt.textBaseline = "top";
		txt.textAlign = "left";
		txt.y = canvas.height - 275;
		txt.x = (canvas.width - txt.lineWidth) / 2;
		container.addChild(txt);

		var bounds = txt.getBounds();
		var pad = 10;
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#ABC").drawRoundRect(txt.x - pad + bounds.x, txt.y - pad + bounds.y, bounds.width + pad * 2, bounds.height + pad * 2,10);
		container.addChildAt(bg, 0);

		stage.update();
		});
	}