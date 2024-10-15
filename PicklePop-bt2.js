(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.PicklePop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:1});
  var self = this; 
  _root = this; 
  this.frame1 = function(){this.GameWon = false;}
  this.frame15 = function(){
    this.bubbles.removeAllChildren()
  }
  this.frame16 = function(){
   this.startBubbles = function()
   {
    i = 0;
    wind = 0;
    numBubbles = numBubbles + 1;
    if (bubbleSize > 0)
    {
        bubbleSize = bubbleSize - 10;
    } // end if
    this.bubbleCount = numBubbles;
    this.blower.gotoAndPlay(0);
    if (numBubbles == 4 || numBubbles == 7)
    {
        crazy_kid = playSound("sound1crazykidwav");
    } // end if
    this.addEventListener("tick", blowBubbles);
   } // End of the function
   function blowBubbles()
   {
    if (Math.random() * 10 < 1)
    {
        wind = Math.random() * 6.000000E-001 - 3.000000E-001;
    } // end if
    ++oddCount;
    if (oddCount > 1)
    {
        oddCount = 0;
        if (i >= numBubbles)
        {
            self.removeEventListener("tick", blowBubbles);
            self.blower.gotoAndPlay("blow");
        }
        else
        {   
            ++i; 
            self["bubble" + i] = new lib.sprite5Bubble();  // this.attachMovie("Bubble", "bubble" + i, i);
            self.bubbles.addChild(self["bubble" + i]);
            self["bubble" + i].x = startX;
            self["bubble" + i].y = startY;
            self["bubble" + i].velX = Math.random() * 5 - 8;
            self["bubble" + i].velY = Math.random() * 5 - 5;
            self["bubble" + i].accelX = 0;
            self["bubble" + i].targetScale = Math.random() * 200 + bubbleSize + 150;

            self["bubble" + i].on("tick", function (evt)
            {
                if (evt.currentTarget.x >= 50)
                {
                    if (evt.currentTarget.x <= 500 - 50)
                    {
                        evt.currentTarget.accelX = 0;
                    }
                    else
                    {
                        evt.currentTarget.accelX = -3.000000E-001;
                    } // end else if
                }
                else
                {
                    evt.currentTarget.accelX = 3.000000E-001;
                } // end else if
                if (evt.currentTarget.scaleX < evt.currentTarget.targetScale/100)
                {
                    evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY + (evt.currentTarget.targetScale/100 - evt.currentTarget.scaleX) / 4;
                } // end if
                evt.currentTarget.velX = evt.currentTarget.velX + (evt.currentTarget.accelX + wind * 100 / this.targetScale);
                evt.currentTarget.velY = evt.currentTarget.velY + gravity;
                evt.currentTarget.speed = Math.sqrt(evt.currentTarget.velX * evt.currentTarget.velX + evt.currentTarget.velY * evt.currentTarget.velY);
                evt.currentTarget.velX = evt.currentTarget.velX * damp;
                evt.currentTarget.velY = evt.currentTarget.velY * damp;
                evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
                evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
                if (evt.currentTarget.y + 7.07*evt.currentTarget.scaleY * evt.currentTarget.shape.scaleY >= ground)
                {   
                    for(var k = 1; k <=numBubbles; k++) self["bubble" +k].removeAllEventListeners();
                    evt.currentTarget.play();
                    if (!self.gameOver)
                    {
                        self.gameOver = true;
                        self.starPoints.lose();
                    } // end if
                } // end if
                x = evt.currentTarget.x;
                y = evt.currentTarget.y;
                r = 7.07*evt.currentTarget.scaleY * evt.currentTarget.shape.scaleY;
                              
                if(self._char.seg_con.scaleX == 1){
                  x0 = self._char.x + self._char.seg0.x + 40*Math.cos(self._char.seg0.rotation*Math.PI/180);
                  y0 = self._char.y + self._char.seg0.y + 40*Math.sin(self._char.seg0.rotation*Math.PI/180);
                }else{
                  x0 = self._char.x + self._char.seg0.x - 40*Math.cos(self._char.seg0.rotation*Math.PI/180);
                  y0 = self._char.y + self._char.seg0.y - 40*Math.sin(self._char.seg0.rotation*Math.PI/180);
                }
                
                var r0 = Math.sqrt((x0-x)*(x0-x) + (y0-y)*(y0-y));
                
                if (r0 <= r && !evt.currentTarget.popping || self._char.hitTest(x-self._char.x, y-self._char.y)) 
                {     
                      console.log("hit a bubble...");
                      evt.currentTarget.popping = true;
                      evt.currentTarget.play();
                      //++score;
                      //self.scoreFld.text = score;
                } // end if
            });
        } // end if
    } // end else if
  
    
   } // End of the function
   this.stop ();
   var x, y, r, x0, y0, x1, y1, x2, y2, x3, y3, x4, y4;
   
   var wind = 0;
   var score = 0;
   var gravity = 8.000000E-002;
   var damp = 9.800000E-001;
   var i = 0;
   var startX = 383;
   var startY = 116;
   var ground = 310;
   var numBubbles = 2;
   this.bubbleCount = numBubbles;
   this.gameOver = false;
   var bubbleSize = 200;
   var oddCount = 1;
   //this.border.swapDepths(500000);
   //this.GameEndClip.swapDepths(600000);
   //this.swapChildren(this.border, this.GameEndClip);
   var crazy_kid ;
   
   this.startBubbles();  
  }  
  
  
  
	// Layer 11
	this.border = new lib.sprite69();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.border}]}).wait(16));

	// Layer 10
	this.instance = new lib.shape68("synched",0);
	this.instance.setTransform(447.2,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(16));

	// Layer 9
	this.starPoints = new lib.sprite58();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(16));

  // Bublle Layer

  this.bubbles = new cjs.Container();
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bubbles}]}).wait(16));
	// Layer 8
	this._char = new lib.sprite35();
	this._char.setTransform(288,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._char}]}).wait(16));

	// Layer 7
	this.blower = new lib.sprite24();
	this.blower.setTransform(426.7,183.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blower}]}).wait(16));

	// Layer 6
	this.instance_1 = new lib.sprite22();
	this.instance_1.setTransform(420,294.6,1.899,1.899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(16));

	// Layer 5
	this.charShadow = new lib.sprite22();
	this.charShadow.setTransform(275.6,310.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.charShadow}]}).wait(16));

	// Layer 4
	this.instance_2 = new lib.sprite20();
	this.instance_2.setTransform(257.5,75.2,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(16));

	// Layer 3
	this.instance_3 = new lib.shape19("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(16));

	// Layer 2
	this.instance_4 = new lib.sprite17();
	this.instance_4.setTransform(245.6,-9.9,1,0.628);
	this.instance_4.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(16));

	// Layer 1
	this.instance_5 = new lib.shape16("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(16));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(14).call(this.frame15).wait(1).call(this.frame16))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.2,-9.9,743.2,498.3);


// symbols:
(lib.image67 = function() {
	this.initialize(img.image67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite71 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape70 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image67(); 
  this.shape.setTransform(-45,-7.5);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape64 = function() {
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


(lib.shape61 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape57 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1,1,1).p("AggAFQAcgNAlAH");
	this.shape.setTransform(5.9,7.3);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#407900").ss(1,1,1).p("AgmAKQAlgXAoAG");
	this.shape_1.setTransform(-4.3,9.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(1,1,1).p("AgNAxQAQALARgGQARgHAGgUQAGgUgIgVQgJgWgSgMQgQgLgRAHQgRAGgGAUQgGAVAJAUQAIAXASALg");
	this.shape_2.setTransform(-5,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AgNAxQgSgLgIgXQgJgUAGgVQAGgUARgGQARgHAQALQASAMAJAWQAIAVgGAUQgGAUgRAHQgGACgGAAQgJAAgMgHg");
	this.shape_3.setTransform(-5,7.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#407900").ss(1,1,1).p("AgOAsQAOANAPgFQAPgEAHgTQAGgTgHgTQgGgWgPgNQgPgLgOAEQgQAFgGASQgGATAGAUQAHAVAPAMg");
	this.shape_4.setTransform(5.7,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC00").s().p("AgOAsQgPgMgHgVQgGgUAGgTQAGgSAQgFQAOgEAPALQAPANAGAWQAHATgGATQgHATgPAEIgIABQgKAAgLgJg");
	this.shape_5.setTransform(5.7,6.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,0.7,19.4,12.8);


(lib.shape56 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBASQgIgBgEgHQgEgFAAgGQACgHAFgFQAGgEAFABQAIABAFAFQAFAGgCAGQAAAHgHAFQgEAEgGAAIgBAAg");
	this.shape.setTransform(-4.7,4.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#407900").ss(1,1,1).p("AgNAxQAQALARgGQARgHAGgUQAGgUgIgVQgJgWgSgMQgQgLgRAHQgRAGgGAUQgGAVAJAUQAIAXASALg");
	this.shape_1.setTransform(-5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAxQgSgLgIgXQgJgUAGgVQAGgUARgGQARgHAQALQASAMAJAWQAIAVgGAUQgGAUgRAHQgGACgGAAQgJAAgMgHg");
	this.shape_2.setTransform(-5,7.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAQIgKgHQgEgGABgFQABgGAGgEQAGgEAFABIAKAHQAEAGgBAFIgHAKQgFADgEAAIgCAAg");
	this.shape_3.setTransform(5.7,2.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#407900").ss(1,1,1).p("AgOAsQAOANAPgFQAPgEAHgTQAGgTgHgTQgGgWgPgNQgPgLgOAEQgQAFgGASQgGATAGAUQAHAVAPAMg");
	this.shape_4.setTransform(5.7,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAsQgPgMgHgVQgGgUAGgTQAGgSAQgFQAOgEAPALQAPANAGAWQAHATgGATQgHATgPAEIgIABQgKAAgLgJg");
	this.shape_5.setTransform(5.7,6.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,0.7,19.4,12.8);


(lib.shape54 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(64,121,0,0.498)").ss(1,1,1).p("AAwAhQgPAVgXAEQgWAEgVgPQgUgNgEgYQgEgWAOgVQAPgTAYgEQAVgEAUANQAUAPAFAYQAEAWgOATg");
	this.shape.setTransform(32.6,-21.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.702)").s().p("AgPAYQgJgHgCgNQgDgKAHgKQAGgKAMgCQAKgCAKAIQAJAHADAMQACAKgHAKQgGAKgMACIgFABQgIAAgHgGg");
	this.shape_1.setTransform(32.9,-21.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(1.5,1,1).p("ABghrQhUBagzC8AhfCPQBHj3BxhC");
	this.shape_2.setTransform(3.7,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AhfCPQBIj3BvhCIAIA/QhUBagzC8g");
	this.shape_3.setTransform(3.7,-1.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#407900").ss(1.5,1,1).p("Ag2AqQgUgeAEgPQAEgRANgWQAOgXAagHQAYgGAYAOQAXAOAJAgQAJAegJASQgJASgcAAIAHgcAglAFQgOAQgDAVAgQA/QgdAAgGgOQgHgNAEAGAgQA/QAHAPAOgEQAPgEAKgWAgEAZQgOASACAU");
	this.shape_4.setTransform(-4.7,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC00").s().p("AgQA/IgBgFQAAgSANgPQgNAPAAASIABAFQgdAAgGgOQgHgNAEAGQADgVAOgRQgOARgDAVQgUgfAEgOQAEgRANgWQAOgXAagHQAYgGAYAOQAXAOAJAgQAJAegJASQgJASgcAAIAHgcIgHAcQgKAWgPAEIgFABQgKAAgGgMgAAeAwg");
	this.shape_5.setTransform(-4.7,19.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-27.4,50.6,54.3);


(lib.shape53 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJAEQBJgbBKAEIgDAUQgGATiGAAg");
	this.shape.setTransform(28.8,-24.1);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(64,121,0,0.6)").ss(1.3,1,1).p("AAIgaQgcAaAXAb");
	this.shape_1.setTransform(15.9,-23.4);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(1.5,1,1).p("AhTgsIAGgBQAEAYAKAeIAHAWQAQAvAsAAQAiAAARgaQAGgJADgYQAEgXAIgfIAIgoQhMgIhbAl");
	this.shape_2.setTransform(28.4,-19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.702)").s().p("Ag/AWQgKgegEgYIgGABIAAgCQBbglBMAIIgIAoQgJAdgDAZQgDAYgGAJQgtg+hJATg");
	this.shape_3.setTransform(28.4,-20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0330D").s().p("AgzgJIgHgWQBJgTAsA8QgQAagjAAQgsAAgPgtg");
	this.shape_4.setTransform(28,-14.9);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#407900").ss(1.5,1,1).p("ABvhLQiaAagPCxAhuB4QAcjjC7gU");
	this.shape_5.setTransform(2.2,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC00").s().p("AhuB4QAcjjC7gUIAGA0QiaAagPCxg");
	this.shape_6.setTransform(2.2,-4.9);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#407900").ss(1.5,1,1).p("AAygsQAWAZgBATQAAAUgaAMQABAYgNALIgZgBQgYAMgMgJQgMgKAGAEQgfgTgDgRQgDgRACgYQADgaAUgSQAWgQAZACQAaADAXAZgAACAaQgDAWAJASAgiAWQgGAVAGAUAAtAgIgGgd");
	this.shape_7.setTransform(-6.1,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC00").s().p("AgcBFQgMgKAGAEQgDgKAAgLQAAgKADgKQgDAKAAAKQAAALADAKQgfgTgDgRQgDgRACgYQADgaAUgSQAWgQAZACQAaADAXAZQAWAZgBATQAAAUgaAMQABAYgNALIgZgBQgIgMAAgOQAAgGACgIQgCAIAAAGQAAAOAIAMQgNAHgKAAQgIAAgFgEgAAtAgIgGgdgAAIBCIAAAAgAgiA/IAAAAg");
	this.shape_8.setTransform(-6.1,10.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-26.9,50.2,44.8);


(lib.shape51 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(64,121,0,0.498)").ss(1,1,1).p("AgPBBQAAgTAKgVQAIgUAAgJIgCgNIgBgOQAAgFAGgKQAIgKACgI");
	this.shape.setTransform(-19.8,40.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(64,121,0,0.498)").ss(1,1,1).p("Ag7BDQABgMAKgKQALgNANAIQAAgZARgKQAOgJAWAGQAAgOAVgUQAQgPgMgT");
	this.shape_1.setTransform(-10.9,41.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(64,121,0,0.498)").ss(1,1,1).p("AglgZIAiADQAJACAAAPQAAAFgFANIAAANIAlgD");
	this.shape_2.setTransform(-17,-39.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(1.5,1,1).p("AhBnRQg9gHgbAwQgZAuAQA9QBQFGhaE1QgRA8AeAsQAfAsA+ABQBCgDA6hDQA2hFAPg1QBekehMjjQgchNg8hGQg6hGhAgKg");
	this.shape_3.setTransform(-8.4,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC00").s().p("AifGmQgegsARg8QBak1hQlGQgQg9AZguQAbgwA9AHQBAAKA6BGQA8BGAcBNQBMDjheEeQgPA1g2BFQg6BDhCADQg+gBgfgsgAhhl5QgRApALA2QBWEigxCkQgyCkARAnQARAnAoABQAqgDAlg7QAig9AKgwQA8j+gxjJQgRhFgng+Qgkg+gpgJIgJgBQggAAgPAlg");
	this.shape_4.setTransform(-8.4,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5CB900").s().p("AhmF3QgRgnAyikQAxikhWkiQgLg2ARgpQARgrAnAHQApAJAkA+QAnA+ARBFQAxDJg8D+QgKAwgiA9QglA7gqADQgogBgRgng");
	this.shape_5.setTransform(-8.1,1.7);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#407900").ss(1.5,1,1).p("AAtAUIgxAXQgKAIgigyQARgnAqgFQAxArgPAUg");
	this.shape_6.setTransform(-21.9,-43.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5CB900").s().p("AgwABQARgnAqgFQAxArgPAUIgxAXIgDABQgLAAgegrg");
	this.shape_7.setTransform(-21.9,-43.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.8,-47.7,36.4,96.2);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("Ag7A8IAAh3IB3AAIAAB3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,12.1,12.1);


(lib.shape48 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1.5,1,1).p("AApgrQAWA0gxApIg4gMQgHgXACgTQADgYAQgVgAgvgEIA9AG");
	this.shape.setTransform(21.9,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AgqAmQgHgXACgTQADgYAQgVIBFAGQAWA0gxApgAAOACIg9gGg");
	this.shape_1.setTransform(21.9,4.2);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(1.5,1,1).p("AhOgXICQAHQAfARghAXIiQgH");
	this.shape_2.setTransform(28.8,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5CB900").s().p("AhQARIACgoICQAHQAfARghAXg");
	this.shape_3.setTransform(28.8,-1.6);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#407900").ss(1.5,1,1).p("Ag3gNQAEgRAHgRQBTgsATAxIgGBvIhlgFQgGgTgCgS");
	this.shape_4.setTransform(18.9,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5CB900").s().p("AgxBAQgGgTgBgSIgBgBQgBgRACgOIACgIQADgRAIgRQBSgsATAxIgFBvg");
	this.shape_5.setTransform(18.9,0.4);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#407900").ss(1.5,1,1).p("ABZgdIixAAAhYAeICxAA");
	this.shape_6.setTransform(9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5CB900").s().p("AhYAdIAAg5ICxAAIAAA5g");
	this.shape_7.setTransform(9,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.5,37,15.9);


(lib.shape46 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AAChuIgDDd");
	this.shape.setTransform(4.5,8.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AANhvIgZDf");
	this.shape_1.setTransform(-6.3,9.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AAChuIgDDd");
	this.shape_2.setTransform(4.5,8.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AANhvIgZDf");
	this.shape_3.setTransform(-6.3,9.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-2.4,12.5,23);


(lib.shape45 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AgzgwQCdgOhSBw");
	this.shape.setTransform(7.4,3.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AAchGQBfBli3Ao");
	this.shape_1.setTransform(-5.6,7.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AgzgwQCdgOhSBw");
	this.shape_2.setTransform(7.4,3.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AAchGQBfBli3Ao");
	this.shape_3.setTransform(-5.6,7.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-1.3,24.5,15.7);


(lib.shape44 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AgOgpQDCAoj5Ar");
	this.shape.setTransform(3.7,3);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AglhlQBwBEg4CH");
	this.shape_1.setTransform(1,10.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AgOgpQDCAoj5Ar");
	this.shape_2.setTransform(3.7,3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AglhlQBwBEg4CH");
	this.shape_3.setTransform(1,10.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,-1.2,14.1,21.8);


(lib.shape43 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("ABpgwQg2CNibg/");
	this.shape.setTransform(-8.3,3.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AhGhkQBRBJA8CA");
	this.shape_1.setTransform(4.3,10.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("ABpgwQg2CNibg/");
	this.shape_2.setTransform(-8.3,3.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AhGhkQBRBJA8CA");
	this.shape_3.setTransform(4.3,10.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-1.2,30.5,21.5);


(lib.shape42 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("ABGhGQAEBciPAx");
	this.shape.setTransform(-2.2,4.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("Ag8g7QCvABhNB2");
	this.shape_1.setTransform(1.6,4.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("ABGhGQAEBciPAx");
	this.shape_2.setTransform(-2.2,4.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("Ag8g7QCvABhNB2");
	this.shape_3.setTransform(1.6,4.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-2.4,17.2,14.3);


(lib.shape41 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AgghVQBqArhECA");
	this.shape.setTransform(8,6.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AgWg8QCmBRjEAo");
	this.shape_1.setTransform(-2.1,4.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AgghVQBqArhECA");
	this.shape_2.setTransform(8,6.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AgWg8QCmBRjEAo");
	this.shape_3.setTransform(-2.1,4.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-2.4,18.9,17.3);


(lib.shape40 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AhLhXQBpArAuCE");
	this.shape.setTransform(12.4,6.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("ABDg2QgTCQhygu");
	this.shape_1.setTransform(-11.7,3.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AhLhXQBpArAuCE");
	this.shape_2.setTransform(12.4,6.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("ABDg2QgTCQhygu");
	this.shape_3.setTransform(-11.7,3.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-2.4,38.6,17.8);


(lib.shape39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1.5,1,1).p("AAagfQA2AAAOANQAOAMAAAMQAAAOgjAGIhKAGIhKgHQgggIAAgOQAAgMApgLQAogLA0AAg");
	this.shape.setTransform(10.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AhLAZQgggIAAgOQAAgMApgLQAogLA0AAQA2AAAOANQAOAMAAAMQAAAOgjAGIhKAGg");
	this.shape_1.setTransform(10.4,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-3.1,21.7,6.6);


(lib.shape37 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5CB900").ss(3,1,1).p("AABhlIgBDL");
	this.shape.setTransform(4.5,7.8);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5CB900").ss(3,1,1).p("AAIhfIgPC/");
	this.shape_1.setTransform(-5.8,7.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(6,1,1).p("AABhlIgBDL");
	this.shape_2.setTransform(4.5,7.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#407900").ss(6,1,1).p("AAIhfIgPC/");
	this.shape_3.setTransform(-5.8,7.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.4,11.5,20.5);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AA0CeQgdgBgggOQghgNgegWQghgZgIgoQgMgoAJglQALgoAageQAZgcAhgKIAvgPAA4hWIggALQgcAPgWAfQgYAgAaAfQAZAiAiAHQAkAJAggCIASgC");
	this.shape.setTransform(-47.2,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AgJCPQghgNgegXQghgZgIgoQgMgoAJgkQALgoAagdQAZgdAhgKIAvgOIAeBHIggAKQgcAPgWAfQgYAfAaAgQAZAiAiAHQAkAJAggDIASgCIgvA1IgWAaQgdgBgggOg");
	this.shape_1.setTransform(-47.2,-10.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.4,-26.2,24.3,31.6);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1.5,1,1).p("AAZAbQAIgQALgJQAIgHARgHQARgGAQAKQAOAHAEANQADAQgDASQgDARgHAJAh4gjQAIgQAMgJQANgMATABQASAAAHAPQAIAOgFATQgDAPgHAI");
	this.shape.setTransform(2.5,-62.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#407900").ss(2,1,1).p("AgYBaQgSgCgLgNQgKgLgEgRQgEgQACgTQACgQAJgPIATgbIAYgXQANgKAOgHIAegDQARAFAHAPQAEAIABAJ");
	this.shape_1.setTransform(-17.2,-39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#475801").s().p("AgIAdQgHgDgCgKQgBgKADgKQAFgNAIgHQAFgGAHABQAGACACALQABAKgDALQgEAMgIAGQgEAHgFAAIgDgBg");
	this.shape_2.setTransform(-17.4,-38.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-70.1,39.1,39.3);


(lib.shape32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AglhoQAGgmgBglQgCglgIghQgLgoAjgHQAagFARAVQANASABAuAAoAHQAdgGATgJQAagSgHgfQgJgfADgaQADgaAYgcQAWgbgVgUQgYgaggAYIgJAKQgQARAFAYIABAIQAFAZABAWQACAkgkAJIgGAOQgOAegiADQgVgTgUAQAAahCQACgKgCgGQgEgNgNgGIgGgCIgogBIgUAIQgcAPgYAVQgXAUgFAiQgGAkAWAaQAHAJAIAFQAJAGAMADIAVADQANAAAFgHAhVBPIgSAvQgMAhAFAjQADAiASAcIADAEQAVAbAgALIBAgCQAggNAbgVIAIgGQAXgTAOgVIgGgfIgIhCIgIAQQgQAdgaAZQgYAYglAGQghAGgJgmQgIgiAHghIAKgcIgPACAAoAHQgBgQgGgDAgXBcQAXgFASgQQAZgWgDgmIAAgEAgcgTQATATgQAWQgXAggigX");
	this.shape.setTransform(-53.2,-22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AhWDiIgDgFQgSgcgDgiQgFgjAMggIASgvIAVACQANAAAFgGQgFAGgNAAIgVgCQgMgDgJgGQgIgGgHgIQgWgZAGgmQAFghAXgVQAYgVAcgPIAUgIIAoABIAGACQANAHAEAMQACAHgCAJIgGAPQgOAegiADIgBgBIAAAAQgLgKgKAAIgBAAIAAAAQgJAAgIAHIgBAAIABAAQAIgHAJAAIAAAAIABAAQAKAAALAKIAAAAIABABQAigDAOgeIAGgPQAkgIgCgkQgBgXgFgZIgBgHQgFgZAQgRIAJgJQAggYAYAaQAVATgWAcQgYAbgDAbQgDAaAJAfQAHAegaASQgTAMgdAFQgBgRgGgEQAGAEABARIAAAEQADAkgZAXQgSAQgXAFIgPACIAPgCIgKAcQgHAhAIAiQAJAlAhgFQAlgHAYgYQAagZAQgcIAIgQIAIBCIAGAfQgOAUgXATIgIAGQgbAVggAOIhAACQgggLgVgbgAg3AGQAPAAAMgNIAAAAIAAAAIABgCIABAAIAAgBIABgBQAHgLAAgJQAAgMgKgKQAKAKAAAMQAAAJgHALIgBABIAAABIgBAAIgBACIAAAAIAAAAQgMANgPAAIgBAAIAAAAQgLAAgMgGIgDgBIADABQAMAGALAAIAAAAIABAAg");
	this.shape_1.setTransform(-53.2,-19.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AA8800").ss(2,1,1).p("AAsiDIAAgQQgCgHgFgCIgBgBIgLgBIgKAFIgJALIgGALIgGAfIAEANIADAFIAGACIAFAAIACAAIAGgCIAJgKIAHgMQADgHACgHQACgGABgHgAgVgfIgLgLQgIgNgCgTQgCgTAUg4IABgBIAMgUIACgDQAJgPALgLQAMgLALgCIAaACQAQAHADASQADASgCASQgCASgFAPQgEAQgIARQgGAPgKAOQgJANgNAKQgJAFgLABIgJgBQgJgBgGgEgAgyBQIAdhvAgZBYIAchxAgkCCIgbBTAhQDCIAehy");
	this.shape_2.setTransform(-44.1,-52.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5EBC00").s().p("AhWEEIgDgEQgSgcgDgiQgFgjAMghIASgvQgMgDgJgGQgIgFgHgJQgWgaAGgkQAFgiAXgUQAYgVAcgPIAUgIQAGgmgBglQgCglgIghQgLgoAjgHQAagFARAVQANASABAuIgeBzQANAGAEANQACAGgCAKQAkgJgCgkQgBgWgFgZIgBgIQgFgYAQgRIAJgKQAggYAYAaQAVAUgWAbQgYAcgDAaQgDAaAJAfQAHAfgaASQgTAJgdAGIAAAEQADAmgZAWQgSAQgXAFIgKAcQgHAhAIAiQAJAmAhgGQAlgGAYgYQAagZAQgdIAIgQIAIBCIAGAfQgOAVgXATIgIAGQgbAVggANIhAACQgggLgVgbg");
	this.shape_3.setTransform(-53.2,-22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AhQDCIAehyIAdhvIgLgLQgIgNgCgTQgCgTAUg4IABgBIAMgUIACgDQAJgPALgLQAMgLALgCIAaACQAQAHADASQADASgCASQgCASgFAPQgEAQgIARQgGAPgKAOQgJANgNAKQgJAFgLABIgJgBQgJgBgGgEQAGAEAJABIAJABIgcBxQgQARAFAZIgbBTQgEgMgNgHgAAPiZIgJALIgGALIgGAfIAEANIADAFIAGACIAFAAIACAAIAGgCIAJgKIAHgMIAFgOQACgGABgHIAAgQQgCgHgFgCIgBgBIgLgBg");
	this.shape_4.setTransform(-44.1,-52.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-74,31.3,81);


(lib.shape31 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1.5,1,1).p("AAZAbQAIgQALgJQAIgHARgHQARgGAQAKQAOAHAEANQADAQgDASQgDARgHAJAh4gjQAIgQAMgJQANgMATABQASAAAHAPQAIAOgFATQgDAPgHAI");
	this.shape.setTransform(2.5,-62.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#407900").ss(2,1,1).p("AgYBaQgSgCgLgNQgKgLgEgRQgEgQACgTQACgQAJgPIATgbIAYgXIAbgRIAegDQARAFAHAPQAEAIABAJ");
	this.shape_1.setTransform(-12.2,-38.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#475801").s().p("AgIAdQgHgDgCgKQgBgKADgKQAFgNAIgHQAFgGAHABQAGACACALQABAKgDALQgEAMgIAGQgEAHgFAAIgDgBg");
	this.shape_2.setTransform(-12.4,-36.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.3,-70.1,34.1,40.8);


(lib.shape30 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AgjhvIgVAFQgeALgaARQgbARgJAgQgLAjARAdIANARQAIAHALAEIgZAsQgQAfgBAjQgBAlAQAgQAQAeAeAPQAeARAkgJQAfgIAegRQAggRATgWIgBgfIAChCIgKAOQgVAagdAVQgbAUgjABQgkAAgEgmQgDgjANgfIAOgbQAZgBAVgNQAZgTADglIABgEQAdgCAUgIQAdgMgDgfQgEggAHgaQAHgZAbgYQAbgYgSgWQgUgdgjASIgLAIQgSAPABAZIAAAIQACAZgDAWQgDAkglADQADgJAAgHQgDgNgMgIIgFgCQgSgLgWADQAMgkAEglQAEglgEgiQgEgpAhgBQAdgCAOAYQAKATgGAuAhjARQAeAbAbgcQATgUgPgVQAkACAQgbIAIgOAAUgJQAGAEgBAQAgyBVIgQAAAhuA/IAVAGQANACAGgFAhOgiQAWgNASAW");
	this.shape.setTransform(-48.8,-22);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AA8800").ss(2,1,1).p("AgOgfIgJgMQgHgPABgTQABgTAcg0IAAgBIAOgSIACgDIAagWQAOgJAKgBQAKgDAQAJQAPAKAAASQABASgFASQgFARgHAOQgGAPgKAQQgJAOgMAMQgLAMgNAHQgKAFgLgBIgKgDQgIgCgFgFgAA8iTIgKgDIgLAEIgLAJIgIAKIgMAdIADAOIAEAGIAFADIAFABIACAAIAHgBQAGgEAEgFIAIgLIAIgMQADgGABgIIADgPQgBgHgEgDgAg8BKIAuhpAgkBWIAthrAg2B9IgmBPAhrC3IAvht");
	this.shape_1.setTransform(-37,-50.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5CB900").s().p("AhbEfQgegPgQgeQgQggABglQABgjAQgfIAZgsQgLgEgIgHIgNgRQgRgdALgjQAJggAbgRQAagRAegLIAVgFQAMgkAEglQAEglgEgiQgEgpAhgBQAdgCAOAYQAKATgGAuIgvBtQAMAIADANQAAAHgDAJQAlgDADgkQADgWgCgZIAAgIQgBgZASgPIALgIQAjgSAUAdQASAWgbAYQgbAYgHAZQgHAaAEAgQADAfgdAMQgUAIgdACIgBAEQgDAlgZATQgVANgZABIgOAbQgNAfADAjQAEAmAkAAQAjgBAbgUQAdgVAVgaIAKgOIgCBCIABAfQgTAWggARQgeARgfAIQgMADgMAAQgWAAgUgLg");
	this.shape_2.setTransform(-48.8,-22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AhrC3IAvhtIAuhpQAFAFAIACIAKADIgKgDQgIgCgFgFIgJgMQgHgPABgTQABgTAcg0IAAgBIAOgSIACgDIAagWQAOgJAKgBQAKgDAQAJQAPAKAAASQABASgFASQgFARgHAOQgGAPgKAQQgJAOgMAMQgLAMgNAHQgKAFgLgBIgtBrQgTAPABAYIgmBPQgCgNgNgIgAAniSIgLAJIgIAKIgMAdIADAOIAEAGIAFADIAFABIACAAIAHgBQAGgEAEgFIAIgLIAIgMQADgGABgIIADgPQgBgHgEgDIgCgBIgKgDg");
	this.shape_3.setTransform(-37,-50.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.2,-71,38,78.9);


(lib.shape29 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AhAgwQgHAAgJgQIgCgDQgTghAMgfQAJgWAUgQIANgIIAZgJIAXgDIAXABQAJACAUAKQAUAJAMAlQALAggMAdQgMAdgSAaQgGAJgIAFQgQAQgXACIgEABQgPAAgJgJQgEgGgDgHIgBgPQgBghAfgTQAZAIALgXAgigDQgcAWASAfIAbAoIAEAGQAOAUgFAWQgBAHgEAGQgRAjgigMQgbgIAIgiQAJgkgJgZQgKgYgVgYQgUgXAPgbQAMgTAXgSAASiMQgngGgFAnQgFAdAaAIAATCHQAWApAUAKQAYALAXgSQAcgVgbgfQgXgZgSghQgSghgKgk");
	this.shape.setTransform(-36.6,-16.9);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AA8800").ss(2,1,1).p("AAMAMIAXBlAAHBxIgShjAgUgZIgOhXAgKhnIAWBz");
	this.shape_1.setTransform(-35.9,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61C100").s().p("AA9C6QgUgKgWgpIgWh0QgPAAgJgJQgEgGgDgHQgcAWASAfIAbAoIAEAGQAOAUgFAWQgBAHgEAGQgRAjgigMQgbgIAIgiQAJgkgJgZQgKgYgVgYQgUgXAPgbQAMgTAXgSIgCgDQgTghAMgfQAJgWAUgQIANgIIAZgJIAXgDIAXABQAJACAUAKQAUAJAMAlQALAggMAdQgMAdgSAaQgGAJgIAFQAKAkASAhQASAhAXAZQAbAfgcAVQgOALgPAAQgJAAgJgEg");
	this.shape_2.setTransform(-36.6,-16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AAHBxIgShjQAHgUgPgTIgPhXQAKAJAPAAIAVBzIAXBlg");
	this.shape_3.setTransform(-35.9,-4.6);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_4.setTransform(6.7,-56.1);

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgHAHABQAIgBAGAHQAHAGgBAHQABAIgHAGQgGAHgIAAQgHAAgHgHg");
	this.shape_5.setTransform(-8.8,-62.3);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#407900").ss(1.5,1,1).p("AAHA3QgTALgSgJQgRgJgEgZQgCgXANgXQANgYAVgLIAlgCQASAJADAYQADAZgNAWQgNAZgWAKg");
	this.shape_6.setTransform(-6.4,-63.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA5QgRgJgEgZQgCgXANgXQANgYAVgLIAlgCQASAJADAYQADAZgNAWQgNAZgWAKQgKAGgLAAQgIAAgIgEg");
	this.shape_7.setTransform(-6.4,-63.6);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#407900").ss(1.5,1,1).p("AAJA+QgVALgUgLQgTgKgFgaQgEgaAOgYQAOgaAXgLQAWgKAUAKQAUALAEAZQAEAZgOAZQgOAagYALg");
	this.shape_8.setTransform(9.3,-57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA+QgTgKgFgaQgEgaAOgYQAOgaAXgLQAWgKAUAKQAUALAEAZQAEAZgOAZQgOAagYALQgJAFgLAAQgLAAgKgFg");
	this.shape_9.setTransform(9.3,-57.9);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#407900").ss(2,1,1).p("AhVgPQA5A8Byg0");
	this.shape_10.setTransform(-5.2,-38.4);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.9,-69.8,64.2,76.5);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("ABDCbIhAgHQgggIghgSQgjgVgOgnQgRgmAEgmQAGgpAWggQAWggAegOIAugVAAohWQgRAFgNAJQgaASgRAiQgUAiAeAcQAcAeAjADIBFgCIARgE");
	this.shape.setTransform(-44.8,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AADCUQgggIghgSQgjgVgOgnQgRgmAEglQAGgqAWghQAWgfAegOIAugVIAmBDQgRAGgNAIQgaATgRAiQgUAiAeAcQAcAeAjADIBFgDIARgDIgpA4IgSAdg");
	this.shape_1.setTransform(-44.8,-15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.5,-30.5,25.3,31);


(lib.shape27 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AATCHQAWApAUAKQAYALAXgSQAcgVgbgfQgXgZgSghQgSghgKgkQgQAQgXACIgEABQgPAAgJgJQgEgGgDgHQgcAWASAfQALAUAQAUIAEAGQAOAUgFAWIgFANQgRAjgigMQgbgIAIgiQAJgkgJgZQgKgYgVgYQgUgXAPgbQAMgTAXgSIgCgDQgTghAMgfQAJgWAUgQIANgIIAZgJIAXgDIAXABQAJACAUAKQAUAJAMAlQALAggMAdQgMAdgSAaQgGAJgIAFAhAgwQgHAAgJgQAASiMQgngGgFAnQgFAdAaAIQAZAIALgXAgigDIgBgPQgBghAfgT");
	this.shape.setTransform(-36.1,-15.9);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AA8800").ss(2,1,1).p("AAMAMIAXBlAAHBxIgShjAgUgZIgOhXAgKhnIAWBz");
	this.shape_1.setTransform(-35.4,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61C100").s().p("AA9C6QgUgKgWgpIgWh0QgPAAgJgJQgEgGgDgHQgcAWASAfQALAUAQAUIAEAGQAOAUgFAWIgFANQgRAjgigMQgbgIAIgiQAJgkgJgZQgKgYgVgYQgUgXAPgbQAMgTAXgSIgCgDQgTghAMgfQAJgWAUgQIANgIIAZgJIAXgDIAXABQAJACAUAKQAUAJAMAlQALAggMAdQgMAdgSAaQgGAJgIAFQAKAkASAhQASAhAXAZQAbAfgcAVQgOALgPAAQgJAAgJgEg");
	this.shape_2.setTransform(-36.1,-15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AAHBxIgShjQAHgUgQgTIgNhXQAIAJAPAAIAWBzIAWBlg");
	this.shape_3.setTransform(-35.4,-3.6);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_4.setTransform(6.7,-56.1);

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgHAHABQAIgBAGAHQAHAGgBAHQABAIgHAGQgGAHgIAAQgHAAgHgHg");
	this.shape_5.setTransform(-8.8,-62.3);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#407900").ss(1.5,1,1).p("AgeA5QgRgJgEgZQgCgXANgXQANgYAVgLIAlgCQASAJADAYQADAZgNAWQgNAZgWAKQgTALgSgJg");
	this.shape_6.setTransform(-6.4,-63.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA5QgRgJgEgZQgCgXANgXQANgYAVgLIAlgCQASAJADAYQADAZgNAWQgNAZgWAKQgKAGgLAAQgIAAgIgEg");
	this.shape_7.setTransform(-6.4,-63.6);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#407900").ss(1.5,1,1).p("AggA+QgTgKgFgaQgEgaAOgYQAOgaAXgLQAWgKAUAKQAUALAEAZQAEAZgOAZQgOAagYALQgVALgUgLg");
	this.shape_8.setTransform(9.3,-57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA+QgTgKgFgaQgEgaAOgYQAOgaAXgLQAWgKAUAKQAUALAEAZQAEAZgOAZQgOAagYALQgJAFgLAAQgLAAgKgFg");
	this.shape_9.setTransform(9.3,-57.9);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(64,121,0,0.6)").ss(2,1,1).p("AgMgfQAiAWgMAp");
	this.shape_10.setTransform(8.4,-39.4);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#407900").ss(2,1,1).p("AhggPQBBA8CAg0");
	this.shape_11.setTransform(-3.9,-38.4);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.4,-69.8,63.7,77.5);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(64,121,0,0.498)").ss(2,1,1).p("AB9qoQAhgeAXgwQATgpAxgGAAmpSQAOg5AYgiQAagnAXApAh3qYQAMgaASgUQAQgUAWgNQArgbAkghQAigdArgZAgzNHIgYgEIhAgLQgmgHALgmQAIgeAMgdQARgmgnABIg+AJQgQADgBgQQgCgkAKgcIARgnAgzNHIAuAIIBGAL");
	this.shape.setTransform(23.1,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A58401").ss(2,1,1).p("AAkg5QARABAOAGIAHADQADADgCAEIACAcIgCAjIAAADAhFgkIAWAFIArAGIAmACIABAAIAKgBIAIgBQAKgDAGgFIAGgHAhFgkIAFgFQAHgGALgDIAhgGIAagCIARABABJA7IAAgEIACgdAhMAVIABgOIAFghIABgK");
	this.shape_1.setTransform(-33.8,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#407900").ss(2,1,1).p("AnNBoQAFhlALhPIAEgfIAMhBQAKg1AQg2QAZhUAmhOQAlhOAqhLQAphIAzhCQA1hEBAg5QBBg5BMgwQBLgwBTgdQAggMAhgHIBPgIIAPAEAGgwhIgLgHIAjgsQAqADAeBDIg3AaIgOgUQgMgQgPgJgAHEv6IADAHIACAEQAjBpgoBtQglBig4BcIhxC5Qg3BegqBlQgiBRgLBXIAAABIgCAPIgCAgIgBATQgDBBAIBAIAFAkIACAJIADARIAAABIADAOQAUBaArBRQA0BkAiBqQAKAhgEAcQgIAxg3AfQhEAnhMAAIAlDYIBFgFIBFAKIBEAPQAkAKAPAdQAFAOgKAQQgUAcgiABIhFgCQgigFghgOQgigPgcgQQgegRgGgZIgBgIIgsjrIgDgBQgjgHgjgNIAgD8QgYAaggAKIhCATIhGASIhEASIhIgCQgNgFAAgRQABgjAkgLIBDgPIBHgPQAigKAkgEQAigGAcgLIgkjoQglgUghgbQhPhCg8hXQg/hcgmhqIgbgEQgRgFgKgMQgLgNAEgUIgTgGQgQgHgGgPQgIgQAFgRQAEgOASgNIgKgIQgKgKgBgTQAAgSAIgMQAKgMASgEIALgEIAXgDIgBAUIgBADQAAANAOAFIAhAJIAjAEIABAAIAkgFIAigLAHIvuIABgBAkdBqQAQADAIAOQAFAIABALIgBANIAdgDIAhgHIAQgFIAQgGIAfgQQANgJALgMQALgMAHgQQAJgPAFgQQAGgRACgRQADgRgBgQIgBglAAhgnIgCgMAk4ENIAkgBIAhgEIAMgDIAWgGIAjgKIAfgKIAggNQAQgIAPgKIAagWIAFgEIABgBIADgDIAOgOIACgCIANgRIAHgLIABgCIAOgaIAQgfQAHgOABgSIADgbIABgJIgBgiIAAgIAlFEYIgPARIgZAVQgOAKgRADIgIACAlFEYIAFgJIADgGAnnC/IASAJQAHACgBAEAnREXIAOgCIAJgCAg0LvIgqgUABBMHIgsgDABePgIAIgB");
	this.shape_2.setTransform(2.3,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5CB900").s().p("AEzQRQgjgFghgNQghgPgdgQQgegSgFgZIgBgHIgtjrIAsACIAmDYIBFgFIBEAKIBFAQQAjAKAPAdQAGAOgLAQQgUAcghABgACpOfIAJgCgAkUQCQgNgFAAgRQABgjAkgKIBCgPIBHgQQAigJAkgFQAigFAbgMIgijnIAoAUIAgD8QgZAagdAKIhDATIhGASIhEARgABiKFIg2gTIgfgTQiTh2hBjUQgGgSgIg3IgHgBIAUgBIAhgEIAMgCIAVgGIAjgLIAggJIAggNQAQgIAOgKIAZgWIAFgFIABgBIADgCIANgOIACgDIANgRIAHgKIACgCIACAMIAGAkIACAJIAEATIAEAOQAJAhANAgQBYDaALAnIAWBMQADALAAAKIgYgEIhAgLQgdgFAAgZQAAgGACgJQAIgeAMgdIABgBQAPgkgjAAIAAAAIAAAAIgCAAIgBAAIg+AJIgBAAIgDAAIgBAAIAAAAQgLAAgBgNIAAgJQAAgfAIgYIARgnIgRAnQgIAYAAAfIAAAJQABANALAAIAAAAIABAAIADAAIABAAIA+gJIABAAIACAAIAAAAIAAAAQAjAAgPAkIgBABQgMAdgIAeQgCAJAAAGQAAAZAdAFIBAALIAYAEQABAYgQAVQgWAeg/AAgAlkEIQgRgGgJgLQgMgOAEgUIgTgFQgPgIgHgOQgHgQAFgRQADgOASgOIgJgHQgLgLgBgTQAAgSAJgLQAJgMASgEIAMgEIAXgEIgBAUIgBAEQAAAMANAGIAhAIIAjAEIACAAIAjgEIAigMIAAgDIACgdIAAgEIACglIgCgZQACgEgDgDIgGgEQgOgGgSAAQAMi3AzirQA9jLBtimQBWiGB6hOQAYgQAagNQAigSAigOIBFgFIAhApIAEALIgIAqIAAgBIAAAAIAAgBIgBgBQgLgSgMgBIAAAAIgBAAQgLABgNASQgYAigOA5QAOg5AYgiQANgSALgBIABAAIAAAAQAMABALASIABABIAAABIAAAAIAAABIAAACQgfCMhWBzQhjCEhXEZQgaBQgDAyIAgAtIABAHIABAlIgBAIIgDAcQgCASgHAMIgQAeIgPAbIgCACIgHAKIgNARIgCADIgNAOIgDACIgBABIgFAFIgZAWQgOAKgQAIIggANIggAJIgjALIgVAGIgMACIghAEIgUABIgGAAIgKABIAKgBQgHABgFAFQgJAJgDgEIAFgIIADgHIgDAHIgFAIIgPARIgYAVQgPALgRADIgHACgAl4DUIgOABIAOgBIAKgCgAmDCMIAAgBQAAgDgHgBIgSgKIASAKQAHABAAADIAAABgAi0BZIAcgDIAhgGIARgFIAQgHIAfgQQAMgIAMgNQAKgMAIgPQAIgNAFgQQAFgRABgSQADgOAAgMIgBgJIgBglIABAlIABAJQAAAMgDAOQgBASgFARQgFAQgIANQgIAPgKAMQgMANgMAIIgfAQIgQAHIgRAFIghAGIgcADIABgMQgBgLgFgJQgJgNgQgDQAQADAJANQAFAJABALgACiujQAMgaASgUQgSAUgMAagAjiDLIAGAAIgGAAIAAAAgAGYu1IAAAAg");
	this.shape_3.setTransform(-5.1,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#61C100").s().p("AgOAcQgMgQgPgJIgLgFIAjgtQApAEAdBBIg1Aag");
	this.shape_4.setTransform(48.2,-101.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC00").s().p("AAPOWIgDgBQgjgHgjgNIgqgUQglgUghgbQhPhCg8hXQg/hcgmhqIAIgCQARgDAOgKIAZgVIAPgRQADADAJgIQAJgJAPAEQAJA3AGASQBADTCWB3IAeASIA1ATIAgADQA+AAAXgeQAPgVAAgYIAtAIIBIAKQgIAxg3AfQhEAnhMAAgADCMYIgtgIQAAgLgEgLIgVhLQgLgohZjaQgNgggJghIgCgOIgEgSIgCgJIgGgkIgCgNIAOgaIAQgfQAHgOABgSIADgbIABgJIgBgkIAAgIIgCgMIACAMIgegtQADgxAXhPQBYkZBjiEQBWhzAeiMIABgCIAHgqIgDgLIgigoIhEAFQgjANghASQgaAOgZAQQARgUAWgNQAqgcAmggQAigdArgZQgrAZgiAdQgmAggqAcQgWANgRAUQh3BNhYCGQhtCng+DKQgzCsgLC0IgBAAIgFAAIgRgBIgcACIghAGQgLADgHAGIgFAFIgBAKIgFAjIgBAOIgXADQAFhlALhRIAEgfIAMg/QAKg1AQg2QAZhUAmhOQAlhOAqhLQAphIAzhCQA1hEBAg5QBBg5BMgwQBLgwBTgdQAggMAhgHIBPgIIAPAEIAKAFQAPAJAMAQIAJAOIADAHIABAFQgwAGgTApQgYAwghAdQAhgdAYgwQATgpAwgGIABgBQAjBpgoBtQglBig4BcIhxC5Qg3BegqBlQgiBPgLBXIAAABIgCAPIgCAgIgBAVQgDBBAIBAIAFAkIACAJIADARIAAABIADAOQAUBaArBRQA0BkAiBqQAKAhgEAcgACVMQgABur9IAAAAg");
	this.shape_5.setTransform(2.9,-9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AADA6IghgEIghgJQgOgFAAgNIABgDIABgUIABgMIAFgjIABgKIAWAFIArAGIAmACIABAAIAKgBIAIgBQAKgDAGgFIAGgHIACAcIgCAjIAAADIgCAdIAAAEIgiALIgkAFg");
	this.shape_6.setTransform(-33.9,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#765F01").s().p("AAgARIgmgCIgsgGIgWgFIAFgEQAIgFALgEIAggFIAbgCIAQABIAFAAIABAAQASAAAOAGIAGAEQADADgCACIgFAGQgGAGgKACIgIACIgLABg");
	this.shape_7.setTransform(-33.5,8.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.8,-106.1,102.5,222);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(2,1,1).p("AA0CeQgdgBgggOQghgNgegWQghgZgIgoQgMgoAJglQALgoAageQAZgcAhgKIAvgPAA4hWIggALQgcAPgWAfQgYAgAaAfQAZAiAiAHQAkAJAggCIASgC");
	this.shape.setTransform(-47.2,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AgJCPQghgNgegXQghgZgIgoQgMgoAJgkQALgoAagdQAZgdAhgKIAvgOIAeBHIggAKQgcAPgWAfQgYAfAaAgQAZAiAiAHQAkAJAggDIASgCIgvA1IgWAaQgdgBgggOg");
	this.shape_1.setTransform(-47.2,-10.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.4,-26.2,24.3,31.6);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AjFAfQhSgNAAgSQAAgRBSgNIDFgNIDGANQBSANAAARQAAAShSANIjGANg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-4.4,56.2,8.9);


(lib.shape21 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.102)").s().p("A91LHQgvgaghgcQh2BGilAAQipAAh2hIQh3hHABhmQAAglAPghQAcA6BLAtQB2BICpAAQClAAB2hGQAhAcAvAaQCeBWDfAAQDfAACfhWIAxgeQBtBCCWAAQChAABzhNQBLg0AahBQANAhAAAkQAABuhyBOQhzBNihAAQiWAAhthCIgxAeQifBWjfAAQjfAAiehWgEhHjACrQhVgmgugtIgNAHQhxA+iiAAQiiAAhyg+Qhzg/AAhWQAAgmAVggQAcAtBCAkQByA8CiAAQCiAABxg8IANgHQAuAtBVAkQC9BUEJAAQEKAAC7hUQA3gYAlgYIASALQBXA1B7AAQB6AABXg1QAtgcAVgiQAVAgAAAkQAABOhXA2QhXA3h6AAQh7AAhXg3IgSgLQglAag3AYQi7BUkKAAQkJAAi9hUgAH4BYQhaAnh7AAQiNAAhkg0QhhgzAAhGQAAgmAbggQAXAdAvAYQBkA0CNAAQB7AABagnQBvAxCMAAQDBAACJhcIAlgdQA4AVBEAAQBxAABRg7QAsggAUgnQAQAgAAAmQABBThRA6QhRA5hxAAQhEAAg4gVIglAdQiJBcjBAAQiMAAhvgxgEAwrgC5QgpgYgigZQhxAjiHAAQjkAAiihjQihhkgBiNQAAglALghQAfBhB4BKQCiBjDkAAQCHAABxgjQAiAZApAYQESCdGCAAQEaAADehUQC2BCD2AAQEcAADHhXQCNg9AphPQARAhAAAlQAAB7jHBXQjHBXkcAAQj2AAi2hCQjeBUkaAAQmCAAkSidgEg0ggFGIAEgIIAEAIgEBMzgMAIAHgcIAFAeg");
	this.shape.setTransform(-15.9,20.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("Aq6GuQgqgXghgZQhxAiiIABQjkAAihhkQiihjAAiOQAAiLCihkQChhkDkAAQBsAABcAXQA1guBHgpQESicGBAAIBNABQCxhoDsAAQESAADCCMQDCCMAADFQAAAzgNAvQCYATB6A1QDIBXAAB8QAAB7jIBXQjHBXkbABQj3gBi2hCQjeBUkYAAQmBAAkSidg");
	this.shape_1.setTransform(365.6,-41.4);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.149)").s().p("AjmEnQhaAoh7AAQiNAAhkg0QhjgzAAhJQAAhIBjg0QA9geBMgKQgHgdAAgeQAAhzBhhTQBhhSCIAAQB2AABZA+IAkgBQDBgBCJBcQAjAZAaAbQAugNA2gBQBxABBRA6QBRA7gBBQQABBUhRA6QhRA7hxAAQhEgBg4gUIglAdQiJBbjBABQiKAAhvgyg");
	this.shape_2.setTransform(57.6,-0.4);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.149)").s().p("AlZFmQgvgZgggdQh2BGimABQiogBh3hHQh2hIAAhlQAAhmB2hGQB3hHCogBIBMAFIgBgTQAAiDCVhdQCVhcDUABQDRgBCVBcQA9AmAkAsQBcgsB9AAQCHABBfAxQBfAyAABGQAAAPgEAOQBHATA7ApQByBLAABuQAABthyBOQhyBOiigBQiWAAhthCIgxAeQieBXjgAAQjdAAiehXg");
	this.shape_3.setTransform(-172.3,55.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.149)").s().p("AliFXQhWgmgvgtIgLAHQhzA+iiAAQiiAAhxg+Qhzg/ABhYQgBhZBzg8IAogUQgMgfAAgiQAAiACqhaQCrhaDwAAQDxAACqBaQAhATAdAVQCQhNDKAAQDQAACTBSQCTBSAAB1QABApgUAlIAIAAQB7AABXA1QBWA3AABOQAABOhWA2QhXA3h7AAQh7AAhWg3IgRgLQgnAag2AYQi8BUkKAAQkHAAi7hUg");
	this.shape_4.setTransform(-438.3,3.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-554.9,-100.1,1078,200.3);


(lib.shape19 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(205,202,177,0.251)").s().p("EAjMAGtIoegBIoTgCIoMgBIoDgDIn7gCIn1gBInugDInmgBInhgCInXAAQC5h4DHh4QCchgCXhjQB6hUB4hcIDMigIE7gZIFCgXIFDgSQClgHCngBIBUgBQB9AACAAFIFUAGIFbAGIFhAIIFiAFIFnAGQC1ACC1ADQA0BYBIBUQBXBoBgBbQB4BtBTBiQBcB7B2CBQkUgEkRgBg");
	this.shape.setTransform(110.9,444.9);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B64A30").s().p("AZWGtQgyiCgkh9IHhAFQg4hkhehrIGyAFQB4BsBTBjInngFQA/B+BVB+gAI4GrQAEiIAUiDIHVAIQgMhngphtIGrAHQBDBtAiBmInbgGQAHCAAYCEIoMgBgAnHGmQA8iKBHiHIHFAEQguCGgfCJgA2pGiQBwiBB8iFQDbgFDegBQBJhtA7hvQDIgEDKADQghBvg1BtQjhgCjfADQhiCHhVCHgEglxAGfIFTjzImpADQCchgCXhjIF+gMQBnhYBnhgIlaAUIDLifIE8gaIitClIFcgUQhUBhhUBcImCAPQiABqiIBiIGugHIkfD8gA2UgvIGHgPQhSBvheBrQjbADjYAGQByhoBqhsgAJQCgInPgHQAfhqAJhuIGjAJQAOBugKBogAWbglQg3hbgthkIGGAFQg4hTglhZQC1ACC1ADQA0BYBHBUImIgFQBDBnBLBcgAJMg2QgOhcgIhjIF/AIQgYhTgHhWIFjAGQAUBXAqBVImCgJQAbBlAgBcgAuLj9QCzgJC0gBIhcDBQjJACjEAGgAjuhHIA3i/Qi2gEi3ADQAohTAyhUIBUgBQB9AAB/AFQgkBTgZBRIF0AJIgUC+gAxamUIFEgSQg/BVg2BUIlhARQBGhUBMhUgAC9j9QAHhTAWhUIFcAGQgIBXAIBSgAC9j9g");
	this.shape_1.setTransform(132.4,310.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEA").s().p("EAjMAGtQhUh/g/h9IHmAFQBcB7B2CAQkUgDkRgBgASbGqQgXiEgIiBIHbAHQgihmhDhtIGwAIQhLhbhDhnIGJAFQBXBoBgBbImygGQBeBsA5BkInigFQAkB9AzCCgACMGmQAeiKAuiFInFgFQA1hsAhhvQjKgDjIAEIBdjCQi1ACiyAIIiDDAQDFgGDIgCQg6BvhJBtQjeABjbAFQBdhrBShvImHAOQhqBthyBnQDYgFDcgDQh8CFhxCBInmgBIEfj9ImtAIQCHhiCBhqIGBgQQBVhbBThiIlcAVICtimIFCgWQhNBUhGBTIFigRQA1hTA/hVQClgICnAAQgyBUgnBSQC2gCC2AEIg3C/IGYAIIATi/IF5AJQAIBjAOBcIGlAKQghhdgbhkIGCAJQAuBkA2BbImqgHQAoBtAMBmInVgHQAKhogOhuImigJQgKBugfBqIHPAHQgUCCgECIgAtkGiQBViHBjiHQDfgDDgABQhHCIg7CKgEgrwAGdQC5h4DHh4IGqgDIlTDzgAKnCegAjtCSIAAAAgA9LjGIFagUQhmBghnBYIl/ALQB6hTB4hcgAWOjmQgphVgVhYIFnAGQAlBYA4BUgAKNj3QgHhSAHhXIFhAHQAGBXAYBTgAEUkAIl0gIQAZhRAlhUIFUAHQgXBUgHBSg");
	this.shape_2.setTransform(123.7,310.9);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("EAiMAGpIocgDIoQgDIoFgCIn6gDInwgDInngCIndgDInUgCInMgCInBgBQC4h4DEh3QCYheCUhhQB1hSB1hZIDEiZIEogaIEtgWIEvgTQCagHCfgBIBTAAIAbAAQBmgBBqAEIFDAFIFKAGIFRAFIFUAFIFbAEIFeAEQA7BVBPBSQBiBnBpBaQCEBsBfBjQBsB9CJCFQkXgEkSAAg");
	this.shape_3.setTransform(145.5,316.1);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#669900","#89C102"],[0,1],-5.5,-76.7,6.5,21.5).s().p("EgwCAJBIAAwHQP2gwLLBGQLMBFOWhPIXkh8QJLgtKzCdIAAQHg");
	this.shape_4.setTransform(255.5,287.4);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.078)").s().p("EgwagBGIAXgYIAMBaQAPhABGgiQAbAjAZAlIAEhNIBaAeQglg3APg+QAtATArATQgNg0Adg8QAiAmAeAoIAWh9IA2AsQgXhDAdhAIBYA1IAVhqIBBBOQAFhTA1g8IArB1QAbhIBMglIARB2IBwhFIARBvQAjgvA7gIIgZCRIBuhBQgFBBgBBCIBchaIAcBvIAphnIBSAcIAFhpIBqA0QgbhHAghHIBBBMIAbhcIA7BoIAth9IA1BDQgDhZBLhTIAyCFIBNhTIAdBuIBrhrIgEBoIBng9IgEBlIBUg8IAVBmQAeg6BIgZIAnB2QAVgdAcgPQABg8ALgiQAdAXAmAyIAshWIBFBOQgHhFA8hFIA7B/IBJhPIArBsQAhg8BSgdIgcCOQBKg+BOgIIg6CHQA2goBDgLQgPA1gOA5IBng+IAwBEQAPg0Aeg9IBPBVIANhnQAqAbAsAeIADhbIA5AlQgVhEADg8IBuA3IAOg3IBcA3QgRhFA1hFIBIBjQALg0AygqIAvBbIBNgzIARA5QAZg/AogqIAtB8IA+hbIALBfQAjgQAkgOIgXBQQAxgfAygbIgBCKQAhgfAjgdIASBXQALg7BEgWIA6BJIgChGIBfAoQgrg5ANg0IBbAtQgSgwAagzIBGBPIAOhsIA6AvQgdhBAag2QAuAgAuAgIAQhhIBIBTQgChLAygyIAxB0QAYg9BJgXIAZBvIBtgsQAKAzANAxQAhgjA5ABIgPB6QA1gVA0gSIAEBuIBVhAIAjBiIAihRIBTAjIgChWIBuA4Qgig+Adg4IBGBKIAUhLQARAcAUAbQAIFvgIIdQ8Thy8SAVIgDgzIgDCQQz/A9z/ASQgNk+AEl0g");
	this.shape_5.setTransform(257.6,244.8);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#597D02").s().p("EgwLAIUIAArFIAmggIAMBYQAQg9BEgYIA2BKIAChHIBbAmQgng4AQg3IBYAtQgOgxAdg1IBBBPIAVhvIA2AtQgYg/Acg3IBaA6IAUhfIBCBNQAGhJAzgzIAsBwQAag9BMgcIASBtIBwg0IASBlQAjgmA6gDIgYCAIBugxIgFB3IBbhLIAdBoIAohaIBSAgIAEhgIBrA2QgchCAhg+IBABJIAbhTIA8BkIAshxIA1BBQgBhTBIhJIAzB+IBMhJIAeBoIBqhgIgDBjIBng2IgEBfIBUg1IAWBiQAeg1BHgXIAoBzQAVgbAcgNIADhzIBLBgIAshRIBFBOQgIhDA9hDIA7B9IBJhNIAsBsQAfg7BSgcIgcCLQBLg7BNgHIg5CEQA2glBCgMIgcBrIBng9IAwBCQAPgxAeg+IBPBTIAMhmIBWA3IADhbIA4AkQgThCABg+IBuA1IAOg4IBbAzQgQhEA0hGIBIBfQALg0AygsIAuBZIBOg4IAQA5QAahBAngrIAtB5IA9hfIAMBfIBHgjIgYBSIBjhBIgBCKIBDhAIASBXQANg9BBgbIA7BHIgChIIBfAiQgqg2ALg3IBbAnQgQgvAYg2IBGBKIAPhvIA5AqQgcg9AZg5IBcA2IAQhgIBIBKQgBhKAwg0IAzBsQAWg+BKgfIAZBrIBtg4IAYBiQAhgmA6gHIgQCCIBpg3IADB3IBXhPIAiBmIAkhcIBTAcIgChfIBuAxQgghBAdhAIBGBGIAShKIAAPCMg39ABHIgCgwIgDCJg");
	this.shape_6.setTransform(257.2,218.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.2,157.4,737,330.9);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],-2.4,-138.6,-8.1,230.5).s().p("EgtdAakMAAAg1HMBa7AAAMAAAA1Hg");
	this.shape.setTransform(0,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291,0,582.1,340);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAF0FE").s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#407900").ss(1.5,1,1).p("ACWgdIkrAAQgQAAgMAJQgMAJAAALQAAAMAMAJQAMAJAQAAIErAAQAQAAAMgJQAMgJAAgMQAAgLgMgJQgMgJgQAAg");
	this.shape.setTransform(15,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB900").s().p("AiVAdQgQAAgLgJQgMgIAAgMQAAgLAMgIQALgJAQAAIEqAAQARAAAMAJQAMAIAAALQAAAMgMAIQgMAJgRAAg");
	this.shape_1.setTransform(15,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-2.9,38,6);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(55,183,232,0.502)").ss(1,1,1,3,true).p("ABCASQgBgFAFgIQAEgHgNgVIgdglAAThBQgRgEgWAJQgYAIgFAKIgJAOIgDACAhGgQQAEAWAIAWQAIAWAUASABCAWIAAgEAgRBEIAngJQATgHAWgU");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,183,232,0.251)").s().p("AAfAvIALgMIAVgDQgWAUgTAHIgnAJgAg6AcQgIgWgEgWIAYAzIAMARIAEAQQgUgSgIgWgAA8gFIgMgVIgQgiIAdAlQANAVgEAHQgFAIABAFgAgxgqQAFgKAYgIQAWgJARAEIgKAHIgZAFIgVAKIgVAPg");
	this.shape_1.setTransform(0.1,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-6.7,14.3,13.6);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(55,183,232,0.502)").ss(1,1,1,3,true).p("AA/AUQgBgFACgLQADgIgMgTIgYgiAATg+IgoAIQgUAGgEAKQgFAKgFADAhAgQIAOAmQAJAVAOAUAgOA/QASgDAUgJIAlgW");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,183,232,0.251)").s().p("AACAlIAaADIABgXIAgAMIglAWQgUAIgSADgAgyAWIgOgmIATAYIATADIAIAUIgJAfQgOgTgJgVgAAnAJIAAgPIACgMIgKgnIAYAiQAMATgDAJQgCAKABAEgAg3gZQAFgDAFgKQAEgKAUgGIAogIIgLAaIgVgCIgRAWg");
	this.shape_1.setTransform(0,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.1,13.1,12.6);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(55,183,232,0.502)").ss(1,1,1,3,true).p("AAQg4IgRgBIgVAFQgTAHgEAJIgIAOAAZg1QAOALAKASQAJASgCAIQgDAKACAGAgPA6IAOgDIAVgJQATgIALgOAg3gOQgDAPAIASQAJAUASAO");
	this.shape.setTransform(0.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,183,232,0.251)").s().p("AADAHIALARIgDgZIAnAZQgLANgTAJIgVAIIgOAEgAgyATQgIgSADgPIAbAOIAQAAIAIARIgTAjQgSgOgJgTgAAWgDIgOgHIAJgFIAIgmQAOALAKASQAJASgCAIQgDAKACAGgAg1gVIAIgPQAEgJATgHIAVgEIARAAIgNAjIgPgCIgFAOg");
	this.shape_1.setTransform(0.2,0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.4,11.4,11.6);


(lib.shape9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.451)").s().p("AgCACIgBgCIABgCIACgBIACABIACACIgCACQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(2.8,-1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.651)").s().p("AgFAFIgBgFIABgFQADgBACAAIAFABIADAFIgDAFIgFADQgCAAgDgDg");
	this.shape_1.setTransform(1.6,-2.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,-3.6,2.5,3.1);


(lib.shape8 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(55,183,232,0.498)").ss(1,1,1,3,true).p("AAjgiQAPAPAAATQAAATgNAOIgCACIgQALIgTAEQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPg");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,183,232,0.251)").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.749)").ss(1,1,1,3,true).p("AAhAQIgKAEIgMABQgQAAgOgMQgMgMgBgR");
	this.shape.setTransform(-1,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,0.1,6.7,4.4);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite69 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape70("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite63 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape64("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite60 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape61("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
	var self = this;
 	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound62");
	}
	this.frame_7 = function(){
    this.stop ();
    if (!this.parent.gameWin)
    {
      this.parent.parent.startBubbles();
    }
    else
    {
      //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
      this.parent.parent.GameWon = true;
    } // end else if	
	}
	this.frame_8 = function() {
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
      this["puff" + i] =  new lib.sprite3Puff(); //attachMovie("Puff", "puff" + i, i);
      this.addChild(this["puff" + i]);
      this["puff" + i].rotation = Math.random() * 360;
      this["puff" + i].scaleX = this["puff" + i].scaleY = Math.random() * 40/100 + 0.8;
      this["puff" + i].velX = Math.random() * 40 - 20;
      this["puff" + i].velY = Math.random() * 40 - 20;
      this["puff" + i].step = Math.random() * 10 + 10;
      this["puff" + i].on("tick", function (evt)
      {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - this.step/100;
        if (evt.currentTarget.scaleX <= 0)
        {
            self.removeChild(evt.currentTarget);     // this.removeMovieClip();
        } // end if
      });
    } // end of for	
	
		playSound("sound66");
	}
  this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame - 1);   //prevFrame();
   this.parent.lose();  
  }
  
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite60();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite63();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape65("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
   this.score = function ()
   {
    this.gotoAndStop(this.currentFrame + 1);    //nextFrame ();
    this["star" + this.currentFrame].gotoAndPlay("point");
   } // End of the function
   this.lose = function ()
   {
    if (this.currentFrame != 0)
    {
        this["star" + this.currentFrame].gotoAndPlay("loss");
    }
    else
    {
        this.parent.gotoAndPlay("start");
    } // end else if
   } // End of the function
   this.stop ();
   this.gameWin = false;  
  }
  this.frame6 = function(){this.gameWin = true}
	// Layer 5
	this.star5 = new lib.sprite59();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite59();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite59();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite59();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite59();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}  
	// Layer 1
	this.instance = new lib.shape56("synched",0);

	this.instance_1 = new lib.shape57("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(5));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,0.7,19.4,12.8);


(lib.sprite52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape53("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape54("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-26.9,50.2,44.8);


(lib.sprite49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape50("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-6,12.1,12.1);


(lib.sprite47 = function() {
	this.initialize();

	// Layer 2
	this.hit = new lib.sprite49();
	this.hit.setTransform(31,-0.5,1.525,0.793);
	this.hit.alpha = 0;

	// Layer 1
	this.instance = new lib.shape48("synched",0);

	this.addChild(this.instance,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.5,40.2,15.9);


(lib.sprite38 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape39("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-3.1,21.7,6.6);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1,jump:8});
  this.frame8 = function(){this.gotoAndPlay("run")}
	// Layer 3
	this.instance = new lib.sprite38();
	this.instance.setTransform(-10.2,18.1,0.67,1.186,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.67,scaleY:1.18,rotation:117.5,x:-18.6,y:6.9},0).wait(1).to({scaleX:0.71,scaleY:1.18,rotation:104.1,x:-5.8,y:7.9},0).wait(1).to({scaleX:0.76,scaleY:1.18,rotation:5.8,x:2.5,y:10.7},0).wait(1).to({scaleX:0.8,scaleY:1.18,rotation:-38.7,x:10.9,y:23.4},0).wait(1).to({scaleX:0.76,scaleY:1.18,rotation:5.7,x:1.1,y:19.7},0).wait(1).to({scaleX:0.71,scaleY:1.18,rotation:37.3,x:-12.4,y:13.5},0).wait(1).to({scaleX:0.67,scaleY:1.18,rotation:117.5,x:-18.6,y:6.9},0).wait(1).to({scaleX:0.77,scaleY:1.03,rotation:71.2,x:-8.4,y:20.6},0).wait(4));

	// Layer 2
	this.instance_1 = new lib.sprite38();
	this.instance_1.setTransform(2.7,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:-30.7,x:19,y:17.9},0).wait(1).to({scaleX:0.92,scaleY:1,rotation:-0.7,x:6.1,y:15.4},0).wait(1).to({scaleX:0.84,scaleY:0.99,rotation:21,x:-11.6,y:12.1},0).wait(1).to({scaleX:0.77,scaleY:0.99,rotation:79.7,x:-19.4,y:3.8},0).wait(1).to({scaleX:0.84,scaleY:0.99,rotation:77.4,x:-4.1,y:3.5},0).wait(1).to({scaleX:0.92,scaleY:0.99,rotation:5.2,x:7.2,y:8.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30.7,x:19,y:17.9},0).wait(1).to({scaleX:0.82,rotation:63.4,x:3.5,y:17.1},0).wait(4));

	// Layer 1
	this.instance_2 = new lib.shape37("synched",0);

	this.instance_3 = new lib.shape40("synched",0);

	this.instance_4 = new lib.shape41("synched",0);

	this.instance_5 = new lib.shape42("synched",0);

	this.instance_6 = new lib.shape43("synched",0);

	this.instance_7 = new lib.shape44("synched",0);

	this.instance_8 = new lib.shape45("synched",0);

	this.instance_9 = new lib.shape46("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_9}]},1).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame8).wait(4));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-2.4,35.6,28.2);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{blow:4});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_3 = function() {
	  this.stop();
		playSound("sound2bubbles_blowwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(6));

	// Layer 7
	this.instance = new lib.shape27("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8).to({startPosition:0,_off:false},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.shape29("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).to({_off:true},1).wait(8));

	// Layer 5
	this.instance_2 = new lib.shape31("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition:0,_off:false},0).to({_off:true},1).wait(5).to({startPosition:0,_off:false},0).to({_off:true},1).wait(1));

	// Layer 4
	this.instance_3 = new lib.shape33("synched",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(2));

	// Layer 3
	this.instance_4 = new lib.shape26("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(10));

	// Layer 2
	this.instance_5 = new lib.shape30("synched",0);

	this.instance_6 = new lib.shape32("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},5).to({state:[]},1).wait(1));

	// Layer 1
	this.instance_7 = new lib.shape25("synched",0);

	this.instance_8 = new lib.shape28("synched",0);

	this.instance_9 = new lib.shape34("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.4,-106.1,113,222);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape23("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-4.4,56.2,8.9);


(lib.sprite20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape21("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-554.9,-100.1,1078,200.3);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291,0,582.1,340);


(lib.sprite14segment = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape15("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-2.9,38,6);


(lib.sprite7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape8("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.sprite5Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	var self = this;
	this.frame_0 = function(){
     this.stop ();
     this.shape.scaleY = Math.random() * 15/100 + 1;
     this.shape.rotation = Math.random() * 360;
     var turn = Math.random() * 20 - 10;
     this.shape.on("tick", function ()
     {
       self.rotation = self.rotation + turn;
     });	
	}
	this.frame_1 = function() {
	  this.rotation = Math.random() * 360;
		playSound("sound10");

	}
  this.frame_4 = function(){
    --_root.bubbleCount; 
    if (_root.bubbleCount <= 0 && !_root.gameOver && !_root.gameWin)
    {
      _root.starPoints.score(); 
    } // end if
    _root.bubbles.removeChild(this);
    
  }
  
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4));

	// Layer 3
	this.instance = new lib.shape9("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// Layer 2
	this.shape = new lib.sprite7();

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_1 = new lib.shape6("synched",0);

	this.instance_2 = new lib.shape11("synched",0);

	this.instance_3 = new lib.shape12("synched",0);

	this.instance_4 = new lib.shape13("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.sprite3Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape4("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite35 = function() {
	this.initialize();
  var self = this;
  var segLength = 30;
  var velX = 0;
  var velY = 0;
  var damp = 9.000000E-001;
  var gravity = 2;
  var ground = 244;
  var running = false;
  this.on("tick", function()
  { 
    
    if (Math.random() * 90 < 1)
    {
        self.eyes.play();
    } // end if
    delX = stage.mouseX / ratio - self.x;
    if (delX < -20)
    {
        velX = velX - 1;
        self.seg_con.scaleX = -1
    } // end if
    if (delX > 20)
    {
        velX = velX + 1;
        self.seg_con.scaleX = 1;
    } // end if
    velX = velX * damp;
    self.x = self.parent.charShadow.x = self.parent.charShadow.x + velX;
    self.y = self.y + velY; 
    
    if (self.y >= ground)
    {
        velY = 0;
        self.y = ground; 
    }
    else
    {
        velY = velY + gravity;
    } // end else if
    
    var _loc9 = stage.mouseX /ratio - self.x - self.seg1.x;
    var _loc8 = stage.mouseY /ratio - self.y - self.seg1.y;
    var _loc11 = Math.sqrt(_loc9 * _loc9 + _loc8 * _loc8);
    var _loc3 = segLength;
    var _loc4 = segLength;
    var _loc5 = Math.min(_loc11, _loc3 + _loc4);
    var _loc6 = Math.acos((_loc3 * _loc3 + _loc5 * _loc5 - _loc4 * _loc4) / (2 * _loc3 * _loc5));
    var _loc10 = Math.acos((_loc3 * _loc3 + _loc4 * _loc4 - _loc5 * _loc5) / (2 * _loc3 * _loc4));
    var _loc7 = Math.atan2(_loc8, _loc9);
    var _loc12 = _loc7 + _loc6 + 3.141593E+000 + _loc10;
    self.seg1.rotation = (_loc7 + _loc6) * 180 / 3.141593E+000;   
    self.seg0.x = self.seg1.x + Math.cos(_loc7 + _loc6) * segLength;
    self.seg0.y = self.seg1.y + Math.sin(_loc7 + _loc6) * segLength;
    
    if(self.seg_con.scaleX == -1){ 
       self.seg0.scaleX = -1;
       self.seg0.rotation = _loc12 * 180 / 3.141593E+000 + 180
    }else{
       self.seg0.scaleX = 1;
       self.seg0.rotation = _loc12 * 180 / 3.141593E+000;   
    }     
    if (self.y >= ground)
    {
        if (Math.abs(velX) <= 2)
        {
            running = false;
            self.legs.gotoAndStop(0);
            self.arm.gotoAndStop(0);
        }
        else
        {
            if (!running)
            {
                running = true;
                self.legs.gotoAndPlay("run");
            } // end if
            self.arm.gotoAndStop(0);
        } // end else if
    }
    else
    {
        running = false;
        self.legs.gotoAndStop("jump");
        self.arm.gotoAndStop(1);
    } // end else if
   }); // End of the function

   stage.on("stagemousedown", function ()
   {
    if (self.y == ground)
    {
        velY = -15;
    } // end if
   });
 
	// Layer 6
	this.eyes = new lib.sprite55();
	this.eyes.setTransform(-6.8,-28.3,1.05,1.05);

	// Layer 5
	this.arm = new lib.sprite52();
	this.arm.setTransform(-31.9,16.1);

	// Layer 4
	this.instance = new lib.shape51("synched",0);

	// Layer 3
	this.seg0 = new lib.sprite47();
	this.seg0.setTransform(25,-4.9);

	// Layer 2
	this.seg1 = new lib.sprite14segment();
	this.seg1.setTransform(-4.4,-4.9);

	// Layer 1
	this.legs = new lib.sprite36();
	this.legs.setTransform(-14.3,45.8);

  this.seg_con = new cjs.Container();
  this.seg_con.addChild(this.legs,this.instance,this.arm,this.eyes);
	
	this.addChild(this.seg1,this.seg0,this.seg_con);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.2,-47.7,110.5,119.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;