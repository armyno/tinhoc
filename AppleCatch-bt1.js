(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.AppleCatch = function() {
	this.initialize();
  _root = this;
	// Layer 11
	this.border = new lib.sprite49();

	// Layer 10
	this.instance = new lib.shape48("synched",0);
	this.instance.setTransform(452,16);

	// Layer 9
	this.starPoints = new lib.sprite38();
	this.starPoints.setTransform(28.1,26);

	// Layer 8
	this.counting = new lib.sprite35();
	this.counting.setTransform(-206.9,56.5);

	// Layer 7
	this.basket = new lib.sprite29();
	this.basket.setTransform(250,306.5);

  var appCon = new cjs.Container();

	// Layer 6
	this.toucan = new lib.sprite17();
	this.toucan.setTransform(254.6,200);

	// Layer 5
	this.instance_1 = new lib.shape16("synched",0);

	// Layer 4
	this.instance_2 = new lib.sprite14();
	this.instance_2.setTransform(252.9,139.7);

	// Layer 3
	this.instance_3 = new lib.shape13("synched",0);

	// Layer 2
	this.instance_4 = new lib.sprite9();
	this.instance_4.setTransform(912.1,156.5,0.5,0.5);

	// Layer 1
	this.instance_5 = new lib.shape8("synched",0);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.toucan, appCon, this.basket,this.counting,this.starPoints,this.instance,this.border);
	
	function grow(evt)
  {
    var self = evt.currentTarget;
    if (self.scaleX >= 0.99)
    {
        self.scaleX = self.scaleY = 1;
        self.on("tick", fall);
        evt.remove();
    }
    else
    {
        if (self.scaleX >= 0.5)
        {
            sndAppear.play();
            sndAppear.on("complete", function ()
            {
                sndFalling.play();
            });
        } // end if
        self.scaleX = self.scaleY = self.scaleY + (1 - self.scaleX) / 2;
    } // end else if
   } // End of the function
   function fall(evt)
   {
    var self = evt.currentTarget;
    self.velY = self.velY + gravity;
    self.x = self.x + self.velX;
    self.y = self.y + self.velY;
    var x1 = _root.toucan.x + _root.toucan.parts.x + _root.toucan.parts.hit.x-self.x
    var y = _root.toucan.y + _root.toucan.parts.y + _root.toucan.parts.hit.y-self.y
    var x2 = _root.toucan.x + _root.toucan.parts.x + _root.toucan.parts.hit.x-self.x-22.3
    var x3 = _root.toucan.x + _root.toucan.parts.x + _root.toucan.parts.hit.x-self.x+22.3
    
    if ((self.hitTest(x1,y) || self.hitTest(x2,y) || self.hitTest(x3,y)) && !holdingFruit && !self.dropping)
    {   
        if(sndFalling) sndFalling.stop();
        sndBite = playSound("sound2bitewav");
        evt.remove(); 
        appCon.removeChild(self);
        holdingFruit = true;
        _root.toucan.parts.fruit.visible = true;
    } // end if
    if (self.y > 336 + 20)
    {
        evt.remove(); 
        appCon.removeChild(self);
    } // end if
    if (_root.basket.hit.hitTest(self.x - (_root.basket.x + _root.basket.hit.x), self.y-(_root.basket.y + _root.basket.hit.y)))
    {
        sndBasket = playSound("sound3basketwav");
        evt.remove(); 
        self.y = 294 - Math.random() * 15;
        if (self.x >= 225)
        {
            if (self.x > 275)
            {
                self.x = 275;
            } // end if
        }
        else
        {
            self.x = 225;
        } // end else if
        ++score;
        _root.starPoints.score();
        _root.basket.scoreFld.text = score;
        
        if (score == 10)
        {
          _root.removeAllEventListeners(); 
          for (var p in appCon.children)
          {
            if (appCon.children[p].hasEventListener("tick"))
            { console.log(score + ", remove apples out of basket");
              appCon.children[p].removeAllEventListeners();
              appCon.removeChild(appCon.children[p]);
            } // end if
          } // end of for...in  
                
        } // end if
    } // end if
  } // End of the function
    
  var GameWon = false;
  var speed = 0;
  var damp = 9.000000E-001;
  var accel = 1;
  var wait = 48;
  var maxWait = 72;
  var fruitCount = 0;
  var gravity = 1;
  var holdingFruit = false;
  var score = 0;
  this.basket.scoreFld.text = String(score);
  sndCountFall = 0;
  var sndBasket;
  var sndBite;
  
  var sndAppear =  playSound("sound4appearwav");sndAppear.stop();
  var sndFalling = playSound("sound1fallingwav"); sndFalling.stop(); 

  this.toucan.parts.fruit.visible = false;
  
  this.on("mousedown",  function ()
  {
    if (holdingFruit)
    {
        holdingFruit = false;
        _root.toucan.parts.fruit.visible = false;
        ++fruitCount;
        _root["fruitDrop" + fruitCount] = new lib.sprite6Fruit();  
        appCon.addChild(_root["fruitDrop" + fruitCount]);
        _root["fruitDrop" + fruitCount].x = _root.toucan.x;
        _root["fruitDrop" + fruitCount].y = _root.toucan.y;
        _root["fruitDrop" + fruitCount].velX = speed / 4;
        _root["fruitDrop" + fruitCount].velY = 0;
        _root["fruitDrop" + fruitCount].dropping = true;
        _root["fruitDrop" + fruitCount].on("tick", fall);
    } // end if
  });
  this.on("tick", function ()
  {
    if (Math.random() * 100 < 1)
    {
        _root.toucan.parts.eyes.play();
    } // end if
    if (stage.mouseX / ratio <= _root.toucan.x)
    {
        _root.toucan.scaleX = -1;
    }
    else
    {
        _root.toucan.scaleX = 1;
    } // end else if
    speed = (stage.mouseX / ratio - _root.toucan.x) / 8;
    _root.toucan.x = _root.toucan.x + speed;
    ++wait;
    if (wait > maxWait)
    {
        wait = 0;
        ++fruitCount;
        _root["fruitDrop" + fruitCount] = new lib.sprite6Fruit();  
        appCon.addChild(_root["fruitDrop" + fruitCount]);

        _root["fruitDrop" + fruitCount].x = Math.random() * (500 - 100) + 50;
        _root["fruitDrop" + fruitCount].y = 50;
        _root["fruitDrop" + fruitCount].velX = 0;
        _root["fruitDrop" + fruitCount].velY = 0;
        _root["fruitDrop" + fruitCount].scaleX = _root["fruitDrop" + fruitCount].scaleY = 0;
        _root["fruitDrop" + fruitCount].on("tick", grow);
    } // end if
  });

	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-225.9,-52.7,1431.5,420.5);


