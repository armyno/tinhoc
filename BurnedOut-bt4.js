(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.BurnedOut = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

  this.frame1 = function(){
   function run()
   {
    if (self._char.x >= 40)
    {
        if (self._char.x <= 500 - 40)
        {
            if (Math.random() * 24 < 1)
            {
                accel = accel * -1;
            } // end if
        }
        else
        {
            accel = -baseAccel;
        } // end else if
    }
    else
    {
        accel = baseAccel;
    } // end else if
    if (speed + accel < maxSpeed && speed + accel > -maxSpeed)
    {
        speed = speed + accel;
    } // end if
    self._char.x = self._char.x + speed;
    self._char.scaleX = -accel * charScale / Math.abs(accel)/100;
    self._char.scaleY = charScale/100;
    charScale = time / 2 + 60;
   } // End of the function
   function fire()
   {
    ++flameCount;
    if (flameCount >= 1000)
    {
        flameCount = 0;
    } // end if
    self["flame" + flameCount] = new lib.sprite7Flame(); //flame = attachMovie("Flame", "flame" + flameCount, flameCount);
    flame.addChild(self["flame" + flameCount]);
    self["flame" + flameCount].x = self._char.x + Math.random() * 16 - 8;
    self["flame" + flameCount].y = self._char.y + Math.random() * 10 - 2 - charScale * 7.000000E-001;
    self["flame" + flameCount].scaleX = self["flame" + flameCount].scaleY = (Math.random() * 50 + 50) * (time + 200) / 30000;
    self["flame" + flameCount].rotation = Math.random() * 360;
    self["flame" + flameCount].velY = -5;
    self["flame" + flameCount].on("tick", function (evt)
    {
        evt.currentTarget.velY = evt.currentTarget.velY + lift * time / 100;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - (30 - 20 * time / 100)/100;
        if (evt.currentTarget.scaleY < 0)
        {            
          flame.removeChild(evt.currentTarget);
          delete evt.currentTarget;
        } // end if
        if(time <= 0){
          
          flame.removeChild(evt.currentTarget);
          delete evt.currentTarget;
        }
        
    });
   } // End of the function
   function timer()
   {
    time = time - 2.000000E-001;
    if (time <= 0)
    {
        sndPoof = playSound("sound2poof");;
        self.timeOut = true;
       
        for (var f = 1; f <= 20; f++)
        {
            ++flameCount;
            if (flameCount >= 1000)
            {
                flameCount = 0;
            } // end if
            
            self["dust" + flameCount] = new lib.sprite7Flame(); //flame = attachMovie("Flame", "flame" + flameCount, flameCount);
            self.addChild(self["dust" + flameCount]);
            self["dust" + flameCount].x = self._char.x + Math.random() * 16 - 8;
            self["dust" + flameCount].y = self._char.y - 10 - Math.random() * 20;
            self["dust" + flameCount].scaleX = self["dust" + flameCount].scaleY = (Math.random() * 50 + 50)/100;
            self["dust" + flameCount].rotation = Math.random() * 360;
            self["dust" + flameCount].velX = Math.random() * 10 - 5;
            self["dust" + flameCount].velY = Math.random() * 10 - 5;
            self["dust" + flameCount].on("tick", function (evt)
            {
                evt.currentTarget.velY = evt.currentTarget.velY + lift;
                evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
                evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
                evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - 0.1; 
                if (evt.currentTarget.scaleX < 0)
                {   
                    evt.remove();
                    self.removeChild(evt.currentTarget);
                } // end if
            });
        } // end of for
        
        
        //GameEndClip.gotoAndPlay("GameWonPlayground");
        self.GameWon = true;
        self.pointer.visible = false;
        self.cursor = ""; //Mouse.show();
        self.removeChild(self._char);
        self.removeAllEventListeners("tick");   //delete onEnterFrame;
        for (var k = 1; k <= 3; k++)
        {
            fuse = self["fuse" + k];
            fuse.sparkle.visible = false;
            fuse.removeAllEventListeners("tick");   //delete fuse.onEnterFrame;
        } // end of for
      } // end if
   } // End of the function
   this.stop ();
   this.cursor = "none"; //Mouse.hide();
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this._char.gotoAndPlay(0);
   var self = this;
   this.GameWon = false;
   var speed = 0;
   var maxSpeed = 12;
   var baseAccel = 2;
   var accel = -baseAccel;
   var lift = -2.000000E-001;
   var flameCount = 0;
   var time = 100;
   //this.timeFld.text = time;
   var timeWait = 0;
   this.timeOut = false;
   var score = 0;
   var curScore = score;
   var sndFusePlaying = false;
   var charScale = 100;
   //puffs._xscale = puffs._yscale = 50;
   var sndPoof;  
    
   //var sndSnuff; 
   //sndSnuff.attachSound("sound1snuff");
   //var sndBoom;
   //sndBoom.attachSound("sound3explosion"); 
   //char.swapDepths(100000);
   //pointer.swapDepths(100001);
   //GameEndClip.swapDepths(100002);
   this.explosion.visible = false;
   this.on("mousedown", function ()
   {
    self.pointer.gotoAndStop(1);
   });
   this.on("pressup", function ()
   {
    self.pointer.gotoAndStop(0);
   });
   this.on("tick", function ()
   {
    timer();
    run();
    if (time > 2)
    {
        for (var i = 1; i <= 4; i++)
        {
            fire();
        } // end of for
    } // end if
   });
   
   stage.on("stagemousemove", function()
   {
    self.pointer.x = stage.mouseX/ratio;
    self.pointer.y = stage.mouseY/ratio;
    self.pointer.rotation = -(500 / 2 - stage.mouseX/ratio) / 10;
   });  
  }

  this.frame2 = function(){
   this.removeAllEventListeners("tick"); //onEnterFrame;
   this._char.gotoAndStop(7); 
   
  }
  
  this.frame30 = function(){
    for (var p in this.children)
    {
      this.removeChild(this.children[p])
    } // end of for...in
    for(var i = 1; i < 4; i++){
       this["fuse" + i].init()
    } 
    this.gotoAndStop(0); 
  }
	// Layer 31
	this.instance = new lib.sprite46();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(30));

	// Layer 30
	this.instance_1 = new lib.shape45("synched",0);
	this.instance_1.setTransform(447.8,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(30));

	// Layer 29
	this.instance_2 = new lib.sprite49();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.859},0).to({alpha:0.922},1).wait(1).to({alpha:0.984},0).wait(1).to({alpha:1},0).wait(19));

	// Layer 28
	this.explosion = new lib.sprite42();
	this.explosion.setTransform(76,55.5);

	this.timeline.addTween(cjs.Tween.get(this.explosion).to({_off:true},11).wait(19));

	// Layer 27
	this.pointer = new lib.sprite39();
	this.pointer.setTransform(175.6,181.3);

	this.timeline.addTween(cjs.Tween.get(this.pointer).to({_off:true},11).wait(19));

	// Layer 26
	this.puffs = new lib.sprite38();
	this.puffs.setTransform(550,158);

	this.timeline.addTween(cjs.Tween.get(this.puffs).to({_off:true},11).wait(19));


	// Layer 25
	this.fuse3 = new lib.sprite28();
	this.fuse3.setTransform(425,53.5);

	this.timeline.addTween(cjs.Tween.get(this.fuse3).to({_off:true},11).wait(19));

	// Layer 24
	this.fuse2 = new lib.sprite28();
	this.fuse2.setTransform(250,53.5);

	this.timeline.addTween(cjs.Tween.get(this.fuse2).to({_off:true},11).wait(19));

	// Layer 23
	this.fuse1 = new lib.sprite28();
	this.fuse1.setTransform(75,53.5);
  
	this.timeline.addTween(cjs.Tween.get(this.fuse1).to({_off:true},11).wait(19));

	// Layer 22
	this._char = new lib.sprite24();
	this._char.setTransform(250,327.5,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this._char).to({_off:true},11).wait(19));
  
  var flame = new cjs.Container();
  this.timeline.addTween(cjs.Tween.get(flame).to({_off:true},11).wait(19));
  
  // background
	var background = new cjs.Container();
	
	// Layer 21
	this.instance_3 = new lib.sprite22();
	this.instance_3.setTransform(425.6,25.7,0.692,0.692);


	// Layer 20
	this.instance_4 = new lib.sprite22();
	this.instance_4.setTransform(251.1,26.2,0.692,0.692);


	// Layer 19
	this.instance_5 = new lib.sprite22();
	this.instance_5.setTransform(76,25.7,0.692,0.692);

	// Layer 18
	this.instance_6 = new lib.shape21("synched",0);

	// Layer 17
	this.instance_7 = new lib.sprite16();
	this.instance_7.setTransform(213.9,252,0.733,0.733);

	// Layer 16
	this.instance_8 = new lib.sprite13();
	this.instance_8.setTransform(16.2,252,0.733,0.733);

	// Layer 15
	this.instance_9 = new lib.sprite13();
	this.instance_9.setTransform(494.9,252,0.733,0.733);

	// Layer 14
	this.instance_10 = new lib.shape20("synched",0);

	// Layer 13
	this.instance_11 = new lib.sprite13();
	this.instance_11.setTransform(94.9,251.5,0.654,0.654);
	
	// Layer 12
	this.instance_12 = new lib.shape19("synched",0);

	// Layer 11
	this.instance_13 = new lib.sprite16();
	this.instance_13.setTransform(53.7,147.3,0.648,0.648);
	
	// Layer 10
	this.instance_14 = new lib.sprite16();
	this.instance_14.setTransform(415.3,250.3,0.648,0.648);
	
	// Layer 9
	this.instance_15 = new lib.shape18("synched",0);

	// Layer 8
	this.instance_16 = new lib.sprite16();
	this.instance_16.setTransform(438.3,147.6,0.648,0.648);
	
	// Layer 7
	this.instance_17 = new lib.sprite11();
	this.instance_17.setTransform(421.4,148.1,0.648,0.648);

	// Layer 6
	this.instance_18 = new lib.sprite13();
	this.instance_18.setTransform(302.5,247.9,0.654,0.654);

	// Layer 5
	this.instance_19 = new lib.shape15("synched",0);

	// Layer 4
	this.instance_20 = new lib.sprite13();
	this.instance_20.setTransform(263.8,147.3,0.648,0.648);


	// Layer 3
	this.instance_21 = new lib.sprite11();
	this.instance_21.setTransform(246.8,149.1,0.648,0.648);


	// Layer 2
	this.instance_22 = new lib.sprite11();
	this.instance_22.setTransform(36.8,148.1,0.648,0.648);


	// Layer 1
	this.instance_23 = new lib.shape10("synched",0);
	
	background.addChild(this.instance_23, this.instance_22, this.instance_21, this.instance_20, this.instance_19, this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_11,this.instance_10,this.instance_9,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3);
  background.cache(0, 0, 500, 336);
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:background}]}).wait(30));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(28).call(this.frame30))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-30,721.2,373.6);


