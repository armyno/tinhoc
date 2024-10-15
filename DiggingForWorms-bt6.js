(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.DiggingForWorms = function() {
	this.initialize();

	// Layer 7
	this.instance = new lib.shape53("synched",0);
	this.instance.setTransform(433,16);

	// Layer 5
	this.border = new lib.sprite49();

	// Layer 4
	this.starPoints = new lib.sprite40();
	this.starPoints.setTransform(28.1,26);

	// Layer 3
	this.shovel = new lib.sprite31();
	this.shovel.setTransform(142.5,119);

	// Layer 2
	this.bg = new lib.sprite29();
	this.bg.setTransform(246.9,203.5);
	this.bg.alpha = 0.01;

	// Layer 1
	this.instance_1 = new lib.shape28("synched",0);
  
  function addScore(amount)
  {
    score = score + amount;
    //scoreFld.text = score;
    self["points" + dirtCount] = new lib.sprite19Points(); //attachMovie("Points", "points" + dirtCount, getNextHighestDepth());
    self["points" + dirtCount].pointsFld.text = "+" + amount;
    self["points" + dirtCount].x = stage.mouseX / ratio;
    self["points" + dirtCount].y = stage.mouseY / ratio;
    self["points" + dirtCount].on("tick",  function (evt)
    {
        evt.currentTarget.y = evt.currentTarget.y - 2;
        evt.currentTarget.alpha = evt.currentTarget.alpha - 0.1;
        if (evt.currentTarget.alpha < 0)
        {
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        } // end if
    });
  } // End of the function
  function dirtExplode(posY, clip, addBonus)
  {
    for (var j = 1; j <= 40; j++)
    {
        ++dirtCount;
        self["dirt" + j] = new lib.sprite17Dirt(); //  attachMovie("Dirt", "dirt" + j, shovelDepth + dirtCount);
        self.addChild(self["dirt" + j]);
        self["dirt" + j].x = stage.mouseX / ratio;
        self["dirt" + j].y = self["dirt" + j].startY = posY + 5;
        self["dirt" + j].scaleX = self["dirt" + j].scaleY = (Math.random() * 100 + 0)/100;
        self["dirt" + j].alpha = (Math.random() * 50 + 50)/100;
        self["dirt" + j].velX = Math.random() * 10 - 5;
        self["dirt" + j].velY = -Math.random() * 6 - 8;
        self["dirt" + j].on("tick",  function (evt)
        {
            evt.currentTarget.velY = evt.currentTarget.velY + self.gravity;
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
            if (evt.currentTarget.y > evt.currentTarget.startY)
            {                
                self.removeChild(evt.currentTarget);
                delete evt.currentTarget;
            } // end if
        });
    } // end of for
    if (addBonus)
    {
        sndCoins.play(); //start();
        numCoins = Math.ceil(Math.random() * 5 + 5);
        for (var j = 41; j < 41 + numCoins; j++)
        {
            ++dirtCount;
            self["coin" + j]  = new lib.sprite26Coin(); // attachMovie("Coin", "coin" + j, shovelDepth + dirtCount);
            self.addChild(self["coin" + j]);
            self["coin" + j].x = stage.mouseX / ratio;
            self["coin" + j].y = self["coin" + j].startY = posY + 5;
            self["coin" + j].velX = Math.random() * 10 - 5;
            self["coin" + j].velY = -Math.random() * 5 - 15;
            self["coin" + j].on("tick",  function (evt)
            {
                evt.currentTarget.velY = evt.currentTarget.velY + self.gravity;
                evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
                evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
                if (evt.currentTarget.y > evt.currentTarget.startY)
                {
                    self.removeChild(evt.currentTarget);
                    delete evt.currentTarget;
                } // end if
            });
        } // end of for
        if (!self.starPoints.losingPoints)
        {
            self.starPoints.score();
        } // end if
    } // end if
  } // End of the function
  var self = this; _root = this;
  this.cursor = "none"; //Mouse.hide();
  //loadMovie("/flash/GameController.swf", "GameEndClip");
  this.GameWon = false;
  var i = 0;
  var posY = 0;
  var wait = 0;
  var maxWait = 48;
  this.turn = -5;
  var step = 1.388889E-002;
  var dirtCount = 0;
  this.gravity = 2;
  var shovelDepth = 400000;
  var score = 0;
  var bonusWait = 0;
  var sndWorm1 = playSound("sound3worm1"); sndWorm1.stop();
  var sndWorm2 = playSound("sound2worm2"); sndWorm2.stop();
  var sndWorm3 = playSound("sound1worm3"); sndWorm3.stop();
  var sndCoins = playSound("sound4coins2"); sndCoins.stop();
  //shovel.swapDepths(shovelDepth);
  //border.swapDepths(800000);
  //GameEndClip.swapDepths(900000);
  this.bg.on("mousedown", function ()
  {
    if (self.shovel.currentFrame == 0)
    {
        self.shovel.play();
        dirtExplode(stage.mouseY / ratio, null, false);
    } // end if
  });
  this.on("tick",  function ()
  {
    ++wait;
    if (self.turn > -15)
    {
        self.turn = self.turn - step / 6;
    } // end if
    if (wait > maxWait)
    {
        wait = 0;
        ++i;
        posY = Math.random() * 170 + 105;
        self["worm" + i] = new lib.sprite11Worm();   //attachMovie("Worm", "worm" + i, Math.round(posY * 1000));
        self.addChild(self["worm" + i]);
        self["worm" + i].x = Math.random() * 300 + 100;
        self["worm" + i].y = posY;
        self["worm" + i].scaleY = (self["worm" + i].y - 35 + 400) / 640;
        self["worm" + i].scaleX = (2 * Math.round(Math.random()) - 1) * self["worm" + i].scaleY;
        self["worm" + i].on("mousedown",  function (evt)
        {
            wormSound = Math.round(Math.random() * 3);
            if (wormSound != 1)
            {
                if (wormSound != 2)
                {
                    sndWorm3.play();
                }
                else
                {
                    sndWorm2.play();
                } // end else if
            }
            else
            {
                sndWorm1.play();
            } // end else if
            self.shovel.play();
            evt.currentTarget.hit.visible = false;
            evt.currentTarget.body.gotoAndStop(1);
            evt.currentTarget.body.on("tick", evt.currentTarget.pluck);
            dirtExplode(evt.currentTarget.y, evt.currentTarget, false);
        });
    } // end if
    ++bonusWait;
    if (bonusWait > 144)
    {
        bonusWait = 0;
        posY = Math.random() * 170 + 70;
        self["bonus" + i] = new lib.sprite22Bonus(); //attachMovie("Bonus", "bonus" + i, Math.round(posY * 1000));
        self.addChild(self["bonus" + i]);
        self["bonus" + i].x = Math.random() * 300 + 100;
        self["bonus" + i].y = posY;
        self["bonus" + i].on("mousedown", function (evt)
        {
            self.shovel.play();
            dirtExplode(evt.currentTarget.y, evt.currentTarget, true);
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        });
    } // end if
    self.shovel.x = stage.mouseX / ratio;
    self.shovel.y = stage.mouseY / ratio;
    self.shovel.rotation = (stage.mouseX / ratio - 500 / 2) / 6;
  });



	this.addChild(this.instance_1,this.bg,this.shovel,this.starPoints,this.border,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,0,515,407.7);


// symbols:
(lib.image52 = function() {
	this.initialize(img.image52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite51 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite19Points = function() {
	this.initialize();

	// Layer 1
	this.pointsFld = new cjs.Text("0", "30px Arial", "#FFFFFF");
	this.pointsFld.lineHeight = 30;
	this.pointsFld.lineWidth = 114;
	this.pointsFld.setTransform(-58.9,-19.4);
	this.pointsFld.shadow = new cjs.Shadow("rgba(0,0,0,1)",-3,4,5);

	this.addChild(this.pointsFld);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.9,-19.4,118,38.9);


(lib.shape53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image52(); 
  this.shape.setTransform(-45, -7.5);
	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape46 = function() {
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


(lib.shape43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape39 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("Ahpk9IgJBlQgCAXAXARQAXARAkABIBEAAQAjAAAYgRQAYgRgCgXIgIhnAAuhxIAGAAQA3AAAkgbQAjgagFgjIgRiWIk1AAIgTCUQgFAkAiAaQAkAbA2ABIAGAAIgLEfQghACgYAVQgeAYgDAkQgEAlAcAcQAcAcAqAAIBkACQArAAAdgbQAbgcgCgkQgDglgdgYQgagVgfgDIgIkhIhdAAAg6CuIAKAAIBbACIALAAABIEEQAAAKgHAHQgJAGgLAAIhhgBQgLAAgHgHQgJgIABgJQAAgKAJgHQAHgHAMAAIBeACQALgBAJAIQAHAHABAKg");
	this.shape.setTransform(0,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.1,15.8,0.1,-4.9).s().p("AgiBQQgkgBgXgRQgXgRACgYIAJhjIDUgBIAIBlQACAYgYAQQgYASgjAAg");
	this.shape_1.setTransform(0,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAuFgIhkgCQgqAAgcgcQgcgcAEglQADgkAegYQAYgUAhgDIALkfIgGAAQg2gBgkgbQgigaAFgkIATiUIE1AAIARCWQAFAjgjAaQgkAbg3AAIgGAAIhdAAIBdAAIAIEhQAfADAaAVQAdAYADAlQACAkgbAcQgdAbgpAAIgCAAgAhFDxQgJAHAAAKQgBAJAJAIQAHAHALAAIBhABQALAAAJgGQAHgHAAgKQgBgKgHgHQgJgIgLABIhegCIgCAAQgKAAgHAHgAgwCuIBbACIALAAIgLAAIhbgCIgKAAgAhpk9IgJBlQgCAXAXARQAXARAkABIBEAAQAjAAAYgRQAYgRgCgXIgIhng");
	this.shape_2.setTransform(0,35.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AirGkQgbAAgOgWQgOgWAHgfQAIgfAZgVQAVgSAXgDIBPk+IgFAAQgtAAgYglQgXgkANgzIA9j5IE0AAIg9D5QgNAzgpAkQgpAlguAAIgFAAIhNE+QAWADAMASQAOAVgIAfQgIAfgYAWQgZAWgbAAgAiiFMQgHAFgCAIQgCAJAEAGQAEAGAHgBIBCAAQAHABAHgGQAGgGACgJQADgIgEgFQgEgHgIABIhBAAQgIgBgGAHg");
	this.shape_3.setTransform(-11.4,47.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.7,-0.1,51.1,89.3);


(lib.shape38 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("AAqhlIAFAAQAxAAAhgZQAfgXgEggIgPiIIkXAAIgRCGQgEAhAeAXQAgAZAxAAIAGABIgKECQgeACgWATQgbAVgDAhQgDAhAaAaQAYAZAnAAIBaACQAmAAAbgYQAYgZgCghQgCgigbgVQgXgTgcgDIgHkEIhUAAAhekeIgIBcQgDAUAVAQQAVAPAgABIA+AAQAgAAAVgQQAVgPgBgUIgHhdAg0CdIAJABIBSABIAKAAABBDrQAAAJgGAGQgIAGgKAAIhXgBQgLAAgGgHQgIgHABgIQAAgJAIgGQAHgHAKABIBVABQAKAAAIAHQAGAGABAJg");
	this.shape.setTransform(0,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.1,14.2,0.1,-4.4).s().p("AgfBIQgggBgVgQQgVgPADgVIAIhZIC/gBIAHBbQABAVgVAPQgVAQggAAg");
	this.shape_1.setTransform(0,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAqE+IhagCQgnAAgYgZQgagaADghQADghAbgVQAWgTAegCIAKkCIgGgBQgxAAgggZQgegXAEghIARiGIEXAAIAPCIQAEAggfAXQghAZgxAAIgFAAIhUAAIBUAAIAHEEQAcADAXATQAbAVACAiQACAhgYAZQgaAYgmAAIgBAAgAg+DaQgIAGAAAJQgBAIAIAHQAGAHALAAIBXABQAKAAAIgGQAGgGAAgJQgBgJgGgGQgIgHgKAAIhVgBIgCAAQgJAAgGAGgAgrCeIBSABIAKAAIgKAAIhSgBIgJgBgAhekeIgIBcQgDAUAVAQQAVAPAgABIA+AAQAgAAAVgQQAVgPgBgUIgHhdg");
	this.shape_2.setTransform(0,29.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AirGkQgbAAgOgWQgOgWAHgfQAIgfAZgVQAVgSAXgDIBPk+IgFAAQgtAAgYglQgXgkANgzIA9j5IE0AAIg9D5QgNAzgpAkQgpAlguAAIgFAAIhNE+QAWADAMASQAOAVgIAfQgIAfgYAWQgZAWgbAAgAiiFMQgHAFgCAIQgCAJAEAGQAEAGAHgBIBCAAQAHABAHgGQAGgGACgJQADgIgEgFQgEgHgIABIhBAAQgIgBgGAHg");
	this.shape_3.setTransform(-6.7,40.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-1.9,44.7,84.4);


(lib.shape37 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("AgwC3IAIABIBLABIAJAAQAaACAUASQAXAUACAeQAAAcgWAWQgYAVghAAIhOgBQgigBgVgVQgXgXABgdQACgeAYgSQASgSAbgCIAHkDIBSAAIAFABQAwgBAigaQAfgbgCgjIgJigIklgBIgLCgQgDAkAfAaQAhAbAwAAIAGAAAhjkfIgFBtQgCAWAWASQAVASAgAAIA9ABQAgAAAVgSQAWgSAAgXIgFhuAgoDpIBLACQAJgBAHAGQAGAFAAAJQAAAHgFAGQgIAGgIgBIhNgBQgJAAgGgFQgHgGABgHQgBgJAHgFQAGgHAKABgAAphMIADEF");
	this.shape.setTransform(0,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.2,13.5,0.2,-6.1).s().p("AgeBTQghAAgVgSQgVgSABgWIAGhrIDHgBIAEBsQAAAXgVASQgWASgfAAg");
	this.shape_1.setTransform(-0.1,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAkFGIhOgBQgigBgVgVQgXgXABgdQACgeAYgSQASgSAbgCIAIABIBLABIAJAAQAaACAUASQAXAUACAeQAAAcgWAWQgYAVgfAAIgCAAgAg4DvQgHAFABAJQgBAHAHAGQAGAFAJAAIBNABQAIABAIgGQAFgGAAgHQAAgJgGgFQgHgGgJABIhLgCIgDAAQgHAAgGAGgAAjC5IhLgBIgIgBIAHkDIBSAAIhSAAIgGAAQgwAAghgbQgfgaADgkIALigIElABIAJCgQACAjgfAbQgiAagwABIgFgBIADEFgAhjkfIgFBtQgCAWAWASQAVASAgAAIA9ABQAgAAAVgSQAWgSAAgXIgFhugAgwC3g");
	this.shape_2.setTransform(0,27);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AiLGkQgbAAgQgWQgPgWAFgfQAGgeAXgWQAUgSAWgDIA5k+IgFAAQguAAgagkQgZglAJgzIArj5IE0AAIgrD5QgJAzgnAlQgnAkgtAAIgFAAIg3E+QAXADANASQANAWgFAeQgEAfgXAWQgXAWgbAAgAiIFMQgHAFgBAIQgCAJAFAGQAEAGAHAAIBCAAQAHAAAHgGQAGgGABgJQACgIgEgFQgFgHgHAAIhCAAQgHAAgGAHg");
	this.shape_3.setTransform(-3.9,36.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-5.6,39.1,84.5);


(lib.shape36 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("AApDOQgEgBgEABIhBAAIgIgBIACkCIBNAAIAFABQAtgCAggbQAegdAAgnIgEi4IklAAIgEC4QgBAnAgAdQAfAcAtABIAFgBAhikhIgBB9QgCAZAWAUQATASAfABIA6ABQAegBAWgUQAUgTAAgZIgCh9AApDOQAXABARARQAUASABAbQAAAagTAUQgVASgcABIhCgBQgdgBgTgSQgVgUAAgZQABgcAVgSQAQgRAXgBAAng1IACEDAA0ENQAAAHgEAFIgOAFIhCAAQgJgBgEgEQgGgGAAgGQgBgIAHgEQAFgGAIAAIBCABQAHgBAHAGQAEAEAAAIg");
	this.shape.setTransform(0,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.1,13.4,0.1,-7.4).s().p("AgdBdQgfAAgTgTQgWgTACgaIABh6IDFgBIACB7QAAAagUATQgWATgeABg");
	this.shape_1.setTransform(0,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AggFNQgdgBgTgSQgVgUAAgZQABgcAVgSQAQgRAXgBIACkCIBNAAIhNAAIgFABQgtgBgfgcQgggdABgnIAEi4IElAAIAEC4QAAAngeAdQggAbgtACIgFgBIACEDQgEgBgEABIhBAAIgIgBIAIABIBBAAQAEgBAEABQAXABARARQAUASABAbQAAAagTAUQgVASgcABgAgtEBQgHAEABAIQAAAGAGAGQAEAEAJABIBCAAIAOgFQAEgFAAgHQAAgIgEgEQgHgGgHABIhCgBIgCAAQgHAAgEAGgAhikhIgBB9QgCAZAWAUQATASAfABIA6ABQAegBAWgUQAUgTAAgZIgCh9g");
	this.shape_2.setTransform(0,25.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AhzGkQgbAAgRgWQgRgWAEgeQAEggAWgVQATgSAXgDIAnk+IgFAAQguAAgcgkQgbglAGgzIAej5IE0AAIgeD5QgGAzglAlQglAkgtAAIgFAAIglE+QAWADAMASQAQAVgDAgQgEAegUAWQgWAWgbAAgAh1FMQgGAFgBAJQgBAIAEAGQAFAFAHABIBCAAQAHgBAGgFQAGgGABgIQABgJgEgFQgFgGgHgBIhCAAQgHABgGAGg");
	this.shape_3.setTransform(-1.8,34.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-8,34.8,84.4);


(lib.shape35 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("AgwC3IAIABIBLABIAJAAQAaACAUASQAXAUACAeQAAAcgWAWQgYAVghAAIhOgBQgigBgVgVQgXgXABgdQACgeAYgSQASgSAbgCIAHkDIBSAAIAFABQAwgBAigaQAfgbgCgjIgJigIklgBIgLCgQgDAkAfAaQAhAbAwAAIAGAAAhjkfIgFBtQgCAWAWASQAVASAgAAIA9ABQAgAAAVgSQAWgSAAgXIgFhuAgoDpIBLACQAJgBAHAGQAGAFAAAJQAAAHgFAGQgIAGgIgBIhNgBQgJAAgGgFQgHgGABgHQgBgJAHgFQAGgHAKABgAAphMIADEF");
	this.shape.setTransform(0,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.2,13.5,0.2,-6.1).s().p("AgeBTQghAAgVgSQgVgSABgWIAGhrIDHgBIAEBsQAAAXgVASQgWASgfAAg");
	this.shape_1.setTransform(-0.1,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAkFGIhOgBQgigBgVgVQgXgXABgdQACgeAYgSQASgSAbgCIAIABIBLABIAJAAQAaACAUASQAXAUACAeQAAAcgWAWQgYAVgfAAIgCAAgAg4DvQgHAFABAJQgBAHAHAGQAGAFAJAAIBNABQAIABAIgGQAFgGAAgHQAAgJgGgFQgHgGgJABIhLgCIgDAAQgHAAgGAGgAAjC5IhLgBIgIgBIAHkDIBSAAIhSAAIgGAAQgwAAghgbQgfgaADgkIALigIElABIAJCgQACAjgfAbQgiAagwABIgFgBIADEFgAhjkfIgFBtQgCAWAWASQAVASAgAAIA9ABQAgAAAVgSQAWgSAAgXIgFhugAgwC3g");
	this.shape_2.setTransform(0,27);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AiLGkQgbAAgQgWQgPgWAFgfQAGgeAXgWQAUgSAWgDIA5k+IgFAAQguAAgagkQgZglAJgzIArj5IE0AAIgrD5QgJAzgnAlQgnAkgtAAIgFAAIg3E+QAXADANASQANAWgFAeQgEAfgXAWQgXAWgbAAgAiIFMQgHAFgBAIQgCAJAFAGQAEAGAHAAIBCAAQAHAAAHgGQAGgGABgJQACgIgEgFQgFgHgHAAIhCAAQgHAAgGAHg");
	this.shape_3.setTransform(-3.9,36.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-5.6,39.1,84.5);


(lib.shape34 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("AAqhlIAFAAQAxAAAhgZQAfgXgEggIgPiIIkXAAIgRCGQgEAhAeAXQAgAZAxAAIAGABIgKECQgeACgWATQgbAVgDAhQgDAhAaAaQAYAZAnAAIBaACQAmAAAbgYQAYgZgCghQgCgigbgVQgXgTgcgDIgHkEIhUAAAhekeIgIBcQgDAUAVAQQAVAPAgABIA+AAQAgAAAVgQQAVgPgBgUIgHhdAg0CdIAJABIBSABIAKAAABBDrQAAAJgGAGQgIAGgKAAIhXgBQgLAAgGgHQgIgHABgIQAAgJAIgGQAHgHAKABIBVABQAKAAAIAHQAGAGABAJg");
	this.shape.setTransform(0,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.1,14.2,0.1,-4.4).s().p("AgfBIQgggBgVgQQgVgPADgVIAIhZIC/gBIAHBbQABAVgVAPQgVAQggAAg");
	this.shape_1.setTransform(0,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAqE+IhagCQgnAAgYgZQgagaADghQADghAbgVQAWgTAegCIAKkCIgGgBQgxAAgggZQgegXAEghIARiGIEXAAIAPCIQAEAggfAXQghAZgxAAIgFAAIhUAAIBUAAIAHEEQAcADAXATQAbAVACAiQACAhgYAZQgaAYgmAAIgBAAgAg+DaQgIAGAAAJQgBAIAIAHQAGAHALAAIBXABQAKAAAIgGQAGgGAAgJQgBgJgGgGQgIgHgKAAIhVgBIgCAAQgJAAgGAGgAgrCeIBSABIAKAAIgKAAIhSgBIgJgBgAhekeIgIBcQgDAUAVAQQAVAPAgABIA+AAQAgAAAVgQQAVgPgBgUIgHhdg");
	this.shape_2.setTransform(0,29.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AirGkQgbAAgOgWQgOgWAHgfQAIgfAZgVQAVgSAXgDIBPk+IgFAAQgtAAgYglQgXgkANgzIA9j5IE0AAIg9D5QgNAzgpAkQgpAlguAAIgFAAIhNE+QAWADAMASQAOAVgIAfQgIAfgYAWQgZAWgbAAgAiiFMQgHAFgCAIQgCAJAEAGQAEAGAHgBIBCAAQAHABAHgGQAGgGACgJQADgIgEgFQgEgHgIABIhBAAQgIgBgGAHg");
	this.shape_3.setTransform(-6.7,40.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-1.9,44.7,84.4);


(lib.shape32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003040").ss(1,1,1).p("Ahpk9IgJBlQgCAXAXARQAXARAkABIBEAAQAjAAAYgRQAYgRgCgXIgIhnAAuhxIAGAAQA3AAAkgbQAjgagFgjIgRiWIk1AAIgTCUQgFAkAiAaQAkAbA2ABIAGAAIBdAAIAIEhQAfADAaAVQAdAYADAlQACAkgbAcQgdAbgrAAIhkgCQgqAAgcgcQgcgcAEglQADgkAegYQAYgVAhgCIALkfAA2CwIgLAAIhbgCIgKAAABIEEQAAAKgHAHQgJAGgLAAIhhgBQgLAAgHgHQgJgIABgJQAAgKAJgHQAHgHAMAAIBeACQALgBAJAIQAHAHABAKg");
	this.shape.setTransform(0,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01748F","#0099CC"],[0,1],0.1,15.8,0.1,-4.9).s().p("AgiBQQgkgBgXgRQgXgRACgYIAJhjIDUgBIAIBlQACAYgYAQQgYASgjAAg");
	this.shape_1.setTransform(0,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099CC").s().p("AAuFgIhkgCQgqAAgcgcQgcgcAEglQADgkAegYQAYgUAhgDIALkfIBdAAIhdAAIgGAAQg2gBgkgbQgigaAFgkIATiUIE1AAIARCWQAFAjgjAaQgkAbg3AAIgGAAIAIEhQAfADAaAVQAdAYADAlQACAkgbAcQgdAbgpAAIgCAAgAhFDxQgJAHAAAKQgBAJAJAIQAHAHALAAIBhABQALAAAJgGQAHgHAAgKQgBgKgHgHQgJgIgLABIhegCIgCAAQgKAAgHAHgAgwCuIBbACIALAAIgLAAIhbgCIgKAAgAhpk9IgJBlQgCAXAXARQAXARAkABIBEAAQAjAAAYgRQAYgRgCgXIgIhng");
	this.shape_2.setTransform(0,35.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AirGkQgbAAgOgWQgOgWAHgfQAIgfAZgVQAVgSAXgDIBPk+IgFAAQgtAAgYglQgXgkANgzIA9j5IE0AAIg9D5QgNAzgpAkQgpAlguAAIgFAAIhNE+QAWADAMASQAOAVgIAfQgIAfgYAWQgZAWgbAAgAiiFMQgHAFgCAIQgCAJAEAGQAEAGAHgBIBCAAQAHABAHgGQAGgGACgJQADgIgEgFQgEgHgIABIhBAAQgIgBgGAHg");
	this.shape_3.setTransform(-11.4,47.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.7,-0.1,51.1,89.3);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A71wMIAQhgIGVgVQa0hRWABPQCGIICvckMhAxAACQBwyxCzwGg");
	this.shape.setTransform(0,-17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.3,-136.7,414.7,239.1);


(lib.shape28 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2F4800").ss(1,1,1).p("AhSBFQAsifB5AFQhUA+AdBt");
	this.shape.setTransform(466.9,330.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669900").s().p("AhSBFQAsifB5AFQhUA+AdBtg");
	this.shape_1.setTransform(466.9,330.5);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2F4800").ss(1,1,1).p("AgwCFQgPiOByh6QhEBzBDCV");
	this.shape_2.setTransform(44.2,328.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#568200").s().p("AgwCFQgPiOByh7QhEB0BDCVg");
	this.shape_3.setTransform(44.2,328.2);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2F4800").ss(1,1,1).p("AgvCdQAsiXgviiQBFByAgDH");
	this.shape_4.setTransform(35.7,324.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#568200").s().p("AgvCdQAsiXgviiQBFByAgDHg");
	this.shape_5.setTransform(35.7,324.3);

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#4F4735").ss(2,1,1).p("A72y5QizQGhwSxMA/EgACEggZAP+IhjABMAFIgmVMA5pgAjMAFGAm3IhjgCIhtAAEAjbARSIjqHZMg+gAAQIkrnlMAE5gpmMA9GgAqMAE2AqMMhG1AAEEAgYAP8Qiv8kiGoHQ2AhP6zBRImVAVIgRBf");
	this.shape_6.setTransform(246.9,203.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A89575").s().p("A+h0eMA9GgApMAE2AqMMhG1AADgA80yjMgFIAmVIBjgBMA/EgACIBtAAIBjACMgFGgm3g");
	this.shape_7.setTransform(246.9,179.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#645640").s().p("EgjaAQVMBG1gADIjqHYMg+gAARgA803WMA5pgAjMAFGAm2IhjgCQiv8kiGoHQ2AhP6zBRImVAVIgRBfQizQGhwSxIhjABg");
	this.shape_8.setTransform(246.9,210);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B08D3E").s().p("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");
	this.shape_9.setTransform(252.6,186.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF9A44").s().p("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");
	this.shape_10.setTransform(241.3,191.2);

	// Layer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2F4800").ss(1,1,1).p("AAQBWQAPh3iQg0QCjAABACX");
	this.shape_11.setTransform(24.9,334.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#568200").s().p("AhxhVQCjAABACXIhiAUQAPh3iQg0g");
	this.shape_12.setTransform(24.9,334.7);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.149)").s().p("Egj/gNeINvrQMA6uAqUIo5GuMhADAAbg");
	this.shape_13.setTransform(218.5,249.3);

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2F4800").ss(1,1,1).p("AhpBAQBkigBuAAQh3BAAQCB");
	this.shape_14.setTransform(473.2,333.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#669900").s().p("AhoBAQBjigBvAAQh4BAAQCBg");
	this.shape_15.setTransform(473.2,333.7);

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#669900").s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape_16.setTransform(250,170);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,0,515,407.7);


(lib.shape27 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#999999","#FFFFFF"],[0,1],-2.3,3.9,2.4,-4.1).ss(1,1,1).p("AAagjQALANAAAUQAAASgLAPQgLAPgTABQgVAAAEgNQADgNgNgGQgNgGAQgYQAPgbANgDQAPgDALANg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0C0C0").s().p("AgVAiQADgNgNgGQgNgGAQgYQAPgbANgDQAPgDALANQALANAAAUQAAASgLAPQgLAPgTABQgVAAAEgNg");

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#333333","#FFFFFF"],[0,1],-4.7,6.3,4.9,-6.2).ss(1,1,1).p("AAAhJQAeAAAWAVQAWAXAAAdQAAAfgWAVQgWAWgeAAQgdAAgWgWQgWgVAAgfQAAgdAWgXQAWgVAdAAg");
	this.shape_2.setTransform(0,0.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AA7g7QAZAaAAAhQAAAigZAZQgYAZgjAAQghAAgagZQgYgZAAgiQAAghAYgaQAagYAhAAQAjAAAYAYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag7A7QgYgZAAgiQAAghAYgaQAagYAhAAQAjAAAYAYQAZAaAAAhQAAAigZAZQgYAZgjAAQghAAgagZg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.9,17);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAYIhcBNIBOhcIh4gJIB4gJIhOhbIBcBMIAJh3IAKB3IBchMIhOBbIB4AJIh4AJIBOBcIhchNIgKB4g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-14.4,29,28.9);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(1,1,1,0.01)").s().p("Ai8CpQhOhGAAhjQAAhiBOhHQBPhGBtAAQBuAABOBGQBPBHAABiQAABjhPBGQhOBHhuAAQhtAAhPhHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.7,-23.9,53.5,48);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#836930").s().p("AgXAJIgFgHQAAgNAIgJQANgOAdAKIAEAHQAEAFgBANIgEASIgJAEIgQAGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("ApGFEQgbhGAAhQQAAjMCziTQCziSD7AAQD8AACzCSQCzCTAADMQAABQgaBGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-32.4,122,65);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(3,1,1).p("ABsgZQAuALAAAOQAAAPguAKQgtALg/AAQg+AAgugLQgtgKAAgPQAAgOAtgLQAugKA+AAQA/AAAtAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.302)").s().p("AhsAZQgtgKAAgPQAAgOAtgLQAugKA+AAQA/AAAtAKQAuALAAAOQAAAPguAKQgtALg/AAQg+AAgugLg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-3.6,30.9,7.4);


(lib.shape10 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("AgWAAIgFgGIAFgqIAYADQAWAeAEAdQABARgDASQgZgEgXgtg");
	this.shape.setTransform(24.5,5.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#803941").ss(2,1,1).p("AAaAcQgagEgZgz");
	this.shape_1.setTransform(24.5,8.5);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(35.3,0.2);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#803941").ss(1,1,1).p("AA1AAQAAAWgQAPQgPAQgWAAQgUAAgQgQQgPgPAAgWQAAgUAPgQQAQgQAUAAQAWAAAPAQQAQAQAAAUg");
	this.shape_3.setTransform(34.8,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgQAVAAQAVAAAQAQQAPAQABAUQgBAWgPAPQgQAQgVAAQgVAAgPgQg");
	this.shape_4.setTransform(34.8,-1.1);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#803941").ss(2,1,1).p("AAYA/QAOhBg/g8");
	this.shape_5.setTransform(24.7,5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.7,-6.4,18.4,17.8);


(lib.shape9 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#803941").ss(1,1,1).p("AAIgUIgPAp");
	this.shape.setTransform(30.5,9.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#803941").ss(1,1,1).p("AAQAoQAMgEAJgKQAQgQAAgUQAAgWgQgPQgPgQgWAAIgDAAAACg4IAFAPQAFAUgEAXIAAAKIAAAHIgCAWIAAABIgGAAQgUAAgQgQQgPgQAAgUQAAgWAPgPQAMgMAPgDIABAAIAFgBAAGAqIAFgBIAFgBAAABAIAGgWAAGApIAFAA");
	this.shape_1.setTransform(34.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD9ECE").s().p("AgPAfIABgHIAAgKQAEgWgGgUIgEgPIgHgHIAEgBQAWAAAOAQQAPAQAAAUQAAAWgPAPQgKAKgKAEQgIgFAAgQg");
	this.shape_2.setTransform(37.2,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHAaIgBAAIgBAAQgIgBgIgHQgIgIAAgKQAAgLAIgJQAHgHAVABQAFAUgEAXIAAAKg");
	this.shape_3.setTransform(33.8,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYA0IACgWQAAAQAIAFIgFAAIgFABIAFgBIgFABgAASA0QgUAAgQgPQgPgPAAgWQAAgUAPgQQAMgMANgDIABAAIAGgBIAGAHIAFAQQgWgBgGAGQgIAJAAAMQAAAJAIAJQAGAGAKABIABAAIABAAIALABIAAAHIgCAWIAAAAgAAdAzg");
	this.shape_4.setTransform(33,-1.1);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#803941").ss(1,1,1).p("AArAuQhGADgOhe");
	this.shape_5.setTransform(26.4,3.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(22.1,-6.4,18,18.5);


(lib.shape8 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E4752").ss(2,1,1).p("AGEknIASARQAWAWAFAgIAEAeIADAxIgBAdQgDAvgMArQgLApgUAnQgWAogeAlIgeAhIAAABIgZAWQgkAggoAWQgmAVgpAMIADARIgCABQgxARguAFQgpAFgqgGQgwgGgtgUIgCgBIADgOQgpgNglgWQgngXgkggIgTgSIgkgoQgdglgVgpQgTgngLgoQgKgsgCgvIgBgVIADg5IAEgWQAGgkAagYIANgLQAlgaAtAIQAtAIAaAlQAOAUAEAWQAEATgDAVIgBAFIgDAkIAAAEQABAYAEAVQAFAWAJAUIAYAoIAWAXIAGAGIAmAcIAZANIAEgOIARAHQAVAIAWADIAmABIAsgJIAXgIIACAMIAVgLIAggVIAOgMIAHgIIAOgOQAPgTAKgVQAKgUAFgWQAFgWAAgYIAAgHIgCgfIgBgKQgDgTACgRQAEgYAPgWQAPgUAUgMIAIgEQANgHAQgCQAsgIAmAag");
	this.shape.setTransform(0.2,15.3);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,204,230,0.6)").ss(1,1,1).p("AG1jPQhugZhtArAGXkjQhkgShbBKADSDkIhmjEAAmEtIgVj9AGJApIjChoAFVB2IiniNAEeCuIiMiqAGognIjShCAG3iBIjbgWAmQkpQBhgNBYBHAjYjCQhwgmhrARAgUAvIgZD9AjHhDIjEBkAivgbIiqCKAkjCpICPinAjYDgIBqjCAm2iJIDcgRAjVhtIjUA/");
	this.shape_1.setTransform(0.2,16.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9E4752").ss(1.5,1,1).p("ACKBwQiTA0iAg5IA8jzQBMAnBZgkg");
	this.shape_2.setTransform(-0.1,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FD3599","#FEBCDE"],[0,1],0.1,-19.1,0,0.1,-19.1,37.7).s().p("AiJBrIA8jzQBMAnBZgkIAyD1QhHAZhDAAQhGAAhDgeg");
	this.shape_3.setTransform(-0.1,33.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FD3599","#FEBCDE"],[0,1],0.5,-11.5,0,0.5,-11.5,51.7).s().p("Ak1CwQiCiBAAi0QAAgpAHgmQAIgtAlgaQAlgaAtAHQAtAIAaAlQAaAmgHAsIgDAqQAABbBAA+QBABBBaAAQBaAABBhAIABgBQA/g+ABhbQAAgWgEgUQgIgsAagmQAbglAsgIQAugHAkAaQAmAaAIAtQAGAmAAApQABC0iBCBIAAAAQiBCBi2AAQi1AAiAiBg");
	this.shape_4.setTransform(0.2,14.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.7,-16.2,88,63.3);


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
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape46("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape43("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  this.frame_0 = function(){this.stop()}
	// timeline functions:
	this.frame_1 = function() {
		playSound("sound44");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
    //_parent._parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    this.parent.parent.GameWon = true;
    this.parent.parent.shovel.visible = false;
    this.parent.parent.cursor = ""; //Mouse.show();
    this.parent.parent.removeAllEventListeners("tick"); //onEnterFrame;
    this.parent.parent.bg.removeAllEventListeners("mousedown");  //onPress;
} // end if	
	}
	this.frame_8 = function() {
		playSound("sound48");
    this.parent.losingPoints = true;
    var damp = 7.000000E-001;
    var self = this;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite5Puff(); //attachMovie("Puff", "puff" + i, i);
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
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.step/100;
        if (evt.currentTarget.scaleX <= 0)
        {
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget;
        } // end if
    });
    } // end of fo		
		
	}
  this.frame_14 = function(){
   this.parent.losingPoints = false;
   this.parent.gotoAndStop(this.parent.currentFrame - 1);  // prevFrame(); 
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite45();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape47("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
   this.score =  function ()
   {
    this.gotoAndStop(this.currentFrame + 1); //nextFrame ();
    this["star" + this.currentFrame].gotoAndPlay("point");
   } // End of the function
   this.lose  = function ()
   {
    if (this.currentFrame > 0)
    {
        this["star" + this.currentFrame].gotoAndPlay("loss");
    } // end if
   } // End of the function
   this.stop ();
   this.gameWin = false;
   this.losingPoints = false;  
  }
  this.frame6 = function(){
   this.gameWin = true;
  }
	// Layer 5
	this.star5 = new lib.sprite41();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite41();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite41();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite41();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite41();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound33");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6));

	// Layer 1
	this.instance = new lib.shape32("synched",0);

	this.instance_1 = new lib.shape34("synched",0);

	this.instance_2 = new lib.shape35("synched",0);

	this.instance_3 = new lib.shape36("synched",0);

	this.instance_4 = new lib.shape37("synched",0);

	this.instance_5 = new lib.shape38("synched",0);

	this.instance_6 = new lib.shape39("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-0.1,51.1,89.3);


(lib.sprite29 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape30("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.3,-136.7,414.7,239.1);


(lib.sprite26Coin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape27("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.9,17);


(lib.sprite24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape25("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-14.4,29,28.9);


(lib.sprite22Bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame50 = function(){this.parent.removeChild(this)}
	// Layer 4
	this.instance = new lib.sprite24();
	this.instance.setTransform(-11.2,-2.4,0.534,0.534,-130);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-123.4,alpha:0.023},0).to({scaleX:0.58,scaleY:0.58,rotation:-116.9,alpha:0.047},1).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-110.3,y:-2.2,alpha:0.074},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-103.8,y:-2.3,alpha:0.102},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-97.3,alpha:0.125},0).to({scaleX:0.7,scaleY:0.7,rotation:-84.4,alpha:0.172},2).to({scaleX:0.74,scaleY:0.74,rotation:-71.4,alpha:0.223},2).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-65,alpha:0.25},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-58.4,alpha:0.273},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-51.9,alpha:0.301},0).to({scaleX:0.88,scaleY:0.88,rotation:-32.4,alpha:0.371},3).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-25.8,y:-2.2,alpha:0.398},0).to({scaleX:0.93,scaleY:0.93,rotation:-19.3,alpha:0.422},1).to({scaleX:0.98,scaleY:0.98,rotation:-6.3,alpha:0.473},2).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:-2.3,alpha:0.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:7.3,alpha:0.473},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:14.6,alpha:0.445},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:22,alpha:0.418},0).to({scaleX:0.9,scaleY:0.9,rotation:36.7,alpha:0.359},2).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:44.1,alpha:0.332},0).to({scaleX:0.78,scaleY:0.78,rotation:80.9,alpha:0.195},5).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:88.2,alpha:0.168},0).to({scaleX:0.74,scaleY:0.74,rotation:95.5,alpha:0.137},1).to({scaleX:0.66,scaleY:0.66,rotation:124.8,alpha:0.027},4).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:132.1,alpha:0},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite24();
	this.instance_1.setTransform(2.8,10.3,0.586,0.586,-92.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-86.3,x:2.7,y:10.2,alpha:0.066},0).to({scaleX:0.72,scaleY:0.72,rotation:-61.6,alpha:0.332},4).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-55.4,y:10.3,alpha:0.398},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-49.2,x:2.8,alpha:0.465},0).to({scaleX:0.83,scaleY:0.83,rotation:-36.8,alpha:0.598},2).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-30.6,alpha:0.668},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-24.4,x:2.7,alpha:0.734},0).to({scaleX:0.96,scaleY:0.96,rotation:-0.3,alpha:0.895},4).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:5.6,alpha:0.938},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:11.3,x:2.8,alpha:0.875},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:17,x:2.7,alpha:0.813},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:22.8,x:2.8,y:10.2,alpha:0.75},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:28.6,x:2.7,y:10.3,alpha:0.688},0).to({scaleX:0.73,scaleY:0.73,rotation:57.2,alpha:0.375},5).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:62.9,x:2.8,y:10.2,alpha:0.313},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:68.5,y:10.3,alpha:0.25},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:74.2,y:10.2,alpha:0.188},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:80,y:10.3,alpha:0.125},0).to({scaleX:0.6,scaleY:0.6,rotation:85.6,alpha:0.063},1).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:91.3,alpha:0},0).to({_off:true},1).wait(13));

	// Layer 2
	this.instance_2 = new lib.sprite24();
	this.instance_2.setTransform(10.3,-4.4,0.706,0.706,-135.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-125.9,alpha:0.035},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-116.1,x:10.2,alpha:0.07},0).to({scaleX:0.89,scaleY:0.89,rotation:-48.3,alpha:0.316},7).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-38.6,x:10.3,alpha:0.355},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-28.9,alpha:0.395},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-19.1,alpha:0.43},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-9.4,x:10.2,alpha:0.465},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:10.3,alpha:0.5},0).to({scaleX:0.94,scaleY:0.94,rotation:16.2,alpha:0.43},2).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:24.3,alpha:0.395},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:32.6,x:10.2,alpha:0.355},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:40.6,x:10.3,alpha:0.32},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:48.9,alpha:0.285},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:57.1,x:10.2,alpha:0.25},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:65.2,x:10.3,alpha:0.215},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:73.4,x:10.2,y:-4.4,alpha:0.18},0).to({scaleX:0.65,scaleY:0.65,rotation:89.7,alpha:0.105},2).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:97.8,x:10.3,y:-4.3,alpha:0.07},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:105.8,alpha:0.035},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:114.1,alpha:0},0).to({_off:true},1).wait(21));

	// Layer 1
	this.instance_3 = new lib.shape23("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(50));
  this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame50).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-23.9,53.5,48);


