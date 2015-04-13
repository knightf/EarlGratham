game.util = {
	"bind" : {
		"bedroom" : function(scene){
			var script = game.data.script.bedroom;

			var bg = scene.getChildByName('bg');
			bg.on('click', function(){
				game.util.text.show("I must have a great taste in interior decoration. This room feels so right to me.");
			});

			var drawer1 = scene.getChildByName('drawer1');
			drawer1.on('click', function(){
				game.util.text.show(script.drawer1);
			});

		},
	},

	"text" : {
		"show" : function(content){
			var txtExist = game.components.containers.textObj;
			if(txtExist.shouldbe === content){
				return false;
			}
			txtExist.text = "";
			txtExist.shouldbe = content;
			txtExist.lineWidth = 740;
			txtExist.lineHeight = 22;
			txtExist.textBaseline = "top";
			txtExist.textAlign = "left";
			txtExist.y = 520;
			txtExist.x = 30;
			console.log(txtExist);
			var interval = setInterval(addChar, 50),
			    count = 0;
			function addChar(){
				if(count < content.length){
					txtExist.text += content[count];
					count++;
				}else{
					clearInterval(interval);
				}
			}
		},

		"tick" : function(){
		},
	},
};
