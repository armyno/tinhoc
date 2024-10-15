(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.BuriedMemories = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:1});
  var self = this; _root = this;
 
  this.frame1 = function(){
    this.targetItem.visible = false;
    this.item1.visible = false;
    this.item2.visible = false;
    this.item3.visible = false;
    this.shovel.visible = false;
    this.GameWon = false;
    
  }
  
  this.frame2 = function(){

   function positionShovel()
   {
    if (Math.random() * 100 < 1)
    {
        self._char.dog.dogHead.eyes.play();
    } // end if
    self.shovel.x = stage.mouseX / ratio;
    if (stage.mouseY / ratio >= groundY)
    {
        self.shovel.y = groundY;
    }
    else
    {
        self.shovel.y = stage.mouseY / ratio;
    } // end else if
    self.shovel.rotation = (500 / 2 - stage.mouseX / ratio) / 10;
    self._char.dog.dogHead.rotation = -stage.mouseY / ratio / 8 + 30;
   } // End of the function
   function dirtExplode()
   {
    for (var j = 1; j <= 40; j++)
    {
        ++dirtCount;
        self["dust" +j] = new lib.sprite4Dirt(); 
        self.dust.addChild(self["dust" +j]);
        self["dust" +j].x = stage.mouseX / ratio;
        self["dust" +j].y = groundY + 5;
        self["dust" +j].scaleX = self["dust" +j].scaleY = Math.random() + 0;
        self["dust" +j].alpha = Math.random() * 0.5 + 0.5;
        self["dust" +j].velX = Math.random() * 10 - 5;
        self["dust" +j].velY = -Math.random() * 6 - 8;
        self["dust" +j].on("tick", function (evt)
        {
            
            evt.currentTarget.velY = evt.currentTarget.velY + gravity;
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY; 
            if (evt.currentTarget.y > groundY)
            {
                evt.remove();
                self.dust.removeChild(evt.currentTarget);
            } // end if
        });
    } // end of for
   } // End of the function
   this.stop ();
   this.dirt1.gotoAndStop(0);
   this.dirt2.gotoAndStop(0);
   this.dirt3.gotoAndStop(0);
   var startWait = 0;
   var speed = 0;
   var gravity = 1;
   var itemsArray = [1, 2, 3, 4, 5, 6];
   var optionsArray = [];
   var ready = false;
   var dirtCount = 0;
   var groundY = 290;
   var itemY = 172;
   var swishing = false;
   var sndSwish; 
  
   this.item1.visible = true;
   this.item2.visible = true;
   this.item3.visible = true;
   this.shovel.visible = true;
   positionShovel();
   this.on("tick", positionShovel);
   //this.border.swapDepths(500000);
   for (var i = 1; i <= 3; i++)
   {
    var dirt = this["dirt" + i];
    var item = this["item" + i]; item.name = "item" + i;
    var ground = this["ground" + i];
    var arrayNum = Math.floor(Math.random() * itemsArray.length);
    var itemFrame = itemsArray[arrayNum];
    optionsArray.push(itemFrame);
    ground.name = String(i);
    ground.itemFrame = itemFrame;
    itemsArray.splice(arrayNum, 1);
    item.gotoAndStop(itemFrame-1);
    item.scaleX = item.scaleY = 0;
    item.wait = 0;
    item.y = itemY; 
    item.on("tick", function (evt)
    {   
        ++startWait; 
        if (startWait > 48)
        {
            ++evt.currentTarget.wait;
            if (evt.currentTarget.scaleX >= 0.99)
            {
                evt.currentTarget.scaleX = evt.currentTarget.scaleY = 1;
            }
            else
            {
                evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY + (1 - evt.currentTarget.scaleX) / 4;
            } // end else if
            if (evt.currentTarget.wait > 36)
            {
                speed = speed + gravity;  
                evt.currentTarget.y = evt.currentTarget.y + speed;
            } // end if
            if (evt.currentTarget.y > 336)
            {
                ready = true;
                for (var i = 1; i <= 3; i++)
                {
                    var fill = self["dirt" + i];
                    fill.gotoAndPlay("bury");
                } // end of for
                evt.remove(); //delete this.onEnterFrame;
                self.thought.gotoAndPlay(1);
            } // end if
            if (!swishing)
            {
                swishing = true;
                sndSwish = playSound("sound1swish");
            } // end if
        } // end if
    });
    ground.on("mousedown", function (evt)
    {
        if (ready)
        {
            ready = false;
            self.shovel.play();
            dirtExplode();
            var dig = self["dirt" + evt.currentTarget.name];
            dig.gotoAndStop("open");
            var item = self["item" + evt.currentTarget.name];
            item.targetY = evt.currentTarget.y - 55;
            item.on("tick",  function (e)
            {
                e.currentTarget.y = e.currentTarget.y + (e.currentTarget.targetY - e.currentTarget.y) / 4;
                if(Math.abs(e.currentTarget.targetY - e.currentTarget.y) < 0.01) e.remove();
            });
            if (evt.currentTarget.itemFrame != self.targetItem.currentFrame+1)
            {  
                self._char.dog.dogHead.mouth.gotoAndPlay("wrong");
                self._char.dog.wag.gotoAndPlay("sad");
                self._char.dog.dogHead.eyes.gotoAndPlay("sad");
                self.play ();
            }
            else
            {   
                self._char.dog.dogHead.mouth.gotoAndPlay("correct");
                self._char.dog.wag.gotoAndPlay("wag");
                self.starPoints.score();
            } // end if
        } // end else if
    });
   } // end of for
   this.targetItem.visible = false;
   this.thought.gotoAndStop(0);
   this.targetItem.gotoAndStop(optionsArray[Math.floor(Math.random() * optionsArray.length)] -1);
    
  }
  
  this.frame40 = function(){this.gotoAndStop("start")}
  
  
  
  
	// Layer 23
	this.border = new lib.sprite79();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.border}]}).wait(40));

	// Layer 22
	this.instance = new lib.shape78("synched",0);
	this.instance.setTransform(436,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(40));

  this.dust = new cjs.Container();
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dust}]}).wait(40));
  
	// Layer 21
	this.starPoints = new lib.sprite68();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(40));

	// Layer 20
	this.ground3 = new lib.sprite66();
	this.ground3.setTransform(317,288);
  this.ground3.cursor = "pointer";
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground3}]}).wait(40));

	// Layer 19
	this.ground2 = new lib.sprite66();
	this.ground2.setTransform(198.8,288);
  this.ground2.cursor = "pointer";
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground2}]}).wait(40));

	// Layer 18
	this.ground1 = new lib.sprite66();
	this.ground1.setTransform(80.5,288);
  this.ground1.cursor = "pointer";
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground1}]}).wait(40));

	// Layer 17
	this.instance_1 = new lib.shape65("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(40));

	// Layer 16
	this.targetItem = new lib.sprite49();
	this.targetItem.setTransform(310.4,68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.targetItem}]}).wait(40));

	// Layer 15
	this.item3 = new lib.sprite49();
	this.item3.setTransform(323.1,172.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item3}]}).wait(40));

	// Layer 14
	this.item2 = new lib.sprite49();
	this.item2.setTransform(206.3,172.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2}]}).wait(40));

	// Layer 13
	this.item1 = new lib.sprite49();
	this.item1.setTransform(88.7,172.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1}]}).wait(40));

	// Layer 12
	this.shovel = new lib.sprite45();
	this.shovel.setTransform(172,242.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shovel}]}).wait(40));

	// Layer 11
	this.dirt3 = new lib.sprite42();
	this.dirt3.setTransform(322.6,274.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dirt3}]}).wait(40));

	// Layer 10
	this.dirt2 = new lib.sprite42();
	this.dirt2.setTransform(203.7,274.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dirt2}]}).wait(40));

	// Layer 9
	this.dirt1 = new lib.sprite42();
	this.dirt1.setTransform(84.5,275.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dirt1}]}).wait(40));

	// Layer 8
	this.instance_2 = new lib.sprite40();
	this.instance_2.setTransform(85.5,281.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(40));

	// Layer 7
	this.instance_3 = new lib.sprite40();
	this.instance_3.setTransform(203.7,281.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(40));

	// Layer 6
	this.instance_4 = new lib.sprite40();
	this.instance_4.setTransform(322.1,281.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(40));

	// Layer 5
	this._char = new lib.sprite21();
	this._char.setTransform(349.4,29,0.843,0.843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._char}]}).wait(40));

	// Layer 4
	this.thought = new lib.sprite11();
	this.thought.setTransform(309,68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.thought}]}).wait(40));

	// Layer 3
	this.instance_5 = new lib.shape10("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(40));

	// Layer 2
	this.instance_6 = new lib.sprite7();
	this.instance_6.setTransform(807.6,57,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(40));

	// Layer 1
	this.instance_7 = new lib.shape6("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(40));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(38).call(this.frame40))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-7.2,1091.4,386.3);


// symbols:
(lib.image77 = function() {
	this.initialize(img.image77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite81 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape80 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape78 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image77(); 
	this.shape.setTransform(-45,-7.5);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape75 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape74 = function() {
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


(lib.shape71 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape67 = function() {
	this.initialize();
  
	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#745521").ss(1.5,1,1).p("AmpANIAughIAKgFIAVgIQAOgHAkAAQAjAAAiAPQAjAQAcAWIAcgQQAagSAeAAQAfAAAcAKQAYAKALAPIAMASIABAHIABACIABgBIAIgOIAKgKIAJgHQACgEAVgLQAUgOAgACIAoAFIAIAEIACABIAJAHIAGACIAFAFIALAIQASgdAngLIAygHIAxAHQAWAHAMAJIAUAPIAGAJ");
	this.shape.setTransform(4.7,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFA45A").s().p("AidA2IgTgUQgUAMgqALQgqAKhIgVQhHgVgFgSQgFgPACgHIAJgMIAAgBIAugjIAKgFIAVgIQAOgHAkAAQAjAAAiAPQAjAQAbAYIAcgSQAagSAeAAQAfAAAcAKQAZAKALARIAMASIAAAHIABACIABgBIAJgOIAKgKIAIgHQADgEAVgNQAUgOAgACIAnAFIAIAEIACABIAJAHIAGAEIAFAFIALAIQATgfAmgLIAzgHIAwAHQAWAHANAJIAUARIAGAJIAEASQACAOgZAOQgYARgrAHQhAAKgmgVQgHAnhhAEQhgAEgdgjIgFAGQgZAZgpAHIgTACQgqAAglgegADTgZIABgCIgHgEg");
	this.shape_1.setTransform(4.4,1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,255,0,0.01)").s().p("An1DHIAAmNIPrAAIAAGNg");
	this.shape_2.setTransform(3.5,-1.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.6,-21.9,100.4,40);


(lib.shape65 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C99743").s().p("A/2HGIAAuMMA/uAAAIAAOMg");
	this.shape.setTransform(188.8,333.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,288,408,91);


(lib.shape64 = function() {
	this.initialize();

	// Layer 23
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F3E2B").s().p("AhBAlQgcgPAAgWQAAgUAcgRQAcgQAlAAQAmAAAcAQQAcARAAAUQAAAWgcAPQgcARgmAAQglAAgcgRg");
	this.shape.setTransform(70.7,49.6);

	// Layer 22
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(105,82,56,0.6)").ss(1,0,0,4).p("AgjAAIBHAA");
	this.shape_1.setTransform(70.6,112.9);

	// Layer 21
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4F3E2B").ss(4,0,0,4).p("AIAsbQgygyhHAAQg8AAgvAmQguAmgNA6Qhsg6h1AAQh0AAhsA6QgNg6gugmQgvgmg8AAQhHAAgxAyQgyAyAABGQAAA+AnAvQAnAvA8ALQgeA+gIBEQgCARAAAYQAABaAsBQIhNgdIgVgEIgQgFQg1gKguAkQguAkgMA9QgMA9AdAxQAdAzA2AKIAFABIATAFIChASQgbA8gJA/QgEAaAAAfQAAAyAOAzIiBBlQgLAIgIAMIgRAPQgvA0AIBLQAJBMA8A3QA8A3BMACQBMACAwg0IAEgGIASgRIBYhwQBdArBmAAIAAAAIAEAAIAAAAQBlgBBegsIBXBxIAUATIAPAQQA0AvBLgIQBMgJA3g8QA3g8AChMQAChMg0gwIgGgEIgRgSIiDhmQANgwAAg0QAAgZgEgfQgKhCgcg+ICagJIAVgEIARgCQA1gMAbg0QAcgygOg8QgOg9gvgjQgvgig1AMIgFABIgTADIhUAaQArhPAAhZIgCgpQgIhEgeg+QA8gLAngvQAngvAAg+QAAhGgxgyg");
	this.shape_2.setTransform(70.6,85.9);

	// Layer 20
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#271F14").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_3.setTransform(92.6,41.1);

	// Layer 19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#271F14").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_4.setTransform(49.8,41.1);

	// Layer 18
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#695238").ss(1,0,0,4).p("AAAhlIAADL");
	this.shape_5.setTransform(70.6,63.8);

	// Layer 17
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#695238").ss(1,0,0,4).p("AiDAAIEHAA");
	this.shape_6.setTransform(70.6,73.4);

	// Layer 16
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(105,82,56,0.6)").ss(1,0,0,4).p("AgnAAIBPAA");
	this.shape_7.setTransform(70.6,135.8);

	// Layer 15
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(105,82,56,0.6)").ss(1,0,0,4).p("AgjAAIBHAA");
	this.shape_8.setTransform(70.6,122.5);

	// Layer 14
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(105,82,56,0.6)").ss(1,0,0,4).p("AgvAAIBfAA");
	this.shape_9.setTransform(70.6,102.6);

	// Layer 13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(105,82,56,0.6)").ss(1,0,0,4).p("AAAlAIAAKB");
	this.shape_10.setTransform(70.6,123.8);

	// Layer 12
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D19455").s().p("AiqCdQhHhBAAhcQAAhbBHhBQBHhCBjAAQBkAABHBCQBHBBAABbQAABchHBBQhHBChkAAQhjAAhHhCg");
	this.shape_11.setTransform(71.4,63.4);

	// Layer 11
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#695238").ss(1,0,0,4).p("AEtktQiGhtinAAQinAAiFBtQiJBxgSClQgVC3CVCCQCLB5C8AAQC9AACLh5QCViCgVi3QgSiliJhxg");
	this.shape_12.setTransform(70.6,50.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B27E49").s().p("AlHEiQiViCAVi3QASilCJhxQCFhtCnAAQCnAACGBtQCJBxASClQAVC3iVCCQiLB5i9AAQi8AAiLh5g");
	this.shape_13.setTransform(70.6,50.4);

	// Layer 10
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D19455").s().p("AjjDrQhfhhAAiKQAAiJBfhhQBehhCFAAQCGAABeBhQBfBhAACJQAACKhfBhQheBhiGABQiFgBhehhg");
	this.shape_14.setTransform(71.4,111.2);

	// Layer 9
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#695238").ss(1,0,0,4).p("Akgk1Qh8B2gXCiQgbC8CKCLQCECFDAAAQDAAACFiFQCKiLgbi8QgXiih8h2QiBh5igAAQifAAiBB5g");
	this.shape_15.setTransform(70.6,112.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B27E49").s().p("AlEEqQiKiLAbi8QAXiiB8h2QCBh5CfAAQCgAACBB5QB8B2AXCiQAbC8iKCLQiFCFjAAAQjAAAiEiFg");
	this.shape_16.setTransform(70.6,112.6);

	// Layer 8
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#94693C").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_17.setTransform(109.5,19.2);

	// Layer 7
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#94693C").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_18.setTransform(33.3,19.2);

	// Layer 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B27E49").s().p("Ah3B4QgygyABhGQgBhFAygyQAygxBFAAQBGAAAyAxQAxAyAABFQAABGgxAyQgyAxhGABQhFgBgygxg");
	this.shape_19.setTransform(31.5,18.3);

	// Layer 5
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B27E49").s().p("Ah2B4QgzgyAAhGQAAhFAzgyQAxgxBFAAQBGAAAyAxQAyAyAABFQAABGgyAyQgyAxhGABQhFgBgxgxg");
	this.shape_20.setTransform(109.8,18.3);

	// Layer 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B27E49").s().p("ABcCgIiggSIgTgFIgFgBQg2gKgdgzQgdgyAMg8QAMg9AugkQAugkA1AKIAQAFIATAEICZA6QAcALALApQAKAogMAxQgLAxgdAgQgZAegbAAIgGgBg");
	this.shape_21.setTransform(20.9,81.1);

	// Layer 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B27E49").s().p("AidB7QgaghgJgyQgJgwANgpQANgpAdgJICZgwIATgDIAGgCQA1gMAvAjQAvAiAOA9QAOA7gcA0QgcAzg1AMIgRACIgUAFIihAJIgDAAQgdAAgZghg");
	this.shape_22.setTransform(120.3,81.1);

	// Layer 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B27E49").s().p("AhCDQIgPgQIgUgTIiCioQgYgdAQg2QAQg1AvguQAvgvA1gQQA2gQAcAYICoCCIARASIAGAEQA0AwgCBKQgCBMg3A8Qg3A8hMAJIgWABQg7AAgsgog");
	this.shape_23.setTransform(109.5,145.7);

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B27E49").s().p("AgpD3QhMgCg8g3Qg8g3gJhMQgIhJAvg0IARgPQAIgMALgIICniCQAdgYA2AQQA1AQAvAvQAuAvAQA1QARA2gYAcIiDCoIgSARIgEAGQguAyhHAAIgFAAg");
	this.shape_24.setTransform(31.8,145.7);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.3,138.9,169.3);


(lib.shape62 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#523422").ss(3,0,0,4).p("AhDCnQgYg3AIhGQAQiKCihI");
	this.shape.setTransform(59.9,18.3);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F221F").ss(4,0,0,4).p("AHzgoQAAjRiTh3QiIhvjYAAQjMAAiHBlQiPBqgPC9ICbBtIgHBKIAjAMQAoAPAZANQAZAMghBzQgQA5gWA2QBAAxBKAaQBMAbBRAAQDOAACSiZQCTiZAAjWg");
	this.shape_1.setTransform(51.2,62.7);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F58F86").s().p("AggAqQgNgSAAgYQAAgYANgRQAOgSASAAQATAAAOASQANARAAAYQAAAZgNARQgOASgTAAQgSAAgOgSg");
	this.shape_2.setTransform(75.8,85.1);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F58F86").s().p("AhgCBQgpg2AAhLQAAhLApg1QAog2A4AAQA5AAApA2QAoA1AABLQAABLgoA2QgpA2g5AAQg4AAgog2g");
	this.shape_3.setTransform(81.6,54.7);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9C3A34").ss(3,0,0,4).p("AikgPIAVAOQAcANAjAHQBtAXCKhD");
	this.shape_4.setTransform(52.4,33.4);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C2463F").ss(1,0,0,4).p("AHzgoQAAjRiTh3QiIhvjYAAQjMAAiHBlQiPBqgPC9ICXguIAhBuIB8hJIA/BwICMAAIAoBzIhKA+IgYB2IhxgZIgnBWIhjACQBAAxBKAaQBMAbBRAAQDOAACSiZQCTiZAAjWg");
	this.shape_5.setTransform(51.2,62.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D95148").s().p("AieHFQhJgahAgwIBjgDIAnhWIBxAZIAXh2IBLg+IgphzIiLAAIg/hwIh8BJIghhuIiYAuQAQi8CPhrQCHhkDMgBQDXAACJBwQCSB2AADRQAADWiSCZQiTCYjNAAQhRABhNgbg");
	this.shape_6.setTransform(51.2,62.7);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiME5QAVg3ARg5QAghzgYgMQgZgNgogPIgjgMIAHhIIichvIDDipIHsEEIkLFFQgpASguAPQg+ATgkAAQgUAAgMgGg");
	this.shape_7.setTransform(35.7,69.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,1.4,99.8,109.4);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(107,171,76,0.498)").ss(1,0,0,4).p("ABLhJIAZhEADvCOQhSiUhShDAAeAcQggBBg2BLAhfg3QgNBFgVBGAhRiRQhHgRhagD");
	this.shape.setTransform(89.5,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(107,171,76,0.498)").ss(1,1,0,4).p("AB4BrIAEgIQATgnAWg4IgbgSQg1gihOgSIgMBYQAXAJAVAMQApAXAoApgAAQjhQAABQgJBPADRDiQgshIgtgvAjQgNQB8AHBPAc");
	this.shape_1.setTransform(80.5,38.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(59.6,15.7,53.9,47.4);


(lib.shape59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNIXQj4gliVjJQiVjIAlj2QARh4A+hnQA8hjBdhGIgLA5QglD3CWDJQCVDHD1AlQB7ASB3ggQBzgeBghJQg4DhjBCCQiZBoiyAAQgsAAgwgHg");
	this.shape.setTransform(59.4,54.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119,108.5);


(lib.shape57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#395A29").ss(4,0,0,4).p("AIYmNQiljekSgoQkPgpjfClQjeClgoESQgpEQClDeQClDeESAoQEQApDeilQDeilAokSQApkPiljfg");
	this.shape.setTransform(68.1,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#68DA36").s().p("AhgKUQkSgoiljeQiljeApkQQAokSDeilQDfilEPApQESAoClDeQClDfgpEPQgoESjeClQizCEjTAAQgyAAg2gIg");
	this.shape_1.setTransform(68.1,68.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.2,133.8,133.8);


(lib.shape55 = function() {
	this.initialize();

	// Layer 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#634327").s().p("Aj7BiQASgQAagLQgHgKgDgMIAjgiQgCgbAMgJQALgJAsgEQAdgCAZAIIgBgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAhgvQAMgTAhgDQBngIAEA2QAAAEALATQAJAQgFAGQAbgBAXAIQAYAFAOAOQARAQABAUIgBAMIALAEQhjAViCAKQhQAGhGAAQhDAAg5gGg");
	this.shape.setTransform(38,56);

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#916239").s().p("AkqCAQAFgaAVgWQAVgXAhgOQgHgJgDgNIAiggQgCgdAMgJQAMgJAtgEQAcgCAZAIQgCgEABgBIAhgvQAMgTAhgCQBngIAEA1QAAAEALATQAJAQgFAGQAbgBAXAIQAXAHAPAOQAQAOACAUIgBAMQAvAQAWAgIhDARIgLgEIABgMQgBgUgRgQQgOgOgYgHQgXgIgbABQAFgGgJgOQgLgTAAgEQgEg2hlAIQgjADgMATIggAvQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABADQgZgGgcACQgtACgLAJQgMAJACAdIgjAiQADAMAHAKQgaALgSAQg");
	this.shape_1.setTransform(40,52.7);

	// Layer 15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#464646").ss(4,0,0,4).p("AHEs3QhoA0hkB0QhhBwglBuQglBuAsAtQgxgQhegEQhhgEh3AIQifAMhyAeQg2AOgdAPQgRAJgHAIQgRAMAAAKQABAIAJAHIBGOmIAEgBIAAAEQACAhB1AcQCCAgCXgMQCXgLB5gyQBwgugCghIgBgDIADgBIhGumQAIgIgBgHQgBgHgHgGQA7AKBag0QBag3BUhhQBkh0AjhvQAkhwgxgqQgygrhpA0g");
	this.shape_2.setTransform(63.2,82.4);

	// Layer 14
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#246584").s().p("Ag/AKQgNhCAIgOIAmgKQAigHAgAUQAhAVADAjQACAggbAaQgXAWgiAIIghAFQgIgGgMhCgAgfgyIgDAAIAQBkIAFgCQAWgEAQgMQAVgPgCgVQgCgYgZgPQgRgJgQAAQgIAAgHACg");
	this.shape_3.setTransform(69.5,124.2);

	// Layer 13
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#246584").s().p("Ag8BFQgWgWgCghQgDghAbggQAbgdAlgGQAggEAYAUQAXAUACAgQADAmgbAfQgbAgglAEIgJABQgbAAgVgTgAAFg5QgXADgTAWQgUAVACAXQABAXAOANQAOANAVgDQAZgDAUgWQATgVgCgZQgBgVgPgNQgMgKgQAAIgIAAg");
	this.shape_4.setTransform(53.3,125.6);

	// Layer 12
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#246584").s().p("Ag9A9QgWgYgCghQgDghAbgcQAcgbAjgBQAiAAAXAWQAYAXADAgQADAmgcAbQgcAdglAAQghAAgYgZgAgmgkQgUATACAXQABAXAOAOQAOAOAWAAQAYAAAUgUQAUgTgCgYQgCgVgPgPQgOgOgVAAQgYAAgTAUg");
	this.shape_5.setTransform(34.6,126.8);

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#246584").s().p("AgYBJIgFgeIgShzIBbADIAEAdIg+gCIAHArIAugBIAFAcIgvADIAGAqg");
	this.shape_6.setTransform(19.4,126.8);

	// Layer 10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#246584").s().p("AhAA6QgTgXgCgbQgCgeAWgaQAWgaAggGIAbAAIgIAdIgQAAQgVAEgOAQQgPARABARIACAKQAOAtArgHQAWgEAagOIgFggIg8AUIgGgZIBlgjIAGAbIgNAFIAGAbQAFAVgDAFQgFAKgdALIgsAMQgIACgIAAQggAAgTgXg");
	this.shape_7.setTransform(61.1,101.5);

	// Layer 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#246584").s().p("Ag8BBQgWgVgDgiQgDgiAcgeQAbgcAkgDQAhgDAXAVQAYAVADAgQADAlgcAfQgbAdgmADIgFAAQgdAAgWgVgAAEg5QgWACgUAVQgUAVACAWQACAXANANQAPAOAVgCQAZgCATgUQAUgUgCgZQgCgVgOgOQgOgMgTAAIgEAAg");
	this.shape_8.setTransform(43.1,102.5);

	// Layer 8
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#246584").s().p("AgLBQIgSAAIgQgDQgIgIgMhFQgLhFAGgKIAnABQAiABAhAdQAjAdACAhQADAigdASQgWAOgcAAIgIAAgAgjgyIAQBmIAFAAQAWACAQgIQAWgKgCgWQgCgXgagVQgWgTgagBg");
	this.shape_9.setTransform(25.6,103.3);

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#638FA6").ss(1,0,0,4).p("AmgkpIAtJYQAlAbBqATQB+AWCDgKQCFgKB5gpQBmgjAgggIgtpYQgbAchtAZQhuAZiPAKQiQALhxgIQhvgIgfgXg");
	this.shape_10.setTransform(43.5,111.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#99DDFF").s().p("AjkFaQhqgTglgbIgtpYQAfAXBvAIQBxAICQgLQCPgKBugZQBtgZAbgcIAtJYQggAghmAjQh5ApiFAKQgoADgpAAQhZAAhXgPg");
	this.shape_11.setTransform(43.5,111.7);

	// Layer 6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBDBDB").s().p("AjvEXQgxgqAjhwQAkhwBkhyQBkh0Bmg0QBpgzAyAqQAxArgkBvQgjBwhkByQhjB0hoA0Qg5AcgpAAQgiAAgWgTg");
	this.shape_12.setTransform(99.9,27);

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F2F2F2").ss(2,0,0,4).p("AkTgbQBvgdCggMQCegMBzAMQBzAMACAcQACAchvAcQhwAdigAMQieANhzgMQhygMgDgdQgCgdBwgbg");
	this.shape_13.setTransform(39.9,60.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8A8A8A").s().p("AkMBGQhygMgDgdQgCgdBwgbQBvgdCggMQCegMBzAMQBzAMACAcQACAchvAcQhwAdigAMQhQAGhGAAQhDAAg4gFg");
	this.shape_14.setTransform(39.9,60.9);

	// Layer 4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CFCFCF").s().p("AjvEXQgxgqAjhwQAkhwBkhyQBkh0Bmg0QBpgzAyAqQAxArgkBvQgjBwhkByQhjB0hoA0Qg5AcgpAAQgiAAgWgTg");
	this.shape_15.setTransform(99.9,27);

	// Layer 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A3A3A3").s().p("AkYBIQh3gMgDgeQgCgeB1gcQBzgeCogNQClgNB4ANQB4AMACAeQACAdh0AeQh1AeinAMQhSAHhIAAQhHAAg8gHg");
	this.shape_16.setTransform(39.9,60.9);

	// Layer 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BABABA").s().p("AkICIQh1gdgCggIAAgEIgEAAIgNiqQAlAbBqATQB+AWCDgKQCFgKB5goQBmgjAgggIANCqIgDAAIABAEQACAghwAuQh7AziXALQgmADgnAAQhrAAhfgXg");
	this.shape_17.setTransform(46.4,151.8);

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BABABA").s().p("Aj1CJQhvgIgegYIgOi4IMTg8IAOC5QgaAbhtAZQhuAZiRALQhSAGhJAAQg1AAgwgDg");
	this.shape_18.setTransform(40.6,71);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-2.8,127.2,170.6);


(lib.shape53 = function() {
	this.initialize();

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#473117").ss(4,0,0,4).p("AL3BtQgXhchKhuQheiNhVgIQgWgCg+AZIh/A0Ig9AUQhCABg4gOQADgDgDgIQgCgIgHgIIgOgNQgIgFgDADIgcAXQgygWgrglIAZgNQAGgEABgJQAAgJgFgKQgGgKgIgFQgIgFgGADIgnAVQgggmgYgwIAlgJQAHgCADgIQADgJgDgLQgDgLgGgHQgHgHgGACIgpAKQgEgiAOg+QAKgugNgIQgTgLhFACIhBAEQgMASgNAbQhWgLiGAOQhmAJhOATQhMATgUATIgGgDQgFBKgCBgQgDDAAOBsQAOB3AhB1QAlCGAnAoIgNCIIBHAQQBaAMBhgKIDYghIA0hpIBeBKQClgeDMgyQGZhjDAhoIg/h7g");
	this.shape.setTransform(86.5,63.5);

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#634520").s().p("AiEA0QgHgHgDgLQgDgLAEgJQADgJAHgCID6g7QAIgBAHAHQAHAGACALQADALgDAJQgEAJgHABIj6A8IgEAAQgFAAgFgFg");
	this.shape_1.setTransform(60.5,26.4);

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#634520").s().p("AhDBOIgPgMQgHgJgCgJQgCgJAEgEICRhxIAMABQAIAEAHAJQAHAIACAJQACAKgEACIiRByg");
	this.shape_2.setTransform(86.3,51.3);

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#634520").s().p("AhoBPIgNgOQgFgLAAgJQABgJAGgEIDNhuQAGgEAIAGQAIAEAGALQAFAJAAAKQgBAJgGAEIjNBug");
	this.shape_3.setTransform(70.6,41.4);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C6B33").s().p("AlDCKQgGjeClh5ICAg0QA8gZAVACQBbAIBhCaQBQB8AMBOQAFAhjfA/QipAwkDA1g");
	this.shape_4.setTransform(130.3,67.3);

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF8C3F").s().p("AhzElQhBhRg6gPIkFhDQgPhJgMhkQgYjNALidQCBAlCDgRQBrgNA9gSQAfgJAJgHQAaA9ArBIQBTCSBUA8QBDAuB2gUQBEgLB9gvQilB6AGDeIACCPQi4AmhHAJIibAYQguhUgtg4g");
	this.shape_5.setTransform(59.4,59.3);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C6B33").s().p("AjVEgQgnh/gRiKQgNhsADjAQAChfAEhLIApAOQgLCcAtDCQAYBfAZBBIA9AiQBMAmBPAUQA6AOBBBRQAtA4AuBUIj3AkIifAIQgsgNgsiTg");
	this.shape_6.setTransform(28.7,62.1);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B4A23").s().p("ArTDmIhHgPIAMiJIXqk6IA/B7Qi/BomZBiQjLAyimAdIhehJIg0BoIjZAiQgrAEgpAAQg0AAgygHg");
	this.shape_7.setTransform(92.3,97.6);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C6B33").s().p("AgzD5QgtgXhchgQhshvgWgSQhLg4AbhmQAMg0AcgnIBCgEQBFgDATALQAJAGgCAVIgJAvQgPBMAYAwQBmDSDxAKQBqAEBagcQhXAehcAaQilAwg4AAQgRAAgIgFg");
	this.shape_8.setTransform(86.7,31.2);

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B4A23").s().p("AjFA3QhVgHgCgVQgCgVBTgUQBRgXB3gLQBzgMBWAHQBVAGACAWQACAUhSAVQhTAXh1ALQhJAHg9AAQgkAAgggCg");
	this.shape_9.setTransform(29.9,15.9);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,5.8,171.3,115.6);


(lib.shape51 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#35322F").ss(1.4,0,0,4).p("AgMgEIAZAK");
	this.shape.setTransform(-6.8,17.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#35322F").ss(1.4,0,0,4).p("AgPgDIAfAH");
	this.shape_1.setTransform(6.8,-17.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#35322F").ss(1.4,0,0,4).p("AgKgMIABAHQACAFAHADQAFAEAGAAIAFgB");
	this.shape_2.setTransform(4.1,-26.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#35322F").ss(1.4,0,0,4).p("AAKAJQABgCgBgDQgCgFgIgEQgEgEgHABIgFAA");
	this.shape_3.setTransform(-6.4,26.7);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#35322F").ss(1.4,0,0,4).p("AAMkxQgMgLgRgDQgagEgVARQgWAQgEAaQgEAbAQAWQAQAVAaAEIAPABIgRC1QgHBBgdB0QgJgEgJgCQgbgEgWARQgWARgEAcQgEAbAQAXQAQAWAbAEQASADARgHQARgGAKgOQAJAQAQAMQARAMATADQAhAFAagRQAbgQAEgbQAEgcgVgXQgUgXghgFIgFgBQAGiGALg/QALg+AZhiIAEAAQAfAFAagQQAZgPAEgbQAEgagTgXQgVgWgfgFIgnAEQgTAFgMANQgHgPgNgLg");
	this.shape_4.setTransform(-0.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALFAQgTgDgRgMQgQgMgJgQQgKAOgRAGQgRAHgSgDQgbgEgQgWQgQgXAEgbQAEgcAWgRQAWgRAbAEQAJACAJAEQAdh0AHhBIARi1IgPgBQgagEgQgVQgQgWAEgbQAEgaAWgQQAVgRAaAEQARADAMALQANALAHAPQAMgNATgFIAngEQAfAFAVAWQATAXgEAaQgEAbgZAPQgaAQgfgFIgEAAQgZBigLA+QgLA/gGCGIAFABQAhAFAUAXQAVAXgEAcQgEAbgbAQQgUANgYAAIgPgBg");
	this.shape_5.setTransform(-0.2,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-32.1,34,64.3);


(lib.shape47 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#494D46").ss(2,1,1).p("Ag4BfQBwAAABi9");
	this.shape.setTransform(5.5,48.8);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#282927").ss(1.5,1,1).p("ABaggQAAgdgnAAIhMAAQhIAGAHAzQAHAwAVAOQA8AQA7gUQAhgKAAhMgACfgOQAFhxijAAQiggBAAB1QAAByBeATQBLAPBIgVQBIgUAFhug");
	this.shape_1.setTransform(-0.2,-63.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60655C").s().p("AhBB6QhegTAAhyQAAh1CgABQCjAAgFBxQgFBuhIAUQgpAMgqAAQggAAgggGgAhagEQAHAwAVAOQA8AQA7gUQAhgKAAhMQAAgdgnAAIhMAAQhIAGAHAzg");
	this.shape_2.setTransform(-0.2,-63.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#282927").ss(1.5,1,1).p("AjYjoQDWgUDcAUQADGYjfBDQjlhuAPltg");
	this.shape_3.setTransform(0,52.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60655C").s().p("AjYjoQDWgUDcAUQADGXjfBEQjlhuAPltg");
	this.shape_4.setTransform(0,52.2);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3C240D").ss(1.5,1,1).p("AAnHPIhNAAIAAudIBNAAg");
	this.shape_5.setTransform(0.1,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C3814").s().p("AgmHPIAAudIBNAAIAAOdg");
	this.shape_6.setTransform(0.1,-6.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.8,-76.5,43.7,153.1);


(lib.shape44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7C5B23").ss(1,1,1).p("AlUA3QAag3ArgHQAsgIAcATQATg2BKgDQBKgDAgAyIANgPQAMgOApgIQAogIApAjIARASQARgKAkgLIBAACQAdANAfAu");
	this.shape.setTransform(0,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9D4F").s().p("AlUBoIAAhjQAag1ArgIQAsgJAcAWQATg5BKgDQBKgDAgAzIANgQQAMgOApgHQAogIApAiIARAUQARgMAkgKIBAACQAdANAfAvIAABug");
	this.shape_1.setTransform(0,10.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.1,0,68.4,20.9);


(lib.shape41 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#966F2C").s().p("Aj0A6QhmgTAAgaQAAgZBgghQBfggCRACQCOABBsAfQBrAfAAAZQAAAahmATQhmATiPAAQiOAAhmgTg");
	this.shape.setTransform(1.7,4.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#916928").ss(1,1,1).p("AFzAvIgCgOQgRgXgUAAIgmADIggALIgagfQgNgQgQgGIgjgIIgmgCQgTAAgUAKIgdAUQgOgPgggLQgdgLgcAAIgiAHIgdAKIgXAQIgQANQgHAAgNgJQgMgLgVAAQhCAAgVAoIgNgIIgRgEQgUAAgVANIgUAQ");
	this.shape_1.setTransform(0,-7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFA45A").s().p("AA7BaIifgPQjwgggeAAIAAgzIAUgQQAVgNAUAAIARAEIANAIQAVgqBCAAQAVAAAMAKQANALAHAAIAQgOIAXgRIAdgKIAigHQAcAAAdAMQAgAKAOAPIAdgUQAUgKATAAIAmADIAjAHQAQAGANARIAaAgIAggLIAmgCQAUAAARAXIACAMIgFANIgFAeQgDAegCACIgTABIgmAMIh2AEIgBAAIgLADg");
	this.shape_2.setTransform(0,-2.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-12,74.3,24.2);


(lib.shape38 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D2F11").ss(0.8,1,1).p("AgRgGQAWgDANAQ");
	this.shape.setTransform(6.5,0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D2F11").ss(0.8,1,1).p("Ag8BQIAJgEIANgGIAPgLIAJgJIADgEIALgLIAAgCIAIgLIALgPIALgNIAIgNIABgDIAIgPIAGgNIAEgOIAEgP");
	this.shape_1.setTransform(0,8.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-0.6,14.4,16.8);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D2F11").ss(0.8,1,1).p("AgfAHQAngXAYAQ");
	this.shape.setTransform(-0.7,12.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,11.8,6.4,1.5);


(lib.shape35 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D2F11").ss(0.8,1,1).p("AgKgDQAMgFAJAN");
	this.shape.setTransform(1.2,10.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D2F11").ss(0.8,1,1).p("AgiAcIAJgEIANgGIANgLIAJgHIADgDIALgMIACgBIAIgL");
	this.shape_1.setTransform(-2.5,13.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,9.6,8.5,6.5);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.702)").ss(0.8,1,1).p("AgTgGQgYgGgRAKAgPgIQgZgSgXADABAAIQgVgRggAJQAbACAKAW");
	this.shape.setTransform(-3.3,6.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,4.1,12.9,5);


(lib.shape32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.702)").ss(0.8,1,1).p("AAUgBQgXgEgQAI");
	this.shape.setTransform(-6.8,5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.702)").ss(0.8,1,1).p("AgRgNQAaAFAJAW");
	this.shape_1.setTransform(0,6.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,4.6,10.8,3.8);


(lib.shape31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAkQgEgFACgGIAEgIIAEgGIAJgNIAKgLQAGgHANgDQAOgEAJAIQAJAIgFALIgBACIgDAAIgCgBIgBgBQADgJgFgEQgGgGgKADQgLADgFAGIgKAJIgFAHQAGABAEAFQAEAEgBAHIgIALQgFAEgHAAQgEgBgEgEgAg9ATQgFgFABgGQgBgFADgDIAEgGIAJgPIAAAAQAGgLALgHIATgBQAHAEADAGIABAJIgBACIgDABIgDgBIAAgDIgBgFQgCgEgFgDQgFgDgGAFQgJAFgFAKIgGAJQAGgBAFAEQAFAFgBAEQgBAHgFAFQgEAGgGAAQgHAAgEgDg");
	this.shape.setTransform(-1.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,0.8,13.4,8.4);


(lib.shape29 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D2F11").ss(0.8,1,1).p("ACVjFIAJALIAGAQIABASIgCASIgEAQIgGAQIgGALIgEAIIgGALIAJAMIAEAFIANAWIAFANQAJAUAAAYQAAAXgHAVQgHAWgLAUQgLAUgOAQQgLAMgTAMIgbARIgUAHIgLACIgKACIgBAAIgRACIgQgCIgDABIgSAEIgTACIgSAAIgSgCIgRgDIgPgFIgQgGIgPgJIgGgFIgLgMIgIgPIgDgIIgCgIIgCgTIABgRIADgSIAAgCIAEgPIAGgSIAIgQIAJgPIAKgMIALgPIAMgOIAMgMIAPgMIADgCIAMgJIAPgKIARgJIAQgIIARgHIACAAIAOgGIAIgCIAFgSQACgJgBgIQgCgIgFgHQgEgFgIgDIgPgDIgTABIAJgNIANgKIAOgGIASgBQAJABAHAEIAMAKQAGAHAAAKIgBASIgCAQIgDAOIAMAAIATACIARAFIAGABIAFgGIAIgUQACgJgCgGIgDgIIgDgFIgJgLIgOgLIAMgKQAGgGAIgEIAQAAQAIABAHAGgAAThqIABgBIALgB");
	this.shape.setTransform(-7.5,-18.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8,1,1).p("Ag4gNQgDAKADAGQADAIAGAGIANAKIARAHIAQAFIAQABIASgCQAIgDAHgEQAHgEACgGQADgHgCgHIgEgIIgLgLIgOgLIgOgIIgPgGIgSgCIgSACQgIADgFAGg");
	this.shape_1.setTransform(-16.3,-6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272727").s().p("AgBAnIgRgFIgQgHIgNgKQgGgGgDgIQgCgGACgKIAHgPQAFgGAIgDIASgCIASACIAOAGIAPAIIANALIALALIAFAIQABAHgCAHQgDAGgGAEQgHAEgJADIgSACg");
	this.shape_2.setTransform(-16.3,-6.1);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#76481B").s().p("AAIAcQACgJgBgJQgCgIgFgEQgCgGgIgCIgRgDIgSABIAIgOIANgKIAQgGIAQgBQAJABAIAFIALAKQAGAHABAKIgBAQIgDAQIgDANIgiAIg");
	this.shape_3.setTransform(-6,-33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B551F").s().p("Ag/DNIgSgCIgRgEIgPgDIgQgHIgPgJIgGgFIgLgMIgIgPIgDgIIgCgJIgCgSIABgSIADgRIAAgDIAEgOIAGgRIAIgRIAJgPIAKgMIALgPIAMgOIAMgMIAPgMIADgDIAMgIIAPgKIARgJIAQgHIARgHIACgBIAOgGIAIgCIABgCIAigIIAAAAIAMABIATABIARAFIAGACIAFgHIAIgTQACgJgCgHIgDgIIgDgEIgJgMIgOgLIAMgLQAGgFAIgEIAQAAQAIACAHAFIAJALIAGAQIABASIgCASIgEARIgGAPIgGAMIgEAHIgGAMIAJALIAEAEIANAXIAFANQAJAVAAAWQgBAYgIAUIgRAqQgKAVgOAPQgLANgTANIgbAQIgUAGIgLADIgKACIgBAAIgRACIgQgCIgDABIgSAEIgTACgAh7BRQgIADgGAGIgHAOQgCALADAHQADAIAGAHIANAKIAQAHIARAEIARACIASgDQAIgCAHgEQAHgEADgHQACgGgCgHIgEgKIgLgLIgNgLIgPgJIgQgFIgSgCg");
	this.shape_4.setTransform(-7.5,-18.1);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAgHIABgCIgBASg");
	this.shape_5.setTransform(-3.8,-17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B551F").s().p("AAIBCIgDgFIgEgKIgDgSIgBgTIADgPIAFgLIADgEIANgIIARABQAGADAEAIIAHAOIACAQIACAKIgJANIgKAPIgJAMgAg5g4IgBgLIAAAAIAFAOg");
	this.shape_6.setTransform(-4.2,-11.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-38.7,35.5,41.1);


(lib.shape27 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#494D46").ss(0.8,1,1).p("AAlgbQgJAkgJAJQgPAPgogH");
	this.shape.setTransform(22.8,106.4);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#282927").ss(0.8,1,1).p("AhnA+IgBgEQgEgRAAgSIABgOIACgWIAAgDIABgCIABgHIABgDIAFgUIAAgBIALgnIAPABIAYAFIAZAFIAMACIAKADIAZAGIAFABIAFABIAZAHIAcAJIAHACIANAEQgDAXgIARIgOAeIgNAfIgSAe");
	this.shape_1.setTransform(22.4,104.5);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3C240D").ss(0.8,1,1).p("AAYhgIgEAWIgCAIIgMA4IgEAOIgUBJIgFAU");
	this.shape_2.setTransform(27.9,88.1);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#282927").ss(0.8,1,1).p("AhHAbIAKAJIACACQAHAFAIADIASAEIABAAIASABIAPAAIAAAAIADgBIASgCIARgHIAHgFIAGgFIAJgPIADgQIABgOIgBgFIgEgPIgCgEIgJgHIgRgEIgIgB");
	this.shape_3.setTransform(33.2,56.8);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#916928").ss(0.8,1,1).p("AgyANQAAgGAEgFIAEgDQAHgHAJgDIATgBIAHABQAEABAEACIAMAJIABACQAGgFAJgCIAPgC");
	this.shape_4.setTransform(5.2,105.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#745521").ss(0.8,1,1).p("AiTgMIAIgIIAHgDIASgFQAKgBAIABIASAGIAHADIAAABIAFADIACACQAGAEAEAJIAAAAQAFgHAHgDIALgCIAHABIAQAFIALAJIAFAPIAKgLQAHgFAKgBIATACQAHADAGAFIABAAIADAGIAMgJIABgBIABgBIATgDIANADIAFACIAQAJQAGAFAEAIABHARIABALAg2AAIAAAH");
	this.shape_5.setTransform(19.2,112.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#311E0B").ss(0.8,1,1).p("AASiVIAEgUAA5iqIgEAfAgEgfIgHApIgBAGIgJAmIgFAUIgBAHIgDAIIgWBHIAAABIgBABIgDAJ");
	this.shape_6.setTransform(28.2,79.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#282927").ss(0.8,1,1).p("Ag0AsIgGgOIgCgTQAAgKADgGIAHgSIAKgNQAGgGALgBAAyggIACAIQADAIAAAJIAAABIAFAIIAAADQABAIgFAJIgKAKIgRAFIgSABIgPgCIgQgHQgHgEgCgIQgCgIABgHIABgCQACgIAGgG");
	this.shape_7.setTransform(31.2,55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#652727").ss(0.8,1,1).p("AAvABIgCACIgNALIgPAJIgQAIIgPAGIgMADIgIgBIgMgHQgIgGAAgJIACgOQACgDAFgDIAqgaQAXgPAXAIQAIADACAHQADAJgDAIIgFAJg");
	this.shape_8.setTransform(49.2,39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4D2F11").ss(0.8,1,1).p("ADHl/IAaA6IAOArQAIAYAAAZIgBApIgJAoIgKAhQgPAqgWApAB5lTIgBALIgCAWIgBAIIAAABIgBAIIgJAjIgMAgIgQAeIgMAVIgGAJIgPAVIgGAHIAEACQAQAJgLATQAQAHARgDQATgDAPgJIAbgTIAIgIIABgCIAMgSIAMggIAEggIAAgDQAAgQgFgFAA+j4IAIgEIARgJIANgMIAMgPIAFgJAgykOIAEgKQAFgHAJgDIASABIACgCQAHgFAIABQAJAAAGAIIAKAAQAJACAFAHQAFAHABAJIgBAIAgOkhIgKAMIgHAQQgDAJADAJIAGAKIABABIADACIARADIgCgIQgCgJACgKQAAgJAFgIQADgHAIgGIAIgDAgxjxIgBgDQgEgJACgJIACgIAAbjpIgEAKIgFADIgGADQAAAHgFAGQgGAGgIABQgJACgIgHQgGgGgCgJQAAgEAAgCQACgGAGgDAgEjjIAEAEIACADIAKADAgZjpQgHACgHgCIgKgIAhwgEIABgBQAGgJAIgGQAFgFAHgCIAFgCIAMgBQABgHAFgJIABAAIAAgBIgBgBQgLgMANgOIABgBQgLgMASgNIgIgIQgLgQASgJIALAAIACACIAAAAIABAAQAJAHANACIANACQAJgBAIgGQAMgNAPAGAg0hkIAHADAg7hLIACACQAGAGAJABAg9guIABABIABAAQAMAKAMgCAjEBnQgEACgDADIgIAIQgGAHgDAIQgDAJAAALIADANQAFAKAKAEQgHAFgIAAQgHAAgHgFQgNgIAAgWQAAgWAMgNIAGgFQAEgDAFgCIARgCIAHACQAHgDAHgBQARgBAGAKIABACIAHgCQAIgCAJACIABAAIABAAQAEABADACIAAgDIAAAAIgBgHIgBgEIgCgZIAAgKIACgZIABgFIABgGQAEgRAJgNAi8CzQgJgSAIgTQAIgRAOgKIAHgEIACgBAgfAXQALgHAOgDIAIAAIAaADIAgAKIAMAFIAGACIgFgDIgbgVQgNgJgGgSQgJAKgQAFIgBABIgdACIgGAAQgLgBgJgEIgBgBIgHgGAAbgSIABgDQAGgHADgLIAhACIAlgEQASgEAQgJIAKgGIASgOIAVgXIARgcIAIgQIAGgPIAKghIADgiIAAgCQAAgTgOggAhEgeQgBAJAFAHIACACAh9BvIAJAJACuAXQgGAUgGAJIgMASIgKASIgDAEIgMAdQgHASgBASQAAATAEATQAEASAHARQAHAPAKANIAMANQALANAEAQQADATgMAOQgLANgQAHQgRAIgMALQgOALgTABQgQAAgHgJQgIAHgLgDQgGgCgEgEIgIACQgGAAgGgEQgMgJABgUQABgSAMgNIAKgJQAJgFAKgDQASgGAPgIQAMgHAQgGQgNgLgIgOQgKgOgFgRQgFgRAAgUQgBgUAEgSIAKgkIACgIIAKgZQAGgPAHgKQgJgEgIgFABEjSIARgHIAKgFABfAqIALADIAZADAA3E0QgUACgKANQgEAGgDAGQgDAKACALIABAIIAIAJABSE+QgUACgKAPQgKARAIAQIAFAH");
	this.shape_9.setTransform(34,77.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A33030").s().p("AgiAnIgMgHQgIgGAAgJIACgOQACgDAFgDIAqgaQAXgPAXAIQAIADACAHQADAJgDAIIgFAJIgBABIgCACIgNALIgPAJIgQAIIgPAGIgMADg");
	this.shape_10.setTransform(49.2,39.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#60655C").s().p("AAMA5IgPAAIgSgBIgBAAIgSgEQgIgDgGgFIgDgCIgJgKIgBAAIgGgPIgCgRQAAgJADgJIAHgRIAKgNQAGgHALgBIgCAIQgBAKAEAIIABADQgGAGgCAJIgBADQgBAIACAGQACAIAHADIAQAHIARADIAQgBIARgFIAKgKQAFgJgBgGIAAgEIgFgJIAAgCQAAgJgDgIIgCgHIAIABIARAEIAJAHIACADIAEAQIABAEIgBANIgDASIgJAPIgGAFIgHAFIgRAGIgSADIgCABg");
	this.shape_11.setTransform(32.7,56.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#948216").s().p("AgcA3IgCgBIAIABIABADIgHgDgAARAoIAFgVIAIgkIAAAGIgDARIgFAQIgGAYgAgaAIIACgWIABgFIgBAFIgBAXIAAAKgAgWgXIgBAEIABgEgAgWgaIABgBIgBAEgAgIg5QgJAOgEAQQAEgSAJgMg");
	this.shape_12.setTransform(23.7,83);

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#78491B").s().p("AgSAMQgGgGgCgIQAAgDABgDQABgFAFgDQAJgBAKAHQAIAGATgCIgCACIgHACQAAAGgFAFQgGAHgIABIgDAAQgHAAgHgFg");
	this.shape_13.setTransform(33.4,56.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B551F").s().p("AgDAgQgKgHgJABIABAAIgCgCQgHACgGgCIgKgIIgBgDQgEgIABgIIACgIIAFgJQAFgIAIgDIATABIACgBQAHgFAIAAQAJAAAGAJIAKAAQAJABAFAHQAFAHABAKIgBAGIgRgEIgIAAIACAGQADAIAAAJIAAACIgEAJIgCACIgJABQgMAAgGgFg");
	this.shape_14.setTransform(33.7,51.7);

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#76481B").s().p("AhtBnIALgKIAGgFIALgFIAMgCIADgKQgDAOAMATIgGgFIgCAMQgFAHAAAOIgGAUIgCAIQAAAEACABIgEASQAAg3gdgZgABNCSIgFgDIAAABIgNgFIgggKIgbgDIgIAAQgTADgOAMIAEgRIABgFIAAgIIgHgBIAAAAQArADAXgUQgCAHA9AxgAA+huIgBgFIgEgPIgCgEIAIgDIARgJIANgNIAMgOIAFgJQABAggRAmIgCACIgOAIIgRAGg");
	this.shape_15.setTransform(34.1,66.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B551F").s().p("AA3F4QgHAGgLgDQgHgBgEgEIgHACQgGAAgHgFQgLgJABgUQABgSAMgNIAKgIQAJgGAKgDQARgFAPgJQANgHAQgFQgNgMgJgNQgJgOgFgSQgFgQgBgUQAAgVAEgSIAKgkIACgHIAKgaIAKgVIADgEIgMgFQg9gwACgHQgZASgpgBIgGgCIgCAAQgCgDgDABIgBgBQgMgTADgOIAEgHIgCgCQgKgMAOgOQgLgMARgOIgHgIQgLgQASgJIALABIACABQAKAHAMADIAOABQAJAAAIgHQALgNAPAHIAGgHIAQgVIAFgJIANgWIAPgeIABgBIAAgCQARgmgBggIADgIIAAgCIACgKIABgGIADgTIABgEIAOgCIARgHIAQgHIAPgKIANgKIADgDQASAmAMAoIAJAXQAJAVgBAXIgCArQgBAVgJAiIgHAWQgPAqgWAoIADAAQgYApgDAsIgIALIgHAKIgMATIgCAEIgNAdQgGARgBATQgBASAEAUQAEASAIAQQAHAPAKAOIALANQAMAMADARQAEASgMAOQgMANgPAHQgRAIgNALQgOAMgSAAIgCAAQgOAAgIgIgAiBC9IgBAAIgCAAIgGAAIgZgFIgYgFIAAAAIgPAAIgCAAQgHAFgIAAQgHAAgHgFQgNgJAAgWQAAgVAMgNIAGgGQAEgDAFgBIARgCIAHACQAHgEAHAAQARgCAGAKIABACIgCABIAGgBIAUgCIABAAIABABIAHADIAAgDIAAAAIAAgBIgBgGIgBgFIgCgYIAAgKIACgZIACgMQAEgRAJgMIAEgEQAdAWAAA4IgBACIgBAFQgGALAAAHIABAEIAAAAIgBACIgCAGQgFAOAAAGQgEAEAAAFQgGAMAAALQgEADAAAFIgBAFQgGAFAAAHIAAABIgCABIgIADg");
	this.shape_16.setTransform(33.9,77.6);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,35.1,58.8,81.1);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D2F11").ss(0.8,1,1).p("AAuAFIgZAZIgYATIgQAJIgIADIgHABIgFgBQgOgDgIgLQgIgMABgOQACgOAMgHQAMgIAIABIAZgCQAQgCANgIQAOgGAMgOIAXgWQABAUgGARQgGAPgMAOg");
	this.shape.setTransform(-1.4,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B551F").s().p("AgnA9QgOgDgIgLQgIgMABgOQACgOAMgHQAMgIAIABIAZgDQAQgBANgIQAOgGAMgOIAXgWQABAUgGARQgGAQgMAMIgZAaIgYATIgQAJIgIADIgHABg");
	this.shape_1.setTransform(-1.4,6.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,0.1,13.9,12.5);


(lib.shape23 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C3814").s().p("AgMAKIgFgHQAAgDAEgBQgJgQALACIAMAEIARgBIgBAKQgCACADAHQAAAJgOAAQgJAAgHgGg");
	this.shape.setTransform(32,63.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C3814").s().p("AgMBqIgGgCIgCAAIgGgDIgDAAQgHAAgCgFIgBgFIAAgBQABgHAFgEIADgCIAEgPIAHgYIAKggIAAgBIgBgDQAAgFAGgMIADgJIACgIIAAgHIgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABgBIABgIQABgFADgPQAAgOAEgLQADgLADAFIAEAEQABAAABAAQAAAAABAAQAAABABAAQAAABABAAIACABIAGACIAGAAIAAAJIgBAFIgCACIgIAqQgCAFAAAFIgEAZQgEAGgBAGQgCACgFAZIgKAlQgEALgBAMQgBAKgDAAIgDgBg");
	this.shape_1.setTransform(26.4,87.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60655C").s().p("AAkBZIgBAAQgGgGgHgCIgTgDQgGACgHAEIgJAFIgDADIAAgDQgDgNgMgEIgCgCIgRgFIgHgBIgLABIgIAHIgFACIgJgLIgCgCIgFgEIAAAAIgBgEIgBgFIACgFIgEgKIAAgBIgBgOIAAgFIABgDIAAgEIAAgCIACgWIABgDIAAgCIABgHIABgDIAFgUIAAgCIALgmIAAAAIAOAAIABAAQASAKAfAAIAMADIAKADIAZAGIAFABIAFABIAWAFIADACIAcAJIAHACIANADQgCAVgGAPIgPAgIgQAiIgRAeIgBABQgJADgDAGg");
	this.shape_2.setTransform(22.4,105);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2A862").s().p("ABlA2IgjAFIgUABQgWAAgBgOIgDACQgKAHgMAAQgSAAgOgOIgGgIIgSAFQgYAAgXgMQgWgMAAgIQAAgEAPgGQAKgFAHgCIgDgBIgHgDIgGABQgqAAgKgMQgEgFAAgOQAAgEAHgGQAKgHAQAAQAWAAAOANIACADQAGgFANgDQAVgGADAIIABADIgBADIgFAFIABAEIAEALIABAAIADAKIgCAGQgCADgHAAIAKAGQANAGADAIIABAAIAGgCIAVgDIAVADQAMAEADANIAAAEIAAAAIAEgEIAJgFQAKgFALACQALAAAPAOIACACIABgDQADgGAJgCIAZgBQAmADAAAXQAAAGgJADIgYAEQgWAAgMgJg");
	this.shape_3.setTransform(16.9,111.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,61.9,33.8,55.6);


(lib.shape20 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AA8o+QANAEAaANQAZANANARQANARABAWQA3gcA9AKQAwAKAmAhIAaAcQAQATAHAWQAGAUgFAWIATgBQAugDAqASQAbAKAVAQQAhAaANAoQANAogDAiIgIA7QgFAZgYAcIAoArQAiAogDA1QgDAvgXAqIgaApQgTAZgUANQgVAMgwAMIAFAlQAEAagPAhQgPAhgMALIgcAUQgbAQgeAGIg3ADIgugHQgDAagHAUQgIATgSAYQgTAXgkANQgkANguABQgvAAg1gkQgZgRgbgRIgeAQQh1AtgzgXQgzgXgVgPQgWgPgTgnQgTgoANgfIhMAAQgugMglgfQgrgjgRgzQgMghgDghQgEgrALgoQAHgcAQgWQgrgagTguQgKgYADghQACggANghQANggAegWQAdgXAagFIgLgsQgGgZAVgoQAUgoAbgRQAagRATgFQAogHAWAVIAPg2QAHgaAqgVQArgUAiABQAjACAgASQAFgdARgSQASgTAsgQQAsgRApAFg");
	this.shape_2.setTransform(0.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEIlIg0giIgeAQQh1AtgzgXQgzgXgVgPQgWgPgTgnQgTgoANgfIhMAAQgugMglgfQgrgjgRgzQgMghgDghQgEgrALgoQAHgcAQgWQgrgagTguQgKgYADghQACggANghQANggAegWQAdgXAagFIgLgsQgGgZAVgoQAUgoAbgRQAagRATgFQAogHAWAVIAPg2QAHgaAqgVQArgUAiABQAjACAgASQAFgdARgSQASgTAsgQQAsgRApAFIA6AIQANAEAaANQAZANANARQANARABAWQA3gcA9AKQAwAKAmAhIAaAcQAQATAHAWQAGAUgFAWIATgBQAugDAqASQAbAKAVAQQAhAaANAoQANAogDAiIgIA7QgFAZgYAcIAoArQAiAogDA1QgDAvgXAqIgaApQgTAZgUANQgVAMgwAMIAFAlQAEAagPAhQgPAhgMALIgcAUQgbAQgeAGIg3ADIgugHQgDAagHAUQgIATgSAYQgTAXgkANQgkANguABIgCAAQguAAg0gkg");
	this.shape_3.setTransform(0.7,-0.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("ABEhIQghghguAAQgoAAgWAgQgWAfgDAYIgEAfQgCAIAFASQAFASAgAZQAfAYApAAQAmAAAcgeQAbgeAAgkQAAgxgjghg");
	this.shape_4.setTransform(82.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BSQgggZgFgSQgFgSACgIIAEgfQADgYAWgfQAWggAoABQAugBAhAhQAjAhAAAxQAAAkgbAeQgcAdgmAAQgpAAgfgXg");
	this.shape_5.setTransform(82.2,13);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.1,-58.7,174.2,117);


(lib.shape19 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AA/pbQAOAEAbAOQAaANAOASQAOASAAAXQA7gdBAAKQAyALAnAiIAcAdQARAUAHAYQAGAVgFAXIAUgBQAxgDAsASQAcALAWARQAjAbAOAqQANAqgDAkIgIA+QgGAagZAeIAqAtQAkAqgEA4QgDAxgXAsIgcArQgUAbgVANQgWANgzAMIAGAnQAEAcgPAjQgRAigMAMQgNALgRAJQgcASgfAGIg6ADIgxgHQgDAbgHAVQgIAUgUAZQgTAYgmAOQgmAOgxAAQgxABg3gmQgbgSgcgSIggARQh7Avg1gYQg1gYgXgQQgXgQgUgpQgUgqAOggIhQAAQgxgNgmggQgtglgSg2QgNgigDgkQgEgsALgrQAIgdAQgXQgtgcgUgwQgKgZADgiQACgiAOgjQAOgiAfgXQAfgYAbgFIgMguQgGgbAWgqQAVgpAcgSQAcgTATgFQAqgHAYAWIAPg5QAIgbAsgWQAtgVAkABQAkACAiATQAFgfATgTQASgTAvgRQAugSArAFg");
	this.shape_2.setTransform(0.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEJBIg3gkIggARQh7Avg1gYQg1gYgXgQQgXgQgUgpQgUgqAOggIhQAAQgxgNgmggQgtglgSg2QgNgigDgkQgEgsALgrQAIgdAQgXQgtgcgUgwQgKgZADgiQACgiAOgjQAOgiAfgXQAfgYAbgFIgMguQgGgbAWgqQAVgpAcgSQAcgTATgFQAqgHAYAWIAPg5QAIgbAsgWQAtgVAkABQAkACAiATQAFgfATgTQASgTAvgRQAugSArAFIA9AJQAOAEAbAOQAaANAOASQAOASAAAXQA7gdBAAKQAyALAnAiIAcAdQARAUAHAYQAGAVgFAXIAUgBQAxgDAsASQAcALAWARQAjAbAOAqQANAqgDAkIgIA+QgGAagZAeIAqAtQAkAqgEA4QgDAxgXAsIgcArQgUAbgVANQgWANgzAMIAGAnQAEAcgPAjQgRAigMAMQgNALgRAJQgcASgfAGIg6ADIgxgHQgDAbgHAVQgIAUgUAZQgTAYgmAOQgmAOgxAAIgBAAQgwAAg3glg");
	this.shape_3.setTransform(0.7,-0.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("ABEhIQghghguAAQgoAAgWAgQgWAfgDAYIgEAfQgCAIAFASQAFASAgAZQAfAYApAAQAmAAAcgeQAbgeAAgkQAAgxgjghg");
	this.shape_4.setTransform(82.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BSQgggZgFgSQgFgSACgIIAEgfQADgYAWgfQAWggAoABQAugBAhAhQAjAhAAAxQAAAkgbAeQgcAdgmAAQgpAAgfgXg");
	this.shape_5.setTransform(82.2,13);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.4,-61.7,177.5,123);


(lib.shape18 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AA1oBIAjAQQAXALALAPQAMAPAAAUQAygZA2AJQArAJAiAdIAXAZQAPARAGAUQAFASgEAUIAQgCQAqgCAmAQQAXAJATAOQAdAXANAkQALAkgDAeQgCAegFAXQgFAWgVAaIAkAmQAeAjgDAwQgCApgUAmIgYAlQgRAWgSALQgTALgrALIAFAhQAEAYgNAdQgOAdgLAKQgLAKgOAIQgYAPgbAFIgxADIgpgHQgDAXgGASQgHARgQAVQgRAVggAMQggAMgqAAQgqABgughIgvgeIgbAOQhpAogtgUQgtgVgTgNQgUgNgRgkQgRgjAMgcIhEAAQgpgLgigbQglgfgQguQgKgdgEgeQgDgmAKgkQAGgZAOgUQgmgXgRgpQgJgWADgdQABgdAMgdQAMgdAagTQAbgVAXgEIgKgnQgFgXASgkQASgjAYgPQAYgQAQgEQAkgHAUAUIANgxQAGgXAmgTQAmgSAfABQAfACAdAQQAEgaAQgQQAPgRAogOQAngQAlAFg");
	this.shape_2.setTransform(0.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDHqIgvgeIgbAOQhpAogtgUQgtgVgTgNQgUgNgRgkQgRgjAMgcIhEAAQgpgLgigbQglgfgQguQgKgdgEgeQgDgmAKgkQAGgZAOgUQgmgXgRgpQgJgWADgdQABgdAMgdQAMgdAagTQAbgVAXgEIgKgnQgFgXASgkQASgjAYgPQAYgQAQgEQAkgHAUAUIANgxQAGgXAmgTQAmgSAfABQAfACAdAQQAEgaAQgQQAPgRAogOQAngQAlAFIAzAHIAjAQQAXALALAPQAMAPAAAUQAygZA2AJQArAJAiAdIAXAZQAPARAGAUQAFASgEAUIAQgCQAqgCAmAQQAXAJATAOQAdAXANAkQALAkgDAeQgCAegFAXQgFAWgVAaIAkAmQAeAjgDAwQgCApgUAmIgYAlQgRAWgSALQgTALgrALIAFAhQAEAYgNAdQgOAdgLAKQgLAKgOAIQgYAPgbAFIgxADIgpgHQgDAXgGASQgHARgQAVQgRAVggAMQggAMgqAAIgBAAQgpAAguggg");
	this.shape_3.setTransform(0.7,-0.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("ABEhIQghghguAAQgoAAgWAgQgWAfgDAYIgEAfQgCAIAFASQAFASAgAZQAfAYApAAQAmAAAcgeQAbgeAAgkQAAgxgjghg");
	this.shape_4.setTransform(82.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BSQgggZgFgSQgFgSACgIIAEgfQADgYAWgfQAWggAoABQAugBAhAhQAjAhAAAxQAAAkgbAeQgcAdgmAAQgpAAgfgXg");
	this.shape_5.setTransform(82.2,13);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.2,-52.5,167.3,104.6);


(lib.shape17 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AD9kjQALANAFAOQAEAOgEAPIANgBQAfgCAcAMQASAHAOALQAWARAJAaQAJAbgCAXIgFAoQgEAQgQATIAbAdQAXAagCAkQgCAfgQAcIgRAcQgNARgNAIQgOAIghAIIAEAZQADASgKAWQgLAWgIAHIgSANQgSALgUAEIglACIgfgEIgHAeIgRAdQgNAPgYAJQgYAJgfABQggAAgigYIgjgXIgVALQhOAdgigPQgigPgOgKQgPgKgMgbQgOgaAJgVIgzAAQgfgIgYgVQgdgXgMgiQgHgWgDgXQgCgcAHgbQAFgTALgPQgdgRgNgeQgGgRABgVQACgWAJgWQAIgWAUgOQAUgPARgEIgHgdQgEgRAOgbQANgbASgLQASgMAMgDQAbgFAPAPIAKglQAFgRAcgOQAdgOAXABQAXABAVANQAEgUALgMQAMgNAegLQAdgLAbADIAnAGIAaALQARAJAJALQAIAMABAPQAlgTApAHQAfAGAaAWg");
	this.shape_2.setTransform(0.7,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCFwIgjgXIgVALQhOAdgigPQgigPgOgKQgPgKgMgbQgOgaAJgVIgzAAQgfgIgYgVQgdgXgMgiQgHgWgDgXQgCgcAHgbQAFgTALgPQgdgRgNgeQgGgRABgVQACgWAJgWQAIgWAUgOQAUgPARgEIgHgdQgEgRAOgbQANgbASgLQASgMAMgDQAbgFAPAPIAKglQAFgRAcgOQAdgOAXABQAXABAVANQAEgUALgMQAMgNAegLQAdgLAbADIAnAGIAaALQARAJAJALQAIAMABAPQAlgTApAHQAfAGAaAWIARATQALANAFAOQAEAOgEAPIANgBQAfgCAcAMQASAHAOALQAWARAJAaQAJAbgCAXIgFAoQgEAQgQATIAbAdQAXAagCAkQgCAfgQAcIgRAcQgNARgNAIQgOAIghAIIAEAZQADASgKAWQgLAWgIAHIgSANQgSALgUAEIglACIgfgEIgHAeIgRAdQgNAPgYAJQgYAJgfABQggAAgigYg");
	this.shape_3.setTransform(0.7,-0.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("ABEhIQghghguAAQgoAAgWAgQgWAfgDAYIgEAfQgCAIAFASQAFASAgAZQAfAYApAAQAmAAAcgeQAbgeAAgkQAAgxgjghg");
	this.shape_4.setTransform(82.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BSQgggZgFgSQgFgSACgIIAEgfQADgYAWgfQAWggAoABQAugBAhAhQAjAhAAAxQAAAkgbAeQgcAdgmAAQgpAAgfgXg");
	this.shape_5.setTransform(82.2,13);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-39.4,152.8,78.5);


(lib.shape16 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("ABEhIQghghguAAQgoAAgWAgQgWAfgDAYIgEAfQgCAIAFASQAFASAgAZQAfAYApAAQAmAAAcgeQAbgeAAgkQAAgxgjghg");
	this.shape_2.setTransform(82.2,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BSQgggZgFgSQgFgSACgIIAEgfQADgYAWgfQAWggAoABQAugBAhAhQAjAhAAAxQAAAkgbAeQgcAdgmAAQgpAAgfgXg");
	this.shape_3.setTransform(82.2,13);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(71.8,2.4,38.3,31.9);


(lib.shape15 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgIhOQgeAAgQAXQgRAZgCARIgDAXQgBAFADAOQAEAOAYASQAXASAeAAQAdAAAVgXQAUgVAAgcQAAgkgagZQgZgYgiAAg");
	this.shape_2.setTransform(82.2,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguA9QgYgTgEgNQgDgOABgFIADgXQACgRARgZQAQgXAeAAQAiAAAZAYQAaAZAAAkQAAAcgUAWQgVAWgdAAQgeAAgXgSg");
	this.shape_3.setTransform(82.2,13);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(74.4,5.1,35.6,29.2);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgHhCIgRACQgMAEgQAUQgNASgCAVIAAAHIAAAHQADAUAQAQQATASAYAAQAeAAAWgXQAVgVAAgeQAAgZgVgPQgWgPgOgCg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAxQgQgQgDgUIAAgHIAAgHQACgVANgSQAQgUAMgEIARgCIASACQAOACAWAPQAVAPAAAaQAAAcgVAWQgWAXgeAAQgYAAgTgSg");
	this.shape_1.setTransform(103.1,27.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(96.3,20.8,13.8,13.5);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(1.5,1,1).p("AgFgxIgNACQgIACgMAPQgKANgCARIAAAFIAAAFQACAPAMALQAPAOASAAQAWAAAQgRQAQgRAAgVQAAgTgQgLQgQgLgLgBg");
	this.shape.setTransform(103.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAlQgMgMgCgPIAAgGIAAgEQACgQAKgOQAMgPAIgDIANgBIANABQALACAQALQAQALAAAUQAAAVgQAQQgQARgWAAQgSAAgPgNg");
	this.shape_1.setTransform(103.1,27.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(98,22.5,10.4,10.1);


(lib.shape10 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C99743","#B17E34"],[0.208,1],1.8,-10.5,1.8,-90.8).s().p("Egn/AJ6IAAxqUArCgESAk8AESIAARqg");
	this.shape.setTransform(249,314.4);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9D9D9D").ss(1,1,1).p("EAocgInIgvRVIh7AMIAOxygAQXo4IgiRyIhzgIIgMxegAVEo4IAhRyIBzgIIANxegAT7onIgvRVIh7AMIAOxygAeQo4IghRyIhzgIIgMxegAbNonIgvRVIh7AMIAOxygEAh0gInIgvRVIh6AMIANxygEAknAIyIAMxeIihgMIAiRygAM+osIihgMIAhRyIBzgIgAqco5IgiRyIhygIIgNxegAmao5IAiRyIBygIIANxegAm4opIgvRVIh7ANIAOxygAASonIAvRVIB6AMIgNxygAG5onIAuRVIB7AMIgNxygAGao4IghRyIhzgIIgMxegAgRopIgvRVIh6ANIANxygEgiSgI5IgiRyIhygIIgNxegA+Po5IAhRyIBzgIIAMxegEgh0gIpIAvRVIB7ANIgOxygA0yopIgvRVIh6ANIANxygAzpo5IAiRyIBygIIANxegA4Wo5IgiRyIhygIIgNxegAwJI5IANxyICcAQIgvRVgEgl/gI5IicAQIAvRVIB7ANg");
	this.shape_1.setTransform(251.3,214.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AglItIguxVICagQIANRxg");
	this.shape_2.setTransform(1,214.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhCIxIgNxeICfgMIgiRzg");
	this.shape_3.setTransform(87.3,214.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8,0).s().p("AhPo5ICfAMIgNReIhwAJg");
	this.shape_4.setTransform(133.6,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo4ICaAQIgvRVIh4AMg");
	this.shape_5.setTransform(109.7,214.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo4ICaAQIgvRVIh4AMg");
	this.shape_6.setTransform(156.3,214.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AglItIguxVICZgQIAORxg");
	this.shape_7.setTransform(43.3,214.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhCIxIgNxeICfgMIghRzg");
	this.shape_8.setTransform(23.7,214.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhPo5ICfAMIgNReIhwAJg");
	this.shape_9.setTransform(65.7,214.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo4ICaAQIgvRVIh4AMg");
	this.shape_10.setTransform(241,214.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhCIxIgNxdICfgNIgiRzg");
	this.shape_11.setTransform(284.4,214.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AgkItIgvxVICagRIANRzg");
	this.shape_12.setTransform(261.6,214.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AglItIguxVICagRIANRzg");
	this.shape_13.setTransform(303.9,214.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhFo4ICZAQIguRVIh5AMg");
	this.shape_14.setTransform(198.7,214.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhCIxIgNxeICfgMIgiRzg");
	this.shape_15.setTransform(176.3,214.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8,0).s().p("AhPo5ICfAMIgNReIhwAJg");
	this.shape_16.setTransform(218.3,214.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8,0).s().p("AhPo5ICfANIgNRdIhxAJg");
	this.shape_17.setTransform(326.3,214.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhPo5ICfANIgNRdIhxAJg");
	this.shape_18.setTransform(478.9,214.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhPo5ICfANIgMRdIhxAJg");
	this.shape_19.setTransform(394.2,214.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8.1,0).s().p("AhCIxIgNxdICfgNIgiRzg");
	this.shape_20.setTransform(437,214.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo5ICaARIguRVIh5ANg");
	this.shape_21.setTransform(417,214.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.4,0,8.5,0).s().p("AhGo5ICaARIguRVIh5ANg");
	this.shape_22.setTransform(459.3,214.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-7.9,0,8,0).s().p("AhDIxIgMxdICfgNIghRzg");
	this.shape_23.setTransform(348,214.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo5ICaARIguRVIh5ANg");
	this.shape_24.setTransform(370.4,214.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#B9B9B9","#C4C4C4"],[0,1],-8.3,0,8.5,0).s().p("AhGo5ICaARIguRVIh5ANg");
	this.shape_25.setTransform(501.7,214.3);

	// Layer 5
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#868686").s().p("EgnnAAjIAAhFMBPPAAAIAABFg");
	this.shape_26.setTransform(248.7,230.5);

	// Layer 4
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#868686").s().p("EgpYAAiIAAhEMBSxAAAIAABEg");
	this.shape_27.setTransform(260.1,183.4);

	// Layer 3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9D9D9D").ss(1,1,1).p("EAnoAAjMhPPAAAIAAhFMBPPAAAg");
	this.shape_28.setTransform(248.7,227.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BEBEBE").s().p("EgnnAAjIAAhFMBPPAAAIAABFg");
	this.shape_29.setTransform(248.7,227.8);

	// Layer 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#9D9D9D").ss(1,1,1).p("EApZAAjMhSxAAAIAAhFMBSxAAAg");
	this.shape_30.setTransform(260.1,180.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BEBEBE").s().p("EgpYAAjIAAhEMBSxAAAIAABEg");
	this.shape_31.setTransform(260.1,180.6);

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#956F2F").s().p("Egn/AIaIAAu+UArCgDpAk8ADpIAAO+g");
	this.shape_32.setTransform(249,301.6);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,157.1,532.5,220.7);


(lib.shape9 = function() {
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


(lib.shape6 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#476501","#527900"],[0,1],2.1,-11.6,4.5,-90.4).s().p("EgpOAIQIA62zQAOgDAfgQQAagOASABQASAAAVAoQAOAbgVAqQAfgaAdgFIAegEQAsABANAeQAJAUgFAeIAEAAIAdgoQAWgXAhABQAeABAcAcIAbAgQALgPAPgOQAegbAcABQAUAAATAcQALAOAGAPQAGgGAsgQQAugQAOAAQApACAaAmIAEAAQACgPAngQQAigNATABQAXABAbARIAhAWQAPgTAcgKQAfgMAiABQAMAAAdAPIAlATQAAgVATgPQAWgSAhABQAKAAAeAOQAbAMAIAGQgDgYAQgQQASgSAgABQA7ACAFA9QAOgIAUgFIA0gDQAfABAEAlQACAmADAAIAhgEIAkgDQAsACANAZQAHAPAAArQAvgTAIABIAaADQARABAKAXQAKAXgUARQBPgmAbAHQAZAHAJAHIALAOQACAEgBAQQADgGAQgLQARgLASAAQATABANARIAUAcQgFgRAUgRQASgSAUAAQAkACAYATQASAOgBAQQAFgOALgNQATgXAaABQAbABAOAHQAPAKABAVIAAgDQABgQAXgRQAXgQAZAGQAZAGAIAHIAYAUQgNgSAAgQQABgLAigeQAkgfAUAAQAGABANALQAOALABAFQAGgRAYgbQAfgkAaABQAVAAAEAYIAAgDQgFgKAagZQAdgcAbABIAcACQAOADABALQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIACgBQABgSAhgQQAcgOALAAQAUABAJAHIASAOQgHgOALgOQAKgPAhgGQAggHApAUQApAUAGAKQAFAJAAAVQAAAVAMACQAJgDAPgOQAMgLAIAAQAgABAmAjQAhAeADAVQgCAAgDAEQgNAQAsgSQAsgTAdANQApARgBAaIgCAYQgEANgQADIANAAIAXgCIAuAEQAdAGAGAVQAFAWADAuQAOgXAdgIQAcgJAXACQAXACAXANQAWAMAJAMIALgUQASgcAaABQAMABAYAMQAXALAEAHQgCgbAQgRQARgTAeABIATACIARACIAAgHQAAgNAdgWQAegXAQAAQAaABANAHQAIAEACAGQgBghARgQQATgTAsABIAXAGQAQAFAEACIAAgCQgKgBgCgFIAAgLQABgZAhgLQAZgHApABQAxABAHAkQADgsAmABQAKABALAGQAJAFAAAFQAEgcAOgMQAQgNAgABQAUABAPAMQABgPAOgSQARgWAPABQAIAAAZAKQAaALAFAHIAAgDQgIgMABgLQAAgaAVgMQATgLAiABQAUABALAPQARAZAOALIgBANQAPgVAZgNQANgIARACIA4APQgFgHAAgHQACg0AvABQAPABAMAGQAMAIAHANIAAgDQgGgWAOgSQAPgSAZABQAaAAAzAZQgIgLABgNQAAgQANgMQAPgOAWABQAOAAARANQASANAEANQgCgaAQgWQASgYAeABQAaABAhANQAhANgBAPQgBAOgMgMIghYwQ0ZHdz9AAQ07AA0eoNg");
	this.shape.setTransform(244.3,224.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#598400").s().p("Ego+AGTIAYsMQAOgEAggUQAagRASAAQASABAVAwQANAjgVAzQAfggAdgHIAegFQAsABANAlQAJAYgFAlIAEAAIAcgxQAYgdAgACQAeAAAcAjIAaAnQAMgSAPgSQAegiAcABQAUAAAUAjQAKARAGASQAFgIAtgTQAugUAOAAQApABAaAwIAEAAQACgTAmgUQAjgQATAAQAXABAbAWIAhAbQAOgXAdgOQAfgPAjABQAMAAAcATIAkAXQABgZATgUQAXgWAgABQALAAAeARIAiAVQgDgcARgVQARgWAhABQA7ACAEBMQAPgKATgHQAVgHAfACQAfACADAuQADAuADAAIAhgEIAjgEQAtABAMAfQAHATgBA0QAwgXAIABIAaADQARACAKAcQAJAcgTAVQBPgwAbAJQAaAJAIAIIALARQACAGgCATQADgIAQgOQARgNATAAQASABAOAUIAUAhQgFgSATgWQATgWAUABQAkABAYAXQASASgBASQAEgPALgRQAUgcAaAAQAbABANAKQAQALAAAXQACgVAXgUQAXgUAZAHQAZAHAJAJIAWAZQgMgYABgTQAAgOAiglQAkgmAVABQAGAAANAOQANANACAGQAGgVAYghQAggtAbABQAUABACAcIAAgDQgFgMAbgfQAdgjAcABIAcACQAOAEAAANQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAIACgBQABgVAhgVQAcgRAMABQATAAAKAIIARASQgGgSAKgRQALgSAhgIQAggJApAYQAoAZAHAMQAFALgBAaQAAAaAMACQAKgEAOgQQAMgOAIAAQAgABAmArQAhAkADAbIgFAEQgNAUAsgXQArgXAeAPQApAVgBAhIgCAdQgEAPgQADIAMABIAXgCIAuAEQAdAIAGAaQAFAaADA3QAOgdAdgKQAdgKAXABQAWACAXAQQAWAPAJAPQAEgNAGgLQATghAaABQANAAAXANQAXAOADAJQgCghARgUQARgXAeABIATACIARACIAAgJQAAgQAegcQAdgcARABQAaAAANAJQAHAFACAIQAAgpARgUQATgYArACQAJAAAQAGQAPAGADADIABgDQgKgBgCgGQgBgDABgKQABgfAhgNQAZgKApABQAxACAIArQADg2AlABQALAAAKAIQAJAHABAGQADgiAPgPQAQgRAfABQAVABAOAOQACgSAOgWQAQgbAPABQAJAAAZAMQAaANAFAJIAAgDQgIgPABgPQABgfAVgOQATgOAhABQAUAAALATQARAfAOANIgBAQQAPgaAagRQANgJARADQAdAHAaALQgFgKAAgIQAChBAwACQAPAAALAJQANAKAHAPIAAgEQgHgaAPgWQAPgXAYABQAbABAzAeQgIgPAAgQQABgTANgPQAPgRAXAAQANABASAPQASAQADARQgCggAQgbQASgeAeAAQAaABAhAQQAhAQgBASQgBARgLgPIgiQ0gAlMgJIAAgCgAjJgYIgBAAIgBAAg");
	this.shape_1.setTransform(248.3,147.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],-2.1,-73,-7.1,121.5).s().p("EgnxAN/IAA79MBPiAAAIAAb9g");
	this.shape_2.setTransform(247.8,82.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.6,-7.2,530.4,336.9);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#916928").ss(1,1,1).p("AAagRQAEAFAAANIgFASIgJAEIgQAGIgXgUIgGgHQAAgNAIgJQANgOAeAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFA45A").s().p("AgXAJIgFgHQAAgNAIgJQANgOAdAKIAEAHQAEAFgBANIgEASIgJAEIgQAGg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.shape3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite79 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape80("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite73 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape74("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite70 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape71("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound72");
	}
	this.frame_7 = function(){
    this.stop ();
    if (!this.parent.gameWin)
    { 
      _root.play();
    }
    else
   {
    //_root.GameEndClip.gotoAndPlay("GameWonPlayground");
    _root.GameWon = true;
   } // end else if	
	}	
	this.frame_8 = function() {
		playSound("sound76");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite2Puff();   //attachMovie("Puff", "puff" + i, i);
    this.addChild(this["puff" + i]);
    this["puff" + i]._rotation = Math.random() * 360;
    this["puff" + i].scaleX = this["puff" + i].scaleY = Math.random() * 0.4 + 0.8;
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
        } // end if
    });
   } // end of for
   	
	}
	this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame -1);
   this.parent.lose();	
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite70();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite73();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape75("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
   this.score  = function ()
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
  this.frame6 = function(){this.gameWin = true}
	// Layer 5
	this.star5 = new lib.sprite69();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite69();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite69();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite69();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite69();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite66 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape67("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.6,-21.9,100.4,40);


(lib.sprite63 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape64("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.3,138.9,169.3);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape62("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,1.4,99.8,109.4);


(lib.sprite58 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape59("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119,108.5);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape60("synched",0);

	// Layer 2
	this.instance_1 = new lib.sprite58();
	this.instance_1.setTransform(7.6,21);
	this.instance_1.alpha = 0.102;

	// Layer 1
	this.instance_2 = new lib.shape57("synched",0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.2,133.8,133.8);


(lib.sprite54 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape55("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-2.8,127.2,170.6);


(lib.sprite52 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape53("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,5.8,171.3,115.6);


(lib.sprite50 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape51("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-32.1,34,64.3);


(lib.sprite49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite50();
	this.instance.setTransform(0.6,0.5);
	//this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,10);
 
	this.instance_1 = new lib.sprite50();
	this.instance_1.setTransform(0.6,0.5);
  glowFilter(this.instance, 0, -1, 0, 2, 2, 10, 10, false, 'outer');
	
	this.SHOE = new lib.sprite52();
	this.SHOE.setTransform(32.2,-28.2,0.432,0.432,0,-1.7,178.2);
	//this.SHOE.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.SHOE_1 = new lib.sprite52();
	this.SHOE_1.setTransform(32.2,-28.2,0.432,0.432,0,-1.7,178.2);
	glowFilter(this.SHOE, 0, -1, 0, 2, 2, 10, 10, false, 'outer');
	
	this.DOG_FOOD = new lib.sprite54();
	this.DOG_FOOD.setTransform(-22.3,-39.6,0.428,0.428);
	//this.DOG_FOOD.shadow = new cjs.Shadow("#FFFFFF",0,0,10);

	this.DOG_FOOD_1 = new lib.sprite54();
	this.DOG_FOOD_1.setTransform(-22.3,-39.6,0.428,0.428);
	glowFilter(this.DOG_FOOD, 0, -1, 0, 2, 2, 10, 10, false, 'outer');
	
	this.ball = new lib.sprite56();
	this.ball.setTransform(-27.9,-27.4,0.406,0.406);
	//this.ball.shadow = new cjs.Shadow("#FFFFFF",0,0,10);
	this.ball_1 = new lib.sprite56();
	this.ball_1.setTransform(-27.9,-27.4,0.406,0.406);
	glowFilter(this.ball, 0, -1, 0, 2, 2, 10, 10, false, 'outer');
	
	this.APPLE = new lib.sprite61();
	this.APPLE.setTransform(-23.1,-25.4,0.442,0.442);
	//this.APPLE.shadow = new cjs.Shadow("#FFFFFF",0,0,10);
	this.APPLE_1 = new lib.sprite61();
	this.APPLE_1.setTransform(-23.1,-25.4,0.442,0.442);
	glowFilter(this.APPLE, 0, -1, 0, 2, 2, 10, 10, false, 'outer');
	
	this.bear = new lib.sprite63();
	this.bear.setTransform(-29.2,-36.4,0.414,0.414);
	//this.bear.shadow = new cjs.Shadow("#FFFFFF",0,0,10);
	this.bear_1 = new lib.sprite63();
	this.bear_1.setTransform(-29.2,-36.4,0.414,0.414);
	glowFilter(this.bear, 0, -1, 0, 2, 2, 10, 10, false, 'outer');

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.instance_1}]}).to({state:[{t:this.SHOE},{t:this.SHOE_1}]},1).to({state:[{t:this.DOG_FOOD},{t:this.DOG_FOOD_1}]},1).to({state:[{t:this.ball},{t:this.ball_1}]},1).to({state:[{t:this.APPLE}, {t:this.APPLE_1}]},1).to({state:[{t:this.bear},{t:this.bear_1}]},1).wait(1));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-31.7,34,64.3);

function glowFilter(instance, ang, color, distance, quality, strength, blurx, blury, knock, type)
{

     var oh = function(ang, color, distance, quality, strength, blurx, blury, knock, type){        
          this.angle = ang; 
          this.color = color;  
          this.da = {
             ad: "destinatin-over",
             knockout:  knock,
             type: type
          }
          this.distance = distance;
          this.quality = quality;
          this.strength = strength;
          this.x = blurx;
          this.y = blury;

        };
        
        var zg = function(a, b) {
            var c = a,
                d = c & 255,
                c = c >> 8,
                e = c & 255,
                c = c >> 8,
                f = c & 255,
                c = c >> 8 & 255;
             return new Nc(f, e, d, c)
        };
        
        var Nc = function(a, b, c, d) {
          this.r = a;
          this.Ob = b;
          this.Jb = c;
          this.$b = d
        };
        Nc.prototype.ld = function() {
        return "rgba(" + (this.r | 0) + "," + (this.Ob | 0) + "," + (this.Jb | 0) + "," + (this.$b / .255 | 0) / 1E3 + ")"
        };
        var Tq = function(a, b, c, d, e, f, h, k, n, q) {
            for (var u = 0; u < q; ++u) {
                for (var p = 0, t = u * n * 4 + b, v = t, w = 0; w < k; ++w) p += a[v], v += 4;
                for (var B = c, w = 0; w < h; ++w) a[B] = p * f, w + k < n && (p += a[v], v += 4), B += d;
                for (; w + k + 4 <= n; w += 4) a[B] = p * f, B += d, p += a[v] - a[t], a[B] = p * f, B += d, p += a[v + 4] - a[t + 4], a[B] = p * f, B += d, p += a[v + 8] - a[t + 8], a[B] = p * f, B += d, p += a[v + 12] - a[t + 12], t += 16, v += 16;
                for (; w + k < n; ++w) a[B] = p * f, p += a[v] - a[t], t += 4, v += 4, B += d;
                for (; w < n; ++w) a[B] = p * f, p -= a[t], t += 4, B += d;
                c += e
            }
        };
        Uq = function(a, b, c, d, e, f, h, k) {
            e = Math.max(a.x * e | 0, 1);
            f = Math.max(a.y * f | 0, 1);
            a = a.quality;
            if (0 < a && 1 < e * f) {
                for (var n = a & 1, q, u, p = 3, t = 2, v = 1; v < a; ++v) q = (e - n) / 2 | 0, u = e - q, Tq(b, p, t, 4, 4 * c, 1 / e, q, u, c, d), n ^= 1, q = p, p = t, t = q;
                a & 1 && (e = e - 1 | 1);
                q = (e - n) / 2 | 0;
                Tq(b, p, t, 4 * d, 4, 1 / e, q, e - q, c, d);
                q = p;
                p = t;
                t = q;
                n = a & 1;
                for (v = 1; v < a; ++v) q = (f - n) / 2 | 0, u = f - q, Tq(b, p, t, 4, 4 * d, 1 / f, q, u, d, c), n ^= 1, q = p, p = t, t = q;
                a & 1 && (f = f - 1 | 1);
                q = (f - n) / 2 | 0;
                Tq(b, p, h, 4 * c, 4, k / f, q, f - q, d, c)
            } else
                for (e = 3; e < c * d * 4; e += 4, h += 4) b[h] = b[e] * k
        };
        
        var fill = function(a, b, c, e) {
          c.globalCompositeOperation = b || "source-over";
          c.fillStyle = a.ld();
          c.fillRect(0, 0, e.width, e.height);
          c.globalCompositeOperation = "source-over"
        }
        
        var c;
        var b = new oh(ang, color, distance, quality, strength, blurx, blury, knock, type);
        //c = b.distance;
        var d = zg(b.color),
            e = 2 < c ? .5 : 1,
            f = 20 * 0.05 * e,
            h = 20 * 0.05 * e;   
        var bb = false, eb = false;
        
      
        instance.filters = [new cjs.BlurFilter(b.x, b.y, b.quality)];
        var boundsBlur = instance.filters[0].getBounds(); 
        instance.filters =[];
        var x0 = boundsBlur.x+instance.nominalBounds.x, y0 = boundsBlur.y+instance.nominalBounds.y;
        var width = instance.nominalBounds.width+boundsBlur.width, height = instance.nominalBounds.height+boundsBlur.height;
        instance.cache(x0, y0, width, height);
        
        var c = instance.cacheCanvas.getContext('2d');
                
        var e = c.getImageData(0, 0, width,height); 
       
       if (b.da.type == 'inner') {
            Uq(b, e.data, e.width, e.height, f, h, 3, 1);
            for (var f = e.data, h = d.r, k = d.Ob, n = d.Jb, d = d.$b, q = b.strength, u = f.length, p = 0; p < u; p += 4) f[p + 0] = h, f[p + 1] = k, f[p + 2] = n, f[p + 3] = (255 - f[p + 3]) * q, f[p + 3] = f[p + 3] * d >> 8;
            c.putImageData(e, 0, 0)
        } else Uq(b, e.data, e.width, e.height, f, h, 3, b.strength), c.putImageData(e, 0, 0), d = bb && eb && 254 < d.r && 254 < d.Ob && 254 < d.Jb ? new Nc(254,
          254, 254, d.$b) : d, fill(d, "source-in", c, e);
    
};

(lib.sprite46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape47("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.8,-76.5,43.7,153.1);


(lib.sprite45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound48");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7));

	// Layer 1
	this.instance = new lib.sprite46();
	this.instance.setTransform(0,-85.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-65.5},0).wait(1).to({y:-53.9},0).wait(1).to({y:-50},0).wait(1).to({y:-53.5},0).to({y:-71.8},2).wait(1).to({y:-80.9},0).wait(1).to({y:-85},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-161.6,43.7,153.1);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape44("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.1,0,68.4,20.9);


(lib.sprite42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,bury:1});
  this.frame1 = function(){this.stop()}
  this.frame8 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.sprite43();
	this.instance.setTransform(0.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.6},6).wait(1).to({y:0},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7).call(this.frame8))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,11.5,68.4,20.9);


(lib.sprite40 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-12,74.3,24.2);


(lib.sprite34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{norm:0,wrong:1,correct:36});
  this.frame_0 = function(){this.stop()}
	// timeline functions:
	this.frame_15 = function() {
		playSound("sound37");
	}
  this.frame_35 = function(){this.gotoAndStop(0)}	
	this.frame_45 = function() {
		playSound("sound39");
	}
  this.frame_74 = function(){this.gotoAndStop(0)}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(20).call(this.frame_35).wait(10).call(this.frame_45).wait(29).call(this.frame_74));

	// Layer 2
	this.instance = new lib.shape35("synched",0);

	this.instance_1 = new lib.shape38("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},35).wait(39));

	// Layer 1
	this.instance_2 = new lib.shape36("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0,_off:false},0).to({_off:true},35).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,9.6,8.5,6.5);


(lib.sprite30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sad:6});
  this.frame1 = function(){this.stop()}
  this.frame6 = function(){this.gotoAndStop(0)}
	// Layer 2
	this.instance = new lib.shape32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({_off:true},5).wait(34));

	// Layer 1
	this.instance_1 = new lib.shape31("synched",0);

	this.instance_2 = new lib.shape33("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_2}]},5).wait(34));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6).wait(34))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,0.8,13.4,8.4);


(lib.sprite28 = function() {
	this.initialize();

	// Layer 3
	this.mouth = new lib.sprite34();
	this.mouth.setTransform(-2.1,-14.4);

	// Layer 2
	this.eyes = new lib.sprite30();
	this.eyes.setTransform(-5.7,-24.6);
	this.eyes.alpha = 0.75;

	// Layer 1
	this.instance = new lib.shape29("synched",0);

	this.addChild(this.instance,this.eyes,this.mouth);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-38.7,35.5,41.1);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.3,0.1,13.9,12.5);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{wag:1,"sad":31});
  this.frame1 = function(){this.stop()}
  this.frame31 = function(){this.gotoAndStop(0)}
  this.frame65 = function(){this.gotoAndStop(0)}
	// Layer 1
	this.instance = new lib.sprite25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:11.2,x:1.7,y:1.2},3).wait(1).to({rotation:15,x:2.3,y:1.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.8,x:1.9,y:1.2},0).to({scaleX:1,scaleY:1,rotation:5.8,x:0.9,y:0.5},2).wait(1).to({rotation:2.8,x:0.5,y:0.1},0).wait(1).to({rotation:0,x:0,y:0},0).to({rotation:12,x:1.8,y:1.3},4).wait(1).to({rotation:15,x:2.3,y:1.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.8,x:1.9,y:1.2},0).to({scaleX:1,scaleY:1,rotation:5.8,x:0.9,y:0.5},2).wait(1).to({rotation:2.8,x:0.5,y:0.1},0).wait(1).to({rotation:0,x:0,y:0},0).to({rotation:11.2,x:1.7,y:1.2},3).wait(1).to({rotation:15,x:2.3,y:1.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:2,y:1.3},0).to({rotation:9.8},1).wait(1).to({scaleX:1,scaleY:1,rotation:7.3,x:1.2,y:0.7},0).wait(1).to({rotation:4.8,x:0.8,y:0.4},0).to({rotation:2.4},1).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({y:0},0).to({rotation:8.5,x:1.2,y:0.8},1).wait(1).to({scaleX:1,scaleY:1,rotation:17.1,x:2.4,y:1.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.9,x:4.1,y:4.5},0).wait(1).to({rotation:55.4,x:4.7,y:7.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:69.9,x:4.4,y:10.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:75,x:4.2,y:11.3},0).wait(21).wait(1).to({scaleX:1,scaleY:1,rotation:71.5,x:4.4,y:10.7},0).wait(1).to({rotation:59.7,x:4.7,y:8.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:40.1,x:4.4,y:5.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:19,x:2.6,y:1.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.5,x:0.7,y:0.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(30).call(this.frame31).wait(34).call(this.frame65))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,0,13.9,12.5);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 4
	this.dogHead = new lib.sprite28();
	this.dogHead.setTransform(48.6,38.8,0.998,0.998,1.3);

	// Layer 3
	this.instance = new lib.shape27("synched",0);

	// Layer 2
	this.wag = new lib.sprite24();
	this.wag.setTransform(56.3,68.5);

	// Layer 1
	this.instance_1 = new lib.shape23("synched",0);

	this.addChild(this.instance_1,this.wag,this.instance,this.dogHead);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.3,61.8,117.9);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 1
	this.dog = new lib.sprite22();
	this.dog.setTransform(14.9,60.2,2.251,2.251,-6.7);

	this.addChild(this.dog);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.8,42.9,169.3,279.9);


(lib.sprite11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame_0 = function(){this.stop()}
	// timeline functions:
	this.frame_4 = function() {
		playSound("sound14");
	}
  this.frame_8 = function(){_root.targetItem.visible = true}
  this.frame_10 = function(){this.stop()}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(2).call(this.frame_10));

	// Layer 3
	this.instance = new lib.shape17("synched",0);

	this.instance_1 = new lib.shape18("synched",0);

	this.instance_2 = new lib.shape19("synched",0);

	this.instance_3 = new lib.shape20("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(2));

	// Layer 2
	this.instance_4 = new lib.shape15("synched",0);

	this.instance_5 = new lib.shape16("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.instance_6 = new lib.shape12("synched",0);

	this.instance_7 = new lib.shape13("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1811.8,-100,2398.9,200.3);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1219.7},593).wait(1).to({x:-1221.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1811.8,-100,2398.9,200.3);


(lib.sprite4Dirt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.sprite2Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape3("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;