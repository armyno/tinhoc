(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.VineTime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{lose:2});
   _root = this;
	// timeline functions:
	this.frame_0 = function(){
    //loadMovie("/flash/GameController.swf", "GameEndClip");
    this.GameWon = false;
	}
	this.frame_1 = function(){
	  this.stop()
	}
	this.frame_2 = function() {
		playSound("sound79");
	}
  this.frame_11 = function(){
    this.gotoAndStop(1);
    this.camera.init()
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(9).call(this.frame_11));

	// Layer 6
	this.starPoints = new lib.sprite69();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(12));

	// Layer 5
	this.instance = new lib.sprite67();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(12));

	// Layer 4
	this.instance_1 = new lib.shape66("synched",0);
	this.instance_1.setTransform(437,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(12));

	// Layer 3
	this.counting = new lib.sprite63();
	this.counting.setTransform(-206.9,56.5);

	this.timeline.addTween(cjs.Tween.get(this.counting).to({_off:true},11).wait(1));

	// Layer 2
	this.camera = new lib.sprite14();

	this.timeline.addTween(cjs.Tween.get(this.camera).to({_off:true},11).wait(1));

	// Layer 1
	this.instance_2 = new lib.shape13("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(12));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.9,-1.5,2614.6,744);


// symbols:
(lib.image65 = function() {
	this.initialize(img.image65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite78 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite35 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite26 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape76 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape75 = function() {
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


(lib.shape72 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape66 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image65(); 
	this.shape.setTransform(-45, -7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape62 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("ACZgYIgIgTIhZhTQgbgRgYAOQgWAOAZANQAcAOASAlIgqAMQg9AAg2gcQgigIABAfQACAgAfAHQAxARAwAAIgEAXIh+gEQgmABAMAeQALAeAcgEIA4AFIgbABQgGAOASAOQATAOAWAAIBXgBIAtgJQAkgGAVgdQANgTAEgVIAAgEAABBVIgNACIAMgDAhDBdIAEAAIAFgBIArgFIADAA");
	this.shape.setTransform(-3.1,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhSB6QgSgOAGgOIAbgBIg4gFQgcAEgLgeQgMgeAmgBIB+AEIAEgXQgwAAgxgRQgfgHgCggQgBgfAiAIQA2AcA9AAIAqgMQgSglgcgOQgZgNAWgOQAYgOAbARIBZBTIAIATIACALIAJAlIABAXIAAAEQgEAVgNATQgVAdgkAGIgtAJIhXABQgWAAgTgOgAg6BcIgFABIgEAAIAEAAIAFgBIArgFIADAAIgDAAgAgMBXIANgCIgBgBg");
	this.shape_1.setTransform(-3.1,-2.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-16.3,33.2,27.4);


(lib.shape61 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("ABqgxIgJgTIgZgnQgFgHgggJQhJASAFAYQADASAWgFIAMgEAgIhEIgaAIIgzAAQgqAVAeAnIAsAAIABAJIg1AEQgjAuA1AYIAugUIAEAGIgXANQgQAoA3ACIAZgLQALgEAhgHQAkgHAVgeQAMgTADgVIAAgD");
	this.shape.setTransform(1,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Ag8BSIAXgNIgEgGIguAUQg1gYAjguIA1gEIgBgJIgsAAQgegnAqgVIAzAAIAagIIAMgEIgMAEQgWAFgDgSQgFgYBJgSQAgAJAFAHIAZAnIAJATIADAKIAJAnIACAWIAAADQgDAVgMATQgVAegkAHQghAHgLAEIgZALQg3gCAQgog");
	this.shape_1.setTransform(1,0.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-11.8,24.2,24.9);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("ACdggIgIgTIgZgpQgJgPgOgDQgDAAgHgIIgHgKIACgcQAAgVgMgCQgMgBgMAHIgSAQQgGAJACAMIACARQACALAHAIIAMAcQAEAKADACIgqANIiNgJQgmAFAFAfQAFAdAbgEIB8gCIgEAYIiJANQgdADAEAiQADAiAdgGICMgdIANAQIhnAeQgTALAIAbQAHAbAfgJIBtgzIAtgKQAkgGAVgdQANgTAEgUIAAgE");
	this.shape.setTransform(-3.5,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhhCgQgIgbATgLIBngeIgNgQIiMAdQgdAGgDgiQgEgiAdgDICJgNIAEgYIh8ACQgbAEgFgdQgFgfAmgFICNAJIAqgNQgDgCgEgKIgMgcQgHgIgCgLIgCgRQgCgMAGgJIASgQQAMgHAMABQAMACAAAVIgCAcIAHAKQAHAIADAAQAOADAJAPIAZApIAIATIACAKIAJAmIABAXIAAAEQgEAUgNATQgVAdgkAGIgtAKIhtAzQgIACgGAAQgSAAgGgUg");
	this.shape_1.setTransform(-3.5,-1.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.6,-19.8,34,36.1);


(lib.shape58 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("AgLAkQgPAAgIgLQgIgKAFgPQAFgNAPgLQAPgLAOAAQAPAAAIAKQAIALgFAOQgFAOgPALQgOALgPAAg");
	this.shape.setTransform(-11.3,-29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38902").s().p("AgiAaQgIgLAFgPQAFgMAPgMQAPgLAOAAQAPAAAIALQAIAKgFAOQgFAOgPALQgOALgPAAQgPAAgIgKg");
	this.shape_1.setTransform(-11.3,-29.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("AgjgJQAJgNARgGIAfgCQAPAFAEANQAEAMgJAKQgJAOgRAGIgfABQgPgFgEgMQgEgMAJgLg");
	this.shape_2.setTransform(17.4,-30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AgoAOQgEgMAJgLQAJgNARgGIAfgCQAPAFAEANQAEAMgJAKQgJAOgRAGIgfABQgPgFgEgMg");
	this.shape_3.setTransform(17.4,-30.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-33.5,37.1,7.3);


(lib.shape57 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("AhLBnIBagGQAjgJAagRQAbgSAPgPQAcgbADgXQADgWgFgbQgGgdgMgHQgagQgjAiIgLAKQgkAhgbAKIgJADQgdAJgegBIgKAAIhCgJAhLBnIgogEAhUgPQASA5gJA9");
	this.shape.setTransform(1.4,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1gPIALAAQAdABAegJIAIgDQAdgKAjghIALgKQAigiAaAQQAMAHAGAdQAGAbgDAWQgDAXgdAbQgPAPgaASQgaARghAJIhcAGQAJg9gTg5g");
	this.shape_1.setTransform(4.6,12.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("Aizi8IABgBQBKhNBnAAQBmAABJBNQBJBNAIBxQAFBSgmA/Aizi8QhIBNgDBvQgDBxBIBNQBIBOBxgBQBvgCBMhLQAVgVAOgX");
	this.shape_2.setTransform(0.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AioCXQhJhNAEhwQADhwBIhNQgpBAgCBUQgDBvBIBNQBIBOBvgBQBxgCBMhLIADgCQgPAXgVAVQhLBLhxACIgDAAQhtAAhHhNg");
	this.shape_3.setTransform(-1.3,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AipCpQhIhNADhvQAChUAphAIABgBQBJhNBoAAQBlAABJBNQBKBNAHBxQAFBSglA/IgDACQhMBLhxACIgDAAQhtAAhHhNg");
	this.shape_4.setTransform(1.9,-0.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.9,51.1,53.5);


(lib.shape56 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("AhLBsIBagGQAjgJAagRQAbgSAPgPQAcgbADgXQADgXgFgfQgGgigMgHQgagQgjAiIgLAKQgkAhgbAKIgJADQgdAJgegBIgKAAIhCgJAhLBsIgogEAhUgUQAUBPgLAx");
	this.shape.setTransform(1.4,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1gUIALAAQAdABAegJIAIgDQAdgKAjghIALgKQAigiAaAQQAMAHAGAiQAGAfgDAXQgDAXgdAbQgPAPgaASQgaARghAJIhcAGQAKgxgUhPg");
	this.shape_1.setTransform(4.6,12.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("AizjBIABgBQBKhOBnAAQBmAABJBOQBJBPAIB0QAFBUgmA/AizjBQhIBPgDByQgDBzBIBPQBIBPBxgBQBvgBBMhNQAVgVAOgZ");
	this.shape_2.setTransform(0.2,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AioCbQhJhQAEhxQADh0BIhOQgpBBgCBWQgDBxBIBQQBIBPBvgBQBxgCBMhMIADgDQgPAYgVAWQhLBMhxACIgDAAQhtAAhHhOg");
	this.shape_3.setTransform(-1.3,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AipCtQhIhQADhxQAChWAphBIABgBQBJhOBoAAQBlAABJBOQBKBOAHB0QAFBUglBAIgDADQhMBMhxACIgDAAQhtAAhHhOg");
	this.shape_4.setTransform(1.9,0.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.8,51.1,54.6);


(lib.shape55 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1,1,1).p("AhMgNQBXgPBCAu");
	this.shape.setTransform(3.3,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#603604").ss(1.5,1,1).p("AhKgaQAIgcASgWQAbggAfAAQAhAAAUAgQAVAggEAsIgBAFQgFAqgZAeQgbAgggAAQghAAgUggQgUggAEgtg");
	this.shape_1.setTransform(3.1,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Ag/BNQgUggAEgtIAFgaQAWgDAUAAIAAAAIAAAAQA6AAAwAeIABAAIABABIABABIACACIgCgCIgBgBIgBgBIgBAAQgwgeg6AAIAAAAIAAAAQgUAAgWADQAIgcASgWQAbggAfAAQAhAAAUAgQAVAggEAsIgBAFQgFAqgZAeQgbAgggAAQghAAgUggg");
	this.shape_2.setTransform(3.1,-8.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#603604").ss(1,1,1).p("ABLAOQhYgtg9Af");
	this.shape_3.setTransform(-7.9,-10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#603604").ss(1.5,1,1).p("AhJgNQAHgiAVgZQAZgfAdAAQAgAAATAfQAUAfgEApIAAABQgFAqgZAeQgZAfgeAAQgfAAgTgfQgUgeAEgrg");
	this.shape_4.setTransform(-8,-9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("Ag7BJQgUgfAEgqIACgNIADgBQAXgLAbAAIAAAAIABAAQAnAAAzAZIACAAIABAAIACABIgCgBIgBAAIgCAAQgzgZgnAAIgBAAIAAAAQgbAAgXALIgDABQAHgiAVgZQAZgeAdgBQAgABATAeQAUAegEAqIAAABQgFAqgZAeQgZAfgegBQgfABgTgfg");
	this.shape_5.setTransform(-8,-9.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.7,-19.8,27,21.9);


(lib.shape54 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("AhLBsIBagGQAjgJAagRQAbgSAPgPQAcgbADgXQADgXgFgfQgGgigMgHQgagQgjAiIgLAKQgkAhgbAKIgJADQgdAJgegBIgKAAIhCgJAhLBsIgogEAhUgUQAUBPgLAx");
	this.shape.setTransform(1.4,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1gUIALAAQAdABAegJIAIgDQAdgKAjghIALgKQAigiAaAQQAMAHAGAiQAGAfgDAXQgDAXgdAbQgPAPgaASQgaARghAJIhcAGQAKgxgUhPg");
	this.shape_1.setTransform(4.6,12.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("AizjBIABgBQBKhOBnAAQBmAABJBOQBJBPAIB0QAFBUgmA/AizjBQhIBPgDByQgDBzBIBPQBIBPBxgBQBvgBBMhNQAVgVAOgZ");
	this.shape_2.setTransform(0.2,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AioCbQhJhQAEhxQADh0BIhOQgpBBgCBWQgDBxBIBQQBIBPBvgBQBxgCBMhMIADgDQgPAYgVAWQhLBMhxACIgDAAQhtAAhHhOg");
	this.shape_3.setTransform(-1.3,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AipCtQhIhQADhxQAChWAphBIABgBQBJhOBoAAQBlAABJBOQBKBOAHB0QAFBUglBAIgDADQhMBMhxACIgDAAQhtAAhHhOg");
	this.shape_4.setTransform(1.9,0.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.8,51.1,54.6);


(lib.shape53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1,1,1).p("Ah1gmQAugNA7ATAgZAYIAqgBQA8ADAyAXACFgWQg3gchEACIgOABAiEAcQAugRA9AR");
	this.shape.setTransform(-2.3,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#603604").ss(1.5,1,1).p("ACEgkQgEgWgLgSQgUgggiAAQghAAgbAgIgBACQgRgfggAAQgfAAgZAfIgPAWQgJARgEAUIgCAOIAAAPQAAAgAQAZQATAeAfAAQAfAAAZgcQgPgZAAgiIAAgEAgNguIgHAUIgFAaIgBAKAB+AjIAHgeIAAgFQACgTgDgRAgFg9IgIAPAgLBJIACAEQASAgAhAAQAhAAAbggQAQgTAIgXAAChKIgHAN");
	this.shape_1.setTransform(-2.2,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgIBNIgCgEQgZAcgfAAQgfAAgTgeQgQgZAAggQAugPA9APIAAACQAAAhAPAYQgPgYAAghIAAgCIAAgEIAqgBQA8ADAyAXQgIAXgQATQgbAgghAAQghAAgSgggAAKg+IgOABIAHgNIABgCQAbggAhAAQAiAAAUAgQALASAEAWQg3gchEACgAh1g0IAPgWQAZgfAfAAQAgAAARAfIgHANIgIAPQg7gTguANgAADhKIAAAAg");
	this.shape_2.setTransform(-2.3,-8.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.7,-19.8,27,21.9);


(lib.shape52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("ABSAFQAbgXAEgTQAFgfgZgJQgZgIghAeIgLAJQghAdgcAMIgJADQgcAJgdADIgKABQARAZgDAsQAugFAmgMQAggLAZgRg");
	this.shape.setTransform(4.2,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#603604").ss(1,1,1).p("AhAgKIAfBBABBgBIg7g1");
	this.shape_1.setTransform(6,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhxALIAKgBQAdgDAcgJIAfBBIgfhBIAJgDQAcgMAhgdIALgJQAhgeAZAIQAZAJgFAfQgEATgbAXIg6gzIA6AzIgoAeQgZARggALQgmAMguAFQADgsgRgZgABSAFg");
	this.shape_2.setTransform(4.2,10);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,2.1,22.9,16);


(lib.shape51 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("AhLBnIBagGQAjgJAagRQAbgSAPgPQAcgbADgXQADgWgFgbQgGgdgMgHQgagQgjAiIgLAKQgkAhgbAKIgJADQgdAJgegBIgKAAIhCgJAhLBnIgogEAhUgPQASA5gJA9");
	this.shape.setTransform(1.4,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1gPIALAAQAdABAegJIAIgDQAdgKAjghIALgKQAigiAaAQQAMAHAGAdQAGAbgDAWQgDAXgdAbQgPAPgaASQgaARghAJIhcAGQAJg9gTg5g");
	this.shape_1.setTransform(4.6,12.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("Aizi8IABgBQBKhNBnAAQBmAABJBNQBJBNAIBxQAFBSgmA/Aizi8QhIBNgDBvQgDBxBIBNQBIBOBxgBQBvgCBMhLQAVgVAOgX");
	this.shape_2.setTransform(0.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AioCXQhJhNAEhwQADhwBIhNQgpBAgCBUQgDBvBIBNQBIBOBvgBQBxgCBMhLIADgCQgPAXgVAVQhLBLhxACIgDAAQhtAAhHhNg");
	this.shape_3.setTransform(-1.3,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AipCpQhIhNADhvQAChUAphAIABgBQBJhNBoAAQBlAABJBNQBKBNAHBxQAFBSglA/IgDACQhMBLhxACIgDAAQhtAAhHhNg");
	this.shape_4.setTransform(1.9,-0.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.9,51.1,53.5);


(lib.shape50 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1,1,1).p("AhMgNQBXgPBCAu");
	this.shape.setTransform(0.3,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#603604").ss(1.5,1,1).p("AhKgaQAIgcASgWQAbggAfAAQAhAAAUAgQAVAggEAsIgBAFQgFAqgZAeQgbAgggAAQghAAgUggQgUggAEgtg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Ag/BNQgUggAEgtIAFgaQAWgDAUAAIAAAAIAAAAQA9AAAxAhIABABIgBgBQgxghg9AAIAAAAIAAAAQgUAAgWADQAIgcASgWQAbggAfAAQAhAAAUAgQAVAggEAsIgBAFQgFAqgZAeQgbAgggAAQghAAgUggg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-10.9,16.2,21.9);


(lib.shape49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVANIgDgNQAAgaAYACQAZADAAAVQgBAIgGAIQgHAJgLAAQgOAAgHgMg");
	this.shape.setTransform(-2.7,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-2.5,5,5.1);


(lib.shape47 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("ABQAAQgFAtgaAgQgbAgggAAQghAAgUggQgUggAEgtQAEgsAbggQAbggAfAAQAhAAAUAgQAVAggEAsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BNQgUggAEgtQAEgsAbggQAbggAfAAQAhAAAUAgQAVAggEAsQgFAtgaAgQgbAgggAAQghAAgUggg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-10.9,16.2,21.9);


(lib.shape45 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AgJBNIgCgEQgZAcgeAAQgfAAgUgeQgUgfAFgpQAEgrAZgeQAagfAfAAQAfAAASAfIABgCQAbggAhAAQAhAAAUAgQAVAggEAsQgFAtgaAgQgbAggiAAQghAAgSggg");
	this.shape.setTransform(-3.7,-6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-16.9,27,21.9);


(lib.shape44 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(1.5,1,1).p("AhUAAIALAAQAdAAAegIIAIgDQAbgKAlghIALgKQAigiAaAQQAaAPgFAoQgEAZgcAZIgpAhQgaASgjAIIhaAGIgogEAB2AXIg8hNAhUAAIhBgJAhUAAIAKBYAgOgIIAeBa");
	this.shape.setTransform(1.3,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1AAIALAAQAdAAAegIIAIgDQAdgKAjghIALgKQAigiAaAQQAaAPgFAoQgEAZgcAZIg8hNIA8BNIgpAhQgaASghAIIgghaIAgBaIhcAGgABVAXg");
	this.shape_1.setTransform(4.6,10.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("Aizi0IABgBQBKhJBnAAQBmAABJBJQBJBKAIBsQAFBOgmA8QgOAWgVAUQhMBIhvABQhxABhIhKQhIhKADhrQADhqBIhKg");
	this.shape_2.setTransform(0.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AioCQQhJhKAEhqQADhrBIhKQgpA9gCBQQgDBqBIBKQBIBKBvgBQBxgBBMhIIADgCQgPAWgVAUQhLBIhxABIgDABQhtAAhHhKg");
	this.shape_3.setTransform(-1.3,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AipChQhIhKADhqQAChQApg9IABgBQBJhJBoAAQBlAABJBJQBKBKAHBsQAFBOglA8IgDACQhMBIhxABIgDABQhtAAhHhKg");
	this.shape_4.setTransform(1.9,-1.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.9,51.1,51);


(lib.shape42 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("AAgg6Qg2AagJBb");
	this.shape.setTransform(11.8,-26.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#603604").ss(2,1,1).p("AAJgxQgeAmAVA+");
	this.shape_1.setTransform(-16.6,-24);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#603604").ss(2,1,1).p("AAAgjQgOAFgKAOQgLAOAAANQAAAPAKAIQALAHAOgFQAOgFALgOQAKgOABgNQgBgPgKgIQgLgHgOAFg");
	this.shape_2.setTransform(35.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38902").s().p("AgZAiQgKgIAAgPQAAgNALgOQAKgOAOgFQAOgFALAHQAKAIABAPQgBANgKAOQgLAOgOAFQgFACgFAAQgIAAgHgEg");
	this.shape_3.setTransform(35.4,8.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#603604").ss(2,1,1).p("ABZgEQhGArhrg1");
	this.shape_4.setTransform(25.3,12.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-32.7,56.7,46.5);


(lib.shape39 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8B7441").ss(2,1,1).p("AivgJQCsAoCzgo");
	this.shape.setTransform(0.6,59.3);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8B7441").ss(2,1,1).p("AiigDQCdALCogG");
	this.shape_1.setTransform(-5,52.7);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8B7441").ss(2,1,1).p("AhdBrQCmglAViw");
	this.shape_2.setTransform(8.8,58.3);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8B7441").ss(2,1,1).p("AAzBrQhkgjgBiy");
	this.shape_3.setTransform(-5.5,58);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8B7441").ss(2,1,1).p("AgTBrQAuhYgJh9");
	this.shape_4.setTransform(1.8,57.8);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#443920").ss(2,1,1).p("AC/BUIABAAQAmgnATg2QASg3AChOInWAAIhDAAQACCWBMBMQAkAkA0ANQAmAKBAAAQBBAAAngKQAzgNAkgkg");
	this.shape_5.setTransform(0,56.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B7441").s().p("Ag/CFQgzgNgkgkQhMhMgDiWIBEAAQALB5BBA/QAkAkAxANQAmAKBCAAQBBAAAngKIAWgHQgkAkgzANQgnAKhBAAQhAAAgmgKg");
	this.shape_6.setTransform(-3.8,56.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B19654").s().p("AhHBwQgzgNgkgkQhBg/gLh5IHVAAQgCBOgSA1QgTA4gmAnIgBAAIgWAHQgnAKhBAAQhAAAgmgKg");
	this.shape_7.setTransform(3.4,54.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,42.3,53.9,28.8);


(lib.shape38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("AhLAhIAFgdQAIgsATgeQATgfAZgDQAagEAYAhQAWAgAEArIABAjQgCAYgGAWQgFATgOgDQgQgDgIgaQgHAlgUAAQgVAAgHgnQgIAfgTgBQgSAAgCgUQgDgQACgQg");
	this.shape.setTransform(-0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38902").s().p("AhMBEIAFgdQAIgsATgeQATgfAZgDQAagEAYAhQAWAgAEAqIABAkQhCgVhXATg");
	this.shape_1.setTransform(0,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgcABQgIAfgTgBQgSAAgCgUQgDgOACgQIABgLQBXgTBCAVQgCAYgGAUQgFATgOgDQgQgDgIgaQgHAlgUAAQgVAAgHgng");
	this.shape_2.setTransform(-0.1,6.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-10.8,15.7,21.2);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#443920").ss(2,1,1).p("AD8CrQAKjkhFhFQhEhKh8AGQh5AGhCBIQhDBDABDgQAAAJAGAGQAGAFAIAAQAIAAAGgGQAGgGAAgIQgBjKA4g+QA5g8BngFQBogFA5A9QA5A/gJDNQAAAIAGAGQAFAGAJAAQAIABAGgGQAGgGAAgIg");
	this.shape.setTransform(-0.1,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B7441").s().p("Aj2C+QgGgGAAgJQgBjgBDhDQBChIB5gGQB8gGBEBKQBFBFgKDkQAAAIgGAGQgGAGgIgBQgJAAgFgGQgGgGAAgIQAJjNg5g/Qg5g9hoAFQhnAFg5A8Qg4A+ABDKQAAAIgGAGQgGAGgIAAQgIAAgGgFg");
	this.shape_1.setTransform(-0.1,28.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,8.9,50.8,39.2);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("ACdgmIgEgMQgMgggfgPQgegNgIgHIhVgYQglAAgJAGQgKAGgBAOIgsABQgbAEgMAVQgLAUAbAZQBGghA+AlIgCAWQg2gVg7AUQgNABgOAbQgPAeAvAPQA2gfA6AKIAiAWQgGATglAKQgnAJADAeQADAeBHgRQAygcAHgGIAhgfIAMgQIAFgJIAQgeAhIh0IACABIAMABIAMABIBFAa");
	this.shape.setTransform(-5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgxB7QgDgeAngJQAlgKAGgTIgigWQg6gKg2AfQgvgPAPgeQAOgbANgBQA7gUA2AVIACgWQg+glhGAhQgbgZALgUQAMgVAbgEIAsgBQABgOAKgGQAJgGAlAAIBVAYQAIAHAeANQAfAPAMAgIAEAMQADAMgBANIgBADIAAADIgEANIgDAGIgCAEIgQAeIgFAJIgMAQIghAfQgHAGgyAcQgZAGgRAAQgeAAgCgTgAg7hyIAMABIBFAaIhFgaIgMgBIgMgBg");
	this.shape_1.setTransform(-4.9,0.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.8,-13.4,31.7,28.5);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("AgshYQAIgnAuAMQArATAUAMQAdARAIAdIAFAZABgAxIgKAQIgFAIIgNAPQgKAYgYAGQgDADghgDQgkgCgMgUQgMgVAIgNQAGgKAMAEQAEABAFACIALAIAhbghQAegGAaAaAgshYQAeAFAGAPAhbghIABgUQABgjAtAAAgkA4Ig1gXQgxggAvgi");
	this.shape.setTransform(0.2,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgCB2QgkgCgMgUQgMgVAIgNQAGgKAMAEIAJADIALAIIgLgIIgJgDIg1gXQgxghAvghIALgBIAAAAIAAAAQAWAAASAQIACACIABAAIABACIABABIgBgBIgBgCIgBAAIgCgCQgSgQgWAAIAAAAIAAAAIgLABIABgUQABgjAtAAQAeAFAGAPQgGgPgegFQAIgnAuAMQArATAUAMQAdARAIAdIAFAZIgBASIAAACIgBAEIgIAUIgGAMIgDAGIgKAQIgFAIIgNAPQgKAYgYAGQgCABgLAAIgXgBg");
	this.shape_1.setTransform(0.2,-1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-13.3,23.1,23.9);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#603604").ss(2,1,1).p("ACkgtIgEgMQgMgggfgPQgegNgIgHIhVgcIgxgCQgJAGABAMIAXAMIBGAeAg/iIIgugXQgWgFgMAeQgMAeAWAFICFA0IAAAWIiQgbQgNgJgFAgQgFAeAkAIICFARIAkAWIgJALIgTAVQgIAGgCAKIgHAPQgFAKAEAJIAKAUQAJAJALACQAMABAFgSIAGgaQABgDAHgFQAIgFAEAAQANABAMgLIAhgfIAMgQIAFgJIAQgeAgoh8IgXgLIAAgB");
	this.shape.setTransform(-5.7,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAVChQgMgCgIgJIgLgUQgEgJAFgKIAHgPQADgKAIgGIASgVIAJgLIgjgWIiGgRQgjgIAFgeQAEggANAJICQAbIACgWIiGg0QgXgFAMgeQAMgeAXAFIAuAXIAWAMIBGAeIhGgeIgWgMQgCgMAKgGIAwACIBVAcQAJAHAdANQAgAPAMAgIADAMQADAMgBANIAAADIgBADIgEAOIgDAFIgBAEIgQAeIgGAJIgMAQIggAfQgNALgNgBQgDAAgIAFQgHAFgBADIgGAaQgFARgLAAIgBAAgAhAiHIAWALIgWgLIAAgBIAAABg");
	this.shape_1.setTransform(-5.6,1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-14.6,33,32.3);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0)").s().p("Ai/C/QhPhQAAhvQAAhvBPhQQBQhPBvAAQBuAABRBPQBQBQAABvQAABvhQBQQhRBQhuAAQhvAAhQhQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.1,-27,54.3,54.3);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("EhrKAauQgjgjABgvMAAAgmhQAfAQAwAAQBdAAAqgjIAQgRMAAAAnFQAAAvggAiIgDACQgiAgguAAQgwAAghghgEithAYPQgjgjABgvMAAAgqJQCUAJBSArMAAAApVQAAAvggAiIgDACQgiAgguAAQgwAAghghgAd2XPQgigiAAgvMAAAgkSQAyA3BnAAQAvAAAegQMAAAAjrQAAAuggAiIgCADQgiAggvAAQgvAAgigigEBxMAVoQgigiAAgvIAA4OQmIh/lMjkQijhwiAh6QiaDOjxCzQqNHlueAAQudAAqOnlQlDjwiokgQgFgSgOgRIgIgOIAAgDQAAgwgfgcQgdgZgoAAIgPABIgKgGQg6gegjARQgTAKgLAXIAAgdQiuG+nCFlIAAAAQrOI5v3AAQv4AArQo5QlRkMi2k/QiICei8COIgBAAQlFD2mGB9IAAV6QAAAvggAiIgDACQgiAgguAAQgwAAghghQgjgjABgvIAA09Qk1BFlaAAQurAAqXn1Qjzi2icjSIAAANIgdg3Qg6hig7AOQgjAIgxBlIAAgzQiBHlmWF5IAAAAQpKIhs+AAQs+AApLohQmXl6iAnmQAZALAgAAIA3gKIA3gKIA9AAQB4GEFKEzQIQHoLqgBQLpABIPnoQGrmMBMoUQBGAXBzAAIAjAAIgDAQIAVgPIgBgCQCPgFBeglQCREqFDDzQJfHHNaAAQFcAAEzhLIAAzrIAAgDQAuAsBIAAQBEAAAsgUIAASRQE5hwEJjHIAAAAQDXiiCKi6QhRjWgTjrQB4AYB4AEQAHBBAOA/QAXg/AQhAQBTgHCpiUIAIgGQgcFAinEWQCgFQFcEUQKTIHOkAAQOiAAKToHQIHmcBkokQC1AUEzABQBRHhHiFlQJWG6NNAAQNNAAJWm6QDoitCNjIQg/hNgyhQICNgPQCygZBAgjQApgWAqgtQAogrAOghQglCyhTCjQCACDCtB2IAAABQEPC5E6BxIAAu1IDmAjIAAPYQGKBnHHAAQPPAAKwnXQIrl9Ben+IAOADQBQARAVANIAVAQQAQAMAUAHQAXAJAjAFQh2I7puGqQrqICwgAAQnFAAmMheIAAXNQAAAuggAiIgCADQgiAggvAAQgvAAgigigECrAAQBQgigjAAgvMAAAgnnIA2ABQBfAABRhAMAAAAomQAAAvggAiIgCACQgiAggvAAQgvAAgighg");
	this.shape.setTransform(-324.3,95.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1438.4,-79.1,2228.2,348.8);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai8C4IAAlvIF5AAIAAFvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.4,38,37);


(lib.shape21 = function() {
	this.initialize();

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#316113").ss(2,1,1).p("AHWAmIhBh1IhADwIhPhzQAGBohBA+QgEgBAAgIIgNgwQgNgqgigwIgjguIhFBoIgIgGQgjgogEgyQgFgwgIgpIgIgkIhHCQIgzjZIhlB4IgMigQgtBRhjBCIg5iQ");
	this.shape.setTransform(87.3,203.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49931E").s().p("ADLIIIgNgwQgNgqgigwIgjguIhFBoIgIgGQgjgogEgyQgFgygIgpIgIgkIhHCSIgzjbIhlB4IgMigQgtBRhjBCIg5iQIAAlTIgIAAIAAkoQCQACCPAEIBeAEIBYACICzALQCQAMCMAdIAPAEIAAMvIhBh3IhADyIhPhzQAGBnhBA/QgEgBAAgIg");
	this.shape_1.setTransform(86.9,172.1);

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#316113").ss(2,1,1).p("AHojWIhIgOQAwBtgUBlIh7hsQAEB+hKBwIhIibIhZDpIhKh5QgDBnhIA5QgEgCABgHQAAgIgKgqQgKgqgfg0IgggxIhTBiIgHgGQgjgsAAgyQgBgxgFgqIgGglIhXCKIgijdIhUBP");
	this.shape_2.setTransform(494.3,187.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#49931E").s().p("AhAIbQABgIgLgqQgKgqgegzIghgyIhSBiIgIgGQgjgsAAgyQgBgzgFgpIgFglIhYCLIgijeIhUBOIAAr1IBpAMIBjANIBdAKIC9AbQCVAaCRApQAlAMAlAUQAbAOAVAWQA4A6gDBVQgCA+AIA7IAPCRIADAfIgFANIhHgNQAwBsgTBlIh8hsQAECAhKBxIhJidIhYDrIhKh6QgDBnhHA5QgFgBABgIg");
	this.shape_3.setTransform(494.5,155.7);

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#316113").ss(2,1,1).p("AHNjwIhFgIQA3BogKBnIh+hhQAOB/g7B1IhSiUIhADwIhPhzQAFBng/A/QgEgBAAgIIgNgwQgNgqghgwIgjguIhGBoIgIgGQgkgogFgyQgEgygJgnIgIgkIhGCQIgzjZIhUBk");
	this.shape_4.setTransform(905.2,152.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#49931E").s().p("AgWIGIgNgwQgNgqghgwIgjgvIhGBpIgIgGQgkgogFgyQgEgzgJgpIgIgkIhGCSIgzjaIhUBjIAAr+IAwABIBeAEIBYACIC1ALQCPAMCMAcQAlAJAkAQQAaAMAVAUQA6A1AEBVQAEA9ALA7IAbCRIAFAdIgCANIhFgHQA3BogKBmIh+hgQAOB+g7B3IhSiWIhADyIhPhzQAFBog/A/QgEgBAAgIg");
	this.shape_5.setTransform(905.3,124.5);

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#316113").ss(2,1,1).p("AmDjMQgRA8AGA7ICEhhQgPB/A/B1IBXiUIBEDwIBRhzQgGBoBFA+QAEgBAAgHQABgIANgpQAOgpAjgwIAlgvIBKBpIAIgGQAngoAEgyQAFgxAJgpIAJgkIBECE");
	this.shape_6.setTransform(2258.9,157.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#49931E").s().p("AASFmIhRBzIhEjyIhXCWQg/h3APh/IiEBhQgGg8ARg8IBTAAIAAoTQAUgQAXgKQAmgQAngIQCUgdCXgMIC/gLIBdgCIACAAIAANkIhEiFIgJAkQgJApgFAyQgEAygnAoIgIAGIhKhoIglAuQgjAwgOAqQgNApgBAHQAAAIgEABQhFg/AGhng");
	this.shape_7.setTransform(2258.9,125.5);

	// Layer 8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#264B10").ss(2,1,1).p("AAA2xQgPAAgMAMQgMALAAARMAAAAsTQAAARAMAMQAMALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAg");
	this.shape_8.setTransform(2274.4,277.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8CD25").s().p("AgbWnQgMgMAAgRMAAAgsTQAAgRAMgLQAMgMAPAAQAQAAAMAMQALALAAARMAAAAsTQAAARgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_9.setTransform(2274.4,277.4);

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#316113").ss(2,1,1).p("AnHAgIA+hvIBADwIBPhzQgGBoBBA+QAFgBAAgIIAMgwQANgqAigwQAigvABABIBFBoQAFgCASgoQAUgoAFglQAEgkAIgeIAIgkIBHCQIAzjZIBmB4IALigQAtBRBjBCIAghQ");
	this.shape_10.setTransform(1789,192.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#49931E").s().p("Aj6FqIhPB0IhAjzIg+ByIAAsrIAMgDQCMgcCQgNICzgKIBZgCIBdgEIDPgFIAvgBIAAK7IggBQQhjhCgthSIgLChIhmh4IgzDaIhGiRIgJAkQgIAegEAlQgFAmgTAoQgTAngFADIhFhpQgBgBgiAwQgiAwgNApIgMAxQAAAHgFACQhAg/AFhog");
	this.shape_11.setTransform(1789,160.9);

	// Layer 6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#316113").ss(2,1,1).p("AmLh4QBcgLAOgWIgvCvQBGgKAjgMIA5gWIAGgEIgdCWQB7giAlhTIBEB8IBTinIBMCxQBohCAwhPIAMCeIAqgv");
	this.shape_12.setTransform(1366.3,175.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#49931E").s().p("AFWD7QgwBShoBCIhMizIhTCpIhEh9QglBTh7AiIAdiYIgGAEIg5AYQgjAMhGAKIAvixQgOAWhcALIAAohIBXANQBMAOBPAAQESABETAGIAALlIgqAug");
	this.shape_13.setTransform(1366.3,150.2);

	// Layer 5
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#264B10").ss(2,1,1).p("AdtudQgOAAgKAMQgLANAAARQgBLJoeH1QokH+sHAAQsGAAoln+Qoen1AArJQAAgRgKgNQgLgMgOAAQgOAAgKAMQgLANAAARQgBLyI8IRQI2IOMeAAQMgAAI1oOQI7oRAAryQAAgRgKgNQgLgMgOAAg");
	this.shape_14.setTransform(287.3,256.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8CD25").s().p("A1UGQQo8oSABrxQAAgSALgMQAKgNAOAAQAOAAALANQAKAMAAASQAALIIeH2QIlH+MGAAQMHAAIkn+QIen2ABrIQAAgSALgMQAKgNAOAAQAOAAALANQAKAMAAASQAALxo7ISQo1IOsgAAQseAAo2oOg");
	this.shape_15.setTransform(287.3,256.5);

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#264B10").ss(2,1,1).p("EAh3gNWQgQAAgMAMQgMAMAAAQQgBKRpqHOQpwHWt0AAQtyAApxnWQpqnOgBqRQAAgQgLgMQgMgMgQAAQgRAAgLAMQgMAMAAAQQgBK3KLHoQKFHmOOAAQOQAAKEnmQKMnogBq3QAAgQgMgMQgMgMgQAAg");
	this.shape_16.setTransform(705.5,218.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8CD25").s().p("A4TFxQqLnoABq2QAAgRAMgMQALgLAQgBQAQABAMALQAMAMAAARQABKQJpHOQJxHWNzAAQN0AAJwnWQJqnOABqQQAAgRAMgMQAMgLAQgBQAQABAMALQALAMAAARQABK2qLHoQqEHmuQgBQuOABqFnmg");
	this.shape_17.setTransform(705.5,218.8);

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#264B10").ss(2,1,1).p("EAkRgPCQgNANAAATQgBLuqeISQqmIXu/AAQu+AAqmoXQqeoSgCruQAAgTgMgNQgNgOgRAAQgSAAgMAOQgNANAAATQgBMZLCIuQK9IrPbAAQPdAAK7orQLDougBsZQAAgTgMgNQgNgOgRAAQgSAAgNAOg");
	this.shape_18.setTransform(1123.6,242.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8CD25").s().p("A6YGlQrCouABsZQAAgTANgNQAMgOASAAQARAAANAOQAMANAAATQACLuKeISQKmIXO+AAQO/AAKmoXQKeoSABruQAAgTANgNQANgOASAAQARAAANAOQAMANAAATQABMZrDIuQq7IrvdAAQvbAAq9org");
	this.shape_19.setTransform(1123.6,242.4);

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#264B10").ss(2,1,1).p("EAhYgM/QgQAAgLAMQgMALAAAQQgBJ/phHCQpoHJtnAAQtmAAponJQphnCgBp/QAAgQgLgLQgMgMgQAAQgQAAgLAMQgMALAAAQQgBKkKCHbQJ8HZOBAAQODAAJ7nZQKCnbgBqkQAAgQgLgLQgMgMgQAAg");
	this.shape_20.setTransform(1594,237.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8CD25").s().p("A39FnQqCnbABqkQAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQQABJ/JhHDQJoHINmAAQNnAAJonIQJhnDABp/QAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQQABKkqCHbQp7HZuDAAQuBAAp8nZg");
	this.shape_21.setTransform(1594,237.7);

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#264B10").ss(2,1,1).p("EAmSgNwQgTAAgMAMQgOAMAAARQgBKlq7HdQrCHlvnAAQvmAArDnlQq6ndgBqlQAAgRgNgMQgOgMgSAAQgTAAgMAMQgOAMAAARQgBLMLgH3QLaH1QFAAQQHAALYn1QLhn3gBrMQAAgRgNgMQgOgMgSAAg");
	this.shape_22.setTransform(2000.8,220.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8CD25").s().p("A7fF8Qrgn3ABrMQAAgRAOgMQAMgMATAAQASAAAOAMQANAMAAARQABKlK6HdQLDHlPmAAQPnAALCnlQK7ndABqlQAAgRAOgMQAMgMATAAQASAAAOAMQANAMAAARQABLMrhH3QrYH1wHAAQwFAAran1g");
	this.shape_23.setTransform(2000.8,220.3);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(39.4,71.8,2259.7,351.5);


(lib.shape20 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#264B10").ss(2,1,1).p("AAA2xQgPAAgLAMQgNALAAARMAAAAsTQAAARANAMQALALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAg");
	this.shape.setTransform(69.3,330);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8CD25").s().p("AgbWnQgMgMAAgRMAAAgsTQAAgRAMgLQAMgMAPAAQAQAAAMAMQAMALAAARMAAAAsTQAAARgMAMQgMALgQAAQgPAAgMgLg");
	this.shape_1.setTransform(69.3,330);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49931E").s().p("EBWKASTIgyBgIhRhoQgeBGhhAwIgYiYIhkBlIgRhoIhhA9IguiGIhnAzIg1hfIhfByIgjikQgpBRiNAUIAAiiIiJBUIAGjAIhRAbIgwhJQgZBVh2A5IgzjWIhBBHIhWhuQgPBYhNBNIh2haIgdA6Ihcg0QgKBmhPBmIiTh8IgWCLIhvhYIgyCFIiDhYQAABghHA9IimiXIg0CdIh1hkQAEBlhYAkIhLi8IhUCCIhRjMQgSBWhYAUIhWizIiABhIg1iUQgmBDhWAFIhEizIh/A5IgUiGQgrAyhsAOIAlivIhVA1IASixIh0A/IASiqIh/A8IgOidIhLBGIg7hVIg1BzIhzhiQAPBNgjBOIhohGIhCCRIhLhFQANBkhMBiIhqh4IgtB4IhNhhQAKBWhlBtIh5idIgZBxIhHhDIgfC7IhThMQASBghBBfIg+iDIhICeIg2iHQgOB7haBBIghirQgoBFhKgNIBGioIh+AAIBeicIh3AsIAAiGIiFAuIAKh7Ih4AdIg3iDQgMBGhYBGIhTh7IhKCXIhNhSIgfCbIiJgxIAABpIhwgDQApBVgpBVIhqgsQAEB6hfBuIhWizIh1AdIgHh5QgqA6h3ASIAAjNIh7AfIgVhyQgrBWiCAvIAAjEIiKB3IglhAIhLBgIg8heQhCCphLAxIhOhwIgyA5IhLg2QgLA+hSAxIhkiJQg0BNiPAUIgMjAQgqAxh0ANIA+jEIhwA6IhGiEQgDBBhGBDIhbiHIgtCBIhOgeIALCaIhzgWIgEBRIhTgbIBHCpIilgIQBeBbAGBmIiZgBIgGCuIiphYQAwBvg7B8IiUhWQgMBvhfBlIh2jUIiKBVIAmjLQhNAlhYglIB8jUIikgiIBkhuQgdgEgfgNIADgEIhUABIAmiYIijAAIgxiSQgrBzh0BXIgrjXIhiB/IhJhvIgWB/IhugxIgKBwIhcgQQBQBLAHBYIihgFIA5BYIhwAKQBCBKgJBVIirgZIAEB9IiTg/QAyBIg4BUIiAheIggCIIhfitIhnC8Ig2ixQhSBLiQgJIgpjNQhiAjhkgjIAriLIijAAIAviZQhLAuhkguIAAiOIiqBdIhJh+IhoAwIgvhdQgRBchSBOIiXh5Ig1CtIiYhTIgSCHIiEgqQBiCBgJCAIjIglIAhC+IjChMQBHBugIB6IivgrQAGBlg9BYIiChKIgNCIIidhsIhBDBIiFh5QAHBGhMBeIhciOIgyBgIhQhmQgnBghxBBIAAjEIjMBfIg4isIhnAzIg0heQAQA/hwAyIgjijIihAoIgUhmQglBYhlgCIAGjCIhRAbIgwhJQgnBVhsARIgviuIhBBIIhWhuQgNBjhOBBIh3haIgnBdIhRhWQAOBYiDBZIhfhMIAB6dIAAl1MFz8AAAIgBadIhNAtIgwhCQgcAwhRAhIgHilIhgAjIA4irIhwA4IhGiDIhMBVIhYhYIguCCIhNgfIAKCaIhygVIAhBuIh5g4QBFBNADBbIimgHQBXBZANBnIiYgBQAeBXglBWIiohWQAaB1glB2IiUhYQgiBphkBpIhbjSIhkBkIAAjZQhUAZhHgZIBkj1IiPAAIBjh0Ig4gLIADgGIhfACIAniYIh0AdIgniNIhmAuIgxhaQgJBBhGA1Ig/h4IhAB/IhKhvIAACdIiDhRIAABhIhmAAQBKBGANBdIihgFIA5BYIhwAKQA2BDADBcIisgZIAFB9IiTg/QAYBPgeBNIiAheIggCIIhfitQgVBRhSBrIg2ixQhXA8iMAGIAyjPIiFA8IAKheIAAgsQhSBLhTAGIgOj6IhaA3IgRizIhhAvIgfhsQhDBBhmAcIhLiQIhmBCIhhhTQgMBChKBAIhyhbIg1CsIiYhSIgTCHIiDgpQBTBmAWB2IjYAAQAxBLgQByIjChLIA/DnIiwgqIArBcIhXgqIgKCLIiChMQAFBTg0BfIh7iVIhBDBIiFh6QAEA2hUBbg");
	this.shape_2.setTransform(1178.6,127.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.059)").s().p("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");
	this.shape_3.setTransform(1177.8,638.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.1,-1.5,2421.9,743.8);


(lib.shape19 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B5511").ss(2,1,1).p("EChpADPIh7gCIAmCXIhzgcIgnCNIhmgvIgyBbQgJhChFg1Ig/B5IhBh/IhKBvIAAidIiDBQIAAhgIhmAAQBKhGAOhdIihAEIA4hYIhvgKQA1hDAEhaIisAaIAFh9IiTA+QAXhOgdhOIiABfIghiIIhfCtQgUhShThqIg1CxQhYg8iLgHIAyDQIiFg8IAJBcIAAAsQhShKhSgFIgOD4Ihag3IgRCzIhhgvIgfBsQhDhBhngcIhKCQIhmhDIhiBUQgMhChKhBIhyBcIg1itIiYBTIgSiHIiEApQBUhmAWh2IjZAAQAyhJgQhyIjDBLIBAjoIiwArIAqhcIhWApIgKiKIiDBLQAGhSg1hfIh6CVIhBjBIiGB5QAFg2hUhaIhRB5IgzhgIhQBnQgfhGhhgvIgYCXIhjhkIgRBoIhig9IgtCGIhogzIg0BeIhfhxIgkCkQgphSiMgTIAACiIiKhVIAGDBIhRgbIgvBJQgahVh2g5IgzDWIhAhHIhWBsQgQhXhMhMIh2BaIgeg7IhbA1QgLhmhPhmIiTB7IgViKIhvBYIgyiFIiEBYQABhhhHg8IimCXIg0ieIh1BlQAEhmhZgkIhLC9IhUiCIhQDMQgThWhYgUIhWCzIh/hhIg2CUQglhDhWgGIhECyIiAg5IgUCGQgrgzhsgNIAmCvIhVg2IARCyIh0g/IATCqIiAg8IgNCdIhMhGIg6BUIg2hyIhyBhQAPhNgjhNIhoBGIhDiRIhKBEQANhjhNhjIhqB5Igth5IhNBiQAKhXhkhsIh6CdIgZhxIhIBDIgfi7IhTBMQARhghAhdIg/CBIhHicIg0CEQgPh5hZhBIgiCpQgnhDhLAOIBGCmIh9AAIBPCDAklEaIhVggIAACHIiEgvIAKB8Ih5geIg3CEQgMhGhYhGIhTB6IhKiXIhNBSIgeiaIiKAxIAAhpIhvADQAphVgphVIhrAsQAFh6hfhsIhWCxIh2gdIgHB5Qgqg6h2gTIAADOIh7gfIgWByQgrhWiCgvIAADEIiJh4IglBAIhMhfIg8BeQhBiphMgxIhNBvIgzg4IhLA2QgLg+hRgxIhkCJQg0hOiQgTIgMDAQgpgyh0gMIA+DDIhwg5IhHCEQgChChGhCIhbCHIguiCIhOAfIALiaIhzAVIgDhQIhUAaIBIioIimAHQBfhaAFhkIiYABIgHiuIioBYQAvhwg7h8IiTBXQgMhwhghkIh1DUIiKhWIAlDMQhNglhXAlIB7DSIijAhIAwA1EhMuAD3Ih/gCIAmCYIiiAAIgxCSQgrhzh1hYIgrDYIhiiAIhJBwIgWiAIhtAyIgKhxIhcARQBQhMAHhXIihAFIA4hYIhvgKQBChKgJhTIisAZIAFh9IiTA/QAyhIg4hVIiABfIggiIIhgCtIhmi8Ig2CxQhThMiQAKIgoDKQhjgghjAgIArCMIikAAIAvCZQhKguhlAuIAACOIiqhdIhJB+IhngwIgvBdQgShchRhPIiXB6Ig1itIiZBTIgSiHIiDAqQBiiBgKiAIjIAlIAii8IjDBMQBHhugHh7IiwArQAHhkg9hZIiCBLIgOiJIicBtIhBjBIiGB5QAHhGhMheIhbCOIgyhgIhRBmQgmhghyhBIAADDIjLheIg4CsIhogzIg0BeQARg/hwgzIgkCkIihgoIgUBmQglhYhkACIAGDCIhSgcIgvBJQgohUhrgSIgwCtIhAhGIhWBsQgNhhhPhBIh2BYIgohbIhRBWQAPhZiEhYIh4BgIgViJIhvBXIgyiFIiEBYQAfhnhehaIh1B+EC9NAEEIgTAZQgcgvhQgiIgICmIhggjIA5CrIhwg5IhHCEIhMhVIhXBYIguiCIhOAfIALibIhzAWIAihvIh5A5QBFhOADhaIimAHQBWhaAOhlIiYACQAehXglhXIipBXQAbh2gmh1IiUBXQgihphkhoIhaDRIhlhjIAADYQhTgYhHAYIBkD0IiQAAIAvA3");
	this.shape.setTransform(1177.8,553.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49931E").s().p("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");
	this.shape_1.setTransform(1177.8,616.8);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B5511").ss(2,1,1).p("EC5/gIQIgBLnIhNAtIgwhBQgcAvhRAiIgHimIhgAjIA4ipIhwA3IhGiCIhMBVIhYhYIguCAIhNgdIAKCZIhygVIAhBuIh5g5QBFBOADBaIimgHQBXBaANBnIiYgBQAeBWglBXIiohXQAaB2glB1IiUhXQgiBphkBoIhbjRIhkBjIAAjYQhUAYhHgYIBkj2IiPAAIBjh0ECcTAESIhfABIAniXIh0AcIgniNIhmAvIgxhYQgJA/hGA1Ig/h3IhAB+IhKhuIAACcIiDhRIAABhIhmAAQBKBFANBeIihgFIA5BYIhwAKQA2BDADBcIisgZIAFB9IiTg/QAYBPgeBNIiAheIggCHIhfitQgVBShSBrIg2ixQhXA7iMAHIAyjQIiFA8IAKhdIAAgsQhSBLhTAFIgOj6IhaA4IgRi0IhhAwIgfhsQhDBAhmAdIhLiRIhmBDIhhhUQgMBChKBBIhyhcIg1CtIiYhTIgTCHIiDgpQBTBmAWB2IjYAAQAxBLgQBzIjChMIA/DoIiwgrIArBdIhXgqIgKCKIiChLQAFBSg0BfIh7iUIhBDBIiFh6QAEA2hUBbIhRh6IgyBgIhRhnQgeBGhhAwIgYiYIhkBkIgRhoIhhA+IguiHIhnAzIg1heIhfBxIgjijQgpBRiNATIAAiiIiJBVIAGjBIhRAcIgwhKQgZBVh2A6IgzjXIhBBHIhWhuQgPBZhNBMIh2haIgdA7Ihcg0QgKBmhPBlIiTh7IgWCKIhvhXIgyCEIiDhXQAABghHA9IimiXIg0CdIh1hlQAEBmhYAkIhLi8IhUCBIhRjMQgSBXhYATIhWizIiABhIg1iTQgmBDhWAFIhEi0Ih/A6IgUiHQgrAzhsANIAliuIhVA1IASixIh0A+IASioIh/A6IgOibIhLBGIg7hUIg1ByIhzhhQAPBNgjBLIhohEIhCCPIhLhEQANBkhMBiIhqh5IgtB5IhNhhQAKBWhlBtIh5ieIgZByIhHhDIgfC7IhThMQASBfhBBgIg+iEIhICeIg2iGQgOB7haBBIghirQgoBFhKgNIBGipIh+AAIBeicIh3AtIAAiHIiFAvIAKh8Ih4AeIg3iCQgMBGhYBEIhTh4IhKCVIhNhSIgfCbIiJgxIAABpIhwgEQApBVgpBVIhqgsQAEB6hfBuIhWizIh1AeIgHh5QgqA5h3ATIAAjNIh7AeIgVhyQgrBWiCAwIAAjEIiKB3IglhAIhLBfIg8hdQhCCohLAyIhOhwIgyA5IhLg3QgLA+hSAyIhkiKQg0BOiPAUIgMjAQgqAxh0AMIA+jBIhwA5IhGiEQgDBChGBCIhbiHIgtCCIhOgfIALCZIhzgWIgEBRIhTgbIBHCoIilgHQBeBaAGBmIiZgBIgGCuIiphXQAwBvg7B8IiUhXQgMBwhfBkIh2jUIiKBWIAmjMQhNAmhYgmIB8jTIikgiIBkhvEhSSADqIhUABIAmiXIijAAIgxiQQgrBwh0BYIgrjWIhiB+IhJhuIgWB+IhugyIgKBxIhcgQQBQBLAHBYIihgFIA5BXIhwAKQBCBKgJBWIirgaIAEB9IiTg/QAyBJg4BUIiAheIggCHIhfitIhnC9Ig2iyQhSBMiQgJIgpjNQhiAihkgiIAriLIijAAIAviaQhLAvhkgvIAAiOIiqBeIhJh9IhoAvIgvhcQgRBbhSBOIiXh6Ig1CtIiYhTIgSCHIiEgpQBiCBgJB/IjIgkIAhC+IjChMQBHBtgIB7IivgrQAGBkg9BZIiChLIgNCJIidhtIhBDCIiFh6QAHBGhMBfIhciPIgyBhIhQhnQgnBghxBBIAAjDIjMBfIg4isIhnAyIg0hdQAQA/hwAyIgjijIihAoIgUhmQglBYhlgDIAGjBIhRAbIgwhJQgnBUhsASIgviuIhBBHIhWhuQgNBjhOBCIh3hbIgnBeIhRhWQAOBYiDBZIhfhMIAB6e");
	this.shape_2.setTransform(1178.6,176.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#448A1C").s().p("EBWKASSIgyBhIhRhoQgeBGhhAwIgYiYIhkBlIgRhpIhhA+IguiGIhnAzIg1hfIhfByIgjikQgpBRiNAUIAAiiIiJBUIAGjAIhRAbIgwhJQgZBVh2A5IgzjWIhBBHIhWhuQgPBYhNBNIh2haIgdA6Ihcg0QgKBmhPBmIiTh8IgWCLIhvhYIgyCFIiDhYQAABghHA9IimiXIg0CdIh1hkQAEBlhYAkIhLi8IhUCCIhRjMQgSBWhYAUIhWizIiABhIg1iUQgmBDhWAFIhEizIh/A5IgUiGQgrAyhsAOIAlivIhVA1IASixIh0A/IASiqIh/A8IgOidIhLBGIg7hVIg1BzIhzhiQAPBNgjBOIhohGIhCCRIhLhFQANBkhMBiIhqh4IgtB4IhNhhQAKBWhlBtIh5idIgZBxIhHhDIgfC7IhThMQASBghBBfIg+iDIhICeIg2iHQgOB7haBBIghirQgoBFhKgNIBGioIh+AAIBeicIh3AsIAAiGIiFAuIAKh7Ih4AdIg3iDQgMBGhYBGIhTh7IhKCXIhNhSIgfCbIiJgxIAABpIhwgDQApBVgpBVIhqgsQAEB6hfBuIhWizIh1AdIgHh5QgqA6h3ASIAAjNIh7AfIgVhyQgrBWiCAvIAAjEIiKB3IglhAIhLBgIg8heQhCCphLAxIhOhwIgyA5IhLg2QgLA+hSAxIhkiJQg0BNiPAUIgMjAQgqAxh0AMIA+jDIhwA6IhGiEQgDBBhGBDIhbiHIgtCBIhOgeIALCaIhzgWIgEBRIhTgbIBHCpIilgIQBeBbAGBmIiZgBIgGCuIiphYQAwBvg7B8IiUhWQgMBvhfBlIh2jUIiKBVIAmjLQhNAlhYglIB8jUIikgiIBkhuQgdgEgfgNIADgEIhUABIAmiYIijAAIgxiSQgrBzh0BXIgrjXIhiB/IhJhvIgWB/IhugxIgKBwIhcgQQBQBLAHBYIihgFIA5BYIhwAKQBCBKgJBVIirgZIAEB9IiTg/QAyBIg4BUIiAheIggCIIhfitIhnC8Ig2ixQhSBLiQgJIgpjNQhiAjhkgjIAriLIijAAIAviZQhLAuhkguIAAiOIiqBdIhJh+IhoAwIgvhdQgRBchSBOIiXh5Ig1CtIiYhTIgSCHIiEgqQBiCBgJCAIjIglIAhC+IjChMQBHBugIB7IivgsQAGBlg9BYIiChKIgNCIIidhtIhBDCIiFh6QAHBHhMBeIhciOIgyBgIhQhmQgnBghxBBIAAjDIjMBeIg4isIhnAzIg0heQAQA/hwAyIgjijIihAoIgUhmQglBYhlgCIAGjCIhRAbIgwhJQgnBVhsARIgviuIhBBIIhWhuQgNBjhOBBIh3haIgnBdIhRhWQAOBYiDBZIhfhMIAB6dIAAl1MFz8AAAIAAO2IgBLnIhNAtIgwhCQgcAwhRAhIgHilIhgAjIA4irIhwA4IhGiDIhMBVIhYhYIguCCIhNgfIAKCaIhygVIAhBuIh5g4QBFBNADBbIimgHQBXBZANBnIiYgBQAeBXglBWIiohWQAaB1glB2IiUhYQgiBphkBpIhbjSIhkBkIAAjZQhUAZhHgZIBkj1IiPAAIBjh0Ig4gLIADgGIhfACIAniYIh0AdIgniNIhmAuIgxhaQgJBBhGA1Ig/h4IhAB/IhKhvIAACdIiDhRIAABhIhmAAQBKBGANBdIihgFIA5BYIhwAKQA2BDADBdIisgaIAFB9IiTg/QAYBPgeBNIiAheIggCHIhfisQgVBRhSBrIg2ixQhXA8iMAGIAyjPIiFA7IAKhdIAAgsQhSBLhTAGIgOj6IhaA3IgRizIhhAvIgfhsQhDBBhmAcIhLiQIhmBCIhhhTQgMBChKBAIhyhbIg1CsIiYhSIgTCHIiDgpQBTBmAWB1IjYAAQAxBMgQByIjChLIA/DnIiwgqIArBcIhXgqIgKCLIiChMQAFBTg0BfIh7iVIhBDBIiFh6QAEA2hUBbg");
	this.shape_3.setTransform(1178.6,157.9);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#264B10").ss(2,1,1).p("AAA2xQgPAAgMAMQgMALAAARMAAAAsTQAAARAMAMQAMALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAg");
	this.shape_4.setTransform(494,345.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8CD25").s().p("AgbWnQgMgMABgRMAAAgsTQgBgRAMgLQAMgMAPAAQAQAAAMAMQAMALAAARMAAAAsTQAAARgMAMQgMALgQAAQgPAAgMgLg");
	this.shape_5.setTransform(494,345.9);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#264B10").ss(2,1,1).p("AAA2xQgPAAgLAMQgNALAAARMAAAAsTQAAARANAMQALALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAg");
	this.shape_6.setTransform(1371,323.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8CD25").s().p("AgbWnQgMgMABgRMAAAgsTQgBgRAMgLQAMgMAPAAQAQAAAMAMQAMALAAARMAAAAsTQAAARgMAMQgMALgQAAQgPAAgMgLg");
	this.shape_7.setTransform(1371,323.6);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#264B10").ss(2,1,1).p("Agn2JMAAAAsTQAAARAMAMQAMALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAQgPAAgMAMQgMALAAARg");
	this.shape_8.setTransform(1904.4,313.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8CD25").s().p("AgaWnQgMgMAAgRMAAAgsTQAAgRAMgLQALgMAPAAQAQAAAMAMQAMALgBARMAAAAsTQABARgMAMQgMALgQAAQgPAAgLgLg");
	this.shape_9.setTransform(1904.4,313.3);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#264B10").ss(2,1,1).p("AAA2xQgPAAgLAMQgNALAAARMAAAAsTQAAARANAMQALALAPAAQAQAAAMgLQAMgMAAgRMAAAgsTQAAgRgMgLQgMgMgQAAg");
	this.shape_10.setTransform(782.6,297.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8CD25").s().p("AgaWnQgMgMAAgRMAAAgsTQAAgRAMgLQALgMAPAAQAQAAAMAMQAMALgBARMAAAAsTQABARgMAMQgMALgQAAQgPAAgLgLg");
	this.shape_11.setTransform(782.6,297.4);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.1,28.6,2421.9,713.9);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E5913").ss(2,1,1).p("AAAh7QgLAUgNAcQgZA5AAApQAAAxAPAbQANAZAVAAQAWAAANgZQAPgbAAgxQAAgpgZg5QgNgcgMgUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#477713").s().p("AgiBjQgPgbAAgxQAAgpAZg4QANgdALgUQAMAUANAdQAZA4AAApQAAAxgPAbQgNAYgWABQgVgBgNgYg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-12.3,10,24.8);


(lib.shape16 = function() {
	this.initialize();

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.059)").s().p("EBWKASSIgyBhIhRhnQgeBGhhAvIgYiXIhkBkIgRhpIhhA+IguiHIhnA0Ig1hfIhfByIgjikQgpBSiNASIAAihIiJBUIAGjBIhRAcIgwhJQgZBUh2A6IgzjWIhBBHIhWhuQgPBZhNBMIh2haIgdA6Ihcg0QgKBmhPBmIiTh7IgWCKIhvhYIgyCFIiDhYQAABhhHA8IimiXIg0CdIh1hlQAEBnhYAjIhLi8IhUCCIhRjNQgSBXhYATIhWizIiABiIg1iUQgmBDhWAGIhEi0Ih/A5IgUiGQgrAzhsAMIAliuIhVA2IASiyIh0A/IASiqIh/A8IgOidIhLBFIg7hTIg1ByIhzhhQAPBMgjBOIhohGIhCCQIhLhEQANBkhMBiIhqh5IgtB5IhNhhQAKBXhlBsIh5idIgZBxIhHhDIgfC7IhThMQASBghBBfIg+iDIhICeIg2iGQgOB7haBAIghirQgoBGhKgOIBGioIh+AAIBeicIh3AtIAAiHIiFAvIAKh8Ih4AdIg3iDQgMBFhYBGIhTh5IhKCWIhNhSIgfCbIiJgxIAABpIhwgDQApBVgpBUIhqgrQAEB6hfBtIhWizIh1AeIgHh5QgqA6h3ATIAAjOIh7AeIgVhxQgrBViCAwIAAjEIiKB4IglhAIhLBeIg8hdQhCCphLAxIhOhvIgyA4IhLg2QgLA9hSAyIhkiKQg0BPiPATIgMjAQgqAxh0AMIA+jCIhwA4IhGiDQgDBChGBBIhbiHIgtCCIhOgeIALCaIhzgVIgEBQIhTgaIBHCoIilgHQBeBZAGBnIiZgBIgGCtIiphXQAwBvg7B9IiUhYQgMBxhfBkIh2jVIiKBXIAmjMQhNAlhYglIB8jUIikghIBkhvQgdgEgfgNIADgFIhUABIAmiXIijAAIgxiSQgrByh0BZIgrjYIhiCAIhJhwIgWCAIhugyIgKBxIhcgRQBQBMAHBXIihgFIA5BYIhwAKQBCBJgJBWIirgaIAEB+IiTg/QAyBIg4BUIiAheIggCIIhfitIhnC8Ig2ixQhSBLiQgJIgpjMQhiAhhkghIAriMIijAAIAviaQhLAvhkgvIAAiOIiqBeIhJh+IhoAwIgvhdQgRBchSBPIiXh6Ig1CsIiYhTIgSCHIiEgpQBiCBgJCAIjIglIAhC+IjChMQBHBtgIB7IivgqQAGBjg9BaIiChMIgNCJIidhtIhBDCIiFh6QAHBHhMBeIhciOIgyBgIhQhnQgnBhhxBAIAAjDIjMBfIg4isIhnAzIg0heQAQA/hwAzIgjikIihAoIgUhmQglBYhlgCIAGjCIhRAcIgwhKQgnBVhsASIgvivIhBBIIhWhuQgNBihOBCIh3haIgnBdIhRhWQAOBZiDBYIhfhMIAB6dIAAl1MFz8AAAIgBadIhNAtIgwhBQgcAuhRAjIgHimIhgAjIA4isIhwA5IhGiDIhMBUIhYhXIguCCIhNgfIAKCbIhygWIAhBvIh5g6QBFBPADBaIimgIQBXBbANBnIiYgCQAeBXglBXIiohXQAaB2glB1IiUhYQgiBphkBpIhbjSIhkBkIAAjZQhUAZhHgZIBkj1IiPAAIBjh0QgdgCgbgKIADgFIhfACIAniXIh0AcIgniOIhmAvIgxhaQgJBChGA1Ig/h6IhACAIhKhvIAACdIiDhRIAABhIhmAAQBKBGANBdIihgEIA5BYIhwAKQA2BDADBbIisgZIAFB9IiTg/QAYBPgeBOIiAhfIggCHIhfisQgVBShSBqIg2ixQhXA7iMAIIAyjQIiFA7IAKhdIAAgsQhSBMhTAEIgOj6IhaA4IgRizIhhAvIgfhsQhDBAhmAdIhLiQIhmBCIhhhTQgMBChKBBIhyhcIg1CtIiYhTIgTCHIiDgpQBTBmAWB1IjYAAQAxBLgQBzIjChLIA/DoIiwgsIArBdIhXgpIgKCKIiChLQAFBSg0BfIh7iVIhBDBIiFh5QAEA2hUBag");
	this.shape.setTransform(1170.1,177.1);

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4B3A1B").ss(1.5,1,1).p("AEnnbIgFghQhTn4A9jmQA+jmFSmuIAAhEIAAiKQm4HwhICcQhOCpABFcQhGkMhPhzQhMhsoJmTIAACmQGYFaBCB4QBCB4BGDmQAtCVAcEyQAPCmAMDVQARFJgfEoQgdEphbEkQhbEkAcGdIAQDPIGZAAIgDgZQhGosAninQAoinAKg/IAeiuQAUhwAclgQAInkhOnkg");
	this.shape_1.setTransform(91.3,385.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#53411E").s().p("ACrMkQgSgtAAgoIgVAsIgbAzQgOgJgHgOIgKgYIg6BBQgckygtiVQhGjmhCh4QhCh1mYlaIAAinQIJGTBMBsQBPByBGELQgBlZBOiqQBIicG4nvIAACJIAABEQlSGug+DnQg9DjBTH4IAFAiIgUAeQgRAegiBAQgggVgVg1g");
	this.shape_2.setTransform(91.3,262.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#604B22").s().p("AjwUdIgQjOQgcmdBbkkQBbkkAfknQAfkogSlLQgLjVgQimIA6hBIALAXQAHAPALAJIAbgzIAVgsQAAAnATAuQAUA0AgAWQAihAASgfIAUgeQBNHmgHHkQgcFegUBwIgeCuQgLA/gnCnQgnCnBFIsIADAYg");
	this.shape_3.setTransform(101.5,465.4);

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4B3A1B").ss(1.5,1,1).p("Ak9nwQAMhmAQhmQBToYg9j0Qg+j1lSnKIAAhHIAAiTQG4IPBICmQBOC0gBFxQBGkbBPh8QBMhzIJmsIAACxQmYFwhCB/QhCCAhGD0QgsCcgbE6QgRC2gMDrQgRFeAfE8QAcE7BcE2QBbE3gcG3IgIENIgIEOImZAAIADgZQAikdAJlrQAIlcgUhdQgoixgKhDIgei6QgUh2gcl2QgGmuA1mwg");
	this.shape_4.setTransform(605.6,378.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53411E").s().p("AkhLsQBToYg9jyQg+j1lSnJIAAhIIAAiTQG4IPBICmQBOC0gBFwQBGkcBPh5QBMh0IJmsIAACxQmYFwhCB9QhCCAhGD0QgsCcgbE6Igug/QgaAXgSAZIgjA3QgPgJgPgRIgagdQgJAFgPAlIgXA1QgIAAgLgIQgLgIgKAAIgkAjQAMhmAQhmg");
	this.shape_5.setTransform(605.6,233.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#604B22").s().p("AinX6IADgZQAhkdAJlrQAJlbgVheQgnixgLhDIgei4QgUh2gcl2QgGmvA2mwIAjgkQALAAALAJQALAHAHABIAYg1QAPglAIgGIAaAdQAPARAPAJIAkg3QAPgZAagWIAuA/QgRC1gLDrQgSFgAfE8QAfE7BbE1QBbE2gcG3IgHENIgJEOg");
	this.shape_6.setTransform(595.3,465.3);

	// Layer 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#4B3A1B").ss(1.5,1,1).p("AE9niQgMhdgPhdQhTn4A9jmQA+jmFSmuIAAhEIAAiKQm4HwhICcQhOCpABFcQhGkMhPhzQhMhsoJmTIAACmQGYFaBCB4QBCB4BGDmQA2CzAeGXQAJBzAHCFQARFJgfEoQgdEphbEkQhbEkAcGdIAIEHQAFDiADAmIGZAAIgDgZQgikLgJlfQgIlRAUhYQAoimAKhAIAeiuQAUhvAclhQAGmVg2mag");
	this.shape_7.setTransform(2099.2,372.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#53411E").s().p("ABcPQQgTgbgOgiQgLgdgEgWIgQAAIgBACQgemXg2izQhGjmhCh2QhCh4mYlZIAAinQIJGTBMBsQBPBzBGEKQgBlaBOipQBIicG4nvIAACJIAABEQlSGug+DmQg9DkBTH4QAPBdAMBdIgXgBQgYABgHAEQgFADgCALQgGAggvAeQgOghgNgNQgUgVggADIgIBPIgIBIg");
	this.shape_8.setTransform(2099.2,243.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#604B22").s().p("AjwVgQgDgmgGjiIgHkGQgcmeBbkjQBbkiAfkpQAfkpgSlKQgHiFgJhzIACgCIAQAAQADAWAMAcQANAiAUAbIAOAAIAIhIIAIhPQAggCAUAUQAMANAPAhQAvgdAGggQACgMAEgDQAHgEAZAAIAXABQA2GZgGGYQgcFggUBvIgeCtQgLA/gnCnQgVBXAJFRQAJFfAhEMIADAYg");
	this.shape_9.setTransform(2109.5,461.8);

	// Layer 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#4B3A1B").ss(1.5,1,1).p("AE6j7QgRjRggjQQhMn4A4jmQA5jmE2muIAAhEIAAiKQmUHwhCCcQhHCpABFcQhAkMhIhzQhGhsndmTIAACmQF2FaA8B4QA9B4BADmQA3DOAeH+IAGB2QAQFJgcEoQgbEphTEkQhTEkAZGdIAHEGQAFDiADAnIF2AAIgDgZQgfkLgIlgQgIlQAThYQAkimAKhAIAbiuQAThwAZlgQAEklgYkjg");
	this.shape_10.setTransform(1056.3,392.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#53411E").s().p("ADyP2QgRgTACgsQACgggfAAQgMAAggAtIgnAyQAAhIgIgXQgfACgrAkQgen9g3jPQhAjmg9h2Qg8h3l2laIAAinQHdGTBGBsQBIB0BAEJQgBlZBHiqQBCicGUnvIAACJIAABEQk2Gug5DnQg4DjBMH4QAgDRARDQQgjANgdAAIgIAAg");
	this.shape_11.setTransform(1056.3,267.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#604B22").s().p("AjcUVQgDgmgFjiIgGkGQgamdBTkkQBUkiAckpQAckogQlLIgGh3QAsgkAdgBQAIAXAABIIAngyQAggtAMAAQAeAAgBAfQgDAsASAUQAfACApgPQAYElgEElQgaFggSBwIgcCsQgJA/glCnQgSBYAIFQQAIFgAeELIADAYg");
	this.shape_12.setTransform(1065.7,489.3);

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4B3A1B").ss(1.5,1,1).p("AkdnIIALhUQBPoYg6j0Qg7j1lBnJIAAhIIAAiTIBwCPIACADQE6GVA6COQBKC0gBFyQAujCAwh3QAXg3AYgnQBJhzHumtIAABiIAABPQmEFwg+B/Qg/CAhCD0QgdBtgXC8QgaDqgRFkQgQFeAdE8QAbE7BXE2QBWE3gaG3IgQDbImDAAIADgZQBCpPgliyQgmixgJhDIgdi6QgTh2gal2QgHnrBDnrg");
	this.shape_13.setTransform(1552,412.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#53411E").s().p("AkdN0IALhTQBPoZg6j0Qg7jzlBnJIAAhIIAAiSIBwCPIACACQE6GVA6CPQBKC0gBFvQAujCAwh3QAXg1AYgnQBJhzHumtIAABjIAABPQmEFvg+B+Qg/B/hCD0QgdBtgXC8IhJguQgMAYgWAhQgQAegFAfQgKgFgMgCIgKgBQAAgNgEgRIgEgaQgZAhg6AvQgpAoANAog");
	this.shape_14.setTransform(1552,277.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#604B22").s().p("AifWpIADgZQBCpQgliyQgmixgJhDIgdi6QgTh2galzQgHnsBDntIAJAQQgNgoApgoQA6guAZghIAEAZQAEASAAANIAKABQAMACAKAFQAFggAQgdQAUgiAMgYIBLAvQgcDqgRFkQgQFgAdE7QAdE6BXE2QBWE3gaG2IgQDcg");
	this.shape_15.setTransform(1542.3,491.4);

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D5911").s().p("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");
	this.shape_16.setTransform(1180.6,572.9);

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D5911").s().p("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");
	this.shape_17.setTransform(1181.7,217.8);

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,101,20,0.302)").s().p("AcvOcIAQACIgQBOgApTMZQAcgIAagBIAGBSgEA6KgABQAdAqAhAqIgRAGQgsgsgBgugEBp2gAVQAzAVA2ASIgGAWQhLgdgYgggEiH6gAtIAABGIgfAFgEgyugBrQAeAUAfAQIgDAKQglgSgVgcgEhJRgEIIAKgeIAFAlgEB42gFXIAVAnIgeACgEh9jgGbQkEj5galXQEFD9AqBYQAqBYAtCoIAUBhQhBgug7g4gECIWgF5IAEgEIAAAFg");
	this.shape_18.setTransform(1192.8,355.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#274E10").s().p("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");
	this.shape_19.setTransform(1185.5,390.3);

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#24460F").s().p("Ei4wAjAMAAAhF/MFxhAAAMAAABF/g");
	this.shape_20.setTransform(1177.4,334.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,47.8,2406.4,637.7);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49931E").s().p("EgnCAakMAAAg1HMBOFAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,499.9,340);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgpAqIAAhTIBTAAIAABTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.2,8.5,8.5);


(lib.shape9 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4F2677").ss(1,1,1).p("AgCAeQgMglAVgW");
	this.shape.setTransform(-0.4,-10.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#582C85").ss(1,1,1).p("AgsACQAuAMArgT");
	this.shape_1.setTransform(-0.3,-7.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4F2677").ss(1.5,1,1).p("AhLhsQAngZAyAFQA8AEAbAmQAbAngGA0QgFAkgQAcAhLhsIgMAIQgqAhAJA/QAHA+AiAkQAhAkAuAAQAwAAAigkIATgZ");
	this.shape_2.setTransform(0,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#653298").s().p("AhEBTQgigkgHg9QgJg/AqghIAMgIQgMAaAFAkQAIA9AhAjQAgAlAwAAQAiAAAcgTIgTAZQgiAkgwAAQguAAghgkg");
	this.shape_3.setTransform(-1,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8243C0").s().p("Ag8BIQgigjgHg9QgFgkALgaQAngZA1AEQA5AEAbAnQAbAngGA0QgEAjgRAcQgbATgjAAQguAAghglg");
	this.shape_4.setTransform(1.9,-0.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-13.9,24.7,28.7);


(lib.shape8 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6D1616").ss(1.5,1,1).p("Ag6gtQAUgUAfgGQAigHAWARQAVARAFAfQACASgFARIgIARQgOAZgcAIQgbAHgZgOQgZgPgOghQgOgfAUgZg");
	this.shape.setTransform(-2.7,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D1D1D").s().p("AgcAzQgZgPgOghQgOgfAUgZIAFgGQgCAQAIATQAOAfAYAOQAYAPAcgHQAUgGAOgPIgIARQgOAZgcAIQgKACgJAAQgQAAgRgJg");
	this.shape_1.setTransform(-2.9,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B52C24").s().p("AgWAyQgYgOgOgiQgIgQACgRQAUgTAfgHQAigGAWAQQAVASAFAdQACATgFASQgOAPgUAFQgKADgJAAQgQAAgRgKg");
	this.shape_2.setTransform(-1.9,3.2);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6D1616").ss(1.5,1,1).p("Ag6gtQAUgUAfgGQAigHAWARQAVARAFAfQACASgFARIgIARQgOAZgcAIQgbAHgZgOQgZgPgOghQgOgfAUgZg");
	this.shape_3.setTransform(8.9,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D1D1D").s().p("AgcAzQgZgPgOghQgOgfAUgZIAFgGQgCAQAIATQAOAfAYAOQAYAPAcgHQAUgGAOgPIgIARQgOAZgcAIQgKACgJAAQgQAAgRgJg");
	this.shape_4.setTransform(8.7,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B52C24").s().p("AgWAyQgYgOgOgiQgIgQACgRQAUgTAfgHQAigGAWAQQAVASAFAdQACATgFASQgOAPgUAFQgKADgJAAQgQAAgRgKg");
	this.shape_5.setTransform(9.7,4.8);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6D1616").ss(1.5,1,1).p("ABIAWIgIARQgOAZgcAIQgbAHgZgOQgZgPgOghQgOgfAUgZIAFgGQAUgUAfgGQAigHAWARQAVARAFAfQACASgFARg");
	this.shape_6.setTransform(4.2,-4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D1D1D").s().p("AgcAzQgZgPgOghQgOgfAUgZIAFgGQgCAQAIATQAOAfAYAOQAYAPAcgHQAUgGAOgPIgIARQgOAZgcAIQgKACgJAAQgQAAgRgJg");
	this.shape_7.setTransform(4,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B52C24").s().p("AgWAyQgYgOgOgiQgIgQACgRQAUgTAfgHQAigGAWAQQAVASAFAdQACATgFASQgOAPgUAFQgKADgJAAQgQAAgRgKg");
	this.shape_8.setTransform(5,-5.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.6,26.9,25.4);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABqhpQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite74 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape75("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite71 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape72("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	
	this.frame_1 = function() {
		playSound("sound73");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
     //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
     _root.GameWon = true;
     _root.camera.hand1.removeAllEventListeners("mousedown");    
     _root.camera.hand2.removeAllEventListeners("mousedown");    
     _root.camera.body.mouth.removeAllEventListeners("mousedown");    
     stage.removeAllEventListeners("stagemouseup");    
     _root.camera.hand1.dragging = _root.camera.hand2.dragging = _root.camera.body.dragging = false;
     //Mouse.show();
} // end if	
	}
	this.frame_8 = function() {
		playSound("sound77");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite3Puff();    //attachMovie("Puff", "puff" + i, i);
    this.addChild(this["puff" + i]);
    this["puff" + i].rotation = Math.random() * 360;
    this["puff" + i].scaleX = this["puff" + i].scaleY = Math.random() * 0.4 + 0.8;
    this["puff" + i].velX = Math.random() * 40 - 20;
    this["puff" + i].velY = Math.random() * 40 - 20;
    this["puff" + i].step = Math.random() * 10 + 10;
    this["puff" + i].on("tick",  function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        evt.currentTarget.scaleX = evt.currentTarget.scaleY = evt.currentTarget.scaleY - this.step/100;
        if (evt.currentTarget.scaleX <= 0)
        {
            evt.remove();
            self.removeChild(evt.currentTarget);
            delete evt.currentTarget
        } // end if
    });
    } // end of for
		
	}
  this.frame_12 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame - 1);     
   this.parent.lose();  
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(4).call(this.frame_12));

	// Layer 3
	this.instance = new lib.sprite71();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(6));

	// Layer 2
	this.instance_1 = new lib.sprite74();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_2 = new lib.shape76("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite69 = function(mode,startPosition,loop) {
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
  this.frame11 = function(){this.gameWin = true}
	// Layer 10
	this.star10 = new lib.sprite70();
	this.star10.setTransform(291.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star10}]}).wait(11));

	// Layer 9
	this.star9 = new lib.sprite70();
	this.star9.setTransform(258.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star9}]}).wait(11));

	// Layer 8
	this.star8 = new lib.sprite70();
	this.star8.setTransform(225.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star8}]}).wait(11));

	// Layer 7
	this.star7 = new lib.sprite70();
	this.star7.setTransform(192.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star7}]}).wait(11));

	// Layer 6
	this.star6 = new lib.sprite70();
	this.star6.setTransform(159.7,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star6}]}).wait(11));

	// Layer 5
	this.star5 = new lib.sprite70();
	this.star5.setTransform(126.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(11));

	// Layer 4
	this.star4 = new lib.sprite70();
	this.star4.setTransform(93.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(11));

	// Layer 3
	this.star3 = new lib.sprite70();
	this.star3.setTransform(60.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(11));

	// Layer 2
	this.star2 = new lib.sprite70();
	this.star2.setTransform(27.8,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(11));

	// Layer 1
	this.star1 = new lib.sprite70();
	this.star1.setTransform(-5.1,-3.2,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(11));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(10).call(this.frame11))  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-16,323.7,25.6);


(lib.sprite67 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape68("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  var snd;
	// timeline functions:
  this.frame_0 = function(){this.stop()}
 
	this.frame_1 = function() {
		 snd = playSound("sound64"); snd.duration = 833; 
	}
	this.frame_2 = function() {
	  snd = playSound("sound64");snd.position = 833; snd.duration = 1750;
	}
	this.frame_3 = function() {
		snd = playSound("sound64");snd.position = 1750; snd.duration = 2500;
	}
	this.frame_4 = function() {
		snd = playSound("sound64");snd.position = 2500; snd.duration = 3458; 
	}
	this.frame_5 = function() {
		snd = playSound("sound64");snd.position = 3458; snd.duration = 4250;
	}
	this.frame_6 = function() {
		snd = playSound("sound64");snd.position = 4250; snd.duration = 5000;
	}
	this.frame_7 = function() {  
		snd = playSound("sound64"); snd.position = 5208; snd.duration = 6042;
	}
	this.frame_8 = function() {
		snd = playSound("sound64"); snd.position = 6042; snd.duration = 6667;
	}
	this.frame_9 = function() {
		snd = playSound("sound64"); snd.position = 6876; snd.duration = 7709;
	}
	this.frame_10 = function() {
		snd = playSound("sound64"); snd.position = 7709; snd.duration = 8750;
	}


	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10));

	// Layer 1
	this.instance = new lib.shape23("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-18.4,38,37);


(lib.sprite48 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape49("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-2.5,5,5.1);


(lib.sprite46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var self = this;
	var rad, degrees;
  this.frame1 = function(){
    this.stop ();
    this.on("tick", function ()
    {
     rad = Math.atan((stage.mouseY/ratio - _root.camera.y -_root.camera.body.y - self.y)/ (stage.mouseX/ratio - _root.camera.x -_root.camera.body.x - self.x));
     degrees = 180 * rad / 3.141593E+000;
     if (stage.mouseX/ratio - _root.camera.x -_root.camera.body.x - self.x >= 0)
     {
        degrees = degrees + 180;
     } // end if
     self.pupil.rotation = degrees;
     
    });  
  
  }
	// Layer 2
	this.pupil = new lib.sprite48();
	this.pupil.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.pupil).to({_off:true},1).wait(6));

	// Layer 1
	this.instance = new lib.shape47("synched",0);

	this.instance_1 = new lib.shape50("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7)) 
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-10.9,16.2,21.9);


(lib.sprite43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 7
	this.instance = new lib.shape55("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0,_off:false},0).to({_off:true},8).wait(1));

	// Layer 6
	this.instance_1 = new lib.shape53("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).to({_off:true},1).wait(8).to({startPosition:0,_off:false},0).wait(1));

	// Layer 5
	this.Leye = new lib.sprite46();
	this.Leye.setTransform(3.1,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Leye}]}).wait(11));

	// Layer 4
	this.Reye = new lib.sprite46();
	this.Reye.setTransform(-8,-9.1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Reye}]}).wait(11));

	// Layer 3
	this.instance_2 = new lib.shape45("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(11));

	// Layer 2
	this.instance_3 = new lib.shape52("synched",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0,_off:false},0).wait(10));

	// Layer 1
	this.instance_4 = new lib.shape44("synched",0);

	this.instance_5 = new lib.shape51("synched",0);

	this.instance_6 = new lib.shape54("synched",0);

	this.instance_7 = new lib.shape56("synched",0);

	this.instance_8 = new lib.shape57("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(11))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.9,51.1,51);


(lib.sprite37 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape38("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-10.8,15.7,21.2);


(lib.sprite24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape25("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1438.4,-79.1,2228.2,348.8);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape23("synched",0);
	this.instance.setTransform(5,5,0.263,0.271);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-12.3,10,24.8);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 72
	this.instance = new lib.shape21("synched",0);

	// Layer 71
	this.instance_1 = new lib.sprite17();
	this.instance_1.setTransform(2264.7,195.6,1,1,-134.9);

	// Layer 70
	this.instance_2 = new lib.sprite17();
	this.instance_2.setTransform(2281.4,240.9,1,1,150);

	// Layer 69
	this.instance_3 = new lib.sprite17();
	this.instance_3.setTransform(2263.3,344.6,1,1,-134.9);

	// Layer 68
	this.instance_4 = new lib.sprite17();
	this.instance_4.setTransform(2284.6,410.6,1,1,150);

	// Layer 67
	this.instance_5 = new lib.sprite17();
	this.instance_5.setTransform(203.4,341.2,1,1,0,-179.9,180);

	// Layer 66
	this.instance_6 = new lib.sprite17();
	this.instance_6.setTransform(243.9,327.4,1,1,60);

	// Layer 65
	this.instance_7 = new lib.sprite17();
	this.instance_7.setTransform(125.9,236.6,1,1,105);

	// Layer 64
	this.instance_8 = new lib.sprite17();
	this.instance_8.setTransform(132.9,292.3,1,1,180);

	// Layer 63
	this.instance_9 = new lib.sprite17();
	this.instance_9.setTransform(348.9,321.4,1,1,-44.9);

	// Layer 62
	this.instance_10 = new lib.sprite17();
	this.instance_10.setTransform(309.2,357.8,1,1,180);

	// Layer 61
	this.instance_11 = new lib.sprite17();
	this.instance_11.setTransform(417.3,311.5,1,1,-164.9);

	// Layer 60
	this.instance_12 = new lib.sprite17();
	this.instance_12.setTransform(440.8,248,1,1,-89.9);

	// Layer 59
	this.instance_13 = new lib.sprite17();
	this.instance_13.setTransform(480,218.2,1,1,165);

	// Layer 58
	this.instance_14 = new lib.sprite17();
	this.instance_14.setTransform(628.1,274.5,1,1,45);

	// Layer 57
	this.instance_15 = new lib.sprite17();
	this.instance_15.setTransform(528.6,208.2,1,1,75);

	// Layer 56
	this.instance_16 = new lib.sprite17();
	this.instance_16.setTransform(548.3,264.2,1,1,165);

	// Layer 55
	this.instance_17 = new lib.sprite17();
	this.instance_17.setTransform(700.3,316.3,1,1,-164.9);

	// Layer 54
	this.instance_18 = new lib.sprite17();
	this.instance_18.setTransform(821.3,291.6,1,1,-164.9);

	// Layer 53
	this.instance_19 = new lib.sprite17();
	this.instance_19.setTransform(756.4,279.5,1,1,-14.9);

	// Layer 52
	this.instance_20 = new lib.sprite17();
	this.instance_20.setTransform(851,239.1,1,1,-59.9);

	// Layer 51
	this.instance_21 = new lib.sprite17();
	this.instance_21.setTransform(889.8,242.1,1,1,180);

	// Layer 50
	this.instance_22 = new lib.sprite17();
	this.instance_22.setTransform(875.1,180.2,1,1,-119.9);

	// Layer 49
	this.instance_23 = new lib.sprite17();
	this.instance_23.setTransform(1040.4,338.8,1,1,165);

	// Layer 48
	this.instance_24 = new lib.sprite17();
	this.instance_24.setTransform(1027.3,304.5,1,1,45);

	// Layer 47
	this.instance_25 = new lib.sprite17();
	this.instance_25.setTransform(933.1,281.9,1,1,-164.9);

	// Layer 46
	this.instance_26 = new lib.sprite17();
	this.instance_26.setTransform(931.5,231.9,1,1,75);

	// Layer 45
	this.instance_27 = new lib.sprite17();
	this.instance_27.setTransform(1112.7,318.3);

	// Layer 44
	this.instance_28 = new lib.sprite17();
	this.instance_28.setTransform(1187.6,343.6,1,1,-164.9);

	// Layer 43
	this.instance_29 = new lib.sprite17();
	this.instance_29.setTransform(1219.2,303.1,1,1,-44.9);

	// Layer 42
	this.instance_30 = new lib.sprite17();
	this.instance_30.setTransform(1287.8,300.6,1,1,180);

	// Layer 41
	this.instance_31 = new lib.sprite17();
	this.instance_31.setTransform(1314.5,236.2,1,1,-89.9);

	// Layer 40
	this.instance_32 = new lib.sprite17();
	this.instance_32.setTransform(1364,208.6,1,1,135);

	// Layer 39
	this.instance_33 = new lib.sprite17();
	this.instance_33.setTransform(1811.3,210,1,1,150);

	// Layer 38
	this.instance_34 = new lib.sprite17();
	this.instance_34.setTransform(1632.3,300.7,1,1,-29.9);

	// Layer 37
	this.instance_35 = new lib.sprite17();
	this.instance_35.setTransform(1431.4,279.4,1,1,180);

	// Layer 36
	this.instance_36 = new lib.sprite17();
	this.instance_36.setTransform(1411.3,214,1,1,75);

	// Layer 35
	this.instance_37 = new lib.sprite17();
	this.instance_37.setTransform(2145.1,254.1,1,1,-44.9);

	// Layer 34
	this.instance_38 = new lib.sprite17();
	this.instance_38.setTransform(2219.8,182.3,1,1,-89.9);

	// Layer 33
	this.instance_39 = new lib.sprite17();
	this.instance_39.setTransform(1976.9,290.2,1,1,45);

	// Layer 32
	this.instance_40 = new lib.sprite17();
	this.instance_40.setTransform(2224.8,229.6,1,1,165);

	// Layer 31
	this.instance_41 = new lib.sprite17();
	this.instance_41.setTransform(2116.1,297.6,1,1,165);

	// Layer 30
	this.instance_42 = new lib.sprite17();
	this.instance_42.setTransform(1875.4,293.8,1,1,150);

	// Layer 29
	this.instance_43 = new lib.sprite17();
	this.instance_43.setTransform(1849.5,251.8,1,1,60);

	// Layer 28
	this.instance_44 = new lib.sprite17();
	this.instance_44.setTransform(2025.1,320.2,1,1,180);

	// Layer 27
	this.instance_45 = new lib.sprite17();
	this.instance_45.setTransform(1715.4,304.5,1,1,180);

	// Layer 26
	this.instance_46 = new lib.sprite17();
	this.instance_46.setTransform(1752.4,245.7,1,1,-74.9);

	// Layer 25
	this.instance_47 = new lib.sprite17();
	this.instance_47.setTransform(1578.4,330.9,1,1,150);

	// Layer 24
	this.instance_48 = new lib.sprite17();
	this.instance_48.setTransform(1511.6,288.4,1,1,30);

	// Layer 23
	this.instance_49 = new lib.shape20("synched",0);

	// Layer 22
	this.instance_50 = new lib.sprite17();
	this.instance_50.setTransform(56.5,406.9,1,1,-134.9);

	// Layer 21
	this.instance_51 = new lib.sprite17();
	this.instance_51.setTransform(79.4,354.6,1,1,150);

	// Layer 20
	this.instance_52 = new lib.sprite17();
	this.instance_52.setTransform(79.4,232.4,1,1,150);

	// Layer 19
	this.instance_53 = new lib.sprite17();
	this.instance_53.setTransform(56.5,271.9,1,1,-134.9);

	// Layer 18
	this.instance_54 = new lib.shape19("synched",0);

	// Layer 17
	this.instance_55 = new lib.sprite17();
	this.instance_55.setTransform(1891.6,422.2,1,1,-134.9);

	// Layer 16
	this.instance_56 = new lib.sprite17();
	this.instance_56.setTransform(1914.9,376.4,1,1,150);

	// Layer 15
	this.instance_57 = new lib.sprite17();
	this.instance_57.setTransform(1891.6,250.6,1,1,-134.9);

	// Layer 14
	this.instance_58 = new lib.sprite17();
	this.instance_58.setTransform(1914.6,215.2,1,1,150);

	// Layer 13
	this.instance_59 = new lib.sprite17();
	this.instance_59.setTransform(1381,256.5,1,1,150);

	// Layer 12
	this.instance_60 = new lib.sprite17();
	this.instance_60.setTransform(1360.3,302.3,1,1,-134.9);

	// Layer 11
	this.instance_61 = new lib.sprite17();
	this.instance_61.setTransform(1381.2,412.7,1,1,150);

	// Layer 10
	this.instance_62 = new lib.sprite17();
	this.instance_62.setTransform(1359,452.2,1,1,-134.9);

	// Layer 9
	this.instance_63 = new lib.sprite17();
	this.instance_63.setTransform(792.7,238,1,1,150);

	// Layer 8
	this.instance_64 = new lib.sprite17();
	this.instance_64.setTransform(769.8,212.5,1,1,-134.9);

	// Layer 7
	this.instance_65 = new lib.sprite17();
	this.instance_65.setTransform(770.7,420.5,1,1,-134.9);

	// Layer 6
	this.instance_66 = new lib.sprite17();
	this.instance_66.setTransform(792.7,353.9,1,1,150);

	// Layer 5
	this.instance_67 = new lib.sprite17();
	this.instance_67.setTransform(481.2,277.5,1,1,-134.9);

	// Layer 4
	this.instance_68 = new lib.sprite17();
	this.instance_68.setTransform(481.2,416.4,1,1,-134.9);

	// Layer 3
	this.instance_69 = new lib.sprite17();
	this.instance_69.setTransform(504.1,474.5,1,1,150);

	// Layer 2
	this.instance_70 = new lib.sprite17();
	this.instance_70.setTransform(505.3,323,1,1,150);

	// Layer 1
	this.instance_71 = new lib.shape16("synched",0);

	this.addChild(this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.1,-1.5,2421.9,744);


(lib.sprite11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape12("synched",0);
  this.instance.setTransform(0, 0, 2.353, 2.353);
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.2,8.5,8.5);


(lib.sprite7FruitShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape8("synched",0);

	this.instance_1 = new lib.shape9("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(2))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.6,26.9,25.4);


(lib.sprite5Ball = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.sprite3Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape4("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_2 = function() {
		playSound("sound31");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// Layer 4
	this.hit = new lib.sprite11();
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(3));

	// Layer 3
	this.instance = new lib.shape62("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0,_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.shape60("synched",0);

	this.instance_2 = new lib.shape61("synched",0);

	this.shape = new lib.sprite7FruitShape();
	this.shape.setTransform(-9.7,-5.9,0.999,0.999,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.instance_3 = new lib.shape28("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-27,54.3,54.3);


(lib.sprite34 = function() {
	this.initialize();

	// Layer 7
	this.hit = new lib.sprite11();
	this.hit.setTransform(0,46.5,6.059,5.632);
	this.hit.alpha = 0;

	// Layer 6
	this.scoreFld = new cjs.Text("0", "18px Arial", "#FFFFFF");
	this.scoreFld.lineHeight = 18;
	this.scoreFld.lineWidth = 56;
	
	this.scoreFld.setTransform(-4.7, 43.9);
	this.scoreFld.shadow = new cjs.Shadow("rgba(92,78,44,1)",0,0,4);

	// Layer 5
	this.instance = new lib.shape39("synched",0);

	// Layer 4
	this.instance_1 = new lib.sprite37();
	this.instance_1.setTransform(6.1,7.8,0.999,0.999,-2.9);

	// Layer 3
	this.instance_2 = new lib.sprite37();
	this.instance_2.setTransform(-9,8.2,0.999,0.999,-6.9);

	// Layer 2
	this.instance_3 = new lib.shape36("synched",0);

  //Layer 1
  this.fruitContainer = new lib.sprite35();
  this.fruitContainer.setTransform(0, 41.60); 
	this.addChild(this.fruitContainer, this.instance_3,this.instance_2,this.instance_1,this.instance,this.scoreFld,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.7,-3.4,59.6,78.9);


(lib.sprite33 = function() {
	this.initialize();

	// Layer 5
	//this.mouthHit = new lib.sprite11();
	//this.mouthHit.setTransform(1,11.5,0.5,0.5);
	//this.mouthHit.alpha = 0;

	// Layer 4
	this.instance = new lib.shape58("synched",0);

	// Layer 3
	this.mouth = new lib.sprite43();
  this.mouth.cursor = "pointer";
	// Layer 2
	this.instance_1 = new lib.shape42("synched",0);

	// Layer 1
	this.basket = new lib.sprite34();
	this.basket.setTransform(8,19.6);

	this.addChild(this.basket,this.instance_1,this.mouth,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-33.5,64.4,128.5);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_2 = function() {
		playSound("sound31");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2));

	// Layer 4
	this.hit = new lib.sprite11();
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(3));

	// Layer 3
	this.instance = new lib.shape32("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0,_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.shape29("synched",0);

	this.instance_2 = new lib.shape30("synched",0);

	this.shape = new lib.sprite7FruitShape();
	this.shape.setTransform(-12.8,2,0.998,0.998,-45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.instance_3 = new lib.shape28("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-27,54.3,54.3);


(lib.sprite10Fruit = function() {
	this.initialize();
  var self = this;
	// Layer 2
	this.hit = new lib.sprite11();
	this.hit.setTransform(0,0,0.471,0.471);
	this.hit.alpha = 0;

	// Layer 1
	this.shape = new lib.sprite7FruitShape();
	this.shape.setTransform(0,0,1,1.002);

	this.addChild(this.shape,this.hit);
	
  this.on("tick", function ()
  {
    if (self.parent.hand1.hit.hitTest(self.x + self.hit.x - self.parent.hand1.x - self.parent.hand1.hit.x, self.y + self.hit.y - self.parent.hand1.y - self.parent.hand1.hit.y) && !self.parent.hand1.holding)
    {
        self.parent.hand1.gotoAndStop(2);
        self.parent.hand1.shape.gotoAndStop(self.shape.currentFrame);
        self.parent.hand1.holding = true;
        self.visible = false;
        
    } // end if
    if (self.parent.hand2.hit.hitTest(self.x + self.hit.x - self.parent.hand2.x - self.parent.hand2.hit.x, self.y + self.hit.y - self.parent.hand2.y - self.parent.hand2.hit.y) && !self.parent.hand2.holding)
    {
        self.parent.hand2.gotoAndStop(2);
        self.parent.hand2.shape.gotoAndStop(self.shape.currentFrame);
        self.parent.hand2.holding = true;
        self.visible = false;
    } // end if
  });
  if(this.y < 450){
    this.shape.gotoAndStop(1)
  }
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.6,26.9,25.5);


(lib.sprite14 = function() {
	this.initialize();
  //Layer 43
  this.joint2 = new lib.sprite26();

	// Layer 42
	this.hand2 = new lib.sprite59();
  this.hand2.cursor = "pointer";
  //Layer 41
  this.arm2 = new cjs.Shape();
  
	// Layer 40
	this.body = new lib.sprite33();
  
  //Layer 39
  this.joint1 = new lib.sprite26();

	// Layer 38
	this.hand1 = new lib.sprite27();
  this.hand1.cursor = "pointer";
  //Layer 37
  this.arm1 = new cjs.Shape();
	// Layer 36
	this.instance_0 = new lib.sprite10Fruit();
	this.instance_0.setTransform(2120.4,31.2);

	// Layer 35
	this.instance_1 = new lib.sprite10Fruit();
	this.instance_1.setTransform(493.7,53.5);

	// Layer 34
	this.instance_2 = new lib.sprite10Fruit();
	this.instance_2.setTransform(79.8,64);

	// Layer 33
	this.instance_3 = new lib.sprite10Fruit();
	this.instance_3.setTransform(668.5,121.5);

	// Layer 32
	this.instance_4 = new lib.sprite10Fruit();
	this.instance_4.setTransform(1500.5,57.5);

	// Layer 31
	this.instance_5 = new lib.sprite10Fruit();
	this.instance_5.setTransform(1067.5,93.5);

	// Layer 30
	this.instance_6 = new lib.sprite10Fruit();
	this.instance_6.setTransform(681,252.1);

	// Layer 29
	this.instance_7 = new lib.sprite10Fruit();
	this.instance_7.setTransform(354.7,174.3);

	// Layer 28
	this.instance_8 = new lib.sprite10Fruit();
	this.instance_8.setTransform(127.1,601);
  this.instance_8.shape.gotoAndStop(0);
  
	// Layer 27
	this.instance_9 = new lib.sprite10Fruit();
	this.instance_9.setTransform(195.2,518.4);
  this.instance_9.shape.gotoAndStop(0);
	// Layer 26
	this.instance_10 = new lib.sprite10Fruit();
	this.instance_10.setTransform(456.1,591);
  this.instance_10.shape.gotoAndStop(0);
	// Layer 25
	this.instance_11 = new lib.sprite10Fruit();
	this.instance_11.setTransform(883.7,609.4);
  this.instance_11.shape.gotoAndStop(0);
	// Layer 24
	this.instance_12 = new lib.sprite10Fruit();
	this.instance_12.setTransform(1080.7,634.8);
  this.instance_12.shape.gotoAndStop(0);
	// Layer 23
	this.instance_13 = new lib.sprite10Fruit();
	this.instance_13.setTransform(1458.7,567.3);
  this.instance_13.shape.gotoAndStop(0);
	// Layer 22
	this.instance_14 = new lib.sprite10Fruit();
	this.instance_14.setTransform(1634.8,548.6);
  this.instance_14.shape.gotoAndStop(0);
	// Layer 21
	this.instance_15 = new lib.sprite10Fruit();
	this.instance_15.setTransform(2227.6,547.6);
  this.instance_15.shape.gotoAndStop(0);
	// Layer 20
	this.instance_16 = new lib.sprite10Fruit();
	this.instance_16.setTransform(2020.4,231.7);

	// Layer 19
	this.instance_17 = new lib.sprite10Fruit();
	this.instance_17.setTransform(2310,100);

	// Layer 18
	this.instance_18 = new lib.sprite10Fruit();
	this.instance_18.setTransform(1130.3,220.2);

	// Layer 17
	this.instance_19 = new lib.sprite10Fruit();
	this.instance_19.setTransform(902.5,53.5);

	// Layer 16
	this.instance_20 = new lib.sprite10Fruit();
	this.instance_20.setTransform(1283.2,119.3);

	// Layer 15
	this.instance_21 = new lib.sprite10Fruit();
	this.instance_21.setTransform(1533.6,213.4);

	// Layer 14
	this.instance_22 = new lib.sprite10Fruit();
	this.instance_22.setTransform(1674.5,190.5);

	// Layer 13
	this.instance_23 = new lib.sprite10Fruit();
	this.instance_23.setTransform(2301.4,593.1);
  this.instance_23.shape.gotoAndStop(0);
	// Layer 12
	this.instance_24 = new lib.sprite10Fruit();
	this.instance_24.setTransform(1984.1,577.8);
  this.instance_24.shape.gotoAndStop(0);
	// Layer 11
	this.instance_25 = new lib.sprite10Fruit();
	this.instance_25.setTransform(1826.1,531.5);
  this.instance_25.shape.gotoAndStop(0);
	// Layer 10
	this.instance_26 = new lib.sprite10Fruit();
	this.instance_26.setTransform(1185.6,570.4);
  this.instance_26.shape.gotoAndStop(0);
	// Layer 9
	this.instance_27 = new lib.sprite10Fruit();
	this.instance_27.setTransform(41,548.5);
  this.instance_27.shape.gotoAndStop(0);
	// Layer 8
	this.instance_28 = new lib.sprite10Fruit();
	this.instance_28.setTransform(200.6,201.4);

	// Layer 7
	this.instance_29 = new lib.sprite10Fruit();
	this.instance_29.setTransform(748.9,540.3);
  this.instance_29.shape.gotoAndStop(0);
	// Layer 6
	this.instance_30 = new lib.sprite10Fruit();
	this.instance_30.setTransform(548.6,576.9);
  this.instance_30.shape.gotoAndStop(0);
	// Layer 5
	this.instance_31 = new lib.sprite10Fruit();
	this.instance_31.setTransform(1357.7,584.3);
  this.instance_31.shape.gotoAndStop(0);
	// Layer 4
	this.instance_32 = new lib.sprite10Fruit();
	this.instance_32.setTransform(1942.4,123.5);

	// Layer 3
	this.hit = new lib.sprite24();
	this.hit.setTransform(1495.7,229.1);
	this.hit.alpha = 0.01;

	// Layer 2
	this.bg = new lib.sprite22();

	// Layer 1
	this.bgVector = new lib.sprite15();
  
	this.addChild(this.bgVector,this.bg,this.hit,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance_0,this.arm1,this.hand1,this.joint1,this.body,this.arm2,this.hand2,this.joint2);
	var self = this, num=0;
	function addFruit(shapeFrame)
  {
    num++;
    self["fruit" + num] = new lib.sprite7FruitShape(); //body.basket.fruitContainer.attachMovie("FruitShape", "fruit" + body.basket.fruitContainer.getNextHighestDepth(), body.basket.fruitContainer.getNextHighestDepth());
    self.body.basket.fruitContainer.addChild(self["fruit" + num]);
    
    self["fruit" + num].gotoAndStop(shapeFrame);
    self["fruit" + num].x = stage.mouseX/ratio - self.x - self.body.x - self.body.basket.x - self.body.basket.fruitContainer.x;
    self["fruit" + num].y = Math.random() * 10 - 5;
    self["fruit" + num].rotation = Math.random() * 140 - 70;
    ++score;
    self.body.basket.scoreFld.text = String(score);
    self.parent.starPoints.score();
    self.parent.counting.gotoAndStop(self.parent.counting.currentFrame + 1);
    self.body.mouth.play();
  } // End of the function
  function drag(clip)
  {
    clip.x = stage.mouseX/ratio  - self.x;
    clip.y = stage.mouseY/ratio  - self.y;
    if (stage.mouseX/ratio  >= 0)
    {
        if (stage.mouseX/ratio  > 500)
        {
            clip.x = 500 - self.x;
        } // end if
    }
    else
    {
        clip.x = -self.x;
    } // end else if
    if (stage.mouseY/ratio - self.parent.y >= 0)
    {
        if (stage.mouseY/ratio  > 336)
        {
            clip.y = 336 - self.y;
        } // end if
    }
    else
    {
        clip.y = -self.y;
    } // end else if
  } // End of the function
  function spring(clip, targetX, targetY)
  {
    clip.springing = true;
    clip.accelX = (targetX - clip.x) * k;
    clip.accelY = (targetY - clip.y) * k;
    clip.velX = clip.velX + clip.accelX;
    clip.velY = clip.velY + clip.accelY;
    clip.velX = clip.velX * damp;
    clip.velY = clip.velY * damp;
    clip.x = clip.x + clip.velX;
    clip.y = clip.y + clip.velY;
    clip.speed = Math.sqrt(clip.velX * clip.velX + clip.velY * clip.velY);
    if (clip.speed > 40)
    {
        clip.flying = true;
    } // end if
  } // End of the function
  function fly(clip)
  {
    clip.springing = false;
    clip.flying = true;
    clip.velY = clip.velY + gravity;
    clip.x = clip.x + clip.velX;
    clip.y = clip.y + clip.velY;
    clip.speed = Math.sqrt(clip.velX * clip.velX + clip.velY * clip.velY);
  } // End of the function
  function coordinate(clip)
  {
    clip.coordinates.x = clip.x + self.x;
    clip.coordinates.y = clip.y + self.y
  } // End of the function
  
  var maxWidth = 12;
  var minWidth = 3;
  var width1 = 10;
  var width2 = 10;
  var sag = 50;
  var r = 20;
  var k = 3.000000E-001;
  var damp = 6.000000E-001;
  var i = 0;
  var wait = 0;
  var gravity = 2;
  var score = 0;
  var rightLimit = 2358;
  var downLimit = 738;
  var sndYeah1 = playSound("sound2yeah1wav");sndYeah1.stop();
  var sndYeah2 = playSound("sound1yeah2wav");sndYeah2.stop();
  //var bgBitmap = new flash.display.BitmapData(rightLimit, downLimit, false, 4.294967E+009);
  // bg.attachBitmap(bgBitmap, bg.getNextHighestDepth());
  //bgBitmap.draw(bgVector);
   
  this.init = function(){
   maxWidth = 12;
   minWidth = 3;
   width1 = 10;
   width2 = 10;
   sag = 50;
   r = 20;
   k = 3.000000E-001;
   damp = 6.000000E-001;
   i = 0;
   wait = 0;
   gravity = 2;
   score = 0;
   rightLimit = 2358;
   downLimit = 738;   
  
   this.joint2.setTransform(2219.40,220.35);
	 this.hand2.setTransform(2206.4,226.5);
   this.body.setTransform(2169,252.3);
   this.joint1.setTransform(2126.95,222.85);
   this.hand1.setTransform(2133.8,273.6);
   for(var i = 0; i <= 32; i++) this["instance_" + i].visible = true;
   this.body.basket.fruitContainer.removeAllChildren();
   this.hand1.velX = this.hand1.velY = this.hand2.velX = this.hand2.velY = this.body.velX = this.body.velY = this.joint1.velX = this.joint1.velY = this.joint2.velX = this.joint2.velY = 0;
   this.hand1.coordinates = new cjs.Point();
   this.hand2.coordinates = new cjs.Point();
   this.body.basket.scoreFld.text = String(score);
   this.x = 500 - rightLimit;
   this.y = 336 / 2 - (this.body.y + this.hand1.y + this.hand2.y) / 3;
   this.hand1.holding = this.hand1.dragging = this.hand1.springing = this.hand2.holding = this.hand2.dragging = this.hand2.springing = undefined;
   _root.counting.gotoAndStop(0);
   this.on("tick", vineTime);   
  }
  this.init();
  var charSound, bodyX, bodyY, del3X, del3Y,dist3, radians, degrees, del1X, del1Y,dist1,target1X,target1Y,target2X,target2Y,radians1, del2X, del2Y, radians2,targetScrollX,targetScrollY;
  
  function vineTime(evt)
  {
    if (Math.random() * 100 < 1)
    {
        self.body.mouth.Reye.play();
        self.body.mouth.Leye.play();
    } // end if
    coordinate(self.hand1);
    coordinate(self.hand2);
    if (Math.abs(stage.mouseX/ratio - self.x - self.body.x - self.body.basket.x) < 15 && Math.abs(stage.mouseY/ratio - self.y - self.body.y - self.body.basket.y  - 30) < 20)
    {
        var charSound = Math.round(Math.random() * 3);
        if (self.hand1.holding && self.hand1.dragging)
        {
            if (charSound >= 2)
            {
                //sndYeah2.play();
            }
            else
            {
                //sndYeah1.play();
            } // end else if
            addFruit(self.hand1.shape.currentFrame);
            self.hand1.holding = false;
            self.hand1.gotoAndStop(0);
        } // end if
        if (self.hand2.holding && self.hand2.dragging)
        {
            if (charSound >= 2)
            {
                //sndYeah2.play();
            }
            else
            {
                //sndYeah1.play();
            } // end else if
            addFruit(self.hand2.shape.currentFrame);
            self.hand2.holding = false;
            self.hand2.gotoAndStop(0);
        } // end if
    } // end if
    if (self.body.y > 800)
    {
         evt.remove(); //delete onEnterFrame;
         self.parent.gotoAndPlay("lose");
         self.parent.starPoints.lose();
    } // end if
    if (!(self.hand1.dragging && !self.hand2.springing))
    {
        if (!((!self.hit.hitTest(self.hand1.coordinates.x - self.x - self.hit.x, self.hand1.coordinates.y - self.y - self.hit.y) || self.hand1.dragging) && self.hand2.springing || self.hand1.holding))
        {
            self.hand1.gotoAndStop(1);
            self.hand1.springing = false;
        }
        else
        {    
            spring(self.hand1, self.body.x - r, self.body.y + 75);
        } // end else if
    }
    else
    {   
        drag(self.hand1);
    } // end else if
    if (!(self.hand2.dragging && !self.hand1.springing))
    {  
        if (!((!self.hit.hitTest(self.hand2.coordinates.x - self.x - self.hit.x, self.hand2.coordinates.y - self.y - self.hit.y) || self.hand2.dragging) && self.hand1.springing || self.hand2.holding))
        {   
            self.hand2.gotoAndStop(1);
            self.hand2.springing = false;
        }
        else
        {   console.log("spring hand2");
            spring(self.hand2, self.body.x + r, self.body.y + 75);
        } // end else if
    }
    else
    {   
        drag(self.hand2);
    } // end else if
    bodyX = (self.hand1.x + self.hand2.x) / 2;
    bodyY = sag + (self.hand1.y + self.hand2.y) / 2;
    if (!self.body.dragging)
    {   
        spring(self.body, bodyX, bodyY);
    }
    else
    {  
        drag(self.body);
    } // end else if
    del3X = self.hand1.x - self.hand2.x;
    del3Y = self.hand1.y - self.hand2.y;
    dist3 = Math.sqrt(del3X * del3X + del3Y * del3Y);
    radians = Math.atan(del3Y / del3X);
    degrees = 180 * radians / 3.141593E+000;
    if (dist3 >= 200)
    {
        sag = 0;
        self.body.rotation = self.body.rotation + (degrees - self.body.rotation) / 4;
    }
    else
    {
        if (dist3 >= 50)
        {
            sag = 100 - dist3 / 2;
        }
        else
        {
            sag = 75;
        } // end else if
        self.body.rotation = self.body.rotation - self.body.rotation / 8;
    } // end else if
    self.body.basket.rotation = - self.body.rotation;
    radians = 3.141593E+000 * self.body.rotation / 180;
    target1X = (self.hand1.x + (self.body.x - r * Math.cos(radians))) / 2;
    target1Y = (self.hand1.y + (self.body.y - r * Math.sin(radians))) / 2;
    target2X = (self.hand2.x + (self.body.x + r * Math.cos(radians))) / 2;
    target2Y = (self.hand2.y + (self.body.y + r * Math.sin(radians))) / 2;
    spring(self.joint1, target1X, target1Y);
    spring(self.joint2, target2X, target2Y);
    del1X = self.hand1.x - (self.body.x - r * Math.cos(radians));
    del1Y = self.hand1.y - (self.body.y - r * Math.sin(radians));
    dist1 = Math.sqrt(del1X * del1X + del1Y * del1Y);
    radians1 = Math.atan(del1Y / del1X);
    if (del1X >= 0)
    {
        radians1 = radians1 + 3.141593E+000;
    } // end if
    self.hand1.rotation = 180 * radians1 / 3.141593E+000;
    width1 = maxWidth - dist1 / 30;
    if (width1 < minWidth)
    {
        width1 = minWidth;
    } // end if
    del2X = self.hand2.x - (self.body.x + r * Math.cos(radians));
    del2Y = self.hand2.y - (self.body.y + r * Math.sin(radians));
    dist2 = Math.sqrt(del2X * del2X + del2Y * del2Y);
    radians2 = Math.atan(del2Y / del2X);
    if (del2X >= 0)
    {
        radians2 = radians2 + 3.141593E+000;
    } // end if
    self.hand2.rotation = 180 * radians2 / 3.141593E+000;
    width2 = maxWidth - dist2 / 30;
    if (width2 < minWidth)
    {
        width2 = minWidth;
    } // end if
    self.arm1.graphics.clear();
    self.arm1.graphics.beginStroke("rgb(96, 54, 4)").setStrokeStyle(width1 + 4);
    self.arm1.graphics.moveTo(self.body.x - r * Math.cos(radians), self.body.y - r * Math.sin(radians));
    self.arm1.graphics.curveTo(self.joint1.x, self.joint1.y, self.hand1.x, self.hand1.y);
    self.arm1.graphics.beginStroke("rgb(255, 153, 0)").setStrokeStyle(width1); 
    self.arm1.graphics.moveTo(self.body.x - r * Math.cos(radians), self.body.y - r * Math.sin(radians));
    self.arm1.graphics.curveTo(self.joint1.x, self.joint1.y, self.hand1.x, self.hand1.y);
    self.arm2.graphics.clear();
    self.arm2.graphics.beginStroke("rgba(96, 54, 4, 1)").setStrokeStyle(width2 + 4); 
    self.arm2.graphics.moveTo(self.body.x + r * Math.cos(radians), self.body.y + r * Math.sin(radians));
    self.arm2.graphics.curveTo(self.joint2.x, self.joint2.y, self.hand2.x, self.hand2.y);
    self.arm2.graphics.beginStroke("rgb(255, 153, 0)").setStrokeStyle(width2);
    self.arm2.graphics.moveTo(self.body.x + r * Math.cos(radians), self.body.y + r * Math.sin(radians));
    self.arm2.graphics.curveTo(self.joint2.x, self.joint2.y, self.hand2.x, self.hand2.y);
    targetScrollX = 500 / 2 - (self.body.x + self.hand1.x + self.hand2.x) / 3;
    targetScrollY = 336 / 2 - (self.body.y + self.hand1.y + self.hand2.y) / 3;
    if (targetScrollX >= 500 - rightLimit)
    {
        if (targetScrollX > 0)
        {
            targetScrollX = 0;
        } // end if
    }
    else
    {
        targetScrollX = 500 - rightLimit;
    } // end else if
    if (targetScrollY >= 336 - downLimit)
    {
        if (targetScrollY > 0)
        {
            targetScrollY = 0;
        } // end if
    }
    else
    {
        targetScrollY = 336 - downLimit;
    } // end else if
    self.x = self.x + Math.round((targetScrollX - self.x) / 8);
    self.y = self.y + Math.round((targetScrollY - self.y) / 8);
    ++wait;
 }
 this.hand1.on("mousedown",  function ()
 {
    if (!self.hand1.holding)
    {
        self.hand1.gotoAndStop(0);
    } // end if
    self.hand1.dragging = true;
    self.hand1.cursor = "none";
 });
 
 this.hand2.on("mousedown", function ()
 {
    if (!self.hand2.holding)
    {
        self.hand2.gotoAndStop(0);
    } // end if
    self.hand2.dragging = true;
    self.hand2.cursor = "none";
 });
 
 
 this.body.mouth.on("mousedown", function ()
 {
    self.body.dragging = true;
    //Mouse.hide();
 });
 stage.on("stagemouseup",  function ()
 {  
    scrollAllowed = true;
    self.hand1.dragging = self.hand2.dragging = self.body.dragging = false;
    self.hand1.cursor = self.hand2.cursor = self.body.mouth.cursor = "pointer"; //Mouse.show();
 });
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.1,-1.5,2421.8,744);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;