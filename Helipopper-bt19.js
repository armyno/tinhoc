(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Helipopper = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
  var self = this; 
	// timeline functions:
	this.frame_0 = function(){
   this.colorHat = function ()
   {
     this.hatColor = this.balloonColors[Math.floor(Math.random() * this.balloonColors.length)];
     
     this._char.hat.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.hatColor.red, this.hatColor.green, this.hatColor.blue, 0)];
     this._char.hat.cache(-24.8,5.6,50.3,21);

   } // End of the function
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;
   this.balloonColors = [{red:242, green:53, blue:58}, {red:255, green:240, blue:38}, {red:153, green:197, blue:80}];
   this.colorHat();	
	
	}
	
	this.frame_1 = function() {
	 playSound("sound65",-1);
   function attachCloud()
   {
    ++cloudDepth;
    if (cloudDepth > 100000)
    {
        cloudDepth = 0;
    } // end if
      
    self["cloud" + cloudDepth] = new lib.sprite5Cloud();  //attachMovie("Cloud", "cloud" + cloudDepth, cloudDepth);
    self.cloudCon.addChild(self["cloud" + cloudDepth]);
    self["cloud" + cloudDepth].x = Math.random() * 500;
    self["cloud" + cloudDepth].y = -150;
   } // End of the function
   function attachBalloon()
   {
    ++balloonDepth;
    if (balloonDepth > 410000)
    {
        balloonDepth = 400000;
    } // end if
    self["balloon" + balloonDepth] = new lib.sprite6Balloon();   //attachMovie("Balloon", "balloon" + balloonDepth, balloonDepth);
    self.balloon.addChild(self["balloon" + balloonDepth]);
    self["balloon" + balloonDepth].x = Math.random() * (500 - 100) + 50;
    self["balloon" + balloonDepth].y = -150;
    self["balloon" + balloonDepth].on("tick",  function (evt)
    {
        evt.currentTarget.y = evt.currentTarget.y + (Math.random() * 5 + 5);

        var xHit = self._char.x + self._char.hit.x - evt.currentTarget.x - evt.currentTarget.hit.x;
        var yHit = self._char.y + self._char.hit.y - 8 - evt.currentTarget.y - evt.currentTarget.hit.y
        
        if ((evt.currentTarget.hit.hitTest(xHit - 30, yHit) || evt.currentTarget.hit.hitTest(xHit, yHit) || evt.currentTarget.hit.hitTest(xHit + 30, yHit)) && !self.gameOver)
        {
            evt.currentTarget.play();
            if (self.balloonMaxWait > 12)
            {
                self.balloonMaxWait = self.balloonMaxWait - 1;
            } // end if
        } // end if
        
        if (evt.currentTarget.y > 500)
        {
            evt.remove();
            self.balloon.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        } // end if        
        
    });
  } // End of the function
  this.stop ();
  var vx = 0;
  var vy = 0;
  var ax = 0;
  var ay = 0;
  var aspin = 0;
  var vspin = 0;
  var damp = 9.000000E-001;
  var padding = 10;
  var charDepth = 500000;
  var balloonDepth = 400000;
  var cloudDepth = 0;
  var cloudWait = 0;
  var balloonWait = 0;
  this.balloonMaxWait = 48;
  var score = 0;
  //scoreFld.text = score;
  this.gameOver = false;
  //char.swapDepths(charDepth);
  //cur.swapDepths(charDepth + 1);
  //border.swapDepths(charDepth + 2);
  //GameEndClip.swapDepths(charDepth + 3);
  attachCloud();
  this.on("tick", function ()
  {
    if (Math.random() * 100 < 1)
    {
        self._char.eyes.play();
    } // end if
    if (self.gameOver)
    {
        vx = 0;
        vy = 0;
    }
    else
    {
        vx = (stage.mouseX/ratio - self._char.x) / 8;
        vy = (stage.mouseY/ratio - self._char.y) / 12;
        self._char.x = self._char.x + vx;
        self._char.y = self._char.y + vy;
    } // end else if
    self._char.rotation = self._char.rotation + (2 * vx - self._char.rotation) / 4;
    self._char.a1.rotation = -2 * vx + 2 * vy;
    self._char.a2.rotation = -2 * vx - 2 * vy;
    self._char.l1.rotation = -2 * vx + 4 * vy;
    self._char.l2.rotation = -2 * vx - 4 * vy;
    if (stage.mouseX/ratio >= self._char.x - padding)
    {
        if (stage.mouseX/ratio <= self._char.x + padding)
        {
            ax = 0;
        }
        else
        {
            ax = 1;
        } // end else if
    }
    else
    {
        ax = -1;
    } // end else if
    if (stage.mouseY/ratio >= self._char.y + 30 - padding)
    {
        if (stage.mouseY/ratio <= self._char.y + 30 + padding)
        {
            ay = 0;
        }
        else
        {
            ay = 1;
        } // end else if
    }
    else
    {
        ay = -1;
    } // end else if
    ++cloudWait;
    if (cloudWait > 96)
    {
        cloudWait = 0;
        attachCloud();
    } // end if
    ++balloonWait;
    if (balloonWait > self.balloonMaxWait && !self.gameOver)
    {
        balloonWait = 0;
        attachBalloon();
    } // end if
  });		
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));
    
	// Layer 5
	this.border = new lib.sprite62();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.border}]}).wait(2));

	// Layer 4
	this.instance = new lib.shape61("synched",0);
	this.instance.setTransform(433.2,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

	// Layer 3
	this.starPoints = new lib.sprite51();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(2));

	// Layer 2
	this._char = new lib.sprite23();
	this._char.setTransform(250.1,170,1.001,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._char}]}).wait(2));

  //layer 7
  this.balloon = new cjs.Container();
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.balloon}]}).wait(2));
  
  //Layer 6
  this.cloudCon = new cjs.Container();
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cloudCon}]}).wait(2));

	// Layer 1
	this.instance_1 = new lib.shape22("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));
this.cloud = new cjs.Container();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,336.1);


// symbols:

