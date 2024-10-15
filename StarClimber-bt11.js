(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.StarClimber = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{lose:2});
  this.frame1 = function(){
    //loadMovie("/flash/GameController.swf", "GameEndClip");
    this.GameWon = false;
  }
  this.frame2 = function(){this.stop();this.camera.init()}
  this.frame4 = function(){this.gotoAndStop(1)}
	// Layer 5
	this.instance = new lib.sprite52();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

	// Layer 4
	this.instance_1 = new lib.shape51("synched",0);
	this.instance_1.setTransform(446,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(4));

	// Layer 3
	this.starPoints = new lib.sprite41();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(4));

	// Layer 2
	this.camera = new lib.sprite19();

	this.timeline.addTween(cjs.Tween.get(this.camera).to({_off:true},3).wait(1));

	// Layer 1
	this.instance_2 = new lib.shape18("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},3).wait(1));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(2).call(this.frame4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-293.9,620.6,836.9);


// symbols:
(lib.image50 = function() {
	this.initialize(img.image50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite54 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,0,0,3).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image50(); 
	this.shape.setTransform(-45, -7.5); 

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape48 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,1,0,3).p("AC7ghIhVBDQgGAFgDAJQgDAKACAIIAcBpQACAIgEADIgKgCIhcg8QgGgEgKAAIgPAEIhcA8IgKACQgEgDACgIIAdhpQACgIgDgKQgDgJgHgFIhVhDQgGgFABgEQACgEAIgBIBtgGQAIAAAIgGQAIgGADgHIAnhmQADgIADAAQAEAAADAIIAnBmQADAHAIAGQAIAGAIAAIBtAGQAIABACAEQABAEgGAFg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape47 = function() {
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


(lib.shape44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,0,3).p("AC7ghIhVBDQgGAFgDAJQgDAKACAIIAcBpQACAIgEADIgKgCIhcg8QgGgEgKAAIgPAEIhcA8IgKACQgEgDACgIIAdhpQACgIgDgKQgDgJgHgFIhVhDQgGgFABgEQACgEAIgBIBtgGQAIAAAIgGQAIgGADgHIAnhmQADgIADAAQAEAAADAIIAnBmQADAHAIAGQAIAGAIAAIBtAGQAIABACAEQABAEgGAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape40 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.051)").s().p("AjjAVQhfgJAAgMQAAgLBfgJIDjgJIDkAJQBeAJAAALQAAAMheAJIjkAJg");
	this.shape.setTransform(247.4,391.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#486718").s().p("EgnDAL/IAA23QNzhXWEAVIUDAaQNDASJKACIAAXLg");
	this.shape_1.setTransform(250,466.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,388.6,500,154.4);


(lib.shape39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF5555","rgba(255,85,85,0)"],[0.125,1],0,0,0,0,0,7.3).s().p("AglA3QgXgPgFgcQgFgaAQgXQAQgXAcgFQAZgGAXAQQAXAQAFAcQAGAagQAXQgQAXgcAFIgMACQgTAAgSgNg");
	this.shape.setTransform(12.5,-11.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.7,-18.5,13.6,13.6);


(lib.shape38 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A4A4A").ss(1,2,2).p("AAZARQgHAKgNADQgKACgLgHQgLgHgCgNQgCgLAHgKQAHgKANgDQALgCAKAHQALAHACANQACALgHAKg");
	this.shape.setTransform(12.6,-11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgQAZQgLgHgCgNQgCgLAHgKQAHgKANgDQALgCAKAHQALAHACANQACALgHAKQgHAKgNADIgFAAQgIAAgIgFg");
	this.shape_1.setTransform(12.6,-11.3);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4A4A4A").ss(1,2,2).p("AASgOIgjAd");
	this.shape_2.setTransform(10.4,-9);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4A4A4A").ss(1,2,2).p("AA1hXQAOALANAQIAHAJIAKAPQAMASAGASQAHANACAQIACAdIgBACQgDAcgTAQQgKAIgNADQghASgvgCQg7gDglgtIgQgZQgTglAIgsIACgIIAAgFIAEgPQALgmAVgUIAIgHQAcgXAuAQQAdALAbAZgAhdgXQALAjAdAkIAJAKQAjAlAmAPQAdALAWgGABzAAQAGAPACARIADAaAhVhtQgQAVADAlIAAAGIACAJIADAN");
	this.shape_3.setTransform(8.6,-8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B8B8B").s().p("AgaBNQgTglAIgsIACgIIAAgGIAEgOQALgnAUgTQgPAVADAlIAAAGIACAIIADAOQAJAiAdAlIAJAKQgTAOgRAAQgPAAgPgOg");
	this.shape_4.setTransform(0,-10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A3A3A3").s().p("AANBfQgmgOgjgmIgJgKQgdgigLgkQAwAlAwgBQAygtAAg4QAOAMANAPIAHAJIAKAPQAMASAGASQAGAPACASIADAZIgBADQgDAbgTAQQgKAJgNADQgHACgIAAQgRAAgTgIg");
	this.shape_5.setTransform(10.2,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#777777").s().p("AhGAjIgDgOIgCgIIAAgHQgDgiAQgVIAIgIQAcgXAsARQAfALAbAYQAAA2g0AtIgCAAQgtAAgvgkg");
	this.shape_6.setTransform(6.3,-14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAQAkQg6gDgmgrIgQgZQAfAdAmgdQAgAjAoAPQAeALAVgGQgdAQgpAAIgKAAg");
	this.shape_7.setTransform(7,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AACAEQgCgQgEgRQAFAQACAOIACAdg");
	this.shape_8.setTransform(20.7,-5.7);

	// Layer 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.498)").s().p("ABPDPIAVheICBAmIgPBXgAkGByIAhhfICeAsIgZBZgABuBOIAShOIB0AlIgOBMgAjggXIAgheICeA1IgYBVgACGglIAShMIBvArIgNBGgAi0ibIAchSICRA2IgWBPg");
	this.shape_9.setTransform(-1.9,-5);

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2D5986").ss(1,2,2).p("AgKA4IAVhv");
	this.shape_10.setTransform(10.3,-13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2D5986").ss(1,0,2).p("ACLiJICZBAIgSBpIgTByIgTB4IiugrIAbiBIAah2ICfA4AjNiPIAmh7IDABRIgbB1IgeB8IgiCGIjhg5IAtiOgAgChEIjLhLABZBeICmA0Aj2gJIDWBB");
	this.shape_11.setTransform(-2.4,-5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6699CC").s().p("AA+DfIAbiBIAah2IAYhxICZBAIgSBpIifg4ICfA4IgSByIing0ICnA0IgUB4gAkjCFIAtiOIApiGIDMBMIgfB7IjWhBIDWBBIgiCGgAESAggAgBhDgAjNiPIAnh6IC/BRIgaB1g");
	this.shape_12.setTransform(-2.4,-5.5);

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#4A4A4A").ss(1,2,2).p("ABpAAQAAArggAfQgeAfgrAAQgqAAgfgfQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAeAfQAgAfAAAqg");
	this.shape_13.setTransform(-1,-0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AhJBKQgegfgBgrQABgqAegfQAfgeAqAAQArAAAeAeQAfAfAAAqQAAArgfAfQgeAegrAAQgqAAgfgeg");
	this.shape_14.setTransform(-1,-0.9);

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#4A4A4A").ss(1,2,2).p("AAUhLICCAAIipCXIiBAAg");
	this.shape_15.setTransform(-4.1,8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AiVBMICoiXICDAAIioCXg");
	this.shape_16.setTransform(-4.1,8.1);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#4A4A4A").ss(1,2,2).p("AAxhEIALCJIhsAAIgLiJg");
	this.shape_17.setTransform(-14.7,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgwBFIgLiJIBsAAIALCJg");
	this.shape_18.setTransform(-14.7,8.9);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.2,58.5,53.4);


(lib.shape35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AC6A1C").ss(1,0,2).p("AAOBdIhNgOQgjgHAHgwQAHguAcgjQAdgkAcAAQAeAAAWAaQAWAbANAqQANAsgVAbQgWAagsgGg");
	this.shape.setTransform(0.1,-19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#62583C").s().p("AAOBdIhNgOQgjgHAHgwQAHguAcgjQAdgkAcAAQAeAAAWAaQAWAbANAqQANAsgVAbQgSAVggAAIgQgBg");
	this.shape_1.setTransform(0.1,-19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-28.7,18.8,18.9);


(lib.shape34 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2).p("AAbA3QgKAYgPABQgNAAgMgYQgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYg");
	this.shape.setTransform(17.6,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgXA4QgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYQgKAYgPABQgNAAgMgYg");
	this.shape_1.setTransform(17.6,-15.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#376FA6").ss(1,0,2).p("AAgA1QgLAXgSABQgQABgNgXQgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXg");
	this.shape_2.setTransform(-19.8,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AgaA3QgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXQgLAXgSABIgCAAQgOAAgNgWg");
	this.shape_3.setTransform(-19.8,-11.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#376FA6").ss(1,0,2).p("AC5i6IAJAmIALA9IAAAIQADAggBAfIAAAIIgBAIQgCAugJAuIgYAtQgXAqhdAKIgGgBIhMABQhMABgkgWQgUgLgOgYQgOgZgJgpQgKgpgBhTIAAgRIAChHIAAgDIASAFIAcAHQAbAHAcABIAgACIAYAAIA1AAQAbgCAkgIQAjgJAWgKQAXgKAPgKQAPgJAGgFIAAABAgDhKIAKgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKIADgPIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHg");
	this.shape_4.setTransform(0.1,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402783").ss(1,0,2).p("AAAAAIAAAA");
	this.shape_5.setTransform(18.6,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AC6A1C").ss(1,0,2).p("AAFAnQgEADgBgiIgCgz");
	this.shape_6.setTransform(-21,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#AC6A1C").ss(1,0,0,3).p("AgrjTQAHgVAOgPQAYgfAiACQAjACAVAjQAWAigEAuQgDAugaAfQgaAfgigCQgQgBgOgKIgSgRQAHgOADgPIACgTQACgrgXgfgAgJhAIAAAHQAAARAJAUQAIAUASAPQARAQAbAIIAIADIAoAMIAPAGQAOAHALALQAQASAKAVQALAXABAZIAEBxIAAAEAjHDuIAEgsQAEgcAGgLQALgVATgSQATgRAWgIQAYgIAUgPQARgOAJgTIABgFIACgFQAJgZgBgVIgDgnIgBgFIgDAEIgEAFQgaAdgjgCQgjgBgYggIgKgSQgNgaACgeQADgsAZgdQAbgdAjACQAeABAWAYAglhBIAKgQ");
	this.shape_7.setTransform(-1.3,-38.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6699CC").s().p("AiLCoQgUgKgOgZQgOgYgJgpQgKgpgBhTIAAgSIAChHIAAgCIASAFIAcAHQAbAGAcACIAgABIAYABIA1gBQAbgBAkgJQAjgJAWgJQAXgKAPgKIAVgPIAAACIABABIAJAmIALA9IAAAJQADAfgBAgIAAAIIgBAHQgCAugJAuIgYAuQgXAphdAKIgGAAIhMABIgGAAQhHAAgjgWgAgDhJIgIAbIgCAGIgeAHIgFABIgiALQgQAIgPAJQAPAIARAFIAnAFIANABIgGAnIgIAkIgDAPQAQgJAMgOIAXgcIAOgSIAfAOQARAIANAJQAGgSgCgTQgCgUgJgMIgNgNIAAAAIACgDIAMgOIACgCIAWgYQgKgCgRACIgjAFIAAAAIgLgVIgSgdg");
	this.shape_8.setTransform(0.1,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D92D").s().p("AgjBaIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHIAGgbIAMgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKg");
	this.shape_9.setTransform(-0.6,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6738C0").s().p("AAAABIAAgCIAAADg");
	this.shape_10.setTransform(18.6,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6B25E").s().p("Ag5DVIgfgCQgdgBgbgHIgbgHIgTgFQgEAEgCgjIgDg1IAEgsQAEgcAGgLQALgVATgPQATgSAWgIQAYgIAUgPQARgNAJgUIABgFIACgEQAJgagBgXIgDgnIgBgFIAKgQIASARIAAAHQAAARAJAUQAIAVASAQQARARAbAHIAIADIAoANIAPAFQAOAIALAKQAQATAKAVQALAUABAZIAEBxIAAAEIgBgBIgVAOQgPAKgWAKQgXAJgjAKQgkAIgbACIg1AAg");
	this.shape_11.setTransform(-1.3,-25.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag4AYQgEgFgCgIQgBgIADgEQADgGAFgBQAFgBAFAFQAFAEABAHQABAIgDAGQgCAGgGABIgCAAQgEAAgEgEgAAqABQgDgDgBgHQAAgHADgFIAJgGQAFAAAEAFIAEAMQAAAHgEADQgDAFgFAAQgFAAgEgEg");
	this.shape_12.setTransform(-5.5,-48.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhDB7QgkgBgXggIgLgSQgMgaACgeQACgqAagdQAagdAkACQAeABAWAYIAFAIQAVAdAAAkIgBAHIgCATQgCAPgHAOIgJAQIgCAEIgEAFQgZAbghAAIgDAAgAg4AtQgFABgDAGQgDAFACAJQABAIAFAEQAEAFAFgBQAGAAADgHQACgGgBgIQgBgIgFgEQgDgFgFAAIgCABgAA6BjQgPgBgRgKIgRgRQAHgOACgPIACgTIABgHQAAgkgVgdIgFgIQAFgVANgPQAagfAjACQAiACAVAjQAWAigDAuQgEAsgaAfQgYAdgfAAIgFAAgAAuAaIgIAFQgEAFAAAHQABAIAEAEQADAFAFAAQAFgBAEgEQADgGAAgHIgEgMQgEgEgEAAIgBAAg");
	this.shape_13.setTransform(-5.1,-53.8);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-66.2,45.4,93.9);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2,3,true).p("AAIA6QgZgzARhB");
	this.shape.setTransform(-0.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AC6A1C").ss(1,0,0,3,true).p("AiNgCIAogqIAngeQAPgKARgGIALgFQAUgKAYgGIA4gBQAcAFAPANQAQANAAAUQABAUgHAKIgzgBIgMAKQg5A5gaAVQg3ArhAAP");
	this.shape_1.setTransform(13.9,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6B25E").s().p("AiJgDIAogqIAngdQAPgKARgHIALgEQAUgLAYgFIA4gBQAcAEAPAOQAQANAAAUQABAUgHAKIgzgBIgMAKQg5A5gaAVQg3AqhAAPQgbgyARhCg");
	this.shape_2.setTransform(13.5,-4.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-16.2,29,22.8);


(lib.shape30 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2).p("AAbA3QgKAYgPABQgNAAgMgYQgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYg");
	this.shape.setTransform(17.6,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgXA4QgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYQgKAYgPABQgNAAgMgYg");
	this.shape_1.setTransform(17.6,-15.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#376FA6").ss(1,0,2).p("AAgA1QgLAXgSABQgQABgNgXQgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXg");
	this.shape_2.setTransform(-19.8,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AgaA3QgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXQgLAXgSABIgCAAQgOAAgNgWg");
	this.shape_3.setTransform(-19.8,-11.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#376FA6").ss(1,0,2).p("AC5i6IAJAmIALA9IAAAIQADAggBAfIAAAIIgBAIQgCAugJAuIgYAtQgXAqhdAKIgGgBIhMABQhMABgkgWQgUgLgOgYQgOgZgJgpQgKgpgBhTIAAgRIAChHIAAgDIASAFIAcAHQAbAHAcABIAgACIAYAAIA1AAQAbgCAkgIQAjgJAWgKQAXgKAPgKQAPgJAGgFIAAABAgDhKIAKgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKIADgPIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHg");
	this.shape_4.setTransform(0.1,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402783").ss(1,0,2).p("AAAAAIAAAA");
	this.shape_5.setTransform(18.6,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AC6A1C").ss(1,0,2).p("AAFAnQgEADgBgiIgCgz");
	this.shape_6.setTransform(-21,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9D0D0D").ss(1,0,0,3).p("AA4ABQgEgGgPgDQgegIgXAHQgYAFgQAT");
	this.shape_7.setTransform(-3.7,-18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AC6A1C").ss(1,0,0,3).p("AgrjTQAHgVAOgPQAYgfAiACQAjACAVAjQAWAigEAuQgDAugaAfQgaAfgigCQgQgBgOgKIgSgRQAHgOADgPIACgTQACgrgXgfgAgJhAIAAAHQAAARAJAUQAIAUASAPQARAQAbAIIAIADIAoAMIAPAGQAOAHALALQAQASAKAVQALAXABAZIAEBxIAAAEAjHDuIAEgsQAEgcAGgLQALgVATgSQATgRAWgIQAYgIAUgPQARgOAJgTIABgFIACgFQAJgZgBgVIgDgnIgBgFIgDAEIgEAFQgaAdgjgCQgjgBgYggIgKgSQgNgaACgeQADgsAZgdQAbgdAjACQAeABAWAYAAhDHIAFgpIgbABIg4gKQgYgHgVgQQgJAaAFAXQAFATAJATIAEAHQAOAWAYAGQAeAJARgNQAUgOAEgfgAglhBIAKgQ");
	this.shape_8.setTransform(-1.3,-38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6699CC").s().p("AiLCoQgUgKgOgZQgOgYgJgpQgKgpgBhTIAAgSIAChHIAAgCIASAFIAcAHQAbAGAcACIAgABIAYABIA1gBQAbgBAkgJQAjgJAWgJQAXgKAPgKIAVgPIAAACIABABIAJAmIALA9IAAAJQADAfgBAgIAAAIIgBAHQgCAugJAuIgYAuQgXAphdAKIgGAAIhMABIgGAAQhHAAgjgWgAgDhJIgIAbIgCAGIgeAHIgFABIgiALQgQAIgPAJQAPAIARAFIAnAFIANABIgGAnIgIAkIgDAPQAQgJAMgOIAXgcIAOgSIAfAOQARAIANAJQAGgSgCgTQgCgUgJgMIgNgNIAAAAIACgDIAMgOIACgCIAWgYQgKgCgRACIgjAFIAAAAIgLgVIgSgdg");
	this.shape_9.setTransform(0.1,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF1010").s().p("AgOAeQgYgGgOgWIgEgFQARgVAXgFQAXgHAeAIQAQADAEAIQgEAdgUAOQgLAHgQAAQgIAAgMgDg");
	this.shape_10.setTransform(-3.7,-16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D92D").s().p("AgjBaIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHIAGgbIAMgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKg");
	this.shape_11.setTransform(-0.6,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6738C0").s().p("AAAABIAAgCIAAADg");
	this.shape_12.setTransform(18.6,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#62583C").s().p("AhAAFQgFgVAIgaQAVAQAZAHIA4AKIAagBIgFAnQgEgIgPgDQgegIgXAHQgYAFgQAVQgKgTgEgTg");
	this.shape_13.setTransform(-4.3,-21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6B25E").s().p("Ag5DVIgfgCQgdgBgbgHIgbgHIgTgFQgEAEgCgjIgDg1IAEgsQAEgcAGgLQALgVATgPQATgSAWgIQAYgIAUgPQARgNAJgUIABgFIACgEQAJgagBgXIgDgnIgBgFIAKgQIASARIAAAHQAAARAJAUQAIAVASAQQARARAbAHIAIADIAoANIAPAFQAOAIALAKQAQATAKAVQALAUABAZIAEBxIAAAEIgBgBIgVAOQgPAKgWAKQgXAJgjAKQgkAIgbACIg1AAgAheAsQAFAUAJASIAEAHQAOAWAYAGQAeAJARgMQAUgOAEggIAFgpIgbABIg4gKQgYgHgVgNQgJAYAFAWg");
	this.shape_14.setTransform(-1.3,-25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4AYQgEgFgCgIQgBgIADgEQADgGAFgBQAFgBAFAFQAFAEABAHQABAIgDAGQgCAGgGABIgCAAQgEAAgEgEgAAqABQgDgDgBgHQAAgHADgFIAJgGQAFAAAEAFIAEAMQAAAHgEADQgDAFgFAAQgFAAgEgEg");
	this.shape_15.setTransform(-5.5,-48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDB7QgkgBgXggIgLgSQgMgaACgeQACgqAagdQAagdAkACQAeABAWAYIAFAIQAVAdAAAkIgBAHIgCATQgCAPgHAOIgJAQIgCAEIgEAFQgZAbghAAIgDAAgAg4AtQgFABgDAGQgDAFACAJQABAIAFAEQAEAFAFgBQAGAAADgHQACgGgBgIQgBgIgFgEQgDgFgFAAIgCABgAA6BjQgPgBgRgKIgRgRQAHgOACgPIACgTIABgHQAAgkgVgdIgFgIQAFgVANgPQAagfAjACQAiACAVAjQAWAigDAuQgEAsgaAfQgYAdgfAAIgFAAgAAuAaIgIAFQgEAFAAAHQABAIAEAEQADAFAFAAQAFgBAEgEQADgGAAgHIgEgMQgEgEgEAAIgBAAg");
	this.shape_16.setTransform(-5.1,-53.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-66.2,45.4,93.9);


(lib.shape28 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2).p("AAbA3QgKAYgPABQgNAAgMgYQgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYg");
	this.shape.setTransform(17.6,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgXA4QgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYQgKAYgPABQgNAAgMgYg");
	this.shape_1.setTransform(17.6,-15.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#376FA6").ss(1,0,2).p("AAgA1QgLAXgSABQgQABgNgXQgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXg");
	this.shape_2.setTransform(-19.8,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AgaA3QgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXQgLAXgSABIgCAAQgOAAgNgWg");
	this.shape_3.setTransform(-19.8,-11.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#376FA6").ss(1,0,2).p("AC5i6IAJAmIALA9IAAAIQADAggBAfIAAAIIgBAIQgCAugJAuIgYAtQgXAqhdAKIgGgBIhMABQhMABgkgWQgUgLgOgYQgOgZgJgpQgKgpgBhTIAAgRIAChHIAAgDIASAFIAcAHQAbAHAcABIAgACIAYAAIA1AAQAbgCAkgIQAjgJAWgKQAXgKAPgKQAPgJAGgFIAAABABKggIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKIADgPIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHIAIgbIAKgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZg");
	this.shape_4.setTransform(0.1,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402783").ss(1,0,2).p("AAAAAIAAAA");
	this.shape_5.setTransform(18.6,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AC6A1C").ss(1,0,2).p("AAFAnQgEADgBgiIgCgz");
	this.shape_6.setTransform(-21,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9D0D0D").ss(1,0,0,3).p("AA4ABQgEgGgPgDQgegIgXAHQgYAFgQAT");
	this.shape_7.setTransform(-3.7,-18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AC6A1C").ss(1,0,0,3).p("AgrjTQAHgVAOgPQAYgfAiACQAjACAVAjQAWAigEAuQgDAugaAfQgaAfgigCQgQgBgOgKIgSgRQAHgOADgPIACgTQACgrgXgfgAgJhAIAAAHQAAARAJAUQAIAUASAPQARAQAbAIIAIADIAoAMIAPAGQAOAHALALQAQASAKAVQALAXABAZIAEBxIAAAEAjHDuIAEgsQAEgcAGgLQALgVATgSQATgRAWgIQAYgIAUgPQARgOAJgTIABgFIACgFQAJgZgBgVIgDgnIgBgFIgDAEIgEAFQgaAdgjgCQgjgBgYggIgKgSQgNgaACgeQADgsAZgdQAbgdAjACQAeABAWAYAAhDHIAFgpIgbABIg4gKQgYgHgVgQQgJAaAFAXQAFATAJATIAEAHQAOAWAYAGQAeAJARgNQAUgOAEgfgAglhBIAKgQ");
	this.shape_8.setTransform(-1.3,-38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6699CC").s().p("AiLCoQgUgKgOgZQgOgYgJgpQgKgpgBhTIAAgSIAChHIAAgCIASAFIAcAHQAbAGAcACIAgABIAYABIA1gBQAbgBAkgJQAjgJAWgJQAXgKAPgKIAVgPIAAACIABABIAJAmIALA9IAAAJQADAfgBAgIAAAIIgBAHQgCAugJAuIgYAuQgXAphdAKIgGAAIhMABIgGAAQhHAAgjgWgAgDhJIgIAbIgCAGIgeAHIgFABIgiALQgQAIgPAJQAPAIARAFIAnAFIANABIgGAnIgIAkIgDAPQAQgJAMgOIAXgcIAOgSIAfAOQARAIANAJQAGgSgCgTQgCgUgJgMIgNgNIAAAAIACgDIAMgOIACgCIAWgYQgKgCgRACIgjAFIAAAAIgLgVIgSgdg");
	this.shape_9.setTransform(0.1,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF1010").s().p("AgOAeQgYgGgOgWIgEgFQARgVAXgFQAXgHAeAIQAQADAEAIQgEAdgUAOQgLAHgQAAQgIAAgMgDg");
	this.shape_10.setTransform(-3.7,-16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D92D").s().p("AgjBaIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHIAGgbIAMgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKg");
	this.shape_11.setTransform(-0.6,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6738C0").s().p("AAAABIAAgCIAAADg");
	this.shape_12.setTransform(18.6,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#62583C").s().p("AhAAFQgFgVAIgaQAVAQAZAHIA4AKIAagBIgFAnQgEgIgPgDQgegIgXAHQgYAFgQAVQgKgTgEgTg");
	this.shape_13.setTransform(-4.3,-21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6B25E").s().p("Ag5DVIgfgCQgdgBgbgHIgbgHIgTgFQgEAEgCgjIgDg1IAEgsQAEgcAGgLQALgVATgPQATgSAWgIQAYgIAUgPQARgNAJgUIABgFIACgEQAJgagBgXIgDgnIgBgFIAKgQIASARIAAAHQAAARAJAUQAIAVASAQQARARAbAHIAIADIAoANIAPAFQAOAIALAKQAQATAKAVQALAUABAZIAEBxIAAAEIgBgBIgVAOQgPAKgWAKQgXAJgjAKQgkAIgbACIg1AAgAheAsQAFAUAJASIAEAHQAOAWAYAGQAeAJARgMQAUgOAEggIAFgpIgbABIg4gKQgYgHgVgNQgJAYAFAWg");
	this.shape_14.setTransform(-1.3,-25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4AYQgEgFgCgIQgBgIADgEQADgGAFgBQAFgBAFAFQAFAEABAHQABAIgDAGQgCAGgGABIgCAAQgEAAgEgEgAAqABQgDgDgBgHQAAgHADgFIAJgGQAFAAAEAFIAEAMQAAAHgEADQgDAFgFAAQgFAAgEgEg");
	this.shape_15.setTransform(-5.5,-48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDB7QgkgBgXggIgLgSQgMgaACgeQACgqAagdQAagdAkACQAeABAWAYIAFAIQAVAdAAAkIgBAHIgCATQgCAPgHAOIgJAQIgCAEIgEAFQgZAbghAAIgDAAgAg4AtQgFABgDAGQgDAFACAJQABAIAFAEQAEAFAFgBQAGAAADgHQACgGgBgIQgBgIgFgEQgDgFgFAAIgCABgAA6BjQgPgBgRgKIgRgRQAHgOACgPIACgTIABgHQAAgkgVgdIgFgIQAFgVANgPQAagfAjACQAiACAVAjQAWAigDAuQgEAsgaAfQgYAdgfAAIgFAAgAAuAaIgIAFQgEAFAAAHQABAIAEAEQADAFAFAAQAFgBAEgEQADgGAAgHIgEgMQgEgEgEAAIgBAAg");
	this.shape_16.setTransform(-5.1,-53.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-66.2,45.4,93.9);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2,3,true).p("AAJhAQghBBAeBA");
	this.shape.setTransform(-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AC6A1C").ss(1,0,0,3,true).p("AhYBqIALABQAbAEAcgFQAbgFAWgRIALgKQAPgLAJgOQAPgUAEgLQAFgKgCgnQgDgqgTgTQgVgUgcAEQgaAEgRAYQgRAYgQAQIgWAR");
	this.shape_1.setTransform(9.1,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6B25E").s().p("AhDBrIgLgBQgghAAjhBIAWgRQAQgQARgYQARgYAagEQAcgEAVAUQATATADAqQACAngFAKQgEALgPAUQgJAOgPALIgLAKQgWARgbAFQgQADgPAAQgMAAgMgCg");
	this.shape_2.setTransform(8.1,-3.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-14.9,19,22);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,0,3,true).p("AhngnQASABANAJIAKAJQARATgCAZQgCAcAHAYQAGAaAQAOIALAHIADACIAhACIAPgFIADgBIAYgTQAQgRAIgbQAIgdgDgaQgEgYgIgXIgIgSIgMgaQgKgWgQgS");
	this.shape.setTransform(9.4,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgEB+IgDgCIgKgHQgQgOgHgaQgGgYABgcQACgZgRgTIgKgJQgMgJgSgBQAnhgBnAHQAQASALAWIAMAaIAHASQAJAXADAYQADAagIAdQgIAbgPARIgYATIgDABIgQAFg");
	this.shape_1.setTransform(9.2,3.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-8.9,20.4,25.8);


(lib.shape22 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#376FA6").ss(1,0,2).p("AAbA3QgKAYgPABQgNAAgMgYQgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYg");
	this.shape.setTransform(17.6,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699CC").s().p("AgXA4QgLgXgBghQAAgfAJgXQALgYAPAAQANgBALAXQALAYABAgQABAfgKAYQgKAYgPABQgNAAgMgYg");
	this.shape_1.setTransform(17.6,-15.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#376FA6").ss(1,0,2).p("AAgA1QgLAXgSABQgQABgNgXQgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXg");
	this.shape_2.setTransform(-19.8,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AgaA3QgOgWgBggQgBgeALgXQAMgXARgBQAQgBANAWQAOAXABAgQACAegMAXQgLAXgSABIgCAAQgOAAgNgWg");
	this.shape_3.setTransform(-19.8,-11.9);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#376FA6").ss(1,0,2).p("AC5i6IAJAmIALA9IAAAIQADAggBAfIAAAIIgBAIQgCAugJAuIgYAtQgXAqhdAKIgGgBIhMABQhMABgkgWQgUgLgOgYQgOgZgJgpQgKgpgBhTIAAgRIAChHIAAgDIASAFIAcAHQAbAHAcABIAgACIAYAAIA1AAQAbgCAkgIQAjgJAWgKQAXgKAPgKQAPgJAGgFIAAABAgDhKIAKgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKIADgPIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHg");
	this.shape_4.setTransform(0.1,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#402783").ss(1,0,2).p("AAAAAIAAAA");
	this.shape_5.setTransform(18.6,-10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AC6A1C").ss(1,0,2).p("AAFAnQgEADgBgiIgCgz");
	this.shape_6.setTransform(-21,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9D0D0D").ss(1,0,0,3).p("Ag4APQAQgTAYgFQAXgHAeAIQAPADAEAG");
	this.shape_7.setTransform(-3.7,-18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#AC6A1C").ss(1,0,0,3).p("AglhBIgDAEIgEAFQgaAdgjgCQgjgBgYggIgKgSQgNgaACgeQADgsAZgdQAbgdAjACQAeABAWAYQAHgVAOgPQAYgfAiACQAjACAVAjQAWAigEAuQgDAugaAfQgaAfgigCQgQgBgOgKIAAAHQAAARAJAUQAIAUASAPQARAQAbAIIAIADIAoAMIAPAGQAOAHALALQAQASAKAVQALAXABAZIAEBxAjHDuIAEgsQAEgcAGgLQALgVATgSQATgRAWgIQAYgIAUgPQARgOAJgTIABgFIACgFQAJgZgBgVIgDgnIgBgFIAKgQQAHgOADgPIACgTQACgrgXgfIgHgIAAhDHIAFgpIgbABIg4gKQgYgHgVgQQgJAaAFAXQAFATAJATIAEAHQAOAWAYAGQAeAJARgNQAUgOAEgfgADIEaIAAgEAgbhRIASAR");
	this.shape_8.setTransform(-1.3,-38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6699CC").s().p("AiLCoQgUgKgOgZQgOgYgJgpQgKgpgBhTIAAgSIAChHIAAgCIASAFIAcAHQAbAGAcACIAgABIAYABIA1gBQAbgBAkgJQAjgJAWgJQAXgKAPgKIAVgPIAAACIABABIAJAmIALA9IAAAJQADAfgBAgIAAAIIgBAHQgCAugJAuIgYAuQgXAphdAKIgGAAIhMABIgGAAQhHAAgjgWgAgDhJIgIAbIgCAGIgeAHIgFABIgiALQgQAIgPAJQAPAIARAFIAnAFIANABIgGAnIgIAkIgDAPQAQgJAMgOIAXgcIAOgSIAfAOQARAIANAJQAGgSgCgTQgCgUgJgMIgNgNIAAAAIACgDIAMgOIACgCIAWgYQgKgCgRACIgjAFIAAAAIgLgVIgSgdg");
	this.shape_9.setTransform(0.1,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CF1010").s().p("AgOAeQgYgGgOgWIgEgFQARgVAXgFQAXgHAeAIQAQADAEAIQgEAdgUAOQgLAHgQAAQgIAAgMgDg");
	this.shape_10.setTransform(-3.7,-16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D92D").s().p("AgjBaIAIgkIAGgnIgNgBIgngGQgRgEgPgJQAPgJAQgHIAigLIAFgCIAegGIACgHIAGgbIAMgeIASAeIALAVIAAAAIAjgGQARgCAKACIgWAZIgCACIgMAOIgCACIAAABIANANQAJAMACATQACAUgGARQgNgJgRgIIgfgNIgOASIgXAcQgMANgQAKg");
	this.shape_11.setTransform(-0.6,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6738C0").s().p("AAAABIAAgCIAAADg");
	this.shape_12.setTransform(18.6,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#62583C").s().p("AhAAFQgFgVAIgaQAVAQAZAHIA4AKIAagBIgFAnQgEgIgPgDQgegIgXAHQgYAFgQAVQgKgTgEgTg");
	this.shape_13.setTransform(-4.3,-21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6B25E").s().p("Ag5DVIgfgCQgdgBgbgHIgbgHIgTgFQgEAEgCgjIgDg1IAEgsQAEgcAGgLQALgVATgPQATgSAWgIQAYgIAUgPQARgNAJgUIABgFIACgEQAJgagBgXIgDgnIgBgFIAKgQIASARIAAAHQAAARAJAUQAIAVASAQQARARAbAHIAIADIAoANIAPAFQAOAIALAKQAQATAKAVQALAUABAZIAEBxIAAAEIgBgBIgVAOQgPAKgWAKQgXAJgjAKQgkAIgbACIg1AAgAheAsQAFAUAJASIAEAHQAOAWAYAGQAeAJARgMQAUgOAEggIAFgpIgbABIg4gKQgYgHgVgNQgJAYAFAWg");
	this.shape_14.setTransform(-1.3,-25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4AYQgEgFgCgIQgBgIADgEQADgGAFgBQAFgBAFAFQAFAEABAHQABAIgDAGQgCAGgGABIgCAAQgEAAgEgEgAAqABQgDgDgBgHQAAgHADgFIAJgGQAFAAAEAFIAEAMQAAAHgEADQgDAFgFAAQgFAAgEgEg");
	this.shape_15.setTransform(-5.5,-48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDB7QgkgBgXggIgLgSQgMgaACgeQACgqAagdQAagdAkACQAeABAWAYQAFgVANgPQAagfAjACQAiACAVAjQAWAigDAuQgEAsgaAfQgaAfgigCQgPgBgRgKIgRgRQAHgOACgPIACgTIABgHQAAgkgVgdIgFgIIAFAIQAVAdAAAkIgBAHIgCATQgCAPgHAOIgJAQIgCAEIgEAFQgZAbghAAIgDAAgAg4AtQgFABgDAGQgDAFACAJQABAIAFAEQAEAFAFgBQAGAAADgHQACgGgBgIQgBgIgFgEQgDgFgFAAIgCABgAAuAaIgIAFQgEAFAAAHQABAIAEAEQADAFAFAAQAFgBAEgEQADgGAAgHIgEgMQgEgEgEAAIgBAAg");
	this.shape_16.setTransform(-5.1,-53.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-66.2,45.4,93.9);


(lib.shape20 = function() {
	this.initialize();

	// Layer 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#281759").s().p("A02AcIABh0QAPAZANAFIATADQAWABAHgKQAHgLgDgXIAAgFIAUAWIAZAZIAZACQAAgZgFgQIAAgFQAPAUAPAKQAQANALAAQAPAAAKgdQAJgcgGgRIABABQAHAlARAKIAbAFIAOAAQAJgEAFgTQABATAJAEIAPACIAUAAQAHgDAIgZQAKAVAAAFIAeAEIARADQAHAAAGgEQAHgEAGgBQAHABAKANQAKANAFAAIANgJQAPgJAOABIAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAFQAUAJAhgIQAggIgPgxQAFAAAAgFIADAUQgBgKACADIARAbQAOAYATgkQAOgZACgbIAAANQAOAQAVA1QATAvABALIANABIAagCQAYgLACgqQACAMAKAQQANAVAKABQAKAAAEgHIADgSQAFgZASABQAKABAKAPQAKAQAKABQAJAAAkgiIAPAaQAKgDAPgOIAPgQIAOANQAFAEAIAAQB7AHgEhSQAEATASAdQAXAjAJAAQAJABAPgRIAVgaQAOAXAJAZIAEADIANABIAOgBIALgIIAKAAQgEAXAIAHIAQACQAGAAAJgGIAcgRQAPAQAIAAIBcgjIAAAUIADADQACACAHAAQANABAOgMIAVgVIAbAgQANAPAKABQAMAAAWgPQAVgMAPgPIAMATIAQACIAPgDQAOgGANgTIAAAZIAeACIABgIIAEgHQgFATAJAFIAQACQAGAAAEgEIAPgPIAFAAQgGA1AVARQAKAJAMgEQATACAagQIBOgvQgIAXAPANQALAMAKABQADAAAdgaIAtgwIADgBQAJARAGAYQADALAOAAIAZgMQAagPAOgOIABgBIAJAoIAFAZIAZgJIAUAVQAUAVAFAAQAPABAygwIAFABQACAfAIAHIASAEQANAAAOgQQAPgPAAgNIAHAZIAPACIAqgKQArgOAXgYQgIAcAPATQAKAMANAAIALgCQAJgFAKgLIACALIADAOIAZABIAKgGIAFgCIAABVQACAJADAHg");
	this.shape.setTransform(394.2,311.9);

	// Layer 21
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#281759").s().p("A01gKQAPAVANAGIAUACQAVAAAIgMQAGgIgDgXIAAgGIAUAVIAZAWIAZAAQAAgWgFgPIAAgGQAOATAQAKQAQAJAMAAQAOAAAJgcQAKgcgGgRIABABQAHAkARAKIAcAEIANgBQAJgFAFgTQABATAJAEIAPACIAVgCQAGgEAIgZQAKAVAAAEIAeADIASADQAGgBAGgFQAGgEAHAAQAHAAAKAMQAKAMAFAAIAOgKQAPgIAOgBIAAAAIgDAFIAAAEIA1gCQAggJgPgwQAFAAAAgFIACATQgBgKACADIARAaQAPAYATgkQAOgbACgbIAAAMQAOARAWAzQASAsABALIAMAAIAbgDQAYgNACgnQACAMAKAOQAOATAJAAQAJAAAEgHIAFgQQAEgZASABQALAAAKAOQAJANAKABQAKAAAjgiIAPAaIAYgSIAQgRIAPALIAMAEQB7ABgEhSQAEASATAdQAWAiAJAAQAJAAAPgSIAVgbQAOAWAJAZIAEADIANgBIANAAIAMgKIAKAAQgFAXAJAGIAQABQAGAAAKgGIAbgSQAPAPAHgBIBdgnIAAATIAEADIAJADQANAAAOgOIAUgVIAaAfQANAOALAAQALAAAYgQIAjgdIANATIAPABQAGAAAIgFQAPgHANgSIAAAYIAeAAIABgHIAEgHQgFASAKAFIAPABQAFAAAFgEIAPgQIAFAAQgGA3AVAOQALAIAMgDQASgBAagQIBOgzQgIAXAPAPQALALAKAAQADAAAcgeIAugyIACgBQAKARAFAXQADALAPAAQADAAAWgOIAogfIABAAIAIAmIAGAbQAFABAUgLIAUAUQAVASAEABQAPAAAygxIAFAAQACAeAIAGIASACQANAAAPgOQAOgQAAgNIAHAYIAQABIAogLQAtgRAWgbQgIAfAPARQALAMAMABIAKgEIAUgQIADALIACANIAZAAIAKgGIAFgDIAABTQACAJAEAIMgpvAAPg");
	this.shape_1.setTransform(129.7,305.1);

	// Layer 20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#486718").s().p("EgprgAUQAfArAZALIAnAEQAqAAAPgXQAOgTgGguIAAgKIAnApIAzAvIAyAAQAAgwgKgeIAAgKQAdAkAfAWQAfAUAYAAQAdAAASg6QASg5gKghIACAAQANBKAjATQAMAHArAAIAagCQATgIAKgoQABAlATAKIAeADIAogEQANgIARgwQAUAoAAAKIA7AFIAkAFQAMAAANgKQAMgKANAAQAPAAAUAZQAUAZAKAAQAKgKAQgKQAfgTAcgBIAAABQgFADAAAGIAAAKQAoAPBBgTQBBgUgehgQAJAAABgKIAFAoQgCgUAEAFIAhA0QAeAvAlhIQAdg3AEg2IAAAbQAcAfAqBnQAmBaACAYIAZAAQAbAFAZgNQAxgYAEhRQACAXAVAdQAcApATAAQATAAAHgQIAJggQAHgyAmAAQAUAAAUAeQAUAcAUAAQASAABIhEQANAbARAXQATgJAdgcIAgghIAcAXQALAHAQAAQD0ACgHikQAHAmAmA5QAsBDATAAQASAAAeglQAfgqALgLQAcAtASAwQACAHAGAAIAaAAIAbgDQAIgDAPgOIAUAAQgKAuASAKIAjAEQAMAAASgNQAjgaAUgLQAeAeAPAAIC5hQIAAAoIAHAFQADAFAPAAQAZAAAdgbIApgrIA0A+QAaAcAWAAQAWAAAvggQAogcAfgeIAZAmIAeACQAMAAARgJQAegPAagkIAAAyIA8AAQAAgKABgFQACgJAHgGQgLAlAUAKIAfADQALAAAIgIIAfggIAKAAQgMBtApAdQAVAQAZgGQAlAAA0giICchoQgQAuAeAfQAWAXATAAQAIAAA3g9IBchjIAEgDQAUAhALAuQAFAYAeAAQAFAAAsgcQA0ghAdgdIABgCIASBNQALAtAAAKQAKAAAogUQAAADAnAlQApAmAKAAQAeAABkhiIAKAAQADA8AQANQAGAFAeAAQAZAAAegfQAeggAAgZQALAsADADIAfADIBSgYQBYgiAtg0QgQA9AdAiQAVAZAaAAQAIAAAMgHQAVgKATgXIAFAVQAFASAAALIAyAAQAHgIANgGIAKgEIAACmQAEATAHAOMhTfAAgg");
	this.shape_2.setTransform(251.9,371.2);

	// Layer 19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#210B4F").s().p("AA/WNIAAiQICQAAIAACQgAA/R/IAAiQICQAAIAACQgAjNR/IAAiQICQAAIAACQgAA/NxIAAiQICQAAIAACQgAjNNxIAAiQICQAAIAACQgAA/JjIAAiQICQAAIAACQgAjNJjIAAiQICQAAIAACQgAA/FVIAAiQICQAAIAACQgAjNFVIAAiQICQAAIAACQgAA/BHIAAiOICQAAIAACOgAjNBHIAAiOICQAAIAACOgAA/jFIAAiQICQAAIAACQgAjNjFIAAiQICQAAIAACQgAA/nTIAAiQICQAAIAACQgAjNnTIAAiQICQAAIAACQgAA/rhIAAiQICQAAIAACQgAjNrhIAAiQICQAAIAACQgAA/vvIAAiQICQAAIAACQgAjNvvIAAiQICQAAIAACQgAA/z9IAAiQICQAAIAACQgAjNz9IAAiQICQAAIAACQg");
	this.shape_3.setTransform(67,73);

	// Layer 18
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F094E").s().p("AhOYrIAAigICeAAIAACggAl6YrIAAigICfAAIAACggAhOUAIAAigICeAAIAACggAl6UAIAAigICfAAIAACggADbPTIAAifICgAAIAACfgAhOPTIAAifICeAAIAACfgAl6PTIAAifICfAAIAACfgADbKnIAAigICgAAIAACggAhOKnIAAigICeAAIAACggAl6KnIAAigICfAAIAACggADbF8IAAigICgAAIAACggAhOF8IAAigICeAAIAACggAl6F8IAAigICfAAIAACggADbBPIAAidICgAAIAACdgAhOBPIAAidICeAAIAACdgAl6BPIAAidICfAAIAACdgADbjaIAAihICgAAIAAChgAhOjaIAAihICeAAIAAChgAl6jaIAAihICfAAIAAChgADboGIAAigICgAAIAACggAhOoGIAAigICeAAIAACggAl6oGIAAigICfAAIAACggADbszIAAifICgAAIAACfgAhOszIAAifICeAAIAACfgAl6szIAAifICfAAIAACfgADbxfIAAigICgAAIAACggAhOxfIAAigICeAAIAACggAl6xfIAAigICfAAIAACggADb2KIAAigICgAAIAACggAhO2KIAAigICeAAIAACggAl62KIAAigICfAAIAACgg");
	this.shape_4.setTransform(344.1,54);

	// Layer 17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B0349").s().p("Aj5DrIAAnVIHzAAIAAHVg");
	this.shape_5.setTransform(281.1,241.5);

	// Layer 16
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B0349").s().p("AizFTIAAqlIFnBuIAAI3g");
	this.shape_6.setTransform(27,214.1);

	// Layer 15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B0349").s().p("Aj4GzIAAtlIHxAAIAANlg");
	this.shape_7.setTransform(409.1,200.5);

	// Layer 14
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B0349").s().p("AjHDNIAAmZIGPAAIAAGZg");
	this.shape_8.setTransform(105,233.6);

	// Layer 13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B0349").s().p("Al7CBIAAkCIL3AAIAAECg");
	this.shape_9.setTransform(479.1,106);

	// Layer 12
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B0349").s().p("Ag1DHIAAmNIBrAAIAAGNg");
	this.shape_10.setTransform(76.5,-93);

	// Layer 11
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B0349").s().p("Ah8DSIAAmjID5AAIAAGjg");
	this.shape_11.setTransform(135.5,179.2);

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#486718").s().p("EgnDAInIAAwAQc7g3KQgMQV6gZRCAhIAAQ7g");
	this.shape_12.setTransform(250,426.7);

	// Layer 9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B0349").s().p("AkcKtIAA1ZII4AAIAAVZg");
	this.shape_13.setTransform(-6.4,210.6);

	// Layer 8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B0349").s().p("Ao0NXIAA6tIRpAAIAAatg");
	this.shape_14.setTransform(467.6,195.6);

	// Layer 7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B0349").s().p("EgIbAisMAAAhFXIQ3DIMAAABCPg");
	this.shape_15.setTransform(345.1,57.1);

	// Layer 6
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B0349").s().p("AlNTOMAAAgi/IFIjcIFTDcMAAAAi/g");
	this.shape_16.setTransform(232.6,158.1);

	// Layer 5
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B0349").s().p("AmPINIAAwZIMfAAIAAQZg");
	this.shape_17.setTransform(150,223.6);

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B0349").s().p("AlDcsMAAAg5XIKHAAMAAAA5Xg");
	this.shape_18.setTransform(67.5,101.7);

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#281759").s().p("EgnDAJtIAAzPQPygeXZBCITfA8ITdA0IAAQ7g");
	this.shape_19.setTransform(250,369.8);

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B0349").s().p("EgnDAK8IAAzPMAr/gCUQRLhDQ9CjIAAUDg");
	this.shape_20.setTransform(250,301.9);

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#3D3773","#1A0147"],[0,1],0,336.8,0,-336.6).s().p("EgnDA1IMAAAhqPMBOHAAAMAAABqPg");
	this.shape_21.setTransform(250,46);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-293.9,562.8,775.9);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A0147").s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape.setTransform(250,170);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,340);


(lib.shape16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(2,1,2).p("AAqgrICBADIhmBNIAkB7IhphJIhoBJIAkh7IhmhNICBgDIAph5g");
	this.shape.setTransform(0,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABZIhoBJIAkh7IhmhMICBgDIAph5IAqB5ICBADIhmBMIAkB7g");
	this.shape_1.setTransform(0,-1.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-18.2,34.3,32.6);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ALMEcIgIgJImhAAIgIAJIAAAAQgOAOgUgBQgTABgPgOIgGgJImgAAIgIAJIAAAAQgOAOgTgBQgUABgOgOIgIgJImhAAIgHAJIgBAAQgOAOgUgBQgTABgPgOQgOgPABgTQgBgUAOgOIAJgIIAAmfIgJgIQgOgNABgVQgBgTAOgPQAPgOATABQAUgBAOAOIAIAJIGhAAIAIgJQAOgOAUABQATgBAOAOIAHAJIGhAAIAGgJQAPgOATABQAUgBAOAOIAIAJIGhAAIAIgJQAOgOAUABQATgBAOAOQAOAPAAATQABAVgOANIgBAAIgIAIIAAGfIAIAIQAOAOAAAUQABATgOAPIgBAAQgOAOgTgBQgUABgOgOgAESjPIAAGfIAJAIIAIAJIGhAAIAIgJIAJgIIAAmfIgJgIIgIgJImhAAIgIAJIAAAAIgJAIgAjgjPIAAGfIAJAIIAHAJIGhAAIAGgJIAJgIIAAmfIgJgIIgGgJImgAAIgIAJIAAAAgArTjPIAAGfIAIAIIAIAJIGhAAIAIgJIAJgIIAAmfIgJgIIgIgJImhAAIgHAJIgBAAg");
	this.shape.setTransform(-49.9,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.7,-29.7,159.6,59.6);


(lib.shape12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("ALaETIgEgDIgFgIQgDgGgBgIQAAgJAFgHIAEgHIABAAIAHgFIAQgFQAHAAAHAFIAIAFIADADQAGAJAAALQAAALgGAJIgDACIgCADQgKAGgKAAQgMAAgIgGgADlETIgCgDIgGgIQgEgGABgIQAAgJADgHIAGgHIAAAAIAIgFQAHgFAHAAIAQAFIAHAFIAGAHQADAIABAIQgBAIgDAGIgGAIIgDADQgIAGgMAAQgLAAgJgGgAkNETIgDgDIgFgIQgDgGgBgIQAAgJAFgHIAEgHIABAAIAHgFQAIgFAIAAQAHAAAHAFIAIAFIAGAHQAEAIgBAIQABAIgEAGIgGAIIgCADQgKAGgKAAQgLAAgKgGgAsAETIgDgDIgDgCQgGgIAAgMQAAgMAGgIIADgDIAAAAIAHgFIAPgFQAIAAAIAFQAEACADADIAGAHQAEAIAAAIQAAAIgEAGIgGAIIgDADQgIAGgMAAQgKAAgJgGgALejcIgIgGIgFgHQgDgHgBgJQAAgIAFgGIAEgHIABgBIADgDQAJgGALAAQAKAAAKAGIACADIADADQAGAIAAALQAAAMgGAIIgDADIgIAGQgHADgHABQgIgBgIgDgADrjcIgIgGIgGgHQgEgHABgJQAAgIADgGIAGgHIAAgBIADgDQAIgGALAAQAMAAAIAGIADADIAGAIQADAHABAHQgBAJgDAHIgGAHIgHAGQgIADgIABQgHgBgHgDgAkIjcIgIgGIgFgHQgDgHgBgJQAAgIAFgGIAEgHIABgBIADgDQAJgGALAAQAKAAAKAGIACADIAGAIQAEAHgBAHQABAJgEAHIgGAHIgIAGQgHADgHABQgIgBgIgDgAr8jcIgHgGIgDgCQgGgJAAgMQAAgLAGgIIADgCIAAgBIADgDQAIgGALAAQAMAAAIAGIADADIAGAIQAEAHAAAHQAAAJgEAHIgGAHIgHAGQgIADgIABQgHgBgIgDg");
	this.shape.setTransform(-49.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDDDDD").s().p("ALMEcIgIgJIgEgLImZAAIgEALIgIAJIAAAAQgOAOgUgBQgTABgPgOIgGgJIgFgLImWAAIgFALIgIAJIAAAAQgOAOgTgBQgUABgOgOIgIgJIgEgLImZAAIgEALIgHAJIgBAAQgOAOgUgBQgTABgPgOQgOgPABgTQgBgUAOgOIAJgIIAKgEIAAmXIgKgEIgJgIQgOgNABgVQgBgTAOgPQAPgOATABQAUgBAOAOIAIAJIAEALIGZAAIAEgLIAIgJQAOgOAUABQATgBAOAOIAHAJIAFALIGXAAIAFgLIAGgJQAPgOATABQAUgBAOAOIAIAJIAEALIGZAAIAEgLIAIgJQAOgOAUABQATgBAOAOQAOAPAAATQABAVgOANIgBAAIgIAIIgLAEIAAGXQAGABAFADIAIAIQAOAOAAAUQABATgOAPIgBAAQgOAOgTgBQgUABgOgOgALeDeIgHAFIgBAAIgEAHQgFAHAAAJQABAIADAGIAFAIIAEADQAIAGAMAAQAKAAAKgGIACgDIADgCQAGgJAAgLQAAgLgGgJIgDgDIgIgFQgHgFgHAAgADrDeIgIAFIAAAAIgGAHQgDAHAAAJQgBAIAEAGIAGAIIACADQAJAGALAAQAMAAAIgGIADgDIAGgIQADgGABgIQgBgIgDgIIgGgHIgHgFIgQgFQgHAAgHAFgAkIDeIgHAFIgBAAIgEAHQgFAHAAAJQABAIADAGIAFAIIADADQAKAGALAAQAKAAAKgGIACgDIAGgIQAEgGgBgIQABgIgEgIIgGgHIgIgFQgHgFgHAAQgIAAgIAFgAr8DeIgHAFIAAAAIgDADQgGAIAAAMQAAAMAGAIIADACIADADQAJAGAKAAQAMAAAIgGIADgDIAGgIQAEgGAAgIQAAgIgEgIIgGgHQgDgDgEgCQgIgFgIAAgAESjPIgJAEIAAGXQAFABAEADIAJAIIAIAJIAEAJIGZAAIAEgJIAIgJIAJgIIAJgEIAAmXIgJgEIgJgIIgIgJQgDgEgBgFImZAAIgEAJIgIAJIAAAAIgJAIgAjgjPIgKAEIAAGXIAKAEIAJAIIAHAJIAFAJIGXAAIAFgJIAGgJIAJgIIALgEIAAmXIgLgEIgJgIIgGgJIgFgJImWAAIgFAJIgIAJIAAAAgArTjPIgKAEIAAGXIAKAEIAIAIIAIAJIAEAJIGZAAIAEgJIAIgJIAJgIIAJgEIAAmXIgJgEIgJgIIgIgJIgEgJImZAAIgEAJIgHAJIgBAAgALakSIgDADIgBABIgEAHQgFAGAAAIQABAJADAHIAFAHIAIAGQAIADAIABQAHgBAHgDIAIgGIADgDQAGgIAAgMQAAgLgGgIIgDgDIgCgDQgKgGgKAAQgLAAgJAGgADmkSIgDADIAAABIgGAHQgDAGAAAIQgBAJAEAHIAGAHIAIAGQAHADAHABQAIgBAIgDIAHgGIAGgHQADgHABgJQgBgHgDgHIgGgIIgDgDQgIgGgMAAQgLAAgIAGgAkMkSIgDADIgBABIgEAHQgFAGAAAIQABAJADAHIAFAHIAIAGQAIADAIABQAHgBAHgDIAIgGIAGgHQAEgHgBgJQABgHgEgHIgGgIIgCgDQgKgGgKAAQgLAAgJAGgAsAkSIgDADIAAABIgDACQgGAIAAALQAAAMAGAJIADACIAHAGQAIADAHABQAIgBAIgDIAHgGIAGgHQAEgHAAgJQAAgHgEgHIgGgIIgDgDQgIgGgMAAQgLAAgIAGg");
	this.shape_1.setTransform(-49.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AEjETIAEgLIGZAAIAEALgAjPETIAFgLIGWAAIAFALgArDETIAEgLIGZAAIAEALgAEnDqIgEgJIGhAAIgEAJgAjLDqIgFgJIGhAAIgFAJgAq/DqIgEgJIGhAAIgEAJgAL8DMIAAmXIALgEIAAGfQgFgDgGgBgALVjPIAJAEIAAGXIgJAEgAEJDMIAAmXIAJgEIAAGfQgEgDgFgBgADgjPIALAEIAAGXIgLAEgAjqDMIAAmXIAKgEIAAGfgAkRjPIAJAEIAAGXIgJAEgArdDMIAAmXIAKgEIAAGfgAsGjPIAKAEIAAGXIgKAEgAEjjgIAEgJIGZAAQABAFADAEgAjPjgIAFgJIGWAAIAFAJgArDjgIAEgJIGZAAIAEAJgAEnkHIgEgLIGhAAIgEALgAjLkHIgFgLIGhAAIgFALgAq/kHIgEgLIGhAAIgEALg");
	this.shape_2.setTransform(-49.9,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.7,-29.7,159.6,59.6);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("Aj5D6IAAnzIHzAAIAAHzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.shape9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("ADmETIgEgDIgFgIQgDgGgBgIQAAgJAFgHIAEgHIABAAIAHgFIAQgFQAHAAAHAFIAIAFIADADQAGAJAAALQAAALgGAJIgDACIgCADQgKAGgKAAQgMAAgIgGgAkNETIgCgDIgGgIQgEgGABgIQAAgJADgHIAGgHIAAAAIAIgFQAHgFAHAAIAQAFIAHAFIAGAHQADAIABAIQgBAIgDAGIgGAIIgDADQgIAGgMAAQgLAAgJgGgADqjcIgIgGIgFgHQgDgHgBgJQAAgIAFgGIAEgHIABgBIADgDQAJgGALAAQAKAAAKAGIACADIADADQAGAIAAALQAAAMgGAIIgDADIgIAGQgHADgHABQgIgBgIgDgAkHjcIgIgGIgGgHQgEgHABgJQAAgIADgGIAGgHIAAgBIADgDQAIgGALAAQAMAAAIAGIADADIAGAIQADAHABAHQgBAJgDAHIgGAHIgHAGQgIADgIABQgHgBgHgDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDDDDD").s().p("ADXEcIgHgJIgEgLImXAAIgEALIgIAJIAAAAQgOAOgUgBQgTABgPgOIgHgJIgEgLIgCAAIAAgeIACAAIAEgJIAHgJIAJgIIAKgEIAAmXIgKgEIgJgIIgHgJIgEgJIgCAAIAAgeIACAAIAEgLIAHgJQAPgOATABQAUgBAOAOIAHAJIAFALIGXAAIAEgLIAHgJQAPgOATABQAUgBAOAOQAOAPAAATQAAAVgOANIAAAAIgJAIIgKAEIAAGXQAGABAEADIAJAIQAOAOAAAUQAAATgOAPIAAAAQgOAOgUgBQgTABgPgOgADqDeIgHAFIgBAAIgFAHQgEAHAAAJQAAAIAEAGIAFAIIADADQAJAGALAAQALAAAJgGIADgDIACgCQAHgJAAgLQAAgLgHgJIgCgDIgIgFQgHgFgIAAgAkIDeIgHAFIgBAAIgFAHQgEAHAAAJQAAAIAEAGIAFAIIADADQAJAGALAAQALAAAJgGIADgDIAGgIQADgGAAgIQAAgIgDgIIgGgHIgIgFIgPgFQgIAAgHAFgAjgjPIgKAEIAAGXQAGABAEADIAJAIIAHAJIAFAJIGXAAIAEgJIAHgJIAJgIIAKgEIAAmXIgKgEIgJgIIgHgJQgDgEgBgFImXAAIgEAJIgIAJIAAAAIgJAIgADmkSIgDADIgBABIgFAHQgEAGAAAIQAAAJAEAHIAFAHIAIAGQAHADAIABQAIgBAHgDIAIgGIACgDQAHgIAAgMQAAgLgHgIIgCgDIgDgDQgJgGgLAAQgLAAgIAGgAkMkSIgDADIgBABIgFAHQgEAGAAAIQAAAJAEAHIAFAHIAIAGQAHADAIABQAIgBAHgDIAIgGIAGgHQADgHAAgJQAAgHgDgHIgGgIIgDgDQgJgGgLAAQgLAAgIAGg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjEETIAFgLIGWAAIAFALgAkdETIAAgLIACAAIAFALgAjADqIgEgJIGgAAIgFAJgAkdDqIAAgJIAHAAIgFAJgAEUDMIAAmXIAKgEIAAGfQgFgDgFgBgADsjPIAKAEIAAGXIgKAEgAjeDMIAAmXIAKgEIAAGfQgFgDgFgBgAkGjPIAKAEIAAGXIgKAEgAjEjgIAFgJIGWAAQACAFADAEgAkdjgIAAgJIACAAIAFAJgAjAkHIgEgLIGgAAIgFALgAkdkHIAAgLIAHAAIgFALg");
	this.shape_2.setTransform(-1,0);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAKEcIgIgJImfAAIgHAJIgBAAQgOAOgUgBQgTABgPgOQgOgPABgTQgBgUAOgOIAJgIIAAmfIgJgIQgOgNABgVQgBgTAOgPQAPgOATABQAUgBAOAOIAIAJIGfAAIAIgJQAOgOAUABQATgBAOAOIAHAJIGjAAIABgBIAAA1IgBgCImiAAIgIAJIAAAAIgJAIIAAGfIAJAIIAHAJIGjAAIABgCIAAA2IgBgCImiAAIgIAJIAAAAQgOAOgTgBQgUABgOgOgAmtjPIAAGfIAIAIIAIAJIGfAAIAIgJIAJgIIAAmfIgJgIIgIgJImfAAIgHAJIgBAAg");
	this.shape_3.setTransform(-79.3,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.7,-29.7,159.6,59.6);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAAQAAgIALADIABACIABADIgCAEIgFACg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,1.5,1.4);


(lib.shape5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite52 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape53("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite46 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape47("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape44("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound45");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
    //this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    this.parent.parent.GameWon = true;
    this.parent.parent.camera.removeAllEventListeners();
    this.parent.parent.camera._char.removeAllEventListeners();
    this.parent.parent.camera.ball.removeAllEventListeners();
    this.parent.parent.camera._char.gotoAndStop(0);
   } // end if
	
	}
	this.frame_8 = function() {
		playSound("sound49");
    var damp = 0.700000;
    for (var i = 1; i <= 20; i++)
    {
    this["puff" + i] = new lib.sprite4Puff(); //attachMovie("Puff", "puff" + i, i);
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
            evt.remove();
            delete evt.currentTarget
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
	this.instance = new lib.sprite43();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite46();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape48("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite41 = function(mode,startPosition,loop) {
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
    this.gameWin = true
  }
	// Layer 3
	this.star3 = new lib.sprite42();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(4));

	// Layer 2
	this.star2 = new lib.sprite42();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(4));

	// Layer 1
	this.star1 = new lib.sprite42();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3).call(this.frame4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,109.5,30.1);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 1
	this.instance = new lib.shape12("synched",0);

	this.instance_1 = new lib.shape14("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(5));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-29.7,159.6,59.6);


(lib.sprite31 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape32("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-16.2,29,22.8);


(lib.sprite25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape26("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-14.9,19,22);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape24("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-8.9,20.4,25.8);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);
	this.instance.setTransform(0,0,0.4,0.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-9.9,20,20);

(lib.sprite17_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);
	this.instance.setTransform(0,0,0.4*2,0.4*4.55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-50,40,100);



(lib.sprite15Star = function() {
	this.initialize();
  var self = this;
	// Layer 2
	this.hit = new lib.sprite17();
	this.hit.alpha = 0;

	// Layer 1
	this.instance = new lib.shape16("synched",0);
  var count = 0;
  var damp = 0.900000;
  this.on("tick", function ()
  {
    ++count;
    self["light" + count] = new lib.sprite6StarLight(); //attachMovie("StarLight", "light" + count, count);
    self.addChild(self["light" + count]);
    self["light" + count].velX = Math.random() * 20 - 10;
    self["light" + count].velY = Math.random() * 20 - 10;
    self["light" + count].scaleX = self["light" + count].scaleY = Math.random()  + 1;
    self["light" + count].rotation = Math.random() * 360;
    self["light" + count].on("tick", function (evt)
    {
        evt.currentTarget.velX = evt.currentTarget.velX * damp;
        evt.currentTarget.velY = evt.currentTarget.velY * damp;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        if (evt.currentTarget.alpha <= 0)
        {
            self.removeChild(evt.currentTarget);
            evt.remove();
            delete evt.currentTarget
        }
        else
        {
            evt.currentTarget.alpha = evt.currentTarget.alpha - 0.05;
        } // end else if
    });
  });
	this.addChild(this.instance,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-18.2,34.3,32.6);


(lib.sprite10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.sprite8Ladder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_2 = function() {
		playSound("sound13");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(4));

	// Layer 3
	this.hit = new lib.sprite10();
	this.hit.setTransform(-99.9,0);
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(7));

	// Layer 2
	this.instance = new lib.shape9("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape12("synched",0);

	this.instance_2 = new lib.shape14("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-29.7,159.6,59.6);


(lib.sprite6StarLight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.6,1.5,1.4);


(lib.sprite4Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.hit = new lib.sprite17();
	this.hit.setTransform(0,0,1.425,1.425);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(20));

	// Layer 2
	this.instance = new lib.shape39("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(16));

	// Layer 1
	this.instance_1 = new lib.shape38("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-32.2,58.5,53.4);


(lib.sprite29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite31();
	this.instance.setTransform(17.9,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:-2.6,skewY:-0.4,x:17.7},0).wait(1).to({scaleX:0.91,scaleY:1.03,skewX:-10.3,skewY:-2.4,x:17.1,y:-16},0).to({scaleX:0.81,scaleY:1.07,skewX:-22.9,skewY:-5.7,x:16.1,y:-16.3},1).wait(1).to({scaleX:0.7,scaleY:1.12,skewX:-35.5,skewY:-9.1,x:15.2,y:-16.6},0).wait(1).to({scaleX:0.74,scaleY:1.1,skewX:-30.6,skewY:-7.6,x:15.6,y:-16.5},0).to({scaleX:0.91,scaleY:1.03,skewX:-10.1,skewY:-2.4,x:17.1,y:-16},2).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:17.9,y:-15.8},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.sprite31();
	this.instance_1.setTransform(-19.1,-12.1,0.998,1.003,0,4.3,-173.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.98,scaleY:1,skewX:6.3,skewY:-172.2},0).wait(1).to({scaleX:0.94,skewX:11.8,skewY:-169.3,x:-18.6},0).to({scaleX:0.88,scaleY:1,skewX:21.1,skewY:-164.5},1).wait(1).to({scaleX:0.81,skewX:30.3,skewY:-159.8,x:-17.6},0).wait(1).to({scaleX:0.83,scaleY:1,skewX:26.6,skewY:-161.8,x:-17.8},0).wait(1).to({scaleX:0.9,scaleY:1,skewX:18,skewY:-166.2,x:-18.3},0).wait(1).to({scaleX:0.97,scaleY:1,skewX:8.8,skewY:-171,x:-18.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.3,skewY:-173.1,x:-19},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite23();
	this.instance_2.setTransform(-4.3,27.6,1,1.011,0,-8.3,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.01,skewX:-7.4,x:-4.3},0).to({scaleY:1,skewX:-2.3,x:-5},2).wait(1).to({scaleY:1,skewX:0,x:-5.4},0).to({scaleY:1,skewX:-1.7},1).wait(1).to({scaleY:1,skewX:-3.6,x:-4.8,y:27.5},0).to({scaleY:1.01,skewX:-5.9},1).wait(1).to({scaleY:1.01,skewX:-8.2,x:-4.2,y:27.6},0).wait(1));

	// Layer 2
	this.instance_3 = new lib.sprite23();
	this.instance_3.setTransform(5.1,27.3,0.998,1.002,0,5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:4.3},1).wait(1).to({skewX:3.5,x:5.5},0).wait(1).to({scaleY:1,skewX:1.8,x:5.7},0).wait(1).to({scaleY:1,skewX:0,x:6.1},0).wait(1).to({skewX:0.5,x:6},0).to({scaleY:1,skewX:2.3},1).wait(1).to({scaleY:1,skewX:4,x:5.3},0).wait(1).to({scaleY:1,skewX:5,x:5.1},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.shape30("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-66.2,93.3,110.6);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite25();
	this.instance.setTransform(17.9,-15.9,1.214,0.999,0,11.8,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2,skewX:9.3,skewY:38.8,y:-15.9},0).wait(1).to({scaleX:1.16,scaleY:1,skewX:3.8,skewY:9.8,y:-15.8},0).wait(1).to({scaleX:1.11,skewX:-1.9,skewY:-20.8},0).wait(1).to({scaleX:1.09,skewX:-5.1,skewY:-36.4},0).wait(1).to({scaleX:1.11,skewX:-2.8,skewY:-25.1,x:18},0).wait(1).to({scaleX:1.15,skewX:2.3,skewY:2.5},0).to({scaleX:1.18,scaleY:1,skewX:7,skewY:26.9},1).wait(1).to({scaleX:1.21,skewX:11.8,skewY:51.3,x:17.9},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.sprite25();
	this.instance_1.setTransform(-19.1,-12.1,1.1,1,0,7.8,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1,skewX:4.8,skewY:-154.2,y:-12.1},0).wait(1).to({scaleX:1.12,skewX:-1.3,skewY:-180.9,y:-12},0).wait(1).to({scaleX:1.12,scaleY:1,skewX:-8.3,skewY:-210,x:-19.1},0).wait(1).to({scaleX:1.13,skewX:-11.8,skewY:-224.5,x:-19,y:-12.1},0).wait(1).to({scaleX:1.13,skewX:-9.3,skewY:-214},0).wait(1).to({scaleX:1.12,scaleY:1,skewX:-2.8,skewY:-187.9,x:-19.1},0).wait(1).to({scaleX:1.1,skewX:4,skewY:-157.8},0).wait(1).to({scaleX:1.1,scaleY:1,skewX:7.8,skewY:-142.4,x:-19,y:-12},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite23();
	this.instance_2.setTransform(-5.5,27.6,0.999,1.162,0,12.7,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.02,scaleY:1.12,skewX:14.8,skewY:185.1,x:-5.7},0).wait(1).to({scaleX:1.06,scaleY:1.04,skewX:19.8,skewY:198.1,x:-6.1,y:27.3},0).wait(1).to({scaleX:1.11,scaleY:0.94,skewX:25.3,skewY:212,x:-6.7},0).wait(1).to({scaleX:1.13,scaleY:0.9,skewX:28.1,skewY:219,x:-6.9,y:27.1},0).wait(1).to({scaleX:1.11,scaleY:0.93,skewX:26.1,skewY:213.9,x:-6.7},0).wait(1).to({scaleX:1.07,scaleY:1.01,skewX:21.3,skewY:201.4,x:-6.3,y:27.3},0).to({scaleX:1.03,scaleY:1.09,skewX:17,skewY:190.5},1).wait(1).to({scaleX:1,scaleY:1.16,skewX:12.7,skewY:179.5,x:-5.4,y:27.6},0).wait(1));

	// Layer 2
	this.instance_3 = new lib.sprite23();
	this.instance_3.setTransform(7.6,27.3,1.091,0.93,0,-34.8,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.07,scaleY:1,skewX:-30.3,skewY:-34.4},1).wait(1).to({scaleX:1.05,scaleY:1.06,skewX:-25.9,skewY:-23.6,x:6.9,y:27.4},0).wait(1).to({scaleX:1.02,scaleY:1.16,skewX:-19.1,skewY:-7.6,x:6.4,y:27.6},0).wait(1).to({scaleX:1,scaleY:1.21,skewX:-16,skewY:0,x:6.1},0).wait(1).to({scaleX:1.01,scaleY:1.17,skewX:-18.3,skewY:-5.6,x:6.3,y:27.5},0).wait(1).to({scaleX:1.04,scaleY:1.08,skewX:-24.3,skewY:-19.9,x:6.8},0).to({scaleX:1.07,scaleY:1.01,skewX:-29.5,skewY:-32.5},1).wait(1).to({scaleX:1.09,scaleY:0.93,skewX:-34.7,skewY:-45.1,x:7.6,y:27.3},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.shape28("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-66.2,69.9,113);


(lib.sprite21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:1,side:2,fall:3});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_3 = function() {
		playSound("sound33");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3));

	// Layer 8
	this.hit = new lib.sprite17_1();
	this.hit.setTransform(0,-12.5);
	this.hit.alpha = 0.01;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(4));

	// Layer 7
	this.instance = new lib.shape35("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0,_off:false},0).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite25();
	this.instance_1.setTransform(17.9,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2).to({scaleX:1.58,scaleY:0.83,skewY:-6,_off:false},0).wait(1));

	// Layer 5
	this.instance_2 = new lib.sprite25();
	this.instance_2.setTransform(-19.1,-12.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2).to({scaleX:1.43,scaleY:1,skewX:4.3,skewY:203.2,_off:false},0).wait(1));

	// Layer 4
	this.instance_3 = new lib.sprite23();
	this.instance_3.setTransform(-5.5,27.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2).to({scaleX:1,scaleY:1.31,skewX:23.5,skewY:192.6,x:-7.2,y:27.8,_off:false},0).wait(1));

	// Layer 3
	this.instance_4 = new lib.sprite23();
	this.instance_4.setTransform(6.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2).to({scaleX:1,scaleY:1.15,skewX:-14.6,x:7.6,y:27.3,_off:false},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.shape22("synched",0);

	this.instance_6 = new lib.shape34("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[]},1).to({state:[{t:this.instance_6}]},2).wait(1));

	// Layer 1
	this.instance_7 = new lib.sprite27();

	this.instance_8 = new lib.sprite29();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-66.2,72.3,110.6);


(lib.sprite19 = function() {
	this.initialize();

	// Layer 8
	this.instance = new lib.shape40("synched",0);

	// Layer 7
	this.ladder2 = new lib.sprite8Ladder();
	this.ladder2.setTransform(250,220,1,1,90);

	// Layer 6
	this.ladder1 = new lib.sprite36();
	this.ladder1.setTransform(250,320,1,1,90);

	// Layer 5
	this.ball = new lib.sprite37();
	this.ball.setTransform(-60.9,-238);

	// Layer 4
	this.star = new lib.sprite15Star();
	this.star.setTransform(336,287.3);
	this.star.shadow = new cjs.Shadow("#FFFFFF",0,0,8);

	// Layer 3
	this.instance_1 = new lib.sprite36();
	this.instance_1.setTransform(250,420,1,1,90);

	// Layer 2
	this._char = new lib.sprite21();
	this._char.setTransform(250,320);

	// Layer 1
	this.instance_2 = new lib.shape20("synched",0);

	this.addChild(this.instance_2,this._char,this.instance_1,this.star,this.ball,this.ladder1,this.ladder2,this.instance);
	var self = this;
  function getStar()
  {
    sndGetStar.play();
    self.parent.starPoints.score();
    for (var i = 1; i <= 30; i++)
    {
        self["light" + i] = new lib.sprite6StarLight(); // attachMovie("StarLight", "light" + i, i + lightDepth);
        self.addChild(self["light" + i]);
        self["light" + i].x = self.star.x;
        self["light" + i].y = self.star.y;
        self["light" + i].velX = Math.random() * 30 - 15;
        self["light" + i].velY = Math.random() * 30 - 15;
        self["light" + i].scaleX = self["light" + i].scaleY = Math.random() * 2 + 2;
        self["light" + i].rotation = Math.random() * 360;
        self["light" + i].on("tick", function (evt)
        {
            evt.currentTarget.velX = evt.currentTarget.velX * damp;
            evt.currentTarget.velY = evt.currentTarget.velY * damp;
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
            if (evt.currentTarget.alpha <= 0)
            {
                self.removeChild(evt.currentTarget);
                evt.remove();
                delete evt.currentTarget
            }
            else
            {
                evt.currentTarget.alpha = evt.currentTarget.alpha - 0.05;
            } // end else if
        });
    } // end of for
    placeStar();
  } // End of the function
  function placeStar()
  {
    self.star.x = Math.round(Math.random() * 4 - 2) * dist + 500 / 2;
    self.star.y = Math.floor(-Math.random() * 2) * dist + minY;
  } // End of the function
  function climb()
  {
    if (speed != 0)
    {
        if (!(curLadder.radians == 0 || curLadder.radians == 3.141593))
        {
            self._char.gotoAndStop("up");
        }
        else
        {
            self._char.gotoAndStop("side");
        } // end else if
    }
    else
    {
        self._char.gotoAndStop(0);
    } // end else if
    self._char.x = self._char.x + (-speed) * Math.cos(curLadder.radians);
    self._char.y = self._char.y + (-speed) * Math.sin(curLadder.radians); 
    cameraX = self._char.x - 500 / 2;
    cameraY = self._char.y - 336 / 2;
    self._char.delX = targetX - self._char.x;
    self._char.delY = targetY - self._char.y;
    if (Math.abs(self._char.delX) < speed && Math.abs(self._char.delY) < speed)
    {
        ++ladderNum;
        if (ladderNum == count)
        {
            speed = 0;
            self._char.stop();
        }
        else
        {
            nextLadder(self._char);
        } // end if
    } // end else if
    if (self._char.hit.hitTest(self.star.x + self.star.hit.x - self._char.x - self._char.hit.x, self.star.y + self.star.hit.y - self._char.y - self._char.hit.y ))
    {
        getStar();
    } // end if
    self.ball.x = self.ball.x + baseSpeed;
    if (self.ball.x > 500 + self.ball.nominalBounds.width / 2)
    {
        self.ball.x = -self.ball.nominalBounds.width / 2;
        self.ball.y = -Math.random() * dist * 2 + self._char.y;
    } // end if
    if (self._char.hit.hitTest(self.ball.x + self.ball.hit.x-14 - self._char.x - self._char.hit.x , self.ball.y + self.ball.hit.y-14 - self._char.y - self._char.hit.y)||
        self._char.hit.hitTest(self.ball.x + self.ball.hit.x+14 - self._char.x - self._char.hit.x , self.ball.y + self.ball.hit.y-14 - self._char.y - self._char.hit.y)|| 
        self._char.hit.hitTest(self.ball.x + self.ball.hit.x-14 - self._char.x - self._char.hit.x , self.ball.y + self.ball.hit.y+14 - self._char.y - self._char.hit.y)||
        self._char.hit.hitTest(self.ball.x + self.ball.hit.x+14 - self._char.x - self._char.hit.x , self.ball.y + self.ball.hit.y+14 - self._char.y - self._char.hit.y)
       )
    {
        
        self._char.gotoAndStop("fall");
        self._char.removeAllEventListeners("tick");
        self._char.on("tick",  fall);
        self.parent.starPoints.lose();
    } // end if
  } // End of the function
  function fall(evt)
  {
    velY = velY + gravity;
    if (self._char.y + velY >= ground + 20)
    {
        self._char.y = ground + 20;
        evt.remove()
    } // end if
    self._char.y = self._char.y + velY;
    if (self._char.y > self.ladder1.y)
    {
        self.parent.gotoAndPlay("lose")
    } // end if
   } // End of the function
   function nextLadder(clip)
   {
    curLadder = clip.parent["ladder" + ladderNum];
    clip.x = curLadder.x;
    clip.y = curLadder.y;
    targetX = curLadder.x - dist * Math.cos(curLadder.radians);
    targetY = curLadder.y - dist * Math.sin(curLadder.radians);
   } // End of the function
   function placeLadder()
   {
    testLadder = self["ladder" + (count - 1)];
    if (Math.abs(Math.abs(testLadder.radians - ladder.radians) - 3.141593) < 0.001)
    {
        available = false;
    } // end if
    if (ladder.x - dist * Math.cos(ladder.radians) < 0 || ladder.x - dist * Math.cos(ladder.radians) > 500 || ladder.y - dist * Math.sin(ladder.radians) > ground)
    {
        available = false;
    } // end if
    if (!available)
    {
        available = true;
        ladder.gotoAndPlay(2);
    }
    else
    {
        sndLock.play();
        if (speed == 0)
        {
            speed = baseSpeed;
            nextLadder(self._char);
        } // end if
        placeX = ladder.x - dist * Math.cos(ladder.radians);
        placeY = ladder.y - dist * Math.sin(ladder.radians);
        if (minY >= placeY)
        {
            minY = placeY - dist;
        } // end if
        ladder.alpha = 1;
        ladder.gotoAndStop(1);
        ladder.removeAllEventListeners("tick");//delete ladder.onEnterFrame;
        ++count;
        ladder = self["ladder" + count] =  new lib.sprite8Ladder();  //attachMovie("Ladder", "ladder" + count, count);
        self.addChild(ladder); 
        ladder.alpha = 0.5;
        ladder.x = placeX;
        ladder.y = placeY;
        ladder.on("tick",  rotateLadder);
    } // end else if
  } // End of the function
  function rotateLadder(evt)
  {
    evt.currentTarget.delX = stage.mouseX/ratio - (self.x + evt.currentTarget.x);
    evt.currentTarget.delY = stage.mouseY/ratio - (self.y + evt.currentTarget.y);
    evt.currentTarget.radians = Math.atan(evt.currentTarget.delY / evt.currentTarget.delX);
    if (evt.currentTarget.radians < 0)
    {
        evt.currentTarget.radians = evt.currentTarget.radians + 3.141593;
    } // end if
    if (evt.currentTarget.delY > 0)
    {
        evt.currentTarget.radians = evt.currentTarget.radians + 3.141593;
    } // end if
    if (!(evt.currentTarget.radians >= quadrant * 7 || evt.currentTarget.radians < quadrant))
    {
        if (!(evt.currentTarget.radians >= quadrant && evt.currentTarget.radians < quadrant * 3))
        {
            if (!(evt.currentTarget.radians >= quadrant * 3 && evt.currentTarget.radians < quadrant * 5))
            {
                evt.currentTarget.radians = quadrant * 6;
            }
            else
            {
                evt.currentTarget.radians = quadrant * 4;
            } // end else if
        }
        else
        {
            evt.currentTarget.radians = quadrant * 2;
        } // end else if
    }
    else
    {
        evt.currentTarget.radians = 0;
    } // end else if
    evt.currentTarget.rotation = 180 * evt.currentTarget.radians / 3.141593;

  } // End of the function
  function centerCamera()
  {
    self.y = -cameraY;
  } // End of the function
  var count = 0;
  var dist = 100;
  var velY;
  var gravity = 2;
  var quadrant = 0.785398;
  var placeX;
  var placeY;
  var cameraX;
  var cameraY;
  var ladder;
  
  var available;
  var ladderNum;
  var curLadder;
  var targetX
  var targetY
  var baseSpeed = 3;
  var minY ;
  var score = 0;
  var halted = false;
  var ground = 320;
  var damp = 0.900000;
  var sndGetStar = playSound("sound3getStar"); sndGetStar.stop();
  var sndLock = playSound("sound1lock"); sndLock.stop();
  var ballDepth = 1000000;
  var lightDepth = 500000;
  //this.ball.swapDepths(ballDepth);
  //this.star.swapDepths(ballDepth - 1);
  stage.on("stagemousedown", placeLadder);
	placeStar();
	this.init = function()
	{
    for(var i = 3; i <= count; i++)
      this.removeChild(this["ladder" + i]);	  
	  count = 2;
	  velY = 0;
    placeX = 0;
    placeY = 0;
    cameraX = placeX - 500 / 2;
    cameraY = placeY - 336 / 2;   
    ladder = this.ladder2;
    ladder.radians = quadrant * 2;
    available = true;
    ladderNum = 2;
    curLadder = this["ladder" + ladderNum];
    curLadder.radians = quadrant * 2;
    targetX = curLadder.x - dist * Math.cos(curLadder.radians);
    targetY = curLadder.y - dist * Math.sin(curLadder.radians);    
    speed = baseSpeed;    
    minY = targetY - dist;
    score = 0;   
    this._char.x = this.ladder1.x;
    this._char.y = this.ladder1.y;    
    this.ball.setTransform(-60.9,-238);   
       
    placeLadder();
    placeStar(); 
    if(!this._char.hasEventListener("tick"))
       this._char.on("tick", climb); 	
    if(!this.hasEventListener("tick"))
       this.on("tick",  centerCamera);   
       
	}
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.7,-293.9,620.6,836.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;