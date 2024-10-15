(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.WhenPigsFly = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{lose:2});
  _root = this;
	// timeline functions:
	this.frame_0 = function(){
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;	
	}
	this.frame_1 = function(){this.stop()}
	this.frame_2 = function() {
		playSound("sound59");
	}
  this.frame_21 = function(){
    this.starPoints.lose();
    this.gotoAndStop(1); 
    this.camera.init();
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(19).call(this.frame_21));

	// Layer 5
	this.instance = new lib.sprite56();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(22));

	// Layer 4
	this.instance_1 = new lib.shape55("synched",0);
	this.instance_1.setTransform(444.7,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(22));

	// Layer 3
	this.starPoints = new lib.sprite45();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(22));

	// Layer 2
	this.camera = new lib.sprite19();

	this.timeline.addTween(cjs.Tween.get(this.camera).to({_off:true},21).wait(1));

	// Layer 1
	this.instance_2 = new lib.shape18("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-220,514,570);


// symbols:
(lib.image54 = function() {
	this.initialize(img.image54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite58 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image54(); 
	this.shape.setTransform(-45, -7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape51 = function() {
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


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape44 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3B3B3B").ss(1,1,1).p("AAsg/QAIBXg8A2IgkgUQAzgyAChVg");
	this.shape.setTransform(-9.5,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA6QAzgyAChVIAjAOQAIBXg8A2g");
	this.shape_1.setTransform(-9.5,-1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#874747").ss(1,1,1).p("ABhBLIgIADIgBABQghAOgvgPQgugPgegeQgfgdAEggQADgjAngPQAmgPAxAUQAeALAVAP");
	this.shape_2.setTransform(-8.6,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB4B4").s().p("AgFBOQgwgPgfgeQgegdADggQADgjAngPQAngPAwAUQAfALAUAPIADACIAUASQAXAagDAfQgDAdgcAQIgHADIgCABQgQAHgTAAQgUAAgWgIg");
	this.shape_3.setTransform(-7.1,-0.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-9.4,22.6,17.4);


(lib.shape42 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("AgPAFIAFgFIAEgDIADgCIAHgFIAEgBIAGAAIAAAAQAFACgCAFIgJAIQgGAFgEACIgLABQgEgCACgFg");
	this.shape.setTransform(-2.7,2.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.749)").s().p("AgCAHIgEAAIgIgCQgDgCABgDIAJgFIAKgBIALACQAEADgCABIAAABIgEADIgDACIgJABg");
	this.shape_1.setTransform(3.1,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-0.8,9.4,4.3);


(lib.shape41 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAATIgCgCIgDgEIgEgKIgBgNQACgIAFgBQADgBADAFQAEAFACAJQACAGgCAHIAAABIgDAGIgCABg");
	this.shape.setTransform(-2.4,1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAASIgCgCIgCgDQgDgEgBgGQgCgGABgHQACgHAEgBQADgBADAFIAGANQACAGgCAGIAAACIgDAFIgCABg");
	this.shape_1.setTransform(2.5,-1.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.1,7.2,6.2);


(lib.shape39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AAUh9IABgBIAHgGIAEgDQAXgLAWAdQAHALAEANIAGATIABAAIAAADIAEANIAIAnIgWAHIgYAJIgKADQgRAHgRgCIgCAAIgBAAIgEgIIgBgGIgEgcIgBgXIAAgDIAAgKQABgUAGgVIAHgJgAAOAFIgGABIgWABIgkgGQgRgDgPgJIgMgIIgJgJIgCgEAA2AfIgBAIIgBAoQAAATgOARQgOASgYAGIgxgCQgVgKgLgOIgNgZQAGgTASgPQAQgPAcgKQAbgJAZADQARABALAHgAA9gDIgBADQgFAPgBAQAheBYIgDgHQgIgRgBgVQAAgTAEgUIAIgX");
	this.shape.setTransform(0.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("AhKAvQgJgRAAgVQAAgRADgUIAJgZIALAIQAQAJARAFIAiAGIAYgBIAFgBIAAAAIABAAIACAAQARACASgIIAKgEIgCAEQgEAQgBAQQgLgHgSgBQgYgDgcAJQgcAIgPAPQgSAPgGATg");
	this.shape_1.setTransform(-1.3,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#763838").s().p("AgUATQgEgDgEgGQgDgGABgEQACgGAFgCIAKABIAIAIQADAGgCAGQAAAGgFACgAANADQgCgDgBgCIAAgDIAAgEIACgGQADgFAFAAQAEAAADAEIAEAHIAAAEQAAAFgDADIgHAFQgFAAgDgFg");
	this.shape_2.setTransform(6,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB4B4").s().p("AgHA9QgRgFgPgJIgMgJIgJgJIgCgDQABgmB8g2IgCACIgHAKQgGAVgBAUIAAAJIAAAEIABAUIAEAcIABAHIAEAKIAAAAIgGABIgYAAg");
	this.shape_3.setTransform(-3.3,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD4A4A").s().p("AglBIIgCgBIgBAAIgEgJIgBgHIgEgcIgBgWIAAgEIAAgHQABgVAGgUIAHgKIACgCIABgBIAHgGIAFgCQAVgLAWAcQAGALAEANIAHATIAAABIABADIADALIAIAmIgWAIIgXAJIgIAEQgPAGgOAAIgGAAgAgjACQgBAGADAGQADAGAFADIAKACQAGgCAAgGQACgGgDgGIgJgIIgJgBQgFACgCAEgAAGgLIgBAGIAAAEIAAABQAAAEACADQAEAFAEAAIAIgFQADgFAAgDIgBgEIgDgHQgDgEgEAAIgBAAQgFAAgDAFg");
	this.shape_4.setTransform(6.5,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B51600").s().p("AgcA4QgVgKgLgOIgNgZQAGgRASgPQAPgPAcgKQAcgJAYADQASABALAHIgBAIIgCAoQAAARgNARQgOASgbAGg");
	this.shape_5.setTransform(-1.1,9.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.2,21.5,27.9);


(lib.shape38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AAXhcIAAgBIAJgGIAFgCQAagJAZAeQAIAMAEANIAHATIABABIAAADIAEANIAJAlIgZAGIgGACIggAJIgnADIgCgBIgCAAIgEgKIgEgQIgCgQIAAgCIgBgVIAAgDIAAgKQABgUAIgVIAHgJgAAPAmIgFAAIgbgBIgogIIgBAAQgTgHgRgKIgNgKIgKgHIgDgEAg5AdIgFADQgTAJgGALQgCgCgCgCQgNgJgDgLIgCgVIACgFABaAaIACAJQADALgOAKQgOALggAFIg7ADIgqgLIgVgMABkA+QAFAVgJAV");
	this.shape.setTransform(2.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB4B4").s().p("AAfBAIgmgHIgBgBQgTgGgSgLIgNgJIgKgJIgDgEQACgmCNgsIgDACIgHAJQgIAUgBAVIAAAJIAAAEIABATIAAABIADATIAEAQIAEAKIAAAAIgGABg");
	this.shape_1.setTransform(-2.4,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#763838").s().p("AgXARIgBAAIgIgJQgDgHABgEQACgFAGgCIAKACIAKAIIACAMIgBADQgBAEgFABIgCAAQgFAAgFgDgAAOAEQgCgDAAgCIgBgDIABgEIABgGQAEgFAFAAQAGAAADAFIAEAHIAAAEQAAAEgDAEQgDAEgGABQgFgBgEgFg");
	this.shape_2.setTransform(8.2,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AgHAUQgMgIgEgMIgCgTIACgFIANAKQAQAKATAFIABAAIgGADQgTAKgDALIgFgFg");
	this.shape_3.setTransform(-5.9,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD4A4A").s().p("AgtBGIgBAAIgDgKIgFgQIgCgSIAAgCIgBgVIAAgDIAAgIQABgUAIgVIAHgJIADgBIABgBIAIgGIAEgCQAZgJAZAeQAHAMAEANIAIATIAAABIABACIAEAMIAJAnIgZAGIgGACIgeAJIgnADgAgoABQgBAGAEAHIAHAJIACAAQAFAEAGgBQAGgBABgEIAAgDIgBgMIgKgIIgLgCQgGACgCADgAAHgIIgBAGIgBACIABADQAAAEACADQAFAFAEABQAGgBADgEQAEgEAAgGIgBgCIgEgHQgDgFgGAAIAAAAQgFAAgEAFg");
	this.shape_4.setTransform(8.8,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B51600").s().p("AhFANIgUgLQAFgJATgKIAGgDIAoAIIAaABIAGAAIAAgBIABAAIACABIAngDIAggJIACAKQADAKgOAIQgOAMggAEIg6ADg");
	this.shape_5.setTransform(2.7,4.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-11,24.3,20.9);


(lib.shape37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AAXheIAAgBIAJgFIAFgCQAagIAZAeIAMAaIAHATIABAAIAAAEIAEANIAJAlIgZAGIgmAJIgnACIgCAAIgBAAIgBAAAAPAjIgEgJQgFgRgBgQIgBgXIAAgDIAAgKQABgUAIgUIAHgJIADgCAh4gNIADADQAKAKANAHQARALATAHQATAHAWACIAbACIAFAAABwAxQADAfgPAY");
	this.shape.setTransform(2.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#763838").s().p("AgXAQIgJgKQgDgGABgEQACgGAGgBIAKACQAHAEADAFIACALQgBAHgGABIgCABQgFAAgFgEgAAOAEQgCgDAAgCIgBgDIABgFIABgGQAEgEAFAAQAGABADAEIAEAIIAAADQAAAEgDAEQgDAFgGAAQgFgBgEgFg");
	this.shape_1.setTransform(8.2,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB4B4").s().p("AAfA/QgWgCgRgHQgTgGgSgMQgNgHgKgMIgDgDQACgmCNgoIgDABIgHAJQgIAUgBAUIAAAKIAAAEIABAUQACATAFAQIAEAJIAAABIgGAAg");
	this.shape_2.setTransform(-2.4,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD4A4A").s().p("AgtBGIAAAAIgBAAIAAgBIgDgJQgGgRgBgSIgBgXIAAgCIAAgJQABgUAIgUIAHgJIADgCIABgBIAIgFIAEgCQAZgIAZAeIALAaIAIATIAAAAIABACIAEANIAJAnIgZAGIgkAJIgnACgAgoABQgBAGAEAGIAJAKQAFAEAGgBQAHgBAAgHIgBgLQgEgHgGgCIgLgCQgGABgCAEgAAHgIIgBAGIgBADIABADQAAAEACADQAFAFAEABQAGAAADgFQAEgEAAgGIgBgCIgEgHQgDgEgGgBIgBAAQgEAAgEAEg");
	this.shape_3.setTransform(8.8,-3.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-10.6,24.3,21);


(lib.shape36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8F5656").ss(1,1,1).p("AAAgTQAGATgIAU");
	this.shape.setTransform(12.4,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#763838").ss(1,1,1).p("AAXhOIAAgBIAJgFIAFgCQAagJAZAeQAIALAEAOIAHATIABAAIAAADIAEAOIAJAlIgZAGIgGABIggAJIgnADIgCAAIgCAAIgEgKIgEgQIgCgTIAAgBIgBgTIAAgEIAAgJQABgVAIgUIAHgJgAAPA0IgFABIgbgCIgogHIgBgBQgTgGgRgLIgNgJIgKgJIgDgEAg5AsIgFACQgTAKgGALQgCgDgCgBQgNgJgDgLIgCgWIACgEABaAoIACAKQADAKgOALQgOALggAEIg7ADIgqgKIgVgM");
	this.shape_1.setTransform(2.5,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#763838").s().p("AgXARIgBAAIgIgJQgDgHABgEQACgFAGgCIAKACIAKAIIACAMIgBADQgBAEgFABIgCAAQgFAAgFgDgAAOAEQgCgDAAgCIgBgDIABgEIABgGQAEgFAFAAQAGAAADAFIAEAHIAAAEQAAAEgDAEQgDAEgGABQgFgBgEgFg");
	this.shape_2.setTransform(8.2,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AgHAUQgMgIgEgMIgCgTIACgFIANAKQAQAKATAFIABAAIgGADQgTAKgDALIgFgFg");
	this.shape_3.setTransform(-5.9,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEB4B4").s().p("AAfBAIgmgHIgBgBQgTgGgSgLIgNgJIgKgJIgDgEQACgmCNgsIgDACIgHAJQgIAUgBAVIAAAJIAAAEIABATIAAABIADATIAEAQIAEAKIAAAAIgGABg");
	this.shape_4.setTransform(-2.4,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FD4A4A").s().p("AgtBGIgBAAIgDgKIgFgQIgCgSIAAgCIgBgVIAAgDIAAgIQABgUAIgVIAHgJIADgBIABgBIAIgGIAEgCQAZgJAZAeQAHAMAEANIAIATIAAABIABACIAEAMIAJAnIgZAGIgGACIgeAJIgnADgAgoABQgBAGAEAHIAHAJIACAAQAFAEAGgBQAGgBABgEIAAgDIgBgMIgKgIIgLgCQgGACgCADgAAHgIIgBAGIgBACIABADQAAAEACADQAFAFAEABQAGgBADgEQAEgEAAgGIgBgCIgEgHQgDgFgGAAIAAAAQgFAAgEAFg");
	this.shape_5.setTransform(8.8,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B51600").s().p("AhFANIgUgLQAFgJATgKIAGgDIAoAIIAaABIAGAAIAAgBIABAAIACABIAngDIAggJIACAKQADAKgOAIQgOAMggAEIg6ADg");
	this.shape_6.setTransform(2.7,4.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-11,24.3,20.9);


(lib.shape35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AAViMIABgBIAHgGIAFgCQAZgLAYAcIALAZIAGASIABABIABADIADANQAGARADAVIgWAHIgCABIgjANQgTAHgSgBIgDgBIgBAAIgDgJIgBgCQgEgQgBgRIgBgWIAAgEIAAgJQABgVAHgUIAHgKgAAOgHIgFAAIgZABIgmgFQgSgFgQgKIgKgGIgMgLIgDgDAhcBfQAHgXAUgSQASgRAhgLQAfgLAeADQAVACANAIIAAAJIABAuQABAXgQAUQgPAVgfAHIg4gDQgZgMgOgPIgSgdIgEgJQgKgUgCgYQgBgXACgVIAJgeABcgbIgGAUQgEARgBAS");
	this.shape.setTransform(1.7,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#763838").s().p("AgVATQgFgDgEgGQgDgGABgEQACgGAFgCIAKACIAKAHQADAGgCAGQgBAGgFACgAANAEQgCgDAAgDIgBgDIABgEQAAgEABgCQAEgFAFAAQAFAAADAEIADAHIABAEQAAAFgDADQgDAFgFAAQgFAAgEgEg");
	this.shape_1.setTransform(7.1,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("AhXA3QgKgUgCgYQgBgVACgXIAJgeIAKAGQAQAKASAFIAmAFIAZgBIAFAAIAAgBIABAAIADABQASABATgHIAjgNIACgBIgGAUQgEATgBASQgNgIgVgCQgegDgfALQghAJgSARQgUASgHAXg");
	this.shape_2.setTransform(0.8,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB4B4").s().p("AgIA9QgSgFgQgJIgKgHIgMgLIgDgDQABgmCFg2IgCACIgHAKQgHAVgBAUIAAAJIAAAEIABAUQABARAEAQIABACIAEAKIAAAAIgGABIgbAAg");
	this.shape_3.setTransform(-2.8,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD4A4A").s().p("AgoBIIgCgBIgBAAIgDgJIgBgCQgEgQgCgRIAAgWIAAgEIAAgHQABgVAHgUIAHgKIACgCIABgBIAHgGIAFgCQAXgLAYAcIALAZIAGASIABABIABADIADALQAGARACAVIgVAHIgCABIghANQgQAGgPAAIgHAAgAglACQgBAGADAGQAEAGAFADIAKACQAGgCABgGQABgGgCgGIgKgHIgKgCQgFACgCAEgAAQgQQgFAAgEAFQgBACAAAEIgBAEIABABQAAAFACADQAEAEAFAAQAFAAADgFQADgFAAgDIgBgEIgDgHQgDgEgEAAIgBAAg");
	this.shape_4.setTransform(7.7,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B51600").s().p("AgeBBQgZgMgNgPIgSgdQAGgVAUgSQASgRAhgLQAggLAeADQAUACAOAIIAAAJIAAAuQABAVgPAUQgPAVgfAHg");
	this.shape_5.setTransform(1.2,11.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-12.2,22.9,30.8);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AAViPIgCACIgHAJQgHAVgBAUIAAAKIAAADIABAXQABARAFAQIAAABIAEAKIABAAIACAAQASACASgIIAWgIIgFAPQgFARgBATQgMgIgTgCQgcgEgeAMQgeALgSARQgTATgHAWIgEgIQgJgVAAgYQAAgXAEgWIAKgfAAPgLIgGABIgYABIgmgGIghgOIgLgHIgLgKIgDgEABMgZIANgFIAXgHIgIgnIgEgNIAAgDIgBAAIgGgTIgLgYQgXgdgZALIgFADIgHAGIgBABABBAaIgBAJIgCAvQAAAXgPAUQgPAVgdAHQggAIgUgLQgXgLgMgQIgOge");
	this.shape.setTransform(1.5,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB4B4").s().p("AgHA9IgigOIgLgIIgKgKIgEgDQACgmCCg2IgCACIgHAKQgGAVgCAUIAAAJIAAAEIABAUQABARAFARIABABIADAKIAAAAIgFABIgaAAg");
	this.shape_1.setTransform(-2.9,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#763838").s().p("AgVATQgFgDgDgGQgEgGACgEQABgGAGgCIAKABIAJAIIABALQgBAHgFACgAANADQgCgDAAgCIgBgDIABgEQAAgEABgCQADgFAFAAIAJAEIADAHIABADQAAAGgEADIgHAFQgFAAgEgFg");
	this.shape_2.setTransform(6.9,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(16,15,18,0.898)").s().p("AhUA5QgIgVgBgYQAAgVAEgYIAKgfIALAHIAiAOIAkAGIAagBIAFgBIAAAAIABAAIACAAQASACATgIIAVgIIgEAPQgFATgCATQgMgIgTgCQgcgEgdAMQgfAJgSARQgTATgHAWg");
	this.shape_3.setTransform(-0.2,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD4A4A").s().p("AgnBIIgCgBIgBAAIgDgJIgBgCQgFgQgBgRIgBgWIAAgEIAAgHQACgVAGgUIAHgKIACgCIABgBIAHgGIAGgCQAWgLAXAcIALAYIAHATIAAABIABADIADALIAIAmIgWAIIgOAFIgTAIQgQAGgPAAIgGAAgAglACQgBAGADAGQAEAGAEADIALACQAGgCABgGIgBgMIgJgIIgKgBQgGACgCAEgAAHgLQgCACABAEIgBAEIABABQAAAEACAEQAEAEAEAAIAIgFQAEgFgBgDIgBgEIgCgHIgJgEQgFAAgDAFg");
	this.shape_4.setTransform(7.4,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B51600").s().p("AggBAQgXgMgMgQIgOgdQAHgVATgSQASgRAfgMQAdgLAcADQATACAMAIIAAAKIgCAuQAAAWgQAUQgPAVgdAHQgOADgKAAQgQAAgMgGg");
	this.shape_5.setTransform(-0.1,12.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.2,22.6,31.5);


(lib.shape32 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AATg7IABgBIAGgGIAFgDQAWgLAVAcIAKAYIAGASIAAABIABADIADALIAIAmIgVAIIggAOQgRAIgQgCIgCAAIgBAAIAAAAIgDgKQgFgQgBgSIgBgWIAAgEIAAgHQABgVAHgVIAGgJgAANBHIgFABIgWABIgigEQgQgFgPgJIgTgRIgDgD");
	this.shape.setTransform(0.4,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#763838").s().p("AgTAUQgEgDgDgGQgDgGABgFQABgFAFgCIAJABIAJAHQACAGgBAGQgBAGgFACgAAMADQgCgDAAgCIgBgDIABgEIABgGQADgFAFAAIAHADIADAIIABADIgDAJIgHAFQgFAAgDgFg");
	this.shape_1.setTransform(5.2,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB4B4").s().p("AgHA+QgQgFgOgJIgUgQIgCgEQABgmB2g4IgCACIgGAKQgGAVgBAUIAAAKIAAADIABAVQABASAEAQIADAJIAAABIgFABIgXABg");
	this.shape_2.setTransform(-3.6,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD4A4A").s().p("AgjBIIgCAAIgBAAIAAAAIgDgKQgFgQgBgSIgBgWIAAgEIAAgHQABgVAHgVIAGgJIACgCIABgBIAGgGIAFgDQAUgLAVAcIAKAYIAGASIAAABIABADIADALIAIAmIgVAIIgeAOQgOAGgOAAIgFAAgAghACQgBAHADAGQADAGAEADIAKABQAFgCABgGQABgGgCgGIgJgHIgJgBQgFACgBADgAAGgLIgBAGIgBAEIABABQAAAEACADQADAFAFAAIAHgFIADgJIgBgDIgDgIIgHgDQgFAAgDAFg");
	this.shape_3.setTransform(5.7,-5.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#763838").ss(1,1,1).p("AAzgIIAAAHIgBAmQAAATgKAQQgJAQgSADQgUADgMgLQgOgNgIgPIgJgaIgCgIQgGgSAAgTIACgnIAJgkAA7g5IgEARIgEAgAgyAdQAEgSAMgMQALgNAUgGQASgGARAGQAMADAHAJ");
	this.shape_4.setTransform(-4.6,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.898)").s().p("Ag0A1QgGgTAAgUIACglIAJgkIAUAQQAOAJAOAFIAjAFIAXgBIgEARIgEAdQgHgIgMgEQgRgGgSAGQgUAHgLANQgMANgEASg");
	this.shape_5.setTransform(-4.6,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B51600").s().p("AgTAxQgOgMgIgPIgJgZQAEgSAMgNQALgNAUgHQASgGARAGQAMAEAHAIIAAAIIgBAlQAAAUgKAPQgJARgSACIgJABQgNAAgKgJg");
	this.shape_6.setTransform(-4.6,11.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-12.5,21.3,29.7);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AB5hJQAlBsAFAJQAbA4gFBEIgBAIIADgIIAAAAIAQggIATgfIAJgKIAPgOQAPgKATAFQASAFAFAPQAHARgCAUQgBATgEAKQgDALgLAVQgMAVgQALIgKAHIgSARIAAABQgMAOgEASIgIAYIgFAKIgQAbIgBACIgDADQgrAxg1ASQgsAOgxgHIgagFQgVgFgVgJQgFgBgagQQgbgQgIgIIgUgUIgbgeQgLgOgIgPQgJgQgGgRIgGgSIgEgKIgDgMIgKgrIgOhBIgDgZIAAAAIAAgBIAAgoIADglIAFgnIAIgkIABgDIAMgjIABgEQghAGgVgNIgDgDQgRgMADgZQADgcAJgRQAKgRgSgWQgSgWANgeQAJgXAdgJIAogEIAMADIgMAKQgMAMgCAQQgCAbAQAGIAMACQAbgBAMAaQAHAPgDAQQAFgSANgMIAWgRIAIgEIAlgLIAWgBQgOgQAFgVQAEgTAQgNIAbgUQAGgEgBgJIAAgBIgFgYQgCgKAFgGQAKgNASgBQASgBAQAHQAQAJAKANIAIAKQgJgGgPAAQgVAAgKAQIgCAHQgCAIAHAHIAXAaQAKANgEAVIgBAFQgFAQgIALQgJANgNAJIgCABIgBAAIAAAAIACABQASAHARAVIABABIAbAsIAPAbIAHALQARAjADASAgLlBQgOAMgDATIAAABQgBALAFAFQAFAFALAAQALgBAHgNIADgHIADgMAgQEtIACgRIAFgUIAEgNIAGgSIABgEIASggIABgCQALgQAOgJQANgJAWAEQARADALAPIAIAOIAEAUIABAQIgBASIgBAFIgIAlIgEAMIgBACQgHARgMALQgIAJgMAFIgFACIgJADAj2jRQgJASAIARQAIAQAPgFIADgBQAQgHABgUAjmh1IAGgKAg+kLIAIABIAJACIAIADAipjMQgBAGgDAHAkEBOIAAgB");
	this.shape.setTransform(1,-43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB4B4").s().p("AgFGnIgagFQgVgFgVgJQgFgBgagQQgbgQgIgIIgUgUIgbgeQgLgOgIgPQgJgQgGgRIgGgSIgEgKIgDgMIgKgrIgOhBIgDgZIAAgBIAAABIAAAAIAAgBIAAgoIADglIAFgnIAIgkIABgDIAMgjIABgEQghAGgVgNIgDgDQgRgMADgZQADgcAJgRQAKgRgSgWQgSgWANgeQAJgXAdgJIAogEIAMADIgMAKQgMAMgCAQQgCAbAQAGIAMACQAbgBAMAaQAHAPgDAQQAFgSANgMIAWgRIAIgEIAlgLIAWgBQgOgQAFgVQAEgTAQgNIAbgUQAGgEgBgJIAAgBIgFgYQgCgKAFgGQAKgNASgBQASgBAQAHQAQAJAKANIAIAKQgJgGgPAAQgVAAgKAQIgCAHQgCAIAHAHIAXAaQAKANgEAVIgBAFQgFAQgIALQgJANgNAJIgCABIgBAAIAAAAIACABQASAHARAVIABABIAbAsIAPAbIAHALQARAjADASIABABQAlBsAFAJQAbA4gFBEIgBAIIADgIIAAAAIAQggIATgfIAJgKIAPgOQAPgKATAFQASAFAFAPQAHARgCAUQgBATgEAKQgDALgLAVQgMAVgQALIgKAHIgSARIAAABQgMAOgEASIgIAYIgFAKIgQAbIgBACIgDADQgrAxg1ASQgeAJghAAQgQAAgOgCgAB5D7IgBAFIgIAlIgEAMIgBACQgHARgMALQgIAJgMAFIgFACIgJADIAJgDIAFgCQAMgFAIgJQAMgLAHgRIABgCIAEgMIAIglIABgFIABgSIgBgQIgEgUIgIgOQgLgPgRgDIgBgBIgKAAIAAAAIAAAAQgNAAgJAFIgCABQgOAJgLAQIgBACIgSAgIgBAEIgGASIgEANIgFAUIgCARIACgRIAFgUIAEgNIAGgSIABgEIASggIABgCQALgQAOgJIACgBQAJgFANAAIAAAAIAAAAIAKAAIABABQARADALAPIAIAOIAEAUIABAQgAjmh1IAGgKgAjmiiIAFgBIABAAIADgBQAQgHABgUQgBAUgQAHIgDABIgBAAIgFABIAAAAIgBAAQgJAAgGgLIAAAAIgBgBQgEgIAAgIQAAgJAFgKQgFAKAAAJQAAAIAEAIIABABIAAAAQAGALAJAAIABAAIAAAAgAiti/IAEgNIgEANgAg2kKIAJACIAIADIgIgDIgJgCIgIgBgAgJkMIAAAAIABAAQALgBAHgNIADgHIADgMIgDAMIgDAHQgHANgLABIgBAAIAAAAIgBAAIAAAAQgJAAgEgFIgBAAQgEgEAAgJIAAgDIAAgBQADgTAOgMQgOAMgDATIAAABIAAADQAAAJAEAEIABAAQAEAFAJAAIAAAAIABAAg");
	this.shape_1.setTransform(1,-43.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,-85.9,61.8,85.2);


(lib.shape29 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3B3B3B").ss(1,1,1).p("AgngpQAzgDArArIgOArQgpgqg2gDg");
	this.shape.setTransform(5.7,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2gDIAPgmQAzgDArArIgOArQgpgqg2gDg");
	this.shape_1.setTransform(5.7,-8.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#763838").ss(1,1,1).p("AAghcQAcAOADAiQACAhgRAkQgTAmgZAVQgWAVgUgIQgUgIgEghQgDggAMglQALgnAYgbQAVgdAdAQg");
	this.shape_2.setTransform(5,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB4B4").s().p("AgmBhQgUgIgEghQgDggAMglQALgnAYgbQAVgdAdAQQAcAOADAiQACAhgRAkQgTAmgZAVQgPAPgQAAQgGAAgFgCg");
	this.shape_3.setTransform(5,-6.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-16.9,12.8,19.9);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#763838").ss(1,1,1).p("AALidIgQAVIgJAPIgBABIgDAJIASgDIAQgCQAIgBAIAFQAJAFAGAIIAHAKIABAEQADAKgCAIQAAAIgFAJQgDAIgHAIIgKAIIgEACIgBABIgMAFIgLAAIgHAAIgGAAIgPgFIgFAQIAAAOIABAEIAAACQAIgDAGgFIAPgHIANgCIASABIAEABIACABIAKAEIAFAFIAIAKIAFARIABABIgBAQIgFAQIgGAJIgJAIIgQAHIgMADIgGAAIgOAAIgBgCIgLgDIgGgDIgJgIIgFgGIgBgCIgBABIgCAJIgCAMIAAADIAAACIAFASIAAAEIAMAQIAPAJIAOAGIAPACIANABIgPAHIgRAEIgQgCIgQgIIgPgNIgGgIIgFgIIgFgPIgDgSIABgRIAAAAIADgTIAIgQIABABIAGANIACADIAIANAg0ApIAAgBIgBABAg0AoIgBgCIgFgNIgCgTIAAgPIAEgSIAHgRIgDgFIgGgRIAAgSIAFgYQAEgQAEgGQAEgGANgcAgVhFIAHgJQAIgGAGgCQAJgDAIADQAKABACAJQAEAIgEAJQgEAJgIAFIgQACIgGgEIgIgHIgIgPIgDgQIADgRIADgJAgZgXIgCgBIgOgKIgIgKAgdANIABAMIACAGIADAJIABABIACAFIAFgHIACgDIAHgFIAEgDIABAAQAGgEAHgBIABAAIACAAIANACIAHADIAHAIQAFAKgDAHQgBAGgFAEIgFAEIgQAFIgQgEIgBAAIgMgKIgBgCIgHgK");
	this.shape.setTransform(0,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB4B4").s().p("AgPCjIgQgIIgPgOIgGgIIgFgHIgFgPIgDgSIABgRIAAAAIADgTIAIgQIABAAIAAgBIgBgBIgFgPIgCgSIAAgQIAEgRIAHgRIgDgFIgGgRIAAgRIAFgZQAEgQAEgGQAEgGANgcIAnAHIgQAVIgJAQIgBABIgDAJIASgEIAQgCQAIgBAIAGQAJAEAGAIIAHAKIABAFQADAJgCAJQAAAHgFAJQgDAIgHAIIgKAIIgEADIgBAAIgMAFIgLAAIgHAAIgGAAIgPgEIgCgBIgOgLIgIgKIAIAKIAOALIACABIgFAPIAAAOIABAEIAAACQAIgDAGgFIAPgHIANgCIASABIAEABIACABIAKAFIAFADIAIALIAFAQIABACIgBAQIgFAQIgGAJIgJAIIgQAHIgMADIgGAAIgOAAIgBgBIgLgFIgGgDIgJgHIgFgGIgBgDIgIgMIgCgEIgGgMIgBgBIABABIAGAMIACAEIAIAMIgBACIgCAJIgCAMIAAADIAAACIAFARIAAAFIAMAQIAPAJIAOAFIAPACIANACIgPAGIgRAFgAgGAfIgHAFIgCADIgFAGIAHALIABACIAMAKIABAAIAQAEIAQgFIAFgEQAFgEABgGQADgIgFgJIgHgIIgHgDIgNgCIgCAAIgBAAQgHABgGAFIgBAAgAgcAZIACAGIADAJIABABIACAEIgCgEIgBgBIgDgJIgCgGIgBgMgAgNg2IAIAHIAGAEIAQgDQAIgEAEgIQAEgKgEgHQgCgKgKgBQgIgCgJACQgGACgIAHIgHAJIgDgRIADgQIADgJIgDAJIgDAQIADARgAgkBGgAgZgWg");
	this.shape_1.setTransform(0,16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,0,13.3,33.1);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#271D41").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.shape20 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#44377B").s().p("EgoJAEqIAAn8QJvAkLcgYITjg9QLvgoHjADQKtAEJlBSIAAH8g");
	this.shape.setTransform(249,318.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#352758").s().p("Egn1AMVIAA05QAugoBDgnQCQhUBnAAQBbAABTA6QA6AnBJBWQBeBsASARQA9A6A0AAQAhAAB4hEID9iWQFwjZCYgHQCYgIBUAqQBUApA/ApQA+AoBkBJQA3ApBUBJQCrB+BjBhQAdAXAhAGIBqAFQDCgcCkhaQBQgtAcgLQA7gYBCAAQBCAABtAoQBhAiAxAFQCbgtCDhCQBGgjB9hNQBnhAA6gXQBYgjBiAAQB/AAC5BFQA1AUA3AZIAAUugAUTkyIAKAAIgIAAg");
	this.shape_1.setTransform(250,268);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7155B3","#583C88"],[0,1],0,278.3,0,-278.1).s().p("EgnDArvMAAAhXeMBOHAAAMAAABXeg");
	this.shape_2.setTransform(250,60);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-220,514,568);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#583C88").s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.shape17 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D7900").ss(2,1,1).p("AAYBxIgDgIQALhmBDhYAAMB4IgEguIANAfIgCAWAABBzQgCgngIgkQgThNgohCAA1h+QgwBmADBiQgIgTgJgPQgkgxg1gK");
	this.shape.setTransform(-1.8,-36.9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1A3300").ss(4,1,1).p("AAMB4IgEguIANAfIgCAWAAYBxIgDgIQALhmBDhYAA1h+QgwBmADBiQgIgTgJgPQgkgxg1gKAhEhnQAoBCATBNQAIAkACAn");
	this.shape_1.setTransform(-1.8,-36.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.251)").s().p("AAvEEQgLgFgihOQgghPgYhvQgYhzAfhEQAfhFAYAGIAaAFQgTACAAATIAFALIAGAHQgFAFAAALIAEALIABABQgOAFAAAQQABAGAEAFQADAEAhABQggAIAAAJIAEALIAJAIQgQADAAASQAAAGAEAFIAhACQguAEAAAQIAFALIAFAFQgEAGAAAJQACALAwAFQg1AFAAAMIAFALQAGAKANABQgNAEAAAQIAjAJQgrAGAAAQIAFALIAGAHQgFAFAAAKIAEALIAiADQgyAEAAASIAFALIAeAGQgaAEAAAFIAEAMQAEAFAYgBQgOAJAAAFQAAAEAHAJQgCANAQAAIAGgBQgEAigJAAIgDgBg");
	this.shape_2.setTransform(-3,0.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#552200").ss(1,1,1).p("ABQgxIgiDnQgMBQgOgHQgOgHgfhMQgghLgThzQgSh0ALg4QALg4A0gHQAxgHAkAdQAkAdgVCZg");
	this.shape_3.setTransform(-0.1,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAUD/QgOgHgfhMQgghLgThzQgSh0ALg4QALg4A0gHQAxgHAkAdQAkAdgVCZIgiDnQgLBJgNAAIgCAAg");
	this.shape_4.setTransform(-0.1,0.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-49.7,20.5,76);


(lib.shape16 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAHgGAGAAQAHAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgHAAQgGAAgHgGg");
	this.shape.setTransform(7,3.7);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AgaAcQgLgLAAgRQAAgPALgMQALgMAPAAQAQAAALAMQALAMAAAPQAAARgLALQgLAMgQAAQgPAAgLgMg");
	this.shape_1.setTransform(7,-5.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#41280E").ss(1,1,1).p("AgCAhQgPgpAagY");
	this.shape_2.setTransform(-0.7,-14.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#912D22").ss(1,1,1).p("Ag3ADQA5AMA2gV");
	this.shape_3.setTransform(-0.6,-10.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2E0D0A").ss(1,1,1).p("Ahdh3QAwgbA+AFQBKAEAiArQAgArgHA5QgFAngUAfAhdh3IgPAJQg0AlALBFQAKBEApAnQApAoA5AAQA7AAApgoIAZgb");
	this.shape_4.setTransform(-0.1,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA2222").s().p("AhUBcQgqgogJhEQgLhFA0gkIAOgJQgOAdAGAnQAJBDAqAnQAnApA7AAQArAAAigVIgYAcQgpAng7AAQg5AAgpgng");
	this.shape_5.setTransform(-1.5,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D22D2D").s().p("AhKBPQgqgngJhDQgGgnAOgdQAwgcBBAFQBIAFAhAqQAhArgHA5QgGAngUAfQgiAVgrAAQg5AAgpgpg");
	this.shape_6.setTransform(2.1,-3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.4,-17.6,30.4,31.3);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3B3B3B").ss(1,1,1,3,true).p("AB0AEIgVgEQhEgThWACIgyABAiYhEIBYAHQBJACA7ARIAZAJAgTAaQBNgGA+APIAPADAAsBDQAxgGAqAFIAGABIAMAC");
	this.shape.setTransform(-21.4,-7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3B3B3B").ss(1,1,1).p("AD0BGQAZAQADAMQADARg3gMIgogFIgIAAIgbABIgyAIQhHAPgogCQgqgCAAgLQAAgLAtgLQAbgGAogMIgSACIiDAIQgygFACgLQABgMA1gIIBQgPIgMAAQhjAIg5gIQg6gHADgNQACgKBAgFIBDgHIhzgKQg8gMADgNQADgMBEgCIA5gDIhDgLQg5gPAFgMQADgLBAACQBAACBmgGIA4ACIAfAFQAoAJAeAWIARANQAmAgAAAQIgBADQAUARABAKQAAADgCACQASAPABAKIAAACQAWAQACALg");
	this.shape_1.setTransform(-22.4,-7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQB4QgqgCAAgLQAAgLAtgLQAbgGAogMIgSACIiDAIQgygFACgLQABgMA1gIIBQgPIgMAAQhjAIg5gIQg6gHADgNQACgKBAgFIBDgHIhzgKQg8gMADgNQADgMBEgCIA5gDIhDgLQg5gPAFgMQADgLBAACQBAACBmgGIA4ACIAfAFQAoAJAeAWIARANQAmAgAAAQIgBADQAUARABAKQAAADgCACQASAPABAKIAAACQAWAQACALIAAABQAZAQADAMQADARg3gMIgogFIgIAAIgbABIgyAIQg+ANgnAAIgKAAgACRBCIAGABIAMABIgMgBIgGgBIgCgBQgSgCgUAAIAAAAIAAAAQgXAAgZADIAAAAIgDABIADgBIAAAAQAZgDAXAAIAAAAIAAAAQAUAAASACIACABgACBAiIAQAEIgQgEIgEgBIgCAAQgpgJgyAAIAAAAIAAAAIgpACIApgCIAAAAIAAAAQAyAAApAJIACAAIAEABIAAAAgABpAAIAVAEIgVgEIgEgBIgEgBIAAAAIAAAAIgEgBQg5gOhEAAIgBAAIAAAAIgRAAIgxABIAxgBIARAAIAAAAIABAAQBEAAA5AOIAEABIAAAAIAAAAIAEABIAEABgAg3g9QBJACA7ARIAaAJIgagJQg7gRhJgCIhYgHg");
	this.shape_2.setTransform(-22.4,-7.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.6,-19.9,54.5,24.1);


(lib.shape10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,5.5,5.5);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1.5,1,1,3,true).p("AlagnQAJgjAcgdQAqgpA7AAQAYAAAVAHIAGgHQAqgpA7AAQAiAAAaANQAogkA4AAQA7AAApAqIAZAgQAxAFAjAkQAcAcAKAjAlagnQgEARAAAUQAAA5ApAqQAqAqA7AAIAOAAIAWAbQAqArA7AAQAxAAAjgdQAjAZAuAAQA7AAAqgrIANgNIABAAQA7AAApgqQAqgqAAg7QAAgSgEgS");
	this.shape.setTransform(0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D0EA").s().p("AisBSIgWgcIgOABQg7AAgqgqQgpgoAAg7QAAgUAEgRQAKAjAbAcQAqAqA7AAIAOgBIAWAaQAqAqA7AAQAxAAAjgdQAjAZAuAAQA7AAApgqIAOgMIABAAQA6AAAqgqQAcgcAJgjQAFASAAAUQAAA7gqAnQgqAqg6AAIgBAAIgOAOQgpAqg7AAQguAAgjgZQgjAdgxAAQg7AAgqgqg");
	this.shape_1.setTransform(0.1,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AisCBIgWgcIgOABQg7gBgqgqQgbgbgKgiQAKgiAbgdQAqgpA7AAQAZAAAUAGIAGgGQAqgqA7AAQAiAAAaAOQApgkA3AAQA6AAAqApIAZAhQAxAFAjAjQAcAcAJAiQgJAjgcAcQgqAqg6AAIgBAAIgOAOQgpAqg7AAQguAAgjgZQgjAdgxAAQg7AAgqgqg");
	this.shape_2.setTransform(0.1,-3.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-20.6,70.3,41.8);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1.5,1,1,3,true).p("An4AAQAJgkAcgcQAhghAsgHQAHgqAgggQAqgqA7AAQA7AAAqAqIAQATIAHgIQAqgqA7AAQAqAAAiAXQAogkA3AAQA7AAAqAqQAaAaAKAhQAkgcAwAAQA7AAAqAqQAcAcAJAjAn4AAQgFAPAAAUQAAA7AqAqQAqAqA7AAQAoAAAggUIASAXQAqAqA7AAQA7AAAqgqIARgUQAZALAeAAQA5AAApgqIAWAcQAqAqA7AAQA7AAAqgqIAVgaIAaACQA7AAAqgqQAqgpAAg5QAAgUgFgS");
	this.shape.setTransform(0,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D0EA").s().p("AkUBcIgSgXQggAUgoAAQg7AAgqgqQgqgqAAg5QABgUAFgRQAJAjAbAcQAqAoA7AAQAoAAAggSIASAVQAqAqA7AAQA8AAApgqIARgSQAZAJAeAAQA4AAAqgoIAWAcQAqAoA7AAQA7AAAqgoIAVgaIAaACQA7AAApgqQAdgbAJgkQAFASAAAUQAAA7grAnQgpAqg7AAIgagCIgVAaQgqAqg7AAQg7AAgqgqIgWgcQgqAqg4AAQgeAAgZgLIgRAUQgpAqg8AAQg7AAgqgqg");
	this.shape_1.setTransform(0,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkUCPIgSgWQggATgoAAQg7AAgqgqQgcgcgJgjQAJgjAcgaQAhghAsgHQAHgqAgghQAqgpA7AAQA7AAAqApIAQATIAHgHQAqgqA7AAQAqAAAiAXQAogkA3AAQA7AAApApQAaAbAKAhQAlgcAwAAQA7AAApAqQAdAcAJAjQgJAhgdAcQgpAqg7AAIgbgCIgVAaQgpAqg7AAQg7AAgqgqIgWgcQgqApg4AAQgeAAgZgKIgRATQgqAqg7AAQg7AAgqgqg");
	this.shape_2.setTransform(0,-2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.9,-20.6,102,44.7);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.shape4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1.5,1,1,3,true).p("AmhgoQAJgjAbgcQAqgqA7AAQAhAAAbANQAKgZAVgVQAqgqA7AAQA6AAAoAqIAZAgIACgCQAqgqA7AAQA7AAAqAqQAQAPAKATIAQgBQA7AAApAqQAcAcAKAjAmhgoQgFASAAAUQAAA4ApAqQAqAqA7AAIAlgEQALAYAUAVQAqAqA7AAQA7AAAqgqIACgDIACADQAoAqA7AAQA7AAAqgqIAVgbQAeAQAkAAQA7AAApgqQAqgqAAg6QAAgUgEgQ");
	this.shape.setTransform(-0.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D0EA").s().p("AgGBZIgCgDIgCADQgqAqg7AAQg7AAgqgqQgUgVgLgYIglAEQg7AAgqgqQgpgoAAg6QAAgUAFgSQAJAjAbAcQAqAqA7AAIAlgEQALAYAUATQAqAqA7AAQA7AAAqgqIACgDIACADQAoAqA7AAQA7AAAqgqIAVgZQAeAOAkAAQA7AAApgoQAcgcAKgjQAEASAAAUQAAA6gqAoQgpAqg7AAQgkAAgegQIgVAbQgqAqg7AAQg7AAgogqg");
	this.shape_1.setTransform(-0.3,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGCNIgCgCIgCACQgrAqg6AAQg7AAgqgqQgVgVgKgYIglAFQg7AAgqgqQgcgcgIghQAIgkAcgcQAqgpA7AAQAhAAAaAMQALgZAVgVQAqgpA6AAQA7AAAoApIAZAhIACgDQAqgpA7AAQA7AAAqApQAQAQAKASIAPAAQA8AAApApQAcAcAKAiQgKAjgcAcQgpAqg8AAQgjAAgegQIgVAaQgqAqg7AAQg7AAgogqg");
	this.shape_2.setTransform(-0.3,-4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-22.6,84.8,44.3);


(lib.shape2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape57("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite50 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape51("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite47 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape48("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound49");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
    //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    _root.GameWon = true;
    _root.camera.removeAllEventListeners();
    _root.camera._char.stop();
   } // end if	
	}
	this.frame_8 = function() {
		playSound("sound53");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite1Puff();    //attachMovie("Puff", "puff" + i, i);
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
  this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame -1); 
   this.parent.lose()  
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite47();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite50();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape52("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite45 = function(mode,startPosition,loop) {
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
  this.frame6 = function(){
    this.gameWin = true
  }
	// Layer 5
	this.star5 = new lib.sprite46();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite46();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite46();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite46();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite46();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape41("synched",0);

	this.instance_1 = new lib.shape42("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.1,7.2,6.2);


(lib.sprite31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound33");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7));

	// Layer 2
	this.instance = new lib.shape32("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8));

	// Layer 1
	this.instance_1 = new lib.shape34("synched",0);

	this.instance_2 = new lib.shape35("synched",0);

	this.instance_3 = new lib.shape36("synched",0);

	this.instance_4 = new lib.shape37("synched",0);

	this.instance_5 = new lib.shape38("synched",0);

	this.instance_6 = new lib.shape39("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-12.5,21.4,29.7);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,0,13.3,33.1);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_3 = function() {
		playSound("sound27");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(4));

	// Layer 1
	this.instance = new lib.sprite25();
	this.instance.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.62},1).wait(1).to({scaleY:0.24},0).wait(1).to({scaleY:0.52},0).wait(1).to({scaleY:0.73},0).wait(1).to({scaleY:0.88},0).to({scaleY:0.94},1).wait(1).to({scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-0.5,13.3,33.1);


(lib.sprite21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape22("synched",0);

	this.addChild(this.instance);
	var self = this;
  this.on("tick", function ()
  {
    if (self.hitTest(self.parent._char.x + self.parent._char.hit.x - self.x,self.parent._char.y + self.parent._char.hit.y - self.y) && self.parent.velY > 0)
    {
        self.parent.velY = -25;
        self.parent._char.tail.play();
    } // end if
  });	
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape16("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape17("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-17.6,30.4,31.3);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape14("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.6,-19.9,54.5,24.1);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite13();
	this.instance.setTransform(0,0,0.751,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.66,scaleY:0.75,skewX:-7.1,skewY:-13.6},0).wait(1).to({scaleX:0.6,skewX:-11.3,skewY:-22.1},0).wait(1).to({scaleX:0.58,skewX:-12.9,skewY:-25},0).wait(1).to({scaleX:0.68,scaleY:0.75,skewX:-5.6,skewY:-10.9},0).to({scaleX:0.71,skewX:-2.7,skewY:-5.3},1).wait(1).to({scaleX:0.75,skewX:0,skewY:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-14.9,40.9,18.1);


(lib.sprite9Star = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape10("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,5.5,5.5);


(lib.sprite5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);

(lib.sprite5_hit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);
  this.instance.setTransform(0, 0, 4.348,5.292);
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);

(lib.sprite3Cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var self = this;
  this.frame1 = function(){
   function testHit()
   {
    if (self.hit.hitTest(_root.camera._char.x + _root.camera._char.hit.x - self.x - self.hit.x, _root.camera._char.y + _root.camera._char.hit.y - self.y - self.hit.y) && _root.camera.velY > 0)
    {
        _root.camera.velY = -25;
        self.on("tick", shrink);
    } // end if
    if (self.hit2.hitTest(_root.camera._char.x + _root.camera._char.hit.x - self.x - self.hit2.x, _root.camera._char.y + _root.camera._char.hit.y - self.y - self.hit2.y) && _root.camera.velY > 0)
    {
        _root.camera._char.tail.play();
    } // end if
   } // End of the function
   function shrink(evt)
   {
    self.scaleX = self.scaleY = self.scaleY - self.scaleX / 4;
    if (self.scaleX < 0.1)
    {
       evt.remove();
       self.parent.removeChild(self);
    } // end if
   } // End of the function
   this.stop ();
   this.on("tick",  testHit);
   var fn = Math.ceil(Math.random() * 3)-1;
    this.gotoAndStop(fn); 
   if(fn == 0){ 
    this.hit2.graphics.f("#66FF00").drawRect(-78.75*this.scaleX/2,  -16.8-16.6*this.scaleY/2, 78.75*this.scaleX, 16.6*this.scaleY);
    this.hit.graphics.f("#66FF00").drawRect(-78.75*this.scaleX/2,  0.2-17.25*this.scaleY/2, 78.75*this.scaleX, 17.25*this.scaleY);
   }else if(fn == 1){
    this.hit2.graphics.f("#66FF00").drawRect(-93.7*this.scaleX/2,  -16.8-16.2*this.scaleY/2, 93.7*this.scaleX, 16.2*this.scaleY);
    this.hit.graphics.f("#66FF00").drawRect(-93.7*this.scaleX/2,  0.2-17.25*this.scaleY/2, 93.7*this.scaleX, 17.25*this.scaleY);
   
   }else{
    this.hit2.graphics.f("#66FF00").drawRect(-65.6*this.scaleX/2,  -16.8-15.3*this.scaleY/2, 65.6*this.scaleX, 15.3*this.scaleY);
    this.hit.graphics.f("#66FF00").drawRect(-65.6*this.scaleX/2,  0.2-17.25*this.scaleY/2, 65.6*this.scaleX, 17.25*this.scaleY);
  
   }

  }


	// Layer 3
	this.hit2 = new cjs.Shape();  //lib.sprite5();
	//this.hit2.setTransform(0,-16.8,7.875,1.66);
	this.hit2.alpha = 0.01;


	//this.timeline.addTween(cjs.Tween.get(this.hit2).wait(1).to({scaleX:9.37,scaleY:1.62,y:-15.2},0).wait(1).to({scaleX:6.56,scaleY:1.53,y:-16.1},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.hit2).wait(3));
	// Layer 2
	this.hit = new cjs.Shape(); //lib.sprite5();
	//this.hit.setTransform(0,0.2,7.875,1.725); 
	this.hit.alpha = 0.01;

	//this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({scaleX:9.37,y:1.3},0).wait(1).to({scaleX:6.56,y:0.2},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.hit).wait(3));
	// Layer 1
	this.instance = new lib.shape4("synched",0);

	this.instance_1 = new lib.shape7("synched",0);

	this.instance_2 = new lib.shape8("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-25.1,84.8,46.8);


(lib.sprite1Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape2("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape44("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite13();
	this.instance_1.setTransform(-5.4,-4.9,0.75,0.75);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,-19.9,46.8,27.9);


(lib.sprite28 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape29("synched",0);

	// Layer 1
	this.instance_1 = new lib.sprite13();
	this.instance_1.setTransform(3.1,-5.2,0.667,0.748,0,-46.3,133.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-39.5,38.1,42.5);


(lib.sprite23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var self = this;
  this.frame1 = function(){
   this.on("tick",  function ()
   {
    if (Math.random() * 90 < 1)
    {
        self.eyes.play();
    } // end if
   });  
  }
	// Layer 7
	this.hit = new lib.sprite5();
	this.hit.setTransform(0,5);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(5));

	// Layer 6
	this.instance = new lib.sprite43();
	this.instance.setTransform(-21.2,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:-14.1},0).to({scaleX:1,scaleY:1,rotation:-9.3},1).wait(1).to({scaleX:1,scaleY:1,rotation:-4.6,x:-21.2},0).wait(1).to({rotation:0,x:-21.1},0).wait(1));

	// Layer 5
	this.eyes = new lib.sprite40();
	this.eyes.setTransform(-4.6,-56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes}]}).wait(5));

	// Layer 4
	this.face = new lib.sprite31();
	this.face.setTransform(-1.8,-42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face}]}).wait(5));

	// Layer 3
	this.instance_1 = new lib.shape30("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(5));

	// Layer 2
	this.instance_2 = new lib.sprite28();
	this.instance_2.setTransform(12.9,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1,scaleY:1,rotation:13.8,x:13,y:-40.3},0).wait(1).to({rotation:18.6,x:12.9,y:-40.2},0).to({scaleX:1,scaleY:1,rotation:9.3},1).wait(1).to({rotation:0},0).wait(1));

	// Layer 1
	this.tail = new lib.sprite24();
	this.tail.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tail}]}).wait(5));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-85.9,105,116.4);


(lib.sprite19 = function() {
	this.initialize();
  
	// Layer 3
	this._char = new lib.sprite23();

  //Layer cloud
  this.cloud = new cjs.Container();
  
  //layer star
  this.star =  new cjs.Container();

	// Layer 2
	this.instance = new lib.sprite21();
	this.instance.setTransform(250,325,5,0.5);
	this.instance.alpha = 0.01;

	// Layer 1
	this.instance_1 = new lib.shape20("synched",0);

	this.addChild(this.instance_1,this.instance,this.star,this.cloud,this._char);
	var self = this;
  function movement(evt)
  {
    self.velX = (stage.mouseX/ratio - self.x - self._char.x) / 8; 
    self.velY = self.velY + gravity;
    
    if (self.velY <= -15)
    {
        self._char.stop();
    }
    else
    {
        self._char.play();
    } // end else if
    self._char.x = self._char.x + self.velX;
    self._char.y = self._char.y + self.velY;
    if (self._char.y < maxY)
    {
        maxY = self._char.y;
    } // end if
    console.log(self._char.y +', ' + (maxY + 340));
    if (self._char.y > maxY + 340)
    {
        self.parent.gotoAndPlay("lose");
        evt.remove();
    } // end if
    if (self._char.y < ground - cloudCount * spacing)
    {
        addCloud();
    } // end if
    self.y = self.y + (120 - maxY - self.y) / 2;
   } // End of the function
   function addCloud()
   {
    ++cloudCount;
    self["cloud" + cloudCount] = new lib.sprite3Cloud();  // attachMovie("Cloud", "cloud" + cloudCount, cloudCount + cloudDepth);
    self.cloud.addChild(self["cloud" + cloudCount]);
    self["cloud" + cloudCount].x = 500 / 2 + Math.random() * spread - spread / 2;
    self["cloud" + cloudCount].y = ground - spacing * (cloudCount + 1);
    self["cloud" + cloudCount].scaleX = self["cloud" + cloudCount].scaleY = cloudScale/100;
    if (cloudScale > 50)
    {
        cloudScale = cloudScale - 1;
    } // end if
    for (var i = 1; i <= Math.random() * 5 + 5; i++)
    {
        ++starDepth;
        self["star" + starDepth] = new lib.sprite9Star();   //attachMovie("Star", "star" + starDepth, starDepth);
        self.star.addChild(self["star" + starDepth]);
        self["star" + starDepth].x = Math.random() * 500;
        self["star" + starDepth].y = self["cloud" + cloudCount].y + Math.random() * 100 - 50;
        self["star" + starDepth].scaleX = self["star" + starDepth].scaleY = Math.random() * 0.75 + 0.25;
        self["star" + starDepth].alpha = Math.random() * 0.5 + 0.5;
        self["star" + starDepth].on("tick",  function (evt)
        {
            if (evt.currentTarget.y > maxY + 340)
            {
                evt.remove();
                self.removeChild(evt.currentTarget);
                delete evt.currentTarget 
            } // end if
        });
    } // end of for
    ++bonusWait;
    if (bonusWait >= 4)
    {   
        bonusWait = 0;
        ++bonusDepth;
        self["bonus" + bonusDepth] = new lib.sprite11Bonus();   //attachMovie("Bonus", "bonus" + bonusDepth, bonusDepth);
        self.addChild(self["bonus" + bonusDepth]);
        self["bonus" + bonusDepth].item.gotoAndStop(Math.ceil(Math.random() * 2)-1);
        self["bonus" + bonusDepth].x = (self["cloud" + cloudCount].x + self["cloud" + (cloudCount-1)].x) / 2;
        self["bonus" + bonusDepth].y = self["cloud" + cloudCount].y + 50 - Math.abs(self["cloud" + cloudCount].x - self["cloud" + (cloudCount-1)].x) / 4;
        self["bonus" + bonusDepth].speed = 0;
        self["bonus" + bonusDepth].on("tick", function (evt)
        {
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.speed;
            if (evt.currentTarget.hit.hitTest(self._char.x + self._char.hit.x - evt.currentTarget.x - evt.currentTarget.hit.x, self._char.y + self._char.hit.y - evt.currentTarget.y - evt.currentTarget.hit.y))
            {
                self.parent.starPoints.score();
                self._char.face.play();
                evt.remove();
                self.removeChild(evt.currentTarget);
                delete evt.currentTarget
            }else if(evt.currentTarget.y > maxY + 340)
            {
                evt.remove();
                self.removeChild(evt.currentTarget);
                delete evt.currentTarget
            } // end if
        });
    } // end if
   } // End of the function
   var ground = 300;
   var gravity = 1.300000E+000;
   var maxY = 100;
   var cloudY = 0;
   var cloudCount = -1;
   var spacing = 150;
   var spread = 400;
   var cloudScale = 150;
   var starDepth = 0;
   var bonusWait = 0;
   var cloudDepth = 100000;
   var charDepth = 500000;
   var bonusDepth = 510000;

   this.init = function(){ 
     ground = 300;
     this.velX = 0;
     this.velY = 0;
     gravity = 1.300000E+000;
     maxY = 100;
     cloudY = 0;
     cloudCount = -1;
     spacing = 150;
     spread = 400;
     cloudScale = 150;
     starDepth = 0;
     bonusWait = 0;
     cloudDepth = 100000;
     charDepth = 500000;
     if(bonusDepth == 510000) bonusDepth = 510000;  
     this._char.stop();
     this._char.tail.gotoAndStop(2);
     this.y = 0;
     this.y = 120 - maxY - this.y;
     this.cloud.removeAllChildren();
     this.star.removeAllChildren();
     for(var i = 510001; i <= bonusDepth; i++) this.removeChild(this["bonus" + bonusDepth]);
     for (var c = 1; c <= 2; c++)
     {
      addCloud();
     } // end of for
   	 this.on("mousedown",  function (evt)
     {
       self.on("tick",  movement);
       evt.remove()
     });
     this._char.setTransform(257.2,302);     
  
	 }

	 this.init();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-220,514,570.1);


(lib.sprite11Bonus = function() {
	this.initialize();

	// Layer 4
	this.hit = new lib.sprite5_hit();
	this.hit.setTransform(0,26.5);  //4.348,5.292
	this.hit.alpha = 0.01;

	// Layer 3
	this.item = new lib.sprite15();

	// Layer 2
	this.instance = new lib.sprite12();
	this.instance.setTransform(5,-2.4,1.001,1,0,0,180);

	// Layer 1
	this.instance_1 = new lib.sprite12();
	this.instance_1.setTransform(-4.9,-2.4,1.001,1);
  
	this.addChild(this.instance_1,this.instance,this.item,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.3,-17.6,84.7,70.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;