(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.FlyTrap = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
  var self = _root = this; 
  var snd;
	// timeline functions:
	this.frame_0 = function() {
		snd = playSound("sound10",-1);
    this.updateScore = function ()
    {
      this.mouth.gotoAndPlay(2);
      ++score;
      if (score >= numFlies)
      {
        snd.stop(); //stopAllSounds ();
        //GameEndClip.gotoAndPlay("GameWonPlayground");
        this.GameWon = true;
        this.removeAllEventListeners("tick"); //delete onEnterFrame;
        this.mouth.gotoAndPlay(2);
    } // end if
   } // End of the function
   function spring(clip, targetX, targetY, velX, velY, k, damp)
   {
    clip.vx = velX;
    clip.vy = velY;
    clip.removeAllEventListeners("tick");
    clip.on("tick",  function ()
    {
        if (clip == self.tip && (self.extend || self.retract))
        {
            drawLine();
        } // end if
        clip.ax = (targetX - clip.x) * k;
        clip.ay = (targetY - clip.y) * k;
        clip.vx = clip.vx + clip.ax;
        clip.vy = clip.vy + clip.ay;
        clip.vx = clip.vx * damp;
        clip.vy = clip.vy * damp;
        clip.x = clip.x + clip.vx;
        clip.y = clip.y + clip.vy;
        if (clip.vy > 0 && self.extend == true)
        {
            chooseBase();
            self.extend = false;
            self.retract = true;
        } // end if
        if (clip.vy < 0 && self.retract == true)
        {
            self.mouth.gotoAndStop(0);
            self.extend = false;
            self.retract = false;
        } // end if
    });
    
   } // End of the function
   function chooseTarget()
   {
    if (self.retract == false && self.extend == false)
    {
        self.mouth.gotoAndStop(1);
        self.extend = true;
        self.retract = false;
        velX = Math.random() * 200 - 100;
        spring(self.tip, stage.mouseX/ratio, stage.mouseY/ratio, velX, 0, 3.000000E-001, 5.000000E-001);
        spring(self.joint, (stage.mouseX/ratio + self.base.x) / 2, (stage.mouseY/ratio + self.base.y) / 2, 0, 0, 3.000000E-001, 5.000000E-001);
    } // end if
   } // End of the function
   function chooseBase()
   {
    spring(self.tip, self.base.x, self.base.y, 0, 0, 3.000000E-001, 5.000000E-001);
    spring(self.joint, self.base.x, self.base.y, velX, 0, 3.000000E-001, 5.000000E-001);
   } // End of the function
   function drawLine()
   {
    var distanceX = self.tip.x - self.base.x;
    var distanceY = self.tip.y - self.base.y;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    var lineWidth = 20 - distance / 30;
    self.tongue.graphics.clear();
    self.tongue.graphics.beginStroke("rgb(204, 0, 0)").setStrokeStyle(lineWidth);   //lineStyle(lineWidth, 13369344);
    self.tongue.graphics.moveTo(self.base.x, self.base.y);
    self.tongue.graphics.curveTo(self.joint.x, self.joint.y, self.tip.x, self.tip.y).setStrokeStyle(lineWidth/2).drawCircle(self.tip.x, self.tip.y, lineWidth/4);
    self.outline.graphics.clear();
    self.outline.graphics.beginStroke("rgb(119, 0, 0)").setStrokeStyle(lineWidth + 4); //lineStyle(lineWidth + 4, 7798784);
    self.outline.graphics.moveTo(self.base.x, self.base.y);
    self.outline.graphics.curveTo(self.joint.x, self.joint.y, self.tip.x, self.tip.y).setStrokeStyle(lineWidth/2 + 2).drawCircle(self.tip.x, self.tip.y, lineWidth/4 + 1);
   } // End of the function
   this.stop ();
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;
   var targetX = 0;
   var targetY = 0;
   var numFlies = 20;
   var score = 0;
   this.extend = false;
   this.retract = false;
   this.mouth.gotoAndStop(0);
   this.targetArea.cursor = "";
   this.targetArea.on("mousedown", chooseTarget);

   for (var i = 1; i <= numFlies; i++)
   {
    this.files["fly" + i] = new lib.sprite2Fly(); // flies.attachMovie("Fly", "fly" + i, i);
    this.files.addChild(this.files["fly" + i]);
    this.files["fly" + i].x = Math.random() * 500;
    this.files["fly" + i].y = Math.random() * 150;
   } // end of for		
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Layer 13
	this.instance = new lib.sprite40();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

	// Layer 12
	this.instance_1 = new lib.shape39("synched",0);
	this.instance_1.setTransform(451.2,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(1));

	// Mask Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADWpQgmh7gJgFQgegNhHgNQg2gKgogcQg5gohaheQg6g7g1gGQgZgCgOARQgQATAKAiQAEASAzAqQAsCEATAhIA1BiMgjXAAAMAAAgtSMBSVAAAMAAAAtSg");
	mask.setTransform(248.5,127);

	// Masked Layer 10 - 4
  this.files = new lib.sprite35();
  this.files.mask = mask;
  
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.files}]}).wait(1));
  
	// Masked Layer 9 - 4
  this.tongue = new cjs.Shape();
  this.tongue.mask = mask;
  
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tongue}]}).wait(1));

	// Masked Layer 8 - 4
	this.tip = new lib.sprite36();
	this.tip.setTransform(226.3,267);

	this.tip.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tip}]}).wait(1));
 

	// Masked Layer 7 - 4
	this.joint = new lib.sprite36();
	this.joint.setTransform(226.3,267);

	this.joint.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.joint}]}).wait(1));

	// Masked Layer 6 - 4
	this.base = new lib.sprite36();
	this.base.setTransform(226.3,267);

	this.base.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).wait(1));

	// Masked Layer 5 - 4
	this.outline = new cjs.Shape();
	this.outline.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.outline}]}).wait(1));


	// Layer 3
	this.mouth = new lib.sprite19();
	this.mouth.setTransform(233,281.7,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth}]}).wait(1));

	// Layer 2
	this.targetArea = new lib.sprite17();
	this.targetArea.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.targetArea}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite11();
	this.instance_2.setTransform(250,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-1.9,628.3,362.2);


