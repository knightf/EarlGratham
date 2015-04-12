game.components = {
	"containers" : {
		"textBoard": new createjs.Container(),
		"funcBoard": new createjs.Container(),

		"textObj": new createjs.Text("", "16px Calibri", "#666"),
	},

	"textBoard" : function(bitmap){
		game.stage.addChild(this.containers.textBoard);
		this.containers.textBoard.addChild(bitmap);
		bitmap.x = 0;
		bitmap.y = 500;

		game.components.containers.textBoard.addChild(game.components.containers.textObj);
		game.components.containers.textObj.shouldbe = "";
	},
	
	"funcBoard" : function(bitmap){
		game.stage.addChild(this.containers.funcBoard);
		this.containers.funcBoard.addChild(bitmap);
		bitmap.x = 0;
		bitmap.y = 450;
	},
};
