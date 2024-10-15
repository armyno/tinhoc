(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.FrostBite = function() {
	this.initialize();

	// Layer 5
	this.border = new lib.sprite49();

	// Layer 4
	this.instance = new lib.shape48("synched",0);
	this.instance.setTransform(433,17);

	// Layer 3
	this.starPoints = new lib.sprite38();
	this.starPoints.setTransform(28.1,26);

	// Layer 2
	this._char = new lib.sprite14();
	this._char.setTransform(250,260);

	// Layer 1
	this.instance_1 = new lib.shape13("synched",0);

  function eatSnow()
  {
    for (var i = 1; i <= caught; i++)
    {
        snowCaught = self._char["snow" + i];
        snowCaught.removeAllEventListeners("tick");
        self._char.removeChild(snowCaught); 
        delete snowCaught; 
        
    } // end of for
    if (caughtBig)
    {
        self.starPoints.score();
        caughtBig = false;
    } // end if
    points = 0;
    caught = 0;
  } // End of the function
  function movement()
  {
    var delX = stage.mouseX/ratio - self._char.x;
    if (Math.abs(delX) <= 10)
    {
        self._char.body.gotoAndStop("stand");
    }
    else
    {
        self._char.body.play();
    } // end else if
    self._char.x = self._char.x + delX / 4;
    if (delX >= -10)
    {
        if (delX > 10)
        {
            targetScale = 1;
        } // end if
    }
    else
    {
        targetScale = -1;
    } // end else if
    self._char.scaleX = targetScale;
    if(targetScale == 1)
    {
      var xHit = self.fly.x - self._char.x - self._char.tongue.x;
      var yHit = self.fly.y - self._char.y - self._char.tongue.y;
    }
    else
    {
      var xHit = 2*(self._char.x + 4.57) - self.fly.x - self._char.x - self._char.tongue.x;
      var yHit = self.fly.y  - self._char.y - self._char.tongue.y;        
    }    
    
    if (self._char.tongue.hitTest(xHit , yHit) && self.tongueHit)
    {
        self.fly.y = -200;
        self._char.gotoAndPlay("retract");
        self.starPoints.lose();
        self.fly.baseSpeed = 10;
        caughtBig = false;
        for (var _loc1 = 1; _loc1 <= caught; _loc1++)
        {
            self._char.removeChild(self._char["snow" + _loc1]);  
            delete self._char["snow" + _loc1];
            
        } // end of for...in
        caught = 0;   
    } // end if
  } // End of the function
  function snowFall()
  {
    ++count;
    self["snow" + count] = new lib.sprite10Snow(); 
    self.addChild(self["snow" + count]);
    
    self["snow" + count].x = Math.random() * 500;
    self["snow" + count].y = 0;
    if (Math.random() * 60 >= 1)
    {
        self["snow" + count].scaleX = self["snow" + count].scaleY = self["snow" + count].alpha = (Math.random() * 50 + 50)/100;
    }
    else
    {
        self["snow" + count].gotoAndStop(1);
        self["snow" + count].big = true;
    } // end else if
    self["snow" + count].velX = self["snow" + count].scaleX * (Math.random() * 4 - 2) ;
    self["snow" + count].velY = self["snow" + count].scaleX * (Math.random() * 2 + 2) ;
    self["snow" + count].ground = ground + Math.random() * 20 - 10;
    self["snow" + count].on("tick", function (evt)
    {
        if(targetScale == 1)
        {
          var xHit = evt.currentTarget.x - self._char.x - self._char.tongue.x;
          var yHit = evt.currentTarget.y - self._char.y - self._char.tongue.y;
        }
        else
        {
          var xHit = 2*(self._char.x + 4.57) - evt.currentTarget.x - self._char.x - self._char.tongue.x;
          var yHit = evt.currentTarget.y - self._char.y - self._char.tongue.y;        
        }
        
        if (!self._char.tongue.hitTest(xHit, yHit) || !self.tongueHit)
        {
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
            if (evt.currentTarget.big)
            {
                evt.currentTarget.rotation = evt.currentTarget.rotation + 2;
            } // end if
            if (evt.currentTarget.y > evt.currentTarget.ground)
            {
             evt.remove();
             evt.currentTarget.on("tick", function(e){
              if (e.currentTarget.alpha <= 0)
              {  
                 self.removeChild(e.currentTarget);
                 e.remove(); 
                 delete e.currentTarget;
              }
              else
              {
                e.currentTarget.alpha = e.currentTarget.alpha - 0.01;
              } // end else if
            });  
           } // end if            
            
        }
        else
        {
            if (evt.currentTarget.big)
            {
                caughtBig = true;
            } // end if
            ++caught;
            ++points;
            self._char["snow" + caught] = new lib.sprite10Snow();  
            self._char.addChild(self._char["snow" + caught]);
            if (evt.currentTarget.big)
            {
                self._char["snow" + caught].gotoAndStop(1);
            } // end if
            self._char["snow" + caught].x = (evt.currentTarget.x - self._char.x) * self._char.scaleX;
            self._char["snow" + caught].y = evt.currentTarget.y - self._char.y;
            self._char["snow" + caught].scaleX = self._char["snow" + caught].scaleY = evt.currentTarget.scaleX;
            self._char["snow" + caught].on("tick", function (e)
            {
                if (e.currentTarget.alpha <= 0)
                {
                    --points;
                    self._char.removeChild(e.currentTarget);
                    e.remove();
                }
                else
                {
                    e.currentTarget.alpha = e.currentTarget.alpha - 0.01;
                } // end else if
            });
            self.removeChild(evt.currentTarget);
            evt.remove();
            delete evt.currentTarget
        } // end else if
        

    });
   } // End of the function
   var self = this;
   
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;
   var gravity = 1;
   var count = 0;
   var ground = 305;
   var targetScale = 100;
   var caught = 0;
   var points = 0;
   var score = 0;
   var caughtBig = false;
   this.tongueHit = false;
   //border.swapDepths(100000);
   //GameEndClip.swapDepths(200000);
   this._char.on("rollover",  function ()
   {
     self.cursor = "none"; //Mouse.hide();
   });
   this._char.on("rollout",  function ()
   {
    self.cursor = ""; //Mouse.show();
   });
   this.on("tick",  function ()
   {
    snowFall();
    movement();
   });
   this.on("mousedown", function ()
   {
    self._char.play();
    eatSnow();
   });
   this.fly = new lib.sprite3Fly(); //  attachMovie("Fly", "fly", 0);
   this.fly.x = 50;
   this.fly.y = -20;

	this.addChild(this.instance_1,this._char,this.starPoints,this.instance,this.border, this.fly);
	this.fly.init();
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-51.9,641.3,392);


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
	this.shape.setTransform(-45, -7.5);

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


(lib.shape37 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#008F8E").ss(1,1,1).p("AgfguQBLAMgOBR");
	this.shape.setTransform(25,-6.4);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOARQgHgHAAgKQAAgJAHgIQAGgGAIgBQAJABAGAGQAHAIAAAJQAAAKgHAHQgGAHgJAAQgIAAgGgHg");
	this.shape_1.setTransform(31,-9.2);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6A6A6A").ss(1,1,1).p("AgpAPIBTgd");
	this.shape_2.setTransform(30.1,-28.5);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6A6A6A").ss(1,1,1).p("AhPAAICfAA");
	this.shape_3.setTransform(17.8,-27);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#856A03").ss(1,1,1).p("AB/kdIAaAVIAHAFIAMAMIAHAGQAXAXASAbIAWAiIgYgEIguAEIgCAAQgXAGgWAJIgTAJIgXAMIgCABIgoAZIgCABIgjAaIgEADQgQANgQAPIgGAEIgEAEIgFAFIgXAYIgDACIgeAlIgIAKIgBACIgSAYIgBgRIAAgHIAAgCIgEgoIgCgJIgHgYIgBgFIgCgEIgCgEIAAAAIAKgfIAGgOIAVgpIAcgmIAfgjIAjggIANgJQALgKAPgHIArgSIADgCIAqgIIASgDQgTgMgUgJQgjgQgngHIgfgFIgpgBIgGAAIgCAAIgwAIIgsANIgUAIIgHADIgPAIIgkAVIgDACIglAbIgKAIIgTASIgbAjQgQAXAPAQQAOAQASgHQASgHAOABQAaACASAIIANAHIATATIAbAiIACAEIAPAfAhBlOIABgBADyidIAHAMIAEAJQARAhALAjIAAABIAFAVIAFAWIADAYIABAUQgQgLgVgEIgxgFIgsAEIgIAAIgeAHIgPAEIgsAPIgLAFIgQAHIgGACIgKAFIAAAAIgCAAIgDACIgkAUIgVANIgUALIgnAbIgDADIgUAQIgEAEIgHAGIAAgGIAAgkIAAgZIAAgJAE1AzIABABIAEADIAGAGIAKAQIABACIAEALIAFAYIABAGQABAZgEAVQgFAVgMANIgDADQgQAPgbgCAAIDQIACgBIARgHIAHgCIAwgRIAhgJIAOgEIADAAIASgEIAWgEIAFgBIAZgCIAagBIADAAIAIAAIAIAAIAWACIAJABIACABIALABAEmAoIgBAEIAJADIAEACIADACAhdECIAmgUIAAAAIABAAIAOgHIALgGIAUgJIARgIAEnAUIgBAUAjUh9IAJgzIAQgsIAKgRIAPgXIALgOIAVgVIAQgLIAUgOQAPgJAOgFAh5FPIguABIgSgEQgLgFgIgIIgBAAQgIgJgDgLQgCgLACgNQADgSAMgNIABgBIAEgEIASgOIAIgDIACgBIAGgDIAEgBIASgIIACAAIAQgHAiKDRQAHggABgVIAAgFAiMEgIAngZIACgBIAGgEAhwFNIgHABIgCABAhvFNIgBAA");
	this.shape_4.setTransform(9.2,-51.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#018786").ss(1,1,1).p("AC5BbIgMAcAi2B3QgEgTACgYQAAgZAGgXQAHgXAKgTIADgHIASgbIAFgHIAEgGIARgUIAKgIIAkgd");
	this.shape_5.setTransform(16.6,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#014589").ss(1,1,1).p("AD5hvIABAJIACAkIABAlIgBAUIAAAMIgCAaIAAADIgHBOIgIAZIgBAIIgCAQIgDAMAD0iqIAEArIABAQAh3hFIAAAUIgEAUIgBACIgBADIgGAPIgBAFIgEAHIgBABIgEAHIgMASIgQASQgPARgTANQgSAOgVAKIgKAE");
	this.shape_6.setTransform(11.8,-18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#6A6A6A").ss(1,1,1).p("Ah6AUIAAgKIACgZIADgRAAWhMIABACIAGAPIAFATIACAVIAAAEQACAZgJAUIAAACQgHAOgKALIgIAHIgPANIgVAIIgwgCQgGgCgGgEQgLgIgGgMIgCgDQgJgPgCgTABvhUQAHAJADASIACARIgBAZIgBAEQgEAXgNAPQgOARgXAEQgbAFgLgV");
	this.shape_7.setTransform(22,-27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AABgCIgBAF");
	this.shape_8.setTransform(35.3,-4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("Ah1CRIAAhBIAKgFQAWgKARgNQATgOAPgQIAQgSIAMgRIAEgGIABgCIACgIIABgFIAGgPIABgEIABgBIAEgVIAAgTIAmgUIAAgBIABAAIAOgHIALgFIAUgJIATgIIgCARIgCAbIAAAJIgkAdIgJAIIgRAUIgFAGIgFAHIgRAZIgEAGQgKAVgGAYQgFAWAAAaQgBAXACATg");
	this.shape_9.setTransform(-1.6,-16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCCC").s().p("Ai/CsQgEgUABgXQABgaAGgWQAGgYALgUIADgHIARgaIAFgGIAFgGIARgUIAJgIIAkgdIAAgJIACgbIADgRIACgBIARgHIAGgDIAwgQIAggKIANgDIADAAIASgFIABACIAGAQIAFATIACAVIAAAEIABAIQAAAWgIARIAAACQgHAOgKAKIgIAIIgRAMIgVAIIgugBQgGgDgGgEQgLgHgGgNIgCgCQgJgPgCgUQACAUAJAPIACACQAGANALAHQAGAEAGADIAuABIAVgIIARgMIAIgIQAKgKAHgOIAAgCQAIgRAAgWIgBgIIAAgEIgCgVIgFgTIgGgQIgBgCIAXgDIAFgBIAZgCIAZgCIADAAIAIAAQAHAKADARIACASIgBAZIgBAEQgEAZgNAPQgOAQgXAEIgKACIAAAAIAAAAQgSAAgJgPIgBgCIABACQAJAPASAAIAAAAIAAAAIAKgCQAXgEAOgQQANgPAEgZIABgEIABgZIgCgSQgDgRgHgKIAIAAIAXADIAEAqIABAPIABAKIACAkIABAlIgBAUIAAAMIgBAaIgBADIgHBOIgHAZIgCAHIgNAdg");
	this.shape_10.setTransform(17.6,-18.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AirDtIAAgjIAAgaIAAgIIASgYIABgCIAIgLIAegkIADgEIAXgZIAFgEIAEgEIAGgFQAQgOASgNIAEgEIAjgXIAAgBIAogZIACgBIAXgNIATgIQAWgKAXgFIACgBIAugDIAYADIAHANIAEAJQARAhALAgIAAACIAFAUIAFAWIADAZIABAVQgQgKgVgFIgxgEIgsADIgIABIgeAGIgPAEIgsAQIgLAFIgQAGIgEADIgKAEIAAAAIgCABIgDACIgmAUIgVAMIgUAMIgnAbIgDACIgUARIgEADIgHAHgAjNAWIgCgDIgbghIgTgSIAJg0IAQgrIAKgSIAPgWIALgOIAVgVIAQgMIAUgNQAPgJAOgFIABgBIAGgBIApACIAhAFQAlAGAjAQQAUAJATANIgSACIgqAJIgDABIgpATQgPAHgNAJIgNAJIgjAgIgfAjIgcAmIgVAoIgGANIgKAfg");
	this.shape_11.setTransform(13.3,-60.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("Ai5FMQgLgFgIgIIgBgBQgIgIgDgMQgCgKACgNQADgSAMgNIABgCIAEgDIASgOIAIgDIACgBIAGgDIAEgCIASgHIACgBQAHggABgUIAAgFIAHgHIAEgDIAUgQIADgDIAngbIAUgMIAVgMIAkgUIADgCIACgBIAAAAIAKgEIAGgCIAQgHIALgFIAsgPIAPgFIAegGIAIgBIAsgDIAxAFQAVAEAQAKIgBAUIgBAFIAJADIAEACIADACIABABIAEACIAGAHIAKAQIABACIAEAKIAFAZIABAGQABAZgEAUQgFAWgMANIgDADQgQAPgbgDIgBgPIgFgqIAJABIACABIALABIgLgBIgCgBIgJgBIgWgDIgIAAIgIAAIgDAAIgaACIgZACIgFABIgWADIgSAFIgDAAIgOADIghAKIgwAQIgHADIgRAHIgCABIgRAIIgUAJIgLAGIgOAGIgBAAIAAABIgmAUIgGADIgCABIgnAZIAngZIACgBIAGgDIAAAUIgEAUIgBABIgBAFIgGAOIgBAFIgEAJIgBABIgBAAIgHABIgCABIguABgAiKDQIAQgHgAiDA6IAAgHIAAgCIgEgoIgCgJIgHgZIgBgEIgCgFIgCgDIAAAAIAKggIAGgNIAVgqIAcglIAfgkIAjggIANgJQALgJAPgHIArgSIADgCIAqgJIASgCIAaAUIAHAFIAMAMIAHAHQAXAXASAbIAWAhIgYgDIguADIgCABQgXAFgWAKIgTAIIgXANIgCABIgoAZIgCABIgjAZIgEAEQgQANgQAPIgGAEIgEAEIgFAEIgXAZIgDACIgeAkIgIALIgBACIgSAYgAjhiFQgSgHgagDQgOAAgSAHQgSAHgOgQQgPgQAQgXIAbgkIATgSIAKgHIAlgbIADgCIAkgWIAPgIIAHgCIAUgIIAsgNIAwgIIABABQgOAFgPAJIgUAOIgQALIgVAVIgLAOIgPAWIgKASIgQArIgJA0g");
	this.shape_12.setTransform(9.2,-51.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#38772D").s().p("AgFAOIAKgbIABAAIgDAPIgCAMg");
	this.shape_13.setTransform(34.6,-3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8C9C9").s().p("AjJCSIAHgBIgIACgAj8AhIACAAIgCABgAD5hrIgBgCIgKgQIANATIACAKgADgiJIgEgCIgIgDIAAgEIANAJIADACg");
	this.shape_14.setTransform(17.4,-32.9);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-85.4,68.3,83.7);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7B3422").ss(1,1,1).p("AjfhXQBPgdBzAZQBMARA1ArABuhVQAuAWAmAfQBOA9gHBBQgBAQgHAJQgVAchHgjQgbgOgcgMQhGgehMgYQhuggg/ABQg/ACAIgnQAFgbAkgYIArgYQBMgiBtAZQA4AMAxAXg");
	this.shape.setTransform(22.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE4844").s().p("AClBwQgbgOgcgMQhGgehMgYQhuggg/ABQg/ACAIgnQAFgbAkgYQAqgPA0AAIAAAAIABAAQArAAAyAKIAGABQBMARA1ArQg1grhMgRIgGgBQgygKgrAAIgBAAIAAAAQg0AAgqAPIArgYQBMgiBtAZQA4AMAxAXQAuAWAmAfQBOA9gHBBQgBAQgHAJQgJAMgTAAQgYAAgogTg");
	this.shape_1.setTransform(22.4,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-12.6,53.3,26.4);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("ADNgvIABAJIACAlIABAjIgBAUIAAANIgBAVAjQBqIALgMIAMgTIAEgGIABgCIAEgIIABgFIAGgPIABgEIABgBIAEgVIAAgRADIhpIAEAqIABAQ");
	this.shape.setTransform(15,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#018786").ss(1,1,1).p("AC9AKIguAWAhvBQIglgHQgRgEgXgNIAOgiIADgHIARgYIAFgHIAFgHIARgUIAJgIIAkgdABeA2IgtAKIgwAKIgvAHIg3gBIgKAAACJAjQgTALgYAI");
	this.shape_1.setTransform(16.8,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#856A03").ss(1,1,1).p("AB/kdIgSADIgqAIIgDACIgrASQgPAHgLAKIgNAJIgjAgIgfAjIgcAmQgMATgJAWIgGAOIgKAfIAAAAIACAEIACAEIABAFIAHAYIACAJIAEAoIAAACIAAAHIABARIASgYIABgCIAIgKIAeglIADgCIAXgYIAFgFIAEgEIAGgEIAggcIAEgDIAjgaIACgBIAogZIACgBIAXgMIATgJQAWgJAXgGIACAAIAugEIAYAEQgKgSgMgQQgSgbgXgXIgHgGIgMgMIgHgFIgagVQgTgMgUgJQgjgQgngHIgfgFIgpgBIgGAAIgCAAIgwAIIgsANIgUAIIgHADIgPAIIgkAVIgDACIglAbIgKAIIgTASIgbAjQgQAXAPAQQAOAQASgHQASgHAOABQAaACASAIIANAHIAJgzQAFgWALgWIAKgRIAPgXIALgOIAVgVIAQgLIAUgOQAPgJAOgFIABgBADyidIAHAMIAEAJQARAhALAjIAAABIAFAVIAFAWIADAYIABAUIgBAUIgBAEIAJADIAEACIADACIABABIAEADIAGAGIAKAQIABACIAEALIAFAYIABAGQABAZgEAVQgFAVgMANIgDADQgQAPgbgCAhvFNIgBAAIgHABIgCABIguABIgSgEQgLgFgIgIIgBAAQgIgJgDgLQgCgLACgNQADgSAMgNIABgBIAEgEIASgOIAIgDIACgBIAGgDIAEgBIASgIQAJgfABgWIAAgFIAAgGIAAgkIAAgZIAAgJAEnAUQgQgLgVgEIgxgFIgsAEIgIAAIgeAHIgPAEIgsAPIgLAFIgQAHIgGACIgKAFIAAAAIgCAAIgDACIgkAUIgVANIgUALIgnAbIgDADIgUAQIgEAEIgHAGAAIDQIACgBIARgHIAHgCIAwgRIAhgJIAOgEIADAAIASgEIAWgEIAFgBIAZgCIAagBIADAAIAIAAIAIAAIAWACIAJABIACABIALABAhdECIAmgUIAAAAIABAAIAOgHIALgGIAUgJIARgIAjUh9IATATIAbAiIACAEIAPAfAiMDRIASgHAiMEgIAngZIACgBIAGgE");
	this.shape_2.setTransform(8,-37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9D49E").s().p("AhpAYQgLgCgHgEIAKAAIA2ABIAxgHIAugJIAugJQAXgIATgLQgRAMgXAGIgCABIgsAMIgtALIgxAHIgZACQgNAAgLgCg");
	this.shape_3.setTransform(18,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCCC").s().p("AhlCFIgKAAIgmgHQgRgFgXgMIAOgjIADgGIASgaIAEgHIAFgHIARgUIAKgIIAkgaQABATAJANIACACQAGANALAHIAMAHIAuACIAVgJIARgMIAIgIQALgIAGgOQALATAbgFQAXgCAOgRQANgPAEgZIABgEIABgZIgCgSQgDgRgGgKIAIAAIAWACIAFArIAAAQIABAJIACAlIABAiIgBAUIAAAOIgBAUIguAWIgEAEIgCAAQgTALgXAIIguAKIgwAJIgvAIg");
	this.shape_4.setTransform(16.9,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgoBdQgWgKgLgQIAMgNIALgSIAEgHIABgBIAEgJIABgFIAHgOIABgDIAAgBIAEgUIAAgUIAkgUIABgBIAAAAIAOgHIALgFIAUgJIAUgIIgDARIgDAbIABAKIgkAcIgKAIIgRASIgEAHIgDAHIgSAaIgDAGIgNAjg");
	this.shape_5.setTransform(1.5,-6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8C9C9").s().p("Ai6CSIAHgBIgJACgAjtAiIgIADIgSAOIgEAEQALgSATgDgAjtAhIACAAIgCABgAEIhrIgBgCIgKgQIANATIACAKgADviJIgEgCIgJgDIABgEIANAJIACACg");
	this.shape_6.setTransform(14.7,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AirDtIAAgjIAAgaIAAgIIASgYIABgCIAIgLIAegkIADgEIAXgZIAFgEIAEgEIAGgFIAigbIAEgEIAjgXIAAgBIAogZIACgBIAXgNIATgIQAWgKAXgFIACgBIAugDIAYADIAHANIAEAJQARAhALAgIAAACIAFAUIAFAWIADAZIABAVQgQgKgVgFIgxgEIgsADIgIABIgeAGIgPAEIgsAQIgLAFIgQAGIgEADIgKAEIAAAAIgCABIgDACIgmAUIgVAMIgUAMIgnAbIgDACIgUARIgEADIgHAHgAjNAWIgCgDIgbghIgTgSIAJg0QAFgWALgVIAKgSIAPgWIALgOIAVgVIAQgMIAUgNQAPgJAOgFIABgBIAGgBIApACIAhAFQAlAGAjAQQAUAJATANIgSACIgqAJIgDABIgpATQgPAHgNAJIgNAJIgjAgIgfAjIgcAmQgMATgJAVIgGANIgKAfg");
	this.shape_7.setTransform(12.1,-46.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("Ai5FMQgLgFgIgIIgBgBQgIgIgDgMQgCgKACgOQADgRAMgNIABgBQALgTATgCIACgBIAGgDIAEgBIASgIQAJggABgVIAAgFIAHgGIAEgEIAUgQIADgDIAngbIAUgMIAVgMIAkgUIADgCIACgBIAAAAIAKgEIAGgDIAQgGIALgFIAsgQIAPgEIAegGIAIgBIAsgDIAxAEQAVAFAQAKIgBAUIgBAFIAJADIAEACIADACIABABIAEADIAGAGIAKAQIABACIAEALIAFAYIABAGQABAYgEAVQgFAWgMANIgDADQgQAPgbgCIgBgQIgFgrIAJACIACABIALABIgLgBIgCgBIgJgCIgWgCIgIAAIgIAAIgDAAIgaACIgZACIgFABIgWADIgSAEIgDABIgOAEIghAJIgwARIgHACIgRAHIgCABIgRAIIgUAJIgLAFIgOAHIgBAAIAAABIgmAUIgGAEIgCAAIgnAaIAngaIACAAIAGgEIAAAUIgEAUIgBABIgBAFIgGAOIgBAFIgEAJIgBABIgBAAIgHABIgCABIguABgAiMDRIASgIgAENCdgAiDA6IAAgHIAAgCIgEgoIgCgJIgHgYIgBgFIgCgEIgCgEIAAgBIAKgfIAGgNQAJgXAMgSIAcgmIAfgjIAjghIANgJQALgJAPgHIArgTIADgBIAqgJIASgCIAaAUIAHAGIAMALIAHAHQAXAXASAaQAMARAKARIgYgDIguADIgCABQgXAGgWAJIgTAJIgXAMIgCABIgoAZIgCABIgjAZIgEAEIggAbIgGAFIgEAEIgFAFIgXAYIgDACIgeAkIgIALIgBACIgSAYgAjhiEQgSgJgagBQgOgBgSAHQgSAGgOgPQgPgRAQgWIAbgkIATgSIAKgIIAlgbIADgBIAkgVIAPgIIAHgDIAUgIIAsgNIAwgIIABABQgOAFgPAJIgUAOIgQALIgVAVIgLAOIgPAWIgKASQgLAVgFAWIgJA0g");
	this.shape_8.setTransform(8,-37);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.1,-70.7,68.3,76.8);


(lib.shape29 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6A6A6A").ss(1,1,1).p("AgrgCIBXAF");
	this.shape.setTransform(8,-2.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6A6A6A").ss(1,1,1).p("AhLAdICXg5");
	this.shape_1.setTransform(-4.4,-0.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6A6A6A").ss(1,1,1).p("ABvhUQAHAJADASIACARIgBAZIgBAEQgEAXgNAPQgOARgXAEQgbAFgLgVIAAgCQAJgUgCgZIAAgEIgCgVIgFgTIgGgPIgBgCAAdAgIgRAZIgIAHIgPANIgVAIIgwgCIgMgGQgLgIgGgMIgCgDQgJgPgCgTIAAgKIACgZIADgR");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AhQBTIgMgGQgLgIgGgMIgCgDQgJgPgCgTIAAgKIACgZIADgRIACgBIARgHIAGgCIAwgRIAigJIALgEIADAAIASgEIABACIAGAPIAFATIACAVIAAAEIAAAIQAAAUgHARIAAACIgRAZIgIAHIgPANIgVAIgAAdAgIAAgCQAHgRAAgUIAAgIIAAgEIgCgVIgFgTIgGgPIgBgCIAXgEIAFgBIAZgCIAZgBIADAAIAIAAQAHAJADASIACARIgBAZIgBAEQgEAXgNAPQgOARgXAEIgKABQgTAAgJgRg");
	this.shape_3.setTransform(0,-0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-8.7,24.8,17.2);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6A6A6A").ss(1,1,1).p("ABvhUQAHAJADASIACARIgBAZIgBAEQgEAXgNAPQgOARgXAEQgbAFgLgVIgRAZIgIAHIgPANIgVAIIgwgCIgMgGQgLgIgGgMIgCgDQgJgPgCgTIAAgKIACgZIADgRAAdAgIAAgCQAJgUgCgZIAAgEIgCgVIgFgTIgGgPIgBgC");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2AWIgEgJIgBgGIAFgNQAFgGAHAAQAGAAAFAGQAFAGAAAHIAAAGIgFAJQgFAGgGAAQgHAAgFgGgAAjANQgDgBgCgDQgFgHABgHQgBgJAFgGQAFgHAHAAQAHAAAGAHQAEAGAAAJQAAAHgEAHIgEAEQgEADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(3.3,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQBTIgMgGQgLgIgGgMIgCgDQgJgPgCgTIAAgKIACgZIADgRIACgBIARgHIAGgCIAwgRIAigJIALgEIADAAIASgEIAXgEIAFgBIAZgCIAZgBIADAAIAIAAQAHAJADASIACARIgBAZIgBAEQgEAXgNAPQgOARgXAEQgbAFgLgVIAAgCQAHgRAAgUIAAgIIAAgEIgCgVIgFgTIgGgPIgBgCIABACIAGAPIAFATIACAVIAAAEIAAAIQAAAUgHARIAAACIgRAZIgIAHIgPANIgVAIgAgVg9IgFAQIABAFIAEAJQAFAHAHAAQAGAAADgHIAEgJIABgFQAAgJgFgHQgDgFgGAAQgHAAgFAFgAA/hLQgFAHAAAJQAAAJAFAHQACACACABQAEADAEAAQAFAAAEgDIADgDQAFgHAAgJQAAgJgFgHQgFgHgHAAQgHAAgFAHg");
	this.shape_2.setTransform(0,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-8.7,24.8,17.2);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014E98").ss(1,1,1).p("AACgNIgCAPIgBAL");
	this.shape.setTransform(25.8,40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#018786").ss(1,1,1).p("AC6BTIgBAHAi3B2QgEgSACgYQAAgaAGgWQAHgYAKgTIADgGIASgbIAFgHIAEgGIARgUIAKgIIAkgdAiMgBQASgMAUgGQgOATAGAXQAFAWAZACQAXADAagDIAvgHIAvgKIAugPQAXgIATgJIAQgMAC4BaIgMAcAC6BTIgCAH");
	this.shape_1.setTransform(7.5,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#014589").ss(1,1,1).p("AD5heIABAKIACAkIAAAlIAAASIAAANIgBAbIgBADIgIBOIgGAZAj7B7IAKgFQAUgKASgNIAigeIAQgSIAMgTIAEgGIAAAAIABgCIAEgIIABgFIAGgNIABgEIABgBIAEgVIAAgTAD0iYIAEArIABAP");
	this.shape_2.setTransform(2.6,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#856A03").ss(1,1,1).p("AhAlPIAGAAIApABIAfAFQAnAHAjAQQAUAJATAMIAaAVIAHAFIAMAMIAHAGQAXAXASAbIAWAiIAHAMIAEAJQARAhALAjIAAABIAFAVIAFAWIADAYIABAUIgBAUIgBAEIAJADIAEACIADACIABABIAEADIAGAGIAKAQIABACIAEALIAFAYIABAGQABAZgEAVQgFAVgMANIgDADQgQAPgbgCAhvFNIgBAAIgHABIgCABIguABIgSgEIgTgNIgBAAIgLgUQgCgLACgNQADgSAMgNIABgBIAEgEQAIgIAKgGIAIgDIAIgEAiiDaIAAAAIAEgBIABgBIADgBIACgBIAFgCIABgBQAPghABgWIAAgFIAAgGIAAgkIAAgZIAAgJIgBgRIAAgHIAAgCQgBgUgDgUIgCgJIgHgYIgBgFIgCgEIgCgEIAAAAIgPgfIgCgEIgbgiIgTgTIgNgHQgSgIgagCQgOgBgSAHQgSAHgOgQQgPgQAQgXIAbgjIATgSIAKgIIAlgbIADgCIAkgVIAPgIIAHgDIAUgIIAsgNIAwgIIACAAIgBABQgOAFgPAJIgUAOIgQALIgVAVIgLAOIgPAXIgKARQgLAWgFAWIgJAzAB/kdIgSADIgqAIIgDACQgWAIgVAKIgaARIgNAJIgjAgIgfAjIgcAmIgVApIgGAOIgKAfAiCBLIASgYIABgCIAIgKIAeglIADgCIAXgYIAFgFIAEgEIAGgEIAggcIAEgDIAjgaIACgBIAogZIACgBIAXgMIATgJQAWgJAXgGIACAAIAugEIAYAEAiCCXIAHgGIAEgEIAUgQIADgDIAngbIAUgLIAVgNIAkgUIADgCIACAAIAAAAIAKgFIAGgCIAQgHIALgFIAsgPIAPgEIAegHIAIAAIAsgEIAxAFQAVAEAQALAiSDUIAYgKAhdECIgGAEIgCABIgnAZAiYDWIAGgCAhdECIAmgUIAAAAIABAAIAOgHIALgGIAUgJIARgIIACgBIARgHIAHgCIAwgRIAhgJIAOgEIADAAIASgEIAWgEIAFgBIAZgCIAagBIADAAIAIAAIAIAAIAWACIAJABIACABIALAB");
	this.shape_3.setTransform(0,-8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#38772D").s().p("AgFANIAKgZIABAAIgDAOIgCALg");
	this.shape_4.setTransform(25.4,40.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("Ah0CRIAAhBIAKgFQAUgKASgNIAigeIARgSIALgRIAEgGIAAAAIABgCIACgIIABgFIAHgPIAAgEIABgBIAEgVIAAgTIAmgUIABgBIAAAAIAOgHIALgFIAUgJIATgIIgCARIgDAbIABAJIgkAdIgKAIIgQAUIgFAGIgFAHIgRAZIgEAGQgKAVgHAYQgDAWgBAaQgBAXACATg");
	this.shape_5.setTransform(-10.8,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCCC").s().p("Ai/CrQgEgSABgYQABgZAGgXQAGgXALgVIADgHIARgbIAFgEIAFgGIARgUIAJgJIAkgcQACATAJAPIACADQAGAMALAIIAMAGIAuABIAVgHIARgNIAIgHQAKgLAHgOQALAVAbgFQAXgEAOgSQANgOAEgZIABgEIABgZIgCgRQgDgSgHgJIAIAAIAXACIAEAqIABAPIABAKIACAlIABAlIgBAUIAAAKIgBAbIgBADIgHBOIgHAZIgCAIIgNAbgAh2BMQAFAWAYACQAYADAZgDIAwgHIAugLIAugOQAYgIASgLIARgMIgRAMQgSALgYAIIguAOIguALIgwAHQgZADgYgDQgYgCgFgWQgCgHAAgHQAAgPAJgPQgUAGgSAMQASgMAUgGQgJAPAAAPQAAAHACAHg");
	this.shape_6.setTransform(8.4,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8C9C9").s().p("Ai6CSIAHgBIgJACgAjtAiIgIADQgKAGgIAIIgEAEQALgSATgDgAjtAiIAAgBIAIgDIAAAAIgIAEgAEIhrIgBgCIgKgQQAIAJAFAKIACAKgADviJIgEgCIgJgDIABgEIANAJIACACg");
	this.shape_7.setTransform(6.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("Ai5FLIgTgMIgBAAIgLgUQgCgLACgNQADgSAMgNIABgCQALgRATgDIAIgEIAEgBIABgBIADgBIACgBIAGgCIAAgBQAPghABgWIAAgFIAHgGIAEgEIAUgRIADgCIAngbIAUgLIAVgNIAkgUIADgCIACAAIAAAAIAKgFIAGgDIAQgGIALgFIAsgQIAPgDIAegHIAIAAIAsgEIAxAEQAVAFAQALIgBAUIgBAEIAJADIAEACIADACIABAAIAEAEIAGAFIAKARIABACIAEAKIAFAZIABAGQABAYgEAWQgFAUgMAOIgDADQgQAPgbgDIgBgPIgFgqIAJABIACAAIALACIgLgCIgCAAIgJgBIgWgCIgIAAIgIAAIgDAAIgaABIgZACIgFAAIgWAFIgSADIgDABIgOAEIghAJIgwAQIgHADIgRAHIgCABIgRAIIgUAJIgLAFIgOAIIgBAAIAAAAIgmAUIgGAEIgCABIgnAYIAngYIACgBIAGgEIAAATIgEAWIgBABIgBADIgGAQIgBAEIgEAIIgBACIgBAAIgHABIgCABIguABgAiSDUIAYgKgAhdECgAENCegAiDA6IAAgHIAAgCQgBgUgDgUIgCgJIgHgYIgBgFIgCgEIgCgEIAAgBIAKgeIAGgOIAVgpIAcgnIAfgjIAjgfIANgJIAagRQAVgKAWgJIADgBIAqgIIASgDIAaAVIAHAEIAMANIAHAGQAXAXASAaIAWAjIgYgEIguAEIgCAAQgXAGgWAJIgTAIIgXANIgCABIgoAZIgCABIgjAaIgEADIggAbIgGAFIgEAEIgFAFIgXAYIgDACIgeAlIgIAKIgBACIgSAYgAjhiEQgSgIgagDQgOAAgSAHQgSAGgOgPQgPgRAQgWIAbgjIATgSIAKgJIAlgbIADgBIAkgWIAPgHIAHgEIAUgIIAsgMIAwgIIABABQgOAFgPAJIgUANIgQAMIgVAVIgLAOIgPAXIgKARQgLAWgFAWIgJAzg");
	this.shape_8.setTransform(0,-8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AirDtIAAgjIAAgaIAAgIIASgYIABgCIAIgLIAegkIADgEIAXgZIAFgEIAEgEIAGgFIAigbIAEgEIAjgXIAAgBIAogZIACgBIAXgNIATgIQAWgKAXgFIACgBIAugDIAYADIAHANIAEAJQARAhALAgIAAACIAFAUIAFAWIADAZIABAVQgQgKgVgFIgxgEIgsADIgIABIgeAGIgPAEIgsAQIgLAFIgQAGIgEADIgKAEIAAAAIgCABIgDACIgmAUIgVAMIgUAMIgnAbIgDACIgUARIgEADIgHAHgAjNAWIgCgDIgbghIgTgSIAJg0QAFgWALgVIAKgSIAPgWIALgOIAVgVIAQgMIAUgNQAPgJAOgFIABgBIAGgBIApACIAhAFQAlAGAjAQQAUAJATANIgSACIgqAJIgDABQgWAJgTAKIgcAQIgNAJIgjAgIgfAjIgcAmIgVAoIgGANIgKAfg");
	this.shape_9.setTransform(4.1,-17.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.1,-41.8,68.3,83.7);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("ABDhkIACAzQAEAZAAAYQAAAYgFAZQgEAZgKARQgKARgZACQgXABgPgRQgOgPgJgWIgPgsIgKgtIgFgwIAAgGIAAgX");
	this.shape.setTransform(0,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgTBpQgOgPgJgWIgPgsIgKgtIgFgxIAAgFIAAgYQBHguBEA4IACAzQAEAYAAAXQAAAZgFAZQgEAagKAQQgKARgZACIgEABQgUAAgOgQg");
	this.shape_1.setTransform(0,11.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-0.3,14.8,24.2);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("AA7hmIAAAoIADAiQADAZgFAVQgFAYgJAVQgJAVgTAMQgSANgYgKQgWgJgIgWQgJgWABgZQAAgXAFgYIAJhF");
	this.shape.setTransform(0,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgYBsQgWgJgIgVQgJgXABgZQAAgYAFgWIAJhFQgDgFAWgMIATgHQAbgJATAQIAXAJIAAAoIADAjQADAWgFAXQgFAZgJAVQgJAUgTANQgLAHgLAAQgKAAgKgFg");
	this.shape_1.setTransform(0,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,0,12.8,22.7);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("AGphMIgDARIgJAuIgHAsIgFAWIgGAWIgEALIgBADIgIAUIgJASQgIAOgbAdQgcAdh/AMIhvgBIggABIgwACIgoAAIgMAAIgzgCIgygDIgcgCIgggEQhdgJgKgNQgKgNgCgKIgBgXIAAgtIAAgHIACgdIADgVIAGguIgHAGQgQAKgZAHQgYAIgXgMQgWgJADgZQAEgWAPgMIAYgNQgWgQAAgXQACgYAWgKIAvgCQAWAIAPARQAOAQAJAVIAGANIArgCIABAAIAagCIAXgCIAvgHIAvgMQAWgHAWgKQAVgKASgNQAQgOAQgQIAHgIIAAAAQAZgZC2gHQC1gHAaAXIAAAGIgBADIgHBOIgHAZIgBAHIgBAAIACgHAG5jDIgzAZQgSALgYAIIgtAKIgwAKIgxAHQgZABgdgCIgvgHQgTgFgYgNQAAgDgCACQgWgKgLgSAlPhWIgwAEIgOAGAlGgOIADgH");
	this.shape.setTransform(-0.6,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#008B8A").ss(1,1,1).p("AivhsIgDAMQgGAWAAAaQgCAbAFAVQAGAWAJATQAKATAQAPQANANAPAIIAHAEQATAIAaABIAxgCIAsgKIAEgBQAVgGASgIIAkgVIAhgbQAPgRAKgRIAPgi");
	this.shape_1.setTransform(23.2,-12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#07295C").s().p("AhRArIgvgHQgTgFgYgOQAAAAAAgBQAAAAAAAAQgBgBAAABQAAAAAAAAQgXgKgLgPQAZgZC1gHQC0gHAaAWIgyAaQgTAJgXAHIguALIgvAJIgwAHIgWABIgggBg");
	this.shape_2.setTransform(22.8,-25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("AhyB6IgHgEQgOgHgOgOQgQgPgKgTQgJgTgFgXQgFgVABgZQABgaAGgXIADgMQAYAOATAFIAvAHQAdACAZgCIAvgHIAwgJIAtgLQAYgHASgLIAzgaIAAAHIgBACIgHBPIgHAZIgCAHIgPAfQgKAUgPAQIghAbIglAVQgRAJgVAFIgFABIgsAKIgwACQgaAAgUgJg");
	this.shape_3.setTransform(24,-14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgoDEIgMAAIgzgBIgygEIgcgCIgggEQhdgJgKgMQgKgNgCgLIgBgXIAAgtIAAgGIACgeIADgVIAGguIgHAGQgQAMgZAIQgYAFgXgKQgWgLADgZQAEgWAPgMIAYgNQgWgQAAgWQACgYAWgKIAvgDQAWAIAPARQAOARAJAUIAGANIArgBIABAAIAagDIAXgCIAvgHIAvgMQAWgHAWgKQAVgKASgNQAQgOAQgQIAHgIIAAAAQALASAWAKQABAAAAgBQAAAAABAAQAAAAAAABQAAAAAAABIgDAMQgGAXgBAZQgBAbAFAWQAFAXAJASQAKASAQAOQAOAOAOAHIAHAFQAUAIAaABIAwgCIAugKIAFgCQAVgFARgIIAlgVIAhgZQAPgRAKgTIAPghIABAAIgDAQIgJAuIgHAsIgFAWIgGAXIgEAKIgBADIgIAVIgJASQgIANgbAdQgcAdh/ANIhvgCIggACIgwABgAk+gfIADgHgAl3hjIgOAGIAOgGIAwgEg");
	this.shape_4.setTransform(-1.4,-6.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.8,-29.4,88.4,42.8);


(lib.shape19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("AA+hZIAABSIgHAtQgGAXgRATQgQAUgZgFQgXgEgPgUQgLgRgCgaQgCgbAEgVIAKhL");
	this.shape.setTransform(0,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0054A8").s().p("AgJBpQgXgEgPgUQgLgRgCgaQgCgbAEgVIAKhLQAMgHAWgKQATgJAfARIAaAPIAABQIgHAvQgGAXgRATQgMAQgUAAIgJgBg");
	this.shape_1.setTransform(0,10.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,0,12.5,21.3);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#014589").ss(1,1,1).p("AAshlIAJAvIALAtQAEAXgFAXQgGAZgOARQgNATgXAEQgXAEgTgQQgQgNgFgYIgFgvIgEhZ");
	this.shape.setTransform(0,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0054A8").s().p("AgjBbQgQgNgFgXIgFgwIgEhZQAygfA7ANIAJAwIALAsQAEAXgFAYQgGAYgOASQgNASgXAEIgIABQgTAAgPgNg");
	this.shape_1.setTransform(0,9.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-0.9,13.4,21);


(lib.shape13 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EAi4AIuQgzgkgjgqQijAdi8AAIjzgNQkWggjXhtQjth2g0ieIgnAcQi3B6kDAAQkDAAi1h6QgugggjgiQiRBPjAgBQjUAAichgQg5BrjABSQkQB2mCgBQiYABiGgTQggBdhdBKIgTAOQifB2jiAAQjiAAigh2Qigh1AAimQAAilCghzQCEhhCxgRQA/hdCrhJQERh1GBAAQGCAAEQB1IA3AZQAViHCNhlQCmh0DqgBQDqABCmB0QAiAZAbAaQCnhhDmgBQEDABC3B7QCDBYAmBxQBAg1BfgwQExiZGvAAQGvAAEwCZQDdBvA9CQQB+AeBlBJQCnB3AACsQAACsinB6QinB5jtAAQjsAAinh5g");
	this.shape.setTransform(256.6,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.102)").s().p("AEoDGQhGgzgpg8Qh9BCidAAQikAAh9hGQggApgtAkQiXB7jVAAQjVAAiYh7IgfgcIgcARQiBBKi3AAQi2AAiBhKIgdgSQBdhKAfhaQCHASCYAAQGBAAERh2QDAhSA5hrQCcBhDUAAQC/AACQhPQAiAjAvAfQC3B7EDAAQEDAAC3h7IAngcQA0CeDtB1QDXBsEWAhIgWAMQiRBRjOAAQjNAAiRhRIgMgHIg1ArQipB9jxAAQjxAAiph9g");
	this.shape_1.setTransform(221.4,50.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.251)","rgba(255,255,255,0.4)"],[0,1],0,41,0,-40.9).s().p("AWHEMQnbgRrxANQtkAUnDAGQsRAKpGgZIAAnxQB+g+C1gkQESg3GSACIBBABICjAFIIyAmII+A7ILYBaILHBXIGVAoIIbAfQCVADB4gFIAAGOQnIhTp1gXg");
	this.shape_2.setTransform(250,242.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.6)","rgba(255,255,255,0.8)"],[0,1],0,38.3,0,-38.1).s().p("EgnDAFlIAAmOIAAkrQJGAaMRgLQHDgFNkgVQLxgNHbASQJ1AXHIBSIAADIIAAGOg");
	this.shape_3.setTransform(250,304.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AZoKuIAwg3QBAhFAahmQhHgBg4gwQgFgEADgEQBUh4BlhiIgxgGQgegEAMghQASgvAjgdQBXhIAqiIQghgDgegNQgHgCADgGQAVg/AwgmQAagWAKgmQAhhyBOg5QAKA+ATA5QAoB7AsB5QARAqgWAeQgkgRgjAXQAvDCBMCuIAAAEQgCANgJAFQgGAHgIgDIgWgJQgjgPgggDIgHAOQAKAYAsBIQAsBIAhCGQgTAvhlg+QgFApAQAfIAUAigEgikAFrIB2ikQhmAwgvgDQgugEAqhEQAphEB7i0Ig+ACQglABAIgeQAMgsAkgfQBbhOAWh9IhSgFQgHgBACgkQACglA6g1QA7g0APhBQAPhBArgVQAZA0AjAvQBMBlBQBjQAdAjgUAdQgwgJglAaQBiCkCECNIAAADQABAMgKAGQgGAHgKgBIgdgFIhWgFIgFANQASARBFA5QBFA4BFBxQgNAsiJgnQACAlAbAYQAkAhApAbIhCgBQmSgCkSA3QAFgSAbgngA08F0QASgVASgQIBJhKIgDgMIhGACIgYADQgIABgEgGQgIgIABgLIAAgDQBxiIBWifQgdgbgmAIQgPgeAYgiICHjDQAegtAXg0QBABBAIBqQADAiAVAYQAlArAIA7QABAGgGAAQggAFgigEQAMB9BGBQQAcAhAIAsQAFAfgegDIgygEQBJBiA2Bvg");
	this.shape_4.setTransform(255.2,168.4);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9BCEEC","#55B5DD"],[0.416,1],0,173,0,-172.9).s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape_5.setTransform(250,170);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
	this.cache(0, 0, 500, 340);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-51.9,641.3,392);


(lib.shape12 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AA0AeIg0AeIgzgeIAAg7IAzgeIA0Aeg");

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("ABQgtIifBb");

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AhPgtICfBb");
	this.shape_2.setTransform(0,0.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAAhcIAAC5");
	this.shape_3.setTransform(0,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-6,16.2,12.1);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAJIgFgHQAAgNAIgJQANgOAdAKIAEAHQAEAFgBAMIgEATQgNAIgMACg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.shape9 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2282AA").ss(1,1,1).p("AALgcQgVARABAo");
	this.shape.setTransform(-7.2,1.9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgDAEgEIAHgDIAJADQADAEAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(-4.1,-2.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2282AA").ss(1,1,1).p("AgWgTQAKgKAMAAQANAAAKAKQAKAJAAAKQAAAMgKAJQgKAJgNAAQgMAAgKgJQgKgJAAgMQAAgKAKgJg");
	this.shape_2.setTransform(-4.2,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#55B8DD").s().p("AgWAVQgKgJAAgMQAAgLAKgIQAKgJAMAAQANAAAJAJQAKAIAAALQAAAMgKAJQgJAJgNgBQgMABgKgJg");
	this.shape_3.setTransform(-4.2,-2.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2282AA").ss(1,1,1).p("AgKgrQAKgCAIALQALALAFASQAFARgEAOQgDAPgKACQgKADgJgLQgKgLgFgSQgFgRADgOQAEgPAKgDg");
	this.shape_4.setTransform(0,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#55B8DD").s().p("AgHAjQgKgLgFgSQgFgRADgOQAEgPAKgDQAKgCAIALQALALAFASQAFARgEAOQgDAPgKACIgFABQgHAAgHgJg");
	this.shape_5.setTransform(0,1.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-5.6,11.1,11.5);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AgCgjQAbgCAUAIQAUAKACAPQABAMgTAMQgTANgcADQgaACgUgJQgUgJgCgPQgBgNATgMQASgNAcgCg");
	this.shape.setTransform(6.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgrAdQgVgJgCgPQgBgNATgMQASgNAcgCQAbgCAUAIQAUAKABAPQACAMgTAMQgTANgcADIgHAAQgWAAgQgHg");
	this.shape_1.setTransform(6.6,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-3.7,13.4,7.4);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AAMg0QAVgHALAKQALAKgFAVQgEAUgTAWQgSAVgTAHQgWAIgLgKQgLgJAFgXQAFgTASgVQATgWATgIg");
	this.shape.setTransform(3.7,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgrAyQgLgJAFgXQAFgTASgVQATgWATgIQAVgHALAKQALAKgFAVQgEAUgTAWQgSAVgTAHQgKAEgHAAQgKAAgGgGg");
	this.shape_1.setTransform(3.7,-5.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-10.8,10.5,11.3);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AADgjQAcADATANQASANgBANQgCAPgVAIQgVAJgZgDQgcgDgSgNQgTgNACgNQABgOAVgJQAUgJAaADg");
	this.shape.setTransform(6.3,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgCAkQgcgDgSgNQgTgNACgNQABgOAVgJQAUgJAaADQAcADATANQASANgBANQgCAPgVAIQgPAHgUAAIgLgBg");
	this.shape_1.setTransform(6.3,1.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-2,13.4,7.5);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AATgxQAWgEAKALQAKAMgJAUQgIATgVASQgWASgUAFQgVAFgKgMQgKgLAIgWQAIgSAWgSQAVgSAUgFg");
	this.shape.setTransform(4.9,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgyArQgKgLAIgWQAIgSAWgSQAVgSAUgFQAWgEAKALQAKAMgJAUQgIATgVASQgWASgUAFIgMABQgMAAgHgIg");
	this.shape_1.setTransform(4.9,-4.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-9.5,11.4,10.4);


(lib.shape2 = function() {
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
	var self = this;
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound42");
		
	}
	
	this.frame_7 = function(){
    this.stop ();
    if (this.parent.gameWin)
    {
      //_parent._parent.GameEndClip.gotoAndPlay("GameWonPlayground");
      this.parent.parent.GameWon = true;
      this.parent.parent.removeAllEventListeners();
      this.parent.parent.fly.removeAllEventListeners("tick");
      this.parent.parent._char.removeAllEventListeners();
      this.parent.parent.cursor = "";
    } // end if			
	
	}
	
	this.frame_8 = function() {
		playSound("sound46");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite1Puff();
    this.addChild(this["puff" + i]); 
    this["puff" + i].rotation = Math.random() * 360;
    this["puff" + i].scaleX = this["puff" + i].scaleY = (Math.random() * 40 + 80)/100;
    this["puff" + i].velX = Math.random() * 40 - 20;
    this["puff" + i].velY = Math.random() * 40 - 20;
    this["puff" + i].step = Math.random() * 10 + 10;
    this["puff" + i].on("tick", function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step;
        if (evt.currentTarget.scaleX <= 0)
        {
            self.removeChild(evt.currentTarget);
            evt.remove();
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
   this.stop();
   this.gameWin = false;  
  }
  this.frame6 = function(){
    this.gameWin = true;
  }
	// Layer 5
	this.star5 = new lib.sprite39();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite39();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite39();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite39();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite39();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite33 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape34("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-12.6,53.3,26.4);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape29("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(5));

	// Layer 1
	this.instance_1 = new lib.shape28("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(5));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-8.7,24.8,17.2);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 2
	this.eyes = new lib.sprite27();
	this.eyes.setTransform(12.8,16.6);

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance,this.eyes);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.1,-41.8,68.3,83.7);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape24("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-0.3,14.8,24.2);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape22("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,0,12.8,22.7);


(lib.sprite18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape19("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,0,12.5,21.3);


(lib.sprite16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape17("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-0.9,13.4,21);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:1});
  this.frame1 = function(){this.stop()}
  this.frame10 = function(){this.gotoAndPlay("run")}
	// Layer 5
	this.instance = new lib.sprite23();
	this.instance.setTransform(-27,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:8.3},1).wait(1).to({scaleX:1,scaleY:1,rotation:16.6},0).wait(1).to({rotation:7.5,x:-26.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.3,y:5.6},0).wait(1).to({rotation:-10.6},0).wait(1).to({rotation:-1.3,y:5.7},0).to({scaleX:1,scaleY:1,rotation:16.7},2).wait(1).to({scaleX:1,scaleY:1,rotation:25.9,x:-26.9},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.sprite21();
	this.instance_1.setTransform(11.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:25.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:11.8,y:8.1},0).to({rotation:-0.6},1).wait(1).to({scaleX:1,scaleY:1,rotation:-13.6,x:11.7},0).wait(1).to({rotation:-26.6,y:8.2},0).wait(1).to({rotation:-13.6,x:11.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.6,x:11.7},0).wait(1).to({rotation:12.3,y:8.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:25.3,y:8.2},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.shape20("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(10));

	// Layer 2
	this.instance_3 = new lib.sprite18();
	this.instance_3.setTransform(-11.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1,scaleY:1,rotation:-20.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:-11.7},0).wait(1).to({rotation:23.6,x:-11.6},0).wait(1).to({rotation:12.3},0).to({scaleX:1,scaleY:1,rotation:-9.7},2).wait(1).to({scaleX:1,scaleY:1,rotation:-20.8},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.sprite16();
	this.instance_4.setTransform(27.6,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.8,y:7.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5,y:7.6},0).to({rotation:8.4},2).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:27.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5,y:7.7},0).to({scaleX:1,scaleY:1,rotation:-10.9},1).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6,x:27.6,y:7.6},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(9).call(this.frame10))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-29.4,88.4,60.3);


(lib.sprite10Snow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape12("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape11("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(2))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.sprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape5("synched",0);

	this.instance_1 = new lib.shape6("synched",0);

	this.instance_2 = new lib.shape7("synched",0);

	this.instance_3 = new lib.shape8("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-9.5,11.4,10.4);


(lib.sprite3Fly = function() {
	this.initialize();
  var self = this;
	// Layer 3
	this.instance = new lib.shape9("synched",0);

	// Layer 2
	this.instance_1 = new lib.sprite4();
	this.instance_1.setTransform(0.1,-1.5,0.882,0.882);

	// Layer 1
	this.instance_2 = new lib.sprite4();
	this.instance_2.setTransform(0.1,-1.5,0.674,0.872,0,0,180);

  this.addChild(this.instance_2,this.instance_1,this.instance);
  
  function pickTarget()
  {
    goalX = Math.random() * (500 + 200) - 100;
    goalY = Math.random() * 150;
    turn = Math.random() * 8 + 8;
    targetSpeed = Math.random() * 9 + 1;
    if (Math.random() * 4 < 1)
    {
        goalX = self.parent._char.x;
        goalY = self.parent._char.y;
        turn = Math.random() * 5 + 15;
        targetSpeed = baseSpeed;
        if (baseSpeed < 50)
        {
            ++baseSpeed;
        } // end if
    } // end if
  } // End of the function
  function fly()
  {
    if (self.x >= goalX)
    {
        self.scaleX = scale;
    }
    else
    {
        self.scaleX = -scale;
    } // end else if
    speed = speed + (targetSpeed - speed) / 12;
    targetRad = Math.atan2(goalY - self.y, goalX - self.x);
    targetAngle = targetRad * 180 / 3.141593E+000;
    var delX = self.x - goalX;
    var delY = self.y - goalY;
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
  var goalX;
  var goalY;
  var rotation = Math.random() * 360;
  var speed = Math.random() * 9 + 1;
  var targetSpeed = Math.random() * 9 + 1;
  var baseSpeed = 10;
  var turn = 0;
  var targetAngle = 0;
  var scale = this.scaleX = this.scaleY = (Math.random() * 40 + 60)/100;
  this.init = function(){
    pickTarget();
    this.on("tick", fly);
  }
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,-10,17.7,15.8);


(lib.sprite1Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite31 = function() {
	this.initialize();

	// Layer 2
	this.eyes = new lib.sprite27();
	this.eyes.setTransform(20.9,-12.4);

	// Layer 1
	this.instance = new lib.shape32("synched",0);

	this.addChild(this.instance,this.eyes);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.1,-70.7,68.3,76.8);


(lib.sprite14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{closed:0,retract:11});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){
	 this.head.on("tick",  function ()
   {
    if (Math.random() * 100 < 1)
    {
        self.head.eyes.play();
    } // end if
   });
   this.stop ();	
	}
	this.frame_1 = function() {
	 this.head_1.on("tick",  function ()
   {
    if (Math.random() * 100 < 1)
    {
        self.head_1.eyes.play();
    } // end if
   });	  
		playSound("sound30");
    		
	}
	this.frame_6 = function(){
	  this.stop();
	  this.parent.tongueHit = true;
	}
	
	this.frame_7 = function() {
		playSound("sound35");
    this.parent.tongueHit = false;	
	}
	this.frame_10 = function(){this.gotoAndStop("closed")}
	this.frame_15 = function() {
		playSound("sound36");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(1).call(this.frame_7).wait(3).call(this.frame_10).wait(5).call(this.frame_15).wait(9));

	// Layer 4
	this.instance = new lib.shape37("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({startPosition:0,_off:false},0).wait(10));

	// Layer 3
	this.tongue = new lib.sprite33();
	this.tongue.setTransform(20,-9.9,0.265,0.713,0,0,-34.6);
	this.tongue._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tongue).wait(1).to({_off:false},0).wait(1).to({scaleX:0.53,scaleY:0.82,skewY:-21.9,x:18.2,y:-9.9},0).wait(1).to({scaleX:0.74,scaleY:0.9,skewY:-12.1,x:16.8,y:-9.8},0).to({scaleX:0.85,scaleY:0.94,skewY:-6.6,x:16},1).wait(1).to({scaleX:0.97,scaleY:0.99,skewY:-1.1,x:15.2,y:-9.9},0).wait(1).to({scaleX:1,scaleY:1,skewY:0,x:15,y:-9.8},0).to({scaleX:0.67,scaleY:0.73,skewY:-15.2,x:17.2},1).wait(1).to({scaleX:0.35,scaleY:0.46,skewY:-30.6,x:19.5},0).wait(1).to({scaleX:0.26,scaleY:0.39,skewY:-34.4,x:20},0).wait(1).wait(1).to({scaleX:1,scaleY:1,skewY:0,x:15},0).wait(1).to({scaleX:0.59,scaleY:0.66,skewY:-18.9,x:17.8},0).to({scaleX:0.43,scaleY:0.53,skewY:-26.6,x:18.9},1).wait(1).to({scaleX:0.26,scaleY:0.39,skewY:-34.4,x:20},0).to({_off:true},1).wait(10));

	// Layer 2
	this.head = new lib.sprite25();
	this.head.setTransform(9.2,-43.5);

	this.head_1 = new lib.sprite31();
	this.head_1.setTransform(0.8,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.head}]}).to({state:[{t:this.head_1,p:{scaleX:1,scaleY:1,rotation:0,x:0.8,y:-14.3}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.999,scaleY:0.999,rotation:-16.4,x:0,y:-14.8}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.998,scaleY:0.998,rotation:-29.5,x:-0.7,y:-15.2}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.997,scaleY:0.997,rotation:-36.9,x:-0.7,y:-15.2}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.997,scaleY:0.997,rotation:-44.3,x:-1.5,y:-15.6}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.998,scaleY:0.998,rotation:-46,x:-1.6,y:-15.6}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.999,scaleY:0.999,rotation:-25.5,x:-0.5,y:-15}}]},1).to({state:[{t:this.head_1,p:{scaleX:1,scaleY:1,rotation:-4.9,x:0.5,y:-14.5}}]},1).to({state:[{t:this.head_1,p:{scaleX:1,scaleY:1,rotation:0,x:0.8,y:-14.3}}]},1).to({state:[{t:this.head_1,p:{scaleX:1,scaleY:1,rotation:0,x:0.8,y:-14.3}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.998,scaleY:0.998,rotation:-46,x:-1.6,y:-15.6}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.998,scaleY:0.998,rotation:-20.4,x:-0.3,y:-14.9}}]},1).to({state:[{t:this.head_1,p:{scaleX:0.999,scaleY:0.999,rotation:-10.2,x:0.2,y:-14.6}}]},1).to({state:[{t:this.head_1,p:{scaleX:1,scaleY:1,rotation:0,x:0.8,y:-14.3}}]},1).to({state:[]},1).wait(10));

	// Layer 1
	this.body = new lib.sprite15();
	this.body.setTransform(-6.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-85.4,94.9,127.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;