// symbols:
(lib.image44 = function() {
	this.initialize(img.image44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite48 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var self = this;
  this.frame1 = function(){this.stop()}
  this.frame2 = function(){
   var damp = 7.000000E-001;
   
   for (var i = 1; i <= 20; i++)
   {
    this["puff" + i] = new lib.sprite5Puff();
    this.addChild(this["puff" + i]); 
    this["puff" + i].rotation = Math.random() * 360;
    this["puff" + i].scaleX = this["puff" + i].scaleY = (Math.random() * 40 + 80)/100;
    this["puff" + i].velX = Math.random() * 40 - 20;
    this["puff" + i].velY = Math.random() * 40 - 20;
    this["puff" + i].step = Math.random() * 10 + 10;
    this["puff" + i].on("tick",  function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step/100;
        if (evt.currentTarget.scaleX <= 0)
        {
          self.removeChild(evt.currentTarget);     //this.removeMovieClip();
        } // end if
    });
   } // end of for
   
  }
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame_0 = function(){this.stop()}
	// timeline functions:
	this.frame_1 = function() {
		playSound("sound4fuse",2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD900").s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image44(); //cjs.Shape();
	//this.shape.graphics.bf(img.image44).s().p("AnBBKIAAiTIODAAIAACTg");
  this.shape.setTransform(-45,-7.5);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape43 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AjvjvQBjhkCMAAQCNAABjBkQBkBjAACMQAACNhkBjQhjBkiNAAQiMAAhjhkQhkhjAAiNQAAiMBkhjg");
	this.shape.setTransform(-34.9,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFD900","#FFA800"],[0,1],0,0,0,0,0,34.7).s().p("AjvDwQhjhkgBiMQABiLBjhkQBkhjCLAAQCNAABjBjQBkBkAACLQAACMhkBkQhjBjiNAAQiLAAhkhjg");
	this.shape_1.setTransform(-34.9,-0.4);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("ADwDwQhjBkiNAAQiMAAhjhkQhkhjAAiNQAAiMBkhjQBjhkCMAAQCNAABjBkQBkBjAACMQAACNhkBjg");
	this.shape_2.setTransform(12,-24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFD900","#FFA800"],[0,1],0,0,0,0,0,34.7).s().p("AjvDwQhjhjAAiNQAAiMBjhjQBjhkCMAAQCNAABjBkQBjBjAACMQAACNhjBjQhjBjiNABQiMgBhjhjg");
	this.shape_3.setTransform(12,-24.4);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AAAmGQCiAAByBzQBzByAAChQAACihzByQhyBziiAAQihAAhyhzQhzhyAAiiQAAihBzhyQByhzChAAg");
	this.shape_4.setTransform(-6.9,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFD900","#FFA800"],[0,1],0,0,0,0,0,40.3).s().p("AkTEUQhyhzAAihQAAihByhyQByhzChABQChgBBzBzQByByABChQgBChhyBzQhzByihAAQihAAhyhyg");
	this.shape_5.setTransform(-6.9,13.5);

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AGaAAQAACqh4B4Qh4B4iqAAQipAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4QB4B4AACpg");
	this.shape_6.setTransform(-49.9,37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFC300","#FF8000"],[0,1],0,0,0,0,0,42.2).s().p("AkhEiQh4h5ABipQgBipB4h4QB5h3CogBQCqABB4B3QB4B4gBCpQABCph4B5Qh4B4iqgBQioABh5h4g");
	this.shape_7.setTransform(-49.9,37.5);

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AHMAAQAAC+iHCHQiHCHi+AAQi9AAiHiHQiHiHAAi+QAAi9CHiHQCHiHC9AAQC+AACHCHQCHCHAAC9g");
	this.shape_8.setTransform(23,39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFC300","#FF8000"],[0,1],0,0,0,0,0,47.4).s().p("AlEFFQiHiHAAi+QAAi9CHiHQCHiHC9ABQC+gBCHCHQCHCHAAC9QAAC+iHCHQiHCHi+AAQi9AAiHiHg");
	this.shape_9.setTransform(23,39.5);

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AkMkMQBwhvCcAAQCdAABvBvQBwBwAACcQAACdhwBvQhvBwidAAQicAAhwhwQhvhvAAidQAAicBvhwg");
	this.shape_10.setTransform(63,-7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFC300","#FF8000"],[0,1],0,0,0,0,0,38.4).s().p("AkMEMQhuhvAAidQAAicBuhvQBwhvCcgBQCdABBvBvQBwBvgBCcQABCdhwBvQhvBvidABQicgBhwhvg");
	this.shape_11.setTransform(63,-7.4);

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("AE+E+QiECEi6AAQi5AAiEiEQiEiEAAi6QAAi5CEiEQCEiEC5AAQC6AACECEQCECEAAC5QAAC6iECEg");
	this.shape_12.setTransform(11,-40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFC300","#FF8000"],[0,1],0,0,0,0,0,46.2).s().p("Ak9E9QiDiDgBi6QABi5CDiEQCEiEC5AAQC6AACECEQCDCEAAC5QAAC6iDCDQiECFi6AAQi5AAiEiFg");
	this.shape_13.setTransform(11,-40.4);

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF6600").ss(1,1,1,3,true).p("Ak9k9QCEiEC5AAQC6AACECEQCECEAAC5QAAC6iECEQiECEi6AAQi5AAiEiEQiEiEAAi6QAAi5CEiEg");
	this.shape_14.setTransform(-55.9,-22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFC300","#FF8000"],[0,1],0,0,0,0,0,46.2).s().p("Ak9E9QiEiDABi6QgBi5CEiEQCEiEC5AAQC6AACDCEQCFCEAAC5QAAC6iFCDQiDCEi6ABQi5gBiEiEg");
	this.shape_15.setTransform(-55.9,-22.4);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-85.4,202,171);


(lib.shape41 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABwA5QgjAVhQgGQhTgGgZgbIAVhfQAYgWBDAHQBCAGAXAZgABdArQgcgRhDgEQhEgFgXAO");
	this.shape.setTransform(8.9,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgDBIQhTgGgZgbIAVhfQAYgWBDAHQBCAGAXAZIAWBhQgbAQg3AAIghgBgAgCAWQBDAEAcARQgcgRhDgEIgBAAIgCAAIgBAAIgagBIAAAAIgBAAQgqAAgRAKIgBAAIABAAQARgKAqAAIABAAIAAAAIAaABIABAAIACAAIABAAg");
	this.shape_1.setTransform(8.9,42.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ahdj0QgQgDgIAPQgJAPgCAPQgCAPAKATIAIAMIgHgDIgdAEQgQAHAFASIARBIIgGBgIgDAEQgRAcAEAjQAFAjAZAWIAAABQAIAlAlARIAoATQAlARAqgMQAtgMAbgiIAegnQAaghgHgkQAJgHAEgMQAEgOgHgMIg0heQgHgNgOgEIgVAAIgGgKQgGgMgOgFQgOgEgNAHIgBABIgJgPIgEgLIg/hjQgQgZgOgCgABDhFIAuBVQAHANgEANQgEAOgMAHIgFACAhBhTIABAOIAAAFIAAAFIAAAJIgEBCQAHADAHAGQAIgFAJgEIABAEAhBhTIAEAIIACACIAWBZAANhcIAlBGQAKATgGAUIgJAUAhwicIAvBJ");
	this.shape_2.setTransform(10.7,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxDsIgogTQglgRgIglIAAgBQgZgWgFgjQgEgjARgcIADgEIAGhgIgRhIQgFgSAQgHIAdgEIAHADIgIgMQgKgTACgPQACgPAJgPQAIgPAQADQAOACAQAZIA/BjIAEALIAJAPIABgBQANgHAOAEQAOAFAGAMIAGAKIAVAAQAOAEAHANIA0BeQAHAMgEAOQgEAMgJAHQAHAkgaAhIgeAnQgbAigtAMQgSAFgOAAQgZAAgWgKgAB0AqQgEAOgMAHIgFACIAFgCQAMgHAEgOIACgKQAAgIgFgIIguhVIAuBVQAFAIAAAIIgCAKgAA2ARIgJAUIAJgUQACgIAAgHQAAgMgGgMIglhGIAlBGQAGAMAAAMQAAAHgCAIgAhAhFIAAAFIAAAFIAAAJIgEBCQAHADAHAGIARgJIABAEIgBgEIgWhZIgCgCIgEgIgAhBhTIgvhJg");
	this.shape_3.setTransform(10.7,15.5);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAZg6IhYA8QgMAIgDAOQgDAOAIAMQAJAMAOADQAOACAMgIIBZg8QALgIADgOQADgOgJgMQgIgMgOgCQgOgDgMAIg");
	this.shape_4.setTransform(8,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgyBBQgOgDgJgMQgIgMADgOQADgOAMgIIBYg8QAMgIAOADQAOACAIAMQAJAMgDAOQgDAOgLAIIhZA8QgJAGgKAAIgHAAg");
	this.shape_5.setTransform(8,13.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-9.1,33.3,58.7);


(lib.shape40 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABdArQgcgRhDgEQhEgFgXAOABwA5QgjAVhQgGQhTgGgZgbIAVhfQAYgWBDAHQBCAGAXAZg");
	this.shape.setTransform(7.9,43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgDBIQhTgGgZgbIAVhfQAYgWBDAHQBCAGAXAZIAWBhQgbAQg2AAIgigBgAgCAWQBDAEAcARQgcgRhDgEIgBAAIgCAAIAAAAIgbgBIAAAAIgBAAQgrAAgRAKQARgKArAAIABAAIAAAAIAbABIAAAAIACAAIABAAg");
	this.shape_1.setTransform(7.9,43.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AA9hYIgBgGIgBgHIgUh0QgEgdgNgIQgOgJgLALQgOAKgIANQgIAOADAVIASBtIADAIIgFBfIABAMQgKAEgIAGQgRgNgTAAIgHg/IgDgQQgFgRgIgRQgQgagMgGQgNgHgMgCQgOgBgOAJQgQAKAIARIAeBHIAJBeIADAMQgEASADAVQAGAjAYAUIABABQAJAkAlARIApARQAjARAsgOQAtgMAZgjIAegoQAXgggGgiIAEgIQAFgOgGgNIgthiQgGgNgOgFIgPgCIAlBVQAGANgGAOQgFANgNAGIgJACABjg1IgGgOQgFgNgOgGIgNgCIAUBYQAEAUgLAUIgGAJAhKgkIAAgFQgBgGgCgF");
	this.shape_2.setTransform(7.4,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUD6IgpgRQglgRgJgkIgBgBQgYgUgGgjQgDgVAEgSIgDgMIgJheIgehHQgIgRAQgKQAOgJAOABQAMACANAHQAMAGAQAaQAIARAFARIADAQIAHA/QATAAARANQAIgGAKgEIgBgMIAFhfIgDgIIgShtQgDgVAIgOQAIgNAOgKQALgLAOAJQANAIAEAdIAUB0IABAHIABAGIANACQAOAGAFANIAGAOIAPACQAOAFAGANIAtBiQAGANgFAOIgEAIQAGAigXAgIgeAoQgZAjgtAMQgTAGgTAAQgVAAgUgJgACIA7QgFANgNAGIgJACIAJgCQANgGAFgNQADgHAAgHQAAgGgDgHIglhVIAlBVQADAHAAAGQAAAHgDAHgABKAoIgGAJIAGgJQAIgPAAgPIgBgKIgUhYIAUBYIABAKQAAAPgIAPgAhKgkgAhNg0QACAFABAGIAAAFgAhNg0IAAAAg");
	this.shape_3.setTransform(7.4,15.5);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgWA8IBWg+QAMgJACgOQACgOgIgMQgIgMgPgCQgOgCgLAIIhXA+QgMAJgCAOQgCAOAIAMQAIAMAPACQAOACAMgIg");
	this.shape_4.setTransform(6.9,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgwBCQgPgCgIgMQgIgMACgOQACgOAMgJIBXg+QALgIAOACQAPACAIAMQAIAMgCAOQgCAOgMAJIhWA+QgKAGgLAAIgFAAg");
	this.shape_5.setTransform(6.9,15.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.3,36.6,61.1);


(lib.shape36 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD900").s().p("AgHAEIAAgFIAEgGIAFAAIAGAEIAAAFIgEAFIgFABg");
	this.shape.setTransform(-0.3,-6.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD900").s().p("AgHAEIAAgFQABgEADgCIAFAAIAGAEIAAAFIgEAFIgFABg");
	this.shape_1.setTransform(3.9,3.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD900").s().p("AgHAEIgBgFQABgEADgCIAGAAQAEABABADQACADgBACIgFAFIgFABg");
	this.shape_2.setTransform(-6.6,1.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,217,0,0.498)").s().p("AgiAfIhxA3IBghRIhygzIB8AYIgpigIBGCVIBLhjIg0BzICbgFIiXAhIBQBhIhihKIgeCVg");
	this.shape_3.setTransform(1.3,0.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-17.8,33.3,36.7);


(lib.shape35 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD900").s().p("AgFAGQgDgDAAgDQAAgCADgDIAFgDIAGADIADAFIgDAGIgGADg");
	this.shape.setTransform(8.9,-0.7);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD900").s().p("AgFAGIgDgGIADgFQADgDACAAQADAAADADQADADAAACIgDAGIgGADg");
	this.shape_1.setTransform(-0.9,8.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD900").s().p("AgFAGIgDgGIADgFIAFgDQADAAADADIADAFIgDAGIgGADg");
	this.shape_2.setTransform(-9.8,0.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAFAFQAGAGAAAGQAAAHgGAFQgFAGgHAAQgGAAgGgGg");
	this.shape_3.setTransform(0.2,0.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD900").s().p("AgdAWIhSAJIBOgcIg5g5IBFArIAIhvIAMBvIBEgrIg5A5IBlAeIhpgLIAZBOIgphFIg6Bcg");
	this.shape_4.setTransform(1.3,-0.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-12.6,23.3,24.8);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(1,1,1,0)").s().p("Ah7B7QgzgzABhIQgBhHAzg0QA0gzBHABQBIgBAzAzQAzA0AABHQAABIgzAzQgzAzhIAAQhHAAg0gzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.4,35,35);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#946F38").ss(1,1,1).p("AARr6IAABkIAACWQAZAygZAyIAACWIAABlIAACWQAUAygUAwIAACWIAABkIAACWQAOAygOAyIAACWIAABkIAACWIAEAbQgagSgUAPQgJg3ANgtIAAiWQgQgyAQgyIAAiWIAAhkIAAiXQgGgyAGgyIAAiWIAAhiIAAiWQgPgvAPg1IAAiWIAAhkIAAiWQgQgyAQgyIAAiWIAAgNQAVgZARAZQAMAtgMAsIAACWIgmhMAARPbIgmhMAARuQIgmhMAARqWIgmhMAARmcIgmhMAARihIgmhNAARBXIgmhNAARFRIgmhNAARJLIgmhMAARNFIgmhMAARoAIgmhMAARkGIgmhMAARgLIgmhNAARDtIgmhNAARHnIgmhMAARLhIgmhM");
	this.shape.setTransform(0.2,100.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEC16B").s().p("AgZPzQgJg3ANgtIAAiWQgQgzAQgxIAAiXIAAhjIAAiXQgGgxAGgzIAAiVIAAhjIAAiVQgPgwAPg0IAAiXIAAhjIAAiXQgQgxAQgzIAAiWIAAgNQAVgZARAZQAMAtgMAtIgmhNIAmBNIAACWIgmhNIAmBNIAABkIgmhNIAmBNIAACVQAZAzgZAxIgmhMIAmBMIAACWIgmhLIAmBLIAABkIgmhLIAmBLIAACXQAUAygUAwIgmhMIAmBMIAACWIgmhNIAmBNIAABkIgmhNIAmBNIAACVQAOAzgOAyIgmhNIAmBNIAACVIgmhLIAmBLIAABkIgmhLIAmBLIAACWIAEAcQgagSgUAPgAARPaIgmhLgAARHmIgmhLgAARgLIgmhNgAARoAIgmhLgAARuPg");
	this.shape_1.setTransform(0.2,100.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-1.2,6.1,202.9);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOPnIAAgHQAGgIAAgHQAAgLgGgHIAAgoIAEgDQACgEAAgFQABgKgHgDIAAk9IAGgFQAEgIAAgIQAAgQgKgFIAAheIAFgFQADgEAAgFQAAgMgIgDIAAgnIAKgIQAEgJAAgHQAAgUgOgEIAAjrIAJgHQAEgDAAgGQAAgLgNgDIAAhoQAEgFAAgFQAAgHgEgEIAAhQIAFgGQADgEAAgFQAAgJgIgDIAAguQAGgJAAgHQAAgLgGgHIAAhQQAFgCADgFQAFgHAAgIQAAgSgNgGIAAggIAFgEQADgFAAgEQAAgKgIgEIAAkqQAIABAFgHQABgEAAgFQAAgQgOAAIAAhSIAGgGQADgEAAgFQAAgLgJgEIAAh5IAdAAIAAAkQgLADAAAKQAAAFADAEIAIAGIAAECQgHADAAAJQACAJAFAFIAABVQgPgBAAAQQABAQAOAAIAADhQgIADAAALQABALAHAEIAAECQgQACAAAVIACANQAFAIAJACIAACNQgJACAAANQAAALAJADIAABOQgIAEAAAKQABALAHAEIAAEwQgJADAAAMQABALAIADIAABDQgHAEAAAJQABAKAGAEIAAA6QgPADAAAVIADANIAMALIAABTQgPACAAAWIADAMQAEAHAIAEIAAAXQgJACAAALg");
	this.shape.setTransform(0,100);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,0,3,200);


(lib.shape27 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AAHBUQgQgBgRgTQgTgWgGgjQgFggALgcQALgbAWgDQATgDATAWQAUAXAGAiIACARQAAANgDAL");
	this.shape.setTransform(-16.7,-29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD900").s().p("AAHBUQgQgBgRgTQgTgWgGgjQgFggALgcQALgbAWgDQATgDATAWQAUAXAGAiIACARQAAANgDALIgFATQgLAbgWADIgDABg");
	this.shape_1.setTransform(-16.7,-29);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6600").ss(1,1,1).p("AgzAUQgBgNACgOQAEgeATgUQATgTATADQAVADAMAYQAMAZgFAdQgFAegSAUQgOAOgOAC");
	this.shape_2.setTransform(11.8,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD900").s().p("AgKBKQgVgDgNgYQgFgNgCgOQgBgNACgOQAEgeATgUQATgTATADQAVADAMAYQAMAZgFAdQgFAegSAUQgOAOgOACg");
	this.shape_3.setTransform(11.8,-32.2);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(1,1,1).p("AAJAgIA/gHQAJgzgOgRIgGgFQg6AeAGAygAA9gwQgLgIgWAHQgQAFglAUIgNAHQAvAXgRAfIARgFAgIAlQgZAGgVAKAhKgDQALgCAZgM");
	this.shape_4.setTransform(-2.4,-38.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0A70F").s().p("AATgoIAGAFQANASgJAzIg8AHQgHgzA5geg");
	this.shape_5.setTransform(1.7,-39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgxgJIANgHQAlgUAQgFQAWgHALAIQg4AeAGAyIgTAFQATgfgxgXg");
	this.shape_6.setTransform(-1.3,-39.2);

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AAAAVQgGgBgEgGQgDgHAAgHIAFgPQAFgFAEAAQAGABADAGQAFAHgBAHQgBAIgFAGQgEAGgEAAIAAAAg");
	this.shape_7.setTransform(-9.7,-66);

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AAAAWQgGgBgEgHQgEgGAAgIQABgJAFgHIAJgFQAGAAAEAHQAEAHgBAHQAAAKgFAGQgEAGgFAAIAAAAg");
	this.shape_8.setTransform(-1.4,-65.2);

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF6600").ss(1,1,1).p("AB8ANQgKA3gdAiQgcAjgfgGQgagEgOgiQgcAggegGQgfgGgPgoQgPgoAKgxQAJgzAcggQAOgQAPgHQAOgHAQADQAYAFANAaIAFgHQARgVATgGIAXgCQAfAGAOAqQAPArgKA1gAgOBdIgDgKQgHgUgCgY");
	this.shape_9.setTransform(-6.6,-58);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaCDQgagEgOgiIgDgKQgHgUgCgYQACAYAHAUIADAKQgcAggegGQgfgGgPgoQgPgoAKgxQAJgzAcggQAOgQAPgHQAOgHAQADQAYAFANAaIAFgHQARgVATgGIAXgCQAfAGAOAqQAPArgKA1QgKA3gdAiQgYAegaAAIgJgBgAgOBdg");
	this.shape_10.setTransform(-6.6,-58);

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#FFD900","#FF6600"],[0,1],-1,-21.9,1.2,22.1).ss(1,1,1).p("ADrgDQAEBYhBBBQhCBChhACQhfAChIg/QhJg+gEhaQgFhZBBhBQBChCBhgCQBggCBIA/QBIA+AFBbg");
	this.shape_11.setTransform(-4.5,-52);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD900").s().p("AicCdQhJg+gEhaQgFhZBBhBQBChCBhgCQBggCBIA/QBIA+AFBbQAEBYhBBBQhCBChhACIgGAAQhcAAhFg9g");
	this.shape_12.setTransform(-4.5,-52);

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF6600").ss(1,1,1).p("ACZgWQgTAOgZACIAKA4QAGAjgVAcQgUAdgiAFQgjAGgagUQgdgUgFgjIgLg8QgSAKgZAAQgfAAgWgQQgWgOAAgXQAAgWAWgQQAWgQAfAAIAfAFQADgUAMgSQAVgcAggGQAigGAdAUIAQAQIAWgDQAeAAAWARQAWAQAAAYQAAAXgWARg");
	this.shape_13.setTransform(-3,-22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD900").s().p("AgLCFQgdgUgFgjIgLg8QgSAKgZAAQgfAAgWgQQgWgOAAgXQAAgWAWgQQAWgQAfAAIAfAFQADgUAMgSQAVgcAggGQAigGAdAUIAQAQIAWgDQAeAAAWARQAWAQAAAYQAAAXgWARQgTAOgZACIAKA4QAGAjgVAcQgUAdgiAFIgQACQgZAAgUgQg");
	this.shape_14.setTransform(-3,-22.9);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.1,-73.8,47.1,65.8);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("ABBg8QgDAJgKAKQgcAdAHAcQAHAdgLAYQgMAYgXAAQgZAAgRgeQgQgdADgkQADglAlgqIALgL");
	this.shape.setTransform(-2.9,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD900").s().p("AgyBHQgRgeADglQADgkAlgqIAMgLQAMgMANgCQARgDAQANIAKAJQAMANgEAOQgCAKgKAKQgdAdAHAbQAHAegLAYQgLAYgXAAQgZAAgRgeg");
	this.shape_1.setTransform(-2.9,8.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-1.9,13.2,20.2);


(lib.shape23 = function() {
	this.initialize();

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("Ag3CyIAAljIBvAAIAAFjg");
	this.shape.setTransform(-4.5,60.4);

	// Layer 18
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.302)").s().p("AgzA0QgWgWAAgeQAAgdAWgWQAWgVAdgBQAfABAVAVQAVAWAAAdQAAAegVAWQgVAWgfAAQgdAAgWgWg");
	this.shape_1.setTransform(-1.1,42);

	// Layer 17
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#532F0F").ss(1,1,1).p("AByAAQAAAvgiAhQghAigvAAQguAAgigiQghghAAgvQAAguAhghQAighAuAAQAvAAAhAhQAiAhAAAug");
	this.shape_2.setTransform(-1.1,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E3510").s().p("AhQBQQggghAAgvQAAguAggiQAiggAuAAQAvAAAhAgQAhAiABAuQgBAvghAhQghAhgvABQgugBgighg");
	this.shape_3.setTransform(-1.1,42.1);

	// Layer 16
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#563110").ss(1,1,1).p("ACphJIAAg4QAAgEADgDID+AAQAEACAAAFIAAA4QAAADgEACIhIAAIgBADIADDMIgFAGIheACQgDgDAAgDIAAjSIgBABIhRAAQgDgCAAgDgAAxiSIBWABQAEABAAAFIgDEXIhaADIhZijIgBgBIgBgEIgCChIgFAEIhTADIgEgGIAAkUIAEgHIBcABIAAAEIBWCeIACABIABABIgBiegAmqiIID+AAIAEAHIAAA4QAAADgEACIhHAAIgBADIACDMIgFAGIheACIgCgGIAAjSIgBABIhSAAIgDgFIAAg4g");
	this.shape_4.setTransform(0.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.451)").s().p("AD+CNIAAjSIgBABIhRAAQgDgCgBgDIAAg4QABgDADgDID+AAQAEACAAAEIAAA4QAAADgEACIhIAAIgBAEIADDLIgFAFIheACQgDgCAAgDgAlXCNIAAjSIgBABIhSAAIgDgFIAAg4IADgGID+AAIAFAGIAAA4QAAADgFACIhHAAIgBAEIADDLIgGAFIhdACgAgrgUIgBAAIgBgFIgCCgIgEAFIhTADIgFgGIAAkUIAEgGIBcAAIAAAEIBXCeIABABIACAAIgBidIADgGIBXAAQADACAAAEIgCEXIhaADg");
	this.shape_5.setTransform(0.2,0);

	// Layer 15
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.149)").s().p("AC/JuQDyhyBaj6QBaj6hyjwQhxjxj7haQj4hajxBxQjBBchgCxQBjjiDlhsQD9h3EDBeQEGBeB3D9QB3D8heEEQhfEGj8B3QhqAyhrANQBKgQBKgjg");
	this.shape_6.setTransform(1.9,-0.3);

	// Layer 14
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#563110").ss(2,1,1).p("AAAqgQEWAADFDFQDGDGAAEVQAAEWjGDFQjFDGkWAAQkVAAjFjGQjGjFAAkWQAAkVDGjGQDFjFEVAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#75411E").s().p("AnaHbQjGjFAAkWQAAkVDGjGQDFjFEVAAQEWAADFDFQDGDGAAEVQAAEWjGDFQjFDGkWAAQkVAAjFjGg");

	// Layer 13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AAhAmIhAhL");
	this.shape_9.setTransform(-42.8,-58.4);

	// Layer 12
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AAmAUIhMgo");
	this.shape_10.setTransform(-68,-24.2);

	// Layer 11
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AAmgQIhMAi");
	this.shape_11.setTransform(-68.6,23.4);

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AAbgdIg0A7");
	this.shape_12.setTransform(-51.8,50.4);

	// Layer 9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AALgsIgVBZ");
	this.shape_13.setTransform(-16.1,69.9);

	// Layer 8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AgRgjIAjBG");
	this.shape_14.setTransform(24,68.4);

	// Layer 7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AgpgdIBSA7");
	this.shape_15.setTransform(56.4,45);

	// Layer 6
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AgvgEIBeAJ");
	this.shape_16.setTransform(71.4,12.6);

	// Layer 5
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AglAYIBMgv");
	this.shape_17.setTransform(66.3,-31.7);

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AgWAeIAug7");
	this.shape_18.setTransform(37.8,-61.7);

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.251)").ss(1.5,1,1).p("AAAAvIAAhe");
	this.shape_19.setTransform(-1.1,-72.5);

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#4B2C0E").ss(2.5,1,1).p("AInomQDlDkAAFCQAAFDjlDkQjkDllDAAQlCAAjkjlQjljkAAlDQAAlCDljkQDkjlFCAAQFDAADkDlg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#844922").s().p("AomInQjljkAAlDQAAlCDljkQDkjlFCAAQFDAADkDlQDlDkAAFCQAAFDjlDkQjkDllDAAQlCAAjkjlg");

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.149)").s().p("AhRKuQh1gdj/goQgtgjgqgpQjgjgAAk9QAAk8DgjgQDgjgE8AAQE9AADfDgQDhDgAAE8QAAE9jhDgQgpApCdAjQg1AoAEAdQicBPi9AAQi8AAibhPg");
	this.shape_22.setTransform(-36.1,6.7);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.6,-77.9,190.7,161.3);


(lib.shape21 = function() {
	this.initialize();

	// Layer 24
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#404040","#7B7B7B"],[0,1],-0.4,-7.4,-0.4,21.6).s().p("Egn/ACCIAAkCMBP/AAAIAAECg");
	this.shape.setTransform(256,330.5);

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.302)").s().p("Egp3AAmIAAhLMBTvAAAIAABLg");
	this.shape_1.setTransform(250,73.8);

	// Layer 22
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3B1D00").ss(1.5,1,1).p("EAp4AA/MhTvAAAIAAh+MBTvAAAg");
	this.shape_2.setTransform(250,77.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E2F00").s().p("Egp3ABAIAAh+MBTvAAAIAAB+g");
	this.shape_3.setTransform(250,77.6);

	// Layer 21
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AggAeIAAh+IBBBDIAAB+g");
	this.shape_4.setTransform(353.2,112.1);

	// Layer 20
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("Ag9gxIB7ASIgFBPIh0ACg");
	this.shape_5.setTransform(362.6,83.5);

	// Layer 19
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AhdAeIA9g7IB+AAIg9A7g");
	this.shape_6.setTransform(394.9,87.4);

	// Layer 18
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AggAeIg9g7IB+AAIA9A7g");
	this.shape_7.setTransform(327.5,86.4);

	// Layer 17
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.302)").s().p("AgRASQgIgIAAgKQAAgJAIgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAIgKAAQgKAAgHgIg");
	this.shape_8.setTransform(361.7,116.3);

	// Layer 16
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#575757").ss(1,1,1).p("AASgRQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIQgHgHAAgLQAAgJAHgIQAIgHAJAAQALAAAHAHg");
	this.shape_9.setTransform(362.4,114.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgIAJAAQAKAAAIAIQAIAHAAAKQAAAKgIAIQgIAHgKAAQgJAAgIgHg");
	this.shape_10.setTransform(362.4,114.9);

	// Layer 15
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3B1D00").ss(1.5,1,1).p("AA7yGMAAAAkMIh1AAMAAAgkMg");
	this.shape_11.setTransform(362.5,199.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E2F00").s().p("Ag6SHMAAAgkNIB1AAMAAAAkNg");
	this.shape_12.setTransform(362.5,199.3);

	// Layer 14
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#482400").s().p("AkAjAIA9hDIHEHEIg9BDg");
	this.shape_13.setTransform(342.3,101.2);

	// Layer 13
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#482400").s().p("AkADBIHEnEIA9BDInEHEg");
	this.shape_14.setTransform(382.3,100.2);

	// Layer 12
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("AggAeIAAh+IBBBDIAAB+g");
	this.shape_15.setTransform(128.7,112.1);

	// Layer 11
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.2)").s().p("Ag9gxIB7ASIgFBPIh0ACg");
	this.shape_16.setTransform(138.1,83.5);

	// Layer 10
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.2)").s().p("AhdAeIA9g7IB+AAIg9A7g");
	this.shape_17.setTransform(170.4,87.4);

	// Layer 9
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("AggAeIg9g7IB+AAIA9A7g");
	this.shape_18.setTransform(103,86.4);

	// Layer 8
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.302)").s().p("AgRASQgIgIAAgKQAAgJAIgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAIgKAAQgJAAgIgIg");
	this.shape_19.setTransform(137.1,116.3);

	// Layer 7
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#575757").ss(1,1,1).p("AASASQgIAIgKAAQgJAAgIgIQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAALgHAHg");
	this.shape_20.setTransform(137.9,114.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgIAJAAQAKAAAIAIQAIAHAAAKQAAAKgIAIQgIAHgKAAQgJAAgIgHg");
	this.shape_21.setTransform(137.9,114.9);

	// Layer 6
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3B1D00").ss(1.5,1,1).p("AA7yGMAAAAkMIh1AAMAAAgkMg");
	this.shape_22.setTransform(138,199.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E2F00").s().p("Ag6SHMAAAgkNIB1AAMAAAAkNg");
	this.shape_23.setTransform(138,199.3);

	// Layer 5
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#482400").s().p("AkAjAIA9hDIHEHEIg9BDg");
	this.shape_24.setTransform(117.8,101.2);

	// Layer 4
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#482400").s().p("AkADBIHEnEIA9BDInEHEg");
	this.shape_25.setTransform(157.8,100.2);

	// Layer 3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.102)").s().p("ABGBHQhygsiThhICnASIDYB7g");
	this.shape_26.setTransform(126.3,308.4);

	// Layer 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.102)").s().p("Ai/hSIBzgNIEMCaIh+Alg");
	this.shape_27.setTransform(350.3,307.9);

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.251)").s().p("EgxcAbvMAAAg3dMBi5AAAMAAAA3dg");
	this.shape_28.setTransform(264.6,150.6);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.9,-26.9,633.2,370.5);


(lib.shape20 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AnGHUIgUgrIguAAIgPiBIAjAAIAAgEIgBgEQgljrAYkRIACgQIAAAAIADgtIgaAAIAXiAIAlAAQAXhVAghVINOAAQAeBWAVBUIAsAAIAPCAIgbAAIAEAtIgBAAQApEOgxEGIAgAAIgXCBIgmAAIgBABIgdBdIgTA1IqJAIQi0hAgzgwg");
	this.shape.setTransform(472.9,255.2);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.102)").s().p("AnfGUIADAHIgsAAIgPiBIAkAAIgBgEIgBgEQgljrAXkQIADgRIgBAAIAEgsIgaAAIAWiBIAlAAQAYhVAghVINOAAQAeBWAVBUIArAAIAQCBIgbAAIAEAsIgBAAQApEOgxEGIAgAAIgXCBIgnAAIAAACIgdBcIgTA2IrRAjg");
	this.shape_1.setTransform(198.8,253.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIPQgGgBgFgDQgFgDgCgHQgQgogMgnIgGgIIgJgdIgbAAQgHAAgGgFQgGgFAAgHIgNhyQgBgGACgFQADgFAFgDQAEgDAGgBIAIAAQgejJAUjoIAAgDIACgJIAAgEIABgRIgBAAIgLgDIgHgJQgCgFABgGIAThyQABgGAGgFQAGgFAHAAIARAAQAThFAbhEQACgFAFgEQAFgEAGABILnAAIALADIAIAKQAYBFARBDIAXAAQAIAAAGAFQAFAFABAIIANBxIgCALIgHAIIgLADIgBAAIACARIAAAGQAhDgglDbIADAAQAGAAAFAEIAIAJIABALIgTByQgCAHgFAFQgGAEgHAAIgTAAIgWBFIgRAwIgIAJIgLAEg");
	this.shape_2.setTransform(95.4,251);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIPIgLgEIgHgKQgQgogMgoIgGgHIgJgdIgbAAQgHAAgGgFQgGgFAAgIIgNhxQgBgGACgFQADgFAFgDQAEgEAGAAIAIAAQgejJAUjoIAAgDIACgJIAAgEIABgRIgBAAIgLgDQgFgDgCgGQgCgFABgGIAThyQABgGAGgFQAGgFAHAAIARAAQAThEAbhFQACgFAFgEQAFgEAGABILnAAQAGAAAFADIAIAKQAYBFARBDIAXAAQAIAAAGAFQAFAFABAIIANByIgCAKIgHAIIgLADIgBAAIACARIAAAGQAhDgglDbIADAAQAGAAAFAEIAIAJIABALIgTByQgCAHgFAFQgGAEgHAAIgTAAIgWBFIgRAwIgIAJIgLAEg");
	this.shape_3.setTransform(303.2,246.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIPIgLgEIgHgKQgQgogMgoIgGgIIgJgcIgbAAQgHAAgGgFQgGgFAAgIIgNhxQgBgGACgFQADgFAFgDQAEgEAGAAIAIAAQgejJAUjoIAAgDIACgJIAAgEIABgRIgBAAIgLgCQgFgEgCgFQgCgGABgGIAThyQABgGAGgFQAGgFAHAAIARAAQAThEAbhFQACgFAFgEQAFgDAGAAILnAAQAGAAAFADIAIAKQAYBFARBDIAXAAQAIAAAGAFQAFAFABAIIANByIgCALIgHAIIgLACIgBAAIACARIAAAGQAhDhglDaIADAAQAGABAFADIAIAJIABALIgTBxQgCAHgFAGQgGAEgHAAIgTAAIgWBFIgRAwIgIAJIgLAEg");
	this.shape_4.setTransform(414.8,250.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.3,194.1,480.3,119.2);


(lib.shape19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIOQgGAAgFgDIgHgJQgQgogMgoIgGgIIgJgdIgbAAQgHAAgGgFQgGgFAAgHIgNhyQgBgGACgFQADgFAFgDQAEgDAGAAIAIAAQgejKAUjpIAAgCIACgJIAAgEIABgQIgBAAIgLgEQgFgDgCgGQgCgFABgGIAThyQABgGAGgFQAGgFAHAAIARAAQAThFAbhEQACgFAFgEQAFgDAGAAILnAAQAGAAAFADIAIAKQAYBEARBEIAXAAQAIAAAGAFQAFAFABAIIANBxIgCALIgHAIIgLAEIgBAAIACAQIAAAGQAhDgglDcIADAAQAGAAAFADIAIAJIABALIgTByQgCAGgFAFIgNAFIgTAAIgWBFIgRAwIgIAJIgLADg");
	this.shape.setTransform(53.8,146.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.7,94,98.2,105.4);


(lib.shape18 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AmPGoIgRgmIgpAAIgMhyIAeAAIAAgDIgBgEQggjOAUjvIADgPIgBAAIADgmIgWAAIAThyIAgAAQAVhLAdhKILmAAQAbBLASBKIAnAAIAMByIgXAAIAEAmIgBAAQAkDtgrDmIAbAAIgTByIgjAAIAAABIgZBRQgIAYgDgDIpsAIg");
	this.shape.setTransform(401.9,252);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIOIgLgDQgFgEgCgFQgQgogMgoIgGgJIgJgcIgbAAQgHAAgGgFQgGgFAAgHIgNhyQgBgGACgFIAIgJIAKgCIAIAAQgejKAUjpIAAgCIACgJIAAgDIABgRIgBAAIgLgEQgFgDgCgGQgCgFABgGIAThxQABgIAGgEQAGgFAHAAIARAAQAThEAbhEQACgHAFgDQAFgDAGgBILnAAQAGAAAFAFIAIAJQAYBEARBEIAXAAQAIAAAGAFQAFAFABAIIANBxIgCAMIgHAHIgLAEIgBAAIACAQIAAAGQAhDhglDbIADAAQAGgBAFAEIAIAIIABAMIgTBxQgCAIgFAEQgGAFgHAAIgTAAIgWBFIgRAwIgIAJIgLADg");
	this.shape_1.setTransform(438.3,147.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(354.8,94.6,132.6,207.2);


(lib.shape17 = function() {
	this.initialize();

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AmEI3IgVivIJlAAQBHCICHAngAmZmHIAfivID8AAQgLAcABAwQABAvAPA0g");
	this.shape.setTransform(-31.6,0.5);

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7C7C7C").ss(1,1,1).p("AK5BXI17AAIgUitIWtAAg");
	this.shape_1.setTransform(0,48.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939393").s().p("ArCBXIgUitIWtAAIgfCtg");
	this.shape_2.setTransform(0,48.5);

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("ApsBcIhCi3IVdAFIhGCyg");
	this.shape_3.setTransform(0,54.5);

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7C7C7C").ss(1,1,1).p("ALXBXI2tAAIAeitIV7AAg");
	this.shape_4.setTransform(0,-47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939393").s().p("ArWBXIAfitIV6AAIAUCtg");
	this.shape_5.setTransform(0,-47.4);

	// Layer 10
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.102)").s().p("Aq4BfIAPi4IVNgEIAVC8g");
	this.shape_6.setTransform(0,-42.1);

	// Layer 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.102)").s().p("AoWMOQkqsWEqsFIEVAAQhuCiAsFLQAtFKEQEIQEOEJDZgaQDagagPAvQgeBsgoBsg");
	this.shape_7.setTransform(-3.5,-0.9);

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAvsLQi6MLC6MM");
	this.shape_8.setTransform(-51.2,-1.2);

	// Layer 7
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAasIQhoMIBoMJ");
	this.shape_9.setTransform(-27.1,0);

	// Layer 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgusLQC6MLi6MM");
	this.shape_10.setTransform(51.7,-0.2);

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgZsBQBnMBhkMC");
	this.shape_11.setTransform(27.7,0.3);

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAAsLIAAYX");
	this.shape_12.setTransform(0,-1.2);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("ACqhiIgJg2QAAgEACgDID6gpIAGAFIAJA3IgEAHIhGALIAAADIAjDIIgEAGIhcASIgEgFIgijPIgBABIhQAOQgDgCgBgEgAApiWIBVgNQAFABAAAEIArETIhZASIhyiSIgBAAIgCgEIAYCeIgDAFIhSARIgFgGIgtkQIADgHIBbgOIAAAEIBvCNIACABIABAAIgaibQgBgDADgEgAmpg/ID7gpQAEABABAFIAJA2QAAAEgDADIhHAMIAAADIAjDHQABAEgEADIhdARIgDgFIgijOIgBABIhRALIgEgDIgJg3g");
	this.shape_13.setTransform(-0.5,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AkqDEIgijOIgBABIhRALIgEgDIgJg2IACgHID7gqQAEABABAFIAJA3QAAADgDAEIhHALIAAADIAjDIQABADgEADIhdARgAhiCfIgtkQIADgHIBbgOIAAAEIBvCNIACABIABAAIgaiaQgBgEADgEIBVgNQAFABAAAEIArETIhZASIhyiSIgBAAIgCgEIAYCeIgDAFIhSAQgAEhBjIgijNIgBAAIhQAOQgDgCgBgDIgJg3QAAgEACgDID6gpIAGAFIAJA3IgEAHIhGALIAAAEIAjDHIgEAHIhcARg");
	this.shape_14.setTransform(-0.5,2.2);

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#7F4714").ss(1,1,1).p("AJCMOIx8AAQkqsXEqsEIR8AAQEcMqkcLxg");
	this.shape_15.setTransform(0,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E5017").s().p("Ao6MOQkqsWEqsFIR8AAQEcMqkcLxg");
	this.shape_16.setTransform(0,-0.9);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#613610").ss(5,1,1).p("AKIonIA7AAIAUCvIgkAAIAGA8IgCAAQA4FvhDFkIArAAIgeCvIg1AAIgBACIgnB+IgaBIIx8AAQgahDgVhEIgEAAIgXhBIg+AAIgUivIAwAAQhJlsA4lnIgBAAIAFg8IgjAAIAeivIAyAAQAfhzAthzIR8AAQApB0AdByg");
	this.shape_17.setTransform(0,-0.9);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,157.1);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AlxIOIgLgDIgHgJQgQgogMgoIgGgJIgJgcIgbAAQgHAAgGgFQgGgFAAgHIgNhyQgBgGACgFQADgGAFgDQAEgCAGAAIAIAAQgejKAUjpIAAgCIACgJIAAgDIABgRIgBAAIgLgEQgFgDgCgGQgCgFABgGIAThxQABgIAGgEQAGgFAHAAIARAAQAThEAbhEQACgHAFgDQAFgDAGgBILnAAQAGAAAFAFIAIAJQAYBEARBEIAXAAQAIAAAGAFQAFAFABAIIANBxIgCAMIgHAHIgLAEIgBAAIACAQIAAAGQAhDhglDbIADAAQAGgBAFAEIAIAIIABAMIgTBxQgCAIgFAEIgNAFIgTAAIgWBFIgRAwIgIAJQgFAEgGgBg");
	this.shape.setTransform(263.8,147.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(214.7,94.6,98.2,105.4);


(lib.shape14 = function() {
	this.initialize();

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AmEI3IgVivIJlAAQBHCICHAngAmZmHIAfivID8AAQgLAcABAwQABAvAPA0g");
	this.shape.setTransform(-31.6,0.5);

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7C7C7C").ss(1,1,1).p("AK5BXI17AAIgUitIWtAAg");
	this.shape_1.setTransform(0,48.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939393").s().p("ArCBXIgUitIWtAAIgfCtg");
	this.shape_2.setTransform(0,48.5);

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("ApsBcIhCi3IVdAFIhGCyg");
	this.shape_3.setTransform(0,54.5);

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7C7C7C").ss(1,1,1).p("ALXBXI2tAAIAeitIV7AAg");
	this.shape_4.setTransform(0,-47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939393").s().p("ArWBXIAfitIV6AAIAUCtg");
	this.shape_5.setTransform(0,-47.4);

	// Layer 10
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.102)").s().p("Aq4BfIAPi4IVNgEIAVC8g");
	this.shape_6.setTransform(0,-42.1);

	// Layer 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.102)").s().p("AoWMOQkqsWEqsFIEVAAQhuCiAsFLQAtFKEQEIQEOEJDZgaQDagagPAvQgeBsgoBsg");
	this.shape_7.setTransform(-3.5,-0.9);

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAvsLQi6MLC6MM");
	this.shape_8.setTransform(-51.2,-1.2);

	// Layer 7
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAasIQhoMIBoMJ");
	this.shape_9.setTransform(-27.1,0);

	// Layer 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgusLQC6MLi6MM");
	this.shape_10.setTransform(51.7,-0.2);

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgZsBQBnMBhkMC");
	this.shape_11.setTransform(27.7,0.3);

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAAsLIAAYX");
	this.shape_12.setTransform(0,-1.2);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("ACQhTIhXEJIhUgYIgmi3IgBAAIAAgFIgzCYQgCADgDAAIhQgWIgCgHIBTkHIAGgFIBXAcIgBAEIAjCwIABACIABABIAviWIAFgFIBSAbQADACgBAEgACuhGIDyBLQADADgBAEIgRA2IgGAEIhEgWIgBADIg8DEQgBADgFABIhagaQgCgEABgDIA/jJIgBABIhOgXQgCgDABgDIARg2gAmLj6IDyBNQAEADgCAEIgQA2IgGAEIhFgWIgBADIg8DCQgBADgFABIhagbIgBgGIBAjHQgBABgBAAIhOgZIgBgGIARg2g");
	this.shape_13.setTransform(4.2,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("ACqDhQgCgEABgDIA/jJIgBABIhOgXQgCgDABgDIARg2IAFgFIDyBLQADADgBAEIgRA2IgGAEIhEgWIgBADIg8DEQgBADgFABgAgbCeIgmi3IgBAAIAAgFIgzCYQgCADgDAAIhQgWIgCgHIBTkHIAGgFIBXAcIgBAEIAjCwIABACIABABIAviWIAFgFIBSAbQADACgBAEIhXEJgAmPAsIgBgGIBAjHQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIhOgZIgBgGIARg2IAFgFIDyBNQAEADgCAEIgQA2IgGAEIhFgWIgBADIg8DCQgBADgFABg");
	this.shape_14.setTransform(4.2,1.6);

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#7F4714").ss(1,1,1).p("AJCMOIx8AAQkqsXEqsEIR8AAQEcMqkcLxg");
	this.shape_15.setTransform(0,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E5017").s().p("Ao6MOQkqsWEqsFIR8AAQEcMqkcLxg");
	this.shape_16.setTransform(0,-0.9);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#613610").ss(5,1,1).p("AKIonIA7AAIAUCvIgkAAIAGA8IgCAAQA4FvhDFkIArAAIgeCvIg1AAIgBACIgnB+IgaBIIx8AAQgahDgVhEIgEAAIgXhBIg+AAIgUivIAwAAQhJlsA4lnIgBAAIAFg8IgjAAIAeivIAyAAQAfhzAthzIR8AAQApB0AdByg");
	this.shape_17.setTransform(0,-0.9);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,157.1);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("Ao6MOQgZhEgWhDIgDAAIgYhBIg+AAIgUivIAwAAIgBgFIgBgGQgyk/AflyIAEgWIgBAAIAFg9IgjAAIAfiuIAxAAQAfh0AthzIR8AAQApB0AcBzIA8AAIAUCuIgkAAIAGA9IgCAAQA3FuhCFkIArAAIgfCvIg0AAIgBACQgSA/gVA/IgaBIg");
	this.shape.setTransform(0,-0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,156.5);


(lib.shape10 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("Egp3ABMIAAiXMBTvAAAIAACXg");
	this.shape.setTransform(250,90.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#535353").s().p("Egn+AB4IAAjuMBP9AAAIAADug");
	this.shape_1.setTransform(252,308);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Egn/AZeMAAAgy7MBP/AAAMAAAAy7g");
	this.shape_2.setTransform(256,159);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-4,536,326.1);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD900").s().p("AgxARQgJgIgBgFQAAgdAPgQQAagdA/AVQgBADAJAKQAGAKABAbIgKAmIgRAIQgTAJgOADg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.9,12,11.9);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape50("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.sprite46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape47("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape43("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.9,-85.4,202,171);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape40("synched",0);

	this.instance_1 = new lib.shape41("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.3,36.6,61.1);


(lib.sprite33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.shape35("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.shape36("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.shape34("synched",0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(2));

 // Hit area
  this.shape = new cjs.Shape();
  this.shape.graphics.beginFill("#FFFFFF").drawRect(-17.4,-17.4,35,35);
  this.shape.alpha = 0.01;
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-17.4,35,35);


(lib.sprite28 = function() {
	this.initialize();
  var self = this;
	// Layer 6
	this.fuseSound = new lib.sprite37();
	this.fuseSound.setTransform(-215, 51.45);
	// Layer 5
	this.sparkle = new lib.sprite33();
	this.sparkle.setTransform(0,200);

	// Mask Layer 2 (mask)
	this.fuseMask = new cjs.Shape();
	this.fuseMask._off = true;
	this.fuseMask.graphics.p("Ah7PnIAA/OID3AAIAAfOg");
	this.fuseMask.setTransform(0,100);

	// Masked Layer 3 - 2
	this.instance = new lib.shape32("synched",0);

	this.instance.mask = this.fuseMask;

	// Layer 1
	this.instance_1 = new lib.shape29("synched",0);
	this.instance_1.cursor = "pointer";
	
	
  function burnFuse()
  {
    if (self.sparkle.y >= self.fuseMask.y + 100)
    {
        var speed = (200 - (self.fuseMask.y + 100) + 30) / 30;
    }
    else
    {
        var speed = 5.000000E-001;
        self.fuseMask.y = self.sparkle.y - 100;
    } // end else if
    self.sparkle.y = self.sparkle.y - speed;
    if (self.sparkle.y <= 0)
    {
        for (var i = 1; i <= 3; i++)
        {
            var fuse = self.parent["fuse" + i];
            fuse.removeAllEventListeners("tick");   //onEnterFrame;
        } // end of for
        self.parent.play();
        self.parent.explosion.scaleX = self.parent.explosion.scaleY = 0;
        self.parent.explosion.x = self.x;
        self.parent.explosion.visible = true;
        var sndBoom = playSound("sound3explosion");
        self.parent.explosion.on("tick", function (evt)
        {
            evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY + (3 - evt.currentTarget.scaleX) / 3;
        });
    } // end if
   } // End of the function
   function checkFlame()
   {
     var dist = Math.abs(self.parent._char.x - self.x); 
     if (dist < 20 && !self.parent.timeOut)
     {
        fireOn = true;
        self.sparkle.visible = true;
        self.fuseSound.gotoAndPlay(1);
     } // end if
     if(fireOn) burnFuse();
   } // End of the function
    
   var startY = 200;
   var fireOn;
   this.init = function()
   {
     this.fuseMask.y = 100;
     this.sparkle.y = startY;
     this.sparkle.visible = false;
     fireOn = false;
     this.on("tick", checkFlame);
     this.sparkle.on("mousedown", function ()
     {
      var sndSnuff = playSound("sound1snuff");
      self.parent.puffs.x = stage.mouseX/ratio;   
      self.parent.puffs.y = stage.mouseY/ratio;
      self.parent.puffs.play();
      fireOn = false;
      self.sparkle.visible = false;
      self.sparkle.y = startY;
     });
   }
   this.init();
    
	this.addChild(this.instance_1,this.instance,this.sparkle1,this.sparkle,this.fuseSound);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-1.2,35,218.8);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-1.9,13.2,20.2);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite25();
	this.instance.setTransform(4.1,-15,0.998,0.998,-92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:0.84,rotation:-57.4,x:4.2},0).wait(1).to({scaleY:0.69,rotation:-22.4,x:4.1},0).wait(1).to({scaleX:1,scaleY:0.87,rotation:-3.8,x:4.2,y:-15},0).wait(1).to({scaleX:1,scaleY:1.06,rotation:14.3,x:4.1,y:-14.9},0).wait(1).to({scaleX:1,scaleY:1.04,rotation:-12.1},0).to({scaleY:1.03,rotation:-38.9},1).wait(1).to({scaleY:1.01,rotation:-65.7,y:-14.8},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.shape27("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(8));

	// Layer 1
	this.instance_2 = new lib.sprite25();
	this.instance_2.setTransform(-2.9,-13.6,0.999,0.999,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:0.99,rotation:-12.7},1).wait(1).to({scaleX:1,scaleY:0.97,rotation:-39.2},0).wait(1).to({scaleX:1,scaleY:0.96,rotation:-65.7},0).wait(1).to({scaleX:1,scaleY:0.95,rotation:-92.1},0).wait(1).to({scaleX:0.99,scaleY:0.79,rotation:-62.2},0).wait(1).to({scaleX:1,scaleY:0.63,rotation:-32.1},0).wait(1).to({scaleX:1,scaleY:0.82,rotation:-9.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-73.8,50.8,78.8);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape23("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.6,-77.9,190.7,161.3);


(lib.sprite16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape17("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,157.1);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape14("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,157.1);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape12("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.7,-79.2,145.5,156.5);


(lib.sprite8 = function() {
	this.initialize();
 
	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.9,12,11.9);


(lib.sprite7Flame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop=false,{});
  this.name = "flame";
	// Layer 1
	this.instance = new lib.sprite8();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-11.8,24,23.8);


(lib.sprite5Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;