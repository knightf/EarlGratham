game.loaders = {
	//init
	"init" : function(){
		//sound
		game.loaders.soundQueue.installPlugin(createjs.Sound);
		game.loaders.soundQueue.on("complete", game.loaders.soundComplete, this);
		game.loaders.soundQueue.loadManifest([
			{id: "footstep", src: "./music/footstep.mp3"},
			{id: "drawermusic", src:"./music/drawermusic.mp3"},
			{id: "opendoor", src:"./music/opendoor.mp3"},
			{id: "closedoor", src:"./music/closedoor.mp3"},
			{id: "dragsuccess", src:"./music/dragsuccess.mp3"},
			{id: "drop", src:"./music/drop.mp3"},
			{id: "obtain", src:"./music/obtain.mp3"},
			{id: "opensafe", src:"./music/opensafe.mp3"},
			{id: "papershort", src: "./music/papershort.mp3"},
			{id: "paperlong", src: "./music/paperlong.mp3"},
			{id: "success", src: "./music/success.mp3"},
			{id: "typing", src: "./music/typing.mp3"},
			{id: "wakeup", src: "./music/wakeup.mp3"},
			{id: "failopen", src: "./music/failopen.mp3"},
		]);

		//props
		game.loaders.propsQueue.on("complete", game.loaders.propsComplete, this);
		game.loaders.propsQueue.loadManifest([
			{id: "bill", src: "./images/icons/bill.png"},
			{id: "keyBabyroom", src: "./images/icons/key_babyroom.png"},
			{id: "keyDrawer", src: "./images/icons/key_drawer.png"},
			{id: "note", src: "./images/icons/note.png"},
			{id: "parasol", src: "./images/icons/parasol.png"},
			{id: "photo", src: "./images/icons/photo.png"},
			{id: "witness", src: "./images/icons/witness.png"},
			{id: "diary", src: "./images/icons/diary.png"},
			{id: "folder", src: "./images/icons/folder.png"},
		]);
		//scenes
		//bedroom scene
		game.loaders.bedRoomQueue.on("complete", game.loaders.bedroomComplete, this);
		game.loaders.bedRoomQueue.loadManifest([
			{id: "bg", src:"./images/bedroom.png"},
			{id: "painting", src:"./images/bedroom_painting.png"},
			{id: "drawer1", src:"./images/bedroom_drawer1.png"},
			{id: "drawer2", src:"./images/bedroom_drawer2.png"},
			{id: "necklace", src:"./images/bedroom_necklace.png"},
			/*
			{id: "doorStudy", src: "./images/doors/study.png"},	
			{id: "doorLivingRoom", src: "./images/doors/livingroom.png"},
			{id: "doorBedRoomOpen", src: "./images/doors/bedroom_open.png"},
			{id: "doorBabyRoom", src: "./images/doors/babyroom.png"},
			*/
		]);
		//babyroom scene
		game.loaders.babyRoomQueue.on("complete", game.loaders.babyroomComplete, this);
		game.loaders.babyRoomQueue.loadManifest([
			{id: "bg", src:"./images/babyroom.png"},
			{id: "painting", src:"./images/babyroom_painting.png"},
			{id: "door1", src:"./images/babyroom_door1.png"},
			{id: "door2", src:"./images/babyroom_door2.png"},
			/*
			{id: "doorStudy", src: "./images/doors/study.png"},	
			{id: "doorLivingRoom", src: "./images/doors/livingroom.png"},
			{id: "doorBedRoom", src: "./images/doors/bedroom.png"},
			{id: "doorBabyRoomOpen", src: "./images/doors/babyroom_open.png"},
			*/
		]);
		//study scene
		game.loaders.studyQueue.on("complete", game.loaders.studyComplete, this);
		game.loaders.studyQueue.loadManifest([
			{id: "bg", src:"./images/study.png"},
			{id: "diagnosis", src:"./images/study_diagnosis.png"},
			{id: "letter", src:"./images/study_letter.png"},
			{id: "newspaper", src:"./images/study_newspaper.png"},
			{id: "safe", src:"./images/study_safe.png"},
			{id: "watsontelegraph", src:"./images/study_telegraph.png"},
			{id: "travel", src:"./images/study_travel.png"},
			/*
			{id: "doorStudyOpen", src: "./images/doors/study_open.png"},
			{id: "doorLivingRoom", src: "./images/doors/livingroom.png"},
			{id: "doorBedRoom", src: "./images/doors/bedroom.png"},
			{id: "doorBabyRoom", src: "./images/doors/babyroom.png"},
			*/
		]);
		//livingroom scene
		game.loaders.livingRoomQueue.on("complete", game.loaders.livingroomComplete, this);
		game.loaders.livingRoomQueue.loadManifest([
			{id: "bg", src:"./images/livingroom.png"},
			{id: "flyer", src:"./images/livingroom_flyer.png"},
			{id: "jackpainting", src:"./images/livingroom_jackpainting.png"},
			{id: "key", src:"./images/livingroom_key.png"},
			{id: "parasol", src:"./images/livingroom_parasol.png"},
			{id: "mirror", src:"./images/livingroom_mirror.png"},
			{id: "bill", src:"./images/livingroom_bill.png"},
			/*
			{id: "doorStudy", src: "./images/doors/study.png"},	
			{id: "doorLivingRoomOpen", src: "./images/doors/livingroom_open.png"},
			{id: "doorBedRoom", src: "./images/doors/bedroom.png"},
			{id: "doorBabyRoom", src: "./images/doors/babyroom.png"},
			*/
		]);
		//wedding photo scene
		game.loaders.weddingPhotoQueue.on("complete", game.loaders.weddingphotoComplete, this);
		game.loaders.weddingPhotoQueue.loadManifest([
			{id: "wedding", src:"./images/bedroom_wedding.png"},
		]);
		//travel photo scene
		game.loaders.travelPhotoQueue.on("complete", game.loaders.travelphotoComplete, this);
		game.loaders.travelPhotoQueue.loadManifest([
			{id: "travel", src:"./images/travelphoto.png"},
		]);
		//casefile photo scene
		game.loaders.casefilePhotoQueue.on("complete", game.loaders.casefilephotoComplete, this);
		game.loaders.casefilePhotoQueue.loadManifest([
			{id: "casefile", src:"./images/study_filecase_photo.png"},
		]);
		//note mirror photo scene
		game.loaders.notemirrorPhotoQueue.on("complete", game.loaders.notemirrorphotoComplete, this);
		game.loaders.notemirrorPhotoQueue.loadManifest([
			{id: "notemirror", src:"./images/note_mirror.png"},
		]);
		//note photo scene
		game.loaders.notePhotoQueue.on("complete", game.loaders.notephotoComplete, this);
		game.loaders.notePhotoQueue.loadManifest([
			{id: "note", src:"./images/note.png"},
		]);
		//components
		game.loaders.componentsQueue.on("complete", game.loaders.componentsComplete, this);
		game.loaders.componentsQueue.loadManifest([
			{id: "textboard", src: "./images/textboard.png"},
			{id: "textArrow", src: "./images/textboard_arrow.png"},
			{id: "funcboard", src: "./images/funcboard.png"},
			
			{id: "return", src: "./images/return.png"},
			{id: "doorStudy", src: "./images/doors/study.png"},	
			{id: "doorStudyOpen", src: "./images/doors/study_open.png"},
			{id: "doorLivingRoom", src: "./images/doors/livingroom.png"},
			{id: "doorLivingRoomOpen", src: "./images/doors/livingroom_open.png"},
			{id: "doorBedRoom", src: "./images/doors/bedroom.png"},
			{id: "doorBedRoomOpen", src: "./images/doors/bedroom_open.png"},
			{id: "doorBabyRoom", src: "./images/doors/babyroom.png"},
			{id: "doorBabyRoomOpen", src: "./images/doors/babyroom_open.png"},
		]);
	},
	//sound
	"soundQueue" : new createjs.LoadQueue(),
	"soundComplete" : function(){
		//createjs.Sound.play("footstep");
	},
	//components
	"componentsQueue" : new createjs.LoadQueue(),
	"componentsComplete" : function(){
		var queue = game.loaders.componentsQueue;
		game.components.textBoard(new createjs.Bitmap(queue.getResult("textboard")),
								new createjs.Bitmap(queue.getResult("textArrow")));

		game.components.funcBoard(new createjs.Bitmap(queue.getResult("funcboard")), queue);
	},
	//props
	"propsQueue" : new createjs.LoadQueue(),
	"propsComplete" : function(){
		var container = game.components.containers.props,
			queue = game.loaders.propsQueue;
		
		var billImg = new createjs.Bitmap(queue.getResult("bill"));
		billImg.name = "bill";
		container.addChild(billImg);
		billImg.x = 10;
		billImg.y = 460;
		
		var keyBabyroomImg = new createjs.Bitmap(queue.getResult("keyBabyroom"));
		keyBabyroomImg.name = "keyBabyroom";
		container.addChild(keyBabyroomImg);
		keyBabyroomImg.x = 60;
		keyBabyroomImg.y = 460;
		
		var keyDrawerImg = new createjs.Bitmap(queue.getResult("keyDrawer"));
		keyDrawerImg.name = "keyDrawer";
		container.addChild(keyDrawerImg);
		keyDrawerImg.x = 410;
		keyDrawerImg.y = 460;
		
		var noteImg = new createjs.Bitmap(queue.getResult("note"));
		noteImg.name = "note";
		container.addChild(noteImg);
		noteImg.x = 160;
		noteImg.y = 460;
		
		var parasolImg = new createjs.Bitmap(queue.getResult("parasol"));
		parasolImg.name = "parasol";
		container.addChild(parasolImg);
		parasolImg.x = 210;
		parasolImg.y = 460;
		
		var photoImg = new createjs.Bitmap(queue.getResult("photo"));
		photoImg.name = "photo";
		container.addChild(photoImg);
		photoImg.x = 260;
		photoImg.y = 460;
		
		var folderImg = new createjs.Bitmap(queue.getResult("folder"));
		folderImg.name = "folder";
		container.addChild(folderImg);
		folderImg.x = 310;
		folderImg.y = 460;
		
		var diaryImg = new createjs.Bitmap(queue.getResult("diary"));
		diaryImg.name = "diary";
		container.addChild(diaryImg);
		diaryImg.x = 360;
		diaryImg.y = 460;
		
		var witnessImg = new createjs.Bitmap(queue.getResult("witness"));
		witnessImg.name = "witness";
		container.addChild(witnessImg);
		witnessImg.x = 110;
		witnessImg.y = 460;
		
		game.util.bind.props(container);
	},
	//scenes
	//bedroom scene
	"bedRoomQueue" : new createjs.LoadQueue(),
	"bedroomComplete" : function(){
		var queue = game.loaders.bedRoomQueue,
		    bedroom = new creatine.Scene(),
		    bg, painting, drawer1, drawer2, necklace;
		bedroom.name = "bedroom";
		
		bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		bgImg.name = "bg";
		bedroom.addChild(bgImg);
		//bedroom.getChildByName('bg').visible = false;
		bgImg.x = 0;
		bgImg.y = 0;

		drawer1 = queue.getResult("drawer1");
		drawer1Img = new createjs.Bitmap(drawer1);
		drawer1Img.name = "drawer1";
		bedroom.addChild(drawer1Img);
		drawer1Img.x = 678;
		drawer1Img.y = 309;

		painting = queue.getResult("painting");
		paintingImg = new createjs.Bitmap(painting);
		paintingImg.name = "painting";
		bedroom.addChild(paintingImg);
		paintingImg.x = 202;
		paintingImg.y = 51;

		drawer2 = queue.getResult("drawer2");
		drawer2Img = new createjs.Bitmap(drawer2);
		drawer2Img.name = "drawer2";
		bedroom.addChild(drawer2Img);
		drawer2Img.x = 678;
		drawer2Img.y = 339;
		
		necklace = queue.getResult("necklace");
		necklaceImg = new createjs.Bitmap(necklace);
		necklaceImg.name = "necklace";
		bedroom.addChild(necklaceImg);
		necklaceImg.x = 700;
		necklaceImg.y = 270;
		
		/*
		var doorBedRoomOpenImg = new createjs.Bitmap(queue.getResult("doorBedRoomOpen")),
			doorStudyImg = new createjs.Bitmap(queue.getResult("doorStudy")),
			doorBabyRoomImg = new createjs.Bitmap(queue.getResult("doorBabyRoom")),
			doorLivingRoomImg = new createjs.Bitmap(queue.getResult("doorLivingRoom"));
		
		bedroom.addChild(doorBedRoomOpenImg);
		doorBedRoomOpenImg.x = 760;
		doorBedRoomOpenImg.y = 460;
		doorStudyImg.name = "doorStudy";
		bedroom.addChild(doorStudyImg);
		doorStudyImg.x = 720;
		doorStudyImg.y = 460;
		doorBabyRoomImg.name = "doorBabyRoom";
		bedroom.addChild(doorBabyRoomImg);
		doorBabyRoomImg.x = 680;
		doorBabyRoomImg.y = 460;
		doorLivingRoomImg.name = "doorLivingRoom";
		bedroom.addChild(doorLivingRoomImg);
		doorLivingRoomImg.x = 640;
		doorLivingRoomImg.y = 460;
		*/
		
		//store the scene
		game.sceneList['bedroom'] = bedroom;
		//do the bind
		game.util.bind.bedroom(game.sceneList['bedroom']);
	},
	//babyroom scene
	"babyRoomQueue" : new createjs.LoadQueue(),
	"babyroomComplete" : function(){
		var queue = game.loaders.babyRoomQueue,
		    babyroom = new creatine.Scene(),
		    bg, painting, door1, door2;
		babyroom.name = "babyroom";
		
		var bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		bgImg.name = "bg";
		babyroom.addChild(bgImg);
		bgImg.x = 0;
		bgImg.y = 0;

		painting = queue.getResult("painting");
		paintingImg = new createjs.Bitmap(painting);
		paintingImg.name = "painting";
		babyroom.addChild(paintingImg);
		paintingImg.x = 700;
		paintingImg.y = 0;

		door1 = queue.getResult("door1");
		door1Img = new createjs.Bitmap(door1);
		door1Img.name = "door1";
		babyroom.addChild(door1Img);
		door1Img.x = 60;
		door1Img.y = 150;

		door2 = queue.getResult("door2");
		door2Img = new createjs.Bitmap(door2);
		door2Img.name = "door2";
		babyroom.addChild(door2Img);
		door2Img.x = 140;
		door2Img.y = 132;

		/*
		var doorBedRoomImg = new createjs.Bitmap(queue.getResult("doorBedRoom")),
			doorStudyImg = new createjs.Bitmap(queue.getResult("doorStudy")),
			doorBabyRoomOpenImg = new createjs.Bitmap(queue.getResult("doorBabyRoomOpen")),
			doorLivingRoomImg = new createjs.Bitmap(queue.getResult("doorLivingRoom"));
		
		doorBedRoomImg.name = "doorBedRoom";
		babyroom.addChild(doorBedRoomImg);
		doorBedRoomImg.x = 760;
		doorBedRoomImg.y = 460;
		doorStudyImg.name = "doorStudy";
		babyroom.addChild(doorStudyImg);
		doorStudyImg.x = 720;
		doorStudyImg.y = 460;
		babyroom.addChild(doorBabyRoomOpenImg);
		doorBabyRoomOpenImg.x = 680;
		doorBabyRoomOpenImg.y = 460;
		doorLivingRoomImg.name = "doorLivingRoom";
		babyroom.addChild(doorLivingRoomImg);
		doorLivingRoomImg.x = 640;
		doorLivingRoomImg.y = 460;
		*/
		
		//store the scene
		game.sceneList['babyroom'] = babyroom;
		game.util.bind.babyroom(game.sceneList['babyroom']);

	},
	
	//study scene
	"studyQueue" : new createjs.LoadQueue(),
	"studyComplete" : function(){
		var queue = game.loaders.studyQueue,
		    study = new creatine.Scene(),
		    bg, diagnosis, letter, newspaper, safe, watsontelegraph, travel;
		study.name = "study";
		
		var bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		bgImg.name = "bg";
		study.addChild(bgImg);
		bgImg.x = 0;
		bgImg.y = 0;

		diagnosis = queue.getResult("diagnosis");
		diagnosisImg = new createjs.Bitmap(diagnosis);
		diagnosisImg.name = "diagnosis";
		study.addChild(diagnosisImg);
		diagnosisImg.x = 420;
		diagnosisImg.y = 290;

		letter = queue.getResult("letter");
		letterImg = new createjs.Bitmap(letter);
		letterImg.name = "letter";
		study.addChild(letterImg);
		letterImg.x = 592;
		letterImg.y = 300;
		
		newspaper = queue.getResult("newspaper");
		newspaperImg = new createjs.Bitmap(newspaper);
		newspaperImg.name = "newspaper";
		study.addChild(newspaperImg);
		newspaperImg.x = 289;
		newspaperImg.y = 290;
		
		safe = queue.getResult("safe");
		safeImg = new createjs.Bitmap(safe);
		safeImg.name = "safe";
		study.addChild(safeImg);
		safeImg.x = 661;
		safeImg.y = 360;
		
		watsontelegraph = queue.getResult("watsontelegraph");
		watsontelegraphImg = new createjs.Bitmap(watsontelegraph);
		watsontelegraphImg.name = "watsontelegraph";
		study.addChild(watsontelegraphImg);
		watsontelegraphImg.x = 39;
		watsontelegraphImg.y = 361;
		
		travel = queue.getResult("travel");
		travelImg = new createjs.Bitmap(travel);
		travelImg.name = "travel";
		study.addChild(travelImg);
		travelImg.x = 90;
		travelImg.y = 40;

		/*
		var doorBedRoomImg = new createjs.Bitmap(queue.getResult("doorBedRoom")),
			doorStudyOpenImg = new createjs.Bitmap(queue.getResult("doorStudyOpen")),
			doorBabyRoomImg = new createjs.Bitmap(queue.getResult("doorBabyRoom")),
			doorLivingRoomImg = new createjs.Bitmap(queue.getResult("doorLivingRoom"));
		
		doorBedRoomImg.name = "doorBedRoom";
		study.addChild(doorBedRoomImg);
		doorBedRoomImg.x = 760;
		doorBedRoomImg.y = 460;
		study.addChild(doorStudyOpenImg);
		doorStudyOpenImg.x = 720;
		doorStudyOpenImg.y = 460;
		doorBabyRoomImg.name = "doorBabyRoom";
		study.addChild(doorBabyRoomImg);
		doorBabyRoomImg.x = 680;
		doorBabyRoomImg.y = 460;
		doorLivingRoomImg.name = "doorLivingRoom";
		study.addChild(doorLivingRoomImg);
		doorLivingRoomImg.x = 640;
		doorLivingRoomImg.y = 460;
		*/
		//store the scene
		game.sceneList['study'] = study;
		game.util.bind.study(game.sceneList['study']);

	},
	
	//livingroom scene
	"livingRoomQueue" : new createjs.LoadQueue(),
	"livingroomComplete" : function(){
		var queue = game.loaders.livingRoomQueue,
		    livingroom = new creatine.Scene(),
		    bg, flyer, jackpainting, key, parasol, mirror, bill;
		livingroom.name = "livingroom";
		
		var bg = queue.getResult("bg"),
		bgImg = new createjs.Bitmap(bg);
		bgImg.name = "bg";
		livingroom.addChild(bgImg);
		bgImg.x = 0;
		bgImg.y = 0;

		flyer = queue.getResult("flyer");
		flyerImg = new createjs.Bitmap(flyer);
		flyerImg.name = "flyer";
		livingroom.addChild(flyerImg);
		flyerImg.x = 401;
		flyerImg.y = 331;

		jackpainting = queue.getResult("jackpainting");
		jackpaintingImg = new createjs.Bitmap(jackpainting);
		jackpaintingImg.name = "jackpainting";
		livingroom.addChild(jackpaintingImg);
		jackpaintingImg.x = 341;
		jackpaintingImg.y = 72;

		key = queue.getResult("key");
		keyImg = new createjs.Bitmap(key);
		keyImg.name = "key";
		livingroom.addChild(keyImg);
		keyImg.x = 80;
		keyImg.y = 169;
		
		parasol = queue.getResult("parasol");
		parasolImg = new createjs.Bitmap(parasol);
		parasolImg.name = "parasol";
		livingroom.addChild(parasolImg);
		parasolImg.x = 300;
		parasolImg.y = 200;
		
		mirror = queue.getResult("mirror");
		mirrorImg = new createjs.Bitmap(mirror);
		mirrorImg.name = "mirror";
		livingroom.addChild(mirrorImg);
		mirrorImg.x = 735;
		mirrorImg.y = 91;
		
		bill = queue.getResult("bill");
		billImg = new createjs.Bitmap(bill);
		billImg.name = "bill";
		livingroom.addChild(billImg);
		billImg.x = 202;
		billImg.y = 396;

		/*
		var doorBedRoomImg = new createjs.Bitmap(queue.getResult("doorBedRoom")),
			doorStudyImg = new createjs.Bitmap(queue.getResult("doorStudy")),
			doorBabyRoomImg = new createjs.Bitmap(queue.getResult("doorBabyRoom")),
			doorLivingRoomOpenImg = new createjs.Bitmap(queue.getResult("doorLivingRoomOpen"));
		
		
		doorBedRoomImg.name = "doorBedRoom";
		livingroom.addChild(doorBedRoomImg);
		doorBedRoomImg.x = 760;
		doorBedRoomImg.y = 460;
		doorStudyImg.name = "doorStudy";
		livingroom.addChild(doorStudyImg);
		doorStudyImg.x = 720;
		doorStudyImg.y = 460;
		doorBabyRoomImg.name = "doorBabyRoom";
		livingroom.addChild(doorBabyRoomImg);
		doorBabyRoomImg.x = 680;
		doorBabyRoomImg.y = 460;
		livingroom.addChild(doorLivingRoomOpenImg);
		doorLivingRoomOpenImg.x = 640;
		doorLivingRoomOpenImg.y = 460;
		*/
		//store the scene
		game.sceneList['livingroom'] = livingroom;
		game.util.bind.livingroom(game.sceneList['livingroom']);

	},
	
	//wedding photo scene
	"weddingPhotoQueue" : new createjs.LoadQueue(),
	"weddingphotoComplete" : function(){
		var queue = game.loaders.weddingPhotoQueue,
		    weddingphoto = new creatine.Scene(),
		    wedding;
		
		var wedding = queue.getResult("wedding"),
		weddingImg = new createjs.Bitmap(wedding);
		weddingImg.name = "wedding";
		weddingphoto.addChild(weddingImg);
		weddingImg.x = 0;
		weddingImg.y = 0;
		
		//store the scene
		game.sceneList['weddingphoto'] = weddingphoto;
		game.util.bind.weddingphoto(game.sceneList['weddingphoto']);

	},
	
	//travel photo scene
	"travelPhotoQueue" : new createjs.LoadQueue(),
	"travelphotoComplete" : function(){
		var queue = game.loaders.travelPhotoQueue,
		    travelphoto = new creatine.Scene(),
		    travel;
		
		var travel = queue.getResult("travel"),
		travelImg = new createjs.Bitmap(travel);
		travelImg.name = "travel";
		travelphoto.addChild(travelImg);
		travelImg.x = 0;
		travelImg.y = 0;
		
		//store the scene
		game.sceneList['travelphoto'] = travelphoto;
		game.util.bind.travelphoto(game.sceneList['travelphoto']);

	},
	
	//casefile photo scene
	"casefilePhotoQueue" : new createjs.LoadQueue(),
	"casefilephotoComplete" : function(){
		var queue = game.loaders.casefilePhotoQueue,
		    casefilephoto = new creatine.Scene(),
		    casefile;
		
		var casefile = queue.getResult("casefile"),
		casefileImg = new createjs.Bitmap(casefile);
		casefileImg.name = "casefile";
		casefilephoto.addChild(casefileImg);
		casefileImg.x = 0;
		casefileImg.y = 0;
		
		//store the scene
		game.sceneList['casefilephoto'] = casefilephoto;
		game.util.bind.casefilephoto(game.sceneList['casefilephoto']);

	},
	
	//note mirror photo scene
	"notemirrorPhotoQueue" : new createjs.LoadQueue(),
	"notemirrorphotoComplete" : function(){
		var queue = game.loaders.notemirrorPhotoQueue,
		    notemirrorphoto = new creatine.Scene(),
		    notemirror;
		
		var notemirror = queue.getResult("notemirror"),
		notemirrorImg = new createjs.Bitmap(notemirror);
		notemirrorImg.name = "notemirror";
		notemirrorphoto.addChild(notemirrorImg);
		notemirrorImg.x = 0;
		notemirrorImg.y = 0;
		
		//store the scene
		game.sceneList['notemirrorphoto'] = notemirrorphoto;
		game.util.bind.notemirrorphoto(game.sceneList['notemirrorphoto']);

	},
	//note mirror photo scene
	"notePhotoQueue" : new createjs.LoadQueue(),
	"notephotoComplete" : function(){
		var queue = game.loaders.notePhotoQueue,
		    notephoto = new creatine.Scene(),
		    note;
		
		var note = queue.getResult("note"),
		noteImg = new createjs.Bitmap(note);
		noteImg.name = "note";
		notephoto.addChild(noteImg);
		noteImg.x = 0;
		noteImg.y = 0;
		
		//store the scene
		game.sceneList['notephoto'] = notephoto;
		game.util.bind.notephoto(game.sceneList['notephoto']);

	},
};
