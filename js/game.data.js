game.data = {
	"propTarget": {
		"bill" : "folder",
		"keyBabyroom" : "witness",
		"keyDrawer" : "witness",
		"note" : "witness",
		"parasol" : "witness",
		"photo" : "witness",
		"witness" : "diary",
		"diary" : "witness",
		"folder" : "bill",
	},
	"propEvent" : {
		"bill" : function(){game.components.ending("charlie");},
		"keyBabyroom" : function(){},
		"keyDrawer" : function(){},
		"note" : function(){},
		"parasol" : function(){},
		"photo" : function(){},
		"witness" : function(){game.components.ending("jack");},
		"diary" : function(){game.components.ending("jack");},
		"folder" : function(){game.components.ending("charlie");},
	},
	"script" : {
		"bedroom" : {
			"bg" : ["This room feels so right to me."],
				
			"painting" : ["This wedding photo has me in it. I suppose the bride is ... Elizabeth?"],
			
			"drawer1_locked" : ["This drawer is locked.\nI can't open it."],
			
			"drawer1_open" : ["Looks like here are more diaries.",
	    		"\"Date: Mar 25th, 1886\nI find that Jack is really a great listener. He can always get my point!! ...\"",
	    		"\"Date: June 9th, 1886\nToday a dangerous idea comes to me: what if I leave this broken home and go with Jack?",
	    		"I've had enough of Charlie's syptom, for everytime I have to tell him Henry's tragedy and go through the sadness again\""],
			
			"drawer2" : ["There's something in it.\nLooks like it's Elizabeth's diary.",
				"\"Date: Sep 9th, 1883 \nToday Charlie and I married! We love each other so much! ...\"",
				"\"Date: Sep 9th, 1884\nToday is our first wedding anniversary, but we did not celebrate.",
				"\"Date: Oct 4th, 1884\nI'm impressed by Jack'talent in painting! Julie is lucky to marry him...\"",
				"Part of this diary is missing. The last one is 2 years ago."],

			"necklace" : ["I do remenber this necklace. This is Elizabeth's favorite jewelry."],
		},
		
		"babyroom" : {
			"locked" : ["This room is locked, I need a key."],
			"bg" : ["It looks like a babyroom. But it's too dusty! Does it mean I had a child before?!"],
			"note_notfound" : ["What a piece of colorful painting.",
				"Wait...Why there is a piece of paper on the back of this painting...What these strange signs are?"],
			"note_found" : ["This painting makes the room more bright."],
			"door1" : ["There is nothing in it..."],
			"door2" : ["Another part of Elizabeth's diary.",
	    		"\"Date: Jan 20th, 1885\nThank God, I am pregnant with Charlie's baby! ...\"",
	    		"\"Date: Sep 16th, 1885\nIt's a boy! Charlie and I decide to name him Henry...\"",
	    		"\"Date: Oct 18th, 1885\nOh no...no! My poor baby! Why the God has to take him away? I can't live without him! ...\"",
	    		"Sounds like I lost my boy..."],
		},
		
		"livingroom" : {
			"bg" : ["I like keeping my living room in order, "],
			
			"drawerkey_notfound" : ["A piece of painting. Let me see... it's called \"Summer Night\" drawn by Jack Miller.",
				"Wait... Miller? So this is Julie's husband's work. Emm...It seems a key get stuck on the back"],
			
			"drawerkey_found" : ["Jack really has a great talent for painting. Maybe this painting will worth millions of dollars one day."],
			
			"key_notfound" : ["Hey, there is a key between the pages.",
				"\"Memento Mori\", sounds like an interesting book."],
				
			"key_found" : ["I am definitly going to read this book later."],
			
			"flyer" : ["A resort's flyer?\nWait! It seems like I have visited there...",
				"\"Night Spring welcomes you. Be the first one to own all of these--beautiful scenes, fresh air, brand new accommodation...",
				"Owner W. Gibson is looking forward your visit!\""],
				
			"parasol" : ["This is the parasol Elizabeth carried along all the time. Now it has no owner."],
			
			"mirror_ordinary" : ["This mirror ... always has extremely clear image."],
			"mirror_withnote" : ["Aha! I just have to fold the note and place it to the mirror. Then the mirror will complete the code for me. I think this is the password for the safe."],
			
			"bill" : ["This is my latest bank statement: ",
				"Pay to: General Electric,  Reason: Utility Fee\nAmount: 86.2 GBP,  From: Charlie Grantham",
				"Pay to: Night Spring,  Reason: Accommodation\nAmount: 5,000 GBP,  From: Charlie Grantham",
				"Pay to: William Gibson,  Reason: Unknown\nAmount: 20,000 GBP,  From: Charlie Grantham",
				"Pay to: Sean Thomas  Reason: Diagnosis\nAmount: 326 GBP,  From: Charlie Grantham",],
			
		},

		"study" : {
			"bg" : ["Study room isn't my style, perhaps it is designed by someone else."],
			
			"newspaper" : ["This is London Times, [Nov 23rd, 1886] (yesterday)", 
				"\"Great Success of Dr. Thomas' New Therapy\n--Dr. Thomas has proven his new dicovery works on memory disorder patients.",
				"Thomas said, \"Patients who received this nova medicine claim that they all feel more clear with their mind and some of the systoms disappear quickly.\""],
				
			"letter" : ["I remember this invitation letter was from Julie and Jack.", 
				"\"Dear Charlie,\nWe're sorry to hear that our lovely angel Henry has left us. We know you're",
				"still grieving. However, we think life still needs go on. We just got a resort's flyer and we want to invite you to visit there with us to get some fresh air", 
				"and have courage for your future lives. Looking forward to hearing from you!\nYours Sincerely, Julie Miller and Jack Miller\""],
				
			"watsontelegraph" : ["There is a telegraph from a Detective named Watson.",
				"\"Dear Charlie,\n We found a new witness Lily who works at the resort.",
				"According to her testimony, she saw Elizabeth and Jack had a fierce argument on that cliff on the day Elizabeth died.",
				"And at last, I feel really sorry for your wife's death.\"\nWhat?! My wife Elizabeth died ?!"],
			
			"safe_locked": ["I can't open this sefe. I don't remember the password"],
			
			"safe_open" : ["Oh, there is a police's case file.", "\"Date: Nov 12th, 1885\nVictim's name: Elizabeth Grantham",
				"Cause of death: fallen from the cliff in a holiday resort.\nElizabeth's body was found under a cliff by a jogger.",
				"Possible time of death is between last day's dusk and evening.\nHer husband Charlie have an alibi from resort's owner--W. Gibson\""],
	
			"diagnosis" : ["\"Patient Name: Charlie Gratham\n Symptom Description: This patient loses his memories iregularly.",
				"With certain incitation, he can successfully recover them. I assume the disease is intermittent amnesia.\nSign: Sean Thomas\"",
				"My diagnosis of intermittent amnesia? Well, this explains everything."],
			
			"travel" : ["Charlie, Elizabeth and Julie in Night Spring resort.\n--taken by Jack on Nov 13th, 1885"],
		},
		
		"props" : {
			"bill" : ["Some bill records."],
			"keyBabyroom" : ["It looks like an ordinary key."],
			"keyDrawer" : ["It looks like an ordinary key."],
			"note" : ["There're some strange signs."],
			"parasol" : ["Oh, I get some pieces of memory.\nThat day, on the way back to hotel, Elizabeth found she lost her parasol.",
				"But I couldn't accompany with her and Jack volunteered to help her. Did something happen between them then?"],
			"photo" :  ["I was desperate when the police gave this photo of Elizabeth's body.\nWait a minute, there is something strange..."],
			"witness" : ["Lily told the police that she heard Elizabeth asked Jack to elope with her. But Jack refused and argued that he need to rely on Julie's noble rights to establish his reputation of painting", 
				"Then Elizabeth threatened him to tell Julie their relationship. Bacause she really couldn't stand Charlie's symptom anymore.",
				"So Elizabeth did not came back to the hotel after the short trip. What happened to her then.",
				"Damn, I should remember."],
			"diary" : ["This part of Elizabeth's diary breaks my heart. She'd rather live with Jack.",
				"Yet she worried what would happen to her if she tell Julie her affair with Jack. I guess I can tell how Elizabeth died."],
			"folder" : ["This filecase indicates that I had an alibi the evening Elizabeth died.",
				"Does this mean that the police thought I was the killer at the beginning?"],
		},
	},
}