// symbols:
(lib.image47 = function() {
	this.initialize(img.image47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite51 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image47(); 
	this.shape.setTransform(-45,-7.5);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape44 = function() {
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


(lib.shape41 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai8C4IAAlvIF5AAIAAFvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.4,38,37);


(lib.shape32 = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3E5B00").ss(1,1,1).p("ApGApIAbgSQAGgFALgCQAKgCAMAFQAMAGAQAPQAEgeANgKQAMgKAMgBQAMgCAKAJQAKAHAFAcQAOgbAAgEQAAgEARgKQARgKAXANQAYALABArIAPg5QAIggAhAAQAgAAALAjQAGAQAEAaIAagpQAKgTAUAAQATAAAPAOQAOAOAEAeIABAAIABACQAWgxAQgQQARgRAaAGQAZAGAHASQAIARAKAiIATgaQANgPAOAAQAbACAJAOQAHANgCAdIAegrQAWgXATABQAXABARATQANARACARQADgdAVgZQAUgbAXAIQAYAHAOAbQAPAZACAKQAAgGAKgXQAKgVAUACQAVAAAHAMIARAZQAAgHAMgIQAVgPAVACQAVACAYAPIAVAOIAHACAD5ArIAAgDIAAgE");
	this.shape.setTransform(-0.8,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669900").s().p("Ao5CHIgNjHIAbgSQAHgFAKgCQAKgCANAGQALAFAQAPQAEgdANgLQAMgLAMgBQAMgCALAJQAJAIAFAcQAOgaABgFQAAgGARgJQAQgKAXANQAZANAAAqIAPg7QAIggAhABQAgAAALAiQAGATAEAZIAagrQAKgTAUABQATAAAPANQAOAOAEAgIABABIABACQAWgzARgRQAQgQAaAGQAZAGAHARQAIARAKAlIATgbQANgRAOABQAbABAJAQQAHAOgCAdIAegsQAWgYATABQAXABARAVQANAQACARQAEgdATgaQAVgbAXAHQAXAHAPAcQAPAaABAKQABgGAKgWQAKgXAVABQAUABAHAMIARAaQAAgGALgJQAWgRAVACQAUACAZASIAVANIAHADIgPDogAD5hAIAAACIAAgCIAAgFg");
	this.shape_1.setTransform(-0.8,29.4);

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AE8300").ss(1.5,1,1).p("AASiTQAhCThNCU");
	this.shape_2.setTransform(30.1,-3.8);

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AE8300").ss(1.5,1,1).p("AATiRQAWCRhACS");
	this.shape_3.setTransform(21.4,-1);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AE8300").ss(1.5,1,1).p("ABlgTQhlAghkAH");
	this.shape_4.setTransform(27.1,-10.9);

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#AE8300").ss(1.5,1,1).p("ABwgWQhmAxh5gE");
	this.shape_5.setTransform(27.1,-4.9);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AE8300").ss(1.5,1,1).p("AgaiaQgUCiBNCT");
	this.shape_6.setTransform(-20.1,-1.7);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#AE8300").ss(1.5,1,1).p("AggiXQgLC2BOB5");
	this.shape_7.setTransform(-11.2,0);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AE8300").ss(1.5,1,1).p("AiagVQCMA4CqgQ");
	this.shape_8.setTransform(-20.7,-9.9);

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#AE8300").ss(1.5,1,1).p("AiRgVQCRA4CSgS");
	this.shape_9.setTransform(-20.5,-3.4);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.2,-18.7,116.7,63.7);


(lib.shape31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B4500").ss(1.5,1,1).p("AGZhtIABgZQAAhLgXhBIgBAAIABAIQAAAehxAVQhyAVigAAQifAAhygVQgsgJgbgJQgqgPAAgSQgXA9AABHQAACpB4B4QB4B4CpAAQCqAAB4h4QBvhwAIiYgAmCkKIACgIIgBAAQgCADABAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE8300").s().p("AkgCaQh4h3AAipQAAhHAWg9QAAASAqAPQAXB0BZBYQB4B2CoAAQCqAAB4h2QAlgmAagqQgICYhvBvQh4B5iqAAQioAAh4h5gAmCkKQAAgFABgDIABAAIgCAIIAAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9900").s().p("AkJA+QhYhXgXhzQAbAJAsAJQByAVCgAAQCfAABxgVQBygVAAgeIgCgIIABAAQAXBBAABLIAAAZQgaAogmAmQh4B4iqAAQioAAh4h4g");
	this.shape_2.setTransform(3.2,-9.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.9,-27.4,82,55);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F21DE").ss(1.3,1,1).p("ACFgdIgJgJIgXgXIgegdIgkgeIgigYIgmgXIgHgDIgTgEIgaAEQgcAJAAAZQABAZANARIAfAhQASAPATALQANAHARAEIgwgDIgDAAIgvAGQgRAFgIAPIgBACIgCAGQgFATAQARIABABQAOANAaAEIASACIACAAIAegCIAggEQgWAEgTAJQgXAKgCAXQgBAKAFAGQADAGAJADIAcAFIATgBIAMgCIAIgCIAVgHIADgBIAKgEAAtCvIgQgBIgKgFIgDgDIgGgIQgHgNAOgOIADgDABxB7IgQAYIgFAFQgPAOgXAHIgHACIgCAA");
	this.shape.setTransform(-12.6,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB89FE").s().p("AAoCvIABAAIAIgCQAXgIAOgOIAFgEIARgYIgRAYIgFAEQgOAOgXAIIgIACIgBAAIgQgBIgLgGIgDgCIgGgJQgEgNAMgOIACgDIAWgGIADgBIAJgFIgJAFIgDABIgWAGIgIACIgKACIgUABIgdgEQgIgEgEgFQgEgHABgKQACgXAWgKQATgJAYgDIghADIgfACIgBAAIgTgCQgZgDgPgOIAAgBQgQgQAEgUIACgFIACgCQAHgPARgFIAvgHIADAAIAwAEQgRgEgNgIQgTgKgSgQIgeggQgOgSAAgYQgBgZAdgKIAagDIATADIAHAEIAoAXIAgAYIAkAdIAeAdIAXAXIAJAKIgBgFIAEADIADAFIACADIACALIABAMIgBACIAAAGIgDAZIAAAaIAAAKIgLAYIgCAEQgFAPgHAQIgBADIgIAIIgSATQgFAEgYAKIgMADIgDAAg");
	this.shape_1.setTransform(-12.1,-15.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-33.3,27.9,35.2);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("Ag4ATQgEgCACgFIADgDIALgJQAKgFAJgCIALgCIAEAAQAEADgFAGIgEAEIAAABIgJAFIgIAGIgMAEgAAXgEQgHgCgBgEQgBgDAGgDIAOgDIAEAAIANACIAIAGQABAEgGACIgFACIgJABg");
	this.shape.setTransform(-0.2,1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-0.9,12,4.1);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAjIgGgHQgFgJAAgNQAAgKAFgKIACgDQAFgFAFAAQAHAAAEAIQAEAGABAIIABAGQAAANgGAJIgFAGIAAABIgGACgAAWAIQgFgGgBgKQAAgLAEgJQAEgIAHAAIADAAIAKAHQAGAHABAMQAAAKgEAGIgEAGIgIAEQgHAAgGgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-3.7,10.3,7.5);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C4801").ss(1,1,1).p("ABUhFIAEADIANAMIAEADIANANIAEADIARAPQAJAHACAMQAEAMgIAJQgJAKgNgEIgCALQgFALgNgBQgIAAgGgEIgGgFIgCAJIgCACQgFAKgNgEQgKgEgFgJIgHgRIgCgEIgIgVIgIgXAgZgPIABACIAEAQIACAMQACASgGATQgDAKgGAEIgKADQgMABgCgXAhgAmIgBACIgIAKIgFAHQgIAKgLABIgOgDQgMgGAIgUIATgpIANgXIAEgHIAHgNAB8AaIgDgKIgGgKIgHgHABUAmIgCgMIgFgS");
	this.shape.setTransform(-12.6,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5C4801").ss(1.5,1,1).p("ABYjtIAYgCIAqADIAwAJIAJADIAfANQAXALAUARIAMANIAPAVQARAeACAmQADAogKAiQgLAggTAZQgKANgJADIgHgDIgIgHIgBgBQgJgIgHgNQgLgSgVgLIgSgGIhKgEIgLADQgdAEgdAJIgBABIhBAUIgIACIgBAAIgOAEIgtAJIgKACIgEAAIABACQACAFgBAOIgBAJIgIAnIgJAiIgCAIQgHAWgLASQgKASgSAMQgSAMgbgCQgWgCgOgJIgFgDIgagWQgQgUgLgWQgPgdgGggIgHgwIgCgzIAEgTIAEgSIAIgaQAJgUARgQQAOgNAWgEQAagFAUALIAIAFIAagfIAWgTQAVgRAagOIAIgEIABgBIAKgFIAhgOIAVgHIABgBIAFgBIA+gPIAzgFQgYASgTAaQgTAcgIAkIgCAQIgBANQgBAMABAMQABALADAKQAIAfASAeIAEAGAjHhnIAKAGIAPAOAgfjXQgVAWgMAhQgNAjgBAnIAAADQABAmANAaQANAVASAXIAIAJIAAAAABsgCIgCgJQgJgmAFggQAEglAOghQAMgfAZgUQASgNASgFIAQgDIACgBADujLIgFAJQgNAXgHAbQgJAjABAoQAAAmAGAjIAAABAiOCRIAFgYIACgIIADgqIAAgRIAAgEIgbgEQgkgHgfgSQgTgLgOgWIgCgFIAAACIgBAXIABA5IACAdIACAOIABANIACAKIABAHQAEATAJAPQAIANANAJQAIAFAHADQALADAKgDQALgEAKgOQANgRAHgWgAiEAyIAigBAjjgjQgWgEgUAEIAIASAkrgbIAegI");
	this.shape_1.setTransform(25.8,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F21DE").ss(1,1,1).p("AAfGEIgMAPIgdAiIgdAgIggAeIgDACQgRANgSAEQgVAFgMgTIgDgFQgJgQAKgRQAMgTAQgSIgYAKIgLADIgcgBIgKgCQgPgGABgSQAAgYATgMQAEgDAFgCQANgJAQAAIAGAAQgQgEgPgIIgKgHQgMgJgGgOIgBgCQgIgVAPgOIAFgFQAHgFAIgCIAVgCIAIAAIAqAGQAZAFAVAJIANAGIAbAOIAoAdADMnUQgEAOgVAKIgBAAACvm6IgJADQgVAGgTgKQgHABgGgDIgCgBQgdgRgJgdIgCgIQgCgOAQgCQAlgGAdANQAWAKATARIAMAMIAAACAh0GtIAKgFIAPgJIAQgJAiMFtIAPADIAHACIAZAA");
	this.shape_2.setTransform(-28.5,-7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F21DE").ss(1.5,1,1).p("AA6ElIgGAaIgIAUIgBACIgTAmIgWAeIgDAGIgDADQgOAPgRALIgJAFIgOAGIgSAFIgeADIgBAAIgRgCQgTgCgQgHIgLgGQgJgFgHgIIgNgQIgKgWIgFgUIgBgcIACgVIAIgcIABgCIADgJIACgFIAAAAIABgEIAchOQAWg7AQgiQAPgiABgrIgHgtQgFgjgCgmQgBgoAFglQAEgkAKgiQAKgiASgbIAIgMQAcghAogFQAHgrgJgiIgDgKIgLgRIgLgMAgIlaIAIgBIASABIAnAEQAeAFARAJIAIAFIABABQAUAOAOAXQAPAVAMAZIACAEIAMAaIABAEIAbBM");
	this.shape_3.setTransform(-4.4,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#362B01").ss(1.5,1,1).p("Ag4gNIADgBQANgFAMgCQAVgCASAJIACABQASAJANALIALAMIACAE");
	this.shape_4.setTransform(5.7,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_5.setTransform(-10.9,-52.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#785C01").ss(1,1,1).p("AAUgLQABATgNAJQgLAKgKgMQgJgMADgWIAAgC");
	this.shape_6.setTransform(-20.3,45.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRgBQARAIAVgGIAAACIgOACQgNAAgLgGgAAeAAIADgCIAAACgAgggEIACABQAGADAHgBIgFABQgGAAgEgEg");
	this.shape_7.setTransform(-14,-52.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CF1010").s().p("AgDAyIgPgIQgNgJgHgNQgJgOgFgRIgBgIIgCgKIgBgNIACgBQAOgFAMgCQAVgCASAJIACABQASAJANANIAKAMIADAEQgGATgOASQgKANgLAEQgFACgFAAIgJgCg");
	this.shape_8.setTransform(5.7,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#592424").s().p("AAzBOIgKgNQgNgMgSgJIgCgBQgSgKgVADQgMACgOAFIgCABIgCgOIgCgdIgBg3IABgZIAAgCIADAFQANAZATAKQAdATAlAGIAaAEIABAEIAAAPIgEArIgCAIIgFAXg");
	this.shape_9.setTransform(6,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E36363").s().p("AhqCIIAAAAIgIgJQgTgXgNgXQgNgaAAgmIAAgDQABglAMgjQAMghAVgWIABgBIAGgBIA/gPIAygFQgXASgTAaQgTAcgHAkIgDAQIgBALQgBAMABAMQACALACAKQAIAfATAgIADAGIhCAUIgJACgABvBjIhKgEIgLADIgCgJQgJgmAFggQAFgjANghQAMgfAZgUQASgNASgFIAQgDIACgBIAgANIgFAIIgEAJQgOAXgHAbQgJAjABAmQAAAmAGAlIAAABg");
	this.shape_10.setTransform(34,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC82B").s().p("Al0FqQgKgMAEgYIAAgCIgCACIgIALIgFAHQgHAKgLAAIgOgCQgNgGAIgVIATgrIAOgXIAEgGIAHgNQAHAHAJAFIALAGQAPAHAUADIARABIABACIAEASIACAMQABATgFASQgDAKgGAEIgKAEQgMAAgCgWQAAAVgMAJQgGAFgFAAQgHAAgFgHgAjaFWQgLgEgFgKIgHgRIgBgDIgIgWIgIgYIAOgGIAIgGQASgLAOgOIACgDIAGgGIAEACIANAMIADAEIANAMIAEAEIARAOQAJAIADAMQADAOgIAIQgJAKgNgEIgDgKIgGgKIgGgIIAGAIIAGAKIADAKIgCALQgFALgNAAQgIgBgGgEIgFgFIgCgMIgGgSIAGASIACAMIgDAJIgBADQgEAHgIAAIgGgBgAjEFEgAidE4gAhoBvQgWgCgPgJIgFgDIgagWQgPgUgLgWQgPgdgHgeIgGgwIgCgzIADgVIAEgSIAJgaQAIgUARgQQAPgNAWgEQAZgFAUALIAJAFIAagfIAWgTQAVgRAZgOIAGgEIACgBIAKgFIAhgOIAVgHQgWAWgMAhQgMAjgBAnIAAADQAAAmAOAaQAMAXATAXIAIAJIAAAAIgOAEIguAJIgKACIgDAAIABACQACAFgCAOIgBAJIgFAnIgJAgIgDAIQgGAWgLASQgKASgSAMQgQAKgWAAIgHAAgAifiQIAAAZIAAA5IACAdIACAOIACANIABAIIACAHQAEATAJAPQAIANAMAJIAPAIQALADAKgDQALgEAKgOQAOgRAGgWIAGgWIABgIIAEgqIAAgRIgBgEIAhgBIghABIgagEQglgHgfgSQgTgLgNgYIgDgFIgIgSIADAAIAAAAIABAAIAAAAIASgCIAAAAIABAAIAUACIgUgCIgBAAIAAAAIgSACIAAAAIgBAAIAAAAIgDAAIAIASgAjEicIAdgIgAhWjiIAOAOIgOgOIgKgGgAFzhAIgJgHIgBgBQgIgIgIgNQgKgSgVgLIAAgBQgHglAAgmQAAgoAIgjQAHgbAOgXIAFgJIAEgIQAXALAUARIAMANIAOAVQARAeADAmQACAogKAiQgKAigTAZQgKANgJADgACUh5QgSgggJgfQgCgKgBgLQgCgMABgMIABgNIADgQQAHgkATgcQATgaAZgSIAXgCIArADIAwAJIAJADIgDABIgPADQgTAFgRANQgaAUgMAfQgNAhgFAlQgFAgAJAmIACAJQgdAGgcAJIgCABgAifiSg");
	this.shape_11.setTransform(15.6,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AB89FE").s().p("AhrGVIgRgBQgTgDgQgHIgLgGQgJgFgHgHIgNgRIgKgWIgFgUIgBgbIACgVIAIgdIABgBIADgJIACgFIAAAAIABgFIAchNQAWg7AQgiQAPgjABgpIgHguQgFgjgCgnQgBgoAFgkQAEgkAKgiQAKgjASgaIAIgMQAcgiAogEIAIgBIASABIAnAEQAeAFARAJIAIAEIABABQAUAPAOAWQAPAVAMAZIACAEIAMAbIABADIAbBMIgKAFIgBABIgIAEQgaAOgVARIgWATIgaAfIgIgFQgUgLgaAFQgWAEgOANQgPAQgJAUIgIAaIgEASIgEATIACAzIAHAwQAGAgANAdQALAWAQAUIAaAWIAFADIgGAaIgIATIgBACIgTAmIgWAfIgDAGIgDADQgOAOgRALIgJAGIgOAGIgSAEIgeADg");
	this.shape_12.setTransform(-4.4,-2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E14DEE").s().p("AiOH4IgDgFQgJgQAKgRQAMgTAQgSIgYAKIgLADIgcgBIgKgCQgPgGABgSQAAgYATgMIAJgFQANgJAQAAIAGAAQgQgEgPgIIgKgHQgMgJgGgOIgBgCQgIgVAPgOIAFgFQAHgFAIgCIAVgCIAIAAIAqAGQAZAFAVAJIANAGIAbAOIAoAdIABAbIAGAUIgMAPIgdAiIgdAgIggAeIgDACQgRANgSAEIgIABQgPAAgKgPgAhbGfIgPAJIgKAFIAKgFIAPgJIAQgJgAh9FwIAHACIAZAAIgZAAIgHgCIgPgDgAB+m7QgJACgGgFQgdgRgJgdIgCgIQgCgOAQgCQAlgGAdANQAWAKATARIAMAMIAAACQgEAOgVAKIgBAAIgDACIgJADQgIACgHAAQgNAAgMgGg");
	this.shape_13.setTransform(-28.5,-7.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49,-59.9,108.2,107.6);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjdBrIAAjVIG7AAIAADVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-10.7,44.5,21.5);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.153)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,49.4).s().p("AlZA2QiQgWABggQgBgfCQgWQCQgXDJAAQDLAACPAXQCQAWgBAfQABAgiQAWQiPAXjLAAQjJAAiQgXg");
	this.shape.setTransform(0,117.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.9,109.6,98,15.5);


(lib.shape16 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B4500").ss(1.5,1,1).p("AlrAxQgXgMAAgOQAAgcBxgVQBygVCfAAQCgAABxAVQByAVAAAcQAAAOgXAM");
	this.shape.setTransform(250,277.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#815A01").s().p("AkRAyQhxgUAAgeQAAgMAXgLQAMgHAQgFQAZgIAlgHQBygVCfAAQCgAABxAVQAmAHAZAIIAcAMQAXALAAAMQAAAehyAUQhxAWigAAQifAAhygWg");
	this.shape_1.setTransform(250,284.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#986A01").s().p("AFQAlQgZgIgmgHQhxgVigAAQifAAhyAVQglAHgZAIQgQAFgMAHQgXgNAAgNQAAgcBxgWQBygUCfAAQCgAABxAUQByAWAAAcQAAANgXANg");
	this.shape_2.setTransform(250,277.4);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669900").s().p("AopItQgeBMhYAlIgWiHIiBBBIgWh+QgqAwhCAFIAYiiIh9A/IADiVIhoBhIgjiEIgtByIhggmIgCB4Ih+hCQAhBRgkBRIhMhcIgdBoIhIh8IgxCOIhAhRQAFBphUBdIg7ieIhZBeIgkiCIh6B5IADh8Ih3BGIACh4IhgBEIgbh6QgiBEhSAcIgviQQgzBEhEAAIgEgJIAAw/MBSxABgIAVOmIgNC3IhSh9Ig3BjIhNhkQAHBUhJBUIg+iiIhaBdIgtiJQgoBIhgAgIAmiuQhbBHhaAFIBJijQg/AthQAMIAniGIh6BIIg1hWQgTA+glBLIhYhqIgSB/IhjhJIgHByIhAgvQATBUgFBNIh9hHIgSBFIhnhFQAPBXg/BVIhPh5QgPA/g8A2IgxhyIhcBBIgShIQghBRgvA0IgtiZIhNB0IgIh4IhTApIAehlIh2BNIAJivIhSBOIgShuQgQBMhOAeIhAhbIgCBaIhrguQAvBFgRBEIhlg1QAQA9ggBDIhNhiIgWCMIhAg4QAdBQgfBFIhphIIgWB4IhPhhQgFBdg6BAg");
	this.shape_3.setTransform(256.4,16.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4D5F05").ss(1.5,1,1).p("EgpTgK2MBSRABgIAWOlIgOC3IhTh8Ig2BjIhMhkQAGBUhJBTIg+ihIhZBdIguiJQgnBIhhAgIAniuQhcBGhaAGIBJijQhAAthPALIAniFIh6BIIg1hWQgTA+glBLIhYhrIgSCAIhjhKIgHBzIhAgvQATBTgFBOIh9hHIgSBEIhmhFQAOBYg/BVIhPh6QgPBAg9A1IgwhxIhcBBIgShIQggBRgwA0IgtiZIhNB0IgIh4IhTApIAehmIh1BOIAIivIhTBOIgRhuQgQBMhNAeIhBhbIgCBaIhqguQAuBFgRBEIhlg1QARA8ghBEIhNhjIgWCNIhAg5QAdBQggBGIhohIIgWB3IhPhgQgFBcg6BAIg0iKQgeBMhYAkIgWiHIiBBBIgWh9QgqAwhCAFIAXiiIh8A/IADiVIhoBhIgkiEIgtByIhggmIgCB4Ih9hCQAhBRgkBQIhNhbIgdBoIhHh8IgxCOIhAhRQAEBphTBdIg8ifIhYBeIgliBIh5B5IACh8Ih2BGIACh4IhgBEIgbh6QgiBDhSAdIgwiQQgnA1gzAM");
	this.shape_4.setTransform(258,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E8A00").s().p("Ao5ItQgeBMhYAkIgWiHIiBBBIgWh9QgqAwhCAFIAYiiIh9A/IADiVIhoBhIgjiEIgtByIhggmIgCB4Ih+hCQAhBRgkBQIhMhbIgdBoIhIh8IgxCOIhAhRQAFBphUBdIg7ifIhZBeIgkiBIh6B5IADh8Ih3BGIACh4IhgBEIgbh6QgiBDhSAdIgviQQgoA1gyAMIAAxFMBSQABgIAVOlIgNC3IhSh8Ig3BjIhNhkQAHBUhJBTIg+ihIhaBdIgtiJQgoBIhgAgIAmiuQhbBGhaAGIBJijQg/AthQALIAniFIh6BIIg1hWQgTA+glBLIhYhrIgSCAIhjhKIgHBzIhAgvQATBTgFBOIh9hHIgSBEIhnhFQAPBYg/BVIhPh6QgPBAg8A1IgxhxIhcBBIgShIQghBRgvA0IgtiZIhNB0IgIh4IhTApIAehmIh2BOIAJivIhSBOIgShuQgQBMhOAeIhAhbIgCBaIhrguQAvBFgRBEIhlg1QAQA8ggBEIhNhjIgWCNIhAg5QAdBQgfBGIhphIIgWB3IhPhgQgFBcg6BAg");
	this.shape_5.setTransform(258,32.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-52.7,532,344.8);


(lib.shape15 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(128,86,0,0.702)").ss(1,1,1).p("AFytIQA0hJA7giQA/gkBYgCQgCgCAAgKAobq2QgOgzgdgrIgxhKAmCqRQg4hogHhCAFHthIiSCUIg9BNQADAAAIgFQAIgFAGAAIAAANQgUAkgtAxIhGBIQgFgKAAgMQhPBEhBCJIgCAEIAAADIAAgCIAAgBAhgOwQgwicgPhEQgbh2AAhlQAFjOARhKIAIAAIAFARQAEAKAIAAQAMAAAchcQAchYAAgRQAAgPgGgFQgHgGgRADIAAgcQAQguBTiuQBIidAAgNIgIgKAFjsbQh7BvhlCTIhRB6QgwBIgmAzQhWBuhFCgQg0B3g/DMIgHgZQgGgUgKAAQgPAAgZB4QgWBuAAAhIACAJIAHAFQAIAAALgRQANgUAGgDIAFAAIADAVQAAATgEAcIgBAKAiqjsIAEAGIgDgCQgCAAABgEQgXgmg3hIQgxhCgRgmIgPADIAAAgQAFAKAAAGQAAAEgBADIgEAFIg8ieQgihWgcg2An/qyQAPAYAnBbIA1B9QA9CAAWBhQABAAABACIADABQADgwALAAQAJAAAWBTQAUBLAAALIgDAKIgBAHIgBAEAkxAfIABgDIgCAAIABADQgiBJgxC+Qg6DmAACBIADAZIAHAXIAJgJIAIgBQAVAAAJBSQAFAtAAA4IAAAFIgCACIgDAAIgNgVQgJgOAAgFIgIAAQgPAeAAANIAFA5IAFA5AjWPGIAAgDIgpjKQgQhfAAhLIgFgqIAMiRIgFgfQAAgtAkhnIAnhwIAFAD");
	this.shape.setTransform(-29.2,65.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#496C00").ss(1,1,1).p("AF5ghQgFAbAJAaQgWg0gzgVQgIADgDAKIgMBDQgThTgfgMQgfgMgPAbQgWAogDAyQguhtgiAgQgiAhgCAmIABANIAAAGAhzgSQgQABgRAXQgQAWgJAcIgWgbQgMgLgPAAQgRAAgTAQQgTAQgEASIgBABIgBACIgSgSQgLgMgLAAQgjAAgXAgAhtgSIgGABAhpgSIgEAAIgGAAAhpgSIgBgBIgDABAAwAfQgIgggngUQgjgTgiBWQgJgqgcgW");
	this.shape_1.setTransform(-66.6,170.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6D4416").ss(1.5,1,1).p("AuWhVQgwhFg2g4Qr4jPjyp8IA4AAQFEKEJHBfQi7kcALiyQDOGaDfDzQhAirgfwGIBygRQhIL3CiHwQBVEDCWC9QDzlwEnjhQBCgyBEgrQjOq+BOqtIBygSQieKxEaKhQEZAwDqg8QKzoGEDo8IBQBdQkLH4qlIAQIdgpB9hiQELjfB/juQCngHnzIOIAAApQqfCup9gMQg7Aig5AsQklDjjgICQipKbCuHSAsNbCIAAgBQhCoZDSoyQhdnCi8kJ");
	this.shape_2.setTransform(0,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#775100").s().p("AsiMQIgeAyIhDhVIgTAdQgwhEg2g4Qr4jQjyp5IA4AAQFEKBJHBgQi7kdALixQDOGZDfD0QhAirgfwEIBygRQhIL1CiHvIgjBXgACXKUIgogLIg3AjIAUgzQBCgyBEgrQjOq8BOquIBygRQieKxEaKeQEZAwDqg7QKzoEEDo8IBQBdQkLH3qlH/QIdgqB9hiQELjfB/jrQCngHnzIMIAAApQqfCtp9gMQg7Aig5AtIgHgUIhFAng");
	this.shape_3.setTransform(0,-91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AmoOzIgBAAIgDAAIgGAAIAGAAIgGABIAAgBQhCoYDSoxQhdnCi8kLIATgdIBDBVIAegyIBGBQIAjhXQBVEGCWC8QDxlyEpjgIgUAzIA3gjIAoALIgCA/IBFgnIAHAUQknDljgIBQinKaCsHSQgFAaAJAdQgWg3gxgUQgIACgDALIgMBEQgThVgfgMQgfgMgPAbQgWAogDA1QguhwgiAhQgiAggCAoQgIgigngTQglgTgiBXQgJgqgcgYg");
	this.shape_4.setTransform(-34.6,73.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202.3,-177.5,404.7,355.3);


(lib.shape13 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D7100").s().p("A8XJBIgxA5IgPhHIhCAqQgUgpATgvIgqAhIgNhSIgxA6QgVgoAKgjIhAAfQgMgoAfgpIhFAbIgBg1IgpA2QgxgSgKgtIgLBBIg1guIAGBnIhLguIAUA8Ig2gYIgFBHIgwhEIgeBaIgVgZIAAsaQQzmURWH1IABAkQZ/uwTdKdIAAOmIgggSIACBJIhPhHIgWBMIg5g3IglBeQg1g4ADg+IgpAwIgfhTIgtBJIgTg+IgxA2QgXgvAWgwIhRAnIAAhHIg+AXIgchDIgXBNIhCg5IACBYIhPglIAPBfQgqgDgagcIgPBKIhRgnIgPBQQg4gVgSgtIgiBSQglgmgDg3IgyA5IgNhGIhDAqQgUgpASgvIgoAhIgOhTIgxA7QgUgoAKgkIhCAgQgKgoAegpIhFAbIAAg1IgqA2QgxgSgKgtIgMBBIgzguIAFBnIhLguIATA8Ig0gYIgFBGIgyhEIgcBbQgfgfgUgwIgMArIg6gnIgfBDQgmgfgJgmIgzBIQgogzAKgzIhCApIgLgpIhQAqQgCgtALgyIgpAcIgEhEIg+AsIgNhLIg3A/QgYgtgMgkIghAzIhMgrIAYBPQgygHgogbIAvBhQg6gEg5gpIAXBmQg9gSgYgrIgdBRIg5g3IgoBfQgugxAEgyIgwA8Igjg7IgmA1IgGAQIgEgCIgFAGIgBgIQgsgRgTgkIgSBIIg9goIACBGIhMgpIACBKIhNhIIgXBMIg4g3IgnBeQg0g3ACg/IgoAxIgfhUIguBJIgSg+IgxA3QgXgwAVgwIhPAnIgChHIg8AXIgehDIgWBOIhCg5IACBXIhPglIAPBfQgqgDgagcIgPBKIhSgmIgNBPQg4gVgTgtIgiBSQglgmgDg2g");
	this.shape.setTransform(254,67.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#568000").ss(1.5,1,1).p("EAnEAG7MhOHAAAIAAmQUAiTgPMAr0APMg");
	this.shape_1.setTransform(250,295.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669900").s().p("EgnDAG7IAAmQUAiTgPMAr0APMIAAGQg");
	this.shape_2.setTransform(250,295.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74C4F6").s().p("EgosgJDICagEQgMgeAIgjQAJgpAjAEQAcAVgEAkQALgcAGggQADgTAMgIQAGgEAFAAQAmgBAMAfQAFgXAMgUQAFgKAIgIQAggeAeAZQAkA3gNBLQAOgwAjgiIAEAHQAJAngDApQAcg3AygYIAIAKQATAsgEA4QADgOAJgJQAhgfAmgOQAaAkgYAoQAlgZAlAKQAMAWgNAXIAZgKQAvgPAXAqQAEggAagRQALgHALgDQA6gNAmAwQgIgrAegkIAPgHQAsAPAcAoQgFgSAKgRQAPgXAdgCIAaADQAkAOAFAqQAEgSAMgNQAzgyA4AfIAJAJIAMARQADgGAEgFQAmglAuARQAPAHADASIABApQAXg3A6gKIALAJQAZAhAJAsQAIgSANgOQAJgLANgCIALAAQAhATAHAuIAKhmQAAgFADgEQASgdAbAMQAHAEAFAGQAkAsAJA9QAEgpAdgTQAcAYAGAqQACAKACgGIAEgGIBHgpQAaAdAJArQAcgvAtgWIAWAPQAVAWAEAkQAIggAXgYQAVgXAbABIAjBBQAEg0AagsIAUgBQA0AZAUA+QAEgjAIgiQACgKAJgDQAyAVAXA2QgQgwAagtIAXABIAPAJQAZAfANArQgHgYAIgZQAHgYAVgGIARABQAfATAMAmQgJgpATgnIAbADQAWAIAIAYQAOAnAaAbQACgkAFgkQADgUATAAQAIABAHAEQAtAZAVA0QgIgYABgYQACglAggBIBIA3QACgxApgKQAjAZAUAqQAHgXAJgWQAKgWAWAGQAKACAHAGQAfAUAOAoQAQg8A0gSIAPgCQA1AHAPA7QgFgwAmgaQAHgFAHAIQAjArAJA7QADgXAJgWIASgqQARgnAhgCQArAiAFA+QAGgqAigYQAGABAEAFQAdAlgIA4QAVg9Akg1QAKgPASgCQAGACAEAFQAlBBAABQQACgrAdghQAkAaABA2QAXg5AygeQAHADAFAFQAIAGAEAKQAKAfAFAiQAEgzAqgeQAMABAKAFQAuAYAIA9QABgiAOgfQATgsApgDQAvAwAQBIQACguAogWIAZAAQAnATAVArQgJgsANgrIARgJIAOAHQALAIAHAMQAWAjASAnQgDgNADgOQAFghAcgGIARgBQAgAOAMAnQgDgLABgOQACgbAOgWQATgdAbAQQAoAaATAwQgJgagFgbQgFgZAUgOQAeATALAqQgEgwAagpIANgBQAxAKAbAyQgXgugFg3QAAgHADgHQAJgWAYAHIBHBlQgHglAggXQAjAQATAqQgRgqAogYIALgCQAoAMATApQgMgiAigWIAOgHQAIADAEAHQAQAYABAhQAPgaAVgXQAYgZAegGQAIABAGAFQAGAEABAIQAFAegQAgQAggrAuAJQAJApgLAnIBOgNIgUA2IhUS4MhSrAB1g");
	this.shape_3.setTransform(242.1,290.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,0.5,539.8,367.2);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#463800").ss(1,1,1).p("AAAwjMAAAAhH");
	this.shape.setTransform(-642,-8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape11 = function() {
	this.initialize();

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.102)").s().p("AZbLHIgxgeQhtBCiWAAQiiAAhyhNQhyhOAAhuQAAgkANghQAZBBBMA0QByBNCiAAQCWAABthCIAxAeQCeBWDgAAQDfAACfhWQAugaAggcQB3BGClAAQCpAAB2hIQBMgtAbg6QAPAhAAAlQAABmh2BHQh2BIipAAQilAAh3hGQggAcguAaQifBWjfAAQjgAAiehWgEBA4ACrQg2gYgmgaIgSALQhWA3h7AAQh6AAhXg3QhXg2AAhOQAAgkAUggQAWAiAtAcQBXA1B6AAQB7AABWg1IASgLQAmAYA2AYQC9BUEJAAQEJAAC8hUQBWgkAvgtIALAHQBzA8CiAAQChAAByg8QBCgkAcgtQAVAggBAmQAABWhyA/QhyA+ihAAQiiAAhzg+IgLgHQgvAthWAmQi8BUkJAAQkJAAi9hUgApbAtIgmgdQg4AVhDAAQhyAAhRg5QhRg6AAhTQABgmAQggQAUAnAsAgQBRA7ByAAQBDAAA4gVIAmAdQCIBcDAAAQCNAABugxQBaAnB6AAQCOAABjg0QAwgYAZgdQAbAgAAAmQAABGhkAzQhjA0iOAAQh6AAhagnQhuAxiNAAQjAAAiIhcgEhKWgBwQi2BCj2AAQkcAAjHhXQjHhXAAh7QAAglARghQApBPCNA9QDHBXEcAAQD2AAC2hCQDeBUEaAAQGCAAESidQApgYAigZQBxAjCHAAQDkAACihjQB4hKAfhhQALAhAAAlQAACNiiBkQiiBjjkAAQiHAAhxgjQgiAZgpAYQkSCdmCAAQkaAAjehUgEA75gFGIAEgIIAEAIgEhUZgMcIAGAcIgLACg");
	this.shape.setTransform(-1224.8,20.4);

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("AnOH4Qi2BBj3ABQkbgBjHhXQjIhXAAh7QAAh8DIhXQB6g1CYgTQgNgvAAgzQAAjFDCiMQDCiMESAAQDsAACxBoIBNgBQGBAAESCcQBHApA1AuQBcgWBrgBQDlAAChBkQCiBkAACLQAACNiiBkQihBkjlAAQiHAAhxgkQghAZgqAYQkSCdmBAAQkYAAjehTg");
	this.shape_1.setTransform(-1654.4,-41.3);

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.149)").s().p("AlbD9IgmgdQg4AVhEAAQhxgBhRg6QhRg7AAhSQAAhSBRg6QBRg7BxAAQA2AAAuAOQAagbAkgZQCIhcDAABIAmAAQBYg9B2AAQCIAABhBSQBhBTgBBzQABAfgHAcQBMAJA9AgQBkAzAABIQAABJhkAzQhjAziOABQh6gBhcgnQhuAyiLAAQjAgBiIhbg");
	this.shape_2.setTransform(-1250.4,-0.3);

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.149)").s().p("AmfFmIgxgeQhtBCiWAAQiiABhyhOQhyhOAAhtQAAhuByhLQA7gpBHgTQgEgOAAgPQAAhGBfgyQBfgxCHgBQB9AABcAsQAkgsA9gmQCVhcDRABQDUgBCVBcQCVBdAACDIgBASIBMgDQCoAAB3BHQB2BGAABmQAABlh2BHQh3BIioABQimgBh2hGQggAcgvAaQieBWjdABQjggBiehWg");
	this.shape_3.setTransform(-1020.4,55.7);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.149)").s().p("AolFXQg2gYgmgaIgSALQhXA3h6AAQh7AAhXg3QhXg2AAhOQAAhOBXg3QBXg1B7AAIAHAAQgTglAAgpQAAh1CThSQCUhSDQAAQDJAACRBNQAcgVAigTQCqhaDxAAQDxAACqBaQCqBaAACAQAAAigMAfIAoAUQBzA8AABZQAABYhzA/QhyA+ihAAQiiAAhyg+IgMgHQgvAthVAmQi8BUkIAAQkJAAi8hUg");
	this.shape_4.setTransform(-754.4,3.2);

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.102)").s().p("AZbLHQgagPgXgPQhtBCiWAAQiiAAhxhNQhzhOAAhuQAAgkANghQAZBBBNA0QBxBNCiAAQCWAABthCQAXAPAaAPQCeBWDgAAQDfAACfhWQAugaAggcQB3BGClAAQCpAAB2hIQBMgtAbg6QAPAhAAAlQAABmh2BHQh2BIipAAQilAAh3hGQggAcguAaQifBWjfAAQjgAAiehWgEBA4ACrQg2gYgmgaIgSALQhWA3h7AAQh6AAhXg3QhXg2AAhOQAAgkAUggQAWAiAtAcQBXA1B6AAQB7AABWg1IASgLQAmAYA2AYQC9BUEJAAQEJAAC8hUQBWgkAvgtIALAHQBzA8CiAAQChAAByg8QBCgkAdgtQATAgAAAmQAABWhyA/QhyA+ihAAQiiAAhzg+IgLgHQgvAthWAmQi8BUkJAAQkJAAi9hUgApbAtIgmgdQg4AVhDAAQhzAAhQg5QhRg6AAhTQAAgmARggQAUAnAsAgQBQA7BzAAQBDAAA4gVIAmAdQCIBcDAAAQCNAABugxQBaAnB6AAQCNAABkg0QAwgYAZgdQAbAgAAAmQAABGhkAzQhkA0iNAAQh6AAhagnQhuAxiNAAQjAAAiIhcgEhKWgBwQi2BCj2AAQkbAAjIhXQjHhXAAh7QAAglARghQApBPCNA9QDIBXEbAAQD2AAC2hCQDeBUEaAAQGCAAESidQApgYAigZQBxAjCHAAQDkAACihjQB4hKAfhhQALAhAAAlQAACNiiBkQiiBjjkAAQiHAAhxgjQgiAZgpAYQkSCdmCAAQkaAAjehUgEA75gFGIAEgIIAEAIgEhUZgMcIAGAcIgLACg");
	this.shape_5.setTransform(0,20.4);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.149)").s().p("AnOH4Qi2BBj3ABQkbgBjIhXQjHhXAAh7QAAh8DHhXQB7g1CYgTQgNgvAAgzQAAjFDCiMQDCiMESAAQDsAACxBoIBNgBQGBAAESCcQBHApA1AuQBcgWBsgBQDkAAChBkQCiBkAACLQAACNiiBkQihBkjkAAQiIAAhxgkQghAZgqAYQkSCdmBAAQkYAAjehTg");
	this.shape_6.setTransform(-429.5,-41.3);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.149)").s().p("AlbD9IgmgdQg4AVhDAAQhzgBhQg6QhRg7AAhSQAAhSBRg6QBQg7BzAAQA1AAAuAOQAagbAkgZQCIhcDAABIAmAAQBYg9B2AAQCIAABgBSQBiBTgBBzQAAAfgGAcQBMAJA9AgQBkAzAABIQAABJhkAzQhkAziNABQh6gBhcgnQhuAyiLAAQjAgBiIhbg");
	this.shape_7.setTransform(-25.5,-0.3);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.149)").s().p("AmfFmQgbgPgWgPQhtBCiWAAQiiABhyhOQhyhOAAhtQAAhuByhLQA7gpBHgTQgEgOAAgPQAAhGBfgyQBfgxCHgBQB9AABcAsQAkgsA9gmQCVhcDRABQDUgBCVBcQCVBdAACDIgBASIBMgDQCoAAB3BHQB2BGAABmQAABlh2BHQh3BIioABQimgBh2hGQggAcgvAaQieBWjdABQjggBiehWg");
	this.shape_8.setTransform(204.4,55.7);

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AolFXQg2gYgmgaIgSALQhXA3h6AAQh7AAhXg3QhXg2AAhOQAAhOBXg3QBXg1B7AAIAHAAQgTglAAgpQAAh1CThSQCUhSDQAAQDJAACRBNQAcgVAigTQCqhaDxAAQDxAACqBaQCqBaAACAQAAAigMAfIAoAUQBzA8AABZQAABYhzA/QhyA+ihAAQiiAAhyg+IgMgHQgvAthVAmQi8BUkIAAQkJAAi8hUg");
	this.shape_9.setTransform(470.4,3.2);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1811.8,-100,2398.9,200.3);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],-2,-138.6,-6.9,230.5).s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,162);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.9,500,340);


(lib.shape7 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgLALQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAGAFQAEAEAAAGQAAAGgEAFQgGAFgGAAQgGAAgFgFg");
	this.shape.setTransform(6.3,5.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AgWAXQgKgJAAgOQAAgMAKgLQAKgJAMAAQANAAAKAJQAKALAAAMQAAAOgKAJQgKAKgNAAQgMAAgKgKg");
	this.shape_1.setTransform(6.3,-2.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#694216").ss(1,1,1).p("AgCAbQgNghAWgU");
	this.shape_2.setTransform(-0.4,-9.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#912D22").ss(1,1,1).p("AgvACQAxAKAugR");
	this.shape_3.setTransform(-0.3,-6.7);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#601D15").ss(1.5,1,1).p("AhRhhQAqgXA2AEQBAAEAdAjQAdAjgHAvQgEAggSAaIgVAXQgjAgg0AAQgxAAgkggQgkghgIg4QgJg5Atgeg");
	this.shape_4.setTransform(0,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A63326").s().p("AhJBMQgkghgIg4QgKg5AtgeIANgHQgNAYAGAgQAIA3AkAhQAiAhAzAAQAlAAAegRIgVAXQgkAggzAAQgxAAgkggg");
	this.shape_5.setTransform(-1.1,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D04333").s().p("AhABCQgkghgIg3QgGggANgYQAqgXA4AEQA+AEAdAjQAcAjgGAvQgFAggRAaQgeARglAAQgxAAgkghg");
	this.shape_6.setTransform(2,-0.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-12.4,26.4,25.9);


(lib.sprite49 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape50("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape44("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound42");
	}
	this.frame_3 = function(){_root.counting.gotoAndStop(_root.counting.currentFrame + 1)}
	this.frame_7 = function(){
	  this.stop();
    if (this.parent.gameWin)
    {
      //_parent._parent.GameEndClip.gotoAndPlay("GameWonPlayground");
      _root.GameWon = true;
    } // end if
	}
	this.frame_8 = function() {
		playSound("sound46");
    /*var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
      puff = attachMovie("Puff", "puff" + i, i);
      puff._rotation = Math.random() * 360;
      puff._xscale = puff._yscale = Math.random() * 40 + 80;
      puff.velX = Math.random() * 40 - 20;
      puff.velY = Math.random() * 40 - 20;
      puff.step = Math.random() * 10 + 10;
      puff.onEnterFrame = function ()
      {
        this.velX = this.velX * damp;
        this.velY = this.velY * damp;
        this._x = this._x + this.velX;
        this._y = this._y + this.velY;
        this._xscale = this._yscale = this._yscale - this.step;
        if (this._xscale <= 0)
        {
            this.removeMovieClip();
        } // end if
      };
     } // end of for		
     */
	}
  this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame -1);
   this.parent.lose(); 
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(4).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite43();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape45("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite38 = function(mode,startPosition,loop) {
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
  this.frame11 = function(){this.gameWin = true}
	// Layer 10
	this.star10 = new lib.sprite39();
	this.star10.setTransform(291.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star10}]}).wait(11));

	// Layer 9
	this.star9 = new lib.sprite39();
	this.star9.setTransform(258.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star9}]}).wait(11));

	// Layer 8
	this.star8 = new lib.sprite39();
	this.star8.setTransform(225.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star8}]}).wait(11));

	// Layer 7
	this.star7 = new lib.sprite39();
	this.star7.setTransform(192.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star7}]}).wait(11));

	// Layer 6
	this.star6 = new lib.sprite39();
	this.star6.setTransform(159.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star6}]}).wait(11));

	// Layer 5
	this.star5 = new lib.sprite39();
	this.star5.setTransform(126.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(11));

	// Layer 4
	this.star4 = new lib.sprite39();
	this.star4.setTransform(93.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(11));

	// Layer 3
	this.star3 = new lib.sprite39();
	this.star3.setTransform(60.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(11));

	// Layer 2
	this.star2 = new lib.sprite39();
	this.star2.setTransform(27.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(11));

	// Layer 1
	this.star1 = new lib.sprite39();
	this.star1.setTransform(-5.1,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(11));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(10).call(this.frame11)) 
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-16,323.7,25.6);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  var snd;
 	// timeline functions: 
  this.frame_0 = function(){this.stop()}
 
	this.frame_1 = function() {
		 snd = playSound("sound37"); snd.duration = 833; 
	}
	this.frame_2 = function() {
	  snd = playSound("sound37");snd.position = 833; snd.duration = 1750;
	}
	this.frame_3 = function() {
		snd = playSound("sound37");snd.position = 1750; snd.duration = 2500;
	}
	this.frame_4 = function() {
		snd = playSound("sound37");snd.position = 2500; snd.duration = 3458; 
	}
	this.frame_5 = function() {
		snd = playSound("sound37");snd.position = 3458; snd.duration = 4250;
	}
	this.frame_6 = function() {
		snd = playSound("sound37");snd.position = 4250; snd.duration = 5000;
	}
	this.frame_7 = function() {  
		snd = playSound("sound37"); snd.position = 5208; snd.duration = 6042;
	}
	this.frame_8 = function() {
		snd = playSound("sound37"); snd.position = 6042; snd.duration = 6667;
	}
	this.frame_9 = function() {
		snd = playSound("sound37"); snd.position = 6876; snd.duration = 7709;
	}
	this.frame_10 = function() {
		snd = playSound("sound37"); snd.position = 7709; snd.duration = 8750;
	}


	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10));

	// Layer 1
	this.instance = new lib.shape36("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.4,38,37);


(lib.sprite30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape31("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.9,-27.4,82,55);


(lib.sprite29 = function() {
	this.initialize();

	// Layer 3
	this.scoreFld = new cjs.Text("0", "25px Arial", "#000000"); //#5B4500
	this.scoreFld.lineHeight = 25;
	this.scoreFld.lineWidth = 111;
	this.scoreFld.setTransform(-57.4+50,-18.4);

	// Layer 2
	this.instance = new lib.shape32("synched",0);

	// Layer 1
	this.hit = new lib.sprite30();

	this.addChild(this.hit,this.instance,this.scoreFld);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.2,-27.4,116.8,72.4);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-33.3,27.9,35.2);


(lib.sprite23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape24("synched",0);

	this.instance_1 = new lib.shape25("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-3.7,10.3,7.5);


(lib.sprite20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape21("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-10.7,44.5,21.5);


(lib.sprite14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape15("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202.3,-177.5,404.7,355.3);


(lib.sprite10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1811.8,-100,2398.9,200.3);


(lib.sprite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape12("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(535));

	// Layer 1
	this.instance_1 = new lib.sprite10();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1219.5},533).wait(1).to({x:-1221.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1811.8,-100,2398.9,200.3);


(lib.sprite6Fruit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-12.4,26.4,25.9);


(lib.sprite19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.sprite27();
	this.instance.setTransform(-16.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.99,skewX:-5.3,skewY:1,y:14.3},0).wait(1).to({scaleX:1,scaleY:0.92,skewX:-32.6,skewY:6.8,y:13.3},0).to({scaleX:1,scaleY:0.78,skewX:-87.1,skewY:18.3,x:-15.9,y:11.2},1).wait(1).to({scaleX:1,scaleY:0.65,skewX:-141.7,skewY:29.8,y:9.1},0).wait(1).to({scaleX:1,scaleY:0.63,skewX:-148.5,skewY:31.3,y:8.8},0).wait(1).to({scaleX:1,scaleY:0.65,skewX:-141.2,skewY:29.8,y:9.1},0).wait(1).to({scaleX:1,scaleY:0.73,skewX:-108.9,skewY:22.8,y:10.3},0).wait(1).to({scaleX:1,scaleY:0.89,skewX:-45.1,skewY:9.5,x:-16,y:12.8},0).to({scaleX:1,scaleY:0.94,skewX:-22.5,skewY:4.8,y:13.6},1).wait(1).to({scaleY:1,skewX:0,skewY:0,y:14.5},0).wait(1));

	// Mask Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AivB0QhjihCFh4QBEBqD8hAQBOB6hLB5QhdAuhZAAQhZAAhWgyg");
	mask.setTransform(11.4,12.5);

	// Masked Layer 5 - 4
	this.fruit = new lib.sprite6Fruit();
	this.fruit.setTransform(10.4,4.6);

	this.fruit.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fruit}]}).wait(11));

	// Layer 3
	this.eyes = new lib.sprite23();
	this.eyes.setTransform(5.5,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes}]}).wait(11));

	// Layer 2
	this.instance_1 = new lib.shape22("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(11));

	// Layer 1
	this.hit = new lib.sprite20();
	this.hit.setTransform(11.9,13.5);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-59.9,108.2,107.6);


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.parts = new lib.sprite19();
	this.parts.setTransform(-9.9,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.parts).to({y:-11.3},4).wait(1).to({y:-12.3},0).to({y:-8.3},4).wait(1).to({y:-7.3},0).wait(1));

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-67.4,108.2,192.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;