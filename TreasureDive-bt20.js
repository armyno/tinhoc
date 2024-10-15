(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var _root;
// stage content:
(lib.TreasureDive = function() {
	this.initialize();
  _root = this;
	// Layer 4
	this.instance = new lib.sprite89();

	// Layer 3
	this.instance_1 = new lib.shape88("synched",0);
	this.instance_1.setTransform(445.5,17.3);

	// Layer 2
	this.starPoints = new lib.sprite78();
	this.starPoints.setTransform(28.1,26);

	// Layer 1
	this.camera = new lib.sprite12();
	this.camera.setTransform(0,100);

  //loadMovie("/flash/GameController.swf", "GameEndClip");
  this.GameWon = false;

	this.addChild(this.camera,this.starPoints,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-217.9,788.3,1264);


// symbols:
(lib.image87 = function() {
	this.initialize(img.image87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite91 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite46 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.sprite45 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape90 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape88 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image87(); 
	this.shape.setTransform(-45, -7.5);  

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape85 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape84 = function() {
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


(lib.shape81 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.149)").ss(2,1,1).p("Eg1HAAAMBqPAAA");
	this.shape.setTransform(259.3,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape76 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#716B78").ss(2,1,0,4).p("Ak9CCQAfA9A+AtQBuBQCNgNQCQgNBdhiQBdhigMh8IgFgiQgWhnhdhEQhuhQiNANQiQANhdBiQhdBiALB8QAFA2AXAtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#716B78").ss(2,1,1).p("AlIBiIKRjD");
	this.shape_1.setTransform(1.1,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AE94D9").s().p("AjgDsQg+gtgfg9IKRjCIAFAiQAMB8hdBiQhdBiiQANQgUACgSAAQh3AAhehFgAlYAfQgMh8BdhiQBdhiCQgNQCNgNBuBQQBdBEAWBnIqRDCQgXgtgEg2gAFUhAIAAAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-30.5,69.5,61.1);


(lib.shape75 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#716B78").ss(2,0,0,4).p("ADhjrQhuhQiNANQiQANhdBiQhdBiALB8QAMB+BtBPQBuBQCNgNQCQgNBdhiQBdhigMh8QgLh+hthPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjgDsQhthPgMh+QgLh8BehiQBchiCQgNQCNgNBuBQQBtBPALB+QAMB8hdBiQhdBiiQANQgUACgSAAQh3AAhehFg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-30.5,69.5,61.1);


(lib.shape73 = function() {
	this.initialize();

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#413557").ss(2,1,1).p("AesDsIi/AvQk3BHlTBCQleBEkVAsIh7ASIAgAXQCEBRB8AuQA/AYAkAHQhCAhhaARQi0Aih7hRQhdg+gKhiQi8AVhPgHIgMgCIh/gXQhkBUilgCQhZgBhEgVQAhgMA4ghQA3ggA4gpIicgyQisg5icg9IiiAXIk7ATIi1gFQh4gLhUgnQhUgng9hJIgqgxIA/ARIATADQBzALDhhCQEChMFXihIgOgPQhJhTAKhsQAKhrBXhFQBXhFByAKQBxALBJBTIABABIAegZQBthQCPAOQAsAEAmALIA9g+QDDi4EUgOQglAugsBIQhYCPgnB/QBehnB9g9QCKhECegHQgdAkglA7QhLB1grBtQBZhIBpgqQB0guB/gGQgkAugrBHQhABmgmBfQEKA2EcBFQE0BJDuBFIB9Al");
	this.shape.setTransform(-72,-19.7);

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6E6975").ss(2,0,0,4).p("AGeA7QhqgniHgfQkPhCiZAbIikAf");
	this.shape_1.setTransform(-104.5,11.4);

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#735E99").s().p("AivCBQhwhKAHh8QADgsARgmQAPghAMgBQAIgBAuA4QA3BDA1AhQCBBPB9AuQA+AYAkAHQhBAhhbARQg1AKgwAAQhxAAhWg5g");
	this.shape_2.setTransform(-24.1,40.7);

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#716B78").ss(1,0,0,4).p("AgjhUQBCAMA9AaIhnCFIhQixg");
	this.shape_3.setTransform(-87.5,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhbhYIA4AGQBCAMA9AaIhnCFg");
	this.shape_4.setTransform(-87.5,17.1);

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCAFFF").s().p("AibC4QjDgQlTh3Qipg5iDg4IiLAVQitAWinABIj7gMQh2gUhhhGQENBuGXg6QB5gSCqgmQCmgmAhgEQD3ggDkA1QBOARBYAgIB9AsQBiAiDAAHQCtAHCxgRQBggIIshOQIGhJATACQAYACAtgEIAngDQgBAMkaBAQkcA/lpBDQtjClj8AAQgYAAgTgCg");
	this.shape_5.setTransform(-63.2,17.5);

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A82C4").s().p("A9sDrQCOgCDvhOQFghyFkjEQFijFK8CKQK+CKF+BhQF/BjC/A9IkrAXIkeh5IjgCbIjUjNIjRDFIjKkHIjuDBIjBkBIkCCgIi3iWIjFCwIjZiVIikDRIiqg8IiMCUIjCg/Ii+Big");
	this.shape_6.setTransform(-66.2,-22.5);

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AE94D9").s().p("AiXGyQjDgalThzQiqg5iCg1IiMAVQitAWinABQi9ABhigYQiNgjhWhmIA7AFQBUgBB6gdQGJhZJ7lQUAGbgDZAjPAKNQgCAMkhBDQkoBElsBHQtTCnkIAAQgnAAgagEg");
	this.shape_7.setTransform(-64.7,-6.4);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#886FB5").s().p("Ah8HEIgLgCQi6gZlAhqQirg5idg9IiiAXIk7ATIi1gFQh4gLhUgnQhTgng+hJIgpgxIA+ARIATADQBzALDihAQFyhtIkkhQCJhJGZAlQEtAcG0BWQEwA8FJBQQE0BLDuBFQCjAtAqATQAeANgCAQQgBAQgmANQg4AUjNAvQk2BHlTBCQlfBEkVAsQluA5iXAAQgbAAgVgBg");
	this.shape_8.setTransform(-66.5,-6.1);

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#735E99").s().p("AhhDLQhZgBhEgVQAhgMA4ghQBvhBBuhjQAtgoAphJQAig9AHgBQAMgBAVAeQAWAgAKApQAdB1heBaQhlBiisAAIgHgBg");
	this.shape_9.setTransform(-109.6,24.4);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#735E99").s().p("AprDaQAhjLCuihQDGi3ESgOQglAugqBIQhYCOgnB+QBehlB6g9QCKhECegIQgdAlgkA7QhMBygqBuQBYhIBpgqQB0gsCAgHQgkAtgsBGQhXCOgnB/g");
	this.shape_10.setTransform(-41.6,-64.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-268.4,-98.9,403.8,158.4);


(lib.shape72 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#716B78").ss(2,1,0,4).p("AETAVIgBgtQgKhrhXhEQhXhFhwAKQhxAKhJBUQgqAvgPA2QgLArAEAtQAKBrBXBFQBXBFBwgLQBxgKBKhUQA5hAAHhQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#716B78").ss(2,1,1).p("AEOAqIobhT");
	this.shape_1.setTransform(0.4,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AE94D9").s().p("AivDJQhXhFgKhrQgEgtALgrIIcBUQgHBQg5BAQhKBUhxAKIgcACQhfAAhMg8gAkJg/QAPg2AqgvQBJhUBxgKQBwgKBXBFQBXBEAKBrIABAtgAkJg/g");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-26.1,55,52.3);


(lib.shape71 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOARQgGgIAAgJQAAgJAGgHQAHgHAHAAQAJAAAGAHQAGAHAAAJQAAAJgGAIQgGAHgJAAQgHAAgHgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.4,4.4,4.9);


(lib.shape69 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#716B78").ss(2,0,0,4).p("ACxjHQhYhFhwAKQhxAKhJBUQhJBTAJBqQAKBrBYBFQBXBFBvgLQBygKBKhUQBJhTgKhqQgKhrhXhEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AivDJQhYhFgKhrQgJhqBJhTQBJhUBxgKQBwgKBYBFQBXBEAKBrQAKBqhJBTQhKBUhyAKIgbACQhgAAhLg8g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-26.1,55.1,52.3);


(lib.shape67 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#413557").ss(2,1,1).p("ACWlDQidDPAHDdQAFCPAvCFQAXBCAWAnQhygahthIQjZiPAojiQAukJCUh2QCMhxEYgIQhSA7hPBng");
	this.shape.setTransform(27.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#735E99").s().p("Ah+GDQjZiOAojiQAukICUh3QCMhxEYgIQhSA7hPBnQidDPAHDdQAFCOAvCFQAXBDAWAmQhygahthIg");
	this.shape_1.setTransform(27.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-48.5,62.2,97.2);


(lib.shape62 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjKDLIAAmVIGVAAIAAGVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-20.3,40.8,40.8);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85570A").ss(1,1,1).p("ADIgSQgXAygyAbQg4AXgxglQgugmgEg7QgEg9AlgsQAlgrA6gFQAVgCAWACQA8AJALA+QAKA7gYA5gAAMC+IAHgHIAJAAIAHAHQACAFgCAFIgHAHIgKgBQgEgBgCgFQgCgFACgFgAivibQgJgOgNAUIgMAeIgGAjIgBAjQABATAMANQANAPALgTQAIgPADgRIAEgjQACgQgBgSQgBgRgLgQgAh1CzQACgFAEgCQAFgCAFACIAGAHQACAFgCAEQgCAFgFACIgJgBQgFgCgBgFg");
	this.shape.setTransform(1.3,-27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#49481D").ss(1,1,1).p("ACCgOIAAAFIADASIAAABIAAAEIABAbAiFA3IAAgEIAAAAIAAgBIACgiIABgNIABgdIAAgDIABgZ");
	this.shape_1.setTransform(-1.5,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#805209").ss(1,1,1).p("AiqkLQABgPAKgPIAcgiIAfgbIAegPIAmgMIAjgFIAjAAIAlACQASACAQAHIAbAMQANAGAMANQANAMAHARIAGAQQARALALAUQAOAcAGAcQAKAvgMAwIgMAiQgdBFg/AeIgPAGIgMANIgJAKIAGAHQAEAMABAKIgCAKQgFAQgJAPQgIAMgOAKIgQALIgHAEIgHADIgiAPIgdAIIgEAAIgigBIgLgCIgVgHQgQgIgLgKIgHgHIgBgCIgHgIIgFgKIgFgMIgCgFIgBgBIgBgCIgDgPIAAgOIABgHIADgMIADgGIAJgMIAIgIIgVgWQgOgOgLgqQgQAGgOgKQgLgIgFgMQgHgRgEgTQgEgTAAgRIAFgjIAIgjIAQgfIAKgLQANgLARAFQARAIAHANQAHAPADAOQADAOACAUQABAVgCARIgGAhQgFAQgHAQQgGAQgQAJIgGACABnDeIgBAIIgDAjIgEAiAA3FhIgVAOIgPAGIgPAGIgFABIgeAHIgeAEIgoAAIgegIIgTgNAisEkIADgVIAGgcACxk2IAKAHABbAWQgaACgagHQgpgLgagjQgdgogFgyQgGgwARguQAQgqAjgbQAkgaAxgJIAhgEQAjgBAYAMAByASIgXAEAiEAZQAuAnArAFIAtAEIAVgDQARgCARgHQATgHAOgLIADgCAgdCHQgDAFgFACIgLAAIgHgGQgCgFACgFIAIgHIALgBQAFADACAEQACAFgCAFgAiXD6IAUAJIAhAJIAhAFIAkAAIAegEAACENIABgBIABAAQASgDASgJIAJgDIAXgMIAMgGIATgNAijDzIAMAH");
	this.shape_2.setTransform(1.5,-19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2F5988").ss(1,1,1).p("AgwAmIBHhcAgLA3IA9hf");
	this.shape_3.setTransform(8.7,-35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhSgNIAAgBABSAPIABAA");
	this.shape_4.setTransform(-6.5,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6294CA").s().p("AgMBEQgMgNgBgTIABgjIAGghIAMgeQALgUAJAOQALAQABARQABASgCAQIgEAhQgDARgIAPQgHALgEAAQgGAAgFgHg");
	this.shape_5.setTransform(-17.7,-36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E732C").s().p("AhHBeIgggJIgUgJIgCgCIgLgFIABgDIAAgBIAAgCIAAgBIAAgEIAAAAIAAgBIABgdIABgcIAAAJIACgdIAAgCIABgZIAHgQIABgCIAFAMIAGAJIABAEIABAEIAEABIACABIADAIIABAEIAEAAIAOAKQAIAGAJADIAQABIAKACIAjAAIADAAIARAAIAEgBIAfgKIATgOIAHgEIACAAIAFgDIAagRIAPgaIADgFIABgJQABgHAGgCIgDARIgGARQgDALACAtIAAAGIADARIgDgBIgBAAQAEATgEALIAAADIgFAGIgFAEIgFADIgMAHIgWALIgQADIgeANIgCABIAAAAIgfADIgkABgAiFAXIgCAiIACgiIAAgOg");
	this.shape_6.setTransform(-1.2,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCBF1D").s().p("AgMARQgCgFACgFIAIgHIAJAAQAFACACAEQABAFgCAFQgCAFgGACIgJAAgAA7ALQgEgCgCgFQgCgEACgEIAHgHIAJAAIAHAHQACAEgCAEIgHAHgAhGAAQgFgCgBgEIAAgJQACgFAEgCQAFgBAFABIAGAHQACAFgCAEQgCAFgFABg");
	this.shape_7.setTransform(-2.7,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#447FBF").s().p("AhGBzQgwgngEg8QgEg8AngsQAlgqA4gFQAVgCAWABQA8AJALA/QAKA7gYA2QgXA0gyAcQgVAIgTAAQghAAgegWgAggAoIA9hfgAhFAXIBHhcg");
	this.shape_8.setTransform(10.7,-34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCA31D").s().p("AgfD4IgigBIgLgCIgVgHQgQgIgLgKIgHgHIgBgCIgHgIIgFgKIgFgMIgCgFIgBgBIgBgCIgDgPIAAgOIABgHIADgMIADgGIAJgMIAIgIQAuAnArAFIAtAEIAVgDQARgCARgHQATgHAOgLIADgCIAGAHQAEAMABAKIgCAKQgFAQgJAPQgIAMgOAKIgQALIgHAEIgHADIgiAPIgdAIgAgvDBIgIAHQgCAFACAFIAHAGIALAAQAFgCADgFQACgFgCgFQgCgEgFgDgAAKC7QgBAFACAFQABAFAFABIAKABIAGgHQACgFgBgFIgHgHIgJAAgAhwCpQgFACgBAFIgBAIQACAFAFACIAIABQAFgCACgFQACgEgBgFIgHgHIgEgBIgFABgAAnBbQgpgLgaglQgdgogFgwQgGgwARguQAQgqAjgaQAkgbAxgIIAhgEQAjgCAYANIAKAGQARALALAVQAOAbAGAcQAKAvgMAxIgMAiQgdBCg/AgIgPAGIgXAEIgMABQgUAAgUgGgABjjQQg7AFglArQgkAsAEA9QADA7AvAmQAwAlA5gXQAygbAWgyQAYg5gKg7QgLg+g7gJIgTgBIgYABgAjQAPQgLgIgFgKQgHgRgEgTQgEgSAAgSIAFgjIAIgjIAQgfIAKgLQANgLARAGQARAHAHANQAHAQADAOQADANACAVQABAVgCAQIgGAhQgFAQgHAQQgGAOgQAJIgGACQgGACgFAAQgKAAgJgGgAjHiYIgMAeIgGAjIAAAjQABATALANQANAPALgTQAJgPACgRIAFgjQABgQgBgSQgBgRgKgQQgEgGgFAAQgGAAgIAMg");
	this.shape_9.setTransform(1.5,-27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFDE83").s().p("AhmGGIgegHIgTgNIgDgFQgEgCgCgGQgLgbgBgQIgBgWIADgVIAGgcIAAAAIAMAHIAUAJIAhAJIAhAFIAkgBIAegDIABAAIABgBIABAAQASgDASgJIAJgEIAXgLIAMgHIATgMIgBAIIgDAjIgEAiQgYAqgQAMIgVAOIgPAFIgPAGIgFACIgeAHIgeAEgAgsBFQgrgFgugnIgVgWQgOgOgLgqIAGgCQAQgJAGgQQAHgQAFgRIAGggQACgRgBgUQgCgVgDgNQgDgOgHgQQgHgNgRgIQABgPAKgOIAcgjIAfgbIAegPIAmgMIAjgFIAjAAIAlADQASABAQAHIAbAMQANAGAMANQANANAHAPIgEAKQgYgMgjABIghAFQgxAHgjAcQgkAagQAqQgRAuAGAwQAFAyAdAoQAaAjApALQAaAHAagCQAUgBgJALIgJAJIgDACQgOAKgTAIQgRAGgRADIgVADg");
	this.shape_10.setTransform(1.6,-19.7);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-58.9,48.1,78.3);


(lib.shape59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222D29").ss(1,1,1).p("AgkhLQAFAAADADIAHAJIAMAOIAEAFIAHALIAPAPIABgEIAJgVIAOgdQASgeAVgHQAcgKAJAcIAEAKIAAABIABAEIgBARIgEAdIgDANIgCAJIgCAHIgCAFIgBAEIgCAKIgIASIgJAVIgGANQgKAPgMAMIgJAHQgIAHgKABIgRgBIgKgEIgIgGIgNgKIgRgLIgXgNIgogfIgUgUIgGgKIAAgFIAFgJIAJgMIAHgJIAEgDIAIgHIANgLIAAAAIAEgDIAOgMQAHgFAIgDIACgBIAEAAgAAnA8IADgSIABgHIACgKIABgBIAIgXIABgBIAKgYIAKgRIALgPIAJgIIAAAAQAKgKANgFIAAABIADgCAAOgBIABgJIACgI");
	this.shape.setTransform(16.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#805209").ss(1,1,1).p("AADBZIgHgKIgVgcIgTgUIgagXQgRgPAAgXQAAgYARgRQARgQAagBQAagCATAWIAbAeIAHAMIALAMIAZAZ");
	this.shape_1.setTransform(4.3,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFDE83").s().p("AgEBPIgVgcIgTgUIgagXQgRgPAAgXQAAgYARgRQARgQAagBQAagCATAWIAbAeIAHAMIALAMIAZAZIAAABIgEAAIgCABQgIADgHAFIgOAMIgEADIgBAAIgMALIgIAHIgEADIgHAJIgJAMIgFALg");
	this.shape_2.setTransform(4.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202826").s().p("AgkBZIgCgGIgBgEIgBgMIgBgHIABgKIAAgBIADgTIACgGIACgKIABgCIAIgUIAAgCIALgaIAJgRIAJgPIAJgHIABgBQAKgJANgGIAAABIACgCIABAEIgBARIgDAdIgEAOIgCAIIgCAHIgBAIIgBAEIgDAHIgHATIgJAUIgHANQgHAQgMALIgKAIg");
	this.shape_3.setTransform(24.9,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F3E3A").s().p("AARBvIgKgEIgJgGIgMgKIgSgLIgXgNIgngfIgUgUIgHgKIABgFIAFgJIAJgMIAHgJIAEgDIAIgHIAMgLIABAAIAEgDIAOgMQAHgFAIgDIACgBIAEAAIAAgBQAFAAADADIAGAJIANAOIADAFIAIALIAPAPIABgEIAJgVIANgdQATgeAUgHQAdgKAJAcIADAKIAAABIgCACIAAgBQgNAFgKAKIgBAAIgJAIIgLAPIgJARIgLAYIAAABIgIAXIgBABIgCAKIgCAHIgDASIAAABIgBALIABAGIABANIABAEIACAFIAIAEQgHAHgLABgAAQgKIgCAJIACgJIACgIg");
	this.shape_4.setTransform(16.8,11.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-5.8,33.6,29.1);


(lib.shape57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222D29").ss(1,1,1).p("ABwg2IAEAFQACAEgBAFIgJARIgeA4IgQAhIgBAFQgHAVgHAKQgNATgRAAIgZgEIgFgCQgOgFgMgJIgLgJIgRgQIgHgIIgOgUIgQgeIAAgCIgKgiQgEgUADgIQACgJAFgFQAFgGAIgDIAKgEIAJgBIAUACQAOACAWAKQAUAKAKALIAMgWIAJgQIAOgZQAJgPAGgDQAEABADAGIAMAXIAWAaIALAKg");
	this.shape.setTransform(-15.1,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#805209").ss(1,1,1).p("AhMAjIAHgLIAOgWIANgYIAHgZQACgNAQgQQAPgQAVAAQAYAAARAQQARASAAAXQAAAYgQANIgeAVIgMAFIgDACQgEACgFAGIgNAVIgYAi");
	this.shape_1.setTransform(-0.7,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFDE83").s().p("AgeBdIgMgKIgVgaIgMgWIAGgLIAOgWIANgZIAHgYQACgNAQgQQAPgQAVAAQAYAAARAQQARASAAAXQAAAYgQANIgdAVIgNAEIgDACQgEACgFAHIgNAVIgYAig");
	this.shape_2.setTransform(-0.7,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3E3A").s().p("AgIB1IgFgCQgOgFgMgJIgLgJIgRgQIgHgIIgOgUIgQgeIAAgCIgKgiQgEgUADgIQACgJAFgFQAFgGAIgDIAKgEIAJgBIAUACQAOACAWAKQAUAKAKALIAMgWIAJgQIAOgZQAJgPAGgDQAEABADAGIAMAXIAWAaIALAKIAAAAIAEAFQACAEgBAFIgJARIgeA4IgQAhIgBAFQgHAVgHAKQgNATgRAAg");
	this.shape_3.setTransform(-15.1,21.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-3,33.9,36.5);


(lib.shape55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49481D").ss(1,1,1).p("AAXAcQgKANgNAAQgMAAgKgNQgKgMAAgQQAAgQAKgMQAKgMAMAAQANAAAKAMQAKAMAAAQQAAAQgKAMg");
	this.shape.setTransform(28.2,-12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC7B").s().p("AgWAcQgKgMAAgQQAAgQAKgLQAJgMANgBQANABAKAMQAKALAAAQQAAAQgKAMQgKAMgNAAQgNAAgJgMg");
	this.shape_1.setTransform(28.2,-12.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.9,-16.8,6.7,8.2);


(lib.shape54 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("Ah+gIQB0AiCJge");
	this.shape.setTransform(-0.3,18.8);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("Ah4gNQB4AzB5gq");
	this.shape_1.setTransform(-0.2,28);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAXCaQgJAbgOAAQgNAAgJgfQgKggAAhFQAAhCAKhSQAJhRANAAQAOAAAJBWQAKBWAABDQAABEgKAbg");
	this.shape_2.setTransform(0,18.9);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAAC1QgjAAgXgfQgXggAAhFQAAhCAXhSQAXhRAjAAQAkAAAXBWQAXBWAABDQAABEgXAbQgXAbgkAAg");
	this.shape_3.setTransform(0,18.9);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAugnIghBSIgbgDIgfhSg");
	this.shape_4.setTransform(0.6,-3.2);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAAC1Qg0AAgjgfQgjggAAhFQAAhCAjhSQAjhRA0AAQA1AAAjBWQAjBWAABDQAABEgjAbQgjAbg1AAg");
	this.shape_5.setTransform(0,18.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.1,-7.5,25.6,44.7);


(lib.shape53 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AhrgHQBjAfB0gc");
	this.shape.setTransform(-0.3,16.7);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AhmgMQBmAvBngm");
	this.shape_1.setTransform(-0.2,25.1);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAUCOQgIAZgMAAQgLAAgIgeQgIgdAAg/QAAg9AIhLQAIhLALAAQAMAAAIBPQAIBQAAA8QAABAgIAZg");
	this.shape_2.setTransform(0,16.8);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AAyCOQgUAZgeAAQgdAAgUgeQgUgdAAg/QAAg9AUhLQAUhLAdAAQAeAAAUBPQAUBQAAA8QAABAgUAZg");
	this.shape_3.setTransform(0,16.8);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("AALAnIgXgCIgahMIBNADg");
	this.shape_4.setTransform(0.5,-3.5);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(2,1,1,3,true).p("ABMCOQgeAZguAAQgsAAgegeQgegdAAg/QAAg9AehLQAehLAsAAQAuAAAeBPQAdBQAAA8QAABAgdAZg");
	this.shape_5.setTransform(0,16.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.2,-7.5,21.8,41.1);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49481D").ss(1,1,1).p("AAUgZQAZgEALgFQAKgGgBgMIgFgfQgEgSALgKQALgJALAHQAKAHAEAVQACAPgDALQAQgHAMgKQALgLALAAQALgBAGANIAOAbQAIAPgMAHIgVAKIgfAOQgXAIgVADIgiABIgQgCIgBgHIgDgMIgJgOAAUgZIgDgDQgJgGgIgDIgbACIgOAEIggARIggASIgdASIgdAVIgQAOQgFAEgBAOQgCAuAugEIAQgBIAKgCIABAAIAcgGIAhgLQANgGALgDQAKgDAIgGIALgJIADgEIAJgKQAHgJAHgWQAHgWgEgO");
	this.shape.setTransform(12.8,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E732C").s().p("AhrAkQAAgOAGgFIAPgOIAegTIAdgSIAegTIAggSIAOgEIAbgBQAKACAIAHIAEACIgBABIAJANQAFAQgHAWQgHAUgHAJIgJAKIgFAFIgMAJQgIAGgKADQgKADgOAGIgfALIgcAGIAAAAIgLACIgQAAIgHAAQgmAAACgpg");
	this.shape_1.setTransform(5.1,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC7B").s().p("AhFA+IAAgHIgEgOIgJgOIABAAIAAAAQAZgEAKgFQAKgGAAgMIgFgdQgFgSALgKQALgJALAHQALAHACAVQACAPgCALQAPgHALgKQAMgLALAAQAKgBAHANIAOAZQAHAPgLAHIgWAKIgfAOQgWAKgTADIgjABg");
	this.shape_2.setTransform(23.2,-13.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-19.9,37.3,23.6);


(lib.shape49 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#49481D").ss(1,1,1).p("AhDAJIgGAFQgJALgOAIQgKAGgTAHQgaAEgJgKIgCgCQgHgMANgJIAegSQAPgKgLgQIgXgTIgVgYIgCgFIgBgBQgBgMAUgRQAMgKAWADQA1AIAWAzIAFAOQABAJgGAGIgGAFQAHgFAKABIAXAFIAOAGIA5APIA1AQQARAEAVAXQAVAXgJAQQgJAQgRAKIgrADIgkgKIgUgIIgTgIIgSgJIg1ghIgHgEIgFgFIgFgHIgDgHIAAgCIABgMIABgBIACgKQACgJAPgHIAAgB");
	this.shape.setTransform(-10.5,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E732C").s().p("AAMA7IgSgIIgTgHIgSgJIg3ghIgHgDIgFgEIgFgIIgDgHIAAgCIABgLIABgCIACgLQACgKAPgHIAAAAQAHgGAKABIAXAFIAQAGIA3ARIA1ARQARADAVAWQAVAWgJARQgJAPgRALIgrACg");
	this.shape_1.setTransform(-5.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC7B").s().p("Ag4BJIgCgCQgHgMANgJIAegUQAPgKgLgQIgXgRIgVgYIgCgFIgBgBQgBgMAUgRQAMgKAWADQAzAIAWAzIAFAOQABAHgGAGIgGAFIAAABQgPAHgCAJIgCAMIgBABIgGAFQgJALgOAIQgIAGgTAHIgNABQgPAAgHgHg");
	this.shape_2.setTransform(-20.9,-7.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-16,34,22.8);


(lib.shape44 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBAC09").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape.setTransform(21,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.shape42 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#103621").ss(1,1,1).p("AOMAcQjRg6gTgHQglgNgXAAQgTAAhTAUQhTAUgtAAQhNAAg8gSQg8gRg8AAQg6AAhEAVQhDAVgyAAIj7goIiegKIgiADIgdAFIgwALQglAIgyATQgxARgUAKQgUAJhlAZ");
	this.shape.setTransform(326.8,1089.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B5A37").s().p("AjRA3Ih8gkQg9gQgkAAQgmAAg0AWQg1AVgaAAIgygFQgXAAgaAUIghAeIgEgyQgEgliogCQBlgXAVgJQATgKAxgTQAygTAlgIIAwgLIAegFIAhgDICeAKID8AoQAxAABDgVQBFgVA5AAQA7AAA8ARQA9ASBNAAQAsAABUgUQBTgUATAAQAXAAAlANQATAHDRA8QiwgagOBHIhCgFQiZAAhQAfQhrApiFAPIgEABQjEgBi8gyg");
	this.shape_1.setTransform(326.8,1094.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(236,1083.8,181.6,21.3);


(lib.shape41 = function() {
	this.initialize();

	// Layer 36
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(95,83,73,0.498)").s().p("AgSAPQgJgFgBgIQAAgGAHgHQAJgGAMgBQAKgBAJAFQAJAFAAAIQABAGgIAHQgHAGgNABIgBAAQgKAAgIgEg");
	this.shape.setTransform(-41.2,-71.7);

	// Layer 35
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(95,83,73,0.498)").s().p("AgZAVQgLgHgBgMQAAgKAJgJQALgJARgBQAOgBALAHQAMAIABAMQABAKgLAIQgKAKgQABIgCAAQgOAAgLgHg");
	this.shape_1.setTransform(-46.1,-59.4);

	// Layer 34
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(95,83,73,0.498)").s().p("AgaAVQgLgIAAgNQAAgLALgKQAMgJAOAAQAPAAAMAJQALAKAAALQAAANgLAIQgMAKgPAAQgOAAgMgKg");
	this.shape_2.setTransform(-46.9,39.2);

	// Layer 33
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(95,83,73,0.498)").s().p("AgYAWQgLgJAAgNQAAgMALgJQALgJANAAQAPAAAKAJQALAJAAAMQAAANgLAJQgKAJgPAAQgNAAgLgJg");
	this.shape_3.setTransform(-51.1,17.1);

	// Layer 32
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(95,83,73,0.498)").s().p("AgbAXQgLgKAAgNQAAgMALgKQAMgKAPAAQAQAAALAKQAMAKAAAMQAAANgMAKQgLAKgQAAQgPAAgMgKg");
	this.shape_4.setTransform(-51.6,-8.1);

	// Layer 31
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(95,83,73,0.498)").s().p("AgVAJQgHgGABgGQABgJAKgEIATgCQAMACAHAHQAIAHgCAGQgBAIgJAEIgUADQgMgCgHgIg");
	this.shape_5.setTransform(44.7,-71.8);

	// Layer 30
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(95,83,73,0.498)").s().p("AgBAcQgQgCgKgJQgLgJABgJQABgMAMgIQAMgHAOABQAQABAKAJQALAKgBAKQgBALgMAHQgKAHgOAAIgCAAg");
	this.shape_6.setTransform(50.2,-59.5);

	// Layer 29
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(95,83,73,0.498)").s().p("AgZAVQgMgIAAgNQAAgLAMgKQAKgJAPAAQAPAAAMAJQALAKAAALQAAANgLAIQgMAKgPAAQgPAAgKgKg");
	this.shape_7.setTransform(44.2,38.7);

	// Layer 28
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(95,83,73,0.498)").s().p("AgYAWQgLgJAAgNQAAgMALgJQAKgJAOAAQAOAAALAJQALAJAAAMQAAANgLAJQgLAJgOAAQgOAAgKgJg");
	this.shape_8.setTransform(48.8,16.7);

	// Layer 27
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(95,83,73,0.498)").s().p("AgaAXQgMgKAAgNQAAgMAMgKQALgKAPAAQAQAAAMAKQALAKAAAMQAAANgLAKQgMAKgQAAQgPAAgLgKg");
	this.shape_9.setTransform(49.3,-8.5);

	// Layer 26
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.102)").s().p("AhFC7QidgQg+gRQg/gShjAPQhiAOgpARQhRi2gQjMIASAIQEZB5GJAAQGLAAEYh5IAGgDQgQC4g+C2IhugDQhegDhCAPIhzAYIhdAFg");
	this.shape_10.setTransform(0,32);

	// Layer 25
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#342B23").s().p("Ag+AVIgIgpICOAAIgLApg");
	this.shape_11.setTransform(-0.1,-48.8);

	// Layer 24
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.6)").s().p("AgNgMIgHgGQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAIIgFAFIAKBPIgxABg");
	this.shape_12.setTransform(0.4,-9.3);

	// Layer 23
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#827D6F").s().p("AhrBnIgIjZIDngCIgNDbQg0AOg0AAQg1AAg1gOg");
	this.shape_13.setTransform(0.2,-8.7);

	// Layer 22
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AhrBnIgIjZIDngCIgNDbQg0AOgzAAQg2AAg1gOg");
	this.shape_14.setTransform(-1.1,-7.5);

	// Layer 21
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#827D6F").s().p("Ag4B8QgGiag0hdIBrAGQBnBxATCAg");
	this.shape_15.setTransform(48.8,-63.7);

	// Layer 20
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#655443").s().p("AhMAgIgOg/ICwAAIAFA/g");
	this.shape_16.setTransform(-47.8,-48.5);

	// Layer 19
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#655443").s().p("AhTgfICxAAIgOA9IitACg");
	this.shape_17.setTransform(51.2,-48.5);

	// Layer 18
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.2)").s().p("Ag8BYIACAAQgGiWg0hcIBrAGQBmBvATB9IAFAAIgPBAIitACg");
	this.shape_18.setTransform(47.3,-60.5);

	// Layer 17
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#655443").s().p("AhpAmIgKhLIDnAAIgJBLg");
	this.shape_19.setTransform(0.1,-49.1);

	// Layer 16
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#827D6F").s().p("AhmgvQBngNBrANIAIBkIjnABg");
	this.shape_20.setTransform(0,-58.2);

	// Layer 15
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.2)").s().p("AhoBYIgKhAIgBAAIAMhoQBogOBqAOIAIBmIABAAIgIBCg");
	this.shape_21.setTransform(-1.7,-53.6);

	// Layer 14
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#827D6F").s().p("AhyB8QATiABnhxIBrgGQg0BdgGCag");
	this.shape_22.setTransform(-45.2,-63.6);

	// Layer 13
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.2)").s().p("AhlCaIgOhCIAEAAQATh8BlhvIBrgGQgzBbgGCWIADAAIAEBCg");
	this.shape_23.setTransform(-43.4,-60.8);

	// Layer 12
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#827D6F").s().p("AgwlcICSAAQArFShuFSIiMAVQBtlfgwlag");
	this.shape_24.setTransform(45.5,15);

	// Layer 11
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.2)").s().p("AgwlcICSAAQArFShuFSIiMAVQBtlfgwlag");
	this.shape_25.setTransform(43.4,15.6);

	// Layer 10
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#827D6F").s().p("AhclNICSAAQgwFZBkE0IiMANQhllJArlRg");
	this.shape_26.setTransform(-48.6,14.2);

	// Layer 9
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.2)").s().p("AhclMICSAAQgwFYBkEzIiMAOQhllJArlQg");
	this.shape_27.setTransform(-46.9,14.8);

	// Layer 8
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#582F16").ss(2,1,1).p("AJgJvQB0lWgslQIh2ACIB7lLIAAAAIAAgBIABgCIgBAAQgDhwhRhZIhrgQIgPgRIhrgFIACADIgSgBIACAEQlWghlSAjIAEgJIhrAGIAAABIgSABIgQARIhWAOQiDBcgIBrIgCAAIACADIAAACIABAAICfFJIg3AAIgCAPIhjACQgKBSgBBSQgDEQBoDv");
	this.shape_28.setTransform(0,-13.5);

	// Layer 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("ApYASQJYhHJZBH");
	this.shape_29.setTransform(1.8,-70.8);

	// Layer 6
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("AqOAJQKOglKPAl");
	this.shape_30.setTransform(0.5,-62);

	// Layer 5
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("ApYAAISxAA");
	this.shape_31.setTransform(0,46.1);

	// Layer 4
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("Ap3AAITvAA");
	this.shape_32.setTransform(0,33.1);

	// Layer 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("AqiAAIVFAA");
	this.shape_33.setTransform(-0.1,17.8);

	// Layer 2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("AqyAAIVlAA");
	this.shape_34.setTransform(-0.1,-0.9);

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#77401E").s().p("AhFFUQidgPg+gSQg/gShjAPQhjAPgpAQQiHk2AtluIVQgQQAsFSh0FUIhtgEQhegDhCAPIhzAYIheAFg");
	this.shape_35.setTransform(0,16.7);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.2,-77.2,138.6,129.9);


(lib.shape40 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("ApUisISpACIhlFJIu2AOg");
	this.shape.setTransform(0,-28.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77401E").s().p("AqsCCQAEhxCHhhQI5hiJBBiQBTBdABB1g");
	this.shape_1.setTransform(0,-64.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#582F16").s().p("Aqti/IVbACIiEFvIwkAOg");
	this.shape_2.setTransform(0,-32.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.6,-77.3,137.4,66.3);


(lib.shape38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#103621").ss(1,1,1).p("Eg1Ng/nMAAAB/oMBqbAAAMAAAh3KQAHilhXhZIgcgcQhGg9g9gBQhIgBhLAvQhLAwgKAaIgiBGQgXArgZAOQgWAMgwAGQgvAFgNAHQgoAWgaA/QgMAbgbBhQgYBSgXAoQgiA8g2ATQjvBWiHDkQiIDmAAFBQAAArAeBGQAeBGAAAXQAAApgdBKIhCCQQhfDKAABUQAABMBVC3QBVC3AAASQAAA7gWArQgNAagjAmQgjAngNAWQgWAoAAA1QAAAoAQAjQAIASAaApQAyBOAABOQAAAwgdBDIhCCBQhfC0AABvQAAAXAZA1IA3BuQBQCiAABhQAAA0gPAoIgjBBQgyBXAAB0QAAAqAWAuIAwBVQBGB/AAClQAABBgWAwQgNAegjArQgkAsgMAZQgWArAAA5IAbAzQAhA/AZA5QBVDCAACCIgFAeQgFAUAAAKIgKA4QgLAwgJARIgjCrQgJAxgLAcQghBShcAAQhYAAhYgyQgtgagXgIQgpgQgyAAQghAAhmAeQhlAegdAAQgrAAhugyQhugyhDAAQhUAAg9AcQgkAQg6AuQg5AsgoASQhAAchaAAQhkAAhNgTQgtgLhIgeQhIgegtgLQhOgThoAAQhXAAiNAjIh/AjIhGgFIg3gFIjhgyQg/AAhNAvQhRAygnADIigATIibALQg7AAhkhFIhFg0QgigZgNgEQg0gSg8hiQg6hfAAg7QAAg8AZiPIAZiYQAAgygyhGQgyhFAAhDQAAgtAZgjIA3g/QBQhfAAi2QAAgYhkjNQhkjNAAguQAAheAyhhQAagzAJgYQAPgsAAgyQAAgvhGiiQhGihAAhJQAAhXA3h4QA3h4AAgwIgUg2QgUgzAAgPQAAgsBfhvQBfhvAAgsQAAgrhAiVQg3iBAIg2IAAgBQgIhzATheQAUhiAAgsQAAgigqhKIhdiXQiHjeAAiGQAAg3AUiCQAUiCAAg4QAAhphQjFIg5iPQgchKgFgpIgIiQQgDhbgKg1QgfihiAg9QjahphyhuQgzgxhHhsQgwhHhBgYQhXghjYAAQgWAAgmAVg");
	this.shape.setTransform(322.6,816.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B5A37").s().p("EgeRA29IhSg4QgpgbBQhwQBPhvhygcQhzgbAAgaQgCgaA1huQA1hugChnQgChoiahBQichBAAhJQAAgwAfgmIBBhEQBhhnCQiFQCQiEiehGQiehHhqjPQhrjPA9hpQAeg4C5hHQC3hIhRhpQhThpiohbQinhagEhVQgDhVA5gnQA6gmB4hEQB3hFhShsQhUhtgzgWQgzgWCwg5QCvg3AXh5QAXh6idiTQieiTDBhaQDBhagbiiQhziLj3hNQhHhoBhiWQBhiWiXhmQiYhngWiNQgXiNCMgqQCNgqhKihQhKihiGiCQiGiBB0h0QB1h1iegMQifgMgMg6QgkiuiahCQkFhziKh2IgkgkIAAgEQAmgUAXAAQDXAABXAgQBCAYAvBIQBIBsAyAxQByBtDaBqQCBA9AeChQAKA1ADBbIAICQQAFAoAcBKIA5CPQBQDGAABpQAAA3gUCDQgTCCAAA3QAACFCHDeIBcCXQAqBKABAjQgBArgTBiQgTBeAHBzIAAACQgIA2A4CBQA/CUABArQAAAthgBvQheBvAAApQgBAPAVAzIATA2QABAxg3B3Qg3B4AABXQgBBLBHCiQBFCiAAAuQAAAygPAsQgJAYgZAzQgzBiAABdQABAvBjDNQBlDNgBAXQAAC3hPBfIg4A/QgYAiAAAtQAABDAxBGQAzBFAAAyIgaCZQgZCOAAA8QAAA7A7BfQA7BiA0ASQAOAEAhAaIBFAzQBkBFA8AAICagLIChgTQAmgDBRgyQBNgvBAAAIDhAyIA2AFIBGAFIB/gjQCNgjBYAAQBoAABLATQAvALBIAeQBIAeAtAMQBNASBkAAQBaAABAgcQAogRA5gtQA7gtAjgRQA9gcBUAAQBDAABuAyQBvAyAqAAQAdAABmgeQBlgeAiAAQAxAAAqAQQAWAIAtAaQBYAyBZAAQBcAAAhhSQAKgcAKgxIAjirQAIgRALgwIAKg4QAAgJAGgUIAEgfQAAiChUjBQgag6ghg/IgbgzQAAg4AXgsQALgYAkgtQAjgqANgfQAXgwAAhBQgBikhGh/IgvhWQgXgtAAgrQAAh0AzhWIAihCQAPgoAAg0QAAhhhPiiIg4huQgYg1AAgXQAAhwBei0IBCiBQAdhEABgvQAAhMgzhOQgagpgIgTQgPgjAAgnQgBg1AWgoQANgXAjgnQAjglAOgbQAVgrAAg6QAAgShUi4QhWi3AAhLQAAhVBgjKIBBiQQAdhKAAgoQAAgYgehGQgdhGAAgqQAAlCCIjlQCHjlDuhVQA3gUAhg7QAXgoAYhSQAbhhAMgcQAag+AogWQANgIAwgFQAvgFAXgMQAYgOAYgsIAihGQAJgaBLgvQBLgwBIABQA9ABBGA+QgVADhXCpQhYCokPB/QkPB+A+BkQA8BlgDBuQgDBuiQgQQiRgPhXCYQhYCYBDBRQBCBRAvBFQAxBGgFAkQgFAlkBCTQkDCSCQB3QCQB3hCBSQhCBTCkCoQCjCnAJAlQAKAlgYAkQgXAjhigOQhhgOhGA2QhFA2BJBMQBIBLAvAqQAxAphKBkQhKBiBZAqQBaApgtBKQgtBJijBWQikBVAdBFQAdBGB4BWQB3BWAwBUQBhCyhhA1IhsA6QgLAEiXBRQiZBRCzB/QCzB+AaBbQAZBbgrCPQgdBdgiAWQg1Aig0BIQg0BJANA1QANA1CWB+QCVB9hBBhQhBBgDFDDQh4CWgtB2QgsB2A4BYQA4BXhoAJQhnAJhqg2Qg2gcgcgKQgxgQg8AAQgoAAh6AgQh6AhghAAQg0AAiFg2QiEg3hPAAQhmAAhJAfQgqASiDgZQiCgYgkA4QglA4iEAVIikAVQgfAAhKgcIiRg5QhJgdiEhKQiFhKl4D0IhCgGIkOg2QhMAAhcAzQhhA2guhJQgthJiCASQiCARhJBKQgjAkgvAAQgxAAg9gmg");
	this.shape_1.setTransform(317.2,762.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#174F30").s().p("Eg1NA/0MAAAh/nIAkAjQCKB3EFByQCaBCAkCvQAMA5CfANQCeAMh1B0Qh0B0CGCCQCGCBBKCiQBJChiMAqQiNApAXCOQAXCNCXBmQCYBmhhCXQhhCWBHBoQD3BNBzCLQAaChjABaQjBBaCdCUQCeCTgXB5QgXB5ivA6QiwA5AzAWQAzAWBTBsQBTBth3BEQh4BEg6AnQg6AmAEBTQAEBVCnBbQCoBaBSBqQBSBpi4BHQi4BIgfA3Qg8BqBrDPQBqDPCeBGQCeBGiQCFQiRCEhgBnIhCBFQgeAlAAAxQAABJCbBBQCbBBACBnQACBog1BuQg1BuABAaQABAZBzAcQByAbhPBwQhQBvApAcIBSA3QB4BMBIhKQBJhJCCgSQCBgSAuBKQAtBJBig2QBcgzBMAAIEOA2IBCAFQF3jzCFBKQCFBKBIAdICRA5QBLAcAfAAICjgWQCFgVAlg4QAkg4CCAZQCCAYArgSQBJgeBlAAQBQAACEA2QCFA2AzAAQAiAAB6ggQB6ghAoAAQA8AAAxARQAcAJA2AcQBpA3BogJQBogKg4hXQg4hXAsh3QAsh2B5iWQjFjCBBhhQBBhgiWh+QiVh9gNg1QgNg2A0hIQAzhJA1ghQAjgWAdheQAriOgahbQgZhbizh/Qizh+CYhRQCYhRALgFIBsg6QBgg1hgixQgwhVh3hWQh4hWgdhDQgdhGCkhVQCjhVAthKQAshJhZgqQhZgpBKhkQBJhlgwgpQgwgphIhMQhIhMBFg1QBFg2BiAOQBhAOAYgkQAXgjgJglQgJglikioQikioBChSQBChTiPh2QiQh3EDiTQEBiTAFgkQAEglgwhFQgwhGhChRQhChRBYiYQBXiYCQAQQCRAPADhuQADhug9hkQg9hlEPh+QEPh+BXipQBYioAVgEIAcAcQBXBZgHClMAAAB3Jg");
	this.shape_2.setTransform(322.6,817.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,407,681.4,819.4);


(lib.shape37 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A65300").s().p("AgIAhQgJgCgEgMQgEgMAEgMQAEgOAJgIQAIgIAIACQAKADAEAMQAEAMgEAMQgDAOgKAIQgHAGgFAAIgFgBg");
	this.shape.setTransform(11.6,-18.9);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A65300").s().p("AgKAUQgOgIgGgMQgHgJAFgJQAFgIANgBQAOAAALAIQAOAIAHALQAGAKgFAJQgFAIgNABQgNAAgMgIg");
	this.shape_1.setTransform(29.5,6.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A65300").s().p("AAFAdQgKgCgLgLQgKgJgCgLQgCgNAGgGQAIgIAMADQALADAKAKQAKAKACAKQACAMgGAHQgGAGgIAAIgGgBg");
	this.shape_2.setTransform(-4.5,-20.7);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A65300").s().p("AgeAKQgJgKADgIQADgLANgFIAaABQAQAEAJAKQAJAJgDAKQgDAKgNAEIgaABQgQgFgJgKg");
	this.shape_3.setTransform(0.9,-8.8);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A65300").s().p("AgZAKQgIgJADgIQACgKAMgEIAWgBQANADAHAJQAIAKgDAIQgDAKgLAEIgWABQgNgDgHgKg");
	this.shape_4.setTransform(-26,-14.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("AhEDjQgcgXAEgBQiBg8guhFQguhFgQhHQgRhJAVgbQASgXAbgGQAagFATAPQAVAQAAAfQAAAJgIAMQgHALAAAJQAAA7ArAcQAKAHAOADQgOgagIghIgJgnQAAgyAdgqQAZglAlgRQAlgRAaALQAcAMAAAqQAAAcggAVQghAUAAAdQAAAPAKAPIAOgiQALgbAbgIQAYgIAZARQAZARAAAtQAAAtgEAZQAjgFARgLQAbgTAAgrQAAgcgKgOIgXgRQgSgIgGgHQgKgNAAgbQAAgsAcgLQAcgLAoAbQAoAbAQAkQAQAjgBA1QgCA0gTA6QgUA7goAXQASgCANgMIAWgjQAOgYALgJQARgQAaAAQAlAAAQAcQAJAQAAARQAAAOgMAaQgPAcgWAZQg9BCh9AOQggAEgbAAQhMAAgjgdg");
	this.shape_5.setTransform(0.5,0.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.3,-24.7,67.6,51.3);


(lib.shape35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#135A8A").s().p("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");
	this.shape.setTransform(357.6,1066.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(128.4,868.3,458.4,395.9);


(lib.shape34 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("AAdAqQgVgCgWgNQgXgOgNgQQgMgRAHgLQAGgLAVABQAVADAWANQAXAOANAPQAMARgHAMQgFAJgQAAIgGAAg");
	this.shape.setTransform(50.3,-36.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.302)").s().p("Ag7AjQgJgPAMgUQAMgTAZgOQAXgPAYgBQAYABAIAPQAJAPgMASQgLAVgZAPQgXAOgZAAQgXAAgJgPg");
	this.shape_1.setTransform(-50.7,-36.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD16A2").s().p("AAAI6IhBAmQiIobmQmCQAmirCQBCQDhEECKFIQg2l0BEljQBkhdBsBdQhdFEAUFDQCCkYDFjkQCSghAkCKQk8EyiXGPQAOA8ARA8IhHAAQgPAxgNAzg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.2,-60.9,120.5,121.8);


(lib.shape31 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4A273").s().p("AIdBBQgRgHgKgKIgBgCIAcgcIAVAJIAVAGQANAAAAgHQAAgFgUgEIgogOQgWgLAAgUQAAgSAWgNQAUgMAZAAQATAAASAHQARAHAKALIABACIgdAcQgXgOgUAAQgLAAAAAFQAAAEAUAGQAcAJALAGQAWAMAAASQAAArhDgBQgSAAgSgHgAruBEIAAhjIgnAAIgCgCIAAgbIACgCIB5AAIACACIAAAbIgCACIgiAAIgBACIABBfIgCAEIgsAAgAkxAPQAAgRACgBIAsADQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAALQAAAVARAAQASAAAAgZIABhHIABgEIAvADIABABIgCBKQgCA6hBABQhAAAAAg3gADgAbIgHgJQgphNAAgCIACgBIAvAAIACABIAUA3IABAAIABABIAXg5IAxAAIACACIgwBPIgDAJIABAlIgCADIgvABQgCgCACgogAFJBEIgBgDIAAhIQAAg7ACgCIBvABIABADIAAAbIgBACIhAAAIgBgCIAAAYIAAgBIA0ABIABAEIgBAaIg0AAIgBgBIAAAbQAAAYgCACgAHFBBIACiCIABgDIAtAAIABAEIgDCBIgCACIgrABgABaBAIgCgCIgBh+IACgEIAsgBIACAEIAABiIA/AAIACACIAAAbIgCACgAgeBAIgBgCIgBh+IABgEIAqgBIACAEIABBiIA+AAIADACIAAAbIgDACgAidBAQgCgBAAiEIABgCIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABAAIAyAAIACACIAAAZIgBACIg0AAIAAAVIAAAAIBBAAIACACIAAAbIgCACgAn8BAQgCgBAAiEIABgCIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABAAIAyAAIACACIAAAZIgBACIg0AAIAAAVIAAAAIBBAAIACACIAAAbIgCACgALoASIAAAAIgmAAIAAAqIgDACIgqACIgCgCIAAiDIABgCIAtAAIACAAIgBA8IABgBIAlAAIACABQACACgEgTIAAgbQAAgPACgBIAsAAIACAAIgBCDIgCACIgrACQgCgBAAgtgAo8ASIAAAAIgmAAIAAAqIgDACIgqACIgCgCIAAiDIABgCIAtAAIACAAIgBA8IABgBIAlAAIACABQACACgEgTIAAgbQAAgPACgBIAsAAIACAAIgBCDIgCACIgrACg");

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#624120").ss(3,1,1).p("AANhCIABBjIA+AAIADACIAAAbIgDADIhqAAIgBgDIgBh/IABgDIAqgBgACyg/IAvABIACABIAUA3IABAAIABABIAXg5IAxAAIACACIgwBPIgDAKIABAlIgCACIgvABQgCgBACgpIgHgJQgphNAAgCgABZhEIAsgBIACADIAABjIA/AAIACACIAAAbIgCADIhsAAIgCgDIgBh/gAFKhEIBvABIABADIAAAbIgBACIhAAAIgBgDIAAAZIAAgBIA0ABIABADIgBAbIg0AAIgBgBIAAAbQAAAYgCACIgsgBIgBgCIAAhJQAAg7ACgCgAHIhEIAtAAIABADIgDCCIgCACIgrABIgBgDIACiDgAJFhHQATAAASAHQARAHAKAKIABACIgdAdQgXgOgUAAQgLAAAAAFQAAAEAUAGQAcAJALAGQAWAMAAATQAAAqhDAAQgSAAgSgIQgRgGgKgLIgBgBIAcgdIAVAKIAVAFQANAAAAgHQAAgEgUgFIgogOQgWgLAAgVQAAgRAWgNQAUgMAZAAgAKUhIIAtAAIACABIgBA7IABAAIAlAAIACAAQACADgEgUIAAgbQAAgOACgCIAsAAIACABIgBCDIgCADIgrABQgCgBAAgtIAAABIgmAAIAAApIgDADIgqABIgCgCIAAiDgAsVg/IB5AAIACADIAAAbIgCACIgiAAIgBACIABBgIgCADIgsAAIgCgCIAAhjIgnAAIgCgCIAAgbgAphhHIgBA7IABAAIAlAAIACAAQACADgEgUIAAgbQAAgOACgCIAsAAIACABIgBCDIgCADIgrABIgCguIAAABIgmAAIAAApIgDADIgqABIgCgCIAAiDIABgDIAtAAgAn9hHIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABgBIAyAAIACADIAAAZIgBADIg0AAIAAAUIAAAAIBBAAIACADIAAAaIgCADIhuAAQgCgCAAiEgAkDAAQACAAAAACIAAALQAAAUARAAQASAAAAgZIABhIIABgDIAvACIABACIgCBKQgCA7hBAAQhAAAAAg3QAAgRACgBgAiehHIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABgBIAyAAIACADIAAAZIgBADIg0AAIAAAUIAAAAIBBAAIACADIAAAaIgCADIhuAAQgCgCAAiEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCB298").s().p("AIdBBQgRgHgKgKIgBgCIAcgcIAVAJIAVAGQANAAAAgHQAAgFgUgEIgogOQgWgLAAgUQAAgSAWgNQAUgMAZAAQATAAASAHQARAHAKALIABACIgdAcQgXgOgUAAQgLAAAAAFQAAAEAUAGQAcAJALAGQAWAMAAASQAAArhDgBQgSAAgSgHgAruBEIAAhjIgnAAIgCgCIAAgbIACgCIB5AAIACACIAAAbIgCACIgiAAIgBACIABBfIgCAEIgsAAgAkxAPQAAgRACgBIAsADQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAALQAAAVARAAQASAAAAgZIABhHIABgEIAvADIABABIgCBKQgCA6hBABQhAAAAAg3gADgAbIgHgJQgphNAAgCIACgBIAvAAIACABIAUA3IABAAIABABIAXg5IAxAAIACACIgwBPIgDAJIABAlIgCADIgvABQgCgCACgogAFJBEIgBgDIAAhIQAAg7ACgCIBvABIABADIAAAbIgBACIhAAAIgBgCIAAAYIAAgBIA0ABIABAEIgBAaIg0AAIgBgBIAAAbQAAAYgCACgAHFBBIACiCIABgDIAtAAIABAEIgDCBIgCACIgrABgABaBAIgCgCIgBh+IACgEIAsgBIACAEIAABiIA/AAIACACIAAAbIgCACgAgeBAIgBgCIgBh+IABgEIAqgBIACAEIABBiIA+AAIADACIAAAbIgDACgAidBAQgCgBAAiEIABgCIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABAAIAyAAIACACIAAAZIgBACIg0AAIAAAVIAAAAIBBAAIACACIAAAbIgCACgAn8BAQgCgBAAiEIABgCIBvAAIACACIAAAbIgCADIhAAAIgBgBIAAAXIABAAIAyAAIACACIAAAZIgBACIg0AAIAAAVIAAAAIBBAAIACACIAAAbIgCACgALoASIAAAAIgmAAIAAAqIgDACIgqACIgCgCIAAiDIABgCIAtAAIACAAIgBA8IABgBIAlAAIACABQACACgEgTIAAgbQAAgPACgBIAsAAIACAAIgBCDIgCACIgrACQgCgBAAgtgAo8ASIAAAAIgmAAIAAAqIgDACIgqACIgCgCIAAiDIABgCIAtAAIACAAIgBA8IABgBIAlAAIACABQACACgEgTIAAgbQAAgPACgBIAsAAIACAAIgBCDIgCACIgrACg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.1,-7.2,158.5,14.6);


(lib.shape29 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.102)").ss(2,1,1).p("A7tiAUAiNADTAVNAAu");
	this.shape.setTransform(491.1,366.5);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.102)").ss(2,1,1).p("A87hRUAjSAClAWlgAC");
	this.shape_1.setTransform(482.4,342.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.102)").ss(2,1,1).p("A91grUAg8ABsAavgAa");
	this.shape_2.setTransform(476.7,317);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.102)").ss(2,1,1).p("A+ZgSUAhOAAvAblgAN");
	this.shape_3.setTransform(472.3,293.4);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("A+UAbIgohYMA95AAAIAAB6IjDABUgWpAAAgjlgAjg");
	this.shape_4.setTransform(468.8,276.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(270.6,270.5,397.9,109);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3D3118","#7A5827"],[0,1],114.4,59.7,118.3,-69.2).s().p("A2aDfQlEipjSrRMA9hAAAIAAU3Q9qhf3hleg");
	this.shape.setTransform(-116.3,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-313.3,-62,393.9,133.7);


(lib.shape26 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A6632").s().p("A/NA3QhpghAwhRMBAcAADIAAByMg+EAACg");
	this.shape.setTransform(460.7,264.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#785027").s().p("A2pDkQlFirjTrZMA+DgABIAAVDQ98hd3vlhg");
	this.shape_1.setTransform(469,337.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A46C35").s().p("AoHBpQgeAAAAgeIAAiVQAAgeAeAAIQPAAQAeAAAAAeIAACVQAAAegeAAg");
	this.shape_2.setTransform(531.7,280.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(253.6,258.5,414.1,146.9);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595959").ss(3,1,1).p("EAgGALdQ9qhf3hleQlGirjTrZIhfgFQhpghAwhSMA/8AAC");
	this.shape.setTransform(459.1,331.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(253.6,258.5,410.9,146.7);


(lib.shape24 = function() {
	this.initialize();

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AjMEbQBEgTAjhEIEyAAIgLBXgAA8jDQAIgaAAgXQABgYgGgOIB+AAIAQBXg");
	this.shape.setTransform(15.9,0);

	// Layer 12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7C7C7C").ss(1,1,1).p("AFrgqIrVAAIAPBVIK8AAg");
	this.shape_1.setTransform(0,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939393").s().p("AlbArIgPhVILVAAIgKBVg");
	this.shape_2.setTransform(0,23.9);

	// Layer 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.102)").s().p("AkzAuIgjhYIKtgDIghBbg");
	this.shape_3.setTransform(0,26.9);

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7C7C7C").ss(1,1,1).p("AFcgqIq8AAIgKBVILVAAg");
	this.shape_4.setTransform(0,-24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939393").s().p("AlqArIAKhVIK8AAIAPBVg");
	this.shape_5.setTransform(0,-24);

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.102)").s().p("AlbAvIAKhdIKlACIAIBbg");
	this.shape_6.setTransform(0,-21.4);

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.102)").s().p("AkyGHQgUg2gPg2QgHgYBsANQBtANCGiEQCIiFAWijQAXimg3hRICKAAQCVGCiVGLg");
	this.shape_7.setTransform(1.8,-0.8);

	// Layer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgWmFQBcGFhcGG");
	this.shape_8.setTransform(25.7,-0.9);

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AgMmDQAzGDgzGE");
	this.shape_9.setTransform(13.6,-0.3);

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAXmFQhcGFBcGG");
	this.shape_10.setTransform(-25.8,-0.4);

	// Layer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AANmAQgzGAAxGB");
	this.shape_11.setTransform(-13.7,-0.2);

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.102)").ss(1.5,1,1).p("AAAmFIAAML");
	this.shape_12.setTransform(0.1,-0.9);

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#7F4714").ss(1,1,1).p("AkgmGQiOGUCOF5II9AAQCVmKiVmDg");
	this.shape_13.setTransform(0,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#845322").s().p("AkgGHQiOl5COmUII9AAQCVGDiVGKg");
	this.shape_14.setTransform(0,-0.8);

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#515151").ss(4,1,1).p("AEdmGIo9AAQgUA6gPA5IgdAAIgKBYIASAAIgDAeIABAAQgcC2AhCyIgVAAIAPBYIAaAAIABABIATA+IANAlII9AAIAXhEIACAAIAMggIAfAAIAKhYIgYAAQAki2gbiyIAAAAIgCgeIARAAIgPhYIgZAAQgQg5gWg6g");
	this.shape_15.setTransform(0,-0.8);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.3,-39.9,72.8,78.5);


(lib.shape22 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACACAC").s().p("Ag2G8IAAt4IBcAAIARAAIAAN4g");
	this.shape.setTransform(546.4,251.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9B9B9").s().p("ABTG8IAAt4IBAAAIAsAAQAhABAAAeIAAM7QAAAeghAAgAjfG8IAAt4IALAAIC0AAIAHAAIAAN4g");
	this.shape_1.setTransform(543.5,251.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhEG8QgiAAAAgeIAAs7QAAgeAigBIAsAAIB/AAIAAN4g");
	this.shape_2.setTransform(510.7,251.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A46C35").s().p("AA7LhIh+AAQgDgKAAgQIAA11QAAgzAaAAIBzAAIAAXCg");
	this.shape_3.setTransform(515,133.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#815529").s().p("AgqLhIgGAAIAA3CIBiAAIAAXCg");
	this.shape_4.setTransform(545.2,133.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#946230").s().p("ABzLhIgRAAIAA3CIA6AAQAZAAAAAzIAAV1IgDAagAi0LhIAA3CIC0AAIAAXCg");
	this.shape_5.setTransform(540.3,133.6);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#595959").ss(3,1,1).p("Aj7xrIAAV1QAAAQACALIgsAAQghAAAAAeIAAM9QAAAeAhAAIJLAAQAhAAAAgeIAAs9QAAgeghAAIgsAAIACgbIAA11QAAgzgZAAInFAAQgZAAAAAzg");
	this.shape_6.setTransform(533.2,178.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(500.4,59.8,65.5,236.6);


(lib.shape21 = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.102)").s().p("AsUANIgHgIIgCgFIACgHQADgGAFABIYpAAQAHAAABAMQAAAHgIAGg");
	this.shape.setTransform(0.1,1.7);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgFghQASAhgKAi");
	this.shape_1.setTransform(61.9,-0.3);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgHgfQAZAfgPAg");
	this.shape_2.setTransform(37.1,-0.3);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AACgdQAPAdgXAe");
	this.shape_3.setTransform(11.3,-0.3);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAMgdQAEAfgbAc");
	this.shape_4.setTransform(-12.3,-0.1);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AARgbQgGAbgbAc");
	this.shape_5.setTransform(-41.9,-0.2);

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAMgbQgCAdgVAa");
	this.shape_6.setTransform(-68.9,-0.4);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#996633").ss(1,1,1).p("AMJgiI4RAAQgNAAgJAJQgIAJAAAMIAAAIQAAANAIAIQAJAKANAAIYRAAQANAAAIgKQAJgIAAgNIAAgIQAAgMgJgJQgIgJgNAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBB614").s().p("AsIAjQgNgBgJgIQgIgJAAgNIAAgIQAAgMAIgJQAJgIANgBIYRAAQANABAIAIQAJAJAAAMIAAAIQAAANgJAJQgIAIgNABg");

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,-3.8,161.6,7.3);


(lib.shape19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595959").ss(3,1,1).p("AHzAwIhMAAIAHgCIAFgFQAEgHAAgLIAAgIQAAgKgEgFQgFgHgHAAIgaAAIADgEQAEgHAAgKIAAgIQAAgLgEgHQgFgHgGAAIgwAAIABgKIAAgIQAAgLgEgHQgEgHgFAAIq6AAQgFAAgEAHQgEAHAAALIAAAIIABAKIg1AAQgGAAgFAHQgEAHAAALIAAAIQAAAKAEAHIAEAFQgEABgDAFQgFAFAAAKIAAAIQAAALAFAHIAEAEIAAABIAAAAIAHACIg9AAQgHAAgGAHQgGAHAAAKIAAAIQAAALAGAHIAEADIABACIABAAIAHACIPlAAQAIAAAGgHQAFgHAAgLIAAgIQAAgKgFgHQgGgHgIAAg");
	this.shape.setTransform(359.2,249);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(307.3,238.5,103.7,21.1);


(lib.shape18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#015C98","#84CEFF"],[0,1],-2.7,-354,-9.1,826.7).s().p("EgzJBG9MAAAiN5MBmTAAAMAAACN5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.4,-454,655,908.2);


(lib.shape16 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.102)").s().p("AZbLHQgagPgXgPQhtBCiWAAQiiAAhxhNQhzhOAAhuQAAgkANghQAZBBBNA0QBxBNCiAAQCWAABthCQAXAPAaAPQCeBWDgAAQDfAACfhWQAugaAggcQB3BGClAAQCpAAB2hIQBMgtAbg6QAPAhAAAlQAABmh2BHQh2BIipAAQilAAh3hGQggAcguAaQifBWjfAAQjgAAiehWgEBA4ACrQg2gYgmgaIgSALQhWA3h7AAQh6AAhXg3QhXg2AAhOQAAgkAUggQAWAiAtAcQBXA1B6AAQB7AABWg1IASgLQAmAYA2AYQC9BUEJAAQEJAAC8hUQBWgkAvgtIALAHQBzA8CiAAQChAAByg8QBCgkAdgtQATAgAAAmQAABWhyA/QhyA+ihAAQiiAAhzg+IgLgHQgvAthWAmQi8BUkJAAQkJAAi9hUgApbAtIgmgdQg4AVhDAAQhzAAhQg5QhRg6AAhTQAAgmARggQAUAnAsAgQBQA7BzAAQBDAAA4gVIAmAdQCIBcDAAAQCNAABugxQBaAnB6AAQCNAABkg0QAwgYAZgdQAbAgAAAmQAABGhkAzQhkA0iNAAQh6AAhagnQhuAxiNAAQjAAAiIhcgEhKWgBwQi2BCj2AAQkbAAjIhXQjHhXAAh7QAAglARghQApBPCNA9QDIBXEbAAQD2AAC2hCQDeBUEaAAQGCAAESidQApgYAigZQBxAjCHAAQDkAACihjQB4hKAfhhQALAhAAAlQAACNiiBkQiiBjjkAAQiHAAhxgjQgiAZgpAYQkSCdmCAAQkaAAjehUgEA75gFGIAEgIIAEAIgEhUZgMcIAGAcIgLACg");
	this.shape.setTransform(0,20.4);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("AnOH4Qi2BBj3ABQkbgBjIhXQjHhXAAh7QAAh8DHhXQB7g1CYgTQgNgvAAgzQAAjFDCiMQDCiMESAAQDsAACxBoIBNgBQGBAAESCcQBHApA1AuQBcgWBsgBQDkAAChBkQCiBkAACLQAACNiiBkQihBkjkAAQiIAAhxgkQghAZgqAYQkSCdmBAAQkYAAjehTg");
	this.shape_1.setTransform(-429.5,-41.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.149)").s().p("AlbD9IgmgdQg4AVhDAAQhzgBhQg6QhRg7AAhSQAAhSBRg6QBQg7BzAAQA1AAAuAOQAagbAkgZQCIhcDAABIAmAAQBYg9B2AAQCIAABgBSQBiBTgBBzQAAAfgGAcQBMAJA9AgQBkAzAABIQAABJhkAzQhkAziNABQh6gBhcgnQhuAyiLAAQjAgBiIhbg");
	this.shape_2.setTransform(-25.5,-0.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.149)").s().p("AmfFmQgbgPgWgPQhtBCiWAAQiiABhyhOQhyhOAAhtQAAhuByhLQA7gpBHgTQgEgOAAgPQAAhGBfgyQBfgxCHgBQB9AABcAsQAkgsA9gmQCVhcDRABQDUgBCVBcQCVBdAACDIgBASIBMgDQCoAAB3BHQB2BGAABmQAABlh2BHQh3BIioABQimgBh2hGQggAcgvAaQieBWjdABQjggBiehWg");
	this.shape_3.setTransform(204.4,55.7);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.149)").s().p("AolFXQg2gYgmgaIgSALQhXA3h6AAQh7AAhXg3QhXg2AAhOQAAhOBXg3QBXg1B7AAIAHAAQgTglAAgpQAAh1CThSQCUhSDQAAQDJAACRBNQAcgVAigTQCqhaDxAAQDxAACqBaQCqBaAACAQAAAigMAfIAoAUQBzA8AABZQAABYhzA/QhyA+ihAAQiiAAhyg+IgMgHQgvAthVAmQi8BUkIAAQkJAAi8hUg");
	this.shape_4.setTransform(470.4,3.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-586.9,-100,1174,200.3);


(lib.shape14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#77C9FF","#E6F8FF"],[0,1],-2.6,-123.4,-8.9,288.6).s().p("EgySAYwMAAAgxfMBklAAAMAAAAxfg");
	this.shape.setTransform(322,159.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.8,644,317);


(lib.shape11 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],-2.3,3.9,2.4,-4.1).ss(1,1,1).p("AAagjQALANAAAUQAAASgLAPQgLAPgTABQgVAAAEgNQADgNgNgGQgNgGAQgYQAPgbANgDQAPgDALANg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC904").s().p("AgVAiQADgNgNgGQgNgGAQgYQAPgbANgDQAPgDALANQALANAAAUQAAASgLAPQgLAPgTABQgVAAAEgNg");

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.7,6.3,4.9,-6.2).ss(1,1,1).p("AAAhJQAeAAAWAVQAWAXAAAdQAAAfgWAVQgWAWgeAAQgdAAgWgWQgWgVAAgfQAAgdAWgXQAWgVAdAAg");
	this.shape_2.setTransform(0,0.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B89403").ss(1,1,1).p("AA7g7QAZAaAAAhQAAAigZAZQgYAZgjAAQghAAgagZQgYgZAAgiQAAghAYgaQAagYAhAAQAjAAAYAYg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD73E").s().p("Ag7A7QgYgZAAgiQAAghAYgaQAagYAhAAQAjAAAYAYQAZAaAAAhQAAAigZAZQgYAZgjAAQghAAgagZg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.9,17);


(lib.shape9 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.251)").s().p("AgSgFIABgKQAigBACAdIgFADQgJgWgXABg");
	this.shape.setTransform(1.6,-1.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAUgPAPQgOAPgVAAQgTAAgPgPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.shape7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite89 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape90("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite83 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape84("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite80 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape81("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	this.frame_1 = function() {
		playSound("sound82");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
    // this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    this.parent.parent.GameWon = true;
    this.parent.parent.camera.removeAllEventListeners();  
   } // end if	
	}
	this.frame_8 = function() {
		playSound("sound86");
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
            delete evt.currentTarget;
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
	this.instance = new lib.sprite80();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite83();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape85("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
   this.score = function ()
   {
     this.gotoAndStop(this.currentFrame + 1);
     this["star" + this.currentFrame].gotoAndPlay("point");
   } // End of the function
   this.lose = function()
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
	this.star3 = new lib.sprite79();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(4));

	// Layer 2
	this.star2 = new lib.sprite79();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(4));

	// Layer 1
	this.star1 = new lib.sprite79();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(4));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(3).call(this.frame4))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,109.5,30.1);


(lib.sprite70 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape71("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.4,4.4,4.9);


(lib.sprite68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 3
	this.instance = new lib.shape72("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(6));

	// Layer 2
	this.pupil = new lib.sprite70();
	this.pupil.setTransform(18,-3.5,1.822,1.822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pupil}]}).wait(7));

	// Layer 1
	this.instance_1 = new lib.shape69("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(7));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-26.1,55.1,52.3);


(lib.sprite66 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape67("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-48.5,62.2,97.2);


(lib.sprite61 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape62("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-20.3,40.8,40.8);

(lib.sprite61_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape62("synched",0);
  this.instance.setTransform(0, 0, 0.404*9.119, 0.405*2.152);
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.3,-20.3,40.8,40.8);



(lib.sprite58 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape59("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-5.8,33.6,29.1);


(lib.sprite56 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape57("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-3,33.9,36.5);


(lib.sprite48 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape49("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-16,34,22.8);


(lib.sprite43 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape44("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.sprite36 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape37("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.3,-24.7,67.6,51.3);


(lib.sprite33 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape34("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.2,-60.9,120.5,121.8);


(lib.sprite32 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sprite33();
	this.instance.setTransform(0.1,-0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.1,-61.4,120.5,121.8);


(lib.sprite30 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape31("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.1,-7.2,158.5,14.6);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-313.3,-62,393.9,133.7);


(lib.sprite20 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape21("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,-3.8,161.6,7.3);


(lib.sprite17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape18("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.4,-454,655,908.2);


(lib.sprite15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape16("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-586.9,-100,1174,200.3);


(lib.sprite10Coin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.4,16.9,17);


(lib.sprite8Bubble = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape9("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,10,10);


(lib.sprite6Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape7("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 3
	this.instance = new lib.shape76("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(6));

	// Layer 2
	this.pupil = new lib.sprite70();
	this.pupil.setTransform(18,-3.5,2.25,2.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pupil}]}).wait(7));

	// Layer 1
	this.instance_1 = new lib.shape75("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(7));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-30.5,69.5,61.1);


(lib.sprite65 = function() {
	this.initialize();

	// Layer 5
	this.hit = new lib.sprite61_1();
	this.hit.setTransform(-54.3,-10); //,9.119,2.152
	this.hit.alpha = 0.01;

	// Layer 4
	this.eyeR = new lib.sprite74();
	this.eyeR.setTransform(-99.9,-44.1,1,1,0,0,180);

	// Layer 3
	this.instance = new lib.shape73("synched",0);

	// Layer 2
	this.eyeL = new lib.sprite68();
	this.eyeL.setTransform(-146.4,-48.8,1,1,0,0,180);

	// Layer 1
	this.fin = new lib.sprite66();
	this.fin.setTransform(128.2,-1.1);

	this.addChild(this.fin,this.eyeL,this.instance,this.eyeR,this.hit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-268.4,-98.9,455.3,158.4);


(lib.sprite52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 17
	this.instance = new lib.shape54("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).wait(1));

	// Layer 16
	this.instance_1 = new lib.sprite10Coin();
	this.instance_1.setTransform(-0.7,19.1,0.305,0.499,47.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer 15
	this.instance_2 = new lib.sprite10Coin();
	this.instance_2.setTransform(7.8,19,0.305,0.499,-43.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 14
	this.instance_3 = new lib.sprite10Coin();
	this.instance_3.setTransform(-6.2,33.1,0.305,0.499,-43.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

	// Layer 13
	this.instance_4 = new lib.sprite10Coin();
	this.instance_4.setTransform(-0.6,33.4,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1));

	// Layer 12
	this.instance_5 = new lib.sprite10Coin();
	this.instance_5.setTransform(6.5,32.6,0.305,0.499,47.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1));

	// Layer 11
	this.instance_6 = new lib.sprite10Coin();
	this.instance_6.setTransform(8.3,26.9,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1));

	// Layer 10
	this.instance_7 = new lib.sprite10Coin();
	this.instance_7.setTransform(1.5,29,0.5,0.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.instance_8 = new lib.sprite10Coin();
	this.instance_8.setTransform(-5.2,29.6,0.305,0.499,-43.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(1));

	// Layer 8
	this.instance_9 = new lib.sprite10Coin();
	this.instance_9.setTransform(-8,27,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1));

	// Layer 7
	this.instance_10 = new lib.sprite10Coin();
	this.instance_10.setTransform(-6.1,17,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.instance_11 = new lib.sprite10Coin();
	this.instance_11.setTransform(-9.6,20.8,0.305,0.499,47.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.instance_12 = new lib.sprite10Coin();
	this.instance_12.setTransform(6.6,17.2,0.5,0.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_13 = new lib.sprite10Coin();
	this.instance_13.setTransform(4.8,22.3,0.5,0.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_14 = new lib.shape53("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.sprite10Coin();
	this.instance_15.setTransform(0.2,24.6,0.305,0.499,47.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_16 = new lib.sprite10Coin();
	this.instance_16.setTransform(-5.1,22.6,0.5,0.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(1));
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(2))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-7.5,21.8,41.1);


(lib.sprite50 = function() {
	this.initialize();
  var self = this;
	// Layer 3
	this.instance = new lib.shape55("synched",0);

	// Layer 2
	this.bag = new lib.sprite52();
	this.bag.setTransform(26,-14);

	// Layer 1
	this.instance_1 = new lib.shape51("synched",0);

	this.addChild(this.instance_1,this.bag,this.instance);
	
	this.bag.on("tick", function(){
	 if(self.parent) 
	  self.bag.rotation = -self.parent.rotation
	});
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-21.6,42.3,41.1);


(lib.sprite47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gather:14,"throw":25,attack:35});

	// timeline functions:
	this.frame_0 = function(){this.stop()}
	
	this.frame_2 = function() {
		playSound("sound63");
	}
	this.frame_13 = function(){this.gotoAndStop(0)}
	
	this.frame_14 = function() {
		playSound("sound5coins2");
		playSound("sound63");
	}
	
	this.frame_18 = function(){this.arm1.bag.gotoAndStop(this.arm1.bag.currentFrame + 1)}
	this.frame_24 = function(){this.gotoAndStop(0)}
	this.frame_25 = function() {
		playSound("sound64");
	}
	this.frame_34 = function(){this.gotoAndStop(0)}
	this.frame_35 = function() {
		playSound("sound64");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(11).call(this.frame_13).wait(1).call(this.frame_14).wait(4).call(this.frame_18).wait(6).call(this.frame_24).wait(1).call(this.frame_25).wait(9).call(this.frame_34).wait(1).call(this.frame_35).wait(12));

	// Layer 6
	this.hit = new lib.sprite61();
	this.hit.setTransform(-2,-12.1,0.725,1.92);
	this.hit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit}]}).wait(48));

	// Layer 5
	this.instance = new lib.shape60("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(48));

	// Layer 4
	this.leg1 = new lib.sprite58();
	this.leg1.setTransform(4.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.leg1).wait(1).wait(1).to({scaleX:1.08,scaleY:1,skewX:18.1,skewY:24.8},0).wait(1).to({scaleX:1.14,scaleY:1,skewX:31.1,skewY:42.8},0).to({scaleX:1.17,scaleY:1,skewX:36.4,skewY:49.9},1).wait(1).to({scaleX:1.19,skewX:41.6,skewY:57},0).wait(1).to({scaleX:1.18,scaleY:1,skewX:39.8,skewY:54.6,y:8.5},0).wait(1).to({scaleX:1.16,skewX:35.1,skewY:48.1,y:8.6},0).wait(1).to({scaleX:1.13,skewX:28.3,skewY:38.9},0).to({scaleX:1.09,scaleY:1,skewX:20.7,skewY:28.5},1).wait(1).to({scaleX:1.06,scaleY:1,skewX:13.1,skewY:18,x:4.4},0).wait(1).to({scaleX:1.03,skewX:6.5,skewY:8.8,x:4.5},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:1.8,skewY:2.3},0).wait(1).to({scaleX:1,skewX:0,skewY:0},0).to({scaleX:1.05,scaleY:1,skewX:13.4,skewY:17.8},22).wait(1).to({scaleX:1.06,skewX:14,skewY:18.6},0).wait(1).to({scaleX:1.1,scaleY:1,skewX:25.3,skewY:34.1,x:4.6,y:8.7},0).wait(1).to({scaleX:1.14,scaleY:1,skewX:34.4,skewY:45.9,x:4.5,y:8.6},0).to({scaleX:1.16,skewX:39.5,skewY:52.8},1).wait(1).to({scaleX:1.18,skewX:44.6,skewY:59.7,x:4.6},0).wait(1).to({scaleX:1.19,scaleY:1,skewX:45.9,skewY:61.3,x:4.5},0).wait(1).to({scaleX:1.17,scaleY:1,skewX:42.4,skewY:56.9,y:8.5},0).wait(1).to({scaleX:1.14,skewX:33.9,skewY:45.4,y:8.6},0).wait(1).to({scaleX:1.09,scaleY:1,skewX:22.8,skewY:30.6},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:11.8,skewY:15.8},0).to({scaleX:1.02,skewX:5.9,skewY:7.9},1).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0},0).wait(1));

	// Layer 3
	this.leg2 = new lib.sprite56();
	this.leg2.setTransform(-11.3,6.4);

	this.timeline.addTween(cjs.Tween.get(this.leg2).wait(1).wait(1).to({scaleX:1,scaleY:1,skewX:-10.8,skewY:-7.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-18.6,skewY:-13.8},0).wait(1).to({scaleY:1,skewX:-23.4,skewY:-17.3},0).to({skewX:-23.6,skewY:-17.5},1).wait(1).to({skewX:-23.9,skewY:-17.6},0).wait(1).to({scaleY:1,skewX:-21.1,skewY:-15.6,x:-11.1},0).wait(1).to({scaleX:1,skewX:-16.9,skewY:-12.6,x:-11.2},0).wait(1).to({scaleY:1,skewX:-12.3,skewY:-9.1},0).wait(1).to({scaleY:1,skewX:-7.6,skewY:-5.6,x:-11.1},0).wait(1).to({scaleX:1,skewX:-3.6,skewY:-2.6},0).wait(1).to({scaleY:1,skewX:-0.8,skewY:-0.6},0).wait(1).to({skewX:0,skewY:0,x:-11.2},0).wait(22).wait(1).to({scaleX:1,scaleY:1,skewX:-7.8,skewY:-7.6,x:-11.6,y:6.8},0).to({scaleX:1,scaleY:1,skewX:-13.6,skewY:-13.2},1).wait(1).to({scaleX:1,skewX:-19.4,skewY:-18.9,x:-12.3,y:7.5},0).wait(1).to({scaleY:1,skewX:-23.1,skewY:-22.4,x:-12.5,y:7.7},0).wait(1).to({skewX:-25.4,skewY:-24.6,x:-12.6,y:7.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:-26.1,skewY:-25.3,x:-12.7,y:7.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-24.1,skewY:-23.4,x:-12.5,y:7.8},0).wait(1).to({scaleY:1,skewX:-19.1,skewY:-18.6,x:-12.2,y:7.5},0).to({scaleX:1,scaleY:1,skewX:-7.4,skewY:-7.3},2).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,skewX:0,skewY:0,x:-11.2,y:6.5},0).wait(1).to({rotation:0,y:6.4},0).wait(1));

	// Layer 2
	this.arm1 = new lib.sprite50();
	this.arm1.setTransform(14,-6.1);

	this.timeline.addTween(cjs.Tween.get(this.arm1).to({scaleX:1.02,scaleY:1,skewX:17.7,skewY:20.2},1).wait(1).to({scaleX:1.03,scaleY:1,skewX:35.4,skewY:40.3},0).wait(1).to({scaleX:1.06,skewX:60.7,skewY:69.2,y:-5.9},0).wait(1).to({scaleX:1.08,scaleY:1,skewX:76,skewY:86.5,y:-6},0).to({scaleX:1.08,skewX:76.7,skewY:87.4},1).wait(1).to({scaleX:1.08,skewX:77.5,skewY:88.2},0).wait(1).to({scaleX:1.07,scaleY:1,skewX:68.4,skewY:77.9},0).to({scaleX:1.06,skewX:54.4,skewY:62},1).wait(1).to({scaleX:1.04,skewX:40.4,skewY:46.1,x:14.1},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:25.6,skewY:29.1,x:14,y:-6.1},0).to({scaleX:1.01,skewX:14.4,skewY:16.4},1).wait(1).to({scaleX:1,scaleY:1,skewX:3.3,skewY:3.8,y:-6},0).wait(1).to({scaleX:1,skewX:0,skewY:0},0).to({scaleX:1.02,scaleY:1,skewX:17.7,skewY:20.2},1).wait(1).to({scaleX:1.03,scaleY:1,skewX:35.4,skewY:40.3},0).wait(1).to({scaleX:1.06,skewX:60.7,skewY:69.2,y:-5.9},0).wait(1).to({scaleX:1.08,scaleY:1,skewX:76,skewY:86.5,y:-6},0).wait(1).to({scaleX:1.08,skewX:81,skewY:92.2},0).wait(1).to({scaleX:1.08,skewX:75,skewY:85.5,y:-5.9},0).to({scaleX:1.06,scaleY:1,skewX:57.7,skewY:65.8},1).wait(1).to({scaleX:1.04,skewX:40.4,skewY:46.1,x:14.1,y:-6},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:20.8,skewY:23.8,x:14},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:5.8,skewY:6.8,x:13.9},0).wait(1).to({scaleX:1,skewX:0,skewY:0,x:14},0).to({scaleX:1.02,scaleY:1,skewX:-8.4,skewY:-10.3},1).wait(1).to({scaleX:1.04,scaleY:0.99,skewX:-17.1,skewY:-20.9},0).wait(1).to({scaleX:1.07,scaleY:0.99,skewX:-27.6,skewY:-33.7,x:13.9},0).wait(1).to({scaleX:1.08,skewX:-31,skewY:-38,x:14},0).wait(1).to({scaleX:1.07,scaleY:0.99,skewX:-28.6,skewY:-35.2},0).wait(1).to({scaleX:1.06,scaleY:0.99,skewX:-22.9,skewY:-28.1},0).to({scaleX:1.04,scaleY:0.99,skewX:-15.3,skewY:-18.9},1).wait(1).to({scaleX:1.02,scaleY:1,skewX:-7.8,skewY:-9.6},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-2.1,skewY:-2.6,y:-5.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,y:-6},0).wait(1).wait(1).to({scaleX:1,scaleY:1,rotation:-17.1,y:-7.4},0).to({rotation:-24,y:-7.9},1).wait(1).to({scaleX:1,scaleY:1,rotation:-30.9,y:-8.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.8,y:-7.8},0).to({scaleX:1,scaleY:1,rotation:-11.3,y:-6.9},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:-6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.1,y:-7.4},0).to({rotation:-24,y:-7.9},1).wait(1).to({scaleX:1,scaleY:1,rotation:-30.9,y:-8.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.8,y:-7.8},0).to({scaleX:1,scaleY:1,rotation:-11.3,y:-6.9},1).wait(1).to({scaleX:1,scaleY:1,rotation:0,y:-6},0).wait(1));

	// Layer 1
	this.arm2 = new lib.sprite48();
	this.arm2.setTransform(-11.7,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.arm2).wait(1).wait(1).to({scaleY:1,skewX:-23.9,skewY:-30.1,x:-11.7},0).to({scaleX:1,skewX:-37.8,skewY:-47.6},1).wait(1).to({scaleX:1,scaleY:1,skewX:-51.7,skewY:-65,x:-11.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-55.2,skewY:-69.3},0).to({scaleX:1,skewX:-50.8,skewY:-63.9},1).wait(1).to({scaleX:1,scaleY:1,skewX:-46.5,skewY:-58.5},0).wait(1).to({scaleX:1,skewX:-37.6,skewY:-47.4,x:-11.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:-27.4,skewY:-34.6,x:-11.6,y:-13.5},0).wait(1).to({scaleY:1,skewX:-17.3,skewY:-21.6,y:-13.4},0).wait(1).to({skewX:-8.3,skewY:-10.6,y:-13.5},0).wait(1).to({scaleY:1,skewX:-2.1,skewY:-2.6,y:-13.4},0).wait(1).to({skewX:0,skewY:0,y:-13.5},0).wait(22).wait(1).to({scaleX:1,scaleY:1,rotation:22.3,x:-11.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.8,y:-13.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:40.3,x:-11.6},0).to({scaleX:1,scaleY:1,rotation:25.3},1).wait(1).to({rotation:10.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.3,x:-11.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.8,y:-13.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:40.3,x:-11.6},0).to({scaleX:1,scaleY:1,rotation:25.3},1).wait(1).to({rotation:10.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-58.9,89.8,98.7);


(lib.sprite39 = function() {
	this.initialize();

	// Layer 17
	this.instance = new lib.shape41("synched",0);

	// Layer 16
	this.instance_1 = new lib.sprite10Coin();
	this.instance_1.setTransform(21.1,-16.8,1,1,0,0,180);

	// Layer 15
	this.instance_2 = new lib.sprite10Coin();
	this.instance_2.setTransform(-30.6,-21.1);

	// Layer 14
	this.instance_3 = new lib.sprite10Coin();
	this.instance_3.setTransform(-22.8,-28.3);

	// Layer 13
	this.instance_4 = new lib.sprite10Coin();
	this.instance_4.setTransform(26.7,-23.8);

	// Layer 12
	this.instance_5 = new lib.sprite10Coin();
	this.instance_5.setTransform(5.6,-23.1);

	// Layer 11
	this.instance_6 = new lib.sprite10Coin();
	this.instance_6.setTransform(-7.3,-25.8,1,1,0,0,180);

	// Layer 10
	this.instance_7 = new lib.sprite10Coin();
	this.instance_7.setTransform(-41.8,-19.6,1,1,0,0,180);

	// Layer 9
	this.instance_8 = new lib.sprite10Coin();
	this.instance_8.setTransform(-38.6,-17.8);

	// Layer 8
	this.instance_9 = new lib.sprite10Coin();
	this.instance_9.setTransform(-22.1,-18.6);

	// Layer 7
	this.instance_10 = new lib.sprite10Coin();
	this.instance_10.setTransform(-5.3,-16.3);

	// Layer 6
	this.instance_11 = new lib.sprite10Coin();
	this.instance_11.setTransform(46.9,-16.8,1,1,0,0,180);

	// Layer 5
	this.instance_12 = new lib.sprite10Coin();
	this.instance_12.setTransform(24.4,-18.3);

	// Layer 4
	this.instance_13 = new lib.sprite10Coin();
	this.instance_13.setTransform(13.4,-26.8);

	// Layer 3
	this.instance_14 = new lib.sprite10Coin();
	this.instance_14.setTransform(31.7,-19.3);

	// Layer 2
	this.instance_15 = new lib.sprite10Coin();
	this.instance_15.setTransform(39.2,-15.6);

	// Layer 1
	this.instance_16 = new lib.shape40("synched",0);

	this.addChild(this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.2,-77.3,138.6,130);


(lib.sprite23 = function() {
	this.initialize();

	// Layer 7
	this.instance = new lib.shape24("synched",0);

	// Layer 6
	this.instance_1 = new lib.sprite10Coin();
	this.instance_1.setTransform(13.4,-43.6,1,1,0,0,180);

	// Layer 5
	this.instance_2 = new lib.sprite10Coin();
	this.instance_2.setTransform(-7.6,-43.1);

	// Layer 4
	this.instance_3 = new lib.sprite10Coin();
	this.instance_3.setTransform(-0.1,-47.6,1,1,0,0,180);

	// Layer 3
	this.instance_4 = new lib.sprite10Coin();
	this.instance_4.setTransform(6.9,-41.6,1,1,0,0,180);

	// Layer 2
	this.instance_5 = new lib.sprite10Coin();
	this.instance_5.setTransform(-18.6,-40.6,1,1,0,0,180);

	// Layer 1
	this.instance_6 = new lib.sprite10Coin();
	this.instance_6.setTransform(16.4,-43.1);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.3,-56.1,72.8,94.7);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 56
	this.instance = new lib.sprite10Coin();
	this.instance.setTransform(460.4,1078.8,1,0.631);

	// Layer 55
	this.instance_1 = new lib.sprite10Coin();
	this.instance_1.setTransform(467.6,1074.3,1,0.631);

	// Layer 54
	this.instance_2 = new lib.sprite10Coin();
	this.instance_2.setTransform(499.1,1084.6,1,0.631);

	// Layer 53
	this.instance_3 = new lib.sprite10Coin();
	this.instance_3.setTransform(485.1,1081.8,0.999,0.63,0,12.8,-167.1);

	// Layer 52
	this.instance_4 = new lib.sprite10Coin();
	this.instance_4.setTransform(182.4,1091.3,1,0.631);

	// Layer 51
	this.instance_5 = new lib.sprite10Coin();
	this.instance_5.setTransform(190.1,1086.8,1,0.631);

	// Layer 50
	this.instance_6 = new lib.sprite10Coin();
	this.instance_6.setTransform(205.6,1088.3,1,0.631,0,0,180);

	// Layer 49
	this.instance_7 = new lib.sprite10Coin();
	this.instance_7.setTransform(161.1,1087.3,0.999,0.63,0,17.5,-162.4);

	// Layer 48
	this.instance_8 = new lib.sprite10Coin();
	this.instance_8.setTransform(408.1,1079.5,0.999,0.63,0,-13.5,166.4);

	// Layer 47
	this.instance_9 = new lib.sprite10Coin();
	this.instance_9.setTransform(356.4,1088.3,1,0.631);

	// Layer 46
	this.instance_10 = new lib.sprite10Coin();
	this.instance_10.setTransform(364.1,1082.5,1,0.778);

	// Layer 45
	this.instance_11 = new lib.sprite10Coin();
	this.instance_11.setTransform(413.7,1075.1,1,0.631);

	// Layer 44
	this.instance_12 = new lib.sprite10Coin();
	this.instance_12.setTransform(391.6,1087.1,1,0.631);

	// Layer 43
	this.instance_13 = new lib.sprite10Coin();
	this.instance_13.setTransform(378.1,1084.8,1,0.631,0,0,180);

	// Layer 42
	this.instance_14 = new lib.sprite10Coin();
	this.instance_14.setTransform(345.1,1089.3,1,0.631,0,0,180);

	// Layer 41
	this.instance_15 = new lib.sprite10Coin();
	this.instance_15.setTransform(433.9,1079.5,1,0.631,0,0,180);

	// Layer 40
	this.instance_16 = new lib.sprite10Coin();
	this.instance_16.setTransform(290.6,1087,1,0.631,0,0,180);

	// Layer 39
	this.instance_17 = new lib.sprite10Coin();
	this.instance_17.setTransform(238.9,1085.3,1,0.631);

	// Layer 38
	this.instance_18 = new lib.sprite10Coin();
	this.instance_18.setTransform(246.6,1079.8,1,0.631);

	// Layer 37
	this.instance_19 = new lib.sprite10Coin();
	this.instance_19.setTransform(296.2,1082.6,1,0.631);

	// Layer 36
	this.instance_20 = new lib.sprite10Coin();
	this.instance_20.setTransform(275.1,1083.1,1,0.631);

	// Layer 35
	this.instance_21 = new lib.sprite10Coin();
	this.instance_21.setTransform(261.6,1083.3,1,0.631,0,0,180);

	// Layer 34
	this.instance_22 = new lib.sprite10Coin();
	this.instance_22.setTransform(226.1,1085.3,0.999,0.63,0,-15.4,164.5);

	// Layer 33
	this.instance_23 = new lib.sprite10Coin();
	this.instance_23.setTransform(316.4,1084.5,1,0.804,0,0,180);

	// Layer 32
	this.instance_24 = new lib.sprite10Coin();
	this.instance_24.setTransform(282.9,1078.7,1,0.631);

	// Layer 31
	this.instance_25 = new lib.shape42("synched",0);

	// Layer 30
	this.instance_26 = new lib.sprite39();
	this.instance_26.setTransform(329.6,1045.9);

	// Layer 29
	this.instance_27 = new lib.sprite10Coin();
	this.instance_27.setTransform(262.1,1076.8,1,0.631,0,0,180);

	// Layer 28
	this.instance_28 = new lib.sprite10Coin();
	this.instance_28.setTransform(400.4,1073.2,1,0.631);

	// Layer 27
	this.instance_29 = new lib.shape38("synched",0);

	// Layer 26
	this.instance_30 = new lib.sprite36();
	this.instance_30.setTransform(148.2,925,1,1,60);

	// Layer 25
	this.instance_31 = new lib.sprite36();
	this.instance_31.setTransform(463.2,1058.4,1,1,0,15,-164.9);

	// Layer 24
	this.instance_32 = new lib.sprite36();
	this.instance_32.setTransform(504.1,608.9,1,1,-104.9);

	// Layer 23
	this.instance_33 = new lib.sprite36();
	this.instance_33.setTransform(126.1,579.2,1,1,75);

	// Layer 22
	this.instance_34 = new lib.sprite32();
	this.instance_34.setTransform(193.1,1070.4,0.505,0.505,0,0,-179.9);

	// Layer 21
	this.instance_35 = new lib.sprite32();
	this.instance_35.setTransform(497.5,861.1,0.505,0.505,0,-119.9,60);

	// Layer 20
	this.instance_36 = new lib.shape35("synched",0);

	// Layer 19
	this.instance_37 = new lib.sprite32();
	this.instance_37.setTransform(131.4,818.1,0.505,0.505,75);

	// Layer 18
	this.instance_38 = new lib.sprite32();
	this.instance_38.setTransform(563.5,485.9,0.505,0.505,-44.9);

	// Layer 17
	this.instance_39 = new lib.sprite32();
	this.instance_39.setTransform(110.4,511.9,0.505,0.505,60);

	// Layer 16
	this.instance_40 = new lib.sprite30();
	this.instance_40.setTransform(390.2,296.1,1.109,1.109);

	// Layer 15
	this.instance_41 = new lib.shape29("synched",0);

	// Layer 14
	this.instance_42 = new lib.sprite27();
	this.instance_42.setTransform(584,333.6);
	this.instance_42.alpha = 0.801;

	// Layer 13
	this.instance_43 = new lib.shape26("synched",0);

	// Layer 12
	this.instance_44 = new lib.sprite20();
	this.instance_44.setTransform(382,262.6,0.82,0.82,0,0,180);

	// Layer 11
	this.instance_45 = new lib.shape25("synched",0);

	// Layer 10
	this.instance_46 = new lib.sprite23();
	this.instance_46.setTransform(497.1,233.5);

	// Layer 9
	this.instance_47 = new lib.sprite20();
	this.instance_47.setTransform(359.2,256.8,0.642,0.82,0,0,180);

	// Layer 8
	this.instance_48 = new lib.shape22("synched",0);

	// Layer 7
	this.instance_49 = new lib.sprite20();
	this.instance_49.setTransform(358.4,251.1,0.554,0.82,0,0,180);

	// Layer 6
	this.instance_50 = new lib.sprite20();
	this.instance_50.setTransform(356.9,245.8,0.53,0.82);

	// Layer 5
	this.instance_51 = new lib.sprite20();
	this.instance_51.setTransform(357.1,241.5,0.449,0.82);

	// Layer 4
	this.instance_52 = new lib.shape19("synched",0);

	// Layer 3
	this.instance_53 = new lib.sprite17();
	this.instance_53.setTransform(327.5,771.3,1,1,180);

	// Layer 2
	this.instance_54 = new lib.sprite15();
	this.instance_54.setTransform(287.2,215.7,0.5,0.5,0,0,180);

	// Layer 1
	this.instance_55 = new lib.shape14("synched",0);

	this.addChild(this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,0.8,686.6,1263.4);


(lib.sprite12 = function() {
	this.initialize();

	// Layer 13
	this.instance = new lib.shape77("synched",0);

	// Layer 12
	this.instance_1 = new lib.sprite17();
	this.instance_1.setTransform(255.5,453.1,1,1,180);
	this.instance_1.alpha = 0.199;

	// Layer 11
	this.shark = new lib.sprite65();
	this.shark.setTransform(616.7,431.9,0.405,0.405);

  // Layer 10
  this.pt5 = new lib.sprite45();
  this.pt5.setTransform(221.05, -61.00); 

	// Layer 9
	this._char = new lib.sprite47();
	this._char.setTransform(250,70,0.999,1.001);
  
  // Layer 8
  this.hose = new cjs.Shape();
  
  //Layer 7
  this.pt0 = new lib.sprite45();
  this.pt0.setTransform(250.05, 124.75);  
	
  //Layer 6
  this.pt4 = new lib.sprite45();
  this.pt4.setTransform(250.05, -11.05);   
 
 
  //Layer 5
  this.pt3 = new lib.sprite45();
  this.pt3.setTransform(250.05, 22.90);  

  //Layer 4
  this.pt2 = new lib.sprite45();
  this.pt2.setTransform(250.05, 56.85);
  //Layer 3
  this.pt1 = new lib.sprite45();
  this.pt1.setTransform(250.05, 90.80);
   
	// Layer 2
	this.bg = new lib.sprite43();
	this.bg.setTransform(-77.9,-317.9);

	// Layer 1
	this.bgVector = new lib.sprite13();
	this.bgVector.setTransform(-77.9,-317.9);
  
	this.addChild(this.bgVector,this.bg, this.pt1, this.pt2, this.pt3, this.pt4, this.pt0, this.hose, this._char, this.pt5, this.shark,this.instance_1,this.instance);
  var self = this;
  function bubbles(posX, posY)
  {
    ++bubbleCount;
    self["bubble" + bubbleCount] = new lib.sprite8Bubble();  // attachMovie("Bubble", "bubble" + bubbleCount, bubbleCount);
    self.addChild(self["bubble" + bubbleCount]);
    self["bubble" + bubbleCount].x = posX;
    self["bubble" + bubbleCount].y = posY;
    self["bubble" + bubbleCount].scaleX = self["bubble" + bubbleCount].scaleY = Math.random() + 0.5;
    self["bubble" + bubbleCount].velX = (self["bubble" + bubbleCount].x - self._char.x) / 6;
    self["bubble" + bubbleCount].velY = 0;
    self["bubble" + bubbleCount].on("tick", function (evt)
    {
        evt.currentTarget.velY = evt.currentTarget.velY - gravity * 0.5 / evt.currentTarget.scaleX;
        evt.currentTarget.velX = evt.currentTarget.velX * friction;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        if (evt.currentTarget.y < self._char.y - 240 || evt.currentTarget.y < 0)
        {
            self.removeChild(evt.currentTarget);
            evt.remove();
            delete evt.currentTarget; 
        } // end if
    });
  } // End of the function
  function coins()
  {
    ++coinCount;
    self["coin" + coinCount] = new lib.sprite10Coin();  //attachMovie("Coin", "coin" + coinCount, coinCount);
    self.addChild(self["coin" + coinCount]);
    self["coin" + coinCount].x = self._char.x + 30;
    self["coin" + coinCount].y = self._char.y - 10;
    self["coin" + coinCount].velX = Math.random() * 8 + 2 + (500 - self["coin" + coinCount].x) / 25;
    self["coin" + coinCount].velY = -Math.random() * 10 - 15;
    self["coin" + coinCount].on("tick",  function (evt)
    {
        evt.currentTarget.velY = evt.currentTarget.velY + gravity * 6;
        evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
        evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
        if (evt.currentTarget.x > 500)
        {
            self.removeChild(evt.currentTarget);
            evt.remove();
            delete evt.currentTarget;
        } // end if
    });
  } // End of the function
  function follow(clip, target)
  {
    clip.vx = 0;
    clip.vy = 0;
    clip.delX = clip.x - target.x;
    clip.delY = clip.y - target.y;
    clip.on("tick", function ()
    {
        clip.ax = (target.x + clip.delX - clip.x) * k;
        clip.vx = clip.vx + clip.ax;
        clip.vx = clip.vx * damp;
        clip.x = clip.x + clip.vx;
        clip.y = target.y + clip.delY;
        if (clip.y < 0)
        {
            clip.y = 0;
        } // end if
    });
  } // End of the function
  var velX = 0;
  var velY = 0;
  var gravity = 2.000000E-001;
  var friction = 9.500000E-001;
  var bubbleCount = 0;
  var coinCount = 500000;
  var k = 5.000000E-001;
  var damp = 1.000000E-001;
  var ground = 760;
  var scoring = false;
  var sharkSpeed = -5;
  var time = 0;
  var score = 0;
  var hitting = false;

  var sndBubbles = playSound("sound1bubbleswav"); sndBubbles.stop();
  var sndBubble1 = playSound("sound4bubble1wav"); sndBubble1.stop();
  var sndBubble2 = playSound("sound3bubble2wav"); sndBubble2.stop();
  var sndBubble3 = playSound("sound2bubble3wav"); sndBubble3.stop();
  
  this.init = function()
  {
    velX = 0;
    velY = 0;
    gravity = 2.000000E-001;
    friction = 9.500000E-001;
    bubbleCount = 0;
    coinCount = 500000;
    k = 5.000000E-001;
    damp = 1.000000E-001;
    ground = 760;
    scoring = false;
    sharkSpeed = -5;
    time = 0;
    score = 0;
    hitting = false;
    follow(this.pt1, this.pt0);
    follow(this.pt2, this.pt1);
    follow(this.pt3, this.pt2);
    follow(this.pt4, this.pt3);  
  
  }
  this.init();
  //var bgBitmap = new flash.display.BitmapData(644, 1226, false, 4.294967E+009);
  //bg.attachBitmap(bgBitmap, bg.getNextHighestDepth());
  //bgBitmap.draw(bgVector);
  //this.bgVector.visible = false;
  
  this.on("mousedown", function ()
  {
    if (self._char.currentFrame == 0)
    {
        self._char.gotoAndPlay(1);
        if (self._char.y > 50)
        {
            velY = velY - 8;
        } // end if
        if (velY < -8)
        {
            velY = -8;
        } // end if
        for (var i = 1; i <= Math.random() * 3 + 3; i++)
        {
            bubbles(self._char.x + Math.random() * 60 - 30, self._char.y + Math.random() * 60 - 30);
        } // end of for
    } // end if
  });
  this.on("tick",  function ()
  {
    if (Math.random() * 8 < 1)
    {
        bubbles(self._char.x + Math.random() * 8 - 4, self._char.y - 50);
        var bubbleRand = Math.floor(Math.random() * 5);
        if (bubbleRand != 1)
        {
            if (bubbleRand != 2)
            {
                if (bubbleRand == 3)
                {
                    sndBubble3.play();
                } // end if
            }
            else
            {
                sndBubble2.play();
            } // end else if
        }
        else
        {
            sndBubble1.play();
        } // end if
    } // end else if
    if (self._char.y + 20 + velY >= ground)
    {
        if (!scoring)
        {
            scoring = true;
            self._char.gotoAndPlay("gather");
        } // end if
    }
    else
    {
        velY = velY + gravity;
        velX = (stage.mouseX/ratio - self.x - self._char.x) / 30;
        velX = velX * friction;
        velY = velY * friction;
        self._char.x = self._char.x + velX;
        self._char.y = self._char.y + velY;
    } // end else if
    if (self._char.y < 50 && scoring)
    {
        scoring = false;
        self._char.gotoAndPlay("throw");
        self._char.arm1.bag.gotoAndStop(0);
        self.parent.starPoints.score();
        for (var i = 1; i <= 10; i++)
        {
            coins();
        } // end of for
    } // end if
    self.y = self.y + (-self._char.y + 336 / 2 - self.y) / 8;
    self.pt0.x = self._char.x;
    self.pt0.y = self._char.y - 50;
    
    
    self.hose.graphics.clear();
    self.hose.graphics.beginStroke("rgb(76, 76, 76)").setStrokeStyle(8); 
    self.hose.graphics.moveTo(self.pt0.x, self.pt0.y);
    for (var i = 1; i <= 4; i++)
    {
        var curPt = self["pt" + i];
        var nextPt = self["pt" + (i + 1)];
        var midX = (curPt.x + nextPt.x) / 2;
        var midY = (curPt.y + nextPt.y) / 2;
        self.hose.graphics.curveTo(curPt.x, curPt.y, midX, midY);
    } // end of for
    self.hose.graphics.lineTo(self.pt5.x, self.pt5.y);
    self.hose.graphics.beginStroke("rgb(119, 119, 119)").setStrokeStyle(6);          
    self.hose.graphics.moveTo(self.pt0.x, self.pt0.y);
    for (var i = 1; i <= 4; i++)
    {
        var curPt = self["pt" + i];
        var nextPt = self["pt" + (i + 1)];
        var midX = (curPt.x + nextPt.x) / 2;
        var midY = (curPt.y + nextPt.y) / 2;
        self.hose.graphics.curveTo(curPt.x, curPt.y, midX, midY);
    } // end of for
    self.hose.graphics.lineTo(self.pt5.x, self.pt5.y);
    self.shark.x = self.shark.x + sharkSpeed;
    if (self.shark.x < -150 || self.shark.x > 500 + 150)
    {
        hitting = false;
        sharkSpeed = sharkSpeed * -1;
        self.shark.scaleX = self.shark.scaleX * -1;
        self.shark.y = Math.random() * 600 + 100;
    } // end if
    time = time + 1;
    radians = Math.sin(time);
    self.shark.rotation = radians * 180 / 3.141593E+000 / 60;
    self.shark.fin.rotation = self.shark.rotation * 5;
    if ((self.shark.hit.hitTest(self._char.x + self._char.hit.x - 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y - 39.12 - self.shark.y - self.shark.hit.y) ||  
         self.shark.hit.hitTest(self._char.x + self._char.hit.x + 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y - 39.12 - self.shark.y - self.shark.hit.y) ||                
         self.shark.hit.hitTest(self._char.x + self._char.hit.x - 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y - self.shark.y - self.shark.hit.y) ||
         self.shark.hit.hitTest(self._char.x + self._char.hit.x - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y - self.shark.y - self.shark.hit.y) ||
         self.shark.hit.hitTest(self._char.x + self._char.hit.x + 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y - self.shark.y - self.shark.hit.y) ||
         self.shark.hit.hitTest(self._char.x + self._char.hit.x - 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y + 39.12 - self.shark.y - self.shark.hit.y) ||
         self.shark.hit.hitTest(self._char.x + self._char.hit.x + 14.77 - self.shark.x - self.shark.hit.x, self._char.y + self._char.hit.y + 39.12 - self.shark.y - self.shark.hit.y) 
    
        ) && !hitting)
    {
        hitting = true;
        if (scoring)
        {
            for (var i = 1; i <= 10; i++)
            {
                coins();
            } // end of for
        } // end if
        scoring = false;
        self._char.gotoAndPlay("attack");
        self._char.arm1.bag.gotoAndStop(0);
        self.parent.starPoints.lose();
    } // end if
  });	
	
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-317.9,788.4,1264.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;