// symbols:
(lib.image12 = function() {
	this.initialize(img.image12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.image38 = function() {
	this.initialize(img.image38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite42 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite35 = function() {
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


(lib.shape37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0)").s().p("Ag0A1QgWgXABgeQgBgdAWgXQAXgWAdABQAegBAXAWQAWAXgBAdQABAegWAXQgXAWgegBQgdABgXgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,15,15);


(lib.shape32 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBRQgZgIgJgdQgKgdALggQALgiAYgSQAXgSAYAHQAZAIAJAdQAKAdgLAgQgLAigYASQgSANgPAAQgHAAgHgCg");
	this.shape.setTransform(24.9,-168.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AkBkVIB8AGQBEAOAuAcQApAaBOAjQBPAkArAAQArAABSg2QBRg1AkgBQAjgBA2AtQA2AsAAAyQAABIgzAxQgwAvhBAEQghACgdAWQgcAVgNAgQgLApgLAYQgUAuggAAQgkAAg5ggQg6ggguAAQgbAAg5AqQg8AqgmAFQgmAFgkgoIh3iBQgZgbgogJIg8gFQhWAJgYgLIgugSIAEAAIBNgLIBDgQQAYgFAVgTIAtguQAagcASgpQARgpAHgcQAIgcAEgWIAKguIABgEIgBAEIABAFQABACAAgLIgBAAIAAgCIAAAAIABgEgApLA6IgTAB");
	this.shape_1.setTransform(9.2,-107.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjED1Ih3iBQgZgbgpgIIg7gFQhWAIgYgLIgvgSIAFAAIBNgLIBDgPQAYgFAVgUIAtgtQAZgdATgpQARgpAHgbQAHgcAFgXIAKgtIAAgBIABAFQABADAAgMIB8AGQBEAOAuAcQApAaBOAkQBPAjArAAQArAABRg1QBSg2AjgBQAkgBA1AtQA2AtAAAxQAABJgyAwQgwAvhCAFQggACgdAVQgcAVgNAgQgLAqgMAYQgTAtghAAQgjAAg6ggQg5ggguAAQgbAAg5AqQg9AqgmAFIgIABQghAAgggkg");
	this.shape_2.setTransform(10.2,-107.1);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#105013").s().p("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");
	this.shape_3.setTransform(2.2,-119.3);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBNQgYgKgGgeQgGgeAPgeQAOghAagPQAZgQAXALQAYAKAGAeQAGAegPAfQgOAggbAPQgOAJgOAAQgKAAgJgEg");
	this.shape_4.setTransform(17.4,-188.1);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B8F32").s().p("Al/MRIgZglIgagkIgngyIg/hRIgtg+IgRgdIgEgOQABgFgDgIQgCgJgMgWQgTgkgOgnQgOgngJglIgThAIgLgfIgJgUIgOgWIgYglQgUgfgXgSIgoggQgTgMgIgOQgFgMAJgRQAIgSAQgRIAhgfIAFgDQAhAJAeAOQAhAQAeAYQAeAYAdAfQAQASAVALQAUALAWAGIBDAJIBDADIA9AKQAbAHAVARQAYAUAYAaIAxA0QAYAaAdAXQAdAWAlANIAZAEIAegEQAOgFAMgGIAngYIAmgZIAkgVQAQgIAOgCIAFgBQAOAAAVAJQAQAGASAJIAkATQASAKASAGQASAGATABIAWgEQAMgFAIgIQAQgRAKgQIAPgeIAGgVIAFgTQABgOAFgIIAHgNQAEgHAIgFIAVgMQAOgGAVgGIAqgLQAggHAhgUQAfgVAhgsQAUgeAJgcQAJgcAAgbQAAgYgGgUQgGgWgKgSQgQgcgUgVQgVgVgVgQQgXgQgSgHIgSgHIgRgEIgQAAQgnAAgdALQgVAHgQALIgeAVIgbATQgNAJgQAFQgjAKgcAAQgngBgkgOQgcgKgcgPIg8gfIhCgfQghgPgogIIhCgKIg6gDIhNgEIgxgHQgWgGgTgLQgUgLgTgUQgSgUgSgfQgPgagQgVIgagdQgOgMgSgJQgigSgxgGIgmgHQAMgFAMgKQARgRAQgWIAkgnQASgQAWgBIAKABIAWADQAVAAASgJIAkgTIAkgUQASgHATgBIBlgEQgPAugBAzQAAAwAUAxQAKAWAQARQARARATANQATAMAWAJQAVAJAVAEIA1AEIAwgEQAagDAYgIQAZgIAVgOIAIgEIADAKQAHAXALATQAKASASANQARANAVAEIAtAEIA6gEQAdgFAbgHQAbgIAUgJQAVgJAMgIQArgeApgiQApghAmgmQAlgoAggrQAaglAVgpIAWAPQAPAKAFACIAKAKIANAZIAMAZIAIAQIAIAbIAHApIAFAhIAGAgIAGAmIAFAbQACAHgBAQIgEAlIgFAmIgEAbIgFAZIgIAjIgJAiIgBAEIgMABQgOABgJAHQgJAJADAZQAEAZgCAKQgCAKADAEIALAIIgHAbIgIAZIgHAXIgNAhIgNAjIgMAYIgLAWIgXAOQgbAUgVAYIgfAkIgfAnQgOATgEAVQgDAOgFAFIgKAIQgEACgBAHQgCAHAFAQQAEASgIAJIgRASQgJAHABAIQABAIAVAMIAPAIIgFAMIgOAaIgKAUIgKAdIgIAaIgEALIgHARIgSAmIgQAjIACgLQAGgeAFgOIAJgVQADgFgDgGIgNgNIgRgSIgGgHIgNgGIgbgCIgYAIQgKACgIAIQgIAIgIAZQgHASgFAGIgIALQgCACAAAGIAFAWQADAQgFALIgHAQQgDAGAHADIAgACIAgADIANAHIAGAEIAFgDIANgLQAMgLAFABIABAAIgCACQgFAIgCAPIgCAdQAAAPACAEQACACAFAAIAFgBIgGALQgDAHACAHQnfg6lhCYg");
	this.shape_5.setTransform(3,-102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghFMQgQgEgJgGQgKgIgHgMQgMgUgGgfQgEgUgBgWQgWgCgTgHIACAWIgXATQgQAKgVAHIgrAKIgsADIgtgEIgkgKQgSgHgQgKIgbgXQgMgNgHgQQgJgVgEgWIgCgMIgCgaQABgsAOguQAPgrAWgqQAVgpAcggQAbghAggbQAhgbAmgXQAmgXAqgUIAjgOIAmgNIApgJIAlgEIAnAFQAJADAJAIIAQAPIANATQAMAWAAASIAAACQgbARgXAWIgoAoIAeAbIAkglQAfgbAigUQAigVAlgLQAlgLAmAAQAngBAoAPQAyASAZArQAMAUAGAYQAGAYAAAaQAAAXgFAYQgFAYgKAWQgVArgdApQgdApgjAlQgkAkgoAhQgoAggqAeQgHAEgSAIIgfAMIglAKIgoAGIgmADg");
	this.shape_6.setTransform(29.7,-182.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E9D37").s().p("AmhNEIgCgDIgHgIQgogbgogmQgogmghgsQgtg9ghhDQgihCgdhIIgTgzIgVg7IgUg8IgYhJIgJgWIgBgIIgCgEQgSgagUgMQgPgIgNgEIgQgGIgNgHIgKgLIgLgUQgNgfgBgbQABghAPgSIASgOIAbgFIADAAIBWAKIAJADIgFADIghAeQgQARgIASQgJAPAFANQAIAPASANIApAfQAXASAUAgIAXAlIAPAVIAJAUIALAgIASBAQAKAkAOAnQAOAnATAlQALAVADAJQADAJgBAFIAEANIARAdIAtA+IA/BRIAnAzIAaAkIAZAlIAFAIQgXAJgWALgAHKK4QgCgEgBgPIACgdQADgPAFgHIACgDIAFACIACACIADgIIAEgXIARgjIASgmIAHgRIADgLIAJgaIAKgdIAKgTIAOgaIAFgNIAOAGIASADQAMAAAIgFQAIgFAMAAIAJgDIgPAbIgPAbIgGAIIgnBCIgpBFIghA7IgaAuIgKASIgGAAQgEAAgCgCgAMlBaQgBgagFgKQgGgLgKABIgRAEIgeAOIAMgVIAMgbIANghIANghIAHgWIAHgaIAIgaIAHADQAUAJAMAAQAIAAAIgFIAQgRIAQgWIAGgRIABgVQAAgOgGgJIgNgNIgMgEIgbAHIgJACIABgEIAJgiIAIgiIAFgZIADgbIAGgnIADglQACgQgCgGIgFgbIgGgnIgGggIgFghIgHgoIgIgbIgJgRIgLgZIgNgYIgKgLQgGgCgPgKIgVgPIAGgPIAJgXIAaAOIAcAZIAaAdIAXAdQATAcAPAbQAPAbAJAgQALAjAGAmQAGAnAAAmQgBApgGAnQgNBngaBjQgaBigjBgIgHARIgdA3gAqHpjQgfgOgKgTQgMgSABgUQABgXAIgTIAGgNIADgCIAAAAIACgBIAYgHIAmgKIBGgRIBMgSIBFgMIAfgEIAHAAIAKgBIABAAIAMABIAygFIAmgIIAmgJIAdgGIgYA+IgBAFIhlAEQgTABgTAIIgjATIgkATQgSAJgVAAIgWgDIgKgBQgWABgTARIgjAmQgRAWgRARQgLALgMAEg");
	this.shape_7.setTransform(2.2,-104.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14651E").s().p("AjEG3IgNgHIghgEIgggCQgGgDADgGIAHgQQAEgLgDgQIgEgWQgBgGADgCIAHgKQAFgHAHgSQAJgYAIgJQAIgIAJgCIAYgHIAbACIAOAFIAFAHIARASIANAOQADAFgDAGIgIAUQgGAPgGAdIgCALIgEAXIgDAIIgDgCIgEgCIgBAAQgGgBgMALIgMALIgGADgAgiC3IgNgGIgPgHQgWgNgBgIQAAgHAJgIIARgRQAIgKgEgRQgFgRABgHQABgGAFgDIAKgIQAFgFADgOQADgUAOgSIAdgmIAggkQAUgZAbgTIAXgPIAegOIARgEQAKgBAGALQAFAKAAAaIgBAeIgBACIguBRIg4BgIgtBNIgJADQgMAAgIAFQgGAFgMAAgADAlIIgHgDIgMgIQgCgEABgLQACgKgDgZQgEgZAKgIQAJgIANgBIANgBIAJgCIAbgHIAMAEIANANQAGAJAAAOIgBAVIgHARIgPAWIgQARQgIAFgIAAQgMAAgUgJg");
	this.shape_8.setTransform(64.5,-83.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7FC31C").s().p("AgxM7IACgBIAFAGIADADIADAFgAAgtGIAOgBIAEAAIgLABg");
	this.shape_9.setTransform(-38.2,-101.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.4,-219.9,197.4,202.6);


(lib.shape31 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111D0D").s().p("AgfAmQgCAAgCgIIgBgIIACgLQADgKAJgGIAQgRIAPgNIARgEIAFABIAEADIACAIIgBAJIgFALIgGAKIgIAJIgJAJIgKAKQgHAFgHABIgKADQgDgBgCgBg");
	this.shape.setTransform(14.8,-196.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13150C").s().p("Ag1BDQgMgKgFgQIgCgTQAAgOAEgJIAMgTIAMgQIAMgLQANgOAPgGQANgIARAAIAUAEQALAFAHAKQAKAOgBAPIgDAUIgHAOQgIAQgKALIgVAUQgNAKgOAHQgLAFgMAAIgBAAQgNAAgNgJgAAJgjIgPANIgQARQgJAGgDAKIgCALIABAIQACAIACAAQACABADABIAKgDQAHgCAHgEIAKgKIAJgJIAIgKIAGgJIAFgLIABgJIgCgIIgEgDIgFgBg");
	this.shape_1.setTransform(14.8,-196.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10190D").s().p("AgjA1IgFgDIgDgKIAAgGQAAgKADgLIAJgTIAMgSIAMgPQAFgGAIgEIASgFIALAEIAHAKIACAMIgEATIgJAUIgNASIgOANIgQAJIgRAEg");
	this.shape_2.setTransform(48.2,-189);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#13150C").s().p("Ag2BUQgNgHgGgNQgEgKgCgLIAAgJQAAgQAEgPQAFgNAHgMIAPgYIAPgSQALgMAPgGQANgIASAAQAPAAAPAJIANAMIAIAQQAFAMAAANQAAAQgFAMIgNAdQgQAbgWAPQgMAJgMAEQgOAGgPABQgNAAgMgHgAAGgxQgIAEgFAGIgMAPIgMASIgJATQgDALAAAKIAAAGIADAKIAFADIAGACIARgEIAQgJIAOgNIANgSIAJgUIAEgTIgCgMIgHgKIgLgEg");
	this.shape_3.setTransform(48.2,-189);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B8F32").s().p("AmSMIIgDgFIgjgvIg6hLIhChVIg7hPIgIgUIgZg7IgOgnIgOgxIgUhSIgShOIgLg6IgEgRIgBgGIgCgGIgDgIIgGgmIgEgwIgEg+IgFhoIgIhtQgEg1gJgvQgHgugOgjIgDgGIgGgEQgRgJgGgMQgHgKAAgOQAAgLAFgMQAFgMAJgKIAUgPIAVgFIANACIATASQAZAWAgAWIA6AlIAUAOIA9AnQAhASAuAXIBwA0QBBAeBGAbIBFAaIBDAWIA+AQIA0AJIAgABIBkgIQAygIAvgNIBWgYQAmgLAVgIQA9gVAzgZIBHgmIASgMQAogYAagaQAcgYANgXQAEgIgCgHQgBgHgGgDIgHgIIgKgDQgKAAgHAJIgUAXIgdAWIggAUIgfASIg1AfIgqAWIgTAJIg+AdQgeANgbAHQg/AWg8ALQg8AMg9AAIhkgJQg1gJg6gVIhkgmQg6gXhBgdQhBgdhBghQgwgXgsgZIgegRIgpgfIhSg9IgBAAIAGgEIAMgHIAggHIBDgFIBJgHIBIgKIAngHIAXgEIARgEIAVgGIASgGIAJgGIAMgHIAcgPIAIgEIAugWIgCAnQgBAwAVAxQAKAVAQASQAQARAUANQATAMAVAJQAWAIAVAFIA1AEIAwgEQAagDAYgIQAYgIAVgOIAJgFIACALQAHAXALASQALATARANQARANAVAEIAtAEIA6gEQAegFAagIQAbgHAUgKQAVgIAMgJQArgeApghQAqgiAlgmQAmgnAfgrQAbglAUgpIAWAPQAPAJAGACIAKALIAMAYIAMAZIAJARIAHAbIAHAoIAGAhIAFAhIAGAmIAGAbQACAGgCARIgEAlIgFAmIgDAbIgFAZIgIAjIgJAiIgBAEIgNABQgNAAgJAIQgKAIAEAZQADAagCAKQgBAKACAEIAMAIIgIAbIgHAZIgIAWIgMAiIgOAjIgLAYIgMAWIgXAOQgbATgUAZIggAkIgfAnQgOATgDAUQgDAPgFAFIgKAIQgFACgBAHQgBAGAFARQAEARgIAKIgRASQgJAHAAAIQABAIAWAMIAPAIIgGAMIgNAaIgKAUIgLAcIgIAaIgDALIgIARIgRAnIgRAjIACgMQAGgdAGgOIAIgVQADgGgDgFIgNgOIgRgSIgFgHIgOgFIgbgCIgYAIQgJACgIAIQgIAIgJAYQgHASgFAHIgHAKQgDADABAGIAEAVQADARgEAKIgHARQgDAGAGACIAgACIAhAEIANAHIAFAEIAGgDIAMgMQAMgKAGAAIABABIgCACQgFAHgDAQIgCAdQAAAOADAEQACADAEAAIAGgBIgHALQgDAHACAGQnJg3lXCJIggANg");
	this.shape_4.setTransform(4.9,-101);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E9D37").s().p("AoFM1IgDgEIgHgIQgGgDgMgRIgBgBIgWgfIgZgqIgohNIgmhRIgZg3IA7BPIBBBVIA7BMIAiAuIAEAFIAFAIIguAVgAFlKpQgCgEAAgPIACgdQACgPAFgIIACgCIAFABIADACIACgIIAFgWIAQgjIASgmIAHgRIAEgLIAIgaIAKgdIAKgUIAOgaIAFgMIAOAGIASADQAMgBAIgEQAIgFAMAAIAKgDIgQAbIgPAbIgFAHIgnBDIgpBFIgiA6IgaAuIgKASIgFABQgFAAgCgCgALABLQAAgagGgKQgFgLgLAAIgRAFIgdAOIALgWIAMgZIANgiIANghIAHgXIAIgZIAHgbIAHAEQAVAIALABQAJAAAHgGIAQgRIAQgVIAGgRIABgVQAAgOgGgJIgNgNIgMgFIgbAIIgJACIABgEIAJgiIAIgjIAFgZIAEgbIAFgmIAEglQABgQgCgHIgFgbIgGgmIgGggIgFghIgHgpIgIgbIgIgQIgMgZIgNgZIgKgKQgFgCgPgKIgWgPIAHgQIAJgWIAZAOIAdAYIAaAeIAEAFIASAXQAUAdAOAbQAPAbAKAfQALAkAFAmQAGAnAAAmQAAApgGAnQgOBngaBiQgaBjgjBgIgHARIgdA3gAs1plIgOgTQgKgQABgKQAAgHAFgIIARgNIAHgFIAPgFIAigMIA8gLIA7gFIAjgCIAaACIA5gFIAFAAIAngGQAPgDAPgHIAFgCQAlgKAqgWIARgJIA3ghIgMAfQgKAggEAgIguAXIgJADIgcAPIgMAIIgJAFIgSAGIgVAHIgRADIgWAFIgoAGIhIALIhJAGIhDAGIgfAGIgNAHIgFAEg");
	this.shape_5.setTransform(12.3,-102.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14651E").s().p("AjEG3IgNgHIghgEIgggCQgGgDADgGIAHgQQAEgLgDgQIgEgWQgBgGADgCIAHgKQAFgHAHgSQAJgYAIgJQAIgIAJgCIAYgHIAbACIAOAFIAFAHIARASIANAOQADAFgDAGIgIAUQgGAPgGAdIgCALIgEAXIgDAIIgDgCIgEgCIgBAAQgGgBgMALIgMALIgGADgAgiC3IgNgGIgPgHQgWgNgBgIQAAgHAJgIIARgRQAIgKgEgRQgFgRABgHQABgGAFgDIAKgIQAFgFADgOQADgUAOgSIAdgmIAggkQAUgZAbgTIAXgPIAegOIARgEQAKgBAGALQAFAKAAAaIgBAeIgBACIguBRIg4BgIgtBNIgJADQgMAAgIAFQgGAFgMAAgADAlIIgHgDIgMgIQgCgEABgLQACgKgDgZQgEgZAKgIQAJgIANgBIANgBIAJgCIAbgHIAMAEIANANQAGAJAAAOIgBAVIgHARIgPAWIgQARQgIAFgIAAQgMAAgUgJg");
	this.shape_6.setTransform(64.5,-83.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A5921").s().p("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");
	this.shape_7.setTransform(8.7,-119.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghFMQgQgEgJgGQgKgIgHgMQgMgUgGgfQgGgfAAgjQAAgfAEgeQAEgdAIgWQAQg0AbgsQAbguAggsQAZghAegbQAfgbAigUQAigVAlgLQAlgLAmAAQAngBAoAPQAyASAZArQAMAUAGAYQAGAYAAAaQAAAXgFAYQgFAYgKAWQgVArgdApQgdApgjAlQgkAkgoAhQgoAggqAeQgHAEgSAIIgfAMIglAKIgoAGIgmADgAlJELIgkgKQgSgHgQgKIgbgXQgMgNgHgQQgJgVgEgWIgCgMIgCgaQABgsAOguQAPgrAWgqQAVgpAcggQAbghAggbQAhgbAmgXQAmgXAqgUIAjgOIAmgNIApgJIAlgEIAnAFQAJADAJAIIAQAPIANATQAMAWAAASIAAACQgbARgXAWQghAegZAjQgkAtgdAyQgdAvgSA5QgIAagEAgQgFAgAAAiIACAlIgXATQgQAKgVAHIgrAKIgsADg");
	this.shape_8.setTransform(29.7,-182.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7FC31C").s().p("ABQMUIACgCIAFAGIADAEIADAEgAijrwIAdgJIAEgBIghALIgPAGgAB8sRIgOACgAC0sfQgPAGgPAEIgaAEQAZgFAfgJg");
	this.shape_9.setTransform(-51.3,-97.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.4,-219.9,184.4,202.6);


(lib.shape30 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B8F32").s().p("Al9NBIgZglIgagkIgngyIg/hSIgtg9IgRgdIgEgOQABgFgDgJQgCgJgMgVIgTgpQgFgOAAgKIgBgWQgBgMgHgVQgGgVgFgKIgKgRIgJgRIgMgeIgLgfIgJgUIgOgWIgYglIgWgkIgMgSIgKgOIgSgWIgXgfIgNgWIgMgZQgHgPACgHIAHgLQAGgEAFgKQAGgJALgFIAbgIIARgEQAZANAXARQAjAbAgAeIA9BCQA7BBBCA7ICGBwIBJA6IBOA1QApAYAuAPQAlAMAlAIQAkAHAkAAIA9gFIA0gLQAbgHAbgLQAcgLAYgOQAZgOATgUQA9g8A5hEQA4hDAvhJIASgdIAdguIA0hcQAbg2AZhAQAZg/AQhEQAQhEABhGIgBgEQAAgIgFgFQgCgGgGgEIgLgDQgKAAgGAJIgVAXIgcAWIghAUIgeASQgvAbg4ATIhtAkQhMAYhPANQhPANhQAAQhTABhSgRQhAgNhAgcQhAgcg5gpQg6gogwgzQgwgzghg6QgdgzgRgwQgQgwgHgqQgHgqAAggIAAgKIAHALIADAIIALAHIAdALIAdAKIAKAEIANADIAhAIIAnALIAXAGIARADIAVADIATACIAKgBIAOgDIAggBIBsgEIgFAMQgQAygBA1QAAAwAUAxQAKAVAQASQARARATANQATAMAWAJQAVAIAVAFIA1AEIAwgEQAagDAYgIQAZgIAVgOIAIgFIADALQAHAXALASQAKATASANQARANAVAEIAtAEIA6gEQAdgFAbgIQAbgHAUgKQAVgIAMgJQArgeApghQApgiAmgmQAlgnAggrQAaglAVgpIAWAPQAPAJAFACIAKALIANAYIAMAZIAIARIAIAbIAHAoIAFAhIAGAhIAGAmIAFAbQACAGgBARIgEAlIgFAmIgEAbIgFAZIgIAjIgJAiIgBAEIgMABQgOAAgJAIQgJAIADAZQAEAagCAKQgCAKADAEIALAIIgHAbIgIAZIgHAWIgNAgIgNAjIgMAaIgLAWIgXAOQgbATgVAZIgfAkIgfAnQgOATgEAUQgDAPgFAFIgKAIQgEACgBAHQgCAGAFARQAEARgIAKIgRASQgJAHABAIQABAIAVAMIAPAIIgFAMIgOAaIgKAUIgKAcIgIAaIgEALIgHARIgSAnIgQAjIACgMQAGgdAFgOIAJgVQADgGgDgFIgNgOIgRgSIgGgHIgNgFIgbgCIgYAIQgKACgIAIQgIAIgIAYQgHASgFAHIgIAKQgCADAAAGIAFAVQADARgFAKIgHARQgDAGAHACIAgACIAgAEIANAHIAGAEIAFgDIANgMQAMgKAFAAIABABIgCACQgFAHgCAQIgCAdQAAAOACAEQACADAFAAIAFgBIgGALQgDAHACAGQnfg5lhCYg");
	this.shape.setTransform(2.8,-106.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9D37").s().p("AmYNrIgEgEIgHgHQgngcgoglQgogmghgsQgtg+ghhCQgihCgdhIIgTgzIgVg8IgVg7IgYhJIgIgWIgCgIIgCgEQgRgbgUgRIgdgZIgcgXIgXgZQgKgNgIgSQgJgagBgWQABgjARgVQAJgLANgFQANgGASAAIADAAQAsACAnAPIAaAMIgRAEIgbAHQgLAFgGAKQgFAJgGAFIgHALQgCAGAHAOIAMAaIANAXIAXAfIASAWIAKANIAMATIAWAkIAYAlIAOAWIAJAUIALAfIAMAeIAJAQIAKASQAFAKAGAVQAHAVABAMIABAVQAAAKAFAPIATApQAMAVACAJQADAJgBAFIAEANIARAdIAtA+IA/BRIAnAzIAaAkIAZAlIAGAIQgYAJgWALgAHSLfQgCgEAAgPIACgdQACgPAFgHIACgDIAFACIADACIACgIIAFgXIAQgjIASgmIAHgRIAEgLIAIgaIAKgdIAKgTIAOgaIAFgNIAOAGIASADQAMAAAIgFQAIgFAMAAIAKgDIgQAbIgPAbIgFAIIgnBCIgpBFIgiA7IgaAuIgKASIgFAAQgFAAgCgCgAMtCBQAAgagGgKQgFgLgLABIgRAEIgdAOIALgVIAMgbIANgjIANgfIAHgWIAIgaIAHgaIAHADQAVAJALAAQAJAAAHgFIAQgRIAQgWIAGgRIABgVQAAgOgGgJIgNgNIgMgEIgbAHIgJACIABgEIAJgiIAIgiIAFgZIAEgbIAFgnIAEglQABgQgCgGIgFgbIgGgnIgGggIgFghIgHgoIgIgbIgIgRIgMgZIgNgYIgKgLQgFgCgPgKIgWgPIAHgPIAJgXIAZAOIAdAZIAaAdIAWAdQAUAcAOAbQAPAbAKAgQALAjAFAmQAGAnAAAmQAAApgGAnQgOBngaBjQgaBigjBgIgHARIgdA3gAl8rkIgVgDIgRgEIgXgGIgngKIghgJIgNgDIgKgDIgdgKIgdgLIgLgHIgDgIIgHgMQABgYAEgOIAEgLIACAAIATAEIATAIIATALIAfATQASALASAHIAmALIBMAJIAtABIAvgBIAygCIAsgDIAEAAIgBABIgUAzIhsAFIggABIgOACIgKABg");
	this.shape_1.setTransform(1.4,-108.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14651E").s().p("AjEG3IgNgHIghgEIgggCQgGgDADgGIAHgQQAEgLgDgQIgEgWQgBgGADgCIAHgKQAFgHAHgSQAJgYAIgJQAIgIAJgCIAYgHIAbACIAOAFIAFAHIARASIANAOQADAFgDAGIgIAUQgGAPgGAdIgCALIgEAXIgDAIIgDgCIgEgCIgBAAQgGgBgMALIgMALIgGADgAgiC3IgNgGIgPgHQgWgNgBgIQAAgHAJgIIARgRQAIgKgEgRQgFgRABgHQABgGAFgDIAKgIQAFgFADgOQADgUAOgSIAdgmIAggkQAUgZAbgTIAXgPIAegOIARgEQAKgBAGALQAFAKAAAaIgBAeIgBACIguBRIg4BgIgtBNIgJADQgMAAgIAFQgGAFgMAAgADAlIIgHgDIgMgIQgCgEABgLQACgKgDgZQgEgZAKgIQAJgIANgBIANgBIAJgCIAbgHIAMAEIANANQAGAJAAAOIgBAVIgHARIgPAWIgQARQgIAFgIAAQgMAAgUgJg");
	this.shape_2.setTransform(64.5,-83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#105013").s().p("AoNOqQgoglghgrIgFgGQgvhBgjhEIgUgrIgshiIgDgIIgmhqIgVg7IgVhAIgMglIgVgbIgagWIgdgYIgdgcQgSgVgOgeQgMgggBghQABgSAEgQQADgQAIgOQAIgPAMgJQALgLAQgHQAWgKAaAAIAFAAQA0ACAtASQAsAQAmAdQAmAdAhAiIAVAWIA1ALIA2AGIAFAAQAlABAigNQAkgOAggVQAggVAbgaQAkgiAXgrQAVgrAEguIgigOQhDgdg9grQg+grgzg2Qgzg2gjg+QgthSgThKQgShJABg2IADgpIAHgfIAEgJIAGgHIAKgIIAVgEIAYAEIAYAJIAWALIAUAMIATAMQAcARAhAGIBHAJIAqABIAugBIAxgCIArgDIAdgDQAUgkAZgeQAegkAjgdQAkgdAmgYIBTgtIAlgPIAqgPIAugKIAtgEIAzAHQANAEALAIIAWATQAVAWAMAdIAGAUQAfgPAggKQApgNAtAAQAugBAvARQAgALAYAVQAYAUAPAaQAPAZAIAeQAHAdAAAfQAAAXgEAYIABAAQAUAIASANIAiAdIAcAgIAYAfQAUAdARAeQAQAfAMAkQALAmAGApQAGApAAApQAAArgGAqQgPBqgaBiQgbBlgjBkIgTApIgjBAIgvBSIg2BdIhCByIgDADIgHAMIhGB3Ig1BcIgYAtIAAAAQgGALgLAAQgFAAgEgCQgIgEgDgIIAAgCQgCgHADgGIAGgLIAKgSIAaguIAig7IAphFIAnhCIAFgIIAPgbIAQgbIAthNIA4hhIAthSIACgCIAdg3IAHgRQAjhiAahiQAahhAOhnQAGgnAAgpQAAgmgGgnQgFgmgLgjQgKgggPgbQgOgbgUgcIgWgdIgagdIgdgZIgZgOIgJAXIgHAPQgVApgaAlQggAsglAnQgmAmgpAhQgpAigrAeQgMAJgVAIQgUAJgbAIQgbAHgdAFIg6AFIgtgEQgVgFgRgMQgSgOgKgSQgLgSgHgXIgDgLIgIAFQgVANgZAIQgYAIgaAEIgwADIg1gEQgVgEgVgJQgWgIgTgNQgTgNgRgRQgQgRgKgWQgUgwAAgxQABg1AQgxIAFgNIAUgzIABgBIgEAAIgsADIgyACIgvABIgtgBIhMgJIgmgLQgSgHgSgLIgfgTIgTgLIgTgIIgTgEIgCAAIgEALQgEAOgBAYIAAALQAAAgAHApQAHAqAQAxQARAwAdAzQAhA6AwAyQAwAzA6ApQA5AoBAAdQBAAcBAANQBSAQBTAAQBQAABPgNQBPgNBMgYIBtgkQA4gUAvgaIAegTIAhgTIAcgWIAVgXQAGgJAKAAIALADQAGAEACAFQAFAGAAAIIABAEQgBBFgQBEQgQBEgZBAQgZA9gbA2Ig0BfIgdAuIgSAdQgvBIg4BEQg5BEg9A8QgTATgZAOQgYAPgcALQgbAKgbAHIg0AMIg9AFQgmAAgigIQglgHglgMQgugQgpgYIhOg1IhJg5IiGhxQhCg6g7hBIg9hCQggghgjgaQgXgSgZgMIgagMQgngPgsgCIgDAAQgSAAgNAGQgNAFgJALQgRAVgBAjQABAYAJAaQAIASAKANIAXAZIAcAXIAdAZQAUARARAbIACAEIACAIIAIAWIAYBJIAVA7IAVA8IATAzQAdBIAiBCQAhBCAtA+QAhAsAoAmQAoAlAnAcIAHAHIAEAEIABABIglATQgpgdgogngAm7EeICEBwIBIA4IBKAyQAmAXApAOQAjAMAiAGIBBAHIA2gFQAXgEAZgHQAZgGAZgKQAZgKAWgNQAVgMAPgOQA8g8A3hCQA3hCAthGIATgcIAbgtIAig7IAihGQAYgwAUg3QAUg4ANg5QAIgnADgnIgbAVIgiAVIgfASQg0Aeg5AUIhvAkQhOAZhTANQhSAOhTAAQhWAAhXgRIg/gQQgGAwgWAtQgaAxgpAnQgeAcgjAXQgkAYgnAPQgrAQgrgBIg/gGIgCAAQA2A8A/A2g");
	this.shape_3.setTransform(1.4,-119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7FC31C").s().p("AgFgEIACgBIADAFIADACIADAEg");
	this.shape_4.setTransform(-42.6,-18);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#13150C").s().p("AgwHLIgggJIgugSIgvgVIgigOQgMgGgZgTIg1gnIg0gpIgfgVIgdgXIgtgnIgsgpIgZgWIgXgVIgngoIgrgrIgggdQgMgIAHAAIAUAEIAfAJIAfAFIAOABIArgEQAYgDAWgGQAXgIARgIIAjgVIArgdIAmgdQARgOAHgJQAMgVALglIAbhQIC0AYIAZAAIAtABIA4ABIA4gBIAkgEIAigJIA1gOIA7gNIAzgMIAegFQAKgCAYgMIA4gcIA3gfQAZgPAKgJIAbgXIAmgcIAigXIAOgJIgBAUIgBAuIgDA1IgFAkIgMAoIgSAwIgRAnIgPAiIgWAuIgVAsIgMAbIgOAZIgYAuIgaAvIgQAhQgFALgTAYIgsA0IguAzIgbAgIgZAYIgoAlIgnAiIgXATQgEADgWAGIg1ANIhAAMIg4AJIgmAFg");
	this.shape_5.setTransform(7,-106.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-219.9,199.1,202.6);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#105013").ss(4,1,1).p("AEXgnQgWAvgfArQgfAsglAnQgnAmgrAkIhVBCIgbAMIghANIgoALIgqAHIgpACIglgDQgRgDgKgHQgKgIgIgOQgNgVgGghQgGghAAglQAAgiAEgfQAFgfAIgYQARg1AcgxQAdgxAkgvQAbgjAhgdQAggdAkgVQAlgWAmgMQAogMAoAAQAqgBAqAQQA2ATAaAuQANAWAGAZQAGAaAAAbQAAAZgFAaQgFAZgLAXg");
	this.shape.setTransform(0.3,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjlE8QgRgDgJgHQgLgIgHgOQgNgVgHghQgGghAAglQAAgiAEgfQAFgfAIgYQARg1AdgxQAcgxAkgvQAcgjAggdQAhgdAjgVQAlgWAmgMQAogMAoAAQAqgBApAQQA2ATAbAuQANAWAFAZQAHAaAAAbQAAAZgFAaQgGAZgKAXQgWAvgfArQgfAsglAnQgnAmgrAkIhVBCIgbAMIghANIgoALIgqAHIgoACg");
	this.shape_1.setTransform(0.3,0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.7,-31.1,60.1,64);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9BdQgOgHgHgPIgGgXIAAgLQAAgRAFgSIAMgcIARgaIARgTQAMgNAQgHQAQgJATABQARgBARAKIAOANQAGAIADAKQAGAOgBANQAAASgFAOIgPAgQgRAegZASQgNAJgOAEQgPAHgRAAQgOABgOgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-10,17.8,20.2);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#105013").ss(4,1,1).p("AEAk0QAKAHAIAJIAOAVQAZAlgSBWQgQBPgvBdQgtBeg5BJQg7BOgyAYIgmATIguAKIgvAEIgwgFQgUgDgTgIQgTgHgRgLQgRgLgMgOQgNgOgIgRQgKgXgEgXIgDgNIgBgcQAAgvAQgxQAQgxAYgrQAWgsAegjQAdgjAjgdIBLg2QApgZAsgVIAlgQIApgNIAsgKIAqgDIAqAFQAJACAKAJg");
	this.shape.setTransform(-0.6,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AieFBQgUgDgTgIQgTgIgRgKQgRgLgMgOQgNgOgIgRQgKgXgEgYIgDgMIgBgcQAAgvAQgxQAQgyAYgqQAWgsAegjQAdgjAjgdIBLg2QApgYAsgWIAlgPIApgOIAsgKIAqgDIAqAEQAJAEAKAJQAKAGAIAJIAOAVQAZAmgSBVQgQBOgvBeQgtBeg5BIQg7BOgyAZIgmATIguAKIgvADg");
	this.shape_1.setTransform(-0.6,0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-31.6,60.6,65.2);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghFMQgQgEgJgGQgKgIgHgMQgMgUgGgfQgGgfAAgjQAAgfAEgeQAEgdAIgWQAQg0AbgsQAbguAggsQAZghAegbQAfgbAigUQAigVAlgLQAlgLAmAAQAngBAoAPQAyASAZArQAMAUAGAYQAGAYAAAaQAAAXgFAYQgFAYgKAWQgVArgdApQgdApgjAlQgkAkgoAhQgoAggqAeQgHAEgSAIIgfAMIglAKIgoAGIgmADgAlJELIgkgKQgSgHgQgKIgbgXQgMgNgHgQQgJgVgEgWIgCgMIgCgaQABgsAOguQAPgrAWgqQAVgpAcggQAbghAggbQAhgbAmgXQAmgXAqgUIAjgOIAmgNIApgJIAlgEIAnAFQAJADAJAIIAQAPIANATQAMAWAAASIAAACQgbARgXAWQghAegZAjQgkAtgdAyQgdAvgSA5QgIAagEAgQgFAgAAAiIACAlIgXATQgQAKgVAHIgrAKIgsADg");
	this.shape.setTransform(29.7,-182.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9D37").s().p("AoFM1IgDgEIgHgIQgGgDgMgRIgBgBIgWgfIgZgqIgohNIgmhRIgZg3IA7BPIBBBVIA7BMIAiAuIAEAFIAFAIIguAVgAFlKpQgCgEAAgPIACgdQACgPAFgIIACgCIAFABIADACIACgIIAFgWIAQgjIASgmIAHgRIAEgLIAIgaIAKgdIAKgUIAOgaIAFgMIAOAGIASADQAMgBAIgEQAIgFAMAAIAKgDIgQAbIgPAbIgFAHIgnBDIgpBFIgiA6IgaAuIgKASIgFABQgFAAgCgCgALABLQAAgagGgKQgFgLgLAAIgRAFIgdAOIALgWIAMgZIANgiIANghIAHgXIAIgZIAHgbIAHAEQAVAIALABQAJAAAHgGIAQgRIAQgVIAGgRIABgVQAAgOgGgJIgNgNIgMgFIgbAIIgJACIABgEIAJgiIAIgjIAFgZIAEgbIAFgmIAEglQABgQgCgHIgFgbIgGgmIgGggIgFghIgHgpIgIgbIgIgQIgMgZIgNgZIgKgKQgFgCgPgKIgWgPIAHgQIAJgWIAZAOIAdAYIAaAeIAEAFIASAXQAUAdAOAbQAPAbAKAfQALAkAFAmQAGAnAAAmQAAApgGAnQgOBngaBiQgaBjgjBgIgHARIgdA3gAs1plIgOgTQgKgQABgKQAAgHAFgIIARgNIAHgFIAPgFIAigMIA8gLIA7gFIAjgCIAaACIA5gFIAFAAIAngGQAPgDAPgHIAFgCQAlgKAqgWIARgJIA3ghIgMAfQgKAggEAgIguAXIgJADIgcAPIgMAIIgJAFIgSAGIgVAHIgRADIgWAFIgoAGIhIALIhJAGIhDAGIgfAGIgNAHIgFAEg");
	this.shape_1.setTransform(12.3,-102.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B8F32").s().p("AmSMIIgDgFIgjgvIg6hLIhChVIg7hPIgIgUIgZg7IgOgnIgOgxIgUhSIgShOIgLg6IgEgRIgBgGIgCgGIgDgIIgGgmIgEgwIgEg+IgFhoIgIhtQgEg1gJgvQgHgugOgjIgDgGIgGgEQgRgJgGgMQgHgKAAgOQAAgLAFgMQAFgMAJgKIAUgPIAVgFIANACIATASQAZAWAgAWIA6AlIAUAOIA9AnQAhASAuAXIBwA0QBBAeBGAbIBFAaIBDAWIA+AQIA0AJIAgABIBkgIQAygIAvgNIBWgYQAmgLAVgIQA9gVAzgZIBHgmIASgMQAogYAagaQAcgYANgXQAEgIgCgHQgBgHgGgDIgHgIIgKgDQgKAAgHAJIgUAXIgdAWIggAUIgfASIg1AfIgqAWIgTAJIg+AdQgeANgbAHQg/AWg8ALQg8AMg9AAIhkgJQg1gJg6gVIhkgmQg6gXhBgdQhBgdhBghQgwgXgsgZIgegRIgpgfIhSg9IgBAAIAGgEIAMgHIAggHIBDgFIBJgHIBIgKIAngHIAXgEIARgEIAVgGIASgGIAJgGIAMgHIAcgPIAIgEIAugWIgCAnQgBAwAVAxQAKAVAQASQAQARAUANQATAMAVAJQAWAIAVAFIA1AEIAwgEQAagDAYgIQAYgIAVgOIAJgFIACALQAHAXALASQALATARANQARANAVAEIAtAEIA6gEQAegFAagIQAbgHAUgKQAVgIAMgJQArgeApghQAqgiAlgmQAmgnAfgrQAbglAUgpIAWAPQAPAJAGACIAKALIAMAYIAMAZIAJARIAHAbIAHAoIAGAhIAFAhIAGAmIAGAbQACAGgCARIgEAlIgFAmIgDAbIgFAZIgIAjIgJAiIgBAEIgNABQgNAAgJAIQgKAIAEAZQADAagCAKQgBAKACAEIAMAIIgIAbIgHAZIgIAWIgMAiIgOAjIgLAYIgMAWIgXAOQgbATgUAZIggAkIgfAnQgOATgDAUQgDAPgFAFIgKAIQgFACgBAHQgBAGAFARQAEARgIAKIgRASQgJAHAAAIQABAIAWAMIAPAIIgGAMIgNAaIgKAUIgLAcIgIAaIgDALIgIARIgRAnIgRAjIACgMQAGgdAGgOIAIgVQADgGgDgFIgNgOIgRgSIgFgHIgOgFIgbgCIgYAIQgJACgIAIQgIAIgJAYQgHASgFAHIgHAKQgDADABAGIAEAVQADARgEAKIgHARQgDAGAGACIAgACIAhAEIANAHIAFAEIAGgDIAMgMQAMgKAGAAIABABIgCACQgFAHgDAQIgCAdQAAAOADAEQACADAEAAIAGgBIgHALQgDAHACAGQnJg3lXCJIggANg");
	this.shape_2.setTransform(4.9,-101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14651E").s().p("AjEG3IgNgHIghgEIgggCQgGgDADgGIAHgQQAEgLgDgQIgEgWQgBgGADgCIAHgKQAFgHAHgSQAJgYAIgJQAIgIAJgCIAYgHIAbACIAOAFIAFAHIARASIANAOQADAFgDAGIgIAUQgGAPgGAdIgCALIgEAXIgDAIIgDgCIgEgCIgBAAQgGgBgMALIgMALIgGADgAgiC3IgNgGIgPgHQgWgNgBgIQAAgHAJgIIARgRQAIgKgEgRQgFgRABgHQABgGAFgDIAKgIQAFgFADgOQADgUAOgSIAdgmIAggkQAUgZAbgTIAXgPIAegOIARgEQAKgBAGALQAFAKAAAaIgBAeIgBACIguBRIg4BgIgtBNIgJADQgMAAgIAFQgGAFgMAAgADAlIIgHgDIgMgIQgCgEABgLQACgKgDgZQgEgZAKgIQAJgIANgBIANgBIAJgCIAbgHIAMAEIANANQAGAJAAAOIgBAVIgHARIgPAWIgQARQgIAFgIAAQgMAAgUgJg");
	this.shape_3.setTransform(64.5,-83.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#105013").s().p("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");
	this.shape_4.setTransform(8.7,-119.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7FC31C").s().p("ABQMUIACgCIAFAGIADAEIADAEgAijrwIAdgJIAEgBIghALIgPAGgAB8sRIgOACgAC0sfQgPAGgPAEIgaAEQAZgFAfgJg");
	this.shape_5.setTransform(-51.3,-97.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.4,-219.9,184.4,202.6);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14651E").s().p("Aq8E0IgogMIhMgPQgsgHgPgFQgPgFADgGIAOgNQALgJAJgNQAIgNgEgUIgGgkQAAgKAFgFIANgMQAJgIAKgTIAPgaQAFgGAGAAIAOgCQAKgBARgJIBgBrIAMAVIANAlIADATIgBAKIgCANQgBAHgEACIgKAGQgHAEgMAQIgKAMQgDADgFAAgAGTC+IgNgHIghgEIgggCQgGgDADgGIAHgQQAEgLgDgQIgEgWQgBgGADgCIAHgKQAFgHAHgSQAJgYAIgJQAIgIAJgCIAYgHIAbACIAOAFIAFAHIARASIANAOQADAFgDAGIgIAUQgGAPgGAdIgCALIgEAXIgDAIIgDgCIgEgCIgBAAQgGgBgMALIgMALIgGADgALCBkIgGgFIgKgLQgHgGgPgFQgRgFgDgFQgDgFAEgGIAAgBIAOgSQAJgKAIgPIAZgOIAMgEIAGAEQADACAKADIAFABQANABACAEIgBANQgCAIACASIABARQAAAFgEACIgKAFQgHAEgLAKQgNANgEAAIgBAAgAvBAEQAAgEgEgEQgFgGgPgFQgWgGgEgGQgFgGACgOQACgNgCgcIgCgZQAAgGAFAAIAFABIADAAIAQgCQAJgCAOgJIADgBIARgIIAGADIAGADIAKAHIAuAbIAHALIADAGIAKAUIACAGIgDAGIgFASIgEARQgCADgFAAIgRABQgMACgWAKIgVAGIgKADQgFAAgBgFgAx4AAIgKgHIgYgIIgWgFQgEgCAHgEIARgKIAWgQIAZgbIAGAFIARAUQAIAKAAAEQAAAEgHAGIgTAWIgJAJIgEAEgANWg3IgIgJIgBgBQgEgGgLgGQgPgKACgLQABgLAJgMIAKgPIAFgEQA9gkA6ggIAGgDIATAJIAHAIIAKAPIAIANIgDAIQgFAFgEAPIAAACIgJATIgQAOIghAaIgVAPIgKAEIgEgBIgHgBIgRAEQgOAFgGAAQgGAAgCgEgAQYhXIATgOIAagaIAfACQAPAEABACQABADgDAEQgDADABAHQADAGgEADQgDADgOACIgsAFIgSABQgOAAAGgFgA0NiKIgQgQIgEgEIgeggIgPgPIAJgCIBTgFIBvAIIACAEQAFAKgCADIgOAKIgNAJIgUAOIgRAMIgGAEIAAgCIgGgCIgTAEQgSAGgKAAQgLAAgJgGgATwilQgJgFgVgBIghgCQgLgBgHgGIgPgQIgFgGQgMgRgBgHQgCgIAGgIIAOgVIALgVQADgGAHgEIAYgKIBSgHIAVgBIALADIABAKQABAHAMALIARASQACAGgFAIIgBADQgFAIgGARIgHAUIgFAIIgJAGIgTAOIgOALIgJADQgHgBgJgFg");
	this.shape.setTransform(4.4,-58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#105013").s().p("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");
	this.shape_1.setTransform(5.2,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#17802D").s().p("AuGHfIgEgPQgCgTgJgKQgJgLgKgGIgFgDIABgBIAOgMIAHgIIACgHIAfAHIA0ANIAJACIAXAFIAZAEIANgDQAGgBAEgGQAGgHAAgIIAAgEQgCgIgFgEQgGgEgHgBIgEABQgFABgFADIgFAAIgWgFIgOgEIg3gNIg0gMQhPgUhOghQhOgghKgsQhKgshCg2QhCg3g2g+Qg2hAgnhJIgHgOIAYAfIAjAsQASAXAWASQAWASAZAHQAhAIAZAKIAzAaQAZAOAhAOQAgANAXAQIAxAhQAZAPAlANIArAPIAaALIAZAJIAoAIIA4AHIAoAGQATAEAcAKIAgAIIARACQAGABAJAFIAaAUIAbAVIAPAKQAFAEABAHIgBAZQgBARAEAJIAJAQQADAFgEAHIgZATIhBAoQgaAOgWAAQgLAAgMAIIgVAQQgLAIgHAAQgFAAgCgEgAIxExIgXgKQgOgHgdgEIgkgGIgLgEIAAgEIgCgHQgEgFgOgHQgSgKABgGQAAgGANgHIAhgUQAVgOAUgYIAdghIAQgLIASgJIAigbIApghIAigTIAmgUQAWgLAggSQAggVAUgLIAmgTIArgRIBDgaQBVgjBKgiICQhAIA6gZIArgSIAkgQIAogVQAdgQAZgUQAYgTAYgdQAXgdAcgsIAFgBIgHAvIgOBFQgLAtgfApQgXAfgmAdQgmAdg3AcQg2AbhJAaQhJAZhdAXIg3ASIhKAcIg9AYIgXAKIgIADIgEACIgBAAIhNAjIhYApIg8AfIgzAcQgZAOgRAMQgRALgLALQgGAHAAAHQAAAIAGAGQAFAGAJAAQAIAAAGgGIANgKIAWgPIAYgOQgCAHADALIAFAYQADAOgDAOQgCAPgOAOIgOANIgJADQgFAAgGgFgACYDpIgMgGIgFgCIgfgMIgkgLIgugQIAIgcIAJgtIAMgyIASg1IAdhjIATAWQAMANAOAIQAPAIAUABIArgGIA2gMIA1gPIAogLQAQgFAagPIA3gkIA5glQAbgRATgGIArgQIAjgOIAkgOIAGgBQAFAAgGALIgjAZQhpBMhlBSIgsAkIg3AvIg8A2IhSBRIgeAjIgOASIgHALgAjECbIgFghIgFgmIgGgqIgEgpIgCggIABgIQAAgJgGgFQgEgGgJgBIABgUQABgLALAAIAPgDIAKgDQAFAAAEAGIAHAQQgCAFACAHQAIAjAAAoIgDA3IgFA5IgHA4IgBASg");
	this.shape_2.setTransform(8.3,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E9D37").s().p("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");
	this.shape_3.setTransform(3.7,-12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B8F32").s().p("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");
	this.shape_4.setTransform(5.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFE10E").s().p("AABgBIALgFIgXANg");
	this.shape_5.setTransform(97.8,34.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.9,-95.9,334.4,187.3);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnDASbMAAAgk2MBOHAAAMAAAAk2g");
	this.shape.setTransform(250,118);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,236);


(lib.shape16 = function() {
	this.initialize();

	// Layer 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.2)").ss(1.5,1,1).p("AlwjMIBrAUQBdAUAjANQABgMAIgOQANgXAcABQAHABBHArIBKArQAhACAggdIAtgwQAVgWAPAOQASAQAUBNIAAABQAQgCBUgnQBGggBHAEQBRAFAPAWQAJANgEAWQAGASARAIIA5ANQBsAVAeAUQAXAPgCAiIgDApQgEAMgaACIlCgTIgZABIAGAOQAEAKgBAIQgCAhgbAJIhDADQgagBkGhEIgyACQAEASAKAPQAIANAAAFQgBARgMANQgNAOgUgBQgbgBgcgfQgZgigKgGIADAaQADAZgDAQQgKA1hCgEQghgCgYgaIgUgZIkUAWQg5gEgNgdQgEgIABgLIACgKIADgZIAYghQhDgbiLgYQgogEgPgKQgTgMACgbQABghAmgJICjgJIAGgFQgHgLAAgPQACgSAOgKQAUgQAsADIAuAIIAzANQABgcANgLQATgSA2AEg");
	this.shape.setTransform(-250,169.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(43,123,54,0.2)").s().p("AieDOQghgCgYgaIgUgZIkUAWQg5gEgNgdQgEgIABgLIACgKIADgZIAYghQhDgbiLgYQgogEgPgKQgTgMACgbQABghAmgJICjgJIAGgFQgHgLAAgPQACgSAOgKQAUgQAsADIAuAIIAzANQABgcANgLQATgSA2AEIBrAUQBdAUAjANQABgMAIgOQANgXAcABQAHABBHArIBKArQAhACAggdIAtgwQAVgWAPAOQASAQAUBNIAAABQAQgCBUgnQBGggBHAEQBRAFAPAWQAJANgEAWQAGASARAIIA5ANQBsAVAeAUQAXAPgCAiIgDApQgEAMgaACIlCgTIgZABIAGAOQAEAKgBAIQgCAhgbAJIhDADQgagBkGhEIgyACQAEASAKAPQAIANAAAFQgBARgMANQgNAOgUgBQgbgBgcgfQgZgigKgGIADAaQADAZgDAQQgJAxg5AAIgKAAg");
	this.shape_1.setTransform(-250,169.5);

	// Layer 19
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,0,0.2)").ss(1.5,1,1).p("AG/hRQAFAOANAGIArAKQBRAQAXAPQARALgBAZIgCAfQgEAJgUABIjygOIgSABIAEAKIACAOQgBAZgUAGIgzADQgTgBjGgzIglABQADAOAHAMIAGANQgBANgIAJQgKALgPgBQgUgBgVgXQgTgZgHgFIACAUIAAAeQgHAogygDQgagBgRgUIgPgTIjQAQQgrgCgKgVQgDgHABgIIACgHIACgTIASgZQgygVhpgRQgfgEgLgHQgOgJABgUQACgZAcgHIB7gHQAAgBAEgCQgFgJAAgLQABgNALgIQAPgMAhACIAjAGIAmAKQABgVAJgIQAPgOAoADQAPABBCAOQBGAQAaAJQABgJAGgKQAKgSAVABQAFABA2AgIA3AhQAZABAYgVIAiglQAPgRALALQAOAMAQA6IAAABQALgCA/gdQA1gYA2ADQA9ADALASQAGAJgDAQg");
	this.shape_2.setTransform(212.3,106.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(43,123,54,0.2)").s().p("Ah2CbQgagBgRgUIgPgTIjQAQQgrgCgKgVQgDgHABgIIACgHIACgTIASgZQgygVhpgRQgfgEgLgHQgOgJABgUQACgZAcgHIB7gHQAAgBAEgCQgFgJAAgLQABgNALgIQAPgMAhACIAjAGIAmAKQABgVAJgIQAPgOAoADQAPABBCAOQBGAQAaAJQABgJAGgKQAKgSAVABQAFABA2AgIA3AhQAZABAYgVIAiglQAPgRALALQAOAMAQA6IAAABQALgCA/gdQA1gYA2ADQA9ADALASQAGAJgDAQQAFAOANAGIArAKQBRAQAXAPQARALgBAZIgCAfQgEAJgUABIjygOIgSABIAEAKIACAOQgBAZgUAGIgzADQgTgBjGgzIglABQADAOAHAMIAGANQgBANgIAJQgKALgPgBQgUgBgVgXQgTgZgHgFIACAUIAAAeQgHAlgrAAIgHAAg");
	this.shape_3.setTransform(212.3,106.9);

	// Layer 18
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,0,0.2)").ss(0.8,1,1).p("AiCgOIAbgBIABgBIgBgEQAAgDACgCIALgDIAHACIAJACQAAgFACgCIAMgCIASAEIAVAFIACgEQACgEAEAAIANAIIALAGQAGABAEgFIAIgIIAGgBIAGAPIARgGQALgGAMABQANABADADIABAGIAEAFIAJACIAXAHQAEACgBAEIAAAGQgBADgEAAIg1gDIgEAAIABACIAAADQAAAGgEABIgMABIgwgMIgIABIADAFIABADIgCAFIgGACQgDAAgEgFIgGgHIABAFIgBAGQgBAJgLgBQgGAAgDgEIgEgEIgtAEQgKgBgCgFIAAgDIAAgCIAAgEIAFgFQgMgFgWgEIgKgBQgDgCABgEQAAgFAGgCg");
	this.shape_4.setTransform(111.7,84.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(43,123,54,0.2)").s().p("AgZAhQgGAAgDgEIgEgEIgtAEQgKgBgCgFIAAgDIAAgCIAAgEIAFgFQgMgFgWgEIgKgBQgDgCABgEQAAgFAGgCIAbgBIABgBIgBgEQAAgDACgCIALgDIAHACIAJACQAAgFACgCIAMgCIASAEIAVAFIACgEQACgEAEAAIANAIIALAGQAGABAEgFIAIgIIAGgBIAGAPIARgGQALgGAMABQANABADADIABAGIAEAFIAJACIAXAHQAEACgBAEIAAAGQgBADgEAAIg1gDIgEAAIABACIAAADQAAAGgEABIgMABIgwgMIgIABIADAFIABADIgCAFIgGACQgDAAgEgFIgGgHIABAFIgBAGQgBAJgJAAIgCgBg");
	this.shape_5.setTransform(111.7,84.1);

	// Layer 17
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,0,0.2)").ss(0.8,1,1).p("AB+AeIhhgMIgRADIAGAKIADAGQAAAFgDAEQgEAGgGAAQgIABgKgJQgKgLgDgBIACAJIABANQgBASgWABQgLAAgJgHIgHgIIhaARQgTABgFgJIgCgGIAAgDIAAgIIAHgMIhGgKIgSgDQgHgDAAgJQgBgLAMgDIA2gIIABgCIgDgIQAAgGAEgFQAGgFAPgBIAPABIARADQAAgKADgEQAGgGASgBIAkACIArAHIACgJQAEgIAJgBQACAAAZAMIAZALQALAAAJgLIANgSQAGgIAGAEQAGAFAKAZQAFgBAagQQAWgNAXgCQAbgBAGAHQADAEAAAHQACAGAGACIATACQAlADAKAGQAIAEABAMIAAANQAAAEgJACIhqADIgJABIADAFIABAGQABALgJAEg");
	this.shape_6.setTransform(-170.2,93.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(43,123,54,0.2)").s().p("Ai4BDIgCgGIAAgDIAAgIIAHgMIhGgKIgSgDQgHgDAAgJQgBgLAMgDIA2gIIABgCIgDgIQAAgGAEgFQAGgFAPgBIAPABIARADQAAgKADgEQAGgGASgBIAkACIArAHIACgJQAEgIAJgBQACAAAZAMIAZALQALAAAJgLIANgSQAGgIAGAEQAGAFAKAZQAFgBAagQQAWgNAXgCQAbgBAGAHQADAEAAAHQACAGAGACIATACQAlADAKAGQAIAEABAMIAAANQAAAEgJACIhqADIgJABIADAFIABAGQABALgJAEIgVADIhhgMIgRADIAGAKIADAGQAAAFgDAEQgEAGgGAAQgIABgKgJQgKgLgDgBIACAJIABANQgBASgWABQgLAAgJgHIgHgIIhaARIgDAAQgQAAgFgIg");
	this.shape_7.setTransform(-170.2,93.4);

	// Layer 16
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2E853A").ss(1.5,1,1).p("Aphi5IBfAFQKOArD8CIQCaBSBABp");
	this.shape_8.setTransform(-191.8,152.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#47C059").s().p("AphC6IAAlzIBfAFQKOArD8CIQCaBSBABpg");
	this.shape_9.setTransform(-191.8,152.3);

	// Layer 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2E853A").ss(1.5,1,1).p("AJkiLQjCgnkXgTQlpgajXBOQjYBOAzBSQAzBTDaA5QDbA4FLgHQDWgFC1gd");
	this.shape_10.setTransform(190.7,106.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47C059").s().p("AlNCbQjag5gzhTQgzhSDYhOQDXhOFpAaQEXATDCAnIAAE1Qi1AdjWAFIhIABQkbAAjDgyg");
	this.shape_11.setTransform(190.7,106.8);

	// Layer 14
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2E853A").ss(1,1,1).p("AiMArQg6gMgOgdQgPgaBBgRQBAgRBjAEQBmADA1AMQA2AMAGAbQAGAag+APQg+AQhbgBQhagBg5gMg");
	this.shape_12.setTransform(111.7,83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#47C059").s().p("AAHA4QhagBg5gMQg6gMgOgdQgPgaBBgRQBAgRBjAEQBmADA1AMQA2AMAGAbQAGAag+APQg6APhUAAIgLAAg");
	this.shape_13.setTransform(111.7,83.9);

	// Layer 13
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2E853A").ss(1,1,1).p("AGhAAQgRA0h5AWQh5AWimAOQioAOh3ggQh4ghgEgwQgFguCTgZQCSgaC8AHQgygoCQAHQCPAGBGAaQBHAagSA2g");
	this.shape_14.setTransform(-172.1,92.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#47C059").s().p("AknBcQh4ghgEgwQgFguCTgZQCSgaC8AHQgygoCQAHQCPAGBGAaQBHAagSA2QgRA0h5AWQh5AWimAOQgzAEguAAQhrAAhTgWg");
	this.shape_15.setTransform(-172.1,92.4);

	// Layer 12
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,0,0.2)").ss(1.5,1,1).p("AIpiHQAHARAQAGIA2AKQBnANAdARQAWANAAAiIgBAkQgDAMgYADIkvAAIgXACIAGANQAEAKAAAHQAAAfgZAKQgQAHguAAQgZAAj5gyIgvAFQAFARAKAOQAIALAAAFQAAAQgKAMQgMAPgSAAQgaAAgcgbQgZgegJgGIAEAZQAEAWgCAQQgGAyg/AAQgfAAgYgXIgUgWIkBAjQg2AAgOgaQgEgIABgLIABgJIABgXIAVghQhAgWiEgOQgmgEgPgIQgSgLAAgXQAAgfAjgKQAjgLB1gHQAAgCAFgCQgHgLAAgOQAAgRAMgKQASgQAqAAIAsAFIAwAKQAAgbALgLQARgRAyAAIBmANQBYAOAiAKQAAgLAHgNQALgXAaAAQAHAABFAkIBHAlQAgAAAcgdIAngwQATgWAOAMQASAPAYBHIAAABQAOgDBNgpQBAgiBDAAQBMAAAQAUQAIAMgCAUg");
	this.shape_16.setTransform(-13.5,130.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(43,123,54,0.2)").s().p("Ai/CyIgTgWIkCAjQg2AAgNgaQgFgIABgLIABgJIACgXIAUghQhAgWiEgOQgmgEgPgIQgSgLAAgXQAAgfAjgKQAjgLB1gHQAAgCAGgCQgIgLAAgOQAAgRAMgKQATgQAqAAIArAFIAwAKQAAgbALgLQARgRAzAAIBlANQBZAOAiAKQgBgLAHgNQAMgXAZAAQAHAABFAkIBHAlQAgAAAcgdIAngwQATgWAPAMQARAPAYBHIAAABQAOgDBNgpQBAgiBDAAQBMAAAPAUQAJAMgCAUQAGARARAGIA2AKQBmANAeARQAWANAAAiIAAAkQgEAMgZADIkuAAIgXACIAGANQAEAKAAAHQAAAfgYAKQgSAHgtAAQgZAAj5gyIgvAFQAFARAKAOQAIALAAAFQAAAQgKAMQgMAPgSAAQgZAAgdgbQgZgegJgGIAEAZQAEAWgCAQQgGAyg/AAQgfAAgYgXg");
	this.shape_17.setTransform(-13.5,130.4);

	// Layer 11
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2E853A").ss(1.5,1,1).p("AFYCHQDIA7A0gFQBWgWBOgcQEvhuAQh0QAPh2kugrQkugsmoAaIsXAvQlyAWARCSQARCQFBBmQFABlG1gYQCngJCZgXQBPgJiLg/QiLg+ADgPQACgQDJA8g");
	this.shape_18.setTransform(-12.6,132.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#47C059").s().p("ArkDDQlBhmgRiQQgRiSFygWIMXgvQGogaEuAsQEuArgPB2QgQB0kvBuQhOAchWAWQg0AFjIg7QjJg8gCAQQgDAPCLA+QCLA/hPAJQiYAXioAJQhRAFhQAAQlRAAkDhSg");
	this.shape_19.setTransform(-12.6,132.8);

	// Layer 10
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.102)").ss(2,1,1).p("AEzgpIACAGQAJAkhaAVQhbAWiGgCQiEgBhUgRQhGgNgagb");
	this.shape_20.setTransform(112.5,90.3);

	// Layer 9
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.2)").ss(2,1,1).p("AD7grQANALADANQAHAfhMATQhNAShxgBQhvgBhHgOQhHgPgSggQgKgTAVgP");
	this.shape_21.setTransform(111.7,86.4);

	// Layer 8
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.102)").ss(2,1,1).p("AF4iOQA3AKAnAPQBbAigXBIQgXBGicAeQicAdjXATQjZASiagrQiOgogQg5");
	this.shape_22.setTransform(-172.1,95);

	// Layer 7
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.2)").ss(2,1,1).p("AHPhKQAAALgEALQgTA6iGAYQiFAYi2AQQi5APiDgkQiEgjgFgzQgBgUAWgR");
	this.shape_23.setTransform(-172.1,98.5);

	// Layer 6
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.102)").ss(2,1,1).p("An3jNQH/A8DoB9QC7BjBNB/");
	this.shape_24.setTransform(-158.9,151.2);

	// Layer 5
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.2)").ss(2,1,1).p("AqejMIBpAGQLPAvEVCWQCqBbBGBz");
	this.shape_25.setTransform(-187.8,150.8);

	// Layer 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.102)").ss(2,1,1).p("AkOibQgbAqAZAsQA+BqEHBKQBpAdB/AQ");
	this.shape_26.setTransform(144.4,117.6);

	// Layer 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.102)").ss(2,1,1).p("AOjCrQFniKATiTQATiXlvg3QiLgWihgIAoJkxIlmAWQnBAdAUC6QAVC5GFCCQGFCCISgfIAPgB");
	this.shape_27.setTransform(-12.6,134.8);

	// Layer 2
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.2)").ss(2,1,1).p("ALHC5IB1gnQFLh4ARiBQARiClKgwIiYgSAi1keIphAlQmUAZATChQATCfFdBxQESBXFgAE");
	this.shape_28.setTransform(-12.6,135.3);

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0.2)").ss(2,1,1).p("AmRi0QhvBDApBHQA4BhDwBDQDuBDFvgJIA1gB");
	this.shape_29.setTransform(172.6,113.7);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-333.5,78.3,608.7,111.9);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],1.4,-61.2,1.4,111.6).s().p("EgnWAIUIAAwnMBOtAAAIAAQng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-251.9,-53.1,503.9,106.5);


(lib.shape13 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57B6F4").s().p("EgnWAIUIAAwnMBOtAAAIAAQng");
	this.shape.setTransform(0,116.8);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("Ai9E6QiigfilgXQiRgRiNAjQAAgTgDgWQgIg4AEg5QAHh7Amh5IALgcQB2haBshmIAFAAIguCbQAcggArgKIgZBcQAjg2A0gjQBhhCB0gZQhOBcg0BsICCg+IhGB/IB9haIAKAtQAjACAcgUQBPg6BggTQhYBSgtBvQBFgSA2gyIAFAAIgeBiICghiIAFAAQgEA6gaAyIAEAIIANgBQA3gJAkgsQgFAOgBARQgBAZAEAZIAhgTIB/g4QgTBIgkA/QAOgBAKgGIB+hEQAHAigWAVIAAAjIBpgwIgDAKQgIArgYAjIAAAKICCgtIAAAGQgFAigUAZQA4gdA2gOIgCAKQgLAoAIAmQhMAShOALIi9AWIlSAVIgaABQiPAAiRgbg");
	this.shape_1.setTransform(-192,50.6);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.149)").s().p("AgOFBIjNggIjLgPIjKgZQhlgThggmIgohpIAEAAQBFgdBDAmQADgjgOgdIgEgFQA2AFAuAjIAAgtIgjg6QA+geBBAjQAYAMAZAKIAdALIgFhOIAeAAQAhAUAlAPIAPAKIAFAAQgbhghJhFIAAgKQB1AABbBPIAtAnIgNgwIB9AtQAFgbgJgZIgLgmQAzAUAiAnIgPhKQAiASAfAUQAVAOARASIAAAFIASgoIAgAPQgHgSgOgPQgkgngrgcIAegHIAtABQBfAcBaArIgFgNIgNgVIgMgQIAmgFQAZADAXAMQARAIARAHIgFgyQAiAWAcAeIAnApQAGgMgDgNQgIgsgVgnIAjABIA3AMQAgAKAcARIAKAAIgEgiIgGgaIBuA3QgDgwgbgqIBCgEQAxgBAdAlQAcAjAFAsQAGAwAAAuQgDCnAKCqQgsAdg2AKIjXAkIjXAbIjPANg");
	this.shape_2.setTransform(183.7,61);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0C5629").ss(1.5,1,1).p("As1DAQBgAmBlATIDKAZIDLAPIDNAgICNAKIDPgNIDXgbIDXgkQA2gKAsgdQgKiqADinQAAgugGgwQgFgsgcgjQgdglgxABIhCAEQAbAqADAwIhug3IAGAaIAEAiIgKAAQgcgRgggKIg3gMIgjgBQAVAnAIAsQADANgGAMIgngpQgcgegigWIAFAyQgRgHgRgIQgXgMgZgDIgmAFIAMAQIANAVIAFANQhagrhfgcIgtgBIgeAHQArAcAkAnQAOAPAHASIgggPIgSAoIAAgFQgRgSgVgOQgfgUgigSIAPBKQgigngzgUIALAmQAJAZgFAbIh9gtIANAwIACAHAjGhYIgtgnQhbhPh1AAIAAAKQBJBFAbBgIgFAAIgPgKQglgPghgUIgeAAIAFBOIgdgLIgxgWQhBgjg+AeIAjA6IAAAtQgugjg2gFIAEAFQAOAdgDAjIAFABAshDAIgUAAArRBgQhDgmhFAdIgEAAIAoBpIAAge");
	this.shape_3.setTransform(174.2,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E632C").s().p("AgOFBIjNggIjLgPIjKgZQhlgThggmIAUAAIgUAAIAAgeIAAAeIgohpIAEAAQBFgdBDAmIAFABIgFgBQADgjgOgdIgEgFQA2AFAuAjIAAgtIgjg6QA+geBBAjIAxAWIAdALIgFhOIAeAAQAhAUAlAPIAPAKIAFAAQgbhghJhFIAAgKQB1AABbBPIAtAnIACAHIgCgHIgNgwIB9AtQAFgbgJgZIgLgmQAzAUAiAnIgPhKQAiASAfAUQAVAOARASIAAAFIASgoIAgAPQgHgSgOgPQgkgngrgcIAegHIAtABQBfAcBaArIgFgNIgNgVIgMgQIAmgFQAZADAXAMQARAIARAHIgFgyQAiAWAcAeIAnApQAGgMgDgNQgIgsgVgnIAjABIA3AMQAgAKAcARIAKAAIgEgiIgGgaIBuA3QgDgwgbgqIBCgEQAxgBAdAlQAcAjAFAsQAGAwAAAuQgDCnAKCqQgsAdg2AKIjXAkIjXAbIjPANgAs1DAg");
	this.shape_4.setTransform(174.2,51.8);

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0C5629").ss(1.5,1,1).p("AEhgDQgFAOgBARQgBAZAEAZIAhgTIB/g4QgTBIgkA/QAOgBAKgGIB+hEQAHAigWAVIAAAjIBpgwIgDAKQgIArgYAjIAAAKICCgtIAAAGQgFAigUAZQA4gdA2gOIgCAKQgLAoAIAmQhMAShOALIi9AWIlSAVQidADidgdQiigfilgXQiRgRiNAjQAAgTgDgWQgIg4AEg5QAHh7Amh5IAIgZIgBAAArxiUQB2haBshmIAFAAIguCbQAcggArgKIgZBcQAjg2A0gjQBhhCB0gZQhOBcg0BsICCg+IhGB/IB9haIAKAtQAjACAcgUQBPg6BggTQhYBSgtBvQBFgSA2gyIAFAAIgeBiICghiIAFAAQgEA6gaAyIAEAIIANgBQA3gJAkgsIACgHAo4i5IgEAKAr0iRIADgD");
	this.shape_5.setTransform(-181,39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0E632C").s().p("Ai9E6QiigfilgXQiRgRiNAjQAAgTgDgWQgIg4AEg5QAHh7Amh5IALgcQB2haBshmIAFAAIguCbQAcggArgKIgZBcQAjg2A0gjQBhhCB0gZQhOBcg0BsICCg+IhGB/IB9haIAKAtQAjACAcgUQBPg6BggTQhYBSgtBvQBFgSA2gyIAFAAIgeBiICghiIAFAAQgEA6gaAyIAEAIIANgBQA3gJAkgsQgFAOgBARQgBAZAEAZIAhgTIB/g4QgTBIgkA/QAOgBAKgGIB+hEQAHAigWAVIAAAjIBpgwIgDAKQgIArgYAjIAAAKICCgtIAAAGQgFAigUAZQA4gdA2gOIgCAKQgLAoAIAmQhMAShOALIi9AWIlSAVIgaABQiPAAiRgbgAo8ivIAEgKg");
	this.shape_6.setTransform(-181,39.6);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.549)").s().p("ADhSOQhnh6gxiPQhLCFiYBEQjjBkhtA3QhtA3h8iSQgmgugfgwQhvCGhmAzQhtA3h8iSQh8iTgtixIgEgUI2+AAIAAyLQgyhagniMQgniMC6jaQC5jZCcAaQCcAZB4BBIAeAWQApg7B5hkQB5hlB9gDQB9gEB+A9QB9A9ANCpQAMCpgHBBQASgDBFACQBFABBoBiQBpBigfCmQggCngkA+QBSAPBQAsQB3BBg8D1QgIAhgKAgIAFAAQB8ADB4BBQAYAOARAVQCLhpCSADQCRACCUBbQCSBbAWBuQATguBjh1QBih2CqgGQCqgFB3BBQAQAJAMALQACijAyhHQBGhmCQgiQBNgTBtAuIAdiWQAaiHBLgzQBLgyB+ANQB8AOBRBgQAvh5A5glQBZg5CEAfQBLASBRBhQANg0BMh5QBLh5CggJQCggKBjBdQBiBdgHE7QgIE4iTA+QiUA+hdA2QhEAmhIhAQhDBbgqBIQg2BdikhMQhYgohLg5Qg8BTgnBDQgyBWiPg6QgkB7gRBbQgXB4jAAJQi/AIiohIQh6g0guioQg8Dyh2CWQh3CWhtA3QgeAPgfAAQhSAAhahqg");
	this.shape_7.setTransform(-3,0.2);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],-2,-123.1,-6.9,204.8).s().p("EgnVAXlMAAAgvJMBOrAAAMAAAAvJg");
	this.shape_8.setTransform(-1.8,-20.9);

	// Layer 1
	this.shape_9 = new lib.image12(); 
	this.shape_9.setTransform(-250, -170);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300.9,-171.9,595.7,342.1);


(lib.shape9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgGAGAAQAIAAAFAGQAGAGgBAGQABAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape.setTransform(-5.1,2.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1,3,true).p("AAAAkQgOAAgLgLQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAg");
	this.shape_1.setTransform(-5.3,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgZAZQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLg");
	this.shape_2.setTransform(-5.3,2.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-0.7,7.4,7.4);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.8)").ss(1,1,1,3,true).p("AAogcQARAMAAAQQAAARgRAMQgQANgYAAQgWAAgRgNQgRgMAAgRQAAgQARgMQARgNAWAAQAYAAAQANg");
	this.shape.setTransform(0.8,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgnAdQgRgMAAgRQAAgQARgMQARgNAWAAQAYAAAQANQARAMAAAQQAAARgRAMQgQAMgYAAQgWAAgRgMg");
	this.shape_1.setTransform(0.8,0.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-3.4,11.5,8.4);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1,3,true).p("ABDgEQABAMgTAMQgTANgcADQgaACgUgJQgUgJgCgPQgBgNATgMQASgNAcgCQAbgCAUAIQAUAKACAPg");
	this.shape.setTransform(6.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgrAdQgVgJgCgPQgBgNATgMQASgNAcgCQAbgCAUAIQAUAKABAPQACAMgTAMQgTANgcADIgHAAQgWAAgQgHg");
	this.shape_1.setTransform(6.6,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-3.7,13.4,7.4);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1,3,true).p("AAbAYQgSAVgTAHQgWAIgLgKQgLgJAFgXQAFgTASgVQATgWATgIQAVgHALAKQALAKgFAVQgEAUgTAWg");
	this.shape.setTransform(3.7,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgrAyQgLgJAFgXQAFgTASgVQATgWATgIQAVgHALAKQALAKgFAVQgEAUgTAWQgSAVgTAHQgKAEgHAAQgKAAgGgGg");
	this.shape_1.setTransform(3.7,-5.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-10.8,10.5,11.3);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1,3,true).p("AAygTQASANgBANQgCAPgVAIQgVAJgZgDQgcgDgSgNQgTgNACgNQABgOAVgJQAUgJAaADQAcADATANg");
	this.shape.setTransform(6.3,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgCAkQgcgDgSgNQgTgNACgNQABgOAVgJQAUgJAaADQAcADATANQASANgBANQgCAPgVAIQgPAHgUAAIgLgBg");
	this.shape_1.setTransform(6.3,1.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-2,13.4,7.5);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1,3,true).p("AAXAbQgWASgUAFQgVAFgKgMQgKgLAIgWQAIgSAWgSQAVgSAUgFQAWgEAKALQAKAMgJAUQgIATgVASg");
	this.shape.setTransform(4.9,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgyArQgKgLAIgWQAIgSAWgSQAVgSAUgFQAWgEAKALQAKAMgJAUQgIATgVASQgWASgUAFIgMABQgMAAgHgIg");
	this.shape_1.setTransform(4.9,-4.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-9.5,11.4,10.4);


(lib.sprite40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite36 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape37("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,15,15);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-10,17.8,20.2);


(lib.sprite24 = function() {
	this.initialize();

	// Layer 1
	this.inner = new lib.sprite25();
	this.inner.setTransform(-9.9,0);

	this.addChild(this.inner);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-10,17.8,20.2);


(lib.sprite22 = function() {
	this.initialize();
  var self = this;
	// Layer 2
	this.pupil = new lib.sprite24();
	this.pupil.setTransform(-2.9,-1.4,0.9,0.9);

	// Layer 1
	this.instance = new lib.shape23("synched",0);
  this.on("tick",  function ()
  {
    rad = Math.atan((stage.mouseY/ratio - _root.mouth.y - self.y * _root.mouth.scaleY) / (stage.mouseX/ratio - _root.mouth.x - self.x * _root.mouth.scaleX));
    degrees = 180 * rad / 3.141593E+000;
    if (stage.mouseX/ratio - _root.mouth.x - self.x * _root.mouth.scaleX >= 0)
    {
        degrees = degrees + 180;
    } // end if
    self.pupil.rotation = degrees;
    self.pupil.inner.rotation = -degrees;
  });
	this.addChild(this.instance,this.pupil);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-31.6,60.6,65.2);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,236);


(lib.sprite14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape15("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-251.9,-53.1,503.9,106.5);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape16("synched",0);

	// Layer 2
	this.instance_1 = new lib.sprite14();
	this.instance_1.setTransform(0,116.8,1,1,180);
	this.instance_1.alpha = 0.5;

	// Layer 1
	this.instance_2 = new lib.shape13("synched",0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-333.5,-171.9,628.3,362.2);


(lib.sprite3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape4("synched",0);

	this.instance_1 = new lib.shape5("synched",0);

	this.instance_2 = new lib.shape6("synched",0);

	this.instance_3 = new lib.shape7("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-9.5,11.4,10.4);


(lib.sprite2Fly = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.shape9("synched",0);

	// Layer 3
	this.instance_1 = new lib.sprite3();
	this.instance_1.setTransform(0.1,-1.5);

	// Layer 2
	this.instance_2 = new lib.shape8("synched",0);

	// Layer 1
	this.instance_3 = new lib.sprite3();
	this.instance_3.setTransform(0.1,-1.5,0.773,1,0,0,180);
  
  function caught(evt)
  {
    self.x = _root.tip.x + offsetX;
    self.y = _root.tip.y + offsetY;
    if (_root.extend == false && _root.retract == false)
    {
        _root.updateScore();
        _root.files.removeChild(self);
        evt.remove();
        delete self;
    } // end if
  } // End of the function
  function pickTarget()
  {
    ++i;
    goalX = Math.random() * 500;
    goalY = Math.random() * 150;
    turn = Math.random() * 8 + 8;
    targetSpeed = Math.random() * 9 + 1;
  } // End of the function
  function fly(evt)
  {
    if (_root.tongue.hitTest(_root.files.x +  self.x - _root.tongue.x , _root.files.y +  self.y - _root.tongue.y))
    {
        evt.remove();
        offsetX = self.x - _root.tip.x;
        offsetY = self.y - _root.tip.y;
        self.on("tick",  caught);
    } // end if
    if (self.x >= goalX)
    {
        self.scaleX = scale;
    }
    else
    {
        self.scaleY = -scale;
    } // end else if
    speed = speed + (targetSpeed - speed) / 12;
    targetRad = Math.atan2(goalY - self.y, goalX - self.x);
    targetAngle = targetRad * 180 / 3.141593E+000;
    delX = self.x - goalX;
    delY = self.y - goalY;
    distance = Math.sqrt(delX * delX + delY * delY);
    curAngle = rotation;
    delAngle = targetAngle - curAngle;
    if (delAngle >= -180)
    {
        if (delAngle > 180)
        {
            delAngle = delAngle - 360;
        } // end if
    }
    else
    {
        delAngle = delAngle + 360;
    } // end else if
    if (distance < 50)
    {
        pickTarget();
    }
    else if (Math.abs(delAngle) >= turn)
    {
        if (delAngle >= 0)
        {
            rotation = rotation + turn;
        }
        else
        {
            rotation = rotation - turn;
        } // end else if
    }
    else
    {
        rotation = targetAngle;
    } // end else if
    rad = rotation * 3.141593E+000 / 180;
    self.x = self.x + speed * Math.cos(rad);
    self.y = self.y + speed * Math.sin(rad);
   } // End of the function
   var self = this;
   var goalX;
   var goalY;
   var rotation = Math.random() * 360;
   var speed = Math.random() * 9 + 1;
   var targetSpeed = Math.random() * 9 + 1;
   var targetAngle = 0;
   var i = 0;
   var scale = this.scaleX = this.scaleY = (Math.random() * 40 + 60)/100;
   pickTarget();
   this.on("tick", fly);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-11.1,19.7,17.8);


(lib.sprite27 = function() {
	this.initialize();
  var self = this;
	// Layer 2
	this.pupil = new lib.sprite24();
	this.pupil.setTransform(0,0,0.9,0.9);

	// Layer 1
	this.instance = new lib.shape28("synched",0);
  this.on("tick", function ()
  {
    rad = Math.atan((stage.mouseY/ratio - _root.mouth.y - self.y * _root.mouth.scaleY) / (stage.mouseX/ratio - _root.mouth.x - self.x * _root.mouth.scaleX));
    
    degrees = 180 * rad / 3.141593E+000;
    if (stage.mouseX/ratio - _root.mouth.x - self.x * _root.mouth.scaleX >= 0)
    {
        degrees = degrees + 180;
    } // end if
    self.pupil.rotation = degrees;
    self.pupil.inner.rotation = -degrees;
  });

	this.addChild(this.instance,this.pupil);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.7,-31.1,60.1,64);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound29");
	}
	this.frame_7 = function() {
		playSound("sound33");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(6));

	// Layer 6
	this.instance = new lib.sprite27();
	this.instance.setTransform(47.8,-179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(12));

	// Layer 5
	this.instance_1 = new lib.shape32("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({startPosition:0,_off:false},0).wait(8));

	// Layer 4
	this.instance_2 = new lib.sprite22();
	this.instance_2.setTransform(12.2,-186.6);

	this.instance_3 = new lib.shape31("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).to({state:[]},4).wait(8));

	// Layer 3
	this.instance_4 = new lib.shape30("synched",0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0,_off:false},0).to({_off:true},1).wait(12));

	// Layer 2
	this.instance_5 = new lib.shape21("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(13));

	// Layer 1
	this.instance_6 = new lib.shape20("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-219.9,334.4,311.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;