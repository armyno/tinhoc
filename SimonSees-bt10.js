(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.SimonSees = function() {
	this.initialize();
  var self = this;
	// Layer 83
	this.instance = new lib.sprite40();

	// Layer 82
	this.instance_1 = new lib.shape39("synched",0);
	this.instance_1.setTransform(450,20);

	// Layer 81
	this.starPoints = new lib.sprite29();
	this.starPoints.setTransform(456,74);

	// Layer 80
	this.instance_2 = new lib.sprite27();
	this.instance_2.setTransform(149.5,31);
	this.instance_2.alpha = 0.801;

	// Layer 79
	this.instance_3 = new lib.shape26("synched",0);

	// Layer 78
	this.player = new lib.sprite13();
	this.player.setTransform(291,181.1,0.85,0.85);
  this.player.name = "player";
	// Layer 77
	this.instance_4 = new lib.shape25("synched",0);

	// Mask Layer 74 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao2zYIRtgaIgPcoIxUK9g");
	mask.setTransform(150.8,155.1);

	// Masked Layer 75 - 74
	this.target = new lib.sprite13();
	this.target.setTransform(150,181.1,0.85,0.85,0,0,180);
  this.target.name = "target";
	this.target.mask = mask;

	// Layer 73
	this.instance_5 = new lib.shape11("synched",0);

	// Layer 72
	this.FLOWER = new lib.sprite8();
	this.FLOWER.setTransform(484.1,-16.6,0.895,0.895);

	// Layer 71
	this.FLOWER_1 = new lib.sprite8();
	this.FLOWER_1.setTransform(485.9,223.5,0.895,0.895);

	// Layer 70
	this.FLOWER_2 = new lib.sprite8();
	this.FLOWER_2.setTransform(484.8,167.6,0.895,0.895);

	// Layer 69
	this.FLOWER_3 = new lib.sprite8();
	this.FLOWER_3.setTransform(484.8,106.2,0.895,0.895);

	// Layer 68
	this.FLOWER_4 = new lib.sprite8();
	this.FLOWER_4.setTransform(484.1,44.9,0.895,0.895);

	// Layer 67
	this.instance_6 = new lib.shape10("synched",0);

	// Layer 66
	this.FLOWER_5 = new lib.sprite8();
	this.FLOWER_5.setTransform(434.5,-16.6,0.895,0.895);

	// Layer 65
	this.FLOWER_6 = new lib.sprite8();
	this.FLOWER_6.setTransform(387,-16.6,0.895,0.895);

	// Layer 64
	this.FLOWER_7 = new lib.sprite8();
	this.FLOWER_7.setTransform(339.4,-16.6,0.895,0.895);

	// Layer 63
	this.FLOWER_8 = new lib.sprite8();
	this.FLOWER_8.setTransform(291.9,-16.6,0.895,0.895);

	// Layer 62
	this.FLOWER_9 = new lib.sprite8();
	this.FLOWER_9.setTransform(244.3,-16.6,0.895,0.895);

	// Layer 61
	this.FLOWER_10 = new lib.sprite8();
	this.FLOWER_10.setTransform(435.5,223.5,0.895,0.895);

	// Layer 60
	this.FLOWER_11 = new lib.sprite8();
	this.FLOWER_11.setTransform(388,223.5,0.895,0.895);

	// Layer 59
	this.FLOWER_12 = new lib.sprite8();
	this.FLOWER_12.setTransform(340.4,223.5,0.895,0.895);

	// Layer 58
	this.FLOWER_13 = new lib.sprite8();
	this.FLOWER_13.setTransform(292.9,223.5,0.895,0.895);

	// Layer 57
	this.FLOWER_14 = new lib.sprite8();
	this.FLOWER_14.setTransform(245.3,223.5,0.895,0.895);

	// Layer 56
	this.FLOWER_15 = new lib.sprite8();
	this.FLOWER_15.setTransform(461.5,194.4,0.895,0.895);

	// Layer 55
	this.FLOWER_16 = new lib.sprite8();
	this.FLOWER_16.setTransform(413.9,194.4,0.895,0.895);

	// Layer 54
	this.FLOWER_17 = new lib.sprite8();
	this.FLOWER_17.setTransform(366.4,194.4,0.895,0.895);

	// Layer 53
	this.FLOWER_18 = new lib.sprite8();
	this.FLOWER_18.setTransform(318.8,194.4,0.895,0.895);

	// Layer 52
	this.FLOWER_19 = new lib.sprite8();
	this.FLOWER_19.setTransform(271.3,194.4,0.895,0.895);

	// Layer 51
	this.FLOWER_20 = new lib.sprite8();
	this.FLOWER_20.setTransform(434.4,167.6,0.895,0.895);

	// Layer 50
	this.FLOWER_21 = new lib.sprite8();
	this.FLOWER_21.setTransform(386.9,167.6,0.895,0.895);

	// Layer 49
	this.FLOWER_22 = new lib.sprite8();
	this.FLOWER_22.setTransform(339.3,167.6,0.895,0.895);

	// Layer 48
	this.FLOWER_23 = new lib.sprite8();
	this.FLOWER_23.setTransform(291.8,167.6,0.895,0.895);

	// Layer 47
	this.FLOWER_24 = new lib.sprite8();
	this.FLOWER_24.setTransform(244.2,167.6,0.895,0.895);

	// Layer 46
	this.FLOWER_25 = new lib.sprite8();
	this.FLOWER_25.setTransform(460.4,138.5,0.895,0.895);

	// Layer 45
	this.FLOWER_26 = new lib.sprite8();
	this.FLOWER_26.setTransform(412.9,138.5,0.895,0.895);

	// Layer 44
	this.FLOWER_27 = new lib.sprite8();
	this.FLOWER_27.setTransform(365.3,138.5,0.895,0.895);

	// Layer 43
	this.FLOWER_28 = new lib.sprite8();
	this.FLOWER_28.setTransform(317.8,138.5,0.895,0.895);

	// Layer 42
	this.FLOWER_29 = new lib.sprite8();
	this.FLOWER_29.setTransform(270.2,138.5,0.895,0.895);

	// Layer 41
	this.FLOWER_30 = new lib.sprite8();
	this.FLOWER_30.setTransform(434.4,106.2,0.895,0.895);

	// Layer 40
	this.FLOWER_31 = new lib.sprite8();
	this.FLOWER_31.setTransform(386.9,106.2,0.895,0.895);

	// Layer 39
	this.FLOWER_32 = new lib.sprite8();
	this.FLOWER_32.setTransform(339.3,106.2,0.895,0.895);

	// Layer 38
	this.FLOWER_33 = new lib.sprite8();
	this.FLOWER_33.setTransform(291.8,106.2,0.895,0.895);

	// Layer 37
	this.FLOWER_34 = new lib.sprite8();
	this.FLOWER_34.setTransform(244.2,106.2,0.895,0.895);

	// Layer 36
	this.FLOWER_35 = new lib.sprite8();
	this.FLOWER_35.setTransform(460.4,77.1,0.895,0.895);

	// Layer 35
	this.FLOWER_36 = new lib.sprite8();
	this.FLOWER_36.setTransform(412.9,77.1,0.895,0.895);

	// Layer 34
	this.FLOWER_37 = new lib.sprite8();
	this.FLOWER_37.setTransform(365.3,77.1,0.895,0.895);

	// Layer 33
	this.FLOWER_38 = new lib.sprite8();
	this.FLOWER_38.setTransform(317.8,77.1,0.895,0.895);

	// Layer 32
	this.FLOWER_39 = new lib.sprite8();
	this.FLOWER_39.setTransform(270.2,77.1,0.895,0.895);

	// Layer 31
	this.FLOWER_40 = new lib.sprite8();
	this.FLOWER_40.setTransform(433.8,44.9,0.895,0.895);

	// Layer 30
	this.FLOWER_41 = new lib.sprite8();
	this.FLOWER_41.setTransform(386.2,44.9,0.895,0.895);

	// Layer 29
	this.FLOWER_42 = new lib.sprite8();
	this.FLOWER_42.setTransform(338.7,44.9,0.895,0.895);

	// Layer 28
	this.FLOWER_43 = new lib.sprite8();
	this.FLOWER_43.setTransform(291.1,44.9,0.895,0.895);

	// Layer 27
	this.FLOWER_44 = new lib.sprite8();
	this.FLOWER_44.setTransform(243.6,44.9,0.895,0.895);

	// Layer 26
	this.FLOWER_45 = new lib.sprite8();
	this.FLOWER_45.setTransform(459.7,15.8,0.895,0.895);

	// Layer 25
	this.FLOWER_46 = new lib.sprite8();
	this.FLOWER_46.setTransform(412.2,15.8,0.895,0.895);

	// Layer 24
	this.FLOWER_47 = new lib.sprite8();
	this.FLOWER_47.setTransform(364.6,15.8,0.895,0.895);

	// Layer 23
	this.FLOWER_48 = new lib.sprite8();
	this.FLOWER_48.setTransform(317.1,15.8,0.895,0.895);

	// Layer 22
	this.FLOWER_49 = new lib.sprite8();
	this.FLOWER_49.setTransform(269.5,15.8,0.895,0.895);

	// Layer 21
	this.FLOWER_50 = new lib.sprite8();
	this.FLOWER_50.setTransform(163,229,0.895,0.895);

	// Layer 20
	this.FLOWER_51 = new lib.sprite8();
	this.FLOWER_51.setTransform(115.4,229,0.895,0.895);

	// Layer 19
	this.FLOWER_52 = new lib.sprite8();
	this.FLOWER_52.setTransform(188.9,199.9,0.895,0.895);

	// Layer 18
	this.FLOWER_53 = new lib.sprite8();
	this.FLOWER_53.setTransform(141.4,199.9,0.895,0.895);

	// Layer 17
	this.FLOWER_54 = new lib.sprite8();
	this.FLOWER_54.setTransform(93.8,199.9,0.895,0.895);

	// Layer 16
	this.FLOWER_55 = new lib.sprite8();
	this.FLOWER_55.setTransform(161.9,173.1,0.895,0.895);

	// Layer 15
	this.FLOWER_56 = new lib.sprite8();
	this.FLOWER_56.setTransform(114.3,173.1,0.895,0.895);

	// Layer 14
	this.FLOWER_57 = new lib.sprite8();
	this.FLOWER_57.setTransform(187.9,144,0.895,0.895);

	// Layer 13
	this.FLOWER_58 = new lib.sprite8();
	this.FLOWER_58.setTransform(140.3,144,0.895,0.895);

	// Layer 12
	this.FLOWER_59 = new lib.sprite8();
	this.FLOWER_59.setTransform(92.8,144,0.895,0.895);

	// Layer 11
	this.FLOWER_60 = new lib.sprite8();
	this.FLOWER_60.setTransform(161.9,111.7,0.895,0.895);

	// Layer 10
	this.FLOWER_61 = new lib.sprite8();
	this.FLOWER_61.setTransform(114.3,111.7,0.895,0.895);

	// Layer 9
	this.FLOWER_62 = new lib.sprite8();
	this.FLOWER_62.setTransform(187.9,82.6,0.895,0.895);

	// Layer 8
	this.FLOWER_63 = new lib.sprite8();
	this.FLOWER_63.setTransform(140.3,82.6,0.895,0.895);

	// Layer 7
	this.FLOWER_64 = new lib.sprite8();
	this.FLOWER_64.setTransform(92.8,82.6,0.895,0.895);

	// Layer 6
	this.FLOWER_65 = new lib.sprite8();
	this.FLOWER_65.setTransform(161.2,50.4,0.895,0.895);

	// Layer 5
	this.FLOWER_66 = new lib.sprite8();
	this.FLOWER_66.setTransform(113.7,50.4,0.895,0.895);

	// Layer 4
	this.FLOWER_67 = new lib.sprite8();
	this.FLOWER_67.setTransform(187.2,21.3,0.895,0.895);

	// Layer 3
	this.FLOWER_68 = new lib.sprite8();
	this.FLOWER_68.setTransform(139.6,21.3,0.895,0.895);

	// Layer 2
	this.FLOWER_69 = new lib.sprite8();
	this.FLOWER_69.setTransform(92.1,21.3,0.895,0.895);

	// Layer 1
	this.instance_7 = new lib.shape7("synched",0);

	this.addChild(this.instance_7,this.FLOWER_69,this.FLOWER_68,this.FLOWER_67,this.FLOWER_66,this.FLOWER_65,this.FLOWER_64,this.FLOWER_63,this.FLOWER_62,this.FLOWER_61,this.FLOWER_60,this.FLOWER_59,this.FLOWER_58,this.FLOWER_57,this.FLOWER_56,this.FLOWER_55,this.FLOWER_54,this.FLOWER_53,this.FLOWER_52,this.FLOWER_51,this.FLOWER_50,this.FLOWER_49,this.FLOWER_48,this.FLOWER_47,this.FLOWER_46,this.FLOWER_45,this.FLOWER_44,this.FLOWER_43,this.FLOWER_42,this.FLOWER_41,this.FLOWER_40,this.FLOWER_39,this.FLOWER_38,this.FLOWER_37,this.FLOWER_36,this.FLOWER_35,this.FLOWER_34,this.FLOWER_33,this.FLOWER_32,this.FLOWER_31,this.FLOWER_30,this.FLOWER_29,this.FLOWER_28,this.FLOWER_27,this.FLOWER_26,this.FLOWER_25,this.FLOWER_24,this.FLOWER_23,this.FLOWER_22,this.FLOWER_21,this.FLOWER_20,this.FLOWER_19,this.FLOWER_18,this.FLOWER_17,this.FLOWER_16,this.FLOWER_15,this.FLOWER_14,this.FLOWER_13,this.FLOWER_12,this.FLOWER_11,this.FLOWER_10,this.FLOWER_9,this.FLOWER_8,this.FLOWER_7,this.FLOWER_6,this.FLOWER_5,this.instance_6,this.FLOWER_4,this.FLOWER_3,this.FLOWER_2,this.FLOWER_1,this.FLOWER,this.instance_5,this.target,this.instance_4,this.player,this.instance_3,this.instance_2,this.starPoints,this.instance_1,this.instance);
	
	
  //loadMovie("/flash/GameController.swf", "GameEndClip");
  this.GameWon = false;
  this.matching = true;
  //scoreFld.text = score;
  var timeOut = false;
  this.scoring = false;
  var score = 0;
  this.gameOver = false;
  var sndRight = playSound("sound2right"); sndRight.stop();
  var sndWrong = playSound("sound1wrong"); sndWrong.stop();
  for (var i = 1; i <= 3; i++)
  {
    if (Math.random() < 5.000000E-001)
    {
      this.target["eye" + i].gotoAndStop("closed");
    } // end if
  } // end of for
  //btnPlayAgain.visible = false;
  //btnPlayAgain.onPress = function ()
  //{
  //  play ();
  //};
  this.on("tick", function (evt)
  {
    self.matching = true;
    for (var i = 1; i <= 3; i++)
    {
        if (self.target["eye" + i].closed != self.player["eye" + i].closed)
        {
            self.matching = false;
        } // end if
    } // end of for
    if (!(self.matching && self.target.frown.visible))
    {
        if (!self.matching && !self.target.frown.visible)
        {
            sndWrong.play();
            self.target.frown.visible = true;
            self.player.frown.visible = true;
        } // end if
    }
    else
    {
        sndRight.play();
        self.target.frown.visible = false;
        self.player.frown.visible = false;
    } // end else if
    if (self.matching && !self.scoring)
    {
        self.scoring = true;
        ++score;
        if (score == 5)
        {
            self.gameOver = true;
            evt.remove();
        } // end if
        self.starPoints.score();
    } // end if
  });

	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.4,-36.3,562.7,515.8);


// symbols:
(lib.image38 = function() {
	this.initialize(img.image38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite42 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape41 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image38(); 
	this.shape.setTransform(-45, -7.5);   

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape35 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,1],5.3,-0.1,-4.3,-2.6).s().p("Ag2gRIBtAEIgGAfg");
	this.shape.setTransform(-8.8,-1.3);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,1],1.3,-4.5,-3.6,4).s().p("AABg0IAeAQIg9BZg");
	this.shape_1.setTransform(-5.5,7.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,1],-2.4,-3.8,2.3,4.9).s().p("AgkggIAdgRIAsBkg");
	this.shape_2.setTransform(5.5,8.4);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,1],-5,0.5,4.8,-0.3).s().p("Ag2gPQA2AAA3gBIhpAhg");
	this.shape_3.setTransform(8.6,-1.3);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)"],[0,1],0.4,5.4,0.9,-4.4).s().p("AgPA2IANhsIATBtg");
	this.shape_4.setTransform(0.3,-8.5);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFEF24","#FCCA01"],[0,1],0,0,0,0,0,21.8).s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.69)","rgba(255,255,255,0.114)","rgba(255,255,255,0.392)"],[0,0.584,1],-23.5,-179.4,59.3,99.1).s().p("An7zGIP4AAIAAcbIv4Jyg");
	this.shape.setTransform(-2.8,122.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.7,0,101.8,244.7);


