game.util = {
	"init" : function(){
		//show the load facet
		var load = new creatine.Scene();
		game.sceneList["load"] = load;
		
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#224422");
		bg.name = "bg";
		bg.graphics.drawRect(0, 0, 800, 600);
		load.addChild(bg);
		
		var ball = new createjs.Shape();
		ball.graphics.beginFill("#FFF");
		ball.name = "ball";
		ball.graphics.drawCircle(0, 0, 10);
		ball.x = 395;
		ball.y = 295;
		load.addChild(ball);
		createjs.Tween.get(ball,{loop: true})
			.to({y: 315}, 300, createjs.Ease.getPowInOut(2))
			.to({y: 295}, 600, createjs.Ease.getPowInOut(2));
		
		var txtExist = new createjs.Text();
		txtExist.text = "Loading...";
		txtExist.lineWidth = 30;
		txtExist.lineHeight = 24;
		txtExist.textBaseline = "top";
		txtExist.textAlign = "center";
		txtExist.y = 250;
		txtExist.x = 400;
		txtExist.font = "20px Superscript";
		txtExist.color = "#FFF";
		load.addChild(txtExist);
		
		var tip = new createjs.Text();
		tip.text = "Tips: Combine props you get to figure out who is the killer. Have fun!";
		tip.textAlign = "center";
		tip.lineWidth = 800;
		tip.lineHeight = 24;
		tip.textBaseline = "top";
		tip.y = 500;
		tip.x = 400;
		tip.font = "14px Arial";
		tip.color = "#FFF";
		load.addChild(tip);
		
		game.director.replace(load);
		
		//start to load
		game.loaders.init();
	
		//put in the buttons
		function newButton(bName, bContent, bColor, hoverColor, scene, x, y){
			var b = new createjs.Text();
			b.name = bName;
			b.text = bContent;
			b.lineWidth = 200;
			b.lineHeight = 24;
			b.textBaseline = "top";
			b.textAlign = "center";
			b.font = "20px Superscript";
			b.color = bColor;
			scene.addChild(b);
			b.x = x;
			b.y = y;
			b.on("mouseover", function(){
				this.color = hoverColor;
				createjs.Sound.play("obtain");
			});
			b.on("mouseout", function(){this.color = bColor;});
			b.visible =false;
			return b;
		}
		//put in the start new button
		var newGame = newButton("newGame", "New Game", "#7D6", "#FFF", load, 400, 220);
		newGame.on("click", function(){
			game.status = {
				"babyroom" :{"painting": {"noteFound" : false}},
				"livingroom" :{"painting" : {"keyFound" : false}},
				"study" :{"safe" : {"locked" : true}},
				"props" :{
					"bill" : false,
					"keyBabyroom" : false,
					"keyDrawer" : false,
					"note" : false,
					"parasol" : false,
					"photo" : false,
					"witness" : false,
					"diary" : false,
					"folder" : false,
				},
			};
			game.components.switchRoom("study");
			game.components.enterGame();
		});
		//put in the save button
		var saveGame = newButton("saveGame", "Save Game", "#7D6", "#FFF", load, 400, 250);
		//put in the load button
		var loadGame = newButton("loadGame", "Load Game", "#7D6", "#FFF", load, 400, 280);
		//put the resume button
		var resume = newButton("resume", "Resume", "#7D6", "#FFF", load, 400, 310);
		resume.visible = false;
		resume.on("click", function(){
			game.director.pop();
			game.components.enterGame();
		});
		
		//check if load is complete
		var itr = setInterval(checkAndGo, 500),
			keys = Object.keys(game.loaders);
		function checkAndGo(){
			var allLoaded = true;
			for(var i = 0 ; i < keys.length; i++){
				if(game.loaders[keys[i]].loaded != undefined){
					allLoaded = allLoaded && game.loaders[keys[i]].loaded;
				}else{
					continue;
				}
			}
			if(allLoaded){
				clearInterval(itr);
				ball.visible = false;
				txtExist.visible = false;
				//show buttons
				newGame.visible = true;
				saveGame.visible = true;
				loadGame.visible = true;
				//add components
				game.stage.addChild(game.components.containers.textBoard);
				game.stage.addChild(game.components.containers.funcBoard);
				game.stage.addChild(game.components.containers.props);
			}
			return false;
		}
	},
	"func" : {
		"propFuncs" : {
			"photo"	: function(){
				game.director.push(game.sceneList.casefilephoto);
			},
			"note" : function(){
				game.director.push(game.sceneList.notephoto);
			},
		},
		"dragBind" : function(object, target, callback){
			var originX = object.x;
			var originY = object.y;
			object.addEventListener("mousedown", function (evt) {
				// do the scene
				game.util.text.show(game.data.script.props[object.name]);
				if(game.util.func.propFuncs[object.name] != undefined){
					if(game.director.scene.children[0].name != object.name)
						game.util.func.propFuncs[object.name]();
				}
				var o = evt.target;
				o.offset = {x: o.x - evt.stageX, y: o.y - evt.stageY};
			});
			// the pressmove event is dispatched when the mouse moves after a mousedown on the object until the mouse is released.
			object.addEventListener("pressmove", function (evt) {
				var o = evt.target;
				o.x = evt.stageX + o.offset.x;
				o.y = evt.stageY + o.offset.y;
			});
			// the rollover event is dispatched when the mouse focus on the object
			object.addEventListener("rollover", function (evt) {
				var o = evt.target;
				o.scaleX = 1.1;
				o.scaleY = 1.1;
			});
			// the rollout event is dispatched when the mouse move out of the object after focusing on it
			object.addEventListener("rollout", function (evt) {
				var o = evt.target;
				o.scaleX = 1;
				o.scaleY = 1;
			});
			// the pressup event is dispatched when the mouse press up
			object.addEventListener("pressup", function (evt) {
				var objectsUnderPoint = game.stage.getObjectsUnderPoint(evt.stageX, evt.stageY);
				for(var i=0; i < objectsUnderPoint.length; i++){
					if(objectsUnderPoint[i] === target){
						callback();
						break;
					}
				}
				object.x = originX;
    			object.y = originY;
			});
		},
		
		propGet : function(propName){
			game.components.containers.props.getChildByName(propName).visible = true;
			game.status.props[propName] = true;
			
			var obj = game.components.containers.props.getChildByName(propName);
			game.util.func.dragBind(obj, 
				game.components.containers.props.getChildByName(game.data.propTarget[propName]),
				function(){
					game.data.propEvent[propName]();
				});
		},
	},
	
	"bind" : {
		"bedroom" : function(scene){
			var script = game.data.script.bedroom;

			var bg = scene.getChildByName('bg');
			bg.on('click', function(){
				game.util.text.show(script.bg);
			});
			
			var drawer1 = scene.getChildByName('drawer1');
			drawer1.on('click', function(){
				if(!game.status.props.keyDrawer){
					game.util.text.show(script.drawer1_locked);
					createjs.Sound.play("failopen");
				}else{
					game.util.text.show(script.drawer1_open);
					createjs.Sound.play("drawermusic");
					if(!game.status.props.diary)
						game.util.func.propGet("diary");
				}
			});
			
			var painting = scene.getChildByName('painting');
			painting.on('click', function(){
				createjs.Sound.play("obtain");
				game.director.replace(game.sceneList.weddingphoto);
				game.util.text.show(script.painting);
			});
			
			var drawer2 = scene.getChildByName('drawer2');
			drawer2.on('click', function(){
				createjs.Sound.play("drawermusic");
				game.util.text.show(script.drawer2);
			});
			
			var necklace = scene.getChildByName("necklace");
			necklace.on("click", function(){
				createjs.Sound.play("obtain");
				game.util.text.show(script.necklace);
			})
			
			/*
			scene.getChildByName("doorBabyRoom").on("click", function(){
				if(game.status.props.keyBabyroom){
					createjs.Sound.play("opendoor");
					game.director.replace(game.sceneList.babyroom);
				}else{
					createjs.Sound.play("failopen");
					game.util.text.show(game.data.script.babyroom.locked);
				}
			});
			scene.getChildByName("doorLivingRoom").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.livingroom);
			});
			scene.getChildByName("doorStudy").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.study);
			});
			*/
		},
		"babyroom" : function(scene){
			var script = game.data.script.babyroom;
			
			var bg = scene.getChildByName('bg');
			bg.on('click', function(){
				game.util.text.show(script.bg);
			});
			
			var painting = scene.getChildByName('painting');
			painting.on('click', function(){
				createjs.Sound.play("dragsuccess");
				if(game.status.props.note){
					createjs.Sound.play("obtain");
					game.util.text.show(script.note_found);
				}else{
					game.util.func.propGet("note");
					game.util.text.show(script.note_notfound);
				}
			});
			
			var door1 = scene.getChildByName('door1');
			door1.on('click', function(){
				createjs.Sound.play("drawermusic");
				game.util.text.show(script.door1);
			});
			
			var door2 = scene.getChildByName('door2');
			door2.on('click', function(){
				createjs.Sound.play("drawermusic");
				game.util.text.show(script.door2);
			});
			
			/*
			scene.getChildByName("doorBedRoom").on("click", function(){
				createjs.Sound.play("opendoor");	
				game.director.replace(game.sceneList.bedroom);
			});
			scene.getChildByName("doorLivingRoom").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.livingroom);
			});
			scene.getChildByName("doorStudy").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.study);
			});
			*/
		},
		"study" : function(scene){
			var script = game.data.script.study;
			
			var bg = scene.getChildByName('bg');
			bg.on('click', function(){
				game.util.text.show(script.bg);
			});
			
			var diagnosis = scene.getChildByName('diagnosis');
			diagnosis.on('click', function(){
					createjs.Sound.play("papershort");
				game.util.text.show(script.diagnosis);
			});
			
			var letter = scene.getChildByName('letter');
			letter.on('click', function(){
				createjs.Sound.play("papershort");
				game.util.text.show(script.letter);
			});
			
			var newspaper = scene.getChildByName('newspaper');
			newspaper.on('click', function(){
				createjs.Sound.play("papershort");
				game.util.text.show(script.newspaper);
			});
			
			var safe = scene.getChildByName('safe');
			safe.on('click', function(){
				if(game.status.study.safe.locked){
					createjs.Sound.play("failopen");
					game.util.text.show(script.safe_locked);
				}else{
					createjs.Sound.play("opensafe");
					if((!game.status.props.photo) && (!game.status.props.folder)){
						game.util.func.propGet("photo");
						game.util.func.propGet("folder");
					}
					game.util.text.show(script.safe_open);
				}
			});
			
			var watsontelegraph = scene.getChildByName('watsontelegraph');
			watsontelegraph.on('click', function(){
				game.util.text.show(script.watsontelegraph);
				createjs.Sound.play("obatain");
				if(game.status.props.parasol){
					if(!game.status.props.witness){
						game.util.func.propGet("witness");
					}
				}
			});
			
			var travel = scene.getChildByName('travel');
			travel.on('click', function(){
				createjs.Sound.play("obtain");
				game.director.replace(game.sceneList.travelphoto);
				game.util.text.show(script.travel);
			});
			
			/*
			scene.getChildByName("doorBedRoom").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.bedroom);
			});
			scene.getChildByName("doorLivingRoom").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.livingroom);
			});
			scene.getChildByName("doorBabyRoom").on("click", function(){
				if(game.status.props.keyBabyroom){
					game.director.replace(game.sceneList.babyroom);
					createjs.Sound.play("opendoor");
				}else{
					createjs.Sound.play("failopen");
					game.util.text.show(game.data.script.babyroom.locked);
				}
			});
			*/
		},
		"livingroom" : function(scene){
			var script = game.data.script.livingroom;
			
			var bg = scene.getChildByName('bg');
			bg.on('click', function(){
				game.util.text.show(script.bg);
			});
			
			var flyer = scene.getChildByName('flyer');
			flyer.on('click', function(){
				createjs.Sound.play("papershort");
				game.util.text.show(script.flyer);
			});
			
			var jackpainting = scene.getChildByName('jackpainting');
			jackpainting.on('click', function(){
				createjs.Sound.play("obtain");
				if(game.status.props.keyDrawer){
					game.util.text.show(script.drawerkey_found);
				}else{
					game.util.text.show(script.drawerkey_notfound);
					game.util.func.propGet("keyDrawer");
				}
			});
			
			var key = scene.getChildByName('key');
			key.on('click', function(){
				createjs.Sound.play("obtain");
				if(game.status.props.keyBabyroom){
					game.util.text.show(script.key_found);
				}else{
					game.util.func.propGet("keyBabyroom");
					game.util.text.show(script.key_notfound);
				}
			});
			
			var parasol = scene.getChildByName('parasol');
			parasol.on('click', function(){
				if(!game.status.props.parasol){
					game.util.func.propGet("parasol");
				}
				game.util.text.show(script.parasol);
				createjs.Sound.play("obtain");
			});
			
			var mirror = scene.getChildByName('mirror');
			mirror.on('click', function(){
				createjs.Sound.play("obtain");
				if(game.status.props.note){
					game.director.replace(game.sceneList.notemirrorphoto);
					game.status.study.safe.locked = false;
					game.util.text.show(script.mirror_withnote);
				}else{
					game.util.text.show(script.mirror_ordinary);
				}
			});
			
			var bill = scene.getChildByName('bill');
			bill.on('click', function(){
				game.util.text.show(script.bill);
				if(!game.status.props.bill){
					game.util.func.propGet("bill");
				}
				createjs.Sound.play("obtain");
			});
			
			/*
			scene.getChildByName("doorBedRoom").on("click", function(){
				createjs.Sound.play("openr");
				game.director.replace(game.sceneList.bedroom);
			});
			scene.getChildByName("doorStudy").on("click", function(){
				createjs.Sound.play("opendoor");
				game.director.replace(game.sceneList.study);
			});
			scene.getChildByName("doorBabyRoom").on("click", function(){
				if(game.status.props.keyBabyroom){
					createjs.Sound.play("opendoor");
					game.director.replace(game.sceneList.babyroom);
				}else{
					createjs.Sound.play("failopen");
					game.util.text.show(game.data.script.babyroom.locked);
				}
			});
			*/
		},
		"props" : function(c){
			var children = c.children;
			for(var i = 0; i < children.length; i++){
				//hide all the props at the beginning
				children[i].visible = game.status.props[children[i].name];
			}
		},
		"weddingphoto" : function(scene){
			var wedding = scene.getChildByName('wedding');
			wedding.on('click', function(){
				game.director.replace(game.sceneList.bedroom);
			});
		},
		"casefilephoto" : function(scene){
			var casefile = scene.getChildByName('casefile');
			casefile.on('click', function(){
				game.director.pop();
			});
		},
		"notemirrorphoto" : function(scene){
			var notemirror = scene.getChildByName('notemirror');
			notemirror.on('click', function(){
				game.director.replace(game.sceneList.livingroom);
			});
		},
		"travelphoto" : function(scene){
			var travel = scene.getChildByName('travel');
			travel.on('click', function(){
				game.director.replace(game.sceneList.study);
			});
		},
		"notephoto" : function(scene){
			var note = scene.getChildByName('note');
			note.on('click', function(){
				game.director.pop();
			});
		},
	},

	 "text" : {
	 	"scriptPool" : [],
	 	"isShowing" : false,
	 	"nowContent" : "",
	 	"interval" : null,
		"show" : function(incoming){
			clearInterval(game.util.text.interval);
			game.components.containers.textObj.text = "";
			//put the incoming script into the script pool;
			this.scriptPool = [];
			for(var i = 0; i < incoming.length; i++)
				this.scriptPool[i] = incoming[i];
			//call the show function
			this.popScript();
		},

		"popScript" :function(){
			var txtExist = game.components.containers.textObj,
				content = game.util.text.scriptPool[0],
				arrow = game.components.containers.textBoard.getChildByName("arrow");
			
			//if the text board is showing something than show all the text
			if(this.isShowing === true){
				arrow.visible = false;
				txtExist.text = this.nowContent;
				game.util.text.isShowing = false;
				clearInterval(game.util.text.interval);
				game.util.text.scriptPool.shift();
				if(game.util.text.scriptPool.length > 0)
					arrow.visible = true;
				return false;
			}else if(content === undefined){
				clearInterval(game.util.text.interval);
				arrow.visible = false;
				return false;
			}
			
			//now start to show the script
			this.isShowing = true;
			this.nowContent = content;
			this.interval = setInterval(addChar, 50);
			var	count = 0;

			txtExist.text = "";
			function addChar(){
				if(count < content.length){
					txtExist.text += content[count];
					count++;
				}else{
					clearInterval(game.util.text.interval);
					game.util.text.isShowing = false;
					game.util.text.scriptPool.shift();
					//check if the script pool is empty
					if(game.util.text.scriptPool.length > 0)
						arrow.visible = true;
				}
			}
		},
	},
};