(lib.sprite17Dirt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,6,6);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape16("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-32.4,122,65);


(lib.sprite12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape13("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-3.6,30.9,7.4);


(lib.sprite7Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 3
	this.instance = new lib.shape10("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.shape9("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.shape8("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(2));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(2));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-16.2,88,63.3);


(lib.sprite5Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite11Worm = function() {
	this.initialize();

	// Layer 6
	this.hit = new lib.sprite15();
	this.hit.setTransform(0,2.9);
	this.hit.alpha = 0;

	// Mask Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAAaA7GQgYgFgJgHIjHAAQgMAHgYAFQgtALhAAAQhAAAgtgLQgYgFgLgHMgxGAAAMAAAh2KMAv9AAAIOqAAMAzEAAAMAAAB2KMgzEAAAIhaAAQgMAHgYAFQgtALhAAAQg/AAgugLg");
	mask.setTransform(11,-376.2);

	// Masked Layer 4 - 3
	this.body = new lib.sprite7Body();
	this.body.setTransform(0,20.5,0.994,0.994);

	this.body.mask = mask;

	// Layer 2
	this.hole1 = new lib.sprite12();
	this.hole1.setTransform(24.5,-0.5);
  this.hole1.name = "hole1";
	// Layer 1
	this.hole2 = new lib.sprite12();
	this.hole2.setTransform(-24.2,-0.5);
	this.hole2.name = "hole2";
  this.pluck = function (evt)
  {
    angle = angle + (180 - angle) / 4;
    self.body.rotation = angle;
    self.hole1.removeAllEventListeners();
    self.hole2.removeAllEventListeners();
    self.hole1.on("tick", shrinkHole);
    self.hole2.on("tick", shrinkHole);
    velY = velY + self.parent.gravity;
    self.body.y = self.body.y + velY;
    self.body.x = self.body.x + velX;
    if (velY > 0)
    {
        self.parent.removeChild(self);
        evt.remove();
        delete self;
    } // end if
  } // End of the function
  function dig(evt)
  {
    angle = angle + self.parent.turn;
    self.body.rotation = angle;
    if (!(angle > 120 && angle < 360))
    {
        self.hole1.on("tick",  shrinkHole);
    }
    else
    {
        self.hole1.on("tick",  growHole);
    } // end else if
    if (!(angle < 240 && angle > 0))
    {
        self.hole2.on("tick",  shrinkHole);
    }
    else
    {
        self.hole2.on("tick",  growHole);
    } // end else if
    if (angle < 0)
    {
        self.body.visible = false; 
        self.body.removeAllEventListeners("tick"); //onEnterFrame;
    } // end if
    velX = (angle - 180) / 18;
   } // End of the function
   var self = this;
   var angle = 360;
   var velY = -40;
   var velX = 0;
   this.hole1.visible = this.hole2.visible = false;
   this.body.on("tick",  dig);
   function growHole(evt)
   {
    evt.currentTarget.visible = true;
    if (evt.currentTarget.scaleX >= 0.98)
    {
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = 1;
        evt.remove();
    }
    else
    {
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY + (1 - evt.currentTarget.scaleX) / 2;
    } // end else if
   };
   function shrinkHole(evt)
   {
    if (evt.currentTarget.scaleX <= 0.02)
    {
        evt.currentTarget.visible = false;
        if (evt.currentTarget.name == "hole2" && angle < 0 && !_root.GameWon)
        {
            _root.starPoints.lose();
            _root.removeChild(self); 
            evt.remove();
        } // end if
    }
    else
    {
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - evt.currentTarget.scaleX / 2;
        
    } // end else if
   };

	this.addChild(this.hole2,this.hole1,this.body,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-29.5,122,96.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;