(lib.shape26 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AE6011").ss(1.5,1,1).p("AI4BEIAAGlIpAFuIkSCtIkCCiIAAxYIAAkqIAAn0IAAjIIAAmfIRUAAIAAS1gAKNguIAAJUI0SN9IAAzGIgCkjIgFoFIgNtXIUzAGIgNSmg");
	this.shape.setTransform(149.1,162.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E98421").s().p("AqFDdIgCkjIgFoFIgNtXIUzAGIgNSmIAADIIAAJUI0SN9gAocuYIAADIIAAH0IAAEqIAARYIECiiIESitIJAluIAAmlIAAjGIAAy1IxUAAg");
	this.shape_1.setTransform(149.1,162.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#92500E").s().p("AqIWVMgAbgsPIBQgxIT3BIIgDRfIAADIIAAJUIy6N0IgcAggAoHumIAADIIAAH0IAAEqIAARZIEBijIEQitIJmlzIAAgfIgGpWIgHyIIxoAAg");
	this.shape_2.setTransform(140.9,163);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.3,17.8,142.5,290.5);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("Ark3cIHWhIIFcAsIKKAHIANRMIAADLIgFMBI2wP+gAnkw/IAADLIAAH8IAAExIgDRPIR1rAIAC7sIx3AAg");
	this.shape.setTransform(132.6,175.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(58.5,17.8,148.3,314.7);


(lib.shape24 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B244F").ss(1,1,1).p("AiDAQQAYgNAngHQAngKA9gBQBAgBAkAM");
	this.shape.setTransform(-9.4,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4B244F").ss(2,1,1).p("AD+ArQhjgZhogCQiVgDiPAuQgLgWgBgTQgBgSALgWQAKgXAYgN");
	this.shape_1.setTransform(-1.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#954699").s().p("Aj9AjQgBgTAKgVQALgXAYgNQAYgNAngKQAngKA/AAQA9gBAlALIAmAOIBQAfQBRAeACAnIgBAJQhjgYhpgCQiUgDiPAuQgMgWAAgTg");
	this.shape_2.setTransform(-1.5,21.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4B244F").ss(2,1,1).p("ADwBnIgCAhQjvg7jsA5IgCgfQAAhkBGhEQBHhGBiAAQBjAABGBGQBHBEAABkg");
	this.shape_3.setTransform(0,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#954699").s().p("AjsCGIgDgfQAAhkBGhEQBHhGBiAAQBjAABGBGQBHBEAABkIgDAhQjtg7jsA5g");
	this.shape_4.setTransform(0,13.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,0,51.1,29);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B244F").ss(2,1,1).p("ADdgYQgSAmgiAhQhGBHhjAAQhiAAhHhHQgbgbgQgdQgUglgFgrQDsg5DvA7QgFAhgMAeg");
	this.shape.setTransform(0,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#783C80").s().p("AjsgYQDsg6DtA8QgEAfgMAeQjPhKjiBYQgUgkgEgpg");
	this.shape_1.setTransform(0,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#954699").s().p("AisASQgbgZgRgfQDjhbDOBMQgSAogiAfQhGBHhhAAQhkAAhGhHg");
	this.shape_2.setTransform(0.4,-8.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-23.6,47.6,23.7);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsAtQgTgTAAgaQAAgZATgUQATgSAZAAQAaAAATASQATAUAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape.setTransform(-9.9,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-6.4,13,13);


(lib.shape18 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B244F").ss(2,1,1).p("ACpipQBHBHAABiQAABjhHBGQhGBHhjAAQhiAAhHhHQhGhGAAhjQAAhiBGhHQBHhGBiAAQBjAABGBGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipCpQhGhGAAhjQAAhiBGhHQBHhGBiAAQBjAABGBGQBHBHAABiQAABjhHBGQhGBHhjAAQhiAAhHhHg");

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.149)").s().p("AioCpQhHhGABhjQgBhiBHhGQBGhGBigBQBjABBGBGQBGBGAABiQAABjhGBGQhGBGhjAAQhiAAhGhGg");
	this.shape_2.setTransform(0.9,6.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,48.9,54.6);


(lib.shape16 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B244F").ss(2,1,1).p("AkshkIElAwQCLAXA+AQQBPATAUAaQAWAcgnAp");
	this.shape.setTransform(-2.7,9.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#954699").s().p("AltBaIAhiNIK6jGIgyHzg");
	this.shape_1.setTransform(3,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.6,-24.9,73.3,50);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4B244F").ss(2,1,1).p("AIg25QAsgNAxAEQAvAEAlAXQAiAVAaAhQAaAjANArQANAsAFAzIABAsQADAtgLAyQgJAxgPAsIgjBWIgpBXIgqBWIgnBXIgnBdQgSAsgOAuIgaBaQgPAtgGAyIgSBPQgLAugIAxIgNBkQgGAugLAvQgKAxgEAyIgKBfIgMBjQgHAwgEAwQARACAcANQAmAQAgAiQAbAeAKAvQAJAugIAzQgHAwgSAmQgVAsgeAhQgeAggoAYQgmAUgsAPIg2AJQACAigDAoIgGBqQgCABAAADIADAAIAKgDQGwAigLC6QgMC6kVhUQkWhVgrgVQhGgigKgfQgRg1ASgzQARgzgmgUQgkgTgnANQgoAMgIAWQgSArANAtQAOAzgcAlQgbAjgsAOIhCAWIgUAHIhbAfIgfALIgVAHIgVAIIgQAFIhWAiIgxARQgDAAgCACIgkAGQgyAIgugQQgrgPgWghQgWgegDgqIgBgKQAAgXAEgTQAFgWANgPIAEgEQAZgdAngZQAjgVAugNIA0gLQACgCADAAIAigGIBggNIAVgCIBOgJQAsgEAZgeIAFgFQgJgpgFgqIgKhiQgEgrAAgnIgCAAQg9ADgpgLQgugMgagcIgOgUQgRgagHggQgIgvANgwIALgdQALgdARgaQAcgqAngcQAogdAqgRIAWgIQg1hlgNiKIBFAXQA6kaBOjxIACgBIAOgtQA2ifA+iLQAAgEgBgCIgFgqIgDgdIAFgxQASh4BehRIAQgIQARgIATgBQgVgigLgqQgJgoAEg1QADguANgqQAMgoASgkQARgmAYgeQAcgiAtgLIAlgFIAEgLQANgvAbgZQAjgiAkgIQAygKAlASQAmAUAUAkIALAUQAQAeAHAjQAIAngFAnAEh2JQgPgCgRACADmBQQAJgIAKgEQAMgFANgCIAPACAlLD1QEMBNEHhdQAUgKAPgKIAiggQANgRAEgWQAFgbgPgSQgKgNgRgMADGIsQAzACAjAVQAnAWAJArQALAwgiAhIhBA6QgjAegTAhQgXArAVAsQASAmAqAJIApAEAEYSQIgTACAlOHNIBIgEQAwAHAeAhQAdAggCAwQgCAxgdAlQgeAmghAVQggATgVARAlRNxIAAgEIAAgsAlPN6IgCgJ");
	this.shape.setTransform(-0.1,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#954699").s().p("ArrYAQgrgPgWghQgWgegDgqIgBgKQAAgXAEgTQAFgWANgPIAEgEQAZgdAngZQAjgVAugNIA0gLIAFgCIAigGIBggNIAVgCIBOgJQAsgEAZgeIAFgFQgJgpgFgqIgKhiQgEgrAAgnIgCgJIAAgEIAAgsIAAAsIAAAEIAAAJQg9ADgpgLQgugMgagcIgOgUQgRgagHggQgIgvANgwIALgdQALgdARgaQAcgqAngcQAogdAqgRIAWgIQg1hlgNiKIBFAXQA6kaBOjxIACgBIAOgtQA2ifA+iLQAAgEgBgCIgFgqIgDgdIAFgxQASh4BehRIAQgIQARgIATgBQgVgigLgqQgJgoAEg1QADguANgqQAMgoASgkQARgmAYgeQAcgiAtgLIAlgFQARgCAPACIgcgLQANgvAbgZQAjgiAkgIQAygKAlASQAmAUAUAkIALAUIAQgHQAsgNAxAEQAvAEAlAXQAiAVAaAhQAaAjANArQANAsAFAzIABAsQADAtgLAyQgJAxgPAsIgjBWIgpBXIgqBWIgnBXIgnBdQgSAsgOAuIgaBaQgPAtgGAyIgSBPQgLAugIAxIgNBkQgGAugLAvQgKAxgEAyIgKBfIgMBjQgHAwgEAwQARACAcANQAmAQAgAiQAbAeAKAvQAJAugIAzQgHAwgSAmQgVAsgeAhQgeAggoAYQgmAUgsAPIg2AJQACAigDAoIgGBqQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIADAAIAKgDQGwAigLC6QgMC6kVhUQkWhVgrgVQhGgigKgfQgRg1ASgzQARgzgmgUQgkgTgnANQgoAMgIAWQgSArANAtQAOAzgcAlQgbAjgsAOIhCAWIgUAHIhbAfIgfALIgVAHIgVAIIgQAFIhWAiIgxARIgFACIgkAGQgQADgQAAQghAAgfgLgAEFSSIATgCgAC8OlQASAmAqAJIApAEIgpgEQgqgJgSgmQgKgVAAgUQAAgXAMgXQATghAjgeIBBg6QAZgZABgiQAAgLgDgLQgJgrgngWQgjgVgzgCQAzACAjAVQAnAWAJArQADALAAALQgBAigZAZIhBA6QgjAegTAhQgMAXAAAXQAAAUAKAVgAidJBQgCAxgdAlQgeAmghAVQggATgVARQAVgRAggTQAhgVAegmQAdglACgxIAAgEQAAgtgbgfQgeghgwgHIhIAEIBIgEQAwAHAeAhQAbAfAAAtIAAAEgAhZEYQCQAACRgzQAUgKAPgKIAiggQANgRAEgWIABgNQAAgTgLgNQgKgNgRgMQARAMAKANQALANAAATIgBANQgEAWgNARIgiAgQgPAKgUAKQiRAziQAAIAAAAIgBAAQh1AAh2ghIgCgBIgBAAIgDgBIADABIABAAIACABQB2AhB1AAIABAAIAAAAgAD5BEQgKAEgJAIQAJgIAKgEQAMgFANgCIAPACIgPgCQgNACgMAFgAIq0jQACgQAAgQQAAgXgFgXQgHgjgQgeQAQAeAHAjQAFAXAAAXQAAAQgCAQg");
	this.shape_1.setTransform(-0.1,-1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.1,-155.7,168,309.5);


(lib.shape11 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7E4812").ss(1.5,1,1).p("ACHucIB5AAIAADYIAACoIAAChIAABtIAACIIAABRIAAD5IAABwIAABJIAAEOIAAD+IAAAUIhUAAIh+AAIktAAIAAwRIAAhZIAAmrIAAg+IAAjmg");
	this.shape.setTransform(456.5,141);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B5917").s().p("AAuOdQg4gzg1g2QgshDgYhKIgCgOQAXgCAgAbQB5B/CBBsgABzLfQgrgsglguQgcg2ADg9IAAgFQAKgQAUgIIAKgBQATACAPANIAQAPIAUAFQBFA3BDA9IAAD+QhDhYhKhSgAAPCfQiWiDh4iQIAAhZQBEAVA+BIQAUAXARAfQB/B0BlCKQAmA0AvAqIAfASIAABJQh1hzh8hrgACCAtQhHhBAJhjIACgsQBBApBfAiIAaAjIAAD5QhMhAgyhXgAC0jBIgUgFQi1iUidisQgng9gmg1IAAg+QAfANAkAhQDqB8CzDJIAFAUIAaAhIAACIQgigfgqgcgAC1m9QhFg2gghKIgPgKIgPgjIAAgyQByAsBcBUIAAChQgigigpgggAC4sXQgzg4AChNIB5AAIAADYg");
	this.shape_1.setTransform(456.5,141);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A76018").s().p("ACsOdQiBhsh5h/QgggbgXACIACAOQAYBKAsBDQA1A2A4AzIktAAIAAwRQB4CQCWCDQB8BrB1BzIAAEOQhDg9hFg3IgUgFIgQgPQgPgNgTgCIgKABQgUAIgKAQIAAAFQgDA9AcA2QAlAuArAsQBKBSBDBYIAAAUgADhEiQgvgqgmg0QhliKh/h0QgRgfgUgXQg+hIhEgVIAAmrQAmA1AnA9QCdCsC1CUIAUAFQAqAcAiAfIAABRIgagjQhfgihBgpIgCAsQgJBjBHBBQAyBXBMBAIAABwgADmkvIgFgUQizjJjqh8QgkghgfgNIAAjmIGGAAQgCBNAzA4IBIBTIAACoQhchUhygsIAAAyIAPAjIAPAKQAgBKBFA2QApAgAiAiIAABtg");
	this.shape_2.setTransform(456.5,141);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("Aj/OdIAA85IH/AAIAAc5g");
	this.shape_3.setTransform(452.7,145.7);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#955515").ss(1,1,1).p("ANTpwI2cVlIkJgjIal3Gg");
	this.shape_4.setTransform(153.6,321.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A76018").s().p("AtSLSIal3GIAACEI2cVlg");
	this.shape_5.setTransform(153.6,321.3);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,242,51,0.498)").s().p("EgSjAlQQgYgIAAgiQgBgjAZgtQAWguAhgYQAegcAZAHQAUAFAAAjQAAAhgUAuQgZArgeAdQgcAWgVAAIgGAAgAlraMQgQgJAAgdQgBgeARgjQAQgkAYgRQAWgUAQAIQAPAHABAdQgBAdgPAjQgRAjgVAUQgTAOgNAAQgEAAgEgBgAq+VgQgTgLAAgfQAAggATglQATglAagRQAZgTAVAKQARAIAAAhQAAAdgRAlQgVAlgZAUQgTAMgOAAQgGAAgGgCgADrSKQgNgKABgZQgBgaANgcQAMgdARgOQAPgPANAKQALAIABAaQgBAXgLAeQgNAbgPAQQgMAJgJAAQgFAAgDgCgAy6R4QgYgNABgjQAAgkAYgmQAWgoAggSQAggUAYALQAVALAAAkQAAAigVAnQgYAnghAVQgVAMgRAAQgJAAgHgDgAgNNoQgPgMABgZQgBgcAOgeQAOgeARgNQATgOAOALQAMAJABAbQgBAZgMAfQgOAdgTAOQgNAJgHAAQgGAAgEgDgAKyMDQgKgKAAgVQgBgWALgYQAIgZAOgKQAMgLAKAIQAIAHABAYQgBAVgIAZQgKAXgMALQgJAHgGAAQgEAAgDgDgAl6J2QgRgMAAgdQgBgeASgfQAPghAYgMQAWgOARAMQAPALAAAdQAAAdgPAhQgRAdgWAPQgNAIgLAAQgIAAgHgFgAHnHOQAAgZALgXQAJgZAQgLIAZAAQAIAIACAYQgCAYgIAZQgMAYgNALIgZABQgMgLABgWgAQWHRQgIgJABgTQgBgVAIgVQAHgVALgHQAJgLAJAKQAGAHABAVQgBATgGAVQgJAUgJAJQgGAFgFAAQgEAAgDgDgArQD4QgUgQAAgfQAAggATgfQATghAcgLIAsABQASAMABAhQgBAdgSAiQgUAggZANQgNAGgLAAQgMAAgJgGgAN+DMQgJgJABgUQgBgXAJgVQAIgVAMgGIAUABQAHAIABAWQgBAUgHAVQgJAUgLAKQgGADgEAAQgGAAgEgFgAS6gYQgHgKABgTQgBgTAHgSQAGgUAKgGQAJgGAGAJQAGAIABAUQgBASgGASQgGATgJAHQgEADgEAAQgFAAgDgEgAy6jrQgZgTABgiQgBgkAYghQAYgjAggIQAfgLAYASQAVARABAjQgBAhgVAjQgYAfgeANQgNAEgLAAQgSAAgOgKgAQPjzQgIgLAAgUQAAgTAIgTQAHgUALgGQAKgGAIALQAGAJABAVQgBASgGAVQgIARgKAIQgEACgDAAQgHAAgEgGgAl6oPQgSgSACgdQgCgfASgaQAQgbAWgHQAXgIARARQAPANABAfQgBAdgPAbQgRAagWAJQgJADgHAAQgOAAgJgJgAS0q4QgIgMABgSQgBgUAIgQQAGgRAJgEQAJgGAIAMQAFAKABASQgBATgFASQgIAPgJAGIgFABQgGAAgEgGgArQvoQgVgVAAggQAAggAVgaQATgcAagEQAagGATATQARARABAgQAAAggSAcQgTAYgaAHQgIACgHAAQgRAAgNgMgAQPwDQgIgOAAgSQAAgWAIgRQAHgRALgCQAKgEAHAMQAHAKACAWQgCASgHATQgHAQgKAEIgFABQgIAAgFgIgAS02eQgIgNABgSQgBgTAIgPQAGgQAJgCQAKgBAHAMQAFAMABATQgBASgFAQQgHAOgKADIgBAAQgJAAgFgKgAzJ5PQgYgZACgiQgBgkAYgbQAXgcAgAAQAfgDAZAYQAVAWABAkQgBAigWAcQgYAZgfAFIgDAAQgfAAgWgVgAmE6YQgRgWAAgcQgBgeASgWQAQgXAWgBQAXgDASAVQAPAUABAdQgBAcgPAZQgSAVgXADIgCAAQgVAAgPgSgAQK8VQgIgPABgTQgBgUAIgPQAHgQALAAQAKgBAJAPQAGAMABAVQgBATgGAQQgJAPgKABIgBAAQgKAAgHgNgEASwgiDQgHgOAAgTQAAgTAHgNQAFgPALACQAIgBAIAQQAFAMABAVQgBARgFAPQgIAMgIAAQgLgBgFgNgEANygiPQgKgSAAgUQAAgUAKgPQAHgPANABQAKAAAJAQQAIAPABAVQgBAUgIAQQgJAOgKABQgOgBgGgPgEAHhgieQgMgUABgXQgBgYAMgQQAKgRAQADQANgCALAUQAKAQAAAYQAAAWgKASQgLAPgNACQgQgCgKgQgEgAjgiyQgPgVABgbQgBgcAPgTQAOgTATACQAQAAAQAVQAMATABAcQgCAbgMATQgPASgQAAQgUgBgNgTgEgLcgjMQgVgbABgfQgBggAWgVQASgWAbACQAZABAUAZQARAVABAhQgBAfgRAYQgUATgZABQgbgCgTgWg");
	this.shape_6.setTransform(107.1,217.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(238,163,87,0.498)").s().p("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");
	this.shape_7.setTransform(101.4,221.5);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(180,149,44,0.702)").ss(1,1,1).p("EgTSAhVMgAohCpMAn1ABQMgAUArmI14VB");
	this.shape_8.setTransform(113.2,182.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFECAA","#F1C763"],[0,1],-63,-45.2,61.1,126.2).s().p("EgT6ghUMAn1ABQMgAUArmI14VBIxBAygAi63mMAAGAnLIRUq9IAP8og");
	this.shape_9.setTransform(113.2,182.1);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.102)").s().p("Ao8B+Qjsg0AAhKQAAhJDsg1QDug1FOAAQFPAADtA1QDuA1AABJQAABKjuA0QjtA1lPAAQlOAAjug1g");
	this.shape_10.setTransform(260,302);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#955515").ss(1,1,1).p("EAjhABDMhHBAAAIAAiFMBHBAAAg");
	this.shape_11.setTransform(282.8,252.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A76018").s().p("EgjgABDIAAiFMBHAAAAIAACFg");
	this.shape_12.setTransform(282.8,252.2);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.4,-36.3,543.6,515.8);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEA357").s().p("AdhG1IAGkmItnAAIBKmHIsxAAIBgi8IL0AAIgjC8IMmAAIgJGHIL6AAIANEmgAhGG1ICUkmIOyAAIg3EmgEgptAG1IAWkvIZoAGIldEpgAvvCMIHJmDIM/gBIjLGHgEgorgG0MAjjAAAIjeC9MggTAADgAdwj4IAEi8ILRAAIAJC8g");
	this.shape.setTransform(262.1,302.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E98421").s().p("APFG1IA3kmINnAAIgHEmgA1RG1IFdkpI5ngGIAdl6MAgUgADIDei9ILAAAIhgC8IMxAAIhJGHIuyAAIDKmHIs+ABInKGDIQ+ADIiVEmgAdjCPIAJmHIsnAAIAji8IMHAAIgDC8ILdAAIATGHgABKCPg");
	this.shape_1.setTransform(262.5,302.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,259,534.2,87.5);


(lib.shape9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,242,51,0.498)").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape.setTransform(12.7,13.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(238,163,87,0.498)").s().p("AgcBgIgFgSIgGAGQgSARgSgCQgRgBgPgQQgOgPAAgRQAAgTASgQQALgKAMgFIgQgIQgVgMgDgTQgDgRALgRQALgSAQgFQATgFAUANIATAQIADgRQAHgYAQgIIAhgDQAVAFAJAPQAKAQgHAYQgDAPgKAOIAVgCQAZgBAMAOQAMANAAASQAAAWgMAMQgMANgZAAIgTgBIAEAIQAJAXgIAQQgHAQgUAHIghACQgSgHgJgWg");
	this.shape_1.setTransform(12.7,13.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.7,24.5,25.1);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFECAA","#F1C763"],[0,1],36.8,-41.7,42.8,130.4).s().p("Ego3AV/MAAAgr9MBRvAAAMAAAAr9g");
	this.shape.setTransform(248.3,128.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-11.9,523.4,281.5);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite34 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape35("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape32("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop();this.ThisGrade = 0}
	this.frame_1 = function() {
		playSound("sound33");
	}
	this.frame_7 = function(){
    this.stop ();
   if (this.parent.gameWin)
   {
      //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
      this.parent.parent.GameWon = true; 
   } // end if	
	}
	this.frame_8 = function() {
		playSound("sound37");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite5Puff(); //attachMovie("Puff", "puff" + i, i);
    this.addChild(this["puff" + i]);
    this["puff" + i].rotation = Math.random() * 360;
    this["puff" + i].scalex = this["puff" + i].scaleY = (Math.random() * 40 + 80)/100;
    this["puff" + i].velX = Math.random() * 40 - 20;
    this["puff" + i].velY = Math.random() * 40 - 20;
    this["puff" + i].step = Math.random() * 10 + 10;
    this["puff" + i].on("tick", function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step/100;
        if (evt.currentTarget.scaleX <= 0)
        {
            self.removeChild(evt.currentTarget);
            evt.remove();
            delete evt.currentTarget
        } // end if
    });
    } // end of for		
	}
	this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame - 1);    
   this.parent.lose();	
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite34();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape36("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});  
	 this.score  = function ()
   {
      this.gotoAndStop(this.currentFrame + 1); 
      this["star" + this.currentFrame].gotoAndPlay("point");
   } // End of the function
  this.frame1 = function(){

   this.lose = function ()
   {
    if (this.currentframe > 0)
    {
        this["star" + this.currentFrame].gotoAndPlay("loss");
    } // end if
   } // End of the function
   this.stop ();
   this.gameWin = false;  
  }
  this.frame6 = function(){
    this.gameWin = true  
  }
	// Layer 5
	this.star5 = new lib.sprite30();
	this.star5.setTransform(0,132.8,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite30();
	this.star4.setTransform(0,98.8,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite30();
	this.star3.setTransform(0,64.8,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite30();
	this.star2.setTransform(0,30.8,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite30();
	this.star1.setTransform(0,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-18.2,31.7,166.1);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.7,0,101.8,244.7);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape24("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,0,51.1,29);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape22("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-23.6,47.6,23.7);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape20("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-6.4,13,13);


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,closed:4});
	var self = this;
  this.frame1 = function(){
   this.stop ();
   this.closed = false;

   if (this.parent.name == "player" && !this.hasEventListener("mousedown"))
   {
    this.on("mousedown", function (evt)
    {
        if (!self.parent.parent.matching)
        {
            self.play ();
            self.parent.parent.scoring = false;
        } // end if
    });
   } // end if
  
  }
  this.frame5 = function(){
   this.stop ();
   this.closed = true;  
  }
  var wait = 0;
  var maxWait = 24;
  this.on("tick",  function ()
   {
    var rad = Math.atan((stage.mouseY/ratio - self.parent.y - self.y)/ (stage.mouseX/ratio - self.parent.x - self.x));
    var degrees = 180 * rad / 3.141593E+000;
    if (stage.mouseX/ratio - self.parent.x - self.x >= 0)
    {
        degrees = degrees + 180;
    } // end if
    if(self.parent.name == "player")
      self.pupil.rotation = degrees;
    else
      self.pupil.rotation = 180 - degrees;
    if (self.parent.name == "target" && self.parent.parent.matching && !self.parent.parent.gameOver)
    {
        ++wait;
        if (wait > maxWait)
        {
            wait = 0;
            if (Math.random() < 5.000000E-001)
            {
                self.play ();
            } // end if
        } // end if
    } // end if
   });
	// Layer 4
	this.instance = new lib.sprite23();
	this.instance.setTransform(5.7,-23.2,0.579,0.202,13.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.81,scaleY:0.64,x:5.6},0).to({scaleX:0.91,scaleY:0.82},1).wait(1).to({scaleX:1,scaleY:1,x:5.7},0).wait(1).to({scaleX:0.77,scaleY:0.56,y:-23.2},0).to({scaleX:0.67,scaleY:0.38},1).wait(1).to({scaleX:0.58,scaleY:0.2,y:-23.1},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite21();
	this.instance_1.setTransform(-5.6,23.3,0.55,0.165,13.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.8,scaleY:0.63},0).wait(1).to({scaleX:0.95,scaleY:0.91,x:-5.4},0).wait(1).to({scaleX:1,scaleY:1,x:-5.5},0).wait(1).to({scaleX:0.75,scaleY:0.54,x:-5.4},0).to({scaleX:0.65,scaleY:0.35},1).wait(1).to({scaleX:0.55,scaleY:0.17,x:-5.5},0).wait(1));

	// Layer 2
	this.pupil = new lib.sprite19();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pupil}]}).wait(8));

	// Layer 1
	this.instance_2 = new lib.shape18("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(8));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(4).call(this.frame5).wait(4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.9,48.9,54.6);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape16("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.6,-24.9,73.3,50);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 5
	this.eye2 = new lib.sprite17();
	this.eye2.setTransform(11.9,-76.7);

	// Layer 4
	this.eye1 = new lib.sprite17();
	this.eye1.setTransform(25.4,-118.6);

	// Layer 3
	this.eye3 = new lib.sprite17();
	this.eye3.setTransform(-0.7,-24.7);

	// Layer 2
	this.frown = new lib.sprite15();
	this.frown.setTransform(0,24.4);

	// Layer 1
	this.instance = new lib.shape14("synched",0);

	this.addChild(this.instance,this.frown,this.eye3,this.eye1,this.eye2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.1,-155.7,168,309.5);


(lib.sprite8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.7,24.5,25.1);


(lib.sprite5Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;