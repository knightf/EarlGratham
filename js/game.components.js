game.components = {
	"textBoard" : function(){
		var container = new createjs.Container(),
		    img = new Image();
		img.src = "./images/textboard.png";
		img.onload = function(){
			var bitmap;
			game.stage.addChild(container);
			bitmap = new createjs.Bitmap(img);
			container.addChild(bitmap);
			bitmap.x = 0;
			bitmap.y = 500;
		}
	},
};
