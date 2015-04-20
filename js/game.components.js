game.components = {
	"enterGame" : function(){
		game.util.bind.props(this.containers.props);
		game.components.containers.funcBoard.visible = true;
		game.components.containers.textBoard.visible = true;
		game.components.containers.props.visible = true;
	},
	"ending" : function(name){
		game.components.containers.funcBoard.visible = false;
		game.components.containers.textBoard.visible = false;
		game.components.containers.props.visible = false;
		
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#000");
		bg.name = "bg";
		bg.graphics.drawRect(0, 0, 800, 600);
		
		var r = new createjs.Text();
		r.text = "Replay";
		r.lineWidth = 700;
		r.lineHeight = 28;
		r.textBaseline = "top";
		r.textAlign = "center";
		r.y = 550;
		r.x = 700;
		r.font = "14px Superscript";
		r.color = "#FFF";
		r.visible = false;
		r.on("click",function(){location.reload()});
		
		var s = new createjs.Text();
		s.text = "Script\nC.Wang M.Ju F.Han Y.Zhang\n\n"+
				"Programming\nC.Wang M.Ju F.Han Y.Zhang\n\n"+
				"Graphics\nF.Han\n\n"+
				"Music\nC.Wang Y.Zhang\n\n\nThanks for playing!";
		s.lineWidth = 700;
		s.lineHeight = 28;
		s.textBaseline = "top";
		s.textAlign = "center";
		s.y = 600;
		s.x = 400;
		s.font = "20px Superscript";
		s.color = "#FFF";
		s.visible = false;
	
		if(name=="jack"){
			var je = new creatine.Scene();
		
			je.addChild(bg);
			
			var text = "--Normal End--\nI know it.\nIt must be Jack Miller who killed Elizabeth."+
				"\nHe can't take it if Julie knows his affair.\nThis bastard.";
			var exp = new createjs.Text();
			exp.text = "";
			exp.lineWidth = 700;
			exp.lineHeight = 36;
			exp.textBaseline = "top";
			exp.textAlign = "center";
			exp.y = 200;
			exp.x = 400;
			exp.font = "24px Superscript";
			exp.color = "#FFF";
			je.addChild(exp);

			je.addChild(s);

			je.addChild(r);
			
			var interval = setInterval(addChar, 70);
			var	count = 0;
			function addChar(){
				if(count < text.length){
					exp.text += text[count];
					count++;
				}else{
					clearInterval(interval);
					bg.on("click", function(){
						exp.visible = false;
						s.visible = true;
						r.visible = true;
						createjs.Tween.get(s, {loop: false})
						.to({y: -400}, 20000);
					});
				}
			}
			
			game.stage.addChild(je);
			game.director.replace(je);
			createjs.Sound.play("typing");
		}else if(name == "charlie"){
			var ce = new creatine.Scene();
		
			ce.addChild(bg);
			
			var text = "--True End--\nI remember now.\nI pushed that cheating bitch down."+
				"\nThat Gibson blackmailed me for his alibi.\nLike I can't get away without him.";
			var exp = new createjs.Text();
			exp.text = "";
			exp.lineWidth = 700;
			exp.lineHeight = 36;
			exp.textBaseline = "top";
			exp.textAlign = "center";
			exp.y = 200;
			exp.x = 400;
			exp.font = "24px Superscript";
			exp.color = "#FFF";
			ce.addChild(exp);

			ce.addChild(s);

			ce.addChild(r);
			
			var interval = setInterval(addChar, 60);
			var	count = 0;
			function addChar(){
				if(count < text.length){
					exp.text += text[count];
					count++;
				}else{
					clearInterval(interval);
					bg.on("click", function(){
						exp.visible = false;
						s.visible = true;
						r.visible = true;
						createjs.Tween.get(s, {loop: false})
						.to({y: -400}, 20000);
					});
				}
			}
			
			game.stage.addChild(ce);
			game.director.replace(ce);
			createjs.Sound.play("typing");
		}
	},
	"containers" : {
		"textBoard": new createjs.Container(),
		"funcBoard": new createjs.Container(),
		"props" : new createjs.Container(),
		"textObj": new createjs.Text(),
	},

	"textBoard" : function(bg, arrow){
		//handle the bg object
		bg.name = 'bg';
		this.containers.textBoard.addChild(bg);
		bg.x = 0;
		bg.y = 500;
		
		//handle the arrow object
		arrow.name = 'arrow';
		this.containers.textBoard.addChild(arrow);
		arrow.x = 390;
		arrow.y = 570;
		createjs.Tween.get(arrow,{loop: true})
			.to({y: 575}, 300, createjs.Ease.getPowInOut(2))
			.to({y: 570}, 300, createjs.Ease.getPowInOut(2));
		arrow.visible = false;

		game.components.containers.textBoard.addChild(game.components.containers.textObj);
		game.components.containers.textObj.shouldbe = "";
		
		//configure the txtExist object		
		var txtExist = game.components.containers.textObj;
		txtExist.text = "";
		txtExist.lineWidth = 740;
		txtExist.lineHeight =24;
		txtExist.textBaseline = "top";
		txtExist.textAlign = "left";
		txtExist.y = 525;
		txtExist.x = 30;
		txtExist.font = "16px Arial";
		txtExist.color = "#666";
		
		//configure the little arrow to indicate the next script
		//bind the click event on the text board
		this.containers.textBoard.getChildByName('bg').on("click", function(){
			game.util.text.popScript();	
		});
		
		this.containers.textBoard.visible = false;
	},
	
	"funcBoard" : function(bitmap, queue){
		bitmap.name = "bg";
		this.containers.funcBoard.addChild(bitmap);
		bitmap.x = 0;
		bitmap.y = 450;
		
		this.containers.funcBoard.visible = false;
		//bind the function for doors to switch scenes
		var queue = game.loaders.componentsQueue;
		var doorBedRoomImg = new createjs.Bitmap(queue.getResult("doorBedRoom")),
			doorBedRoomOpenImg = new createjs.Bitmap(queue.getResult("doorBedRoomOpen")),
			doorStudyImg = new createjs.Bitmap(queue.getResult("doorStudy")),
			doorStudyOpenImg = new createjs.Bitmap(queue.getResult("doorStudyOpen")),
			doorBabyRoomImg = new createjs.Bitmap(queue.getResult("doorBabyRoom")),
			doorBabyRoomOpenImg = new createjs.Bitmap(queue.getResult("doorBabyRoomOpen")),
			doorLivingRoomImg = new createjs.Bitmap(queue.getResult("doorLivingRoom")),
			doorLivingRoomOpenImg = new createjs.Bitmap(queue.getResult("doorLivingRoomOpen")),
			returnImg = new createjs.Bitmap(queue.getResult("return"));
		var c = this.containers.funcBoard;
		
		returnImg.name = "return";
		c.addChild(returnImg);
		returnImg.x = 600;
		returnImg.y = 460;
		returnImg.on("click", function(){
			game.director.push(game.sceneList.load);
			game.components.containers.funcBoard.visible =false;
			game.components.containers.props.visible =false;
			game.components.containers.textBoard.visible =false;
			game.sceneList.load.getChildByName("resume").visible = true;
		});
		
		doorBedRoomImg.name = "doorbedroom";
		c.addChild(doorBedRoomImg);
		doorBedRoomImg.x = 760;
		doorBedRoomImg.y = 460;
		doorBedRoomOpenImg.name = "doorbedroomOpen";
		c.addChild(doorBedRoomOpenImg);
		doorBedRoomOpenImg.x = 760;
		doorBedRoomOpenImg.y = 460;
		
		doorStudyImg.name = "doorstudy";
		c.addChild(doorStudyImg);
		doorStudyImg.x = 720;
		doorStudyImg.y = 460;
		doorStudyOpenImg.name = "doorstudyOpen";
		c.addChild(doorStudyOpenImg);
		doorStudyOpenImg.x = 720;
		doorStudyOpenImg.y = 460;
		
		doorBabyRoomImg.name = "doorbabyroom";
		c.addChild(doorBabyRoomImg);
		doorBabyRoomImg.x = 680;
		doorBabyRoomImg.y = 460;
		doorBabyRoomOpenImg.name = "doorbabyroomOpen";
		c.addChild(doorBabyRoomOpenImg);
		doorBabyRoomOpenImg.x = 680;
		doorBabyRoomOpenImg.y = 460;
		
		doorLivingRoomImg.name = "doorlivingroom";
		c.addChild(doorLivingRoomImg);
		doorLivingRoomImg.x = 640;
		doorLivingRoomImg.y = 460;
		doorLivingRoomOpenImg.name = "doorlivingroomOpen";
		c.addChild(doorLivingRoomOpenImg);
		doorLivingRoomOpenImg.x = 640;
		doorLivingRoomOpenImg.y = 460;
		
		var children = c.children;
		for(var i = 0; i < children.length; i++){
			if((children[i].name != "bg") && (children[i].name != "return"))
				children[i].visible = false;
		}
	
		doorBabyRoomImg.on("click", function(){game.components.switchRoom("babyroom")});
		doorStudyImg.on("click", function(){game.components.switchRoom("study")});
		doorBedRoomImg.on("click", function(){game.components.switchRoom("bedroom")});
		doorLivingRoomImg.on("click", function(){game.components.switchRoom("livingroom")});
	},
	
	"switchRoom" : function(roomTo){
		var sceneNow = game.director.scene.name,
			c = game.components.containers.funcBoard,
			rooms = ["bedroom", "babyroom", "livingroom", "study"];
			
		if(roomTo == "babyroom"){
			if(game.status.props.keyBabyroom){
			}else{
				createjs.Sound.play("failopen");
				game.util.text.show(game.data.script.babyroom.locked);
				return false;
			}
		}
		//hide all doors
		var children = c.children;
		for(var i = 0; i < children.length; i++){
			if((children[i].name != "bg") && (children[i].name != "return"))
				children[i].visible = false;
		}
		//delete the rooms of now
		for(i = 0; i < rooms.length; i++){
			if(rooms[i] === roomTo){
				rooms.splice(i, 1);
			}
		}
		//show the opened door
		c.getChildByName("door"+roomTo+"Open").visible = true;
		//show the other doors
		for(i = 0; i < rooms.length; i++){
			c.getChildByName("door"+rooms[i]).visible = true;
		}
		
		//switch room
		createjs.Sound.play("opendoor");
		game.director.replace(game.sceneList[roomTo]);
	}
};
