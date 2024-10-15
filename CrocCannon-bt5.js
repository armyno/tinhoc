(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.CrocCannon = function() {
	this.initialize();

	// Layer 20
	this.instance = new lib.shape99("synched",0);
	this.instance.setTransform(448.1,17.6);

	// Layer 19
	this.border = new lib.sprite96();

	// Layer 18
	this.starPoints = new lib.sprite87();
	this.starPoints.setTransform(27.6,24.3);

	// Layer 17
	this.instance_1 = new lib.sprite69();
	this.instance_1.setTransform(341.3,110.3,0.729,0.729,0,0,180);
  this.instance_1.alpha = 0.5; 
	// Layer 16
	this.fg = new lib.sprite61();
	this.fg.setTransform(10,0);
  
  var croc = new cjs.Container();
  
	// Layer 15
	this.ballsHit = new lib.sprite59();
	this.ballsHit.setTransform(42,257.8);
	this.ballsHit.alpha = 0.01;

	// Layer 14
	this.cannon = new lib.sprite56();
	this.cannon.setTransform(117,251.7,1,1.002,-44.9);
  
  //Layer for store a ball

  this.shutBall = new cjs.Container();
    
	// Layer 13
	this.instance_2 = new lib.sprite20Ball();
	this.instance_2.setTransform(51.6,262.8,0.999,0.999,12);

	// Layer 12
	this.instance_3 = new lib.sprite20Ball();
	this.instance_3.setTransform(78.1,265.1,0.996,0.996,-4.1);

	// Layer 11
	this.instance_4 = new lib.sprite20Ball();
	this.instance_4.setTransform(57.8,259.8);

	// Layer 10
	this.instance_5 = new lib.sprite20Ball();
	this.instance_5.setTransform(54.5,244.9,1,1,5.8);

	// Layer 9
	this.instance_6 = new lib.sprite20Ball();
	this.instance_6.setTransform(39.8,254.3);

	// Layer 8
	this.instance_7 = new lib.sprite20Ball();
	this.instance_7.setTransform(67.3,262);

	// Layer 7
	this.instance_8 = new lib.sprite20Ball();
	this.instance_8.setTransform(76.2,252.8,0.997,0.997,16.5);

	// Layer 6
	this.instance_9 = new lib.sprite20Ball();
	this.instance_9.setTransform(49.7,255.6);

	// Layer 5
	this._char = new lib.sprite40();
	this._char.setTransform(134.9,132.2,0.984,0.984,0,0,180);

	// Layer 4
	this.instance_10 = new lib.sprite38();
	this.instance_10.setTransform(244,279.5);
  this.instance_10.startY = this.instance_10.y;
	// Layer 3
	this.instance_11 = new lib.shape37("synched",0);
   
  //Layer 2
  
  this.instance_12 = new lib.sprite36();
  this.instance_12.setTransform(405,79);
  
	// Layer 1
	this.instance_13 = new lib.shape35("synched",0);

	this.addChild(this.instance_13, this.instance_12, this.instance_11,this.instance_10,this._char,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.shutBall,this.cannon,this.ballsHit,croc,this.fg,this.instance_1,this.starPoints,this.border,this.instance);
	var self = _root = this;

	this.raiseCroc = function ()
  {
    this.gameOver = true;
    ++crocDepth;
    this["croc" + crocDepth] = new lib.sprite22Croc(); //this.attachMovie("Croc", "croc" + crocDepth, crocDepth);
    croc.addChild(self["croc" + crocDepth]);
    this["croc" + crocDepth].x = Math.random() * 150 + 300;
    this.fg.ripples.x = this["croc" + crocDepth].x - 10;
    this["croc" + crocDepth].y = ground + 50;
    this["croc" + crocDepth].scaleX = this["croc" + crocDepth].scaleY = (Math.random() * 10 + 70)/100;
    this["croc" + crocDepth].wait = 0;
    this["croc" + crocDepth].on("tick", function (evt)
    {
        if (Math.random() * 100 < 1)
        {
           self._char.eyes.play();
        } // end if
        
        var testBall =  self.ball; 
        if(testBall != undefined)
        {  
            if (testBall.name == "ball")
            {           
              if (evt.currentTarget.hit.hitTest(testBall.x + testBall.hit.x - evt.currentTarget.x - evt.currentTarget.hit.x, testBall.y + testBall.hit.y - evt.currentTarget.y - evt.currentTarget.hit.y) && testBall.fired)
              {
                    sndChomp.play();
                    sndSplash2.play();
                    //self._char.mouth.gotoAndStop(1);
                    testBall.name = "";
                    testBall.visible = false;
                    evt.currentTarget.play();
                    evt.currentTarget.happy = true;
              } // end if
           }
        }    
        if (!evt.currentTarget.happy)
        {
            if (evt.currentTarget.wait >= maxWait)
            {
                evt.currentTarget.y = evt.currentTarget.y + 2;
                if (self.fg.ripples.alpha > 0)
                {
                    self.fg.ripples.alpha = self.fg.ripples.alpha - 0.05;
                } // end if
                if (evt.currentTarget.y > 336)
                {
                    croc.removeChild(evt.currentTarget);
                    self.raiseCroc();
                } // end if
            }
            else if (Math.round(evt.currentTarget.y) <= crocGround)
            {
                evt.currentTarget.y = crocGround;
                ++evt.currentTarget.wait;
            }
            else
            {
                evt.currentTarget.y = evt.currentTarget.y + (crocGround - evt.currentTarget.y) / 8;
                if (self.fg.ripples.alpha < 1)
                {
                    self.fg.ripples.alpha = self.fg.ripples.alpha + 0.05;
                } // end else if
            } // end else if
        }
        else
        {
            evt.currentTarget.y = evt.currentTarget.y + 2;
            if (self.fg.ripples.alpha > 0)
            {
                self.fg.ripples.alpha = self.fg.ripples.alpha - 0.05;
            } // end if
            if (evt.currentTarget.y > 336 - 20)
            {
                croc.removeChild(evt.currentTarget);
                self.starPoints.score();
            } // end if
        } // end else if
    });
  } // End of the function
  function fire(clip)
  {
    sndBoom.play();   //start();
    self.removeAllEventListeners("mousedown");   //delete onMouseDown;
    self.cannon.removeAllEventListeners("tick");    //delete cannon.onEnterFrame;
    self.cannon.play();
    clip.fired = true;
    clip.velX = force * Math.cos(radians);
    clip.velY = force * Math.sin(radians);
    clip.spin = Math.random() * 15 + 5;
    clip.on("tick",  function ()
    {
        clip.rotation = clip.rotation + clip.spin;
        clip.velY = clip.velY + gravity;
        clip.x = clip.x + clip.velX;
        clip.y = clip.y + clip.velY;
        if (clip.y > ground + 10)
        {
            self.wave0 = new lib.sprite11Wave();      //this._parent.attachMovie("Wave", "wave0", fgDepth + 1);
            self.addChild(self.wave0);
            self.wave0.x = clip.x;
            self.wave0.alpha = 0.5;
            self.wave0.y = ground;
            self.wave0.on("tick",  function ()
            {
                self.wave0.alpha = self.wave0.alpha - 0.05;
                self.wave0.scaleX = self.wave0.scaleY = self.wave0.scaleY + 0.1;
                if (self.wave0.alpha < 0)
                {
                   self.removeChild(self.wave0);
                } // end if
            });
            for (var i = 1; i <= Math.round(Math.random() * 10 + 40); i++)
            {
                self["splash" + i] = new lib.sprite9Splash();   //this._parent.attachMovie("Splash", "splash" + i, i + splashDepth);
                self.addChild(self["splash" + i]);
                self["splash" + i].x = clip.x;
                self["splash" + i].scalelX = self["splash" + i].scaleY = (Math.random() * 100 + 50)/100;
                self["splash" + i].alpha = (Math.random() * 50 + 25)/100;
                self["splash" + i].y = ground;
                self["splash" + i].velX = clip.velX / 4 + Math.random() * 10 - 5;
                self["splash" + i].velY = -clip.velY / 2 + Math.random() * 16 - 8;
                self["splash" + i].on("tick", function (evt)
                {
                    evt.currentTarget.velY = evt.currentTarget.velY + gravity;
                    evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
                    evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
                    if (evt.currentTarget.y > ground)
                    {
                        self.removeChild(evt.currentTarget);
                    } // end if
                });
            } // end of for
            self.shutBall.removeChild(clip);
            sndSplash1.play(); // start();
        } // end if
    });
    for (var j = 1; j <= 20; j++)
    {
        self["smoke" + j]  =  new lib.sprite9Splash(); //this.attachMovie("Splash", "smoke" + j, j + cannonDepth + 1000);
        self.addChild(self["smoke" + j]);
        self["smoke" + j].x = self.ball.x;
        self["smoke" + j].y = self.ball.y;
        self["smoke" + j].scaleX = self["smoke" + j].scaleY = Math.random() * 4 + 4;
        self["smoke" + j].alpha = (Math.random() * 25 + 25)/100;
        self["smoke" + j].velX = self.ball.velX / 3 + Math.random() * 14 - 7;
        self["smoke" + j].velY = self.ball.velY / 3 + Math.random() * 14 - 7;
        self["smoke" + j].on("tick",  function (evt)
        {
            evt.currentTarget.velX = evt.currentTarget.velX * damp;
            evt.currentTarget.velY = evt.currentTarget.velY * damp;
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
            evt.currentTarget.alpha = evt.currentTarget.alpha - 0.05;
            if (evt.currentTarget.alpha < 0)
            {
                self.removeChild(evt.currentTarget);
            } // end if
        });
    } // end of for
   } // End of the function
   function rotateCannon(curBall)
   {
    self.cannon.delX = stage.mouseX / ratio - self.cannon.x;
    self.cannon.delY = stage.mouseY / ratio - self.cannon.y;
    radians = Math.atan(self.cannon.delY / self.cannon.delX);
    if (self.cannon.delY > 0)
    {
        radians = 0;
    } // end if
    if (self.cannon.delX < 0)
    {
        radians = radians + 3.141593E+000;
    } // end if
    if (!(radians < -1.495997E+000 || radians > 3.141593E+000))
    {
        if (radians > -5.235988E-001)
        {
            radians = -5.235988E-001;
        } // end if
    }
    else
    {
        radians = -1.495997E+000;
    } // end else if
    self.cannon.rotation = 180 * radians / 3.141593E+000;
    curBall.x = self.cannon.x + cannonLength * Math.cos(radians);
    curBall.y = self.cannon.y + cannonLength * Math.sin(radians);
    curBall.rotation = self.cannon.rotation;
   } // End of the function
   
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;
   var cannonLength = 50;
   var force = 25;
   var gravity = 2;
   var ground = 284;
   var crocGround = ground - 5;
   var holdingBall = false;
   var ballCount = 0;
   var damp = 9.000000E-001;
   var fps = 24;
   var maxWait = fps * 6;
   var score = 0;
   var fgDepth = 200000;
   var cannonDepth = 100000;
   var crocDepth = 50000;
   var splashDepth = 10000;
   var curBall;
   //cannon.swapDepths(cannonDepth);
   //fg.swapDepths(fgDepth);
   //border.swapDepths(700000);
   //GameEndClip.swapDepths(800000);
   this.raiseCroc();
   var sndSplash1 = playSound("sound1SndSplash1"); sndSplash1.stop();

   var sndSplash2 = playSound("sound3splash2");sndSplash2.stop();

   var sndChomp = playSound("sound5chomp"); sndChomp.stop();

   var sndSplat = playSound("sound4splat");sndSplat.stop();

   var sndLoad = playSound("sound6load");sndLoad.stop();

   var sndBoom = playSound("sound2explosion");sndBoom.stop();

   this.ballsHit.on("mousedown",  function ()
   {
    if (!holdingBall)
    {
        sndSplat.play();
        holdingBall = true;
        ++ballCount;
        self.ball = new lib.sprite20Ball();   //this._parent.attachMovie("Ball", "ball" + ballCount, fgDepth + ballCount);
        self.addChild(self.ball);
        self.ball.x = stage.mouseX / ratio;
        self.ball.y = stage.mouseY / ratio;
        self.ball.on("tick", function (evt)
        {
            self.ball.x = stage.mouseX / ratio;
            self.ball.y = stage.mouseY / ratio;
            if (self.ball.hitTest(self.cannon.x + (self.cannon.hit.x - 18.05) * Math.cos(Math.PI*self.cannon.rotation/180) - self.ball.x, self.cannon.y + (self.cannon.hit.x - 18.05) * Math.sin(Math.PI*self.cannon.rotation/180) - self.ball.y)||
                self.ball.hitTest(self.cannon.x + self.cannon.hit.x * Math.cos(Math.PI*self.cannon.rotation/180) - self.ball.x, self.cannon.y + self.cannon.hit.x * Math.sin(Math.PI*self.cannon.rotation/180) - self.ball.y)||
                self.ball.hitTest(self.cannon.x + (self.cannon.hit.x + 18.05) * Math.cos(Math.PI*self.cannon.rotation/180) - self.ball.x, self.cannon.y + (self.cannon.hit.x + 18.05) * Math.sin(Math.PI*self.cannon.rotation/180) - self.ball.y)
            )
            {
                sndLoad.play();
                holdingBall = false;
                //this.swapDepths(ballCount);
                self.removeChild(self.ball); self.shutBall.addChild(self.ball); //self.swapChildren(self.ball, self.instance_2);
                evt.remove();   //delete this.onEnterFrame;
                curBall = self.ball;
                self.ball.on("mousedown", function ()
                {
                    self._char.arm.play(1);
                    fire(curBall);
                });
                self.cannon.on("tick", function ()
                {
                    rotateCannon(curBall);
                });
            } // end if
        });
    } // end if
  });
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,0,645.5,340.1);


// symbols:
(lib.image98 = function() {
	this.initialize(img.image98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite100 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite36 = function() {
	this.initialize();
  var accelX = -5.000000E-002;
  var damp = 9.500000E-001;
  var smokeCount = 0;
  var self = this;
  this.on("tick",  function ()
  {
    ++smokeCount;
    self["smoke" + smokeCount] = new lib.sprite31Smoke(); //attachMovie("Smoke", "smoke" + smokeCount, smokeCount);
    self.addChild(self["smoke" + smokeCount]);
    self["smoke" + smokeCount].x = Math.random() * 6 - 3;
    self["smoke" + smokeCount].scaleX = self["smoke" + smokeCount].scaleY = (Math.random() * 40 + 80)/100;
    self["smoke" + smokeCount].velX = 0;
    self["smoke" + smokeCount].velY = -Math.random() * 2 - 2;
    self["smoke" + smokeCount].on("tick",  function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX + accelX;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY + 0.01;
        if (evt.currentTarget.x < -450)
        {
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        } // end if
    });
 });

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.text67 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("S.S. GUPPY", "9px Arial", "#FFFFFF");
	this.text.lineHeight = 9;
	this.text.lineWidth = 55;
	this.text.setTransform(48, 0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.9,-3,58.6,24.1);


(lib.shape99 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image98(); 
  this.shape.setTransform(-45,-7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape97 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape94 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape93 = function() {
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


(lib.shape90 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape86 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,2.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkGBQQgGgIgBgKQgGgmBeg5QBeg6BBgBICvAOQBwAPAFAhQACAQgHANQgJAMgRACIh/gPQiCgQghAEIgmAaIgvAgQgVAIgeAVQgaASgMACIgIAAQgSAAgLgNg");
	this.shape_1.setTransform(-26.8,5.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADeBVIhVgwQhMgugHgBIiEAdQiBAfgSgCQgagDgIgSQgFgKABgLQADgXBrgcICdglQA0gOBsBBQBmA7gCAWQgCAPgLAKQgKALgOAAIgFgBg");
	this.shape_2.setTransform(18.2,2.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.9,-5.8,98.7,20.6);


(lib.shape85 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,1.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACCBfQh4gTiXg4QhMgZgZghQgQgWAHgSQAFgOAOgGQAPgHASAHQAPAFAOAPQANAOAqAPQBzArC8AgQAvAIAMALQAOANgMAgQgFANglAAQgdAAgwgIg");
	this.shape_1.setTransform(19.7,5.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjBBTQgZgJgFgRQgFgRAKgPQAKgQAWgHIAhACQALAGAXgGQA+gQA0gWQAsgVBkgdIA+gDIAOAPIALAlIgjAQIheATQgIAAg3AcQg0AbhQAXQgiAKgaAAQgUAAgPgFg");
	this.shape_2.setTransform(-32.5,6.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-5.1,100.5,20.7);


(lib.shape84 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABcCDQhfgOh4hwQgngjgigoIgbgkQAGgnAmAQQAbALA5AxQAkAjAmAbQBGA1AzAIQAeAEAJgQQAKgRAXAEQAcAEAPAeQAHAPACAPQgCAUgcALQgXALgjAAQgUAAgYgEg");
	this.shape_1.setTransform(17.9,8.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjTCMQgLgKgBgOQgEgdARgEIBLgHQA6gHBUg9QBThAAWgLQAWgLAFgZQAHgbAMgKQAggaATAUQANANADAcQAKBRizBeQg5AghFAcQg4AWgMACIgYACQghAAgQgQg");
	this.shape_2.setTransform(-31.6,10.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.2,-11.3,94.7,37.5);


(lib.shape83 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-10.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcCkQhSgzhBiVQgVgxgQgyQgMgqACgCQAUgiAdAeQAVAWAgBDQAUAuAXApQArBMArAbQAaAQAPgLQAQgMATAMQAZAQABAiQABAQgEAPQgKAQgeAAIgBAAQgoAAg3gig");
	this.shape_1.setTransform(10.7,11.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AifDJQgNgFgGgNQgNgbAPgJIBFgdQA1gZA8hVQA7hWASgSQARgSgDgYQgCgcAJgOQAWgiAYANQARAJALAZQAjBKiMCQQguAxg4AwIg5AsQgeAOgVAAQgNAAgJgFg");
	this.shape_2.setTransform(-25.1,11.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.7,-16.5,71.2,48.8);


(lib.shape82 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA3CcQhZgmhYiJQgdgsgXgwQgTgnABgDQAPgkAhAZQAZASAqA9QAbAqAdAlQA3BFAvAUQAcAMANgOQAOgOAVAJQAaALAHAhQAEARgCAOQgIASgdAFQgIACgJAAQgjAAgwgUg");
	this.shape_1.setTransform(13.6,11.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai7CxQgMgIgEgNQgIgdAQgHIBJgSQA3gQBKhKQBIhMAUgPQAUgPABgZQACgbAKgNQAcgeAWARQAOALAIAbQAXBOihB5Qg1Apg/AmQgzAfgNAEg");
	this.shape_2.setTransform(-28.4,10.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-14.2,82.1,43);


(lib.shape81 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-2.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah4ARQgsgdgngjIghggQAAgnApAKQAdAIA/AoQApAdApAWQBNAqA0AAQAeAAAHgRQAHgQAXAAQAdAAATAaQAKAOAEAOQAAAUgaAPQghAWhDAAQhiAAiFheg");
	this.shape_1.setTransform(19.1,9.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjjBvQgJgKAAgOQAAgeASgCIBLACQA6AABbgyQBag1AYgJQAXgIAIgYQAKgaANgJQAjgVARAWQALAPAAAcQAABPi9BKQg9AYhIATQg6AQgNAAQg0AAgTgXg");
	this.shape_2.setTransform(-33,10.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.7,-9,99.6,33);


(lib.shape80 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,1.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACMBPQh6gHicgmQhOgUgdgcQgSgTAFgTQAEgOAMgIQAOgIATAFQAPAEAQAMQAPANArALQB4AdC+ALQAvADANAKQAPALgIAiQgFAThLAAIglgBg");
	this.shape_1.setTransform(20.3,2.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjKA0QgYgMgDgSQgCgRAMgMQANgPAXgDQAWgDAJAJQALAJAYgDQA/gJA2gOQAwgNBmgPIA/AHIALAQIAGAnIglAIIhgAFIhDAUQg4AThRAMQgTADgRAAQgkAAgXgNg");
	this.shape_2.setTransform(-33.3,3.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.4,-5.4,102.9,16.1);


(lib.shape79 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,8.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhTBKIgMgFQg+gWgigGIABAAIhZgSIAAAAQhOgPg2ADIgqAHIgDAAQgeACgLgTQgIgHAAgLQgCggAegOQAVgLAqACIDFAaIABAAQBWARAsAMQAxAOAYAPIATAAQAAgCAygXQA/ghAmgGQBegSBeACIBtAEQAXAAASAVQANARgBAJQAAAPgJAKQgKAPgVABQgdABglgLIhvgGQheAFhaApIAAAAIgtAUg");
	this.shape_1.setTransform(-5.4,5.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-2.2,101.4,17.5);


(lib.shape78 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6CLIgTgcIhBg3IgBAAQgjgZgqgXQhMgngpgCIgTADIgCAAIgzADQgtAAgNgOIAAgBQgOgMAEgPQgCglBKgFIB+AEIAHACIBJAeQAvASAVAVQA3ApAjAeQAhAcAQAWIAWgaQA5hCAZgYIAmgoIABAAQAggeAfgMQBxguBdAnQBAAVgFAdQAAAQgKALQgLAOgVAAQgFABgbgMIAAgBQgTgHhIAAQhVABheBqQgZAcgnAzIgBAAIAAABg");
	this.shape_1.setTransform(-7.1,2.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-11.3,95.9,31.7);


(lib.shape77 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjQCsQgZgDgHgUQgEgKACgLQAEgnBQhGQBJg/Bfg4QBlg6BAgLQBJgLgFA8QgCAMhQAeQhtAohOA1IhQBXQhDBGggAAIgDAAg");
	this.shape_1.setTransform(19.9,-1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABgBzIhxhfIgvgnQgegagbgNQgagNhDgXQgWgHgCgZQgKh9D0C1QBNA7BZBNQBNBEAAAFQABAOgKALQgKANgSACIgBAAQgZAAhQhAg");
	this.shape_2.setTransform(-29.2,-2.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-20.4,97.6,41.6);


(lib.shape76 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,19.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjADQQgFgJgCgLQgHgnA6hYQA1hRBPhQQBQhTA6gbQBEgfAKA7QACANhFAyQheBDg8BJIg3BpQgwBagfAFIgJABQgSAAgKgOg");
	this.shape_1.setTransform(15.1,-2.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACJDqQgWgGg7hXIhMh/IgggzQgVgigVgWQgVgUg4grQgSgNAGgZQAeh6CsD5QA4BPA8BnQAzBZgBAEQgDAOgNAIQgJAFgLAAIgMgBg");
	this.shape_2.setTransform(-22.8,-4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-27.7,76.7,53.5);


(lib.shape75 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,17.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjXC4QgFgKABgLQgDgnBEhSQA/hJBXhGQBZhKA9gUQBHgWADA8QABANhKApQhmA4hEBBIhDBiQg6BTgfACIgEABQgWAAgKgSg");
	this.shape_1.setTransform(17.3,-2.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACiDYQgXgDhEhQIhbh1IgmgwQgYgfgYgSIhUg2QgTgLADgZQAPh9DIDjQBCBHBHBgQA+BSgBAEQgCAOgLAJQgLAJgPAAIgGAAg");
	this.shape_2.setTransform(-25.6,-4.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-26.1,85.9,49.6);


(lib.shape74 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjQCsQgZgDgHgUQgEgKACgLQAEgnBQhGQBJg/Bfg4QBlg6BAgLQBJgLgFA8QgCAMhQAeQhtAohOA1IhQBXQhDBGggAAIgDAAg");
	this.shape_1.setTransform(19.9,-1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABgBzIhxhfIgvgnQgegagbgNQgagNhDgXQgWgHgCgZQgKh9D0C1QBNA7BZBNQBNBEAAAFQABAOgKALQgKANgSACIgBAAQgZAAhQhAg");
	this.shape_2.setTransform(-29.2,-2.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-20.4,97.6,41.6);


(lib.shape73 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,10.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1CeIgSggIg7g+IgBAAQgggcgmgaQhGgtgmgCIgRADIgCAAIgvAEQgpAAgMgRIAAAAQgNgOAEgRQgCgqBEgFIBzAEIAHADIBCAhQAsAUATAYIBSBRQAfAgAOAZIAUgeQA0hKAYgcIAjgtIABgBQAdgiAcgNQBng0BVArIABABIAAAAQA6AYgEAhQAAASgJAMQgKAQgTAAQgFACgZgOIAAgBQgRgIhCAAQhOABhWB5QgXAfgkA5IgBABIAAABg");
	this.shape_1.setTransform(-7.1,-2.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,87.9,35.5);


(lib.shape72 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6B3IgTgYIhBgvIgBgBIhNgoQhMgigpgBIgTADIgCAAIgzACQgtAAgNgMIAAgBQgOgKAEgNQgCggBKgEIB+AEIAHABIBJAaQAvAPAVASIBaA9QAhAXAQAUIAWgXQA5g4AZgVIAmgiIABAAQAggaAfgKQBxgnBdAhQBAASgFAZQAAAOgKAJQgLAMgVAAQgFABgbgKIAAgBIhbgGQhVABheBaQgZAYgnAsIgBAAIAAABg");
	this.shape_1.setTransform(-7.1,-3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-15.4,95.9,27.7);


(lib.shape71 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,4.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADoBXIh2gxQh7gvgggEIgsAQIg1ATQgXACgiANQgdALgNgBQgYgDgIgTQgEgJABgLQAEgjBqgiQBqggA9APQBuAkA5AWQBpAogDAiQgCAQgKAKQgLAKgOAAIgFAAg");
	this.shape_1.setTransform(-27.7,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj/BNQgGgIgBgLQgCgaBjguQA1gaBfgpQAvgZB2ArQBxAoACAWQABANgJANQgKANgRACQgIAAhUgfQhVgegHAAIh7A3Qh4A3gSACIgHAAQgVAAgKgOg");
	this.shape_2.setTransform(18.7,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-8.7,100.2,19.1);


(lib.shape66 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAOANQgGAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAFg");
	this.shape.setTransform(106.8,254.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAIgFAFQgGAHgIAAQgHAAgGgHg");
	this.shape_1.setTransform(106.8,254.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D3D12").ss(1,1,1).p("Ap5grQJ0AhJ/ggApeAeQJGAcJOgb");
	this.shape_2.setTransform(82.4,276.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4661F").s().p("AqRAUQgEgDgLgBIgLgCIgTgvQIBAgN8ggIgRAzIgcABIgGABIAAAAQldAOlGAAQlHAAkzgOg");
	this.shape_3.setTransform(83.4,264.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D4715").s().p("ApYBLIgPghQEoAOEqAAIABAAIAAAAQEDAAEHgLIABAAIAogCIAOAAQgZATgbANQkVAQkSAAQkVAAkVgQgAgVA4QkqAAkogOQgPgjgMgmIAWABQE0AQE2AAIAAAAIABAAQE2AAE7gQQk7AQk2AAIgBAAIAAAAQk2AAk0gQIgWgBIgPg6QJmAdK3gdIAAAAIAGgBQgQAhgSAbQgfArgkAeIgOAAIgoACIgBAAQkHALkDAAIAAAAIgBAAgApnAqIAAAAg");
	this.shape_4.setTransform(83.4,275.4);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5A411B").ss(3,1,1).p("AH5BlQonAhoqghIgPghQgPgigMgnIgPg5QgEgDgLgBIgLgCIgTgxQIBAgN8ggIgRA1IgcABQgQAggSAbQgfAsgkAdQgZAUgbAMg");
	this.shape_5.setTransform(83.4,272.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13,252.8,140.8,31.8);


(lib.shape65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(1,1,1).p("AHigTQDHAIAAALQAAAMjHAIQjIAJkaAAQkZAAjIgJQjHgIAAgMQAAgLDHgIQDIgJEZAAQEaAADIAJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.1,-2.8,136.3,5.9);


(lib.shape62 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1.5,1,1).p("ABNB1ICOgBIiwjoIghAAIgzAAIixDog");
	this.shape.setTransform(106.9,260);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#888888").s().p("AiWB0ICvjoIA0AAQBgBrgcB+g");
	this.shape_1.setTransform(100.1,260);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4A4A4").s().p("Ahnh0IAhAAICuDoIiLABQAch+hghrg");
	this.shape_2.setTransform(118.4,260);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AqTALIgOggIKlANQDtADGxgSIgKAfQliAQlfAAQk2AAk0gNg");
	this.shape_3.setTransform(82.9,268.8);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("AjaB0ICxjnIBUAAICwDng");
	this.shape_4.setTransform(103.7,260.2);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(91,159,215,0)","rgba(2,5,6,0.271)"],[0,1],1.8,-34.7,-1.6,34.9).s().p("EgoOAEXIAAouMBQdAAAIAAIug");
	this.shape_5.setTransform(242.5,312.1);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B9FD7").s().p("EgoOAEXIAAouMBQdAAAIAAIug");
	this.shape_6.setTransform(242.5,312.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,248.3,515,91.8);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AmkC+QgEgbAAgcQABiVB8hrQB8hqCvAAQCwAAB8BqQB8BrAACVQAAAcgEAbQjPAmjSAAQjRAAjWgmg");
	this.shape.setTransform(10.6,-16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.9,-39.3,85,45.7);


(lib.shape58 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AgZB5IACjzIAtABIAED0g");
	this.shape.setTransform(22.1,-0.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#515151").ss(1,1,1).p("AFxgtIAAgsIAAgtIiEAAIAAAMIAAAhIAAAsAlJhYIgDACQgTATgIAXQgJAVAAAXQAAAbAKAWQAJAVARARQAkAkAzAAIHiAAIAAhKIAAheADth6IniAAQgxAAgjAiAFxAxIAAheADtB7IAAAMICEAAIAAhW");
	this.shape_1.setTransform(1.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B5B5B").s().p("ADoAqIAAgMIAAhHICEAAIAABTgAj6AeQgzAAgkgiQgRgRgJgUIJTAAIAABHgADogpg");
	this.shape_2.setTransform(1.6,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#787878").s().p("AlQgSIADgCII1gBIAAAqIAAgqICFAAIAAAqIiFAAIpUABQAJgWATgSg");
	this.shape_3.setTransform(1.5,-6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AkIgJIHhAAIAAAfIo2AAQAjgfAyAAgADZAWIAAgfIAAgMICEAAIAAArg");
	this.shape_4.setTransform(3,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ADtAvIAAhdIAABdIpTAAQgKgWAAgZQAAgZAJgVIJUAAICEAAIAABdg");
	this.shape_5.setTransform(1.1,0.2);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#404040").ss(3,1,1).p("AC5h8IAwABIAAABIAEAAIAAgMICEAAIAAENIiEAAIAAgMIniAAQgzAAgkgkQgRgRgJgVQgKgWAAgbQAAgXAJgVQAIgXATgTIADgCQAjgiAxAAIGuAAg");
	this.shape_6.setTransform(1.1,0);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-13.4,73.9,27);


(lib.shape55 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AAXBMQAAAGAEAGQADAJALAAQARADgBgTQgBgNgIgOIALAJQAFAFAGgBIAKgEQANgIgLgOQgJgOgRgFIgVgZIgYgdIgQgXIgBgCIgDgDIgQgYIgFgHIgFgGAhWg9QAHAKANANIAXAZIADACIAXAZIAUAcQgOANAEASQACAJAGAEQASAIAEgSIgBgDQAAgHABgG");
	this.shape.setTransform(21.5,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DBB00").s().p("AApBnQgLgBgDgJQgEgFAAgHIgBgDIAAgEIABgIIgBAIIAAAEIABADQgEATgSgJQgGgDgCgJQgEgSAOgNIgUgcIgXgZIgDgDIgXgYQgNgNgHgLIAQguIALAXIAYgMIAFAGIAFAGIAQAYIADAEIABACIAQAXIAYAbIAVAaQARAGAJAOQALAOgNAIIgKADQgGABgFgEIgLgKQAIAOABANQABARgOAAIgDAAg");
	this.shape_1.setTransform(21.5,5.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACsjtQjyAphlGy");
	this.shape_2.setTransform(17.2,31.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.5,34.4,60.2);


(lib.shape54 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AhigkIAaARIAcASIADABIAeATIAaAWQgMAQAJARQAEAHAJACQATAEgBgTIgBgDIgDgNAArBEQACAGAFAEQAFAIALgCQARgCgGgSQgEgNgLgLIANAGIAMABIAIgGQAKgLgOgLQgMgMgSAAIgbgTIgegVIgWgSIgCgCIgEgCIgWgTIgGgFIgGgF");
	this.shape.setTransform(23.6,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DBB00").s().p("AAyBPQgFgEgCgGIgBgDIgDgNIADANIABADQABATgTgEQgJgCgEgHQgJgRAMgQIgagWIgegUIgDAAIgcgSIgagRIADgxIAQATIAVgSIAGAFIAGAFIAWATIAEACIACACIAWASIAeAVIAbATQASAAAMAMQAOALgKALIgIAGIgMgBIgNgGQALALAEANQAGASgRACIgEAAQgIAAgEgGg");
	this.shape_1.setTransform(23.6,4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADDkBQj5BTiMGw");
	this.shape_2.setTransform(19.5,29.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.5,39.1,60.3);


(lib.shape53 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AA0A7IAJAKQAHAGAKgDQAQgEgIgSQgGgLgNgLIAOAFIAMgBIAHgHQAJgNgPgIQgPgIgRACIgegQIgggRIgZgOIgCgBIgEgDIgYgPIgIgEIgGgEAhmgXQAKAHASAHQAQAFAOAGIAEACIAgAPIAdASQgJARAKAQQAGAGAJABQATABgEgTIgBgCIgEgN");
	this.shape.setTransform(24.5,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DBB00").s().p("AAnBNQgJgBgGgGQgKgQAJgRIgdgSIgggPIgEgCQgOgGgQgFQgSgHgKgHIgEgxIATARIASgVIAGAEIAIAEIAYAPIAEADIACABIAYAOIAhARIAeAQQARgCAPAIQAPAIgJANIgHAHIgMABIgOgFQANALAGALQAIASgQAEQgKADgHgGIgJgKIgBgCIgEgNIAEANIABACQAEASgRAAIgCAAg");
	this.shape_1.setTransform(24.3,2.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADAkVQjWCDipGo");
	this.shape_2.setTransform(19.2,27.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.9,38.4,60.6);


(lib.shape52 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AguhkQABAMAFATIAHAgIACAEIAHAhIAEAjQgUADgGASQgCAJAFAHQALAQANgOIABgDIAHgKAgTBKQgDAGAAAGQgBAJAIAHQAOAKAHgRQAGgMAAgPIAFANIAHAJIALACQAPgBgDgRQAAgRgNgNIgEgiIgGgjIgFgdIABgCIgBgFIgDgcIgBgJIAAgH");
	this.shape.setTransform(15.6,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DBB00").s().p("AgPB0QgIgHABgJQAAgGADgGIABgDIAHgKIgHAKIgBADQgNAOgLgQQgFgHACgJQAGgSAUgDIgEgjIgHghIgCgEIgHggQgFgTgBgMIAlghIgBAaIAZACIAAAHIABAJIADAcIABAFIgBACIAFAdIAGAjIAEAiQANANAAARQADARgPABIgLgCIgHgJIgFgNQAAAPgGAMQgFALgGAAQgFAAgFgEg");
	this.shape_1.setTransform(15.6,6.7);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACIi6QkZiBALIP");
	this.shape_2.setTransform(13.5,34.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-5.2,27.3,60.9);


(lib.shape51 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AAABOQAAAGABAHQABAJAKADQAQAHAEgSQADgOgEgPIAIAMQAEAGAGABIAKgBQAOgFgGgQQgFgRgQgJIgNgfIgPggIgMgbIAAgCIgCgFIgIgaIgDgJIgDgGAhEhUQAEANAJAQIAPAdIADAEIAPAeIANAgQgSAJgBASQAAAJAHAGQAPANAGgRIABgEIAEgL");
	this.shape.setTransform(18.8,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DBB00").s().p("AAMBxQgKgDgBgJQgBgHAAgGIABgEIAEgLIgEALIgBAEQgGARgPgNQgHgGAAgJQABgSASgJIgNggIgPgeIgDgEIgPgdQgJgQgEgNIAagoIAFAZIAbgFIADAGIADAJIAIAaIACAFIAAACIAMAbIAPAgIANAfQAQAJAFARQAGAQgOAFIgKABQgGgBgEgGIgIgMQAEAPgDAOQgDANgJAAQgEAAgEgCg");
	this.shape_1.setTransform(18.8,7.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACYjQQjIhBhnHp");
	this.shape_2.setTransform(15.2,34);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.4,30.4,60.2);


(lib.shape49 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AgHAOQAHAAADgJQAGgGAAgM");
	this.shape.setTransform(6.2,8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#216400").ss(1,1,1).p("AhbgNIAkABIAmgBIAlAAQASABARAGQAQAFASANIADAC");
	this.shape_1.setTransform(-2.6,6.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,4.7,19,4.7);


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("Ah2AvIAkABIAmgBIAmgEIAhgIIAjgJIAjgOQARgIAEgKQAEgMgKgMIgLgPIgOAIABlgtIASgC");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-4.8,23.9,9.7);


(lib.shape46 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AAmACIhLgD");
	this.shape.setTransform(-5.7,0.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#216400").ss(1,1,1).p("AA4AGIhvgL");
	this.shape_1.setTransform(3.7,1.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#216400").ss(1,1,1).p("AAFg4IASgMQAhgSAXAcQAKAKAEAQQAEAQgCATQgCASgGAQQgHARgMANQgLALgRAFQgTAEgPgIQgLgHgLgRQgLAQgRACQgTACgLgLIgMgPIgFgNQgFgQACgUQACgRAGgQQAGgRAJgMQAJgOAQgGIAQgCQAJABAIAFQANAHAFAPIgHANQgJAOgFARQgGAPABAUQAAARAGANIgBAC");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DBB00").s().p("AAGBPQgLgHgLgRIABgCQgGgNAAgRIAAgDQAAgSAFgOQAFgRAJgOIAHgNIASgMQAhgSAXAcQAKAKAEAQQAEAQgCATQgCASgGAQQgHARgMANQgLALgRAFQgHACgHAAQgLAAgJgGgAhKBAIgMgPIgFgNQgFgQACgUQACgRAGgQQAGgRAJgMQAJgOAQgGIAQgCQAJABAIAFQANAHAFAPIgHANQgJAOgFARQgFAOAAASIAAADQAAARAGANIgBACQgLAQgRACIgGAAQgPAAgJgJgAgQA3g");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-8.4,19.3,17);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZAOQgDgFAAgGQAAgFADgFIAJgEQAEAAAEAEQADAFAAAFQAAAGgDAFIgIAFgAgpAIIgDgJIADgMQADgFAFAAQAFAAACAFQAEAFAAAHQAAAFgEAEIgHAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.8,9.1,3.9);


(lib.shape43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#216400").ss(1,1,1).p("AgQA3QALARALAHQAPAIATgEQARgFALgLQAMgNAHgRQAGgQACgSQACgTgEgQQgEgQgKgKQgXgcghASIgSAMIgHANQgJAOgFARQgGAPABAUQAAARAGANgAAFg4QgFgPgNgHQgIgFgJgBIgQACQgQAGgJAOQgJAMgGARQgGAQgCARQgCAUAFAQIAFANIAMAPQALALATgCQARgCALgQ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBPQgLgHgLgRIABgCQgGgNAAgRIAAgDQAAgSAFgOQAFgRAJgOIAHgNIASgMQAhgSAXAcQAKAKAEAQQAEAQgCATQgCASgGAQQgHARgMANQgLALgRAFQgHACgHAAQgLAAgJgGgAhKBAIgMgPIgFgNQgFgQACgUQACgRAGgQQAGgRAJgMQAJgOAQgGIAQgCQAJABAIAFQANAHAFAPIgHANQgJAOgFARQgFAOAAASIAAADQAAARAGANIgBACQgLAQgRACIgGAAQgPAAgJgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.4,19.2,17);


(lib.shape41 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#022C79").ss(1,1,1).p("ABphtIAHgBQATgBAEATQAEAUgRAGQgRAGgQgHIgMALIgaAbIgZAdIgZAaIABACIARAhIAPAfIAWADQAQAHgHARQgEALgLABQgUAAgIgOQgDALgIAKQgLAOgRgJQgRgJAJgSQAIgPATAAIgNgfIgJgTIgcAYIgdAaIABAGQACAPgOAGQgUAIgGgTQgFgRAOgLIgKAAQgPAAgDgMQgFgSARgGQAUgFAOARIAagZIAYgVIgHgLIgQgaIgKgSQgUAFgLgNQgNgPALgOQAKgMAUAAQAPABAGAHQAAgIALgJQAKgIAMAGQASAIgKAUQgHANgRALIAGAOQAHAPAIANIAWgdIAagbIAZgbIANgMQgLgRACgTQABgIAHgEIAegBQAPAMgLAZgAABAaIgPgbIAAgBAgUAzIgHgNIgKgT");
	this.shape.setTransform(73.3,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00246F").ss(1,1,1).p("Ah1DTIglgFIgkgFQgOgCgLgHQgLgJgFgRQgIgRgEgQQgEgSAAgTQgBgUAJgPQAHgNARgFQASgFAKANQAKAOAGAPQAHARAOAJIAJAFQgBgVACgTIAEgmQADgSAGgQIAMgjIAOghIAQghQAIgRAKgPIAQgWIALgNQAhgfAqgRIAQgEQAzgOAlAiIAFAFQAgAhgHAxIgEAmIgEAQIgKAjIgKAgIgLAhIgLAiIgOAeIAPgNQAMgNAPgLIAdgTQAQgJARgCQATgCALAMQAKALAAAVQAAAQgGASIgOAhIgSAcIgVAaIgaAVIgRAEIgmABIgagBIgMAAIglgCIglgEIgmgEIglgBIgmgD");
	this.shape_1.setTransform(72.6,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#216400").ss(1,1,1).p("ABRmKQADAGgCAQQgDARAAAUQAAATAJAOQAJAPAEARQAFARACASQABATgEATIgJAiQgFARgJAPQgKAPgQAJQgLAGgOADQgUA2gDASQgDATgBARQgBAUAFASQAEASAJAPQAJAOAOAJQANAJAQAGQAQAGASACIAlADIAmAAIAlAFQARAEAQALQAPAJAJAQIARAfIgJADIgkAHIgmAFIgkAHQgSAEgRAIIghAOIglAIIgkgDIAFAhIABAAQAMAHAEAPQAFATgKANQgKAOgQAKIgdASIgfAQQgSAKgRgHIgXgBQgQgLASgQIgNAFQgSAGgPgKQgIgEABgIIABgDQgQADgPAHQgOAHgUADQgVACgIgPQgKgRALgOQAJgMARgKQAQgJARgGIAjgJIgKgkQgFgRgDgTIgFgmQgCgUAFgQIgDgMQgEgSAAgUIABgNIADgZIAEgUQAJgmAYg4IABgFQgEgJAAgJIAAgaIgVgJQgMgIgGgRQgGgQABgUIgCAAIgmgEIgmgCIgmgEIAAgEQgBgSAEgPIACgGQAEgMAJgKQAKgMASgGIAlgFIAiAAAhqkIIABgBIACAEAhOl7IgEAEIAAgBAh2mZIgBAAAh+g3IgCgDAiEhmIAMACIAiADIAigCIAQgCAipBWQATAHASABIAmACIAZAAAh3guIgHgJAAdDmIADAaIABADAg/CMIAAAJIACAmIABAGIAFAfIAJAkIADAKQgdgNgOgKIgagVIgYgZIgKgNIgJgQIgIgXAiSC8QASAGATAAIAmABIALgCAhcF7IAQgJAiQFtQADgOANgKIAegTQAPgIAQgHQAQgHARgGAhHGXIABgBQAPgJAKgK");
	this.shape_2.setTransform(72.8,84.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1368C6").s().p("ABTDhIgMAAIgmgCIgkgEIgmgEIglgBIgmgDIgBAAIglgFIglgFQgNgCgLgHQgMgJgEgRQgIgRgEgQQgEgSAAgTQgBgUAJgPQAGgNASgFQASgFAKANQAKAOAGAPQAHARAOAJIAJAFQgBgVACgTIADgmQAEgSAFgQIANgjIAOghIAQghQAIgRAKgPIAQgWIALgNQAhgfAqgRIAQgEQAzgOAlAiIAFAFQAfAhgGAxIgEAmIgEAQIgKAjIgKAgIgLAhIgLAiIgOAeIAPgNQALgNAQgLIAdgTQAQgJARgCQATgCALAMQAKALgBAVQAAAQgFASIgOAhIgSAcIgVAaIgaAVIgRAEIgmABgAgDB6IAMAfQgTAAgHAPQgJASAQAJQAQAJAMgOQAJgKACgLQAJAOAUAAQAKgBAFgLQAGgRgQgHIgWgDIgPgfIgRghIgBgCIAZgcIAagdIAZgZIAMgLQAQAHARgGQARgGgEgUQgEgTgSABIgIABQALgZgPgMIgeABQgHAEgBAIQgCATALARIgMAMIgaAbIgaAZIgWAdQgIgNgGgPIgHgOQASgJAGgNQAIgUgQgIQgLgGgKAIQgLAJAAAIQgHgHgPgBQgTAAgLAMQgKAOANANQAKANAVgFIAJASIAQAcIAHALIgXAVIgaAZQgPgRgTAFQgSAGAFASQADAMAQAAIAKAAQgOALAFARQAFATAVgIQAOgGgCgPIgBgGIAcgaIAcgYg");
	this.shape_3.setTransform(72.6,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DBB00").s().p("AhHGXIABgBQAPgJAKgKQgKAKgPAJIgBABIgXgBQgQgLASgQIgNAFQgSAGgPgKQgIgEABgIIABgDQgQADgPAHQgOAHgUADQgVACgIgPQgKgRALgOQAJgMARgKQAQgJARgGIAjgJIgKgkQgFgRgDgTIgFgmQgCgUAFgQIgDgMQgEgSAAgUIABgNIADgZIAEgUQAJgmAYg4IADgCIgCgDQgEgJAAgJIAAgaIgVgJQgMgIgGgRQgGgQABgUIgCAAIgmgEIgmgCIgmgEIAAgEQgBgSAEgPIACgGQAEgMAJgKQAKgMASgGIAlgFIAiAAIALAPQAMALATgCQARgCAKgQIADADQAIAPAOAHQAOAIATgFQARgEALgMQANgNAGgRQAEgPACgTQADgUgFgRQgDgPgJgLQgXgbggASQgIAEgGAFIgEADQgIgPgNgIQgIgEgIgBIAAgFIABAAIAmADIAlACIAmADIAlAEIAlACIAMABQADAGgCAQQgDARAAAUQAAATAJAOQAJAPAEARQAFARACASQABATgEATIgJAiQgFARgJAPQgKAPgQAJQgLAGgOADQgUA2gDASQgDATgBARQgBAUAFASQAEASAJAPQAJAOAOAJQANAJAQAGQAQAGASACIAlADIAmAAIAlAFQARAEAQALQAPAJAJAQIARAfIgJADIgkAHIgmAFIgkAHQgSAEgRAIIghAOIglAIIgkgDIAFAhIABAAQAMAHAEAPQAFATgKANQgKAOgQAKIgdASIgfAQQgLAGgKAAQgHAAgHgDgAhcF7IAQgJgAhDEzQgQAHgPAIIgeATQgNAKgDAOQADgOANgKIAegTQAPgIAQgHIAhgNIghANgAiIDJIAYAZIAaAVQAOAKAdANIgDgKIgJgkIgFgfIgBgGIgCgmIAAgJIAAAJIACAmIABAGIAFAfIAJAkIADAKQgdgNgOgKIgagVIgYgZIgKgNQASAGATAAIAmABIALgCIgLACIgmgBQgTAAgSgGIgJgQIgIgXIAIAXIAJAQgAAgEAIABADIgBgDIgDgagAiEBeIAmACIAZAAIgZAAIgmgCQgSgBgTgHQATAHASABgAh3guIgHgJgAhWhhIAigCIAQgCIgQACIgiACIgigDIgMgCIAMACIAiADgAiSC8IAAAAg");
	this.shape_4.setTransform(72.8,84.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRCPQgRgJAJgSQAIgPATAAIgNgfIgJgTIgHgNIgKgTIAKATIAHANIgcAYIgdAaIABAGQACAPgOAGQgUAIgGgTQgFgRAOgLIgKAAQgPAAgDgMQgFgSARgGQAUgFAOARIAagZIAYgVIgHgLIgQgaIgKgSQgUAFgLgNQgNgPALgOQAKgMAUAAQAPABAGAHQAAgIALgJQAKgIAMAGQASAIgKAUQgHANgRALIAGAOQAHAPAIANIAWgdIAagbIAZgbIANgMQgLgRACgTQABgIAHgEIAegBQAPAMgLAZIAHgBQATgBAEATQAEAUgRAGQgRAGgQgHIgMALIgaAbIgZAdIgZAaIABACIARAhIAPAfIAWADQAQAHgHARQgEALgLABQgUAAgIgOQgDALgIAKQgIAJgHAAQgGAAgHgEgAgOgBIAPAbIgPgbIAAgBgAgUAzg");
	this.shape_5.setTransform(73.3,27.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(43.4,0,58.8,125.9);


(lib.shape39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B9FD7").s().p("EgpjAFKIAAqTMBTHAAAIAAKTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-265.9,-32.9,532,66);


(lib.shape37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8D179").s().p("AkbEpQgBgIgBggQAAgSANhNQANhLgBgbIAAgdQgEgNgPACQgLAcgWBKQgVBCggAaIgCgEIgCAAIAAgZIAih6QBOi2AzjNQB9AyBiAAQBlAACFgyQAxDmBGDNQgDADgEAAQgkAAgohUIgcg5QgPgagQgBQgKAAgEAGQgGAFABAUQAAASATAkQATAkgNACQg1gNgZg6QgIgVgYhgQgeglgFAlIAJA/QAQAigfgBQgbACgCg1QgDg2gRAAQgTgBgHAQQgEALgBAaQABAkAWBkQAWBlAAAcIAAAZQgBAPgNABQgigBgWiEQgNhFgGgWQgNgogSAAQgJABgOAPQgOAQAAAOQgBAMAGAtQAAApgcAAQgOAAgLg7QgLg+gJAGQgcAMgCAnIgHBwQgHB5gsAtQgOgEgEgXg");
	this.shape.setTransform(400.5,102);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82B5DF").s().p("A1BQAQo0itgchFQgchGIqjrQIqjrE4nHQE5nJCJlDIgjB5IAAAZIADABIACAEQAfgaAWhCQAVhLALgcQAQgBADANIABAcQAAAbgMBMQgNBMAAATQAAAfACAJQAEAWAOAFQAqguAHh5IAHhvQABgnAdgPQAJgFALBAQAKA6APAAQAbAAABgoQgGgtAAgMQAAgQAPgQQAOgQAJAAQASAAANAqQAGAWANBFQAXCEAiAAQANAAACgPIAAgZQAAgcgWhlQgXhmAAgkQAAgaAFgMQAHgPASABQASAAADA2QACA1AbgDQAfACgQgiIgKg/QAGglAdAlQAYBgAJAVQAZA8A1ANQANgCgTglQgTglAAgTQgBgTAFgGQAFgFAKAAQAPAAAQAbIAcA6QAoBVAkAAQAEAAADgEQBgEXCKDsQEBG0FUCvQHyDGAADlQAAD0o0CtQozCsseAAQsbAAo0isg");
	this.shape_1.setTransform(376.5,207.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(182.6,69.5,388,258);


(lib.shape35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#86C7F0","#E6F8FF"],[0,1],-2,-138.6,-6.9,230.5).s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DD1F2").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,26,26);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABchbQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9DD1F2").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,26,26);


(lib.shape30 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C5A01").ss(1,1,1).p("AgaAUIAJgYQAPgeATAbIAKAN");
	this.shape.setTransform(-68.9,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(37,78,1,0.498)").s().p("AgZAYIgDgEIAKgYIABgCQAHgNAJAAIAAAAIAAAAQAGAAAIAKIAAAAIACACIAAAAIALANQAGANgGAFgAgSgIQAPgeASAcIALAQIgLgNIAAAAIgCgCIAAAAQgIgKgGAAIAAAAIAAAAQgJAAgHANIgBACIgKAYQgBgIALgUgAAaAGg");
	this.shape_1.setTransform(-68.8,-13.4);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#254E01").ss(1,1,1).p("AgZgLQAEAFAXAJQAZAMgBgE");
	this.shape_2.setTransform(2,-0.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMATQgFgIAAgLQAAgKAFgJQAGgIAGAAQAHAAAFAIQAGAJAAAKQAAALgGAIQgFAJgHAAQgGAAgGgJg");
	this.shape_3.setTransform(-3.4,-15.7);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2C5A01").ss(1,1,1).p("ABKAXQADA9hQgJQhFgHgBgtQgBgOAHgRQAbhNAwAMQAxALAPBIg");
	this.shape_4.setTransform(0,-16.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.7,-24,79.1,24.9);


(lib.shape29 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBLQhbgJAbhKQAbhNAwAMQAyALAOBIQANBChHAAIgRgBg");
	this.shape.setTransform(-0.1,-16.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#559203").s().p("AF1BkQiihLgkgZQgkgXgqhRQgrhQhEgCQg+gCgjBNQAuhvBBACQBDACAzBQQAyBRAmAPIDPBUQCpBGCMA1IgvA4QiLgvijhKgAp0gqQgHgjgZgWQgZgWgZABIgLADQAKgNAPgEQAcgIAXAQQAYAPAGAjQB5AZCXgQIDigcQgcA7ivALQgwADgtAAQh2AAhhgUg");
	this.shape_1.setTransform(-0.5,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E8404").s().p("AAkgaQhxBHi/gkQi/ghhYADQhZADhNgPQABhEAJgjIAFgSIAPgZIALgDQAZgBAZAXQAZAWAHAiQCFAcCvgLQCvgKAcg7IACgFIAEgLQAjhOA8ACQBGACArBRQAqBQAkAZQAkAZCiBJQCjBLCLAvIgeAlQgaA0hFAAQigAAmIkTg");
	this.shape_2.setTransform(-4.3,0.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1B301").s().p("AlthWQA9hggGgrIKkDGIi2D9QnbhjhKjVg");
	this.shape_3.setTransform(30.4,19.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#254E01").ss(2.3,1,1).p("AAIhaQh3BDi1ghQi/gjhYADQhZAChMgPQABhWANgiQAOgjAbgHQAbgIAYAQQAXAPAHAjQBxAZCUgOQCUgPBYgPQAwh/BEACQBFACAzBQQAyBRAlAPIDPBWQCqBGCMAzIgwA7IABAAIi2EAQlEhEiKh5");
	this.shape_4.setTransform(-1.9,7.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-27.6,147.5,70.2);


(lib.shape27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1B301").s().p("ACbBpQiHgkhjgsQg2gYgYgPQh7gQh3gZIhBhJQBNAPBSgGQBSgGC+AYQC8AXCXgyIgsBYQBGALA1AaQBWAogHAjQgGAjhUARQgbAFgfAAQhEAAhdgYg");
	this.shape.setTransform(-29.4,10.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-2.1,93.1,25.9);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAgIAQhDIARBDQgKAEgHAAQgIAAgIgEg");
	this.shape.setTransform(0,-1.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-5.6,3.5,7.3);


(lib.shape24 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183201").s().p("Ak5AmIhBhHQAFgJAigDIBpgFQCNgHCsAYQCuAYB8gyIADAyQj7BFjUAAQh5AAhtgWg");
	this.shape.setTransform(-37.9,0.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#254E01").ss(2,1,1).p("Ak/iEQCNgHCuAYQCsAYB7gyIACAeIANgEIgMAXIAAABIggBAQBGALA1AYQBWAqgHAjQgGAjhUARQhUAQiHgjQiHgkhjgsQg2gYgYgPQhtgPhqgVIgbgFIhBhJQAGgJAigDg");
	this.shape_1.setTransform(-29.4,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-5.1,93.1,28.8);


(lib.shape21 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#355355").ss(0.3,1,1).p("AAjhnQA7gGA4AWQA8AYAQAsIAGgBQAEABgBAGIgDAIQgBACgHACIgOABQgXAAgPAOQgNAKAOAMIALAJQAGAFgCAFIgEAFIgHACQgCAAgHgFQgQAGgcgHIAFANQAFASgSAMIgOAGIgKgBQgEgDgCgOIgFgdIgFgUIgQgHIgKASIgNAdQgGAOgFACIgKgCIgNgKQgNgQAJgRQAIgUAWgNIgMgHQg0gTgygBIAAAHQgBAGgHAOQgKAUgRAQQgYAYgRAGQgPAGAAgIIAMgkQAOgiAAgKQgBgJgpANIgcAKQgNAEgBgEQAAgFAKgLQAMgQAPgMQAqgjAoAQIAIAEIARgPQAtghBQgKg");
	this.shape.setTransform(-5.1,2.2);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32959C").s().p("AgOAqIgNgJQgPgRAIgQQAMgXAegPQATgJAIAFIADAFIAAACIgUAjIgOAdQgEAOgEACg");
	this.shape_1.setTransform(-1.7,7);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32959C").s().p("AgcAdQgOgOgCgHQgIghBfgPQADABgBAFIgCAIQgCADgGABIgPABQgUADgQANQgNAJAPAMIALAJQADAFAAAEIgEAGIgHABQgEAAgNgMg");
	this.shape_2.setTransform(13.9,4.1);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(50,149,156,0.702)").s().p("AgDA1IgKgKQgNgTAEgYQAEgWAUgTIAQgLIAGgEQgiAtACAlQABAUAHALg");
	this.shape_3.setTransform(0.1,-1.7);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#317480").s().p("AgEAJIgfAKIgEgQIAfgHIgJgfIAPgFIAGAgIAggJIAEAOIgfAIIAJAfIgPAEg");
	this.shape_4.setTransform(7.7,-1.8);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#32959C").ss(1,1,1,3,true).p("AgPhQQA5gHA4AWQA/AZAOAtIgVAEQgOABgDADIgBAAIgSASQgNAOAFAJIAEAKQADAGAIAFQgWARg7gXIhNgmQg3gVg0gBIgaABIgIgDIAAgDQAAgFAHgLQAJgOAQgMQAughBRgJg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#50CAD3").s().p("AAsBFIhNgmQg3gVg0gBIgaABIgIgDIAAgDQAAgFAHgLQAJgOAQgMQAughBRgJQA5gHA4AWQA/AZAOAtIgVAEQgOABgDADIgBAAIgSASQgNAOAFAJIAEAKQADAGAIAFQgKAHgQAAQgVAAgigNg");

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F8991").s().p("AgHAtQgEgDgCgOIgFgcIgKgmQAAgEAEgBQAIgDAPANQAYAVAFAWQAFARgSAMIgOAGg");
	this.shape_7.setTransform(5,8);

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32959C").s().p("AgQBBQAAgEANggQALgfAAgKQAAgLgoAPIgcAIQgNADAAgDQAAgDAKgNQALgQAPgMQApgkAoARQASAIAGAKQAGAJgBARQgBAJgHAMQgKATgQARQgYAXgQAGQgGADgDAAQgFAAgBgFg");
	this.shape_8.setTransform(-21,3.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.7,-8.3,47.2,21.1);


(lib.shape18 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-55,0,55.2,0).ss(1,1,1).p("AohgVQhRASSZAZ");
	this.shape.setTransform(51.3,-1.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,255,255,0.251)","rgba(255,255,255,0)"],[0,1],-55.2,1.4,55,1.4).ss(1,1,1).p("AoegjQhWAsSZAb");
	this.shape_1.setTransform(48.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-3.5,112.9,7.3);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AibB/QBsjVDLgnQgqBlAECXg");
	this.shape.setTransform(0,-12.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-25.3,31.3,25.4);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AkcDFIAAmJII5AAIAAGJg");
	this.shape.setTransform(0,-19.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.4,-39.4,57,39.5);


(lib.shape12 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.749)").ss(1,1,1).p("Ag5AAIBzAA");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABUgJQAjAEAAAFQAAAFgjAFIhUAEIhTgEQgjgFAAgFQAAgFAjgEIBTgEg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-1.4,23.8,3);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAAIADgLIAVgBIACACIADAKIgDAIIgMAFg");
	this.shape.setTransform(0,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.1,3,2.8);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite96 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape97("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite92 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape93("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite89 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape90("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	
	this.frame_1 = function() {
		playSound("sound91");
	}
	this.frame_7 = function(){
   this.stop ();
   if (!this.parent.gameWin)
   {
      this.parent.parent.raiseCroc();
   }
   else
   {
      //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
      this.parent.parent.GameWon = true;
   } // end else if	
	}
	this.frame_8 = function() {
		playSound("sound95");
		var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = lib.sprite7Puff(); //attachMovie("Puff", "puff" + i, i);
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
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step;
        if (evt.currentTarget.scaleX <= 0)
        {
            self.removeChild(evt.currentTarget);
        } // end if
    });
    } // end of for
		
	}
	
	this.frame_16 = function(){
	  this.parent.gotoAndStop(this.parent.currentFrame - 1);  // prevFrame();
    this.parent.lose();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(8).call(this.frame_16));

	// Layer 3
	this.instance = new lib.sprite89();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(10));

	// Layer 2
	this.instance_1 = new lib.sprite92();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(9));

	// Layer 1
	this.instance_2 = new lib.shape94("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(9));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
    this.score = function ()
    {
      this.gotoAndStop(this.currentFrame + 1); //nextFrame ();
      this["star" + this.currentFrame].gotoAndPlay("point");
    } // End of the function
    this.lose = function ()
    {
      if (this.currentFrame > 0)
      {
        this["star" + this.currentFrame].gotoAndPlay("loss");
      } // end if
    } // End of the function
    this.stop ();
    this.gameWin = false;  
  }
  this.frame4 = function(){
    this.gameWin = true;
  }
  
	// Layer 3
	this.star3 = new lib.sprite88();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(4));

	// Layer 2
	this.star2 = new lib.sprite88();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(4));

	// Layer 1
	this.star1 = new lib.sprite88();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3).call(this.frame4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,109.5,30.1);


(lib.sprite70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape71("synched",0);

	this.instance_1 = new lib.shape74("synched",0);

	this.instance_2 = new lib.shape75("synched",0);

	this.instance_3 = new lib.shape76("synched",0);

	this.instance_4 = new lib.shape77("synched",0);

	this.instance_5 = new lib.shape80("synched",0);

	this.instance_6 = new lib.shape81("synched",0);
	this.instance_6.setTransform(0,-2.2);

	this.instance_7 = new lib.shape82("synched",0);

	this.instance_8 = new lib.shape83("synched",0);

	this.instance_9 = new lib.shape84("synched",0);

	this.instance_10 = new lib.shape85("synched",0);

	this.instance_11 = new lib.shape86("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6,p:{y:-2.2}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_6,p:{y:0}}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Layer 1
	this.instance_12 = new lib.shape72("synched",0);

	this.instance_13 = new lib.shape73("synched",0);

	this.instance_14 = new lib.shape78("synched",0);

	this.instance_15 = new lib.shape79("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-8.7,100.2,19.1);


(lib.sprite69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite70();
	this.instance.setTransform(482.7,-0.5,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-270.7},400).wait(1).to({x:-272.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(466.2,-3.1,30.1,5.7);


(lib.sprite64 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape65("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.1,-2.8,136.3,5.9);


(lib.sprite63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite64();
	this.instance.setTransform(0.1,0.1,0.864,0.864);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93,alpha:0.59},3).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.789},0).to({scaleX:1.27,scaleY:1.27,alpha:0.051},14).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-2.4,117.8,5.1);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 5
	this.ripples = new lib.sprite63();
	this.ripples.setTransform(569.3,284.7,0.75,0.75);
	this.ripples.alpha = 0;

	// Layer 4
	this.instance = new lib.text67("synched",0);
	this.instance.setTransform(-46.1,266.8,1.395,1.395,0,0,0.9);

	// Layer 3
	this.instance_1 = new lib.shape66("synched",0);

	// Layer 2
	this.instance_2 = new lib.sprite63();
	this.instance_2.setTransform(79.3,284.7);

	// Layer 1
	this.instance_3 = new lib.shape62("synched",0);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance,this.ripples);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,248.3,628.5,91.8);


(lib.sprite59 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape60("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.9,-39.3,85,45.7);


(lib.sprite57 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape58("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.8,-13.4,73.9,27);


(lib.sprite50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape51("synched",0);

	this.instance_1 = new lib.shape52("synched",0);

	this.instance_2 = new lib.shape53("synched",0);

	this.instance_3 = new lib.shape54("synched",0);

	this.instance_4 = new lib.shape55("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.4,30.4,60.2);


(lib.sprite47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
  this.frame2 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape49("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape48("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-4.8,23.9,9.7);


(lib.sprite44 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape45("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.8,9.1,3.9);


(lib.sprite42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 3
	this.instance = new lib.shape46("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(4));

	// Layer 2
	this.instance_1 = new lib.sprite44();
	this.instance_1.setTransform(-3.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_2 = new lib.shape43("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.4,19.2,17);


(lib.sprite40 = function() {
	this.initialize();

	// Layer 4
	this.arm = new lib.sprite50();
	this.arm.setTransform(52,79.9,0.999,0.999,16.8);

	// Layer 3
	this.mouth = new lib.sprite47();
	this.mouth.setTransform(67,62.8);

	// Layer 2
	this.eyes = new lib.sprite42();
	this.eyes.setTransform(63.9,52.8);

	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.addChild(this.instance,this.eyes,this.mouth,this.arm);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(35.9,0,66.3,141.9);


(lib.sprite38 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape39("synched",0);
  var i = 0;
  var self = this;
  this.on("tick", function ()
  {
    i = i + 1.000000E-001;
    self.rotation = Math.sin(i);
    self.y = self.startY + 4 * Math.cos(i);
  });
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-265.9,-32.9,532,66);


(lib.sprite31Smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame89 = function(){this.stop()}
	
	// Layer 1

	this.instance = new lib.shape33("synched",0);

	this.instance_1 = new lib.shape34("synched",0);

 	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},87).to({state:[{t:this.instance_1}]},1).wait(1));

  this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame89))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-12.9,26,26);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-5.6,3.5,7.3);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 25
	this.instance = new lib.sprite25();
	this.instance.setTransform(-70.3,-1.7,1,0.695,5.3);

	// Layer 24
	this.instance_1 = new lib.sprite25();
	this.instance_1.setTransform(-66.2,-1.5,1,0.968,3.5);

	// Layer 23
	this.instance_2 = new lib.sprite25();
	this.instance_2.setTransform(-61.8,-1.6);

	// Layer 22
	this.instance_3 = new lib.sprite25();
	this.instance_3.setTransform(-55.1,-1.7,1,1,-1.4);

	// Layer 21
	this.instance_4 = new lib.sprite25();
	this.instance_4.setTransform(-52.3,-1.7,1,0.817);

	// Layer 20
	this.instance_5 = new lib.sprite25();
	this.instance_5.setTransform(-45.5,-1.4,1,1,3.3);

	// Layer 19
	this.instance_6 = new lib.sprite25();
	this.instance_6.setTransform(-38.5,-0.7);

	// Layer 18
	this.instance_7 = new lib.sprite25();
	this.instance_7.setTransform(-31.5,-0.1,1,1.256,4.1);

	// Layer 17
	this.instance_8 = new lib.sprite25();
	this.instance_8.setTransform(-27.5,0.5);

	// Layer 16
	this.instance_9 = new lib.sprite25();
	this.instance_9.setTransform(-20.6,0.9,1,0.829,-3);

	// Layer 15
	this.instance_10 = new lib.sprite25();
	this.instance_10.setTransform(-13.8,0.2);

	// Layer 14
	this.instance_11 = new lib.sprite25();
	this.instance_11.setTransform(-9.9,0.3,1,1.292,-3.7);

	// Layer 13
	this.instance_12 = new lib.shape27("synched",0);

	// Layer 12
	this.instance_13 = new lib.sprite25();
	this.instance_13.setTransform(-8.1,-3.2,1,0.89);

	// Layer 11
	this.instance_14 = new lib.sprite25();
	this.instance_14.setTransform(-15,-2.4,1,1,-4.9);

	// Layer 10
	this.instance_15 = new lib.sprite25();
	this.instance_15.setTransform(-21.9,-2.2,1,1.244);

	// Layer 9
	this.instance_16 = new lib.sprite25();
	this.instance_16.setTransform(-25.7,-2.4,1,1,-2.2);

	// Layer 8
	this.instance_17 = new lib.sprite25();
	this.instance_17.setTransform(-32.8,-3.3,1,0.854);

	// Layer 7
	this.instance_18 = new lib.sprite25();
	this.instance_18.setTransform(-40,-4.1);

	// Layer 6
	this.instance_19 = new lib.sprite25();
	this.instance_19.setTransform(-47.5,-4.6,1,1.207,3);

	// Layer 5
	this.instance_20 = new lib.sprite25();
	this.instance_20.setTransform(-54.2,-4.8);

	// Layer 4
	this.instance_21 = new lib.sprite25();
	this.instance_21.setTransform(-60.5,-4.7,1,1,5.8);

	// Layer 3
	this.instance_22 = new lib.sprite25();
	this.instance_22.setTransform(-64.5,-4.6,1,1.159);

	// Layer 2
	this.instance_23 = new lib.sprite25();
	this.instance_23.setTransform(-70.6,-4.3);

	// Layer 1
	this.instance_24 = new lib.shape24("synched",0);

	this.addChild(this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-11.5,93.1,35.3);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape14("synched",0);
	this.instance.setTransform(0,5,0.175,0.253);
 	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);

(lib.sprite19_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape14("synched",0);
	this.instance.setTransform(0,5,1.43,0.69);
 	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-3.5,112.9,7.3);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape16("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-25.3,31.3,25.4);


(lib.sprite13Shark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
  this.frame16 = function(){this.stop()}
	// Layer 5
	this.hit = new lib.sprite19();
	this.hit.setTransform(0,0,5.873,1.706);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(16));

	// Layer 4
	this.instance = new lib.sprite17();
	this.instance.setTransform(-11.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99,alpha:0.988},1).wait(1).to({scaleX:0.99,scaleY:0.99,x:-11,y:3.3,alpha:0.977},0).to({scaleX:0.97,scaleY:0.97,x:-10.3,alpha:0.941},1).wait(1).to({scaleX:0.95,scaleY:0.95,x:-9.7,y:3.2,alpha:0.906},0).to({scaleX:0.92,scaleY:0.92,x:-8.5,y:3.1,alpha:0.844},1).wait(1).to({scaleX:0.89,scaleY:0.89,x:-7.4,alpha:0.785},0).to({scaleX:0.84,scaleY:0.84,x:-5.8,y:2.9,alpha:0.703},1).wait(1).to({scaleX:0.8,scaleY:0.8,x:-4.3,y:2.8,alpha:0.621},0).to({scaleX:0.74,scaleY:0.74,x:-2.2,y:2.6,alpha:0.516},1).wait(1).to({scaleX:0.69,scaleY:0.69,x:-0.2,y:2.5,alpha:0.41},0).to({scaleX:0.54,scaleY:0.54,x:4.8,y:2.1,alpha:0.137},2).wait(1).to({scaleX:0.47,scaleY:0.47,x:7.4,y:1.9,alpha:0},0).to({_off:true},1).wait(2));

	// Mask Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcDFIAAmJII5AAIAAGJg");
	mask.setTransform(0,-19.7);

	// Masked Layer 2 - 1
	this.fin = new lib.sprite15();
	this.fin.setTransform(0,0,1.002,1);

	this.fin.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.fin).to({y:18},11).wait(1).to({y:19.7},0).to({y:23.2},1).wait(1).to({y:26.8},0).to({_off:true},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(15).call(this.frame16).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-25.3,124.2,34);


(lib.sprite11Wave = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape12("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.8,-1.4,23.8,3);


(lib.sprite9Splash = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape10("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.1,3,2.8);


(lib.sprite7Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape8("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.hit = new lib.sprite19();
	this.hit.setTransform(34.9,0,1.902,1.214);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(5));

	// Layer 1
	this.instance = new lib.sprite57();
	this.instance.setTransform(12.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10.6},1).wait(1).to({x:8.8},0).to({x:10.6},1).wait(1).to({x:12.5},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-13.4,73.9,27);


(lib.sprite28 = function() {
	this.initialize();

	// Layer 10
	this.instance = new lib.shape30("synched",0);

	// Layer 9
	this.instance_1 = new lib.sprite25();
	this.instance_1.setTransform(-14,2.3,0.999,0.994,170.2);

	// Layer 8
	this.instance_2 = new lib.sprite25();
	this.instance_2.setTransform(-21.6,2.4,1,1,180);

	// Layer 7
	this.instance_3 = new lib.sprite25();
	this.instance_3.setTransform(-28.2,2,1,1.171,180);

	// Layer 6
	this.instance_4 = new lib.sprite25();
	this.instance_4.setTransform(-32.9,1,1,1,-176.1);

	// Layer 5
	this.instance_5 = new lib.sprite25();
	this.instance_5.setTransform(-42.7,0,1,1,-174.6);

	// Layer 4
	this.instance_6 = new lib.sprite25();
	this.instance_6.setTransform(-51.7,-0.7,1,1,-176.3);

	// Layer 3
	this.instance_7 = new lib.sprite25();
	this.instance_7.setTransform(-55.4,-0.7,1,1.22,180);

	// Layer 2
	this.instance_8 = new lib.sprite25();
	this.instance_8.setTransform(-64.3,-1.3,1,1,175.7);

	// Layer 1
	this.instance_9 = new lib.shape29("synched",0);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-27.6,147.5,70.2);


(lib.sprite20Ball = function() {
	this.initialize();
  this.name = "ball";
	// Layer 2
	this.hit = new lib.sprite19();
	this.hit.alpha = 0;

	// Layer 1
	this.instance = new lib.shape21("synched",0);

	this.addChild(this.instance,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.7,-8.3,47.2,21.1);


(lib.sprite22Croc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 4
	this.hit = new lib.sprite19_1();
	this.hit.setTransform(-26.7,-5.4);  //,8.171,2.731
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(14));

	// Layer 3
	this.instance = new lib.sprite28();
	this.instance.setTransform(9.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:16.8,x:23.6,y:-8.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.8,x:34.9,y:-17.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.6,x:43.6,y:-24.1},0).wait(1).to({rotation:49.4,x:50,y:-29},0).wait(1).to({rotation:53.9,x:53.7,y:-32},0).wait(1).to({scaleX:1,scaleY:1,rotation:55.4,x:55,y:-33},0).to({rotation:53,x:53,y:-31.4},1).wait(1).to({scaleX:1,scaleY:1,rotation:50.6,x:51.1,y:-29.9},0).wait(1).to({rotation:43.4,x:45.2,y:-25.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.9,x:35.8,y:-17.9},0).to({scaleX:1,scaleY:1,rotation:18.1,x:24.5,y:-9.1},1).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:13.3,y:-0.2},0).wait(1).to({rotation:0,x:9.8,y:2.4},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.sprite20Ball();
	this.instance_1.setTransform(16.5,-36.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:26.1,x:41.1,y:-36.7},2).wait(1).to({rotation:39.1,x:53.4,y:-37},0).wait(1).to({scaleX:1,scaleY:1,rotation:38.1,x:52.7,y:-35.2},0).to({rotation:35.2,x:50.1,y:-29.1},1).wait(1).to({rotation:32.3,x:47.6,y:-23.1},0).wait(1).to({rotation:28.3,x:44,y:-14.6},0).to({rotation:24.7,x:40.8,y:-7.2},1).wait(1).to({rotation:21,x:37.6,y:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:19.8,x:36.5,y:2.7},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite23();
	this.instance_2.setTransform(10,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1,scaleY:1,rotation:-1.1,x:30,y:-13.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.9,x:41.9,y:-22.7},0).wait(1).to({rotation:-2.3,x:45.9,y:-25.7},0).wait(1).to({rotation:11.3,x:48.2,y:-27.5},0).to({scaleX:1,scaleY:1,rotation:33.3,x:51.9,y:-30.3},1).wait(1).to({scaleX:1,scaleY:1,rotation:55.4,x:55.7,y:-33.2},0).to({rotation:53,x:53.7,y:-31.7},1).wait(1).to({scaleX:1,scaleY:1,rotation:50.6,x:51.7,y:-30.2},0).wait(1).to({rotation:43.4,x:45.8,y:-25.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:31.9,x:36.3,y:-18.4},0).to({scaleX:1,scaleY:1,rotation:18.1,x:24.9,y:-9.6},1).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:13.6,y:-0.8},0).wait(1).to({rotation:0,x:10,y:1.7},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-25.3,149.1,70.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;