(lib.image60 = function() {
	this.initialize(img.image60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite64 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite7 = function() {
	this.initialize();
  this.shape = new cjs.Shape();
  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite5Cloud = function() {
	this.initialize();
	var self = this;
  var numBalls = Math.ceil(Math.random() * 10) + 4;
  for (var i = 1; i <= numBalls; i++)
  {
    this["ball" + i] = new lib.sprite3Ball();  //this.attachMovie("Ball", "ball" + i, i);
    this.addChild(this["ball" + i]);
    this["ball" + i].x = Math.random() * numBalls * 40 - numBalls * 10;
    this["ball" + i].y = Math.random() * numBalls * 6 - numBalls * 3;
    this["ball" + i].scaleY = Math.random() * 2 + 3;
    this["ball" + i].scaleX = Math.random() * 2 + 1 + this["ball" + i].scaleY;
    this["ball" + i].alpha = (Math.random() * 30 + 10)/100;
    this["ball" + i].on("tick", function (evt)
    {
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.scaleX; 
        if (evt.currentTarget.y > 500)
        {
            evt.remove();
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        } // end if
    });
  } // end of for

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape63 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape61 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image60(); 
	this.shape.setTransform(-45, -7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape58 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape57 = function() {
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


(lib.shape54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AgThGIgCgCAgThGQAMALANgDQgHgCgQgJAAKg8IAAgBIgEgBIAEACIAIgBQALgEAwgYIAQgJQARgKAJABQgNgDgVALIgmAWQgWAOgPADgAB3hrIAJADIAMAHQAPALAFAZQAIAegJAfQAGgMACgNQABgLgFgZIgGgWIgRgOACdAEQACgBAAgCQAAAAAAgBQAAACgCACQgBAMgGAMQgMAegPAKQgJAHgWAIQgZANghAIQgNAEgPgEQgYAIgagHQgRAEgSgEIgXgIIgDAAIgCgCQgkgPgMghQgIgEgDgHAiaA3IAvAoIAFACIA6AIIAgAEIASgFIA6gMIAcgJQAzgcAOgz");
	this.shape.setTransform(9.5,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C185F7").s().p("AgUBsIAOgCIgIACgAgVBsIAAAAIAAAAIAAAAgAgWBsIABAAIAAAAIgBAAgAgsBpQALADALAAQgLAAgLgDgAgUBsIAAAAIgBAAIABAAgAgvBoIg6gHIgEgCIgrglIgFgMIAFAMIgEgEQgCgDABgFQgkh9CrAIIABABIABABIABAAQAJAHAKAAIAAAAIAAAAIACAAIACAAIAEABIAHAAQAMgEAwgYIAQgKQARgKAJACIAJACIAMAHIACACIgCgCIACACQANAMAFAWQADAOAAAOQAAARgFARQAFgRAAgRQAAgOgDgOQgFgWgNgMIAPAMIAGAWQAFAZgCALQgCANgGANQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgOAzg0AcIgbAJIg6ANIgKACIgOACgAgGBqIAIgCIgIACgAgtBpIABAAIgBAAgAgtBpIAAAAIAAAAgAgtBpIAAAAIAAAAgAgvBoIACABIgCgBgAAEBoIgCAAIACAAgAhsBgIgBgBIAEACgAhtBfgAiYA6QANAYAeANQgegNgNgYgABZBSIAAAAgACbADQgCANgFALQgNAegOAKQgKAHgWAIQA0gcAOgzgACbADIAAAAgAAAg+QgKAAgJgHIgBAAIgBgBIgBgBIADgCQAPAIAIADIgCAAIgCAAIAAAAIAAAAg");
	this.shape_1.setTransform(9.7,1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.5,33.5,21.9);


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("Ah1hAQAXgNAhAAIAuAGQAZACAMgUAAQBWIAHgCAAxBFQABgBACAAQABgBACAAQAKgFAKgIIBMhGAgmBVQAJAFALAAIAigEAAaBSQANgDANgLAiKgkQgKAGgBAIQgFAYAOAaQAaAwBHAIAh2g/QgRAJgDAS");
	this.shape.setTransform(-7.9,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C185F7").s().p("AASBbIAHgCIgHACIg3gBIgBAAIgEgBIg0gTQgLgEgMgRIgSgfQgJgOABgKIAGgZIABAAQADgMAJgJIAHgGIABgBIABAAQAWgNAhAAIAvAGIABAAIAEAAIAAAAIAAAAQAVAAALgSIAEgDQCMgTgdBmIg8A6IgdAUIAAAAIgXANIgCACIgEACIgDAAgAhvhAIASgKIAVgCIA+AFQAZgHAJgGQgLASgVAAIAAAAIAAAAIgEAAIgBAAIgvgGQghAAgWANg");
	this.shape_1.setTransform(-8,5.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-3.9,30.3,18.7);


(lib.shape46 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AB9hRQALAhgFAeQAFANgCALQgFAdgLAXAB9hRIgGgRQgZg+hOgaAgNjAIgBAAIgBAAAg9i+IgBAAIgeAJQgWAJgIANQgEADgBAFQgKAMAFARAAGABQAGAdgRAZQABAGgDAFAgNjAIANABIAQAFAAGABIgBgDQgGgngggMIg1gTQgSgJgHgOQgIgEgDgGQgEgBgBgDIgFgNABpBhQgBAMgFAKQgLAVgSAOAANDCQAjgMAWgcABpBhQAKgRADgWAg9i+IATgDIAbABAANDCIgBAA");
	this.shape.setTransform(0.1,-11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C185F7").s().p("AgJBFIAHgQQAIgQACgJIABgaIAAgCIAAgUIgVggIgYgKIgagLIgugXIgCgBQgGgDgCgEIgBgCIgHgLIgDgGQgCgGAAgFQAAgLAHgIQABgEAEgDQAEgOAIgDIAZgKIAXgFIgeAKQgWAIgIAOQAIgOAWgIIAegKIABAAIAugBIABAAIABAAIAcAGIABgBQBOAbAZA+IAGAQQAIAXAAAWQAAgWgIgXIAHAjQABAFgCAYIAAAUIgFAXIgGAYQAAADgCAFIgCAHQgBAJgFAOIAAABIgFAJQgCAKgKASQgEAIgTAVIgCACQgIAJgZAOIgWAOQAhgLAWgaQgWAaghALIgBABIgEABgAgEBBQACgEAAgGIAAgCIAAACQAAAGgCAEgABJCZIgCACIACgCgABJCZIAAAAgABxBXQgBADgEAGIAFgJgABxBXQAEgLACgNQgCANgEALIAAAAgAB5A4IgCAHIACgHgACGgTIACgTIgCATIAAAAgACAhTgAB6hjQgZg+hOgbIAaAIIAgATIAdAUIASAnIAEATgAhuhhIACABIgCgBgAh0hkIgCgEQACAEAGADgAh3hqIABACIgBgCgAiGiLQADgJAHgFQgHAIAAALQAAAFACAGQgGgNABgDg");
	this.shape_1.setTransform(-0.1,-11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-30.9,27.4,39.1);


(lib.shape44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AA5jeQgjgCgeAOQgWAJgWAWQgSASgRAcQgHANgHAOQgGAHgFAJQgEAIAAAKAB3jFQANAMAGATQAFAQgEANACLiIQACADgCADIgEAIQgBACgBADQgBAAgBABQgJAJgNAFACLiIIAAgBAB3jFQgWgXgngCABohlQgHADgJACQgqAIgdAeIgRAVQgJAPABARQgFAFgCAHQgBAEABAFAANBKIAFACAANBKQgIgEgJgRQgMgTgBgKQgBgEADgEAiDgfQgCgLAFgIQAEgJAHgHAiFgDIAAADQgHAMABAPQACAvAYAuIACAEIASAcQAkAvA6AZAiCgiQgEAPABAQ");
	this.shape.setTransform(0,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C185F7").s().p("AAADfQgTgLgngeIglgfIgSgcIgRhEIgFg4IARhIIAGgPQABgHAIgMIAOgbIAJgMIAagiIANgTQAFgMAmgMQAMgDApADIAAAAIABAAIAQAAQAKABARAJQARAJABAGIALAdQAJAYAAAHIAAABIAAAAIAAgBIAAABQgBAKgFAJIgCABQgJAJgNAFIgFABIgcAEQgUAEgYAOIgPAVIgPAVQgKANAAAPIAAAEIgJARQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQgCADAAADIAAACQABAKAMATQAJARAIAEIAEAHIgJCSgAgKjTQgWAJgWAWQAWgWAWgJIACgBIABgBQAZgKAdgBIABAAIAAAAIAFABIACAAIgCAAIgFgBIAAAAIgBAAQgdABgZAKIgBABIgCABIAAAAgAB1jGQgWgXgngCQAnACAWAXgAhfCXQAkAvA7AZQg7gZgkgvgAhrCKIgGgPIASAcgAgGA0QgMgTgBgKIAAgCQAAgDACgDQADANAZAtQgIgEgJgRgAiHgEIAAgEQAAgOADgNIgDAfgAiIgZIAEgKQgDANAAAOIAAAEgAgKgGIAAAAgAgKgKQAAgPAKgNIAPgVIgOAZIgLAcIAAgEgAh2hJQgFAPgJAXQAJgXAFgPgAAPg7gACBh1IgHAIQgFAEgKACQANgFAJgJgAhfh7IAGgLIgOAbQACgIAGgIgACBh1IACgBIgCABgAg2i0QgSASgRAcQARgcASgSgACJiJg");
	this.shape_1.setTransform(0.1,-14.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-37.5,28.2,45.2);


(lib.shape42 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#543632").ss(1.5,1,0,3).p("AhjgEQBlgdBiAw");
	this.shape.setTransform(10,1.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#543632").ss(1.5,1,0,3).p("AhkAcQBahGBvAU");
	this.shape_1.setTransform(-10.1,3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543632").ss(1.5,1,0,3).p("ACCiUIAXAXIADAEIATAfIAFAKIANAnQAFAWACATQACAbgEAeQgFAtgXAXQgCAGgFADQgDAIgHAEQgOAKgWADQgYAEgXgFIgCAAIgDgBQgwgMgRguIgFgRABoijIAaAPABmikIABABIABAAABSipQABgBAAABIAHACIACAAIACABIAIACAADhcQAFgSAIgRIAHgMQAXgjAkAFAABhSIACgKIAAAAAgbCEQgKAOgOAJQgEADgFgBQgXARgcgFQgFADgEgBIgBgBIgUgFQgXgLgPgaQgOgYgFgiIgBgPIgBgCQAAgEABgEQgDgsAOguQAAgBABAAQgBgNAEgMQAFgTAKgOQAFgTAJgMIAAgBIAAAAIACgCIAAAAQASgXAWgGIACgBQAQgEASAIIAJAFQAOAKAPARQAlApACAlQAAgOABgOAAAgrIAAgGIAAgFAgHBRQgFAfgPAU");
	this.shape_2.setTransform(0.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C68FF8").s().p("AiNCnIAUAFIgOABgAiNCnIgggjQgUg0gFgIIgBgPIAAgKIABgNQADgigCgEQADgTAGgUQgGAUgDATIAAAAQgBgFAKgiQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAKgjAAgEIAIgTQAFgTAJgMQgJAMgFATIADgIIALgXIAAgBIAAAAIACgCIAAAAIAXgSIARgLIAMgHQADgBAVALIgBAAIgBgBIgCAAQgJgEgJAAIgBAAIAAAAIgJABIgBAAIAAAAIgBAAIgCABIACgBIABAAIAAAAIABAAIAJgBIAAAAIABAAQAJAAAJAEIACAAIABABIABAAIAJAFQAOAKAPARQAlApACAlIAAgFQAAgMABgLIACgKIAAAAQASgkACgLIABgBIABgBIAAgBIAAAAQALgPANgHIAAAAIABAAQALgGAMAAIABAAIAAAAIAFAAIADABIAIACIACAAIACABIABAAIAHACIABABIABAAIARAGIAJAJIgagPIAaAPIAXAXIADAEIAJAIIAKAXIAFAKQAHAOADACQAEADAGA2IAAAHQgCgTgFgWIgNgnIANAnQAFAWACATQgEA9gCAEQgQAwgIAMQgCAGgFADIgiAUIg7AEIgCAAIgDgBIgqgiIgXgYIgFgRIAFARIgDgEIgRAfIgHAGQAPgUAFgfQgFAfgPAUIghAZIgBABIgGAEIgsAHIgKABgAAAgvIAAAGIAAgGIAAgFIAAAFgACvhYIgTgfgABmiiIgIgCgAhiCsIAAAAIAAAAIAAAAgAhjCsIABAAIAAAAIgBAAgAhtCrIAKABIgKgBgAhDCkIAAAAQgPAIgQAAQAQAAAPgIgAhvCrIACAAIgCAAgAg9CgIABgBIgGAFIgBAAIAGgEgABCCgIgBgBIADABgABBCfgACjCIIAAAAgACqB/QgBAFgBABIgFADQAFgDACgGgACqB/IAAAAgAjGBHIgBgOIABAPgAjHA5gAjHAeIAAARIAAgRgAjFgEQgCAQAAASQAAgSACgQgAAAg0IAAAAgAgniCQgPgRgOgKIAcASIApA7QgBALAAAMIAAAFQgCglglgpgAhxilQgWAGgSAXQASgXAWgGgAAXiKQABgGASgNIAHgFQgNAHgLAPIAAAAIAAABIgBABIgBABgAhEidgAAyiiIAAAAIgBAAIAAAAIABAAgABAirIASAEIgDgBIgFAAIAAAAIgBAAQgMAAgLAGQAJgHAFgCgABSinIAAAAg");
	this.shape_3.setTransform(0.1,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-17.3,40.5,34.7);


(lib.shape41 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAUQgGgJAAgLQAAgKAGgJQAHgJAIAAQAJAAAHAJQAGAJAAAKQAAALgGAJQgHAJgJAAQgIAAgHgJg");
	this.shape.setTransform(-8.5,-9.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAUQgHgIAAgMQAAgKAHgKQAGgIAIAAQAJAAAHAIQAGAKAAAKQAAAMgGAIQgHAJgJAAQgIAAgGgJg");
	this.shape_1.setTransform(8.4,-9.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543632").ss(1.5,1,0,3).p("ACCiUIAXAXIADAEIATAfIAFAKIANAnQAFAWACATQACAbgEAeQgFAtgXAXQgCAFgEADIAAAAIgBABQgDAIgHAEQgOAKgWADQgYAEgXgFIgCAAIgDgBQgwgMgRguIgFgRAgbCEQgKAOgOAJQgEADgFgBAhvCpQAcAFAXgRAgbCEQAPgUAFgfABoijIAaAPABmikIABABIABAAABSipQABgBAAABIAHACIACAAIACABIAIACAADhcQAFgSAIgRIAHgMQAXgjAkAFAABhSIACgKIAAAAAhEifQAOAKAPARQAlApACAlQAAgOABgOAhNikIAJAFAibiHIAAgBIAAAAIACgCIAAAAQASgXAWgGIACgBQAQgEASAIAi8gtIgCAIAjHA3IABAPAiNClIAUAFAibiHQgJAMgFATQgKAOgFATQgEAMABANAi8gtQAAgBABAAAAAg2IAAAFIAAAGAjHA3IgBgCQAAgEABgEQgCgaAEgZAiNClQgXgLgPgaQgOgYgFgiAhvCpQgFADgEgBIgBgB");
	this.shape_2.setTransform(0.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiMClIghgjQgTg0gFgIIgCgOIABgKIAAgOQADgigBgDIFoCLIgjAUIg7AFIgBAAIgDgBIgqgiIgYgZIgEgRIAEARIgDgEIgRAfIgHAHQAQgVAEgeQgEAegQAVIggAZIgCABIgGADIgsAHIgKACgAhiCqIABAAIgBAAIAAAAgAhiCqIAAAAIAAAAIAAAAgAhtCpIALABIgLgBgAhDCiIAAAAQgOAIgQAAQAPAAAPgIgAhvCpIACAAIgCAAgAg9CfIACgBIgGAEIgCAAIAGgDgAAAhHIABgLIACgJIAAgBQATgkACgKQAXgjAjAEIABAAIAHACIADABIABAAIAIADIABAAIACABIAaAOIAWAYIAEADIATAfIAFALIANAnQAFAVABAUQgEA8gCAEQgQAwgIANQgCAFgEADQAEgDACgFQAAAFgCAAIgEADgAjHAcIABASIgBgSgAjEgFIgBgCIABACQgDAQAAARQAAgRADgQgAi+gkQgHAWAAAHQAAgHAHgWgAAAgxIAAAHgAi7guQALgiAAgEIAHgUQAFgSAJgNQgJANgFASIADgIIALgXIggBbQgBgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAgAAAgxIAAgFIAAAFgAgFhPIAFAIIAAARQAAgMgFgNgAhEieQAOAJAQASQAYAbAJAZgAiaiIIAAABIgBAAgAiaiIIAAgBIAAABgAiYiKIAAABIgCAAgAhxinQgWAHgRAWQARgWAWgHgAiYiKIAXgRIAQgMIADAAQAPgEASAIIAJAFIhUAUIAAAAg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF7BE").s().p("AiNCnIAUAFIgOABgABCCgIgBgBIADABgAjGBHIgBgOIABAPgADBgnIgNgnQAHAOADACQAEADAGA2IAAAHQgCgTgFgWgAgniCQgPgRgOgKIAcASIApA7QgBAOAAAOQgCglglgpgACch3IAJAIIAKAXgAAXiKQABgGASgNIAHgFQgPAIgLARgABoihIARAGIAJAJgAAyiiIgBAAIAAAAIABAAgABeikIABAAIAHACgAhvimIgCABIAMgHQADgBAVALQgSgIgQAEgABAirIASAEQgSgDgOAIQAJgHAFgCg");
	this.shape_4.setTransform(0.1,0);

	//this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	this.addChild(this.shape_4,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-17.3,40.2,34.7);


(lib.shape39 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AkRlHIgGAPIgFAMIgXA4Qg5CQADBpIAAAFQABAlALAlIAKAaQASApAeAnIABAAIARAVQApAsAyAdQAXAMAYAJQAmAPAoAGIBOADIAKgBQAmgDAngKQCAggBDhYIAIgMQAdgrANgyQAPg9gIhFIgEgYIgCgKIgShAIgBgEQgQgsgZgqIgBgCIAAgBIgSgaIghg2IgFgIIgGgJ");
	this.shape.setTransform(5.2,80.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#543632").ss(1.5,1,0,3).p("AD8BGIgEgHQgegsgfgWIgMgKQhEguhpgKQgmgEgwALQguAKglAUQgiASgeAxIgEAGIgGAKIgDAGIgGALIgBAD");
	this.shape_1.setTransform(3,40.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.251)").ss(1,1,1).p("AjVAcQBAg4BGgQQA+gOBAATQBQAWBXBE");
	this.shape_2.setTransform(4.1,41);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,33.4,72.6,80.1);


(lib.shape38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AjcAvIAQgdQAKgRALgFIApgBQAZAIAMgDQAHgCAMgPQAMgPAKgDQAUgHATAHQAMADAVAOIARALIATAEQANgBAWgSQAXgTAOgEQAfgGAiAWQAiAXAGAe");
	this.shape.setTransform(1.9,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-3.2,44.3,9.5);


(lib.shape36 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,1).p("Ajdg6IABADQAiBTAzAgQA0AhBiADQBkADA6g0QA5gzgJhcQimCPkThm");
	this.shape.setTransform(0.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AAPBgQhjgDgzghQgzgggihTQESBmCmiPQAKBcg5AzQg3AyhdAAIgKgBg");
	this.shape_1.setTransform(0.2,3.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("ACqgcIAoACIABAAQAZgBAPAGAj6AdQASgeA3AB");
	this.shape_2.setTransform(1,-3.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-6.7,50.2,19.5);


(lib.shape35 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,1).p("AjdhGIABAEQAiBkAzAnQA0AoBiADQBkAEA6g/QA5g9gJhvQimCskTh7");
	this.shape.setTransform(0.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AAPB0QhjgDgzgoQgzgngihkQESB7CmisQAKBvg5A9Qg3A7hdAAIgKAAg");
	this.shape_1.setTransform(0.2,3.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("ACqgiIAoACIABAAQAZAAAPAHAj6AjQASglA3AC");
	this.shape_2.setTransform(1,-5.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-8.7,50.2,23.6);


(lib.shape34 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,1).p("Ajdg6IABADQAiBTAzAgQA0AhBiADQBkADA6g0QA5gzgJhcQimCPkThm");
	this.shape.setTransform(0.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AAPBgQhjgDgzghQgzgggihTQESBmCmiPQAKBcg5AzQg3AyhdAAIgKgBg");
	this.shape_1.setTransform(0.2,3.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("ACqgcIAoACIABAAQAZgBAPAGAj6AdQASgeA3AB");
	this.shape_2.setTransform(1,-3.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-6.7,50.2,19.5);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#742EB4").ss(1.5,1,0,3).p("AjRgXIAUAeQAMAUALAIQAKAIAZAHIAdACIAagGQAQgBAZALIAoATQAZALASgBQAXgBAQgUIAMgQIANgOIAcgIQAggNARgOQANgOAIgaQAIgegTgFIgCAAIgmAMADHhMQAXgJAQABAjtgFQASgnA2AE");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-8.4,47.7,17.1);


(lib.shape30 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.302)").ss(2,1,1).p("Ag5hMQBXA1AcBl");
	this.shape.setTransform(8.2,41.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.302)").ss(2,1,1).p("AAwhVQhCAngdCE");
	this.shape_1.setTransform(-3,42.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543632").ss(2,1,1).p("AgvgRQAgAVA/AO");
	this.shape_2.setTransform(-16.4,50.2);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#543632").ss(2,1,1).p("AglAMQAnAAAkgX");
	this.shape_3.setTransform(24.2,50.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,33.3,49.4,18.8);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2353A").s().p("Aj6ArQAQg4A4gpQBFg0BoADQBmACBLAwQA8AnATBFQh/Ayh3AAQiDAAh8g+g");
	this.shape.setTransform(0.3,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,5.6,50.3,21);


(lib.shape27 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515459").ss(1.5,1,0,3).p("AAvBbIgEgGQgIgHgggFIgiACIgKAEQgGAEgEAFIgGAaIgFAcAgxCRIAYgDIA9ADIAbAIIgBgFIgBgEIgHgmIgHgPAAABEQAhAFAGAFIAIANQALAPADAmAgfBLIACgBQAUgIAFABIAEABIgMjgAgzBYIABgEIAJgFAgzBYQgRARACAl");
	this.shape.setTransform(3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF026").s().p("AAAABIgBgBIACAAIABAAIAAABg");
	this.shape_1.setTransform(5.9,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBEC1").s().p("AAOAYIgFgOQgDgJgEgBQgHgJgQAAQgJAAAAgIQgBgIAJgBQAagCAMANQASASgEASQgBAGgGABIgBAAQgEAAgEgEg");
	this.shape_2.setTransform(5.1,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9FA1A4").s().p("AAjAjIg8gDIgYADIgNgEIAFgbIAFgZQAFgFAGgDIAKgEIACgCQAUgHAFABIAEABQAhAFAGAEIAIANIgFgFQgHgIgggEIgiACIAigCQAgAEAHAIIAFAFIAHAQIAHAkIAAAEIACAFgAgBgeQgJABAAAIQABAIAIAAQAPAAAJAJQAEADADAHIAFAOQADAEAGAAQAFgBACgGQAEgRgSgTQgLgMgYAAIgDABgAA9AiQgEgkgKgQQAKAQAEAkgAgygYIAJgFQgGADgFAFg");
	this.shape_3.setTransform(3,29.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C185F7").s().p("Ag5GNQgogGgmgPQgYgJgXgMQgygdgpgsIgRgVIgBAAQgegngSgpIgKgaQgLglgBglIAAgFQgDhpA5iQIAXg4IANgeQAnhOArgYQAmgUAugKQAvgLApAEQBwALBHA3QAeAYAfAsIAwBOIASAaIAAABIABACQAZAqAQAsIAAABIABADIASBAIACAIIAEAYQAIBHgPA9QgNAygdArIgIAMQhDBYiAAgQgnAKgmADIgKABg");
	this.shape_4.setTransform(5.2,73.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF6DA7").s().p("AAaE7IALgBIgFABgAhbE2IhNgiIgIgGQAWAMAYAJQAmAPAoAGgAkWC9IgHgNIAAAAIASAVgAlVBUIgDgOIAKAagAloggIAUiEIAph5IAUgdIgXA4Qg5CQADBrgAFnhYIACAGIAAAEg");
	this.shape_5.setTransform(4.7,81.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,2.8,73,110.7);


(lib.shape26 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FAFFFF").ss(3,0,0,3).p("ABKg7QgtAQgVANQgbAUgPAOQgLAMgGAUIgNAg");
	this.shape.setTransform(-21.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("Ag2BJQgDgHADgCQAwgfAYgbQASgRAIgPQAJgTgQgOQgDgDABgIIAAgKQAVAPAAAaQAAAWgOASQgeArg/Alg");
	this.shape_1.setTransform(22.8,2.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(220,242,247,0.651)").s().p("AipB3QhkgbgngoQgcgcAAgTQABgUAxgnIAyghQATgMA9gUIBHgVIBwgFIBDACQAkADAdAJQBCAWA1AgQBVA0glAnQggAkgVAOIggARQhbAyhhAMQgXADgaAAQhMAAhhgbg");
	this.shape_2.setTransform(0,2.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0079BC").s().p("AAHBzIgtgGIgjgIQgZgFAGgFIAjAGIAjAEQAaADA5gDIgngDIhKgIQg4gKgQgMIADAAIA8AKIBCAFIAwAAIgmgDIgrgHQgGAAgEgDIA0AGIBHAEIAMADIAGADIhUADIhVgIIgZgFQgLABAMAAIAbAIIA0AHIAwADIArAGIAOAEQhCAFgagEIgfgEIgjgFQgSgBAPAFQAFADAOACIAeAEIA+ADIALACQAAACAFABIgPAAgAgUBEIgggEQgSgBAgAHQgqgGgCgIIArAGIApABIgagHQgagFgDgHIALADIAOAEQAAAFAYAEIALADIASAFQgEABAKABgAgkAkQgQgCAEgCIgHgHQgNgEADgDQgEgEARgCIAeABIAXAEQANABgDgGIgcgDQgiAAgWABIghgKQALgNAKgEQAPgLAfgCIBMAGIAZACIgHgGQhIgUgoAFQgvAGgxAYQgogJABgEIAkglQASgeAXgMQAWgLAkgBQAqgBAxARIBwA0QApAZAGANQgfgHAEgGQgEgJgUgNQgigOgKgIQhUgpg4AQQgoAJgVAZIAHAAQAngCA9ANQBoAbgVAOIg4gJIg8ADQgSAFgKAIIAkABQAhAHAWAKQAOAJgQgBIgegDIgZAAQgTADAMAFIAIAKg");
	this.shape_3.setTransform(2.4,1.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,146,212,0.498)").ss(2,1,0,3).p("AhViMIBwgFIBDACQAkADAdAJQBCAWA1AgQBVA0glAnQggAkgVAOIggARQhbAyhhAMQhdALiBgjQhkgbgngoQgcgcAAgTQABgUAxgnIAyghQATgMA9gUg");
	this.shape_4.setTransform(0,2.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.6,-12.3,67.5,29.3);


(lib.shape25 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AhXgHQAfgUAjgHQBJgQBSARIgKAIQgJAJgDAAIhygEQgkADgZAIQgeAJgNAXQgDAFgMAHIgMAIQAKgdAkgVg");
	this.shape.setTransform(2.8,-6.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FAFFFF").ss(3,0,0,3).p("Ah6gHQArATAdADIBGACQAVgDAfgMIAzgT");
	this.shape_1.setTransform(-8.8,11.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(220,242,247,0.749)").s().p("AiZCIQhDgTg2geQhXgxAkgoQAeglAVgOIAfgTQBag2BfgOQBdgQCDAfQBlAYApAmQAcAaAAAUQABAUgwAoIgxAkQgSAMg8AXIhIAWIhuAKIhDAAg");
	this.shape_2.setTransform(0,1.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,146,212,0.749)").ss(2,1,0,3).p("AFQgRQABAUgwAoIgxAkQgSAMg8AXIhIAWIhuAKIhDAAIhCgKQhDgTg2geQhXgxAkgoQAeglAVgOIAfgTQBag2BfgOQBdgQCDAfQBlAYApAmQAcAaAAAUg");
	this.shape_3.setTransform(0,1.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0079BC").s().p("AibBiIg0gbQglgNgLgKQgbgbAgggQAJgKA4gsQAkgbAWgFQgNAPgIACQgPADgSANIgeAXQgvAlAPAWQALARAfAOIgBgEQgDgUATgZQAqg2AaAJIAAABQgPAUgEAKQgHARANAOIAWAPIAHgTQAMgTAXgLIATAAIgIARQgFAJADAGQAHAKAOgFIAXgGIgKAIQgIAJgEAAQgGgBgKAFQgKAEgFAAQgKAAgDgIQgCgIAEgJIAIgOQADgIgLADIgHAQQgEASAFANIgXARIgggNQgTgLgDgPQgCgUAOgRQAHgJgEgDQgEgDgFAHQgfAhAGAUQAHAWApAfQgRARgFAAIgBAAgABBBYIAigpQAQgZACgXQACgXgEgPQgEAUgGAKIgWAeQghAigXADIAAgBIARgdQAIgQgDgNIgWARQgSAQgOAEIAHgIQAIgIAEAAQAKgDAPgNIAKgHIABgBIAMgLIAJgFQAEASgKARIgNAVQgHAMAYgVQAPgVAGgPQAGgkAIgQIAMgKIALgHQASASgGAvQgEAfgcAhIgQASQAAAGAFgFQgOAQgRADgACVBKIAAgBQAEgHASgTQAQgQADgMQAJgXgMgtIgNAgQgPAogRASQgMANgPAEIALgIQAQgRAIgYIANglQAJgWALgNQACgDAUgNQASA3gIAXQgFALgOAQIgWAaQgHAMAVgHQANgFALgKQAMgJAIgQQATgggIgVQgBgDAMgHIAMgHQAHAVgOAbQgLAVgUARIgkAdQgUANgPAAIgIgBgABgBGIADgBIgBABIgBAAIgBAAgABzA6QgHAIgJADg");
	this.shape_4.setTransform(0.3,1.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.6,-13,67.4,29.4);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6FD0FF").s().p("EgnDAaQMAAAg0eMBOHAAAMAAAA0eg");
	this.shape.setTransform(250,168.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,500,336);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("ABQgJQgUA3g8AYQgvgUgggkQAkgzAggQQALgIA0gIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.9,16,14);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2353A").s().p("AhPAOQAkgzAhgQQAKgIA0gIIAcA9QgVA1g7AZQgvgVgggjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.9,16,14);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQgyQAgALgKAOQgFAHggAQQgeAOgHAJQgLAPAeAP");
	this.shape.setTransform(-0.1,140.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,135.6,8.1,10.4);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQhnQAgAZgKAaQgFAPggAgQgeAdgHATQgLAeAeAf");
	this.shape.setTransform(-0.1,135.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,125.1,8.1,20.9);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQjFQAgAvgKAyQgFAdggA8QgeA6gHAkQgLA5AeA6");
	this.shape.setTransform(-0.1,126);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,106.2,8.1,39.7);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQmEQAgBcgKBiQgFA5ggB2QgeB0gHBGQgLBxAeBx");
	this.shape.setTransform(-0.1,106.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,67.8,8.1,78);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjaDbIAAm1IG1AAIAAG1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-21.9,44,44);


(lib.shape10 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AgPAkQgMgLgEgTQgEgRAIgPQAGgPANgCQAMgDAMALQAMALAEATQAEARgHAPQgHAOgOADIgEABQgJAAgKgJg");
	this.shape.setTransform(24.6,-43.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(1.5,1,1).p("AhEmbIBEgGQCRAABmBmQBmBmAACRQAACqhmBzQgcAfgbAZAhEmbQhlAThNBNQhmBmAACRQAABIAcBPQAcBQAuA2QB1CKB6AFQgKAcgXAaQAoAMAxgUQgSgYgMgXQBVgIBYhOAATFnIgTABIgHAA");
	this.shape_1.setTransform(0,-35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AAlGaQAXgaAKgcQh4gEh1iKQgug2gchRQgchPAAhHQAAiRBmhnQBNhNBjgSQg0AYgtAtQhjBjAACMQAABHAbBKQAbBOAtA0QBzCJB5AAQA8AAA+glQhYBPhVAIQANAXASAYQgfAMgbAAQgRAAgQgFgABOFkIATAAIgTAAIgIAAg");
	this.shape_2.setTransform(-7.8,-35.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.302)").s().p("AAKBWQgigHgcgfQgcgegEgiQgEgkAWgUQAWgUAjAHQAhAHAcAeQAcAfAFAiQAEAkgWAUQgQAPgYAAQgIAAgJgCg");
	this.shape_3.setTransform(14.6,-57.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-77.4,69.9,83.8);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2353A").s().p("AgoGeQAXgaALgcQh6gFh2iKQgug2gchQQgchPAAhIQAAiRBmhmQBNhNBlgTIBEgGQCRAABlBmQBnBmAACRQAACqhnBzQgbAfgcAZQhYBOhVAIQANAXASAYQgeAMgaAAQgRAAgQgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-41.8,69.9,83.8);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.659,1],0,0,0,0,0,17.6).s().p("Ah3B3QgygxAAhGQAAhFAygyQAygyBFAAQBGAAAxAyQAzAyAABFQAABGgzAxQgxAzhGAAQhFAAgygzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,34,34);


(lib.shape2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite62 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape63("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape57("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite53 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape54("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound55");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
     //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    this.parent.parent.GameWon = true;
    this.parent.parent.removeAllEventListeners("tick");
    this.parent.parent.gameOver = true;
   } // end if	
	}
	this.frame_8 = function() {
		playSound("sound59");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
     this["puff" + i] = new lib.sprite1Puff(); //attachMovie("Puff", "puff" + i, i);
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
        evt.currentTarget.x = evt.currentTarget.x + this.velX;
        evt.currentTarget.y = evt.currentTarget.y + this.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step;
        if (evt.currentTarget.scaleX <= 0)
        {
            evt.remove();
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
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
	this.instance = new lib.sprite53();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite56();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape58("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
   this.score = function ()
   {
     this.gotoAndStop(this.currentFrame + 1);
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
	this.star3 = new lib.sprite52();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(4));

	// Layer 2
	this.star2 = new lib.sprite52();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(4));

	// Layer 1
	this.star1 = new lib.sprite52();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3).call(this.frame4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,109.5,30.1);


(lib.sprite49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape50("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-9.5,33.5,21.9);


(lib.sprite47 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape48("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-3.9,30.3,18.7);


(lib.sprite45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape46("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-30.9,27.4,39.1);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape44("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,-37.5,28.2,45.2);


(lib.sprite40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#543632").ss(1.5,1,0,3).p("ABoijIAaAPIAaAbIATAfIAFAKIANAnQAFAWACATABmikIABABIABAAAAXiLQAMgRAOgIQAPgIASADQABgBAAABIALADIAIACAADhcQAFgSAIgRIAHgMAABhSIACgKIAAAAACqB9QAXgXAFgtQAEgegCgbABECeIgDgBAAABjQARAuAwAMABGCeIgCAAAClCFIgBAAIAAABIgBAAQgDAIgHAEQgOAKgWADQgYAEgXgFACqB9QgCAFgDADAhEifQAOAKAPARQAlApACAlQAAgOABgOAhNikIAJAFAhxinIACgBQAQgEASAIAhxinQgWAGgSAXAibiHIAAgBIAAAAIACgCIAAAAAibiHQgJAMgFATAi7guQgBgNAEgMQAFgTAKgOAjDgSQABgEABgEAi+glIACgIQAAgBABAAAAAg2IAAALAAABjIgFgRAgbCEQgKAOgOAJQgEADgFgBAhDCiQgVALgXgEQgFADgEgBIgBgBAiNClQgXgLgPgaQgOgYgFgiAjHA3IgBgCQAAgEABgEQgCgaAEgZAjHA3IABAPAiNClIAUAFAhDCiQADgCAEgDAgbCEQAPgUAFgf");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjAWQgHgJAAgMQAAgJAHgJQAHgJAJAAQAKAAAGAJQAHAJgBAJQABAMgHAJQgGAJgKAAQgJAAgHgJgABEASQgGgIgBgKQABgMAGgKQAHgIAJAAQAKAAAGAIQAGAKAAAMQAAAKgGAIQgGAJgKAAQgJAAgHgJg");
	this.shape_1.setTransform(-0.1,-9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF7BE").s().p("AiNCnIAUAFIgOABgABCCgIgBgBIADABgAjGBHIgBgOIABAPgADBgnIgNgnQAHAOADACQAEADAGA2IAAAHQgCgTgFgWgAgniCQgPgRgOgKIAcASIApA7QgBAOAAAOQgCglglgpgACch3IAJAIIAKAXgAAXiKQABgGASgNIAHgFQgOAIgMARgABoihIARAGIAJAJgABeikIABAAIAHACgABAirIASAEQgSgDgPAIQAKgHAFgCgAhvimIgCABIAMgHQADgBAVALQgSgIgQAEg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNClIgggjQgTg0gFgIIgCgOIABgKIAAgOQADgigCgDQAAgDACgKIACgIIADgKIACgIQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAKgiAAgEIAIgUIADgIIALgXIABAAIAAgBIACgBIAAgBIAngdIADAAQAPgEASAIIAJAFQAOAJAQASQAkAoACAlQAAgOABgOIACgJIAAgBQATgkACgKQALgSAPgHQAOgIASACIABAAIALADIAIADIABAAIACABIAaAOIAZAbIAUAfIAEALIAOAnQAFAVABAUQgEA8gCAEQgQAwgIANQgCAFgDADIgBAAIAAAAIgBAAIgiAUIg7AFIgBAAIgEgBIgpgiIgYgZIgFgRIAFARIgDgEIgRAfIgHAHQAPgVAFgeQgFAegPAVIghAZIgHAFIAHgFIgFAEIgCABQgVAKgXgEIgKACgAAAgqIAAgMgAhkhxQgHAJAAAMQAAAMAHAIQAGAJAJAAQAKAAAGgJQAHgIAAgMQAAgMgHgJQgGgJgKAAQgJAAgGAJgABCh1QgGAJAAAMQAAAMAGAIQAHAJAJAAQAKAAAGgJQAHgIAAgMQAAgMgHgJQgGgJgKAAQgJAAgHAJgAClCGIAAAAgACqB+QgBAFgBAAIgDADQADgDACgFgACqB+IAAAAg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#543632").ss(1.5,1,0,3).p("ABnikIABABIACAAIAaAPIAaAbIATAfIAFAKIANAnQAFAWABATQACAbgDAeQgGAtgXAXQgCAFgDADIAAAAIgBAAIAAABIAAAAQgDAIgIAEQgNAKgWADQgYAEgYgFIgBAAIgDgBQgwgMgTguIgDgRAgaCEQgKAOgOAJQgDADgFgBAhCCiQgUALgYgEQgFADgEgBIgBgBAiLClQgYgLgPgaQgNgYgFgiAjGA3IAAgBQgBABgCABAAZiLQALgRAPgIQAOgIASADQABgBAAABIAHACIADAAIABABIAIACAAEhcQAFgSAJgRIAHgMAAChSIACgKIAAAAAhMikIAJAFQAOAKAQARQAlApAAAlQAAgOACgOAiaiHIABgBIAAAAIACgCIAAAAQARgXAWgGIADgBQAPgEASAIAiohoQgJAOgGATQgEAMABANQgBAAABABIgDAIAiaiHQgJAMgFATAjGA2QBZhDBtARQBmgbBiAwAjBgYQgBAFgBADAjGA2IAAgBQgBgEACgEQgCgaAEgZAjGA2IAAAAAjGA3IACAPAiLClIATAFAhCCiQAEgCAEgDAgaCEQAQgUAEgfAAAgrIAAgL");
	this.shape_4.setTransform(0,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C68FF8").s().p("AiNCnIAUAFIgOABgAiNCnIgggjQgUg0gFgIIgBgPIAAgBIAAAAIAAgJIABgNQADgigCgEQAAgCABgIIACgIIAEgNIACgIQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAKgjAAgEIAIgTIADgIIALgXIAAgBIAAAAIACgCIAAAAIAogdIACgBIABAAIAAAAIABAAIAJgBIAAAAIABAAQAJAAAJAEIACAAIABABIABAAIAJAFIAcASIApA7IACgKIAAAAQASgkACgLIAAgBQABgGASgNIAHgFIABgBQALgFAMAAIAAAAIABAAIAIABIAIACIACAAIACABIAIACIABABIABAAIARAGIAJAJIAaAbIAJAIIAKAXIAFAKQAHAOADACQAEADAGA2IAAAHQgCgTgFgWIgNgnIANAnQAFAWACATIgCAZIgCgBIgBgBQg7gcg+AAIAAAAIgBAAQgkAAglAIIAAABIgDgBQgXgDgVAAIgBAAIAAAAQhSAAhFA2QBFg2BSAAIAAAAIABAAQAVAAAXADIADABIAAgBQAlgIAkAAIABAAIAAAAQA+AAA7AcIABABIACABQgDAlgBADQgQAwgIAMQgCAFgDADIgBAAIAAAAIAAABIgBAAIgiAUIg7AEIgCAAIgDgBIgqgiIgXgYIgFgRIAFARIgDgEIgRAfIgHAGQAPgUAFgfQgFAfgPAUIghAZIgHAFQgVALgXgEIgKABgAAAgpIAAgLgAAAg0IAAgFQAAgMABgLQgBALAAAMIAAAFQgCglglgpQgPgRgOgKQAOAKAPARQAlApACAlIAAAAgACvhYIgTgfgAAXiJQAMgRAOgIQgOAIgMARgACCiSIgagPgAiNCngAg8CfIgGAFIgBAAIAHgFgABCCgIgBgBIADABgAg8CfgAClCHIAAAAgACqB/QgBAFgBABIgDACQADgDACgFgACqB/IAAAAgAjGBHIgBgOIABAPgAjHA5gABeikIABAAIAHACgABAirIASAEIgIgBIgBAAIAAAAQgMAAgLAFIgBABQAKgHAFgCgAhOiiIgBgBIgCAAQgJgEgJAAIgBAAIAAAAIgJABIgBAAIAAAAIgBAAIgCABIAMgHQADgBAVALIgBAAg");
	this.shape_5.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(5));

	this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-17.3,40.2,34.7);


(lib.sprite31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{happy:1,sad:19});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound33");
	}
	this.frame_18 = function(){this.gotoAndStop(0)}
	this.frame_19 = function() {
		playSound("sound37");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(1).call(this.frame_19).wait(15));

	// Layer 2
	this.instance = new lib.shape34("synched",0);

	this.instance_1 = new lib.shape35("synched",0);

	this.instance_2 = new lib.shape36("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},15).to({state:[]},2).wait(16));

	// Layer 1
	this.instance_3 = new lib.shape32("synched",0);

	this.instance_4 = new lib.shape38("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},1).to({state:[{t:this.instance_4}]},18).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-8.4,47.7,17.1);


(lib.sprite28 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape29("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,5.6,50.3,21);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape25("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape26("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-13,67.4,29.4);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape20("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.9,16,14);


(lib.sprite18BalloonPiece = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape21("synched",0);

	// Layer 1
	this.shape = new lib.sprite19();

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.9,16,14);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape12("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-21.9,44,44);


(lib.sprite8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-41.8,69.9,83.8);


(lib.sprite6Balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){
   this.stop ();
   var x1 = 0;
   var y1 = 70;
   var x2 = 0;
   var y2 = 140;
   var i = 2;
   var step = 1.500000E-001;
   var mag = Math.random() * 10 + 10;
   this.balloonColor = this.parent.parent.balloonColors[Math.floor(Math.random() * this.parent.parent.balloonColors.length)];
   //setBalloonColor = new Color(shape);
   //setBalloonColor.setRGB(balloonColor);
   this.shape.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.balloonColor.red, this.balloonColor.green, this.balloonColor.blue, 0)];
   this.shape.cache(-34.9,-41.8,69.9,83.8);   
   
   this.string.on("tick",  function (evt)
   {
    evt.currentTarget.shape.graphics.clear();
    evt.currentTarget.shape.graphics.beginStroke("rgb(255, 255, 255)").setStrokeStyle(1.500000E+000);
    evt.currentTarget.shape.graphics.moveTo(0, 0);
    evt.currentTarget.shape.graphics.curveTo(x1, y1, x2, y2);
    i = i + step;
    x1 = mag * Math.sin(i);
    x2 = mag * Math.sin(i - 2);
   });	
	}
	this.frame_1 = function() {
		playSound("sound13");
    for (var i = 1; i <= 20; i++)
    {
    this["piece" + i] = new lib.sprite18BalloonPiece(); //attachMovie("BalloonPiece", "piece" + i, i);
    this.addChild(this["piece" + i]);
    
    //setColor = new Color(piece.shape);
    //setColor.setRGB(balloonColor);
    this["piece" + i].shape.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.balloonColor.red, this.balloonColor.green, this.balloonColor.blue, 0)];
    this["piece" + i].shape.cache(-7.9,-6.9,16,14);      
    
    this["piece" + i].x = Math.random() * 60 - 30;
    this["piece" + i].y = -Math.random() * 60;
    this["piece" + i].rotation = Math.random() * 360;
    this["piece" + i].scaleX = this["piece" + i].scaleY = (Math.random() * 50 + 100)/100;
    this["piece" + i].velX = this["piece" + i].x / 2;
    this["piece" + i].velY = (30 + this["piece" + i].y) / 2;
    this["piece" + i].on("tick", function (evt)
    {
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        if (evt.currentTarget.scaleX <= 0.05)
        {
            evt.remove();
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        }
        else
        {
            evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - 0.3;
        } // end else if
    });
    } // end of for
    if (this.balloonColor != this.parent.parent.hatColor)
    {
     this.parent.parent.starPoints.lose();
     this.parent.parent.balloonMaxWait = 48;
     this.parent.parent._char.mouth.gotoAndPlay("sad");
    }
    else
    {
     this.parent.parent.starPoints.score();
     this.parent.parent.colorHat();
     this.parent.parent._char.mouth.gotoAndPlay("happy");
    } // end else if		
		
	}

  this.frame_5 = function(){
   this.stop ();
   this.parent.removeChild(this);
   this.removeAllEventListeners("tick");
   delete this;  
  }

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5));

	// Layer 4
	this.hit = new cjs.Shape(); //lib.sprite11();this.hit.setTransform(0,-39.9,1.114,1.239);
	this.hit.graphics.f("#FFFFFF").drawRect(-49/2, -40-54.50/2, 49, 54.50);
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get(this.hit).to({_off:true},1).wait(5));

	// Layer 3
	this.instance = new lib.shape10("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5));

	// Layer 2
	this.shape = new lib.sprite8();
	this.shape.setTransform(0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(5));

	// Layer 1
	
	this.string = new lib.sprite7();
	
	this.instance_1 = new lib.shape14("synched",0);

	this.instance_2 = new lib.shape15("synched",0);

	this.instance_3 = new lib.shape16("synched",0);

	this.instance_4 = new lib.shape17("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.string}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-77.4,69.9,83.8);


(lib.sprite3Ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape4("synched",0); 

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,34,34);


(lib.sprite1Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 12
	this.l2 = new lib.sprite49();
	this.l2.setTransform(26.3,102.5);

	// Layer 11
	this.l1 = new lib.sprite47();
	this.l1.setTransform(-15.9,103.4);

	// Layer 10
	this.a2 = new lib.sprite45();
	this.a2.setTransform(37.9,72.2);

	// Layer 9
	this.a1 = new lib.sprite43();
	this.a1.setTransform(-28.8,75.9);

	// Layer 8
	this.eyes = new lib.sprite40();
	this.eyes.setTransform(4.2,60.6,1.02,0.961);

	// Layer 7
	this.instance = new lib.shape39("synched",0);

	// Layer 6
	this.mouth = new lib.sprite31();
	this.mouth.setTransform(4.7,86);

	// Layer 5
	this.instance_1 = new lib.shape30("synched",0);

	// Layer 4
	this.hat = new lib.sprite28();
	this.hat.setTransform(2.8,27.9);

	// Layer 3
	this.instance_2 = new lib.shape27("synched",0);

	// Layer 2
	this.instance_3 = new lib.sprite24();
	this.instance_3.setTransform(0.2,-0.4,1,0.734);

	// Layer 1
	this.hit = new lib.sprite11();
	this.hit.setTransform(0,0,1.364,0.364);
	this.hit.alpha = 0;

	this.addChild(this.hit,this.instance_3,this.instance_2,this.hat,this.instance_1,this.mouth,this.instance,this.eyes,this.a1,this.a2,this.l1,this.l2);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-10,95.6,128.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;