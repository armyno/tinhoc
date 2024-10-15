(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var swapChild = false;
// stage content:
(lib.DesertDive = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:1,miss:2});
  this.frame1 = function(){this.GameWon = false}
  this.frame2 = function(){
    this.stop();
    this.camera.init();  
  }
  this.frame31 = function(){
  this.gotoAndStop("start")
  this.camera.small.body.gotoAndStop(0);
  this.camera.small.x= this.camera.small.orgX;  
  this.camera.small.y= this.camera.small.orgY;
  this.camera.small.body.rotation = 0;
  this.camera.small.body.head.eyes.gotoAndStop(0);
  this.camera.small.body.head.mouth.gotoAndStop(0);
  if(swapChild){
    this.camera.swapChildren(this.camera.small, this.camera.targetBack); 
    swapChild = false;
  }  
  
  }
	// Layer 9
	this.instance = new lib.sprite95();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(31));

	// Layer 8
	this.instance_1 = new lib.shape94("synched",0);
	this.instance_1.setTransform(445.9,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(31));

	// Layer 7
	this.starPoints = new lib.sprite84();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(31));

	// Layer 6
	this.camera = new lib.sprite37();
	this.camera.setTransform(0,-169.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.camera).to({_off:true},30).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite32();
	this.instance_2.setTransform(402.3,131.8,1.061,1.061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(31));

	// Layer 4
	this.instance_3 = new lib.sprite30();
	this.instance_3.setTransform(240,311.9);
	this.instance_3.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(31));

	// Layer 3
	this.instance_4 = new lib.shape29("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(31));

	// Layer 2
	this.instance_5 = new lib.sprite11();
	this.instance_5.setTransform(274.9,39.9,0.729,0.729,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(31));

	// Layer 1
	this.instance_6 = new lib.shape10("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(31));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(29).call(this.frame31))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-6,638.9,391.9);


// symbols:
(lib.image93 = function() {
	this.initialize(img.image93);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite97 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape96 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape94 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image93(); 
	this.shape.setTransform(-45, -7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape91 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape90 = function() {
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


(lib.shape87 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape83 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#124576").ss(1,1,1).p("AGaANIgNgZAmLgMIgOAZ");
	this.shape.setTransform(-2.3,-11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#124576").ss(1,0,0,4).p("AGLhgIgDAJQgRAUhfAPIh/ANIiZAFIiYgFIhQgHIgdgEAkAgcIAeAEIBDAFICfAFICggFICFgOQA5gJAegKQAXgIAHgJAFxgUIALggAFgAbIARgvAjBBVIDBAMQCRAABogVQBlgUACgcAmZhFQAHAJAXAIQAeAKA6AJIAjAFAmLhgQAAAFAEAEQARAUBgAPIARACAlfAcQACAcBlAUIA3AJAlfAbIgIgYIgJgXIgLgg");
	this.shape_1.setTransform(-2.3,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F68CB").s().p("AjpBSQhlgUgBgcIAAgBIgJgYIgIgXIgMggQAeAKA6AJIAjAFIAfAEIBCAFICfAFICggFICEgOQA6gJAegKIgLAgQgdAJgwAFIiEAOIigAFIifgFIhAgFQAIAvAWAjgAkUgbQg6gJgegKQgXgIgHgJIAOgbIABAAQAAAFADAEQARAUBgAPIARACIAFAWg");
	this.shape_2.setTransform(-3.8,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C7ADF").s().p("AkLBWQgWgkgIguIBAAEIChAFICegFICEgLQAwgIAdgJIgRAwIAAABQgCAchlAUQhoAUiPAAgAjpgTIhCgFIgfgEIgFgVIAdADIBRAHICZAFICXgFIB/gNQBggPAQgTIAEgJIAAgBIAOAcQgIAIgWAIQgeALg6AJIiEANIieAGg");
	this.shape_3.setTransform(5.1,-3.1);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(136,219,246,0.749)").s().p("AiYAQIh/gOQhEgIgbgNIABgBILrAAIABABQgcANhDAIIiAAOIiYAEg");
	this.shape_4.setTransform(-2.2,-8.8);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.102)").s().p("AkkAsQh6gSAAgaQAAgYB6gTQB5gSCrAAQCsAAB5ASQB5ATAAAYQAAAah5ASQh5ATisAAQirAAh5gTg");
	this.shape_5.setTransform(-6.1,2.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-12.9,86.4,21.8);


(lib.shape81 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.051)").s().p("AiGAUQg5gIAAgMQAAgLA5gIICGgJICHAJQA5AIAAALQAAAMg5AIIiHAJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-2.9,38.5,6);


(lib.shape79 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515151").s().p("AgNAOQgGgHABgHQgBgHAGgGQAGgFAHAAQAIAAAFAFQAHAGgBAHQABAHgHAHQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(79.5,303.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AgbAbQgMgLAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMALQgMANgQAAQgPAAgMgNg");
	this.shape_1.setTransform(79.4,303.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_2.setTransform(79.4,303.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(75.4,299.4,8,8);


(lib.shape78 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1780B").ss(1,1,1).p("AgRAGQAWADANgO");
	this.shape.setTransform(4.3,-13.5);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C1780B").ss(1,1,1).p("AATAGQgTACgSgN");
	this.shape_1.setTransform(-6.5,-13.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C1780B").ss(1,1,1).p("AgQAEQAXACAKgJ");
	this.shape_2.setTransform(11.3,-12.5);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C1780B").ss(1,1,1).p("AAOACQgRAFgKgK");
	this.shape_3.setTransform(-14.8,-12.2);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#825006").ss(1,1,1).p("Ah1AAIgeAGACUAIIgUgDIgDgBIhRgIAg6gEIAvgCIA3ACAg6gEIg7AE");
	this.shape_4.setTransform(-0.3,-10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C1E00").ss(1,1,1).p("ABIgBQgbgQgJAKQgJAJgTAGQgRAHgPgGQgQgGgFgGQgHgJgHADQgIACgEAH");
	this.shape_5.setTransform(-2.3,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AA4AUIAYAGAgWgRIBsgTAhVgYIA/AHAgGAlQAIgIAIgDQAVgIAZAC");
	this.shape_6.setTransform(-2.4,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("ABBg0IAIAHQAMAPABAVIAAAHQgCAXgRASIgLAJAAKA2QgKgFgJgKIgCgCIgCADQgOAQgSAAQgSAAgNgQQgLgQACgWIAAgBQACgVAOgQQAPgQASAAQAQAAALAOAAJg3IgMAKIgGAHQgMAPgBAVIAAALQACAQAJAM");
	this.shape_7.setTransform(-2.4,-5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5C1E00").ss(1,1,0,3).p("ACDhaQASAWgFA2QgFAzgrAeIgDABIgJAGAABBgIgFABIgHAAQhCACgjgoQgkgpAEguQAEgoAdgc");
	this.shape_8.setTransform(-0.9,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D04A11").s().p("AhMAnQgLgPACgXIAAAAQACgVAOgQQAPgQASAAQAQAAALANQgMAQgBAVIAAALIAAgLQABgVAMgQIAGgFIAMgLIA4ADIAIAIQAMAOABAWIhsARIg/gIIA/AIQACAQAJAMIgCACQgOARgSAAQgSAAgNgRgAgJAmIgCgBQgJgMgCgQIBsgRIAAAGQgCAXgRARIgLAJQgZgCgVAJQgKgFgJgLgAgLAlIAAAAgABWgIg");
	this.shape_9.setTransform(-2.4,-5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5400F").s().p("AhwA+QgkgoAEguQAEgoAdgcIA2gEQgPACgNAOQgOAQgBAXIAAAAQgCAWALAQQAMAPASAAQASAAAOgPIADgCIABABQAJAJAMAEQgIADgKAIQAKgIAIgDQAUgIAZACIAYAGIgYgGIAKgHQARgRACgZIAAgHQAAgVgNgPIgHgHIBRAJQASAWgFA2QgFA0grAdIgDACIgJAFQgiATgxAEIgFAAIgHAAIgGAAQg9AAgigmgAgWBCQAIAAAKgEQARgGAJgLIABAAQADgEAGAAIAAAAIACAAQAIABANAHIAAABIACAAIABABIgBgBIgCAAIAAgBQgNgHgIgBIgCAAIAAAAQgGAAgDAEIgBAAQgJALgRAGQgKAEgIAAIgBAAIAAAAQgIAAgHgDIAAAAQgPgGgGgIQgFgHgFAAIAAAAIgBAAIgCABIgBAAQgIACgDAJQADgJAIgCIABAAIACgBIABAAIAAAAQAFAAAFAHQAGAIAPAGIAAAAQAHADAIAAIAAAAIABAAgAg0hgIAvgDIgOAKIgFAGQgLgNgRAAgAg0hgIgFAAIAFAAg");
	this.shape_10.setTransform(-0.9,-1.4);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.3,-14.2,30.8,22.9);


(lib.shape77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,1).p("AAcg3IADALQABAVAFAQQAAANAEAMIABAAIADAIIADARQABAHgFAGIgIAGIgBAAIgmADQgbgFgLgNQgKgNAIgMIABgBQACgEAFgBQADgGAGgCIACAAIARgBIAAAAIABAAQAEgCABgFIABAAIAAgEIgHgaQgCgKAEgKIAFgHQAEgIAJACIAKACIAEAFIABAAgAALANQgLgGgGAA");
	this.shape.setTransform(-1.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AgnAtQgKgMAFgLQADgEAEgCQAEgGAGgBIACgBIAQgBIABAAIABAAQAEgBABgGIAAAAIAAgDIgHgbQgBgKADgKIAGgGQAEgIAIABIALADIAEAEIAAABIAAAAIAEALQABAVAFAQQAAAOAEALIAAABIADAHIADARQABAIgEAFIgJAHIAAAAIglABQgZgHgLgMgAAJAOQgJgHgHAAQAHAAAJAHg");
	this.shape_1.setTransform(-1.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE651A").s().p("AAtArIgDgRIgDgHIAEAIQADAFAAALQAAAIgFAFQAFgGgBgHgAgtAVQACgEAFgBQgFACgCADgAAnATIgBgBQgEgMAAgNQADAWACADIAAABgAgKAHQAFgCABgFQAAAFgFACgAAcgsIgDgLIAFAIIAEAoQgFgQgBgVg");
	this.shape_2.setTransform(-1,4.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-2.3,9.8,13);


(lib.shape75 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAHIgCgHIACgHIAFgDQADAAACADQADAEAAADQAAAEgDADIgFAEQgCAAgDgEg");
	this.shape.setTransform(-5.4,-1.9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAJQgDgEAAgFQAAgEADgFQAEgEADAAQAEAAADAEIAEAJQAAAFgEAEIgHAFQgDAAgEgFg");
	this.shape_1.setTransform(2.3,-2.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AgTA6QgMgEgJgLQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJ");
	this.shape_2.setTransform(3.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AAUgHQgXgCgWAIIgSAJAAsgBQgNgFgLgB");
	this.shape_3.setTransform(3.7,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoArQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJQgZgCgTAIQgMgEgJgLg");
	this.shape_4.setTransform(3.1,-0.5);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AAigmQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQg");
	this.shape_5.setTransform(-4.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAmQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRg");
	this.shape_6.setTransform(-4.1,0.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.9);


(lib.shape74 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(0.8,1,1).p("Ag1AJIBrgR");
	this.shape.setTransform(3.1,-0.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AgegCIA9AF");
	this.shape_1.setTransform(-5.4,0.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AgTA6QgMgEgJgLQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJ");
	this.shape_2.setTransform(3.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AAUgHQgXgCgWAIIgSAJAAsgBQgNgFgLgB");
	this.shape_3.setTransform(3.7,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D04A11").s().p("AgoArQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJQgZgCgTAIQgMgEgJgLg");
	this.shape_4.setTransform(3.1,-0.5);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AAigmQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQg");
	this.shape_5.setTransform(-4.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D04A11").s().p("AghAmQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRg");
	this.shape_6.setTransform(-4.1,0.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.9);


(lib.shape73 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AgygDIBlAH");
	this.shape.setTransform(2.9,0.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AgeAEIA9gH");
	this.shape_1.setTransform(-5.4,1.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AAXgEQgXAPgWgL");
	this.shape_2.setTransform(3.4,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AgTA6QgMgEgJgLQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJ");
	this.shape_3.setTransform(3.1,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D04A11").s().p("AgTA4QgMgEgJgLQgPgRACgYQABgYASgSQARgRAVAAQAXAAAPARQAOASgBAYQgCAYgRARIgLAJQgOAKgMAAQgJAAgJgEg");
	this.shape_4.setTransform(3.1,-0.3);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AAigmQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQg");
	this.shape_5.setTransform(-4.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D04A11").s().p("AghAmQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRg");
	this.shape_6.setTransform(-4.1,0.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.2);


(lib.shape72 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAHIgCgHIACgHQADgDACAAQADAAACADQADAEAAADQAAAEgDADIgFAEQgCAAgDgEg");
	this.shape.setTransform(-4.8,2.8);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAJQgDgEAAgFQAAgEADgFQAEgEADAAQAEAAADAEQAEAFAAAEQAAAFgEAEIgHAFQgDAAgEgFg");
	this.shape_1.setTransform(1.7,2.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5C1E00").ss(0.8,1,1).p("AAXgEQgXAPgWgL");
	this.shape_2.setTransform(3.4,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AgTA6QgMgEgJgLQgPgRACgZQABgXASgSQARgRAVAAQAXAAAPARQAOASgBAXQgCAZgRARIgLAJ");
	this.shape_3.setTransform(3.1,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTA4QgMgEgJgLQgPgRACgYQABgYASgSQARgRAVAAQAXAAAPARQAOASgBAYQgCAYgRARIgLAJQgOAKgMAAQgJAAgJgEg");
	this.shape_4.setTransform(3.1,-0.3);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5C1E00").ss(0.8,1,0,3).p("AAigmQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQg");
	this.shape_5.setTransform(-4.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAmQgLgQACgWQABgVAOgRQAPgQAQAAQASAAAMAQQALARgBAVQgCAWgPAQQgOARgQAAQgSAAgMgRg");
	this.shape_6.setTransform(-4.1,0.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.2);


(lib.shape69 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,0,3).p("AAVgtQADgBADABQAXADABAXQABALgGAIQgGALgOALIgVAPIgKAJIgBAAIgBABAgzAjIAAgCQABgTAKgRIAJgNQAIgLALgIAgCgqQAKgFANAC");
	this.shape.setTransform(5.8,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AgmAzIgHgHQgEgGAAgJIAAgDQAAgTALgRIAIgNQAGgIAJgHQgJAHgGAIIAPgPIAEgEQAFgEAGgCIAUgEIABABIABAAIgBAAIgBgBIACAAIAAABQAVAAAGAZQADALgFALQgGAJgOAKIgUAPIgLAJIAAABIgBAAIgGAEIgEACQgJAHgHAAQgEAAgDgCgAAbAPQAOgKAGgJQgFAJgOAKIgVAPgAgNgpIACgBIgEAEgAgLgqIAAAAgAAAgxIAAABIAAgBgAADgyIgDABIADgBgAAPg0QgGAAgGACQAGgCAGAAgAAPg0IAFAAIAAAAIgFAAgAAPg0IAAAAIAAAAgAAPg0IAAAAIAAAAg");
	this.shape_1.setTransform(5.7,-21.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,-27.2,10.4,10.7);


(lib.shape68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3C1000").ss(1,1,1).p("AANgBIAGgDIALgDQAFgCAGACIACAAIACABIAAABIABAHIgBAJIgBAEIAAABIAAAAAAoAUIgKAAIgLAAIgJABAAGANQAAgIADgDIABgCIADgBAAtgGIgFgIIgJgIIgJgEIgKAAIgLACIgIADIgKAEIgDABIgBABIgGADIgKAGIgIAGAgUgQIAJAFIAIAIIAFAIIACAOIACgGAAEAWIgGACIgLAD");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF1010").s().p("AgRAOQgBgCAAgFQABgHADgCIADgFIAHgDIAIgDQAFgCAGACIACAAQADADgCAGIABAFIgBAIIAAAAIAAABIgCADIgBAAIgBABIgJAAIgKAAIgJABgAgSAFQABgFACgBIABgBQgDACgBAHg");
	this.shape_1.setTransform(2.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#490505").s().p("AgIAJIgGgJIgJgHIgJgFIADgBIAKgEIAKgDIAJgCIAKAAIAJAEIAJAIIAFAIIgCgBIgCAAQgGgCgFACIgLADIgGABIgBACIgBADIgBABQgCACAAAGIAAACIgCAGg");
	this.shape_2.setTransform(1.2,-0.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.6,-2.6,9.3,5.5);


(lib.shape67 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,1).p("ABIgCQgcgQgJALQgIAJgTAIIggACQgQgFgGgHQgHgHgHADQgIACgDAH");
	this.shape.setTransform(-1.8,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-1.2,14.5,2.6);


(lib.shape65 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,0,3).p("AAIB1IgHABIgFABQhCAFglgmQgmgnABgvQACgwAqgiQAqghA7gDQA9gDArAgQAqAggCA3QgCA1gpAgIgDACIgJAG");
	this.shape.setTransform(-2,-7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AhrBWQgmgnABgvQACgwAqgiQAqghA7gDQA9gDArAgQAqAggCA3QgCA1gpAgIgDACIgJAGQgiAUgwAGIgHABIgFABIgPAAQg3AAghghg");
	this.shape_1.setTransform(-2,-7.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5C1E00").ss(1,1,0,3).p("AgaArIgBgCQgGgRABgTQACgSAJgNQAIgNAOgFQAPgFALAPQALAOgKAYIgUApIgBAB");
	this.shape_2.setTransform(-7.5,-21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5400F").s().p("AgKA0QgKgBgGgOIgBgCQgGgRABgSQACgUAJgNQAIgNAOgEQAPgFALAOQALAPgKAZIgUAnIgBACQgHAMgJAAIgBAAg");
	this.shape_3.setTransform(-7.5,-20.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-26.3,29.1,31.1);


(lib.shape63 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,0,3).p("AAsgqQAQAXADAWQADAYgTAUQgTAUgbAAQgZAAgTgUQgTgUAAgbQAAgbATgUQATgTAZAAQAbAAAQAYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AgrAvQgTgUAAgbQAAgbATgUQATgTAZAAQAbAAAQAYQAQAXADAWQADAYgTAUQgTAUgbAAQgZAAgTgUg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.6,12.8,13.5);


(lib.shape61 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,1).p("AAcg8IADAMQABAnAJAXIABAAIADAIIADARQABAMgNAHIgnADQgbgFgLgNQgKgNAIgMQAHgMAKgCIAUgBQAGgDAAgIIgEgQIgBgEAALAJQgLgGgGAA");
	this.shape.setTransform(-1.3,4.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AgnAtQgLgMAGgMQAGgNAMAAIARgBQAIgCgBgIIgEgQIgCgSQABgMAGgHQADgIAJABIAKADIAEAEIAGAKIAEAnQADAWACADIAEAJQADAFAAAMQAAALgOAIIgkABQgZgHgLgMg");
	this.shape_1.setTransform(-1.1,4.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-2.3,9.8,13);


(lib.shape59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5C1E00").ss(1,1,1).p("AACg2IAEAEIAFAKIAPAlIABACQAJAcgLAPQgLAOgLgBQgKgBgLgMQgLgMgBgdQAAgcACgH");
	this.shape.setTransform(0.9,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5400F").s().p("AADA5QgKgBgLgMQgLgMgBgeQAAgbACgHIACgKIAGgIQAFgHAIACIAJACIAEAFIAFAJIAPAlIABACQAJAdgLAOQgKAOgLAAIgBAAg");
	this.shape_1.setTransform(0.9,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.3,6.3,11.5);


(lib.shape55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,0,3).p("AABhDIB5DPIAcAEIAdgEIilkcIgKAAIgRAAIilEcIAWAFIAkgFIB4jRg");
	this.shape.setTransform(79.5,314.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AikCMICkkcIASAAIigEhgACICMIh4jPIAAgrICVD+g");
	this.shape_1.setTransform(78,314.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgFiQIAIAAIClEcIgdAEIiTj+IAAArIgBgCIh6DRIgkAFg");
	this.shape_2.setTransform(80.6,314.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(61.5,300,36,29.2);


(lib.shape54 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004455").ss(0.8,1,1).p("AgXAJQAXgDAYgO");
	this.shape.setTransform(7.2,-2.7);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004455").ss(0.8,1,1).p("AgSAKQASgDATgQ");
	this.shape_1.setTransform(2.9,-0.5);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004455").ss(0.8,1,1).p("AgfARQAggMAegV");
	this.shape_2.setTransform(-2.5,2.8);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AAfg7QASARAGAcQAFAagKAWQgKAXgUAEIgOgEIgCgEQgMgigggRQgFgZAKgWQALgXATgEQATgEARARgAAGA5IAEARAg3gDIAPAF");
	this.shape_3.setTransform(-4.1,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#019AD3").s().p("AAABAIgBgEQgOgjgggRQgFgZAKgWQALgXATgEQATgDARARQASARAGAbQAFAagKAXQgKAWgUAEg");
	this.shape_4.setTransform(-3.4,2.5);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AAsgFQAFAfgKAZQgKAZgTACQgQADgQgWQgRgVgEghQgFgeALgZQAKgZASgCQARgDAQAWQAQAVAEAgg");
	this.shape_5.setTransform(0.3,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#019AD3").s().p("AgWA7QgRgVgEggQgFgfALgZQAKgZASgCQARgCAQAVQAQAVAEAhQAFAegKAZQgKAYgTADIgEAAQgOAAgOgTg");
	this.shape_6.setTransform(0.3,-1.5);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AAAhAQAOAAAMATQALATABAaQAAAagLAUQgLATgQAAQgOAAgLgTQgMgTAAgbQAAgZAKgUQAMgTAPAAg");
	this.shape_7.setTransform(6,-4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#019AD3").s().p("AgZAuQgMgTAAgbQAAgZAKgUQAMgTAPAAQAOAAAMATQALATABAaQAAAagLAUQgLATgQAAQgOAAgLgTg");
	this.shape_8.setTransform(6,-4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.6,19.7,21.3);


(lib.shape53 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAIIgDgIIADgIQACgDACAAQADAAACADIACAIIgCAIIgFAEg");
	this.shape.setTransform(7.5,-3.1);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAKIgCgKIACgJIAEgEIAFAEIACAJIgCAKIgFAFg");
	this.shape_1.setTransform(3,-1.1);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAMIgDgMIADgLQACgGADAAQADAAACAGQADAFAAAGQAAAHgDAFQgCAGgDgBg");
	this.shape_2.setTransform(-1.3,2.5);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AgoACQgFgZAKgWQALgXATgEQATgEARARQASARAGAcQAFAagKAWQgKAXgUAEIgOgEIAEARAg3gDIAPAFAAGA5IgCgEQgMgigggR");
	this.shape_3.setTransform(-4.1,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABAIgBgEQgOgjgggRQgFgZAKgWQALgXATgEQATgDARARQASARAGAbQAFAagKAXQgKAWgUAEg");
	this.shape_4.setTransform(-3.4,2.5);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AAsgFQAFAfgKAZQgKAZgTACQgQADgQgWQgRgVgEghQgFgeALgZQAKgZASgCQARgDAQAWQAQAVAEAgg");
	this.shape_5.setTransform(0.3,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWA7QgRgVgEggQgFgfALgZQAKgZASgCQARgCAQAVQAQAVAEAhQAFAegKAZQgKAYgTADIgEAAQgOAAgOgTg");
	this.shape_6.setTransform(0.3,-1.5);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0F4F5F").ss(0.8,1,1).p("AAAhAQAOAAAMATQALATABAaQAAAagLAUQgLATgQAAQgOAAgLgTQgMgTAAgbQAAgZAKgUQAMgTAPAAg");
	this.shape_7.setTransform(6,-4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAuQgMgTAAgbQAAgZAKgUQAMgTAPAAQAOAAAMATQALATABAaQAAAagLAUQgLATgQAAQgOAAgLgTg");
	this.shape_8.setTransform(6,-4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.6,19.7,21.3);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#750909").ss(0.8,1,1).p("AAGgaQgSAlAKAQ");
	this.shape.setTransform(-2.2,-23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#530606").ss(0.8,1,1).p("AAtg0QANAYgEAdQgFAfgSAUQgTAUgVgDQgXgDgMgYQgNgYAEgeQAEgbAOgSQARAHAXgHQANgEAPgIg");
	this.shape_1.setTransform(-2,-20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF1010").s().p("AgJBFQgXgDgMgYQgNgYAEgeQAEgbAOgSQARAHAXgHQANgEAPgIIAMARQANAYgEAdQgFAfgSAUQgRASgRAAIgGgBgAgEgCQgDgFAAgIQAAgQAMgaQgMAaAAAQQAAAIADAFg");
	this.shape_2.setTransform(-2,-20.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-27.2,11.1,14.1);


(lib.shape50 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004455").ss(1,1,1).p("AATAKIgTAHQgNAFgMgFQgNgFADgLQACgKALgFIAYgEIAaAEIAIAG");
	this.shape.setTransform(-15,-40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#019AD3").s().p("AgaAQQgNgEADgMQACgJALgEIAYgFIAaAFIAIAFIADAGQAAAEgLAEIgJADIgTAHQgHADgGAAQgGAAgGgDg");
	this.shape_1.setTransform(-14.9,-40.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004455").ss(0.8,1,1).p("AgdAFQAYgRAjAM");
	this.shape_2.setTransform(-8.6,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004455").ss(1,1,1).p("ACZhvQgMBaAcBMQAbBOhHAuQhIAthJAGQhLAGgrg4Qgsg3AIhlQAIhjAzhUQAyhVAwARQAuARAxA3QAWAaAUAnQALgJAWgMgAB4haQg7AwgpAUQgQAIgLAEQgZAHgQgHQgUgJgHgc");
	this.shape_3.setTransform(-0.7,-24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#019AD3").s().p("AiKC0Qgsg3AIhlQAIhjAzhUQAyhVAwARQAuARAxA3QAWAaAUAnQALgJAWgMQgMBaAcBMQAbBOhHAuQhIAthJAGIgNABQhCAAgngzgAgwgKQAIADAKAAQALAAAMgDQALgEAQgIQApgUA7gwQg7AwgpAUQgQAIgLAEQgMADgLAAQgKAAgIgDQgUgJgHgcQAHAcAUAJgAhrgsQANgMATAAIAAAAIABAAQAMAAAOAFIABAAIgBAAQgOgFgMAAIgBAAIAAAAQgTAAgNAMg");
	this.shape_4.setTransform(-0.7,-24.8);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004455").ss(1,1,1).p("AARAAQAEAHgEAFQgDAFgIAAIgMgGQgIgFgDgGQgDgGADgFQAEgEAHAAQAGAAAHAFQAIAFACAFg");
	this.shape_5.setTransform(-9.2,-46.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#019AD3").s().p("AgGAKQgIgFgDgFQgDgGADgFQAEgFAHAAQAGABAHAFQAIAFACAFQAEAHgEAFQgDAEgIAAg");
	this.shape_6.setTransform(-9.2,-46.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-48,35.8,46.3);


(lib.shape49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004455").ss(1,1,1).p("AgygbQATgHAcgDQAagCAUAOQATANAAAPQgBAQgVAKQgVAKgbgBQgdgCgVgLIgDgC");
	this.shape.setTransform(17.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#019AD3").s().p("AAAAmQgdgCgUgLIgDgCQgSgKABgNQAAgPAVgJIAHgDQASgHAbgDQAcgCATAOQAUANgBAPQgBAQgVAKQgTAJgaAAIgDAAg");
	this.shape_1.setTransform(16.7,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.6,-3.7,14.2,7.7);


(lib.shape46 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515151").ss(2.5,0,1).p("AAXBEIgOhmIgegWIAKBP");
	this.shape.setTransform(29.6,-8.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#515151").ss(2.5,0,1).p("AgWBEIAOhmIAegWIgKBP");
	this.shape_1.setTransform(-27.2,-8.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4B3F25").ss(1,1,0,3).p("AKBgSIAAAlIowAAIgEAAIg6AAIgkAAIg6AAIgNAAIooAAIAAglg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#817241").s().p("ABRASIgEAAIg6AAIgkAAIg6AAIgNAAIooAAIAAgjIUBAAIAAAjg");

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4B3F25").ss(1,1,0,3).p("AKBAXIgygtIydAAIgyAt");
	this.shape_4.setTransform(0,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5A869").s().p("AqAAXIAygtISdAAIAyAtg");
	this.shape_5.setTransform(0,-4.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-14.5,128.3,16.4);


(lib.shape44 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515151").s().p("AgNAOQgGgGABgIQgBgHAGgGQAGgGAHABQAIgBAFAGQAHAGgBAHQABAIgHAGQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(79.6,297);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AAAgnQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAg");
	this.shape_1.setTransform(79.8,297.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_2.setTransform(79.8,297.5);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,0,3).p("AgMiLIifERIAVAFIAjgFIBzjJIB1DJIAbAEIAcgEIiekRg");
	this.shape_3.setTransform(79.5,308.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#515151").s().p("AirCGICfkQIAaAAICeEQIgcAFIgbgFIh1jIIhzDIIgjAGg");
	this.shape_4.setTransform(79.5,308.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)","rgba(0,0,0,0)"],[0,0.486,1],-64,0,64.2,0).s().p("AqAAgIAyg/ISdAAIAyA/g");
	this.shape_5.setTransform(79.9,325.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.8,293.5,128.3,35.3);


(lib.shape43 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#004455").ss(1,1,1).p("AhAAGQA3gBAtAUQAIgCADgNIAFgdQADgRgGgcQgHgbAgAAQASAEAEALQADALgGAPQAMADAAAfIgDAkQgBAHABAHIADAZQACATgMAHQgNAHgKAAQgKAAgHgJIgFgHQhOgshMAO");
	this.shape.setTransform(7.9,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#019AD3").s().p("AA3BTIgFgHQhOgshMANIAognQA3gBAtAUQAIgCADgNIAFgdQADgRgGgcQgHgbAgAAQASAFAEALQADAKgGAQQAMADAAAeIgDAjQgBAIABAGIADAaQACATgMAHQgNAHgKAAQgKAAgHgJg");
	this.shape_1.setTransform(7.9,-2.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-11.7,21.2,18.5);


(lib.shape41 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.451)").ss(1,1,1).p("Al2AUQAcgNBDgIQB0gSCjAAQCkAABzASQBDAIAdAN");
	this.shape.setTransform(-2.2,-12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(140,215,242,0.8)").s().p("Al1AUQAbgNBDgIQB0gSCjAAQCjAAB1ASQBCAIAcANg");
	this.shape_1.setTransform(-2.2,-12.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#124576").ss(1,1,1).p("AmLgMIgOAZAGaANIgNgZ");
	this.shape_2.setTransform(-2.3,-11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#124576").ss(1,0,0,4).p("ADTgMIg6AEIg3ADQgvACgzAAIiYgFIhCgFIg8gIQhggPgRgUQgEgEAAgFIABgCQAFgYBvgSIApgFIDtgNIBiACICAAJIA2AHQBuASAFAYIAAACIgDAJQgRAUhfAPgAmZgmQAHAJAXAIQAeAKA6AJIBNAIIA3AEICfAFQAzAAAvgBIA+gEIAwgDIBVgJQA5gJAegKQAXgIAHgJAl7gVIAcBPIAAABQACAcBlAUIA2AJIDCAMIDAgLIA5gKQBRgQASgVIAEgLIAAgBIAchP");
	this.shape_3.setTransform(-2.3,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2170DA").s().p("AjCBAIg2gJQhlgUgBgcIAAgBIgdhQQAeALA6AJIBNAJIA3AEICfAGQAzgBAwgBIA9gEIAwgDIBUgKQA6gJAegLIgcBQIAAABIgEAKQgSAWhRAQIg5AJIjAALg");
	this.shape_4.setTransform(-2.3,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D60BA").s().p("AhEA5IhCgGIg8gIQhggPgRgTQgEgFAAgEIABgBQAFgYBvgRIApgGIDsgMIBjACICAAJQAHBGgWAfIg6AFIg3ADQgvABg0AAg");
	this.shape_5.setTransform(-10.6,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#17599B").s().p("AhMgyIA2AHQBsARAGAYIAAACIgEAIQgQATheAPIhFAJQAWgfgHhGg");
	this.shape_6.setTransform(28,-12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C7ADF").s().p("AifAkIg3gFIhNgJQg6gJgegLQgXgGgHgIIAOgcIABABQAAAEADAFQARATBgANIA8AIIBDAGICXAEQAzAAAwgBIA2gDIA6gFIBFgJQBggNAQgTIAEgJIAAgBIAOAcQgIAIgWAGQgeALg6AJIhUAKIgwAEIg9ADQgwACgzAAg");
	this.shape_7.setTransform(-2.3,-8.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.3,-19,82.1,25.7);


(lib.shape40 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("Ag5A6IAAhzIBzAAIAABzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.8,11.7,11.7);


(lib.shape36 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AE6C09").ss(1,1,1).p("AFzAvIgCgOQgRgXgUAAIgmADIggALIgagfQgNgQgQgGQgPgGgUgCIgmgCQgTAAgUAKIgdAUQgOgPgggLQgdgLgcAAIgiAHQgVAGgIAEIgXAQIgQANQgHAAgNgJQgMgLgVAAQhCAAgVAoIgNgIIgRgEQgUAAgVANIgUAQ");
	this.shape.setTransform(4.4,136);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0B53F").s().p("ABNA3IgQgBQg8gFhXAGIkcAAIAAgaIAUgQQAVgNAUAAIARAEIANAIQAVgoBCAAQAVAAAMALQANAKAHAAIAQgOIAXgQIAdgKIAigHQAcAAAdALQAgALAOAPIAdgUQAUgKATAAIAmACQAUACAPAGQAQAGANAQIAaAfIAggLIAmgDQAUAAARAXIACAOIgFAOIgBACg");
	this.shape_1.setTransform(4.4,136.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#316918").ss(1.2,1,1).p("ABWv6QAWAWAAAgQhuG0CIHmQB0BUBHglQARgIANgXQAMgXAIhuQAJhvgQh9QgQh+AAgcQAAggAWgWQARgRAVgEIAQgCQAfAAAWAXQAXAWAAAqQApGHhFEDQgqBthogIQhFgFhfg4IAVB0QAeCDAFDgQAGDjgMDBIifAAIgEAAIiIAAQApixARjRQAQjRgojeIgDACQkbDLhfiyQghg+gLhrIgkk6QAAggAWgWQAWgXAgAAIANABQAXAEARASQAWAVAAAeIADC+QAJFcEWjrIgIgxQhRoMA7jwQA9j7ABAQQAAgRAWgWQAUgXAfAAIAOABQAXAEARASgAAxQSQBXgZhTAZAhEBIIgNg0AmpkzQAcAJAOAW");
	this.shape_2.setTransform(0,35.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.4,-69,103.1,211.5);


(lib.shape35 = function() {
	this.initialize();

	// Layer 94
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAMIAPgX");
	this.shape.setTransform(51.6,-25.5);

	// Layer 93
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgLAPIAXgd");
	this.shape_1.setTransform(45,-17.5);

	// Layer 92
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAKIgDgT");
	this.shape_2.setTransform(3,-86.3);

	// Layer 91
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAPIAPgc");
	this.shape_3.setTransform(25.6,15.2);

	// Layer 90
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAVIgDgp");
	this.shape_4.setTransform(6.3,9);

	// Layer 89
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgCAIIAFgP");
	this.shape_5.setTransform(9.4,30.3);

	// Layer 88
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPARIgdgh");
	this.shape_6.setTransform(3,95.2);

	// Layer 87
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgKANIAVgZ");
	this.shape_7.setTransform(12.6,94);

	// Layer 86
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHAKIgNgT");
	this.shape_8.setTransform(7,83.2);

	// Layer 85
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgJAMIATgX");
	this.shape_9.setTransform(14,78.7);

	// Layer 84
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEARIAJgh");
	this.shape_10.setTransform(11.8,64.4);

	// Layer 83
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAIALIgPgV");
	this.shape_11.setTransform(5.4,70);

	// Layer 82
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AASgCIgjAF");
	this.shape_12.setTransform(-6.8,96.3);

	// Layer 81
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AASAAIgjAB");
	this.shape_13.setTransform(-5,87.8);

	// Layer 80
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAZADIgxgF");
	this.shape_14.setTransform(-5.7,80);

	// Layer 79
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AANAKIgZgT");
	this.shape_15.setTransform(-3,69.7);

	// Layer 78
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgLgGIAXAN");
	this.shape_16.setTransform(22.5,96.9);

	// Layer 77
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMgBIAZAD");
	this.shape_17.setTransform(22.6,88.2);

	// Layer 76
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgbAHIA3gN");
	this.shape_18.setTransform(23.9,77.4);

	// Layer 75
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMAMIAZgX");
	this.shape_19.setTransform(22.6,67.4);

	// Layer 74
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALAKIgVgT");
	this.shape_20.setTransform(-2.5,55.2);

	// Layer 73
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAGIghgL");
	this.shape_21.setTransform(-4.4,41.3);

	// Layer 72
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAMIgDgX");
	this.shape_22.setTransform(4.3,39.2);

	// Layer 71
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALAHIgVgN");
	this.shape_23.setTransform(4.4,48.7);

	// Layer 70
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAPIAJgd");
	this.shape_24.setTransform(7.3,21.7);

	// Layer 69
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALANIgVgZ");
	this.shape_25.setTransform(-0.5,23);

	// Layer 68
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgCASIAFgj");
	this.shape_26.setTransform(-40.5,17);

	// Layer 67
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPACIgdgD");
	this.shape_27.setTransform(-38.7,28.2);

	// Layer 66
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKACIgTgD");
	this.shape_28.setTransform(-24.2,31.4);

	// Layer 65
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMgPIAZAf");
	this.shape_29.setTransform(-15,37.3);

	// Layer 64
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgBgLIADAX");
	this.shape_30.setTransform(-27.2,41.2);

	// Layer 63
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPgOIgdAd");
	this.shape_31.setTransform(-39.7,39.2);

	// Layer 62
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUAFIgngJ");
	this.shape_32.setTransform(-47.7,23.2);

	// Layer 61
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAZAKIgxgT");
	this.shape_33.setTransform(-48.7,9.4);

	// Layer 60
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPAGIgdgL");
	this.shape_34.setTransform(-49.2,0.5);

	// Layer 59
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAMAKIgXgT");
	this.shape_35.setTransform(-51.9,-10.8);

	// Layer 58
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgBAIIADgP");
	this.shape_36.setTransform(-38.2,-22.1);

	// Layer 57
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKARIgTgh");
	this.shape_37.setTransform(-44.7,-22);

	// Layer 56
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAASIABgj");
	this.shape_38.setTransform(-39.3,-11.4);

	// Layer 55
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgCAUIAFgn");
	this.shape_39.setTransform(-36.8,0.9);

	// Layer 54
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAaIAJgz");
	this.shape_40.setTransform(-34.7,13);

	// Layer 53
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgKAPIAVgd");
	this.shape_41.setTransform(-31.5,19.9);

	// Layer 52
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAQIAAgf");
	this.shape_42.setTransform(-22.9,22.8);

	// Layer 51
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,1,1).p("AASAQIgjgf");
	this.shape_43.setTransform(-14.5,18.5);

	// Layer 50
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAaIABgz");
	this.shape_44.setTransform(-2.3,8);

	// Layer 49
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAMAIIgXgP");
	this.shape_45.setTransform(-9.4,3.8);

	// Layer 48
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAMIgDgX");
	this.shape_46.setTransform(16.5,17.4);

	// Layer 47
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAIIAPgP");
	this.shape_47.setTransform(41.6,13.8);

	// Layer 46
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAMIABgX");
	this.shape_48.setTransform(35.9,18.4);

	// Layer 45
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAOIgDgc");
	this.shape_49.setTransform(42.8,-4);

	// Layer 44
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAHIAAgN");
	this.shape_50.setTransform(44.8,-44);

	// Layer 43
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAFAIIgJgP");
	this.shape_51.setTransform(43.5,-34.1);

	// Layer 42
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAHIAJgN");
	this.shape_52.setTransform(2,-75.8);

	// Layer 41
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACAJIgDgS");
	this.shape_53.setTransform(-1.7,-62.8);

	// Layer 40
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAMIAJgX");
	this.shape_54.setTransform(-2.7,-39.8);

	// Layer 39
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHAQIgNgf");
	this.shape_55.setTransform(-3.9,-22.6);

	// Layer 38
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAcIAPg3");
	this.shape_56.setTransform(-2.5,-8.6);

	// Layer 37
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUANIgngZ");
	this.shape_57.setTransform(-11.9,-17.6);

	// Layer 36
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQAIIgfgP");
	this.shape_58.setTransform(-12,-29.4);

	// Layer 35
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQgBIgfAD");
	this.shape_59.setTransform(-12.8,-41.8);

	// Layer 34
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPAAIgdAB");
	this.shape_60.setTransform(-11.7,-50.1);

	// Layer 33
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPABIgdgB");
	this.shape_61.setTransform(-11.2,-60.1);

	// Layer 32
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("AASgBIgjAD");
	this.shape_62.setTransform(-9,-71);

	// Layer 31
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAIIghgP");
	this.shape_63.setTransform(-7.2,-79.9);

	// Layer 30
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAMAFIgXgJ");
	this.shape_64.setTransform(-4.2,-89.8);

	// Layer 29
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAMAMIgXgX");
	this.shape_65.setTransform(-0.9,-95.3);

	// Layer 28
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("AACALIgDgV");
	this.shape_66.setTransform(5.8,-96.4);

	// Layer 27
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAPIAPgd");
	this.shape_67.setTransform(10.9,-93.5);

	// Layer 26
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgKAHIAVgN");
	this.shape_68.setTransform(10.4,-83.8);

	// Layer 25
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgPACIAfgD");
	this.shape_69.setTransform(7.4,-71.8);

	// Layer 24
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgVAAIArAA");
	this.shape_70.setTransform(7.3,-56.3);

	// Layer 23
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgKAAIAVAA");
	this.shape_71.setTransform(6.1,-45.5);

	// Layer 22
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgOABIAdgB");
	this.shape_72.setTransform(5.5,-33.1);

	// Layer 21
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMAKIAZgS");
	this.shape_73.setTransform(8.9,-14.5);

	// Layer 20
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgKAMIAVgX");
	this.shape_74.setTransform(14.9,2.4);

	// Layer 19
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHAUIAPgn");
	this.shape_75.setTransform(20.9,6.4);

	// Layer 18
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAAZIABgx");
	this.shape_76.setTransform(29.9,7.7);

	// Layer 17
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKANIgTgZ");
	this.shape_77.setTransform(35.8,1.8);

	// Layer 16
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQAAIgfAA");
	this.shape_78.setTransform(36.6,-11);

	// Layer 15
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(1,1,1).p("AASAIIgjgP");
	this.shape_79.setTransform(37.1,-23.6);

	// Layer 14
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAPABIgdgB");
	this.shape_80.setTransform(35.8,-40.4);

	// Layer 13
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQALIgfgV");
	this.shape_81.setTransform(36.9,-51.9);

	// Layer 12
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAARIAAgh");
	this.shape_82.setTransform(46.5,-54.5);

	// Layer 11
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgOAPIAdgd");
	this.shape_83.setTransform(50.5,-43);

	// Layer 10
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgLAFIAXgJ");
	this.shape_84.setTransform(51.8,-35.5);

	// Layer 9
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgLAAIAXAA");
	this.shape_85.setTransform(52,-15.5);

	// Layer 8
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgTAIIAngP");
	this.shape_86.setTransform(51.3,-0.1);

	// Layer 7
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgTAFIAngJ");
	this.shape_87.setTransform(49.5,10.2);

	// Layer 6
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgVgHIArAP");
	this.shape_88.setTransform(41.8,25);

	// Layer 5
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADgTIgFAn");
	this.shape_89.setTransform(29.1,27.9);

	// Layer 4
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMADIAZgF");
	this.shape_90.setTransform(18.1,29.3);

	// Layer 3
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQAHIAhgN");
	this.shape_91.setTransform(20,40.4);

	// Layer 2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQAFIAhgJ");
	this.shape_92.setTransform(21.5,49.4);

	// Layer 1
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgVAAIArAA");
	this.shape_93.setTransform(22.8,60.2);

	this.addChild(this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-97.5,106.5,195.3);


(lib.shape33 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4EA628").s().p("AAIQRQBTgZhWAZQBMkBAAjhQAAjhAGgzQAPgXAlAGQAdCEAGDgQAFDigMDBgAEZDUQBCgUAhh/QA4kNgVlmQACg1g1gKIAPgBQAgAAAWAWQAWAXAAAqQApGGhFEDQgnBmhdAAIgOAAgAnRhkQgIiFAugsQgPgWgbgIQAWAEASARQAVAWABAeIACC9QAJFdEWjrIgHgxIAMAzQiHCChTAAQiAAAgGktgAAFg0Qi2noCymSQAphHgpgbQAXAEARARQAXAXAAAfQhvG0CJHnQBzBTBIgkQg3Ajg1AAQhWAAhOhcg");
	this.shape.setTransform(4.5,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#439221").s().p("ABKQSQBWgZhTAZgAg/QSQAqixAQjRQAOjRgmjeIgCACQkbDLhgiyQghg+gLhrIgjk6QAAggAWgWQAWgXAfAAIAOABQAbAJAPAWQguArAICGQAKHyFWlHIgMg0QhRoMA6jwQA9j7ABAQQAAgRAUgWQAXgXAfAAIANABQApAbgpBHQiyGSC2HoQB/CXCRheQARgIAMgXQAMgXAJhuQAJhvgQh9QgQh+AAgcQAAggAWgWQAQgRAWgEQA1AKgCA1QAVFmg4ENQghB/hCATQhEgFhgg4IAWB0QglgGgPAWQgGA0AADhQAADhhMEBg");
	this.shape_1.setTransform(-2.3,35.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.078)").s().p("ABKgoIE/gQIAvBNIkkAkQxyg9Qogkg");
	this.shape_2.setTransform(-20.8,136);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-69,116.6,210.8);


(lib.shape31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],4,-12.8,4,-130.9).s().p("EgwvALjIAA0lUA0dgFAAtCAFAIAAUlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-311.9,-73.9,624,147.9);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBBE42").s().p("EgwvALjIAA0lUA0egFAAtAAFAIAAUlg");
	this.shape.setTransform(240,311.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.9,238,624,147.9);


(lib.shape28 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,2.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AkGBQQgGgIgBgKQgGgmBeg5QBeg6BBgBICvAOQBwAPAFAhQACAQgHANQgJAMgRACIh/gPQiCgQghAEIgmAaIgvAgQgVAIgeAVQgaASgMACIgIAAQgSAAgLgNg");
	this.shape_1.setTransform(-26.8,5.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("ADeBVIhVgwQhMgugHgBIiEAdQiBAfgSgCQgagDgIgSQgFgKABgLQADgXBrgcICdglQA0gOBsBBQBmA7gCAWQgCAPgLAKQgKALgOAAIgFgBg");
	this.shape_2.setTransform(18.2,2.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.9,-5.8,98.7,20.6);


(lib.shape27 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,1.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("ACCBfQh4gTiXg4QhMgZgZghQgQgWAHgSQAFgOAOgGQAPgHASAHQAPAFAOAPQANAOAqAPQBzArC8AgQAvAIAMALQAOANgMAgQgFANglAAQgdAAgwgIg");
	this.shape_1.setTransform(19.7,5.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("AjBBTQgZgJgFgRQgFgRAKgPQAKgQAWgHIAhACQALAGAXgGQA+gQA0gWQAsgVBkgdIA+gDIAOAPIALAlIgjAQIheATQgIAAg3AcQg0AbhQAXQgiAKgaAAQgUAAgPgFg");
	this.shape_2.setTransform(-32.5,6.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-5.1,100.5,20.7);


(lib.shape26 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("ABcCDQhfgOh4hwQgngjgigoIgbgkQAGgnAmAQQAbALA5AxQAkAjAmAbQBGA1AzAIQAeAEAJgQQAKgRAXAEQAcAEAPAeQAHAPACAPQgCAUgcALQgXALgjAAQgUAAgYgEg");
	this.shape_1.setTransform(17.9,8.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("AjTCMQgLgKgBgOQgEgdARgEIBLgHQA6gHBUg9QBThAAWgLQAWgLAFgZQAHgbAMgKQAggaATAUQANANADAcQAKBRizBeQg5AghFAcQg4AWgMACIgYACQghAAgQgQg");
	this.shape_2.setTransform(-31.6,10.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.2,-11.3,94.7,37.5);


(lib.shape25 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-10.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AAcCkQhSgzhBiVQgVgxgQgyQgMgqACgCQAUgiAdAeQAVAWAgBDQAUAuAXApQArBMArAbQAaAQAPgLQAQgMATAMQAZAQABAiQABAQgEAPQgKAQgeAAIgBAAQgoAAg3gig");
	this.shape_1.setTransform(10.7,11.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("AifDJQgNgFgGgNQgNgbAPgJIBFgdQA1gZA8hVQA7hWASgSQARgSgDgYQgCgcAJgOQAWgiAYANQARAJALAZQAjBKiMCQQguAxg4AwIg5AsQgeAOgVAAQgNAAgJgFg");
	this.shape_2.setTransform(-25.1,11.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.7,-16.5,71.2,48.8);


(lib.shape24 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AA3CcQhZgmhYiJQgdgsgXgwQgTgnABgDQAPgkAhAZQAZASAqA9QAbAqAdAlQA3BFAvAUQAcAMANgOQAOgOAVAJQAaALAHAhQAEARgCAOQgIASgdAFQgIACgJAAQgjAAgwgUg");
	this.shape_1.setTransform(13.6,11.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("Ai7CxQgMgIgEgNQgIgdAQgHIBJgSQA3gQBKhKQBIhMAUgPQAUgPABgZQACgbAKgNQAcgeAWARQAOALAIAbQAXBOihB5Qg1Apg/AmQgzAfgNAEg");
	this.shape_2.setTransform(-28.4,10.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-14.2,82.1,43);


(lib.shape23 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-6.1,-2.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("Ah4ARQgsgdgngjIghggQAAgnApAKQAdAIA/AoQApAdApAWQBNAqA0AAQAeAAAHgRQAHgQAXAAQAdAAATAaQAKAOAEAOQAAAUgaAPQghAWhDAAQhiAAiFheg");
	this.shape_1.setTransform(19.1,9.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("AjjBvQgJgKAAgOQAAgeASgCIBLACQA6AABbgyQBag1AYgJQAXgIAIgYQAKgaANgJQAjgVARAWQALAPAAAcQAABPi9BKQg9AYhIATQg6AQgNAAQg0AAgTgXg");
	this.shape_2.setTransform(-33,10.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.7,-9,99.6,33);


(lib.shape22 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,1.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("ACMBPQh6gHicgmQhOgUgdgcQgSgTAFgTQAEgOAMgIQAOgIATAFQAPAEAQAMQAPANArALQB4AdC+ALQAvADANAKQAPALgIAiQgFAThLAAIglgBg");
	this.shape_1.setTransform(20.3,2.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("AjKA0QgYgMgDgSQgCgRAMgMQANgPAXgDQAWgDAJAJQALAJAYgDQA/gJA2gOQAwgNBmgPIA/AHIALAQIAGAnIglAIIhgAFIhDAUQg4AThRAMQgTADgRAAQgkAAgXgNg");
	this.shape_2.setTransform(-33.3,3.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.4,-5.4,102.9,16.1);


(lib.shape21 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,8.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AhTBKIgMgFQg+gWgigGIABAAIhZgSIAAAAQhOgPg2ADIgqAHIgDAAQgeACgLgTQgIgHAAgLQgCggAegOQAVgLAqACIDFAaIABAAQBWARAsAMQAxAOAYAPIATAAQAAgCAygXQA/ghAmgGQBegSBeACIBtAEQAXAAASAVQANARgBAJQAAAPgJAKQgKAPgVABQgdABglgLIhvgGQheAFhaApIAAAAIgtAUg");
	this.shape_1.setTransform(-5.4,5.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.1,-2.2,101.4,17.5);


(lib.shape20 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("Ag6CLIgTgcIhBg3IgBAAQgjgZgqgXQhMgngpgCIgTADIgCAAIgzADQgtAAgNgOIAAgBQgOgMAEgPQgCglBKgFIB+AEIAHACIBJAeQAvASAVAVQA3ApAjAeQAhAcAQAWIAWgaQA5hCAZgYIAmgoIABAAQAggeAfgMQBxguBdAnQBAAVgFAdQAAAQgKALQgLAOgVAAQgFABgbgMIAAgBQgTgHhIAAQhVABheBqQgZAcgnAzIgBAAIAAABg");
	this.shape_1.setTransform(-7.1,2.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-11.3,95.9,31.7);


(lib.shape19 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AjQCsQgZgDgHgUQgEgKACgLQAEgnBQhGQBJg/Bfg4QBlg6BAgLQBJgLgFA8QgCAMhQAeQhtAohOA1IhQBXQhDBGggAAIgDAAg");
	this.shape_1.setTransform(19.9,-1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("ABgBzIhxhfIgvgnQgegagbgNQgagNhDgXQgWgHgCgZQgKh9D0C1QBNA7BZBNQBNBEAAAFQABAOgKALQgKANgSACIgBAAQgZAAhQhAg");
	this.shape_2.setTransform(-29.2,-2.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-20.4,97.6,41.6);


(lib.shape18 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,19.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AjADQQgFgJgCgLQgHgnA6hYQA1hRBPhQQBQhTA6gbQBEgfAKA7QACANhFAyQheBDg8BJIg3BpQgwBagfAFIgJABQgSAAgKgOg");
	this.shape_1.setTransform(15.1,-2.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("ACJDqQgWgGg7hXIhMh/IgggzQgVgigVgWQgVgUg4grQgSgNAGgZQAeh6CsD5QA4BPA8BnQAzBZgBAEQgDAOgNAIQgJAFgLAAIgMgBg");
	this.shape_2.setTransform(-22.8,-4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.4,-27.7,76.7,53.5);


(lib.shape17 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,17.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AjXC4QgFgKABgLQgDgnBEhSQA/hJBXhGQBZhKA9gUQBHgWADA8QABANhKApQhmA4hEBBIhDBiQg6BTgfACIgEABQgWAAgKgSg");
	this.shape_1.setTransform(17.3,-2.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("ACiDYQgXgDhEhQIhbh1IgmgwQgYgfgYgSIhUg2QgTgLADgZQAPh9DIDjQBCBHBHBgQA+BSgBAEQgCAOgLAJQgLAJgPAAIgGAAg");
	this.shape_2.setTransform(-25.6,-4.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-26.1,85.9,49.6);


(lib.shape16 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,14.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("AjQCsQgZgDgHgUQgEgKACgLQAEgnBQhGQBJg/Bfg4QBlg6BAgLQBJgLgFA8QgCAMhQAeQhtAohOA1IhQBXQhDBGggAAIgDAAg");
	this.shape_1.setTransform(19.9,-1.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("ABgBzIhxhfIgvgnQgegagbgNQgagNhDgXQgWgHgCgZQgKh9D0C1QBNA7BZBNQBNBEAAAFQABAOgKALQgKANgSACIgBAAQgZAAhQhAg");
	this.shape_2.setTransform(-29.2,-2.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-20.4,97.6,41.6);


(lib.shape15 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,10.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("Ag1CeIgSggIg7g+IgBAAQgggcgmgaQhGgtgmgCIgRADIgCAAIgvAEQgpAAgMgRIAAAAQgNgOAEgRQgCgqBEgFIBzAEIAHADIBCAhQAsAUATAYIBSBRQAfAgAOAZIAUgeQA0hKAYgcIAjgtIABgBQAdgiAcgNQBng0BVArIABABIAAAAQA6AYgEAhQAAASgJAMQgKAQgTAAQgFACgZgOIAAgBQgRgIhCAAQhOABhWB5QgXAfgkA5IgBABIAAABg");
	this.shape_1.setTransform(-7.1,-2.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,-18.5,87.9,35.5);


(lib.shape14 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgYAfgTQAegSAqAAQArAAAeASQAfATAAAYQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("Ag6B3IgTgYIhBgvIgBgBIhNgoQhMgigpgBIgTADIgCAAIgzACQgtAAgNgMIAAgBQgOgKAEgNQgCggBKgEIB+AEIAHABIBJAaQAvAPAVASIBaA9QAhAXAQAUIAWgXQA5g4AZgVIAmgiIABAAQAggaAfgKQBxgnBdAhQBAASgFAZQAAAOgKAJQgLAMgVAAQgFABgbgKIAAgBIhbgGQhVABheBaQgZAYgnAsIgBAAIAAABg");
	this.shape_1.setTransform(-7.1,-3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-15.4,95.9,27.7);


(lib.shape13 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#c7922e").s().p("AhIArQgfgSAAgZQAAgZAfgSQAegSAqAAQArAAAeASQAfASAAAZQAAAZgfASQgeATgrAAQgqAAgegTg");
	this.shape.setTransform(-4.3,4.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#c7922e").s().p("ADoBXIh2gxQh7gvgggEIgsAQIg1ATQgXACgiANQgdALgNgBQgYgDgIgTQgEgJABgLQAEgjBqgiQBqggA9APQBuAkA5AWQBpAogDAiQgCAQgKAKQgLAKgOAAIgFAAg");
	this.shape_1.setTransform(-27.7,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#c7922e").s().p("Aj/BNQgGgIgBgLQgCgaBjguQA1gaBfgpQAvgZB2ArQBxAoACAWQABANgJANQgKANgRACQgIAAhUgfQhVgegHAAIh7A3Qh4A3gSACIgHAAQgVAAgKgOg");
	this.shape_2.setTransform(18.7,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-8.7,100.2,19.1);


(lib.shape10 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F7826").s().p("EguKAPYIAA7PIAQgHIA0gCIBVAHIBaAIIBQgKIChAMICNANQAzACAkBjIAwCVQAMAaAMAqIARBIQAGAvAiANIBBAPQAWAJAnAIQAdALAKAlIASBBQAMAugBAdQAAArAhAfQAVAWAuAbQAIAEAxAxQA0AvAYAAQAbAABHg1QBGg0AYAAQBBAAA2AgQAdARA8A1QA5AyApAVQBAAgBQAAQDdgoBKhdQBPg6AUgYQAngqAbhcIAiiGQAkiFA2kmIACgGQACgUABgLQACgKAAgBQAAAAgBAJQgBAKgDATIACgGIApjhQAYhXAbAAIBeAJQBYANAMAXQAoBHAMAbQAYA1AAAuIgDBIIgDBvQAAAkgFA+QgCAzARAkQAQAeArAVQAOAIBEAZQA2AUAaAUQAkAcAHArQALBJA5BXQA6BWBIBHQBHBHApAPQApAPBJAAIBTgCIBigQQBXgQBfj8QBhgZCygNQCygMBEAzQBEAwArhTQAshUBziyQBzizgahOQgZhPAfjkQAJg9B4AYQB6AYE4gtQGKARAJAYQAKAYgCBxQgDByAGAWQAhCHBiAhIAAW6g");
	this.shape.setTransform(241.5,181.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7922E").s().p("EgvZALcIAArVIA6gFICygGQBnAAAkAhIAdAlQASAZAUARQAKAHAZAEQAfAGALAEQAHADAeATQAYAQAJAAQAQAABlg5QB8g4BYg2QBZg3ArjPIAFhRIAIhaIAJhUQAAgdgJgaQgIgbAAgHIAGgSQAFgUAAgWQAAgxAtgQIBrAAQApAFASBOQAXBmAKAQQAbAoAEBPQAFB3AHAmIAbCZQAUBdAXA6QBDCmCSAAQBmAAA+jyQAThOANhfQAGgrBlgGQBzgMANAlIAXBTQAOA3AOAgQAdA/BOA4QBSA6BJAAQAPAAC0gwQC2gxAQgBQCDgIBGgxQA2goAphbQAbg3ARiCQAQiCAbg7IDTgFIB3gGIBPgFQAhAABHANQBHAOAgAAIAhgFIAggGQBQAAANBNIAFBFQAEArAJAXQAKAXALBxQASBmAzAAQBHAAAkgtQAdglAMhNIAOiSQAIhdA2g2IAtgCQAPAIANgCIAZgCQANAAASAPQATAQAKAtIAPBPIAJBLQACAkgFALQgFALgCCBQgEB/EdBxQDbBXINATIABAAIABAAIBngIQBtgGA7AOQCZAjB7AIIA7ADIAAHLg");
	this.shape_1.setTransform(239.5,148.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(239,169,24,0.498)").s().p("EgwRANqIAA25QBBgLA4geQBUgvARhAIgBgiQgBgVAGgMIADgDQASgfBOgNIBcgMIBigEIBEAFIBEAFIDpgKIDPAIIDuATQA/AHCBgMQA/ADAcAjQARAVADAhQAGAxAdBPQAgBWAsBMQB1DFB6ABQAyAAA1gbQA7geAJgjIAZhhQAOg7AEgtQAQirAggoQAigsB+AAIAPACIAJAEQAFA0AACXQAAB0APA3QAWBRBAAlQBIAtCPgBQAIAABJhCQBJhCACgIQAnhagCgkQCGhJASA/QAfBWBAAAQBUABA1htQAshYAAhbQAAg2BHAAIBjAFIB0AMICVAMICGAJICGgLIB+gLIDdgLIC1gKIBGACQBDADgPAFQAjBxAqBOQAzBhBvAAIARgEIAAAGISwAAIAAVrg");
	this.shape_2.setTransform(240,163.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FFCA2B"],[0,1],0,146.6,0.1,-146.5).s().p("EgsqARBMAAAgiBMBZVAAAMAAAAiBg");
	this.shape_3.setTransform(245.9,103);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.9,-6,618,286);


(lib.shape9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2D2EA").s().p("AgSABQgBgHAGgGQAJgKATAHIACAEIACALIgDANIgQAGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,4,3.9);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite95 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape96("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite89 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape90("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite86 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape87("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	
	this.frame_1 = function() {
		playSound("sound88");
	}
	this.frame_7 = function(){
    this.stop ();
    if (!this.parent.gameWin)
    {
      this.parent.parent.gotoAndPlay("miss");
    }
    else
    {
     //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
     this.parent.parent.GameWon = true;
    } // end else if			
	}
	this.frame_8 = function() {
		playSound("sound92");
		var self = this;
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite6Puff(); //attachMovie("Puff", "puff" + i, i);
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
   this.parent.gotoAndStop(this.parent.currentFrame - 1);   //prevFrame();
   this.parent.lose();  
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite86();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite89();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape91("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));
  
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite84 = function(mode,startPosition,loop) {
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
  this.frame4 = function(){this.gameWin = true}
	// Layer 3
	this.star3 = new lib.sprite85();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(4));

	// Layer 2
	this.star2 = new lib.sprite85();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(4));

	// Layer 1
	this.star1 = new lib.sprite85();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3).call(this.frame4)) 
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,109.5,30.1);


(lib.sprite82 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape83("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-12.9,86.4,21.9);


(lib.sprite80 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape81("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-2.9,38.5,6);


(lib.sprite76 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape77("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-2.3,9.8,13);


(lib.sprite71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape72("synched",0);

	this.instance_1 = new lib.shape73("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.2);


(lib.sprite70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
  this.frame8 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape74("synched",0);

	this.instance_1 = new lib.shape75("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},6).wait(1));

	// Layer 1
	this.eyesblink = new lib.sprite71();

	this.timeline.addTween(cjs.Tween.get(this.eyesblink).to({_off:true},1).wait(7));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7).call(this.frame8))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-6.4,17.3,12.2);


(lib.sprite66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
  this.frame2 = function(){this.stop()}
  
	// Layer 1
	this.instance = new lib.shape67("synched",0);

	this.instance_1 = new lib.shape68("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(1))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-1.2,14.5,2.6);


(lib.sprite64 = function() {
	this.initialize();

	// Layer 4
	this.eyes = new lib.sprite70();
	this.eyes.setTransform(-3.7,-10);

	// Layer 3
	this.instance = new lib.shape69("synched",0);

	// Layer 2
	this.mouth = new lib.sprite66();
	this.mouth.setTransform(-1,-0.2);

	// Layer 1
	this.instance_1 = new lib.shape65("synched",0);

	this.addChild(this.instance_1,this.mouth,this.instance,this.eyes);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-27.2,29.1,32);


(lib.sprite62 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape63("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.6,12.8,13.5);


(lib.sprite60 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape61("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-2.3,9.8,13);


(lib.sprite58 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape59("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.3,6.3,11.5);


(lib.sprite57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{land:14});
  this.frame1 = function(){this.stop()}
  this.frame14 = function(){this.stop()}
  this.frame18 = function(){this.stop()}
	// Layer 7
	this.instance = new lib.sprite58();
	this.instance.setTransform(7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-14.8},0).wait(1).wait(1).to({rotation:-44.8,x:7.2,y:8.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.3,x:6.1,y:8.2},0).to({rotation:0,skewX:59.7,skewY:59.8,x:5,y:8.5},1).wait(1).to({skewX:112.1,skewY:112.3,x:3.8,y:8.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:147.9,skewX:0,skewY:0,x:4.2,y:8.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:183.6,x:4.6,y:8.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:219.4,x:5.1,y:8.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:255.1,x:5.6,y:7.7},0).to({scaleX:1,scaleY:1,rotation:245.1},1).wait(1).to({scaleX:1,scaleY:1,rotation:235,y:7.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:225.1,x:5.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:225,y:7.9},0).to({scaleX:1,scaleY:1,rotation:225.4},1).wait(1).to({scaleX:1,scaleY:1,rotation:225.7,x:6.5,y:7.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:225.9,x:6.6,y:7.9},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite60();
	this.instance_1.setTransform(3.1,15.8,1.101,1.101,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:81.5},0).wait(1).wait(1).to({rotation:89.8,y:15.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:71.7,y:15.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:53.7,x:3,y:15.9},0).wait(1).to({rotation:35.6,y:15.8},0).to({scaleX:1.1,scaleY:1.1,rotation:-0.3},2).wait(1).to({rotation:-18.4,x:2.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-36.6,x:2.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-26.6},0).to({rotation:-16.6},1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-6.6,x:2.9},0).wait(1).to({rotation:-6.6,x:2.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:52.1,x:1.8,y:14.8},0).to({rotation:75.6,x:1.2,y:14.4},1).wait(1).to({rotation:99.1,x:0.6,y:14},0).wait(1));

	// Layer 5
	this.instance_2 = new lib.shape78("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({startPosition:0,_off:false},0).wait(4));

	// Layer 4
	this.head = new lib.sprite64();
	this.head.setTransform(-0.1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({scaleX:1,scaleY:1,rotation:-22.9,y:5.5},0).to({rotation:-25.4},1).wait(1).to({scaleX:1,scaleY:1,rotation:-27.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-19.8,x:0.2,y:5.2},0).to({scaleX:1,scaleY:1,rotation:-11.8},1).wait(1).to({rotation:-3.8,x:0.6,y:4.7},0).wait(1).to({rotation:3.8,x:1,y:4.4},0).wait(1).to({rotation:11.6,x:1.3,y:4.1},0).to({rotation:19.6},1).wait(1).to({scaleX:1,scaleY:1,rotation:27.6,x:1.8,y:3.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:25.8},0).wait(1).to({rotation:24,x:1.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.3,x:1.8},0).to({_off:true},1).wait(4));

	// Layer 3
	this.instance_3 = new lib.sprite62();
	this.instance_3.setTransform(3.4,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).wait(1).to({x:2.4},0).wait(1).to({x:2.3},0).wait(4).to({x:1.9,y:9.8},2).wait(1).to({x:1.7,y:9.2},0).wait(1));

	// Layer 10
	this.instance_4 = new lib.sprite76();
	this.instance_4.setTransform(1,14.9,1.101,1.101,-14.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,rotation:0,skewX:-9.8,skewY:-9.7},1).wait(1).to({skewX:-4.8,skewY:-4.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,skewX:0,skewY:0},0).wait(1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:47.2,x:-0.9,y:12.3},0).to({rotation:66.1,x:-1.8,y:11.3},1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:85,x:-2.7,y:10.3},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.sprite60();
	this.instance_5.setTransform(-1.8,13.9,1.101,1.101,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:82.5},0).to({rotation:86.2},1).wait(1).to({rotation:89.8},0).to({scaleX:1.1,scaleY:1.1,rotation:74.9},1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:59.9,x:-0.9,y:14.1},0).wait(1).to({rotation:44.9,x:-0.5,y:14.3},0).to({scaleX:1.1,scaleY:1.1,rotation:15,x:0.2,y:14.5},2).wait(1).to({rotation:0,x:0.6,y:14.7},0).to({_off:true},1).wait(8));

	// Layer 1
	this.instance_6 = new lib.sprite58();
	this.instance_6.setTransform(-1.4,10.4,0.999,0.999,0,36.9,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({skewX:51.9,skewY:-127.9,x:-1.2},0).wait(2).to({scaleX:1,scaleY:1,skewX:64.8,skewY:-115},1).wait(1).to({skewX:77.7,skewY:-102.1,x:-1.4,y:9.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:90.5,skewY:-89.3,x:-1.6,y:9.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:103.3,skewY:-76.5,x:-1.7,y:8.6},0).wait(1).to({skewX:116.1,skewY:-63.7,x:-1.8,y:8.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:129.1,skewY:-50.7,x:-1.9,y:7.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:141.9,skewY:-37.9,x:-2.2,y:7.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:-2.3},0).to({scaleX:1,scaleY:1},2).wait(1).to({scaleX:1,scaleY:1,x:-2.2},0).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(13).call(this.frame14).wait(4).call(this.frame18))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-23.7,29.1,46.4);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 1
	this.body = new lib.sprite57();
	this.body.setTransform(-4.5,-20.9,1.002,1);

	this.addChild(this.body);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-44.7,29.1,46.4);


(lib.sprite52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape53("synched",0);

	this.instance_1 = new lib.shape54("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(5));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.6,19.7,21.3);


(lib.sprite48 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape49("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.6,-3.7,14.2,7.7);


(lib.sprite45 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape46("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-14.5,128.3,16.4);


(lib.sprite42 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape43("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-11.7,21.2,18.5);


(lib.sprite39 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape40("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.8,11.7,11.7);


(lib.sprite38 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shape41("synched",0);

	// Layer 1
	this.hit = new lib.sprite39();
	this.hit.setTransform(0,0,5.733,0.521);
	this.hit.alpha = 0;

	this.addChild(this.hit,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.3,-19,82.1,25.7);


(lib.sprite34 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape35("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.2,-97.5,106.5,195.3);


(lib.sprite32 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.shape36("synched",0);

	// Layer 2
	this.instance_1 = new lib.sprite34();
	this.instance_1.setTransform(-0.4,27.8);
	this.instance_1.alpha = 0.398;

	// Layer 1
	this.instance_2 = new lib.shape33("synched",0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.9,-69.8,117.8,212.3);


(lib.sprite30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape31("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-311.9,-73.9,624,147.9);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape13("synched",0);

	this.instance_1 = new lib.shape16("synched",0);

	this.instance_2 = new lib.shape17("synched",0);

	this.instance_3 = new lib.shape18("synched",0);

	this.instance_4 = new lib.shape19("synched",0);

	this.instance_5 = new lib.shape22("synched",0);

	this.instance_6 = new lib.shape23("synched",0);
	this.instance_6.setTransform(0,-2.2);

	this.instance_7 = new lib.shape24("synched",0);

	this.instance_8 = new lib.shape25("synched",0);

	this.instance_9 = new lib.shape26("synched",0);

	this.instance_10 = new lib.shape27("synched",0);

	this.instance_11 = new lib.shape28("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6,p:{y:-2.2}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_6,p:{y:0}}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

	// Layer 1
	this.instance_12 = new lib.shape14("synched",0);

	this.instance_13 = new lib.shape15("synched",0);

	this.instance_14 = new lib.shape20("synched",0);

	this.instance_15 = new lib.shape21("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-8.7,100.2,19.1);


(lib.sprite11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite12();
	this.instance.setTransform(482.7,43.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-325.7,y:-37.2},338).wait(1).to({x:-328.1,y:-37.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(466.2,41.2,30.1,5.7);


(lib.sprite8Drop = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,4,3.9);


(lib.sprite6Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite47 = function() {
	this.initialize();

	// Layer 6
	this.eyes = new lib.sprite52();
	this.eyes.setTransform(0.9,-39.7);

	// Layer 5
	this.instance = new lib.shape51("synched",0);

	// Layer 4
	this.arm1 = new lib.sprite48();
	this.arm1.setTransform(-2.8,-19.9);

	// Layer 3
	this.leg1 = new lib.sprite42();
	this.leg1.setTransform(-1.4,-3.8);

	// Layer 2
	this.instance_1 = new lib.shape50("synched",0);

	// Layer 1
	this.arm2 = new lib.sprite48();
	this.arm2.setTransform(-0.6,-23.6);

	this.addChild(this.arm2,this.instance_1,this.leg1,this.arm1,this.instance,this.eyes);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-50.3,42,53.3);


(lib.sprite37 = function() {
	this.initialize();

	// Layer 10
	this.target = new lib.sprite82();
	this.target.setTransform(179.8,325.4);

	// Layer 9
	this.smallShadow = new lib.sprite80();
	this.smallShadow.setTransform(242.8,324.5);

	// Layer 8
	this.instance = new lib.shape79("synched",0);

	// Layer 7
	this.small = new lib.sprite56();
	this.small.setTransform(135.8,283.7);
  this.small.orgX = 135.8;
  this.small.orgY = 283.7;
	// Layer 6
	this.instance_1 = new lib.shape55("synched",0);

	// Layer 5
	this.big = new lib.sprite47();
	this.big.setTransform(28.1,324,1.001,1.001);

	// Layer 4
	this.board = new lib.sprite45();
	this.board.setTransform(79.5,304,0.999,1.006,-19.9);

	// Layer 3
	this.instance_2 = new lib.shape44("synched",0);

	// Layer 2
	this.leg2 = new lib.sprite42();
	this.leg2.setTransform(30.6,315.4);

	// Layer 1
	this.targetBack = new lib.sprite38();
	this.targetBack.setTransform(179.8,325.4);
  this.init = function()
  {
  function launch()
  {
    self.big.eyes.play();
    sndYahoo.play();   //start();
    self.small.body.play();
    self.small.body.head.mouth.play();
    self.small.body.head.eyes.play();
    self.smallShadow.alpha = 0;
    self.smallShadow.visible = true;
    self.smallShadow.on("tick",  function ()
    {
        self.smallShadow.x = self.small.x - 10;
        if (self.smallShadow.alpha < 1)
        {
            self.smallShadow.alpha += 0.2;
        } // end if
    });
    launched = true;
    self.parent.removeAllEventListeners();
    self.small.x = 1.358500E+002;
    self.small.y = 2.834500E+002;
    self.small.velX = -speed * Math.cos(radians) * speedTransfer;
    self.small.velY = -speed * Math.sin(radians) * speedTransfer;
    self.small.on("tick", function (evt)
    {
        if (self.small.body.rotation >= 90)
        {
            self.small.body.rotation = self.small.body.rotation + (180 - self.small.body.rotation) / 4;
        }
        else
        {
            self.small.body.rotation = self.small.body.rotation + 20;
        } // end else if
        self.small.velY = self.small.velY + gravity;
        self.small.x = self.small.x + self.small.velX;
        self.small.y = self.small.y + self.small.velY;
        if (self.small.y + self.small.velY >= ground + 10 && self.small.velY > 0)
        {
            self.small.y = ground + 10;
            evt.remove(); 
            self.small.body.rotation = 180;
            sndYahoo.stop();
            sndThud.play(); //start();
            self.small.body.gotoAndPlay("land");
            if (Math.abs(self.small.x - self.target.x) >= 25)
            {
                swapChild = true;
                self.swapChildren(self.small, self.targetBack); 
                self.parent.gotoAndPlay("miss");
            }
            else
            {
                //this.swapDepths(targetDepth);
                scoring = false;
                sndThud.stop();
                sndSplash.play();  //start();
                for (var s = 1; s <= 30; s++)
                {
                    splash(s);
                } // end of for
            } // end if
        } // end else if
    });
  } // End of the function
  function splash(id)
  {
    ++dropCount;
    self["drop" + dropCount] = new lib.sprite8Drop(); //  attachMovie("Drop", "drop" + dropCount, dropCount);
    self.addChild(self["drop" + dropCount]);
    self["drop" + dropCount].x = self.small.x;
    self["drop" + dropCount].y = ground - 10;
    self["drop" + dropCount].velX = Math.random() * 10 - 5;
    self["drop" + dropCount].velY = Math.random() * 10 - 15;
    self["drop" + dropCount].scaleX = self["drop" + dropCount].scaleY = (Math.random() * 50 + 50)/100;
    self["drop" + dropCount].name = String(id);
    self["drop" + dropCount].on("tick", function (evt)
    {
        evt.currentTarget.velY = evt.currentTarget.velY + gravity;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        if (evt.currentTarget.y > ground + 5)
        {
            if (evt.currentTarget.name == "30")
            {
                self.parent.starPoints.score(); 
            } // end if
            self.removeChild(evt.currentTarget);   //this.removeMovieClip();
            delete evt.currentTarget;
        } // end if
    });
  } // End of the function
  var self = this;
  var gravity = 2;
  var radians = 1.979203E+000;
  var degrees = 0;
  var speed = 0;
  var speedTransfer = 1;
  var boardRadius = 60;
  var ground = this.board.y + 20;
  var launched = false;
  var center = this.big.x;
  var targetDepth = 100;
  var dropCount = 200;
  var scoring = false;
  var leg2Y = this.leg2.y - this.big.y;
  var sndBoing = playSound("sound3boing"); sndBoing.stop();
  var sndThud = playSound("sound2thud"); sndThud.stop();
  var sndYahoo = playSound("sound1yahoo"); sndYahoo.stop();
  var sndSplash = playSound("sound5splash"); sndSplash.stop();
  //small.swapDepths(targetDepth - 2);
  //targetBack.swapDepths(targetDepth - 1);
  //target.swapDepths(targetDepth + 1);
  this.smallShadow.visible = false;
  this.x = 0;
  this.target.x = this.targetBack.x = Math.random() * 130 + 180;
  this.target.y = this.targetBack.y = ground;
  this.board.on("tick", function ()
  {
    if (Math.random() * 100 < 1)
    {
        self.big.eyes.play();
    } // end if
    if (Math.random() * 100 < 1)
    {
        self.small.body.head.eyes.eyesblink.play();
    } // end if
    self.board.delY = self.board.y - self.big.y;
    if (self.board.delY >= 20)
    {
        self.board.rotation = self.board.rotation + (20 - self.board.rotation) / 2;
        self.big.arm1.rotation = self.big.arm2.rotation = self.big.leg1.rotation = self.leg2.rotation = self.leg2.rotation + (90 - self.big.arm1.rotation) / 2;
    }
    else
    {
        self.board.rotation = self.board.delY;
        self.big.arm1.rotation = self.big.arm2.rotation = self.big.leg1.rotation = self.leg2.rotation = self.leg2.rotation - self.big.arm1.rotation / 2;
    } // end else if
    self.leg2.y = self.big.y + leg2Y;
    self.board.rad = 3.141593E+000 * self.board.rotation / 180;
    if (!launched)
    {
        self.small.y = self.board.y + boardRadius * Math.sin(self.board.rad);
        self.small.x = self.board.x + boardRadius * Math.cos(self.board.rad);
    } // end if
  });
  this.big.cursor = "pointer";
  this.big.on("mousedown", function ()
  {
    self.big.eyes.gotoAndStop(1);
    if (!launched)
    {
        
      stage.on("stagemousemove", function(){
        if(self.big.y >= 160 && self.big.y <= ground){
          self.big.y = (stage.mouseY / ratio - self.y)/self.scaleY;
 
        }  
        
      });  
        
    } // end if
  });
  this.big.on("pressup",  function ()
  {
    if (!launched)
    {   
        stage.removeAllEventListeners("stagemousemove"); 
        self.big.on("tick",  function (evt)
        {
            speed = speed + gravity;
            self.big.y = self.big.y + speed;
            if (self.big.y + speed >= ground)
            {
                evt.remove(); //delete this.onEnterFrame;
                sndBoing.play();   //start();
                self.big.y = ground;
                launch(); 
   
            } // end if
        });
    } // end if
  });
  }
  
	this.addChild(this.targetBack,this.leg2,this.instance_2,this.board,this.small,this.big,this.instance_1,this.instance,this.smallShadow,this.target);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.3,238.9,252.8,95.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;