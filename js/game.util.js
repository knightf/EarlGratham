game.util = {
	"bind" : {
		"click" : function(obj, callbacks){
			obj.on("click", function(evt){
				var i;
				for(i = 0; i < callbacks.length; i++){
					callbacks[i]();
				}
			});
		}
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
