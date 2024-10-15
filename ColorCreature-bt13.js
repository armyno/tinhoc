(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.ColorCreature = function() {
	this.initialize();

	// Layer 13
	this.instance = new lib.shape82("synched",0);
	this.instance.setTransform(451.1,15);

	// Layer 11
	this.instance_1 = new lib.sprite78();

	// Layer 10
	this.brush = new lib.sprite73();
	this.brush.setTransform(474.9,261.7);

	// Layer 9
	this.hand = new lib.sprite69();
	this.hand.setTransform(436.6,291.2);
  
	// Layer 8
	this.palette = new lib.sprite65();
	this.palette.setTransform(74.3,287.8);
  
	// Layer 7
	this.head = new lib.sprite56();
	this.head.setTransform(250,123);
  this.head.eye2.globalX = this.head.x + this.head.eye2.x; 
  this.head.eye2.globalY = this.head.y + this.head.eye2.y;
  this.head.eye1.globalX = this.head.x + this.head.eye1.x; 
  this.head.eye1.globalY = this.head.y + this.head.eye1.y;
	// Layer 6
	this.body = new lib.sprite21();
	this.body.setTransform(250,313,1,1,90);

  this.body.eye.globalX = this.body.x - this.body.eye.y;
  this.body.eye.globalY = this.body.y + this.body.eye.x;

	// Layer 5
	this.groundShadow = new lib.sprite19();
	this.groundShadow.setTransform(250,316);

	// Layer 4
	this.plate = new lib.sprite15();
	this.plate.setTransform(247.9,316.9);

	// Layer 3
	this.floor = new lib.sprite11();
	this.floor.setTransform(249,300.5);

	// Layer 2
	this.bg = new lib.sprite7();
	this.bg.setTransform(249,140.5);


	// Layer 1
	this.bg2 = new lib.sprite4();
	this.bg2.setTransform(249,140.5);
  
  var self = this;
  function releaseMouse()
  { 
    if (springing)
    {
        sndSpring = playSound("sound3spring"); //.start();
    } // end if
    self.hand.gotoAndStop(0); //prevFrame();
    moving = false;
    kAngle = 4.000000E-001;
    dampAngle = 7.000000E-001;
    
  } // End of the function
  function selectHand()
  {
    
    self.sndPick.play();       //.start();
    self.swapChildren(self.hand, self.brush); //hand.swapDepths(brush);
    self.palette.visible = false;
    useHand = true;
    useBrush = false;
    self.cursor = "none"; //Mouse.hide();
    self.hand.removeAllEventListeners("mousedown");   // delete hand.onPress;
    self.brush.x = self.brush.startX;
    self.brush.y = self.brush.startY;
    self.brush.rotation = 0;
    //self.brush.on("mousedown", selectBrush);
    stage.removeAllEventListeners("stagemousemove"); //onEnterFrame;
    stage.on("stagemousemove",  function ()
    {
        self.hand.x = stage.mouseX / ratio;
        self.hand.y = stage.mouseY / ratio;
        self.hand.rotation = -(500 / 2 - stage.mouseX / ratio) / 4;
    });
    
  } // End of the function
  
  
  function selectBrush()
  {
      
    self.sndPick.play();  //.start();
    springing = false;
    self.swapChildren(self.brush, self.hand);  //brush.swapDepths(hand);
    releaseMouse();
    self.palette.visible = true;
    floor = true;
    useBrush = true;
    useHand = false;
    self.cursor = "none"; //Mouse.hide();
    //self.brush.removeEventListener("mousedown", selectBrush);   //delete brush.onPress;
    self.hand.x = self.hand.startX;
    self.hand.y = self.hand.startY;
    self.hand.rotation = 0;
    self.hand.on("mousedown", selectHand);
    stage.removeAllEventListeners("stagemousemove");
    stage.on("stagemousemove",  function ()
    {
        self.brush.x = stage.mouseX / ratio;
        self.brush.y = stage.mouseY / ratio + 4;
        self.brush.rotation = -(500 / 2 - stage.mouseX / ratio) / 4;
    });
    
  } // End of the function
  function movement()
  {
    var delX = stage.mouseX / ratio - self.body.x;
    var delY = stage.mouseY / ratio - self.body.y;
    var radians = Math.atan(delY / delX); 
    if (delX >= 0)
    {
        radians = radians + 3.141593E+000;
    } // end if
    var targetAngle = 180 * radians / 3.141593E+000;
    if (targetAngle <= 140)
    {
        if (targetAngle < 40)
        {
            targetAngle = 40;
        } // end if
    }
    else
    {
        targetAngle = 140;
    } // end else if
    if (!moving)
    {
        velAngle = velAngle + (90 - angle) * kAngle;
    }
    else
    {
        velAngle = velAngle + (targetAngle - angle) * kAngle;
    } // end else if
    velAngle = velAngle * dampAngle;
    angle = angle + velAngle;  
    self.body.rotation = angle;  
    var radians2 = 3.141593E+000 * angle / 180;
    self.body.spring1.rotation = 90 - angle;
    self.body.spring2.rotation = (90 - angle) / 2;
    self.body.leg.rotation = 135 - angle * 1.500000E+000;
    spring(self.head, self.body.x - dist * Math.cos(radians2), self.body.y - dist * Math.sin(radians2), 1, 4.000000E-001);
    self.groundShadow.x = self.body.x - dist * Math.cos(radians2) / 2;
  } // End of the function
  function spring(clip, targetX, targetY, k, damp)
  {
    clip.accelX = (targetX - clip.x) * k;
    clip.accelY = (targetY - clip.y) * k;
    clip.velX = clip.velX + clip.accelX;
    clip.velY = clip.velY + clip.accelY;
    clip.velX = clip.velX * damp;
    clip.velY = clip.velY * damp;
    clip.x = clip.x + clip.velX;
    clip.y = clip.y + clip.velY;
    clip.speed = Math.sqrt(clip.velX * clip.velX + clip.velY * clip.velY);
    clip.rotation = -clip.accelX / 2;
  } // End of the function
  function changeColor(clip)
  {
    //setPaintColor = new Color(clip.shape);
    //setPaintColor.setRGB(curColor);
    clip.shape.filters = [new cjs.ColorFilter(0, 0, 0 , 1, self.curColorR, self.curColorG, self.curColorB, 0)];
    clip.shape.cache(clip.shape.nominalBounds.x, clip.shape.nominalBounds.y, clip.shape.nominalBounds.width, clip.shape.nominalBounds.height);
    
  } // End of the function
  //loadMovie("/flash/GameController.swf", "GameEndClip");
  var self = _root = this;
  this.GameWon = false;
  this.cursor = ""; //Mouse.show();
  var angle = 90;
  var targetAngle = 90;
  var velAngle = 0
  this.head.velX = this.head.velY = 0; 
  var dist = 190;
  var useBrush = false;
  var useHand = true;
  var moving = false;
  var kAngle = 4.000000E-001;
  var dampAngle = 8.000000E-001;
  this.curColorR = 210; this.curColorG = 68; this.curcolorB = 68;
  var lineWidth = 10;
  this.brush.startX = this.brush.x;
  this.brush.startY = this.brush.y;
  this.hand.startX = this.hand.x;
  this.hand.startY = this.hand.y;
  var springing = true;
  var floor = false;
  //border.swapDepths(100000);
  //GameEndClip.swapDepths(200000);
  this.sndPick = playSound("sound2pick"); this.sndPick.stop();
  this.sndPaint = playSound("sound1splat"); this.sndPaint.stop();
  var sndSpring;
  //this.head.eye1.onPress = head.eye2.onPress = head.ear1.onPress = head.ear2.onPress = body.spots.onPress = body.horse.onPress = body.saddle.onPress = body.handle.onPress = body.eye.onPress = floor.onPress = bg.onPress = bg2.onPress = plate.onPress = 
  this.head.eye1.on("mousedown", pressEvent1);
  this.head.eye2.on("mousedown", pressEvent1);
  this.head.ear1.on("mousedown", pressEvent1);
  this.head.ear2.on("mousedown", pressEvent1);
  this.body.spots.on("mousedown", pressEvent1);
  this.body.horse.on("mousedown", pressEvent1);
  this.body.saddle.on("mousedown", pressEvent1);
  this.body.handle.on("mousedown", pressEvent1);
  this.body.eye.on("mousedown", pressEvent1);
  this.floor.on("mousedown", pressEvent1);
  this.bg.on("mousedown", pressEvent1);
  this.bg2.on("mousedown", pressEvent1);
  this.plate.on("mousedown", pressEvent1);
  
  function pressEvent1(evt)
  { 
    if (useBrush && floor)
    {
        self.sndPaint.play();
        changeColor(evt.currentTarget);
    } // end if 
  };
  //this.head.face.onPress = body.leg.onPress = body.belly.onPress = 
  this.head.face.on("mousedown", pressEvent2);
  this.body.leg.on("mousedown", pressEvent2);
  this.body.belly.on("mousedown", pressEvent2);
  function pressEvent2()
  {
    if (useBrush)
    {
        self.sndPaint.play(); //.start();
        changeColor(self.head.face);
        changeColor(self.body.leg);
        changeColor(self.body.belly);
    } // end if
  };

  this.body.spring1.on("mousedown", pressEvent3);
  this.body.spring2.on("mousedown", pressEvent3);
  this.body.spring3.on("mousedown", pressEvent3);
  function pressEvent3()
  {
    if (useBrush)
    {
        self.sndPaint.play(); //.start();
        changeColor(self.body.spring1);
        changeColor(self.body.spring2);
        changeColor(self.body.spring3);
    } // end if
  };
  
  stage.on("stagemousedown",  function ()
  {
     if(self.brush.hitTest(self.hand.x - self.brush.x, self.hand.y - self.brush.y)){
      selectBrush();
      return;
     }    
    
    kAngle = 6.000000E-001;
    dampAngle = 5.000000E-001;
    if (useHand)
    {
        springing = true;
        self.hand.gotoAndStop(1);   //nextFrame();
        moving = true;
    } // end if
  });
  stage.on("stagemouseup", releaseMouse);
  
  //this.brush.on("mousedown",  selectBrush); 
  this.on("tick", movement);
 
	this.addChild(this.bg2,this.bg,this.floor,this.groundShadow,this.plate,this.body,this.head,this.palette,this.hand,this.brush,this.instance_1,this.instance);
	selectHand();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-9,524,362);


// symbols:
(lib.image81 = function() {
	this.initialize(img.image81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite80 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape82 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image81(); 
	this.shape.setTransform(-45,-7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape79 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag7ASQAXhMAEggQBOAhANA6QANA5g4AhIglAAQgxgJALhAg");
	this.shape.setTransform(2,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-2.1,12.5,18.4);


(lib.shape76 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D24444").s().p("Ag8A4IAAgDQAYhMADggQBPAhANA6IACAUQg0gihFAig");
	this.shape.setTransform(0.1,-3.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-9.1,12.3,11.3);


(lib.shape74 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgsAFQAsgUAtAU");
	this.shape.setTransform(2.3,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAuhlIAAAIQgCA3gKBfQgJBhAGBXQgcAcgPgeQAAhNgLhfIgSiJIgDgfQgHhuAfgmQASgIARAIQAXAVAFAsQADAhAAAyg");
	this.shape_1.setTransform(2.3,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgsBLQgHhrAfgmQASgJARAJQAXAUAFAtQADAeAAAyQgugVgsAVg");
	this.shape_2.setTransform(2.3,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7763C").s().p("AgNCpQABhNgMhdIgSiLIgCggQAsgVAtAVIAAAIQgCA3gJBiQgKBfAHBWQgOAOgLAAQgKAAgJgPg");
	this.shape_3.setTransform(2.3,48.1);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("Ag7ASQAXhMAEggQBOAhANA6QANA5g4AhIglAAQgxgJALhAg");
	this.shape_4.setTransform(2,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgVBbQgxgJALhAQAXhMAEggQBOAhANA6QANA5g4Ahg");
	this.shape_5.setTransform(2,7);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,255,0,0)").s().p("AkIGYIAAswIIQAAIAAMwg");
	this.shape_6.setTransform(2.2,31.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-9.2,53,81.8);


(lib.shape72 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("AARjOQgKAAgHAIQgGAHAAALIAACKIgNAGIgYh1QgDgKgIgGQgJgGgLACQgKADgGAJQgGAIADALIAcCNQABAHgDAOIgFAdIgBAPIgNAJIg7gwQgKgIgNABQgMABgIAKQgIAKABANQACAMAEADQA1AgAmAqIARAYQANAOATALQAUAMAcAEQAaAEAogKQAogJAPgpQAOgqAAgvQAAgHACgDIAEgMIA2hzQAEgJgDgJQgEgJgIgEIgSAAQgJADgEAIIgpBZIgHgJIgBgBIAfiCQACgKgFgIQgGgJgJgCIgBgBIgSADQgJAGgCAJIgbByIgQgDIAAiEQAAgLgHgHQgIgIgKAAg");
	this.shape.setTransform(-0.9,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF66").s().p("AgBDOQgcgEgUgMQgTgLgNgOIgRgYQgmgqg1ggQgEgDgCgMQgBgNAIgKQAIgKAMgBQANgBAKAIIA7AwIANgJIABgPIAFgdQADgOgBgHIgciNQgDgLAGgIQAGgJAKgDQALgCAJAGQAIAGADAKIAYB1IANgGIAAiKQAAgLAGgHQAHgIAKAAIABAAQAKAAAIAIQAHAHAAALIAACEIAQADIAbhyQACgJAJgGIASgDIABABQAJACAGAJQAFAIgCAKIgfCCIABABIAHAJIAphZQAEgIAJgDIASAAQAIAEAEAJQADAJgEAJIg2BzIgEAMQgCADAAAHQAAAvgOAqQgPApgoAJQgdAHgWAAIgPgBg");
	this.shape_1.setTransform(-0.9,-6.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.6,39.3,41.5);


(lib.shape71 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0)").s().p("AkgETIAAokIJBAAIAAIkg");
	this.shape.setTransform(3.4,-9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-37.1,58,55);


(lib.shape70 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("AARjOQgKAAgHAIQgGAHAAALIAACKIgNAGIgYh1QgDgKgIgGQgJgGgLACQgKADgGAJQgGAIADALIAcCNQABAHgDAOIgFAdIgBAPIgNAJIg7gwQgKgIgNABQgMABgIAKQgIAKABANQACAMAEADQA1AgAmAqIARAYQANAOATALQAUAMAcAEQAaAEAogKQAogJAPgpQAOgqAAgvQAAgHACgDIAEgMIA2hzQAEgJgDgJQgEgJgIgEIgSAAQgJADgEAIIgpBZIgHgJIgBgBIAfiCQACgKgFgIQgGgJgJgCIgBgBIgSADQgJAGgCAJIgbByIgQgDIAAiEQAAgLgHgHQgIgIgKAAg");
	this.shape.setTransform(-0.9,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBDOQgcgEgUgMQgTgLgNgOIgRgYQgmgqg1ggQgEgDgCgMQgBgNAIgKQAIgKAMgBQANgBAKAIIA7AwIANgJIABgPIAFgdQADgOgBgHIgciNQgDgLAGgIQAGgJAKgDQALgCAJAGQAIAGADAKIAYB1IANgGIAAiKQAAgLAGgHQAHgIAKAAIABAAQAKAAAIAIQAHAHAAALIAACEIAQADIAbhyQACgJAJgGIASgDIABABQAJACAGAJQAFAIgCAKIgfCCIABABIAHAJIAphZQAEgIAJgDIASAAQAIAEAEAJQADAJgEAJIg2BzIgEAMQgCADAAAHQAAAvgOAqQgPApgoAJQgdAHgWAAIgPgBg");
	this.shape_1.setTransform(-0.9,-6.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.6,39.3,41.5);


(lib.shape68 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,255,0,0)").s().p("AipCqIAAlTIFTAAIAAFTg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,34,34);


(lib.shape66 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.749)").ss(3,1,1).p("AECkAQAmAmAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmQgmgmAAg2QAAg2AmgmQAmgmA2AAQA2AAAmAmgAFxikQAAg2AmgmQAmgmA2AAQA2AAAmAmQAmAmAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmQgmgmAAg2gAJPBIQAmAnAAA2QAAA2gmAlQgmAng2AAQg2AAgmgnQgmglAAg2QAAg2AmgnQAmgmA2AAQA2AAAmAmgABKBIQAmgmA2AAQA2AAAmAmQAmAnAAA2QAAA2gmAlQgmAng2AAQg2AAgmgnQgmglAAg2QAAg2AmgngAnykmQA2AAAmAmQAmAmAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmQgmgmAAg2QAAg2AmgmQAmgmA2AAgAhJkAQAmAmAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmQgmgmAAg2QAAg2AmgmQAmgmA2AAQA2AAAmAmgAmWEAQgmAng2AAQg2AAgmgnQgmglAAg2QAAg2AmgnQAmgmA2AAQA2AAAmAmQAmAnAAA2QAAA2gmAlgAhJBIQAmAnAAA2QAAA2gmAlQgmAng2AAQg2AAgmgnQgmglAAg2QAAg2AmgnQAmgmA2AAQA2AAAmAmg");
	this.shape.setTransform(4.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AGXEBQgmgmAAg2QAAg2AmgnQAmglA2gBQA2ABAmAlQAmAnAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmgABKEBQgmgmAAg2QAAg2AmgnQAmglA2gBQA2ABAmAlQAmAnAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmgAkBEBQgmgmAAg2QAAg2AmgnQAmglA2gBQA2ABAmAlQAmAnAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmgApOEBQgmgmAAg2QAAg2AmgnQAmglA2gBQA2ABAmAlQAmAnAAA2QAAA2gmAmQgmAmg2AAQg2AAgmgmgAGXhIQgmgmAAg1QAAg3AmglQAmgnA2AAQA2AAAmAnQAmAlAAA3QAAA1gmAmQgmAmg2AAQg2AAgmgmgABKhIQgmgmAAg1QAAg3AmglQAmgnA2AAQA2AAAmAnQAmAlAAA3QAAA1gmAmQgmAmg2AAQg2AAgmgmgAkBhIQgmgmAAg1QAAg3AmglQAmgnA2AAQA2AAAmAnQAmAlAAA3QAAA1gmAmQgmAmg2AAQg2AAgmgmgApOhIQgmgmAAg1QAAg3AmglQAmgnA2AAQA2AAAmAnQAmAlAAA3QAAA1gmAmQgmAmg2AAQg2AAgmgmg");
	this.shape_1.setTransform(4.7,4.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.2,-24.7,125.9,59);


(lib.shape64 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ak5IEQhmgohWhPQirieAAjfQAAjeCrieQAugqAygfQAdgRAegOQA0gYA4gNQBHgRBQAAIBLAEQBDAHA/AWQAoAOAmAUQBEAjA8A4QB2BtAlCMIABAAIBpgHIAAAAIAoAEIAEACIADABQAbAKAJAdIAEAXQACAugkBFQgtBZhVBiQhOBbhPA9QhuBUh4AmAHghzQAVA9AAA/IBigoAoeABQgDAkAaAcQAWAaAuATQBfApCjACQCtABDDgrQCBgdB8gtIBJgcApKgQIAMgOQAYgUAeAUIARAO");
	this.shape.setTransform(0,3.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-48.7,134.6,104.8);


(lib.shape63 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkoH5QhwgnhchVQirieAAjfQAAjeCrieQCrifDyAAQDwAACsCfQB2BtAlCLIBpgHQBFgCAPAxQAPAxgtBYQgtBahVBiQhPBbhPA9QhtBTh4AnQhmAghrABQhwAAhhgjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-53.9,134.6,108);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABjgQQAaAdAJAhIggAQIgbAQQgTgJgZgJQhKgcg1ASQg3ASAagzQAagxAhgbQAWgSAeAAIAcAEQAxANAkAsg");
	this.shape.setTransform(-0.2,-1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.6,27,15.7);


(lib.shape59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5BaQgRgUhMgcQhKgcg1ASQg3ASAagyQAagyAhgbQAhgbAvANQAxANAkAsQAlArADAzQADAkgJAAQgDAAgGgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.6,27.5,19.3);


(lib.shape55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AixCLQAqhKCehOQgYgKgZgUIAAgBQgnghgMgpIgEgQQgEgeARgUQAVgZAqAFQApAFAmAhQAYATAOAXIAMAcIACABIABABQARAJAOATIADADIAAABQAQAXABAYQACAZgRANQgJAHgLABQi4Btg4BCAB8hgIABACIAAABIAFAYQABAQgGAOAA+gFIgJgBQgPgCgPgF");
	this.shape.setTransform(15.7,-18.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-39.4,35.8,41.4);


(lib.shape54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AixCFQAqhKCehOQgYgKgZgVQgnghgMgpQgNgpAWgZQAVgZAqAFQApAFAmAhQAmAfAMAnIABADIACgBQARAJAOATQATAZABAaQACAZgRANQgJAHgLABQjHB2gyBEIgPABQg5AAABhPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.8,-21.2,35.8,42.6);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGWA9IgdARQhQAuhZATIgIgRQgJggAXggQAYggArgMQAqgNAlANQAjANALAegAjbBnQhmgohUhBIAFgJQATgcAngDQAngDAlAZQAmAWANAlQANAkgRAcgAjfg5QgVgbAIgdQAIgcAggNIBFgCQAlAKAVAbQAVAcgIAcQgIAdggAMIhFADQglgLgVgbgACjhcQAeADATARQAUASgDAXQgCAWgWAMQgXAOgdgDQgegDgUgQQgTgSACgWQACgXAXgOQAWgNAeADgAhjAiQAtgbA5AGQA7AGAnAkQAnAkgEAtIgEATQhkAJhtgVIhHgRIAAgTQAEgtAtgcg");
	this.shape.setTransform(-24.9,63.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,47.6,81.3,31.6);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNCPIhHgRIAAgTQAEgtAtgcQAtgbA5AGQA7AGAnAkQAnAkgEAtIgEATQgeACgfAAQhHAAhNgOgADIB+QgJggAXggQAYggArgMQAqgNAlANQAjANALAeIgdARQhQAuhZATgAmVgCIAFgJQATgcAngDQAngDAlAZQAmAWANAlQANAkgRAcQhmgohUhBgACZAOQgegDgUgQQgTgSACgWQACgXAXgOQAWgNAeADQAeADATARQAUASgDAXQgCAWgWAMQgTAMgXAAIgKgBgAjfg5QgVgbAIgdQAIgcAggNIBFgCQAlAKAVAbQAVAcgIAcQgIAdggAMIhFADQglgLgVgbg");
	this.shape.setTransform(0,0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-15.4,81.3,31.6);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHSjgIAQARIARATQBCBQAfBVQAkBkgNBtQgLBXgpBGQgfA2gxAtQgqAmg2AfQjIBxj/gxQjYgpiViJIg1g3Qg3g+ghhBQgphRgIhUQgFgyAGgyQAbjTDIhyQAygdA2gSIASgnQAfg7ApgnQARgQASgMIACgBIAAgBIABAKIACAQQADAhAJAeQAHAYALAXQAQAjAYAhIAMAOIAEAFIAWAYIAXAVIAUAQIAqglQATgNASgHQApgQAgARIAUAQQAaAcAAA6QAAAagFAbQgHAlgQAnQAPAUAZALQAoARAogQIAAAAQAogQARgnQARgogQgoIgHgQIAngOIAhgRgAkfmmQAsgPAvgIIBFgIAhugHQgFgUAAgZQAAhOAshVQAYgsAdghIAMgNACkiCIgQAhIgVAlIgIAL");
	this.shape.setTransform(-26.2,20.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-38.9,124.6,118.1);


(lib.shape46 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAI/QkAgxiii4Qiji4AbjQQAbjTDIhyQAygdA2gSIASgnQAthVBAgqIAAgBQAEBJAdA/QAbA8AzAzIAXAVIAUAQQATgWAXgPQATgNASgHQApgQAgARQAtAYABBOQABA+gdBDQAPAUAZALQAoARAogQIAAAAQAogQARgnQARgogQgoIgHgQQAmgMAigTIA7A4IAQARQCjC4gaDRQgLBXgpBGQgfA2gxAtQgqAmg2AfQiMBPinAAQhIAAhMgPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.2,-59,124.6,118.1);


(lib.shape43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABfheQAoAnAAA3QAAA4goAnIgPAOQgjAagtAAQg3AAgngoQgognAAg4QAAg3AognQAhghAtgGIAQgBQA4AAAnAog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,27,27);


(lib.shape42 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAZQgJgLgBgOQABgNAJgMQALgKAOAAQAOAAAKAKQAMAMgBANQABAOgMALQgKALgOgBQgOABgLgLg");
	this.shape.setTransform(-4.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-3.5,7.2,7.2);


(lib.shape40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheBfQgogoAAg3QAAg2AogoQAogoA2AAQA3AAAoAoQAoAoAAA2QAAA3goAoQgoAog3AAQg2AAgogog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,27,27);


(lib.shape37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhIi0QgoAQgRAnQgJAWABAWQApgQAgARQAtAZABBLQABA+gdBDQAPAVAZALQAmARAogQIAAgBQAogQARgnQARgngQgoIhFiqQgQgogngRQgmgRgoAQg");
	this.shape.setTransform(-27.4,-8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,-27,27.7,38.1);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGC1QgZgLgPgVQAdhDgBg+QgBhLgtgZQgggRgpAQQgBgWAJgWQARgnAogQIAAgBQAogQAmARQAnARAQAoIBFCqQAQAogRAnQgRAngoAQIAAABQgTAIgTAAQgVAAgTgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.8,-19,27.7,38.1);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AjrkUQASgKAVgFQBSgSBNBIQAXAWARAaIALgDQBKgRA/AmQBAAmAQBGQAQBFgqA9QgpA9hLARIgbAFIgJAZQgnBjhQASQgiAIgigJQAphGALhXQAajRiji4g");
	this.shape.setTransform(21.6,25.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-4.3,47.2,59.3);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGEjQAphGALhXQAajRiji4IgQgRQASgKAVgFQBSgSBNBIQAXAWARAaIALgDQBKgRA/AmQBAAmAQBGQAQBFgqA9QgpA9hLARIgbAFIgJAZQgnBjhQASQgQAEgRAAQgRAAgSgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-29.5,47.2,59.3);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABSkYIAIgZQAHgaAEgcIADgzQAAiHhShlQAXA6AABEQAABcgrBLQgMAZgTAXIgYAaIgGAFQgVAVgYAQABllnQBWAIBeA2QC7BrBrDgQBrDigkDVQgjDUieBLQidBLi7hrQg/gkgzgxQAvgtAfg2QAphGALhXQAajTihi2IgQgRIg7g4QgiATgmAMIAHAQQAQAmgRAoQgRAngoAQIAAAAQgoAQgogRQgZgLgPgUQAdhDgBg8QgBhOgtgYQgggRgpAQQgSAHgTANQgXAPgVAWIgUgQIgXgVQgzgzgbg8Qgdg/gEhJIAAgWQAAhCATg5QAUg9AqgzIAegiQBvhvCeAAQCdAABvBvIAcAhAg1hkIgGAEIgaAR");
	this.shape.setTransform(0.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.8,-79.1,131.2,158.3);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtLYQg/gkgzgxQAvgtAfg2QAphGALhXQAajTihi2IgQgRIg7g4QgiATgmAMIAHAQQAQAmgRAoQgRAngoAQIAAAAQgoAQgogRQgZgLgPgUQAdhDgBg8QgBhOgtgYQgggRgpAQQgSAHgTANQgXAPgVAWIgUgQIgXgVQgzgzgbg8Qgdg/gEhJIAAgWQAAhCATg5QAUg9AqgzIAegiQBvhvCeAAQCdAABvBvIAcAhQBSBlAACHIgDAzQBWAIBeA2QC7BrBrDgQBrDigkDVQgjDUieBLQhAAfhGAAQhkAAhug/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-79.1,131.2,158.3);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgEhcQgJgNgKAAAAGBoQAGgJAEgSQAHghgEgsQgEgsgNgfIgGgRAggBXQALARAJAFIAIACIABAAQAEAAAFgHAAoDVQAggOAPgxQAVhDgIhZQgIhaggg+QgWgsgZgLQgLgFgJABQgNABgMAKIgJAKQgOARgKAgQgFARACAqIABAeIACAWQAKBTATAhIAEAHAhBgkQglAGABBGQACBHAiA3QAIAOAKAKQAKAMAMAGQAOAIAPACIAMAAIAYgF");
	this.shape.setTransform(6.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AAjCbQgRgBgOgJQgKgGgKgMQgKgJgIgOQgig3gChFQgBhJAlgGQAKBVATAfIAEAIQAJAQAJAFIAIADIABAAQAGgBAFgHQgFAHgGABIgBAAIgIgDQgJgFgJgQQArhEgRhvIAIARQANAeAEAtQAEAugHAfQgEASgGAIQgKA9AsAwIgYAGg");
	this.shape_1.setTransform(3.5,6.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-22,20.5,43.7);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEDZQgPgBgOgIQgMgGgKgMQgKgKgIgOQgig3gChHQgBhGAlgGIgCgWIgBgeQgCgqAFgSQAKgfAOgRIAJgKQAMgKANgBIAUADQAZAMAWArQAgA/AIBaQAIBYgVBEQgPAwggAPIgYAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-21.8,20.5,43.7);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,116.2).s().p("AssCbQlRhBAAhaQAAhaFRhAQFRhBHbAAQHcAAFQBBQFRBAABBaQgBBalRBBQlQBBncAAQnbAAlRhBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.9,-22,230,44);


(lib.shape18 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAkAAQAAAFgLAFQgLAFgOAAQgOAAgLgFQgKgFAAgFQAAgGAKgFIAIgD");
	this.shape.setTransform(-34.8,7.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAkgBIAAABQAAAGgKAEQgLAGgPAAQgOAAgKgGQgLgEAAgGQAAgGALgFQAHgDAKgB");
	this.shape_1.setTransform(33.8,7.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAhgCIAAACQAAAFgKAEIgXAFQgMAAgKgFQgKgEAAgFQAAgFAKgFIAIgD");
	this.shape_2.setTransform(37.8,-8.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAhAAQAAAFgKAFQgKAEgNAAQgMAAgKgEQgKgFAAgFQAAgFAKgEIARgE");
	this.shape_3.setTransform(-27.3,-8.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AlMiNIMiACIg3EZIt0gEg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-14.2,94.2,28.5);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVCKICJkXIMiACIg3EZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-14.2,94.2,28.5);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("Ego7AAAMBR3AAA");
	this.shape.setTransform(0,-52.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego6AIMIAAwXMBR1AAAIAAQXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-52.4,524,105);


(lib.shape10 = function() {
	this.initialize();

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape.setTransform(-221.9,0);

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_1.setTransform(-181.6,0);

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_2.setTransform(-141.2,0);

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_3.setTransform(-100.9,0);

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_4.setTransform(-60.5,0);

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_5.setTransform(-20.2,0);

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_6.setTransform(20.1,0);

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_7.setTransform(60.5,0);

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_8.setTransform(100.8,0);

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_9.setTransform(141.2,0);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_10.setTransform(181.5,0);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.251)").ss(2,1,1).p("AAA3WMAAAAut");
	this.shape_11.setTransform(221.9,0);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AcXXWMAAAgurIGUAAMAAAAurgAPwXWMAAAgurIGUAAMAAAAurgADJXWMAAAgurIGUAAMAAAAurgApcXWMAAAgurIGUAAMAAAAurgA2DXWMAAAgurIGUAAMAAAAurgEgiqAXWMAAAgurIGUAAMAAAAurg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-221.9,-149.4,443.9,299);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAiqAXWMAAAgurIGRAAMAAAAurgAWDXWMAAAgurIGUAAMAAAAurgAJcXWMAAAgurIGTAAMAAAAurgAjJXWMAAAgurIGRAAMAAAAurgAvwXWMAAAgurIGUAAMAAAAurgA8XXWMAAAgurIGTAAMAAAAurgEgo6AXWMAAAgurIGPAAMAAAAurg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-149.4,524,299);


(lib.sprite78 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape79("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite75 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape76("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-9.1,12.3,11.3);


(lib.sprite73 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape77("synched",0);

	// Layer 2
	this.tip = new lib.sprite75();
	this.tip.setTransform(2,7.1);

	// Layer 1
	this.instance_1 = new lib.shape74("synched",0);

	this.addChild(this.instance_1,this.tip,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-9.2,53,81.8);


(lib.sprite69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape71("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

	// Layer 1
	this.instance_1 = new lib.shape70("synched",0);

	this.instance_2 = new lib.shape72("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-37.1,58,55);


(lib.sprite67 = function() {
	this.initialize();
  var self = this;
  
	// Layer 1
	this.instance = new lib.shape68("synched",0);

	this.addChild(this.instance);
	
	this.on("mousedown",  function(){
    self.parent.parent.sndPick.play();   //start();
    self.parent.parent.curColorR = self.paintColorR;
    self.parent.parent.curColorG = self.paintColorG;
    self.parent.parent.curColorB = self.paintColorB;
    //tipColor = new Color(_parent._parent.brush.tip);
    //tipColor.setRGB(paintColor);	
	  self.parent.parent.brush.tip.filters = [new cjs.ColorFilter(0, 0, 0, 1, self.paintColorR, self.paintColorG, self.paintColorB, 0)];
	  self.parent.parent.brush.tip.cache(-6,-9.1,12.3,11.3);
	});
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.9,34,34);


(lib.sprite65 = function() {
	this.initialize();

	// Layer 9
	this.instance = new lib.sprite67();
	this.instance.setTransform(-45.2,21.2);
  this.instance.paintColorR = 136;
  this.instance.paintColorG = 68;
  this.instance.paintColorB = 130;
  this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance.paintColorR, this.instance.paintColorG, this.instance.paintColorB, 0)];
  this.instance.cache(-17,-17,34,34);
  
	// Layer 8
	this.instance_1 = new lib.sprite67();
	this.instance_1.setTransform(-45.2,-11.7);
  this.instance_1.paintColorR = 210;
  this.instance_1.paintColorG = 68;
  this.instance_1.paintColorB = 68;
  this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_1.paintColorR, this.instance_1.paintColorG, this.instance_1.paintColorB, 0)];
  this.instance_1.cache(-17,-17,34,34);
	// Layer 7
	this.instance_2 = new lib.sprite67();
	this.instance_2.setTransform(-11.9,21.2);
  this.instance_2.paintColorR = 247;
  this.instance_2.paintColorG = 155;
  this.instance_2.paintColorB = 72;
  this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_2.paintColorR, this.instance_2.paintColorG, this.instance_2.paintColorB, 0)];
  this.instance_2.cache(-17,-17,34,34);
	// Layer 6
	this.instance_3 = new lib.sprite67();
	this.instance_3.setTransform(-11.9,-11.7);
  this.instance_3.paintColorR = 255;
  this.instance_3.paintColorG = 224;
  this.instance_3.paintColorB = 100;
  this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_3.paintColorR, this.instance_3.paintColorG, this.instance_3.paintColorB, 0)];
  this.instance_3.cache(-17,-17,34,34);
	// Layer 5
	this.instance_4 = new lib.sprite67();
	this.instance_4.setTransform(21.4,21.2);
  this.instance_4.paintColorR = 113;
  this.instance_4.paintColorG = 179;
  this.instance_4.paintColorB = 72;
  this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_4.paintColorR, this.instance_4.paintColorG, this.instance_4.paintColorB, 0)];
  this.instance_4.cache(-17,-17,34,34);
	// Layer 4
	this.instance_5 = new lib.sprite67();
	this.instance_5.setTransform(21.4,-11.7);
  this.instance_5.paintColorR = 102;
  this.instance_5.paintColorG = 153;
  this.instance_5.paintColorB = 204;
  this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_5.paintColorR, this.instance_5.paintColorG, this.instance_5.paintColorB, 0)];
  this.instance_5.cache(-17,-17,34,34);
	// Layer 3
	this.instance_6 = new lib.sprite67();
	this.instance_6.setTransform(54.7,21.2);
  this.instance_6.paintColorR = 170;
  this.instance_6.paintColorG = 170;
  this.instance_6.paintColorB = 170;
  this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_6.paintColorR, this.instance_6.paintColorG, this.instance_6.paintColorB, 0)];
  this.instance_6.cache(-17,-17,34,34);
	// Layer 2
	this.instance_7 = new lib.sprite67();
	this.instance_7.setTransform(54.7,-11.7);
  this.instance_7.paintColorR = 255;
  this.instance_7.paintColorG = 255;
  this.instance_7.paintColorB = 255;
  
  this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, this.instance_7.paintColorR, this.instance_7.paintColorG, this.instance_7.paintColorB, 0)];
  this.instance_7.cache(-17,-17,34,34);
	// Layer 1
	this.instance_8 = new lib.shape66("synched",0);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.2,-28.7,133.9,67);


(lib.sprite62 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape63("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-53.9,134.6,108);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape64("synched",0);

	// Layer 1
	this.shape = new lib.sprite62();
	this.shape.setTransform(0,5.2);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.2,-48.7,134.6,108);


(lib.sprite58 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape59("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.6,27.5,19.3);


(lib.sprite57 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape60("synched",0);

	// Layer 1
	this.shape = new lib.sprite58();

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.6,27.5,19.3);


(lib.sprite53 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape54("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.8,-21.2,35.8,42.6);


(lib.sprite52 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape55("synched",0);

	// Layer 1
	this.shape = new lib.sprite53();
	this.shape.setTransform(15.7,-18.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-39.4,35.8,42.6);


(lib.sprite49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape50("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-15.4,81.3,31.6);


(lib.sprite48 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape51("synched",0);

	// Layer 1
	this.shape = new lib.sprite49();
	this.shape.setTransform(-24.9,63.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,47.6,81.3,31.6);


(lib.sprite45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape46("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.2,-59,124.6,118.1);


(lib.sprite44 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape47("synched",0);

	// Layer 1
	this.shape = new lib.sprite45();
	this.shape.setTransform(-26.3,20.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.6,-38.9,124.6,118.1);


(lib.sprite41 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape42("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-3.5,7.2,7.2);


(lib.sprite39 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape40("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,27,27);


(lib.sprite38 = function() {
	this.initialize();
  this.globalX = 0;
  this.globalY = 0;
	// Layer 3
	this.instance = new lib.shape43("synched",0);

	// Layer 2
	this.pupil = new lib.sprite41();

	// Layer 1
	this.shape = new lib.sprite39();
	var self = this;
  this.on("tick", function(){
    var rad = Math.atan((stage.mouseY / ratio - self.globalY) / (stage.mouseX / ratio - self.globalX));
    var degrees = 180 * rad / 3.141593E+000;
    if (stage.mouseX / ratio - self.globalX >= 0)
    {
        degrees = degrees + 180;
    } // end if
    
    self.pupil.rotation = degrees;
    //self.pupil.inner.rotation = -degrees  
  });
	this.addChild(this.shape,this.pupil,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-13.4,27,27);


(lib.sprite35 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape36("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.8,-19,27.7,38.1);


(lib.sprite34 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape37("synched",0);

	// Layer 1
	this.shape = new lib.sprite35();
	this.shape.setTransform(-27.4,-8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,-27,27.7,38.1);


(lib.sprite31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape32("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-29.5,47.2,59.3);


(lib.sprite30 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape33("synched",0);

	// Layer 1
	this.shape = new lib.sprite31();
	this.shape.setTransform(21.6,25.3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-4.3,47.2,59.3);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-79.1,131.2,158.3);


(lib.sprite26 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape29("synched",0);

	// Layer 1
	this.shape = new lib.sprite27();
	this.shape.setTransform(0.7,0);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.8,-79.1,131.2,158.3);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape24("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-21.8,20.5,43.7);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape25("synched",0);

	// Layer 1
	this.shape = new lib.sprite23();
	this.shape.setTransform(6.6,-0.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-22,20.5,43.7);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 10
	this.leg = new lib.sprite52();
	this.leg.setTransform(-97.9,6.7);

	// Layer 9
	this.spots = new lib.sprite48();
	this.spots.setTransform(-123.4,-23.9);

	// Layer 8
	this.belly = new lib.sprite44();
	this.belly.setTransform(-123.4,-23.9);

	// Layer 7
	this.eye = new lib.sprite38();
	this.eye.setTransform(-131.1,-73.5,1.099,1.099,-89.9);
 
	// Layer 6
	this.handle = new lib.sprite34();
	this.handle.setTransform(-101.1,-23.9);

	// Layer 5
	this.saddle = new lib.sprite30();
	this.saddle.setTransform(-101.1,-23.9);

	// Layer 4
	this.horse = new lib.sprite26();
	this.horse.setTransform(-101.1,-23.9);

	// Layer 3
	this.spring3 = new lib.sprite22();
	this.spring3.setTransform(-37.1,-0.2);

	// Layer 2
	this.spring2 = new lib.sprite22();
	this.spring2.setTransform(-22.1,-0.2);

	// Layer 1
	this.spring1 = new lib.sprite22();
	this.spring1.setTransform(-7.1,-0.2);

	this.addChild(this.spring1,this.spring2,this.spring3,this.horse,this.saddle,this.handle,this.eye,this.belly,this.spots,this.leg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.1,-103.1,221.9,158.4);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape20("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.9,-22,230,44);


(lib.sprite16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape17("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-14.2,94.2,28.5);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape18("synched",0);

	// Layer 1
	this.shape = new lib.sprite16();

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47,-14.2,94.2,28.5);


(lib.sprite12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape13("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-52.4,524,105);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape14("synched",0);

	// Layer 1
	this.shape = new lib.sprite12();

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-52.4,524,105);


(lib.sprite8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-221.9,-149.4,443.9,299);


(lib.sprite7 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape10("synched",0);

	// Layer 1
	this.shape = new lib.sprite8();

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-221.9,-149.4,443.9,299);


(lib.sprite5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-149.4,524,299);


(lib.sprite4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.sprite5();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-261.9,-149.4,524,299);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 5
	this.eye2 = new lib.sprite38();
	this.eye2.setTransform(29.9,-73.4,0.949,0.949);

	// Layer 4
	this.eye1 = new lib.sprite38();
	this.eye1.setTransform(-15.8,-68.9);

	// Layer 3
	this.face = new lib.sprite61();
	this.face.setTransform(10,-54.1);

	// Layer 2
	this.ear2 = new lib.sprite57();
	this.ear2.setTransform(33.2,-103.5,0.999,0.999,0,-17,162.9);

	// Layer 1
	this.ear1 = new lib.sprite57();
	this.ear1.setTransform(-37.8,-100.4);

	this.addChild(this.ear1,this.ear2,this.face,this.eye1,this.eye2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.2,-116.7,134.6,121.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;