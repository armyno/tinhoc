(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.ShapeInvasion = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
  var self = this;
  this.frame1 = function(){
   //loadMovie("/flash/GameController.swf", "GameEndClip");
   this.GameWon = false;  
   this.shape1.body.on("tick", function(evt){self.shape1.body.gotoAndStop(0); evt.remove()}); 
   this.shape2.body.on("tick", function(evt){self.shape2.body.gotoAndStop(1); evt.remove()}); 
   this.shape3.body.on("tick", function(evt){self.shape3.body.gotoAndStop(2); evt.remove()}); 
   this.shape4.body.on("tick", function(evt){self.shape4.body.gotoAndStop(3); evt.remove()}); 
   this.shape5.body.on("tick", function(evt){self.shape5.body.gotoAndStop(4); evt.remove()}); 
 
  }
  this.frame2 = function(){
  this.init = function()
  { 
    bombWait = 0;
    this.gameOver = false;
    speed = speed + 5.000000E-002;
    var shapesArray = [1, 2, 3, 4, 5];
    for (var i = 1; i <= 5; i++)
    {
        var curPos = this["pos" + i];
        curPos.correct = false;
        var curShape = this["shape" + i];
        curShape.runAway = (Math.random() * 50 + 50) * (2 * Math.round(Math.random()) - 1);
        curShape.name = String(i);
        if (starting)
        {
            curPos.shape = curShape;
        } // end if
        arrayNum = Math.floor(Math.random() * shapesArray.length);
        curPos.targetNum = shapesArray[arrayNum];
        shapesArray.splice(arrayNum, 1);
        curPos.targ = this["target" + curPos.targetNum];
        curPos.targ.visible = true;
        curPos.targ.x = curPos.x;
        curPos.targ.y = -50;
        curPos.on("tick", function (evt)
        {   
            evt.currentTarget.targ.y = evt.currentTarget.targ.y + speed;
            if (bombWait > 48)
            {
                self.gameOver = true;
                if (speed > 0)
                {
                    sndLaser.play();
                    for (var j = 1; j <= 5; j++)
                    {
                        var curTarget = self["target" + j];
                        explode(curTarget.x, curTarget.y, curTarget.shapeColor);
                        curTarget.visible = false;
                    } // end of for
                    self.play ();
                    speed = 0;
                } // end if
            } // end if
            if (!(evt.currentTarget.targ.y > evt.currentTarget.y - 60 || self.gameOver))
            {
                evt.currentTarget.shape.delX = evt.currentTarget.x - evt.currentTarget.shape.x;
     
            }
            else
            {
                ++bombWait;
                if (!(evt.currentTarget.shape.x > -100 && evt.currentTarget.shape.x < stage.canvas.width + 100))
                {
                    evt.currentTarget.shape.delX = 0;
                }
                else
                {
                    evt.currentTarget.shape.delX = evt.currentTarget.shape.runAway;
                } // end else if
                if (!runningAway)
                {
                    runningAway = true;
                    sndRunaway.play();
                } // end if
            } // end else if
            evt.currentTarget.shape.x += evt.currentTarget.shape.delX / 4;
            evt.currentTarget.shape.body.rotation = -Math.abs(evt.currentTarget.shape.delX) / 2;
            
            if (evt.currentTarget.shape.body.rotation < -45)
            {
                evt.currentTarget.shape.body.rotation = -45;
                
                
            } // end if
            if (Math.abs(evt.currentTarget.x - evt.currentTarget.shape.x) >= 4)
            {
                evt.currentTarget.shape.play();
                
                if (evt.currentTarget.shape.delX >= 0)
                {
                    evt.currentTarget.shape.scaleX = 1;
                    
                }
                else
                {
                    evt.currentTarget.shape.scaleX = -1;
                    
                } // end else if
            }
            else
            {
                evt.currentTarget.shape.gotoAndStop("stand");
                evt.currentTarget.shape.scaleX = 1;
                if (evt.currentTarget.shape.name != String(evt.currentTarget.targetNum))
                {
                    evt.currentTarget.correct = false;
                }
                else
                {
                    evt.currentTarget.correct = true;
                } // end else if
            } // end else if
        });
        curPos.on("click",  function (evt)
        {
       
            var glowbody =  evt.currentTarget.shape.body.glow; 
            glowFilter(glowbody, 0, -256, 0, 2, 2, 12, 12, false, 'outer');
            
            if (firstPos != null)
            {
                sndSwap.play();
                firstPos.shape.body.glow.uncache();
                glowbody.uncache(); 
                var firstShape = firstPos.shape;
                var secondShape = evt.currentTarget.shape;
           
                firstPos.shape = secondShape;
                evt.currentTarget.shape = firstShape;
                   
                
                
                firstPos = null;
             
            }
            else
            {
                sndClick.play();
                firstPos = evt.currentTarget;
            } // end else if
        });
    } // end of for
   } // End of the function
   function explode(posX, posY, pieceColor)
   {
    for (var i = 1; i <= 30; i++)
    {
        ++pieceCount;
        self["piece" + pieceCount] = new lib.sprite7Piece();   //attachMovie("Piece", "piece" + pieceCount, pieceCount);
        self.pieces.addChild(self["piece" + pieceCount]);
        self["piece" + pieceCount].x = posX + Math.random() * 50 - 25;
        self["piece" + pieceCount].y = posY + Math.random() * 50 - 25;
        self["piece" + pieceCount].scaleX = self["piece" + pieceCount].scaleY = (Math.random() * 50 + 30)/100;
        if (self["piece" + pieceCount].scaleX > 0.4)
        {
            //setPieceColor = new Color(piece);
            //setPieceColor.setRGB(pieceColor);
           self["piece" + pieceCount].filters = [new cjs.ColorFilter(0, 0, 0, 1, pieceColor.r, pieceColor.g, pieceColor.b)];
           self["piece" + pieceCount].cache(-3.9,-3.9,8,8); 
            
        } // end if
        self["piece" + pieceCount].velX = Math.random() * 20 - 10;
        self["piece" + pieceCount].velY = Math.random() * 15 - 15;
        self["piece" + pieceCount].on("tick", function (evt)
        {
            evt.currentTarget.velY = evt.currentTarget.velY + gravity;
            evt.currentTarget.x = evt.currentTarget.x + evt.currentTarget.velX;
            evt.currentTarget.y = evt.currentTarget.y + evt.currentTarget.velY;
            if (evt.currentTarget.y > stage.canvas.height)
            {
                self.pieces.removeChild(evt.currentTarget);
                delete evt.currentTarget;
                evt.remove();
            } // end if
        });
    } // end of for
   } // End of the function
   this.stop ();
   //var glow = new flash.filters.GlowFilter(16776960, 1, 12, 12, 2, 2);
   //var whiteGlow = new flash.filters.GlowFilter(16777215, 1, 12, 12, 1, 2);
   var soundSwitcher = true;
   var starting = true;
   var pieceCount = 0;
   var gravity = 2;
   var speed = 5.000000E-001;
   var score = 0;
   //scoreFld.text = score;
   var firstPos = null;
   this.gameOver = false;
   var bombWait = 0;
   var runningAway = false;
   //border.swapDepths(500000);
   var sndLaser = playSound("sound3laserwav");sndLaser.stop();
   var sndRunaway = playSound("sound2runawaywav");sndRunaway.stop();
   var sndClick = playSound("sound4clickwav");sndClick.stop();
   var sndSwap = playSound("sound1swapwav");sndSwap.stop();

   this.on("tick", function (evt)
   {
    if (self.pos1.correct && self.pos2.correct && self.pos3.correct && self.pos4.correct && self.pos5.correct)
    {
        sndLaser.play();
        for (var j = 1; j <= 5; j++)
        {
            explode(self["target" + j].x, self["target" + j].y, self["target" + j].shapeColor);
            self["pos" + j].play();
            var glowbody =  self["shape" + j].body.glow; 
            glowFilter(glowbody, 0, -1, 0, 2, 1, 12, 12, false, 'outer'); 
            self["pos" + j].removeAllEventListeners();     
        } // end of for
        self.starPoints.score();
        starting = false;
        self.init();
    } // end if
   });
   this.init();    
  }
  
  this.frame36 = function(){
   for(var i = 1; i <= 5; i++) this["pos" + i].removeAllEventListeners();
   this.starPoints.lose();
   this.gotoAndStop(1);  
  }
  
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
  
	// Layer 19
	this.border = new lib.sprite76();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.border}]}).wait(36));

	// Layer 18
	this.instance = new lib.shape75("synched",0);
	this.instance.setTransform(445.4,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(36));

	// Layer 17
	this.starPoints = new lib.sprite65();
	this.starPoints.setTransform(28.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.starPoints}]}).wait(36));

  this.pieces = new cjs.Container(); 
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pieces}]}).wait(36));

	// Layer 16
	this.shape5 = new lib.sprite24();
	this.shape5.setTransform(413.1,288.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape5}]}).wait(36));

	// Layer 15
	this.shape4 = new lib.sprite24();
	this.shape4.setTransform(333.1,288.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape4}]}).wait(36));

	// Layer 14
	this.shape3 = new lib.sprite24();
	this.shape3.setTransform(252.5,288.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape3}]}).wait(36));

	// Layer 13
	this.shape2 = new lib.sprite24();
	this.shape2.setTransform(171.8,288.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape2}]}).wait(36));


	// Layer 12
	this.shape1 = new lib.sprite24();
	this.shape1.setTransform(93.2,288.3);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape1}]}).wait(36));

	// Layer 11
	this.pos1 = new lib.sprite20();
	this.pos1.setTransform(92,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos1}]}).wait(36));

	// Layer 10
	this.pos4 = new lib.sprite20();
	this.pos4.setTransform(332,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos4}]}).wait(36));

	// Layer 9
	this.pos3 = new lib.sprite20();
	this.pos3.setTransform(252,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos3}]}).wait(36));

	// Layer 8
	this.pos2 = new lib.sprite20();
	this.pos2.setTransform(172,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos2}]}).wait(36));

	// Layer 7
	this.pos5 = new lib.sprite20();
	this.pos5.setTransform(412,288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos5}]}).wait(36));

	// Layer 6
	this.target5 = new lib.sprite18();
	this.target5.setTransform(413.1,105.3);
  this.target5.shapeColor = {r:120, g:41, b:126};
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target5}]}).wait(36));

	// Layer 5
	this.target4 = new lib.sprite16();
	this.target4.setTransform(333.1,105.3);
  this.target4.shapeColor = {r:175, g:64, b:16};
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target4}]}).wait(36));

	// Layer 4
	this.target3 = new lib.sprite14();
	this.target3.setTransform(252.5,105.3);
  this.target3.shapeColor = {r:255, g:204, b:0};
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target3}]}).wait(36));

	// Layer 3
	this.target2 = new lib.sprite12();
	this.target2.setTransform(171.8,105.3);
  this.target2.shapeColor = {r:102, g:204, b:0};
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target2}]}).wait(36));

	// Layer 2
	this.target1 = new lib.sprite10();
	this.target1.setTransform(93.2,105.3);
  this.target1.shapeColor = {r:39, g:86, b:197};
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.target1}]}).wait(36));

	// Layer 1
	this.instance_1 = new lib.shape9("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(36));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(34).call(this.frame36))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-81.1,557.7,421.2);


// symbols:
(lib.image74 = function() {
	this.initialize(img.image74);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,15);


(lib.sprite78 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape77 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E84DC").ss(2,1,1).p("EAnEAaQMhOHAAAMAAAg0fMBOHAAAg");
	this.shape.setTransform(250,168);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.shape75 = function() {
	this.initialize();

	// Layer 1
	this.shape = new lib.image74();
	this.shape.setTransform(-45,-7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-7.4,90,15);


(lib.shape72 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(4,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");
	this.shape.setTransform(0,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-17,38.5,36.6);


(lib.shape71 = function() {
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


(lib.shape68 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,1).p("AC7ggIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACIgKgCIhcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ABsC0Ihcg7QgGgEgKAAIgPAEIhcA7IgKACQgEgCACgIIAdhqQACgIgDgJQgDgJgHgGIhVhCQgGgGABgEQACgEAIAAIBtgGQAIAAAIgGQAIgGADgIIAnhmQADgHADAAQAEAAADAHIAnBmQADAIAIAGQAIAGAIAAIBtAGQAIAAACAEQABAEgGAGIhVBCQgGAGgDAJQgDAJACAIIAcBqQACAIgEACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.shape64 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgjhAIBHCB");
	this.shape.setTransform(11,30.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,23.6,7.3,13.1);


(lib.shape63 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA5gqIhyBU");
	this.shape.setTransform(-12.1,27.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,23.6,11.6,8.6);


(lib.shape62 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgLgrIAWBW");
	this.shape.setTransform(8.6,28);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,23.6,2.4,8.8);


(lib.shape61 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAdhDIg5CH");
	this.shape.setTransform(-9.3,30.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,23.6,5.9,13.8);


(lib.shape60 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAYggIgvBB");
	this.shape.setTransform(4.9,26.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,23.6,4.9,6.8);


(lib.shape59 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgFhIIALCQ");
	this.shape.setTransform(-5.7,30.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,23.6,1.3,14.6);


(lib.shape58 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABigmIjDBO");
	this.shape.setTransform(-2.4,27.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,23.6,19.6,8);


(lib.shape57 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag4hKIBxCV");
	this.shape.setTransform(-0.6,31.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,23.6,11.5,15.1);


(lib.shape56 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABNg/IiZCA");
	this.shape.setTransform(-0.3,30.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,23.6,15.5,13);


(lib.shape55 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgfgrIA/BW");
	this.shape.setTransform(-3.1,28);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,23.6,6.4,8.8);


(lib.shape54 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAHg/IgNCA");
	this.shape.setTransform(6.6,30.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.9,23.6,1.5,13);


(lib.shape53 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAgfIAAA/");
	this.shape.setTransform(-6.2,26.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,23.6,0.2,6.5);


(lib.shape52 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgjhAIBHCB");
	this.shape.setTransform(11,30.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,23.6,7.3,13.1);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA5gqIhyBU");
	this.shape.setTransform(-12.1,27.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,23.6,11.6,8.6);


(lib.shape50 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E0F31").ss(0.8,1,1).p("Ag8AOQA8gfA9AF");
	this.shape.setTransform(1.3,2.1);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AANgDQgMgGgNAP");
	this.shape_1.setTransform(-6.5,3.1);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AAIgJQgOABgBAS");
	this.shape_2.setTransform(-5,4.3);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AgMgFQATgBAHAN");
	this.shape_3.setTransform(8.4,1.4);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AgPABQAPgKAQAN");
	this.shape_4.setTransform(9.2,0);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E0F31").ss(1,1,1).p("AAAgwIAIAQAAAgwIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIAARAsIAAADQgIAXgOAEQgRADgQgTQgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAF");
	this.shape_5.setTransform(1,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#892F91").s().p("AgmA6QgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAFIAIAQIgIgQIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIIgCAIIAAADQgIAXgOAEIgFAAQgPAAgNgQg");
	this.shape_6.setTransform(1,0.9);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.5,18.8,14.9);


(lib.shape49 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AgMAEQALAGAOgP");
	this.shape.setTransform(7.3,-5.2);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AgHAKQANgBACgS");
	this.shape_1.setTransform(5.3,-7.3);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AAOAGQgUABgHgN");
	this.shape_2.setTransform(-5.7,-5.7);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E0F31").ss(0.8,1,1).p("AAQAAQgOAKgRgN");
	this.shape_3.setTransform(-6.9,-3.6);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAKQgCgEgBgGIABgKIAGgEQACgBACAFIAEAKIgCAKIgFAFQgCAAgDgFg");
	this.shape_4.setTransform(3.6,0.8);

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCALIgFgKIABgJQABgFADgBQACgBAEAEIAEAKIAAAKIgFAGIgBAAQgCAAgCgEg");
	this.shape_5.setTransform(0.9,1.4);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2E0F31").ss(1,1,1).p("AAAgwIAIAQAAAgwIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIAARAsIAAADQgIAXgOAEQgRADgQgTQgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAF");
	this.shape_6.setTransform(1,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA6QgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAFIAIAQIgIgQIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIIgCAIIAAADQgIAXgOAEIgFAAQgPAAgNgQg");
	this.shape_7.setTransform(1,0.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-8.3,17.3,16.8);


(lib.shape47 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#401544").ss(1,1,1).p("AgDggQAWAogZAY");
	this.shape.setTransform(-6.8,-14.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E0F31").ss(1,1,1).p("AgtABQAdAJA/gO");
	this.shape_1.setTransform(0.8,-13.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("Ai1B3QhBhHgEhtQgDhGAcg7QgJAmACAqQADBuA+BGQA+BIBiAAQBfAABNhIQBNhGAAhnIgCgfQAMAnAAApQAABmhSBHQhRBIhlAAQhoAAhBhIg");
	this.shape_2.setTransform(-0.1,-15.2);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("ACqDAQhRBIhlAAQhoAAhBhIQhBhHgEhvQgFhuBMhVQBLhVBqAIQBrAIBIBVQBHBVAABlQAABohSBHg");
	this.shape_3.setTransform(-0.1,-22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#78297E").s().p("Ai1DAQhBhHgEhvQgFhuBMhVQBLhVBqAIQBrAIBIBVQBHBVAABlQAABohSBHQhRBIhlAAQhoAAhBhIg");
	this.shape_4.setTransform(-0.1,-22.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.4,-48.9,50.5,52.8);


(lib.shape46 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D1C06").ss(1,1,1).p("Ag7AIQA7gTA8AE");
	this.shape.setTransform(0.3,1.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D1C06").ss(1,1,1).p("AAAgwIAIAQAAAgwIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIAARAsIAAADQgIAXgOAEQgRADgQgTQgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAF");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF4010").s().p("AgmA6QgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAFIAIAQIgIgQIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIIgCAIIAAADQgIAXgOAEIgFAAQgPAAgNgQg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.4,12.9,14.9);


(lib.shape45 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D1C06").ss(1,1,1).p("AADgEIAHAJQghAEgkAVIABgUIACgIIAAgCQAIgVAQgDQARgEAPATIADAFIAAgBQAGgVANgDQAOgCAMASQAIAKAEAMIgygE");
	this.shape.setTransform(-0.2,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF4010").s().p("Ag6AKIACgIIAAgCQAIgVAQgDQARgEAPATIADAFIAHAJIgHgJIAAgBQAGgVANgDQAOgCAMASQAIAKAEAMIgygEQghAEgkAVgAADgEg");
	this.shape_1.setTransform(-0.2,-4.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAKQgCgEAAgGIABgKQADgEADAAQACgBACAFIAEAKIgCAKIgFAFg");
	this.shape_2.setTransform(2.6,0);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCALIgFgKIAAgJIAGgGIAEADIAFAKIAAAKQgCAFgDABIgBAAQgCAAgCgEg");
	this.shape_3.setTransform(0,0.5);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4D1C06").ss(1,1,1).p("AAAgwIAIAQAAAgwIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIAARAsIAAADQgIAXgOAEQgRADgQgTQgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAF");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA6QgLgNgGgRIgEgOIgBgEQgFgWAEgUIABgIIABgCQAHgXARgDQAQgEAQATIADAFIAIAQIgIgQIAAgBQAFgVAOgDQANgCAMASQANARAFAcQAFAYgHAVQgGAVgNACQgMACgMgOIACgIIgCAIIAAADQgIAXgOAEIgFAAQgPAAgNgQg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.4,12.9,14.9);


(lib.shape43 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D1C06").ss(1,1,1).p("AgUAIQASgSAWAE");
	this.shape.setTransform(-9.9,-20.3);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D1C06").ss(1,1,1).p("AhEgcQAaBMBvgY");
	this.shape_1.setTransform(-2.4,-16.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AidCEQgvh1hWh7IAWglQBMB1ArBsQCRAYCOgRICIjOIARAnIiVDbQg+AHg+AAQhWAAhZgOg");
	this.shape_2.setTransform(0.3,-9.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AEjAdIiVDdQiVAQiWgXQgvh2hWh9ICRjzQCTAOCogag");
	this.shape_3.setTransform(0.3,-20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF4010").s().p("AidDzQgvh2hWh9ICSjzQCSAOCogaIB5EcIiVDdQg+AGg+AAQhWAAhZgNg");
	this.shape_4.setTransform(0.3,-20.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.8,-46.4,58.3,51.4);


(lib.shape42 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#403300").ss(1,1,1).p("AgzAMQAygYA1AB");
	this.shape.setTransform(0.3,0.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#403300").ss(1,1,1).p("AgBgsIABgBQACgTAMgCQAMgDAMAQQANAPAFAYQAFAXgEATQgFATgMADQgLACgMgNIACgHAARAnIAAADQgGAWgMADQgQAFgPgRQgLgLgGgRIgEgLIgBgEQgGgUADgTIABgGIAAgCQAGgWAPgEQAPgEAPARIAEAEIAHAP");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD528").s().p("AggA3QgLgLgGgRIgEgLIgBgEQgGgUADgTIABgGIAAgCQAGgWAPgEQAPgEAPARIAEAEIABgBQACgTAMgCQAMgDAMAQQANAPAFAYQAFAXgEATQgFATgMADQgLACgMgNIACgHIgCAHIAAADQgGAWgMADIgHABQgMAAgMgNgAAGgdIgHgPg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.8,11.9,13.7);


(lib.shape41 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAKQgDgEgBgGQgBgEACgEQACgEADgBIAEAEIAEAJIgBAJIgFAFIgBAAQgBAAgCgEg");
	this.shape.setTransform(2.3,-0.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBALIgFgJIAAgJIAEgFQACgBACAEIAFAJIAAAIIgEAFIgBAAQgCAAgBgCg");
	this.shape_1.setTransform(0,0.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#403300").ss(1,1,1).p("AgBgsIABgBQACgTAMgCQAMgDAMAQQANAPAFAYQAFAXgEATQgFATgMADQgLACgMgNIACgHAARAnIAAADQgGAWgMADQgQAFgPgRQgLgLgGgRIgEgLIgBgEQgGgUADgTIABgGIAAgCQAGgWAPgEQAPgEAPARIAEAEIAHAP");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA3QgLgLgGgRIgEgLIgBgEQgGgUADgTIABgGIAAgCQAGgWAPgEQAPgEAPARIAEAEIABgBQACgTAMgCQAMgDAMAQQANAPAFAYQAFAXgEATQgFATgMADQgLACgMgNIACgHIgCAHIAAADQgGAWgMADIgHABQgMAAgMgNgAAGgdIgHgPg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.8,11.9,13.7);


(lib.shape39 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#826800").ss(1,1,1).p("AgbgPQAnABAQAe");
	this.shape.setTransform(4.1,-36.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#826800").ss(1,1,1).p("AgZAcQARgvAjgI");
	this.shape_1.setTransform(-5.9,-35.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#403300").ss(1,1,1).p("AAbgMIAfgFAAbgMQgpBrgriBQATAeBBgIg");
	this.shape_2.setTransform(1.5,-13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("AgpgiQASAeBBgIQgTAvgTAAQgWAAgXhFg");
	this.shape_3.setTransform(0,-13.4);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.2)").s().p("AinC3IhhlDIAbgSIBPEcQCYAUChgkQAQiCA+ipIAfAhQhKC2gSCNQhyAXhqAAQg8AAg7gHg");
	this.shape_4.setTransform(0.6,-14);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.5,1,1).p("AgIkOQCgBIBxB7QhLC2gSCNQivAkikgUIhhlDQCvh2BRhdg");
	this.shape_5.setTransform(0.6,-22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AinEIIhhlDQCvh2BRhdQCgBIBwB7QhKC2gSCNQhyAXhqAAQg8AAg7gHg");
	this.shape_6.setTransform(0.6,-22.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.8,-49.3,53,54.3);


(lib.shape38 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F3E00").ss(1,1,1).p("AA+ALIANgDAABgRIAAgBQADgTAMgDQAMgEANAPQANAPAHAWIABADIhvAaQgGgTACgQIABgFIAAgCQAEgWAPgEQAPgFAQAPIADAEIAKAOAhKAqIAZgF");
	this.shape.setTransform(0,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC00").s().p("Ag5AEIABgEIAAgCQAFgWAOgFQAPgFAQAQIAFAEIAIAOIgIgOIAAgBQABgTAMgEQAMgDANAPQANAOAHAWIABAEIhvAZQgFgSABgRg");
	this.shape_1.setTransform(0.4,-2.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1F3E00").ss(1,1,1).p("AgDgsIAIAOAgDgsIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHAAVAmIgBADQgEAWgPAFQgNAEgQgPQgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAE");
	this.shape_2.setTransform(0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AgcA5QgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAIAOIgIgOIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHIAAAHIgBADQgEAWgPAFIgFABQgMAAgMgMg");
	this.shape_3.setTransform(0.5,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-6.9,15,13.9);


(lib.shape37 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F3E00").ss(1,1,1).p("AABgRIAKAOAABgRIAAgBQADgTAMgDQAMgEANAPQANAPAHAWIABADIANgDAA+ALIhvAaQgGgTACgQIABgFIAAgCQAEgWAPgEQAPgFAQAPIADAEAgxAlIgZAF");
	this.shape.setTransform(0,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC00").s().p("Ag5AEIABgEIAAgCQAFgWAOgFQAPgFAQAQIAFAEIAIAOIgIgOIAAgBQABgTAMgEQAMgDANAPQANAOAHAWIABAEIhvAZQgFgSABgRg");
	this.shape_1.setTransform(0.4,-2.9);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAKIgDgJIAAgIQACgFADgBIAEAEIAEAJIAAAIIgFAGIgBAAQgBAAgDgEg");
	this.shape_2.setTransform(3,-0.2);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBALIgFgJIgBgJIAEgFIAFACIAFAJIABAIQgBAFgDABg");
	this.shape_3.setTransform(0,0.4);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1F3E00").ss(1,1,1).p("AgDgsIAIAOAgDgsIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHAAVAmIgBADQgEAWgPAFQgNAEgQgPQgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAE");
	this.shape_4.setTransform(0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA5QgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAIAOIgIgOIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHIAAAHIgBADQgEAWgPAFIgFABQgMAAgMgMg");
	this.shape_5.setTransform(0.5,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-6.9,15,13.9);


(lib.shape35 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F3E00").ss(1,1,1).p("ABVgWQgbgDgVAMIgWAMIgDABIgWAKIgDABQgNAGgKADQg6AQANg3");
	this.shape.setTransform(1.7,-16.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1F3E00").ss(1,1,1).p("AgSADQASgMATAL");
	this.shape_1.setTransform(-6.9,-19.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AjzDoQAQjogojeIApgGQAaDJgMDNQDUAmDUgiQAkjYgOjZIAZABQAaD0guDyQhyAQhzAAQh9AAiAgUg");
	this.shape_2.setTransform(0.2,-21);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AEDj4QAaD0guDyQjwAijygmQAQjogojeQEIguEGASg");
	this.shape_3.setTransform(0.2,-21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC00").s().p("AjzDqQAQjogojeQEIguEGASQAaD0guDyQhyAQhzAAQh9AAiAgUg");
	this.shape_4.setTransform(0.2,-21.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-46.6,53.8,50.9);


(lib.shape34 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D2142").ss(1,1,1).p("AgxAUQAtgYA2gP");
	this.shape.setTransform(0.5,0.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D2142").ss(1,1,1).p("AgDgsIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHAAVAmIgBADQgEAWgPAFQgNAEgQgPQgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAIAO");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E60D6").s().p("AgcA5QgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHIAAAHIgBADQgEAWgPAFIgFABQgMAAgMgMgAAFgeIgIgOg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.9,12.1,13.9);


(lib.shape33 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAKQgCgEgBgFIAAgIQACgFADgBQABAAADAEIAEAJIAAAIIgFAGIgBAAQgBAAgDgEg");
	this.shape.setTransform(2.5,-0.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBALIgFgJIgBgJIAEgFIAFACQADADACAGIABAIIgEAGg");
	this.shape_1.setTransform(-0.5,0.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0D2142").ss(1,1,1).p("AAkg4QANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIgBADQgEAWgPAFQgNAEgQgPQgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAAgBQADgTALgDQALgEAOAPgAAVAfIAAAHAgDgsIAIAO");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA5QgLgKgIgQIgFgMIgBgEQgHgTACgTIABgHIAAgCQAEgWAPgEQAPgFAQAPIAEAEIAAgBQADgTALgDQALgEAOAPQANAPAHAYQAGAWgDATQgEAUgMADQgKADgMgMIAAgHIAAAHIgBADQgEAWgPAFIgFABQgMAAgMgMgAAFgeIgIgOg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.9,12.1,13.9);


(lib.shape31 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0D2142").ss(1,1,1).p("AAtgPIADANQAAAIgEAHQgFAHgGAAQgGAAgEgHQgEgHAAgIIAAgCIgEACIABAGQAAAKgEAHQgFAHgGAAQgEAAgEgHIgEgNIgDABIABALQAAAKgEAHQgEAHgGAAQgGAAgFgHQgEgHAAgKIAAgDQhDAQAOg3AATgEIAagLQAZgMAcgQAgLAIIAagKAgqARIAcgI");
	this.shape.setTransform(2.4,-19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAXQgEgHAAgKIAAgDIAbgGIACAJQAAAKgEAHQgFAHgGAAQgGAAgEgHgAgKAHIgEgLIAbgMIAAAIQAAAIgEAHQgEAHgFAAQgFAAgFgHgAAUAAQgEgGAAgKIAAgBIAbgMIACANQAAAKgEAGQgEAGgGAAQgGAAgFgGg");
	this.shape_1.setTransform(2.6,-17.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0D2142").ss(1,1,1).p("AgSADQASgMATAL");
	this.shape_2.setTransform(-7,-21.9);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Aj/DnQCMj5Axj9IAJAIQgfDdhlDcQC2BEDNhTQhUj4iOiWQC1CwBnEdQiOAuiCAAQh8AAhzgpg");
	this.shape_3.setTransform(1.8,-22);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AhDkPQDSC2ByE7QkSBYjvhTQCNj5Awj9g");
	this.shape_4.setTransform(1.8,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2756C5").s().p("Aj/DnQCMj5Axj9QDRC2BxE7QiOAuiCAAQh8AAhzgpg");
	this.shape_5.setTransform(1.8,-22);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-49.2,51.4,54.4);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAg/IAAB+");
	this.shape.setTransform(7.4,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1ATIgBgOQgBgKAQgJQAQgJAXADQAZADAPAJQAPAIAAALIgCAIQgcACgZAAQgbAAgagCg");
	this.shape.setTransform(-4,-0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-2.5,11.1,4.4);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAg/IAAB+");
	this.shape.setTransform(-6.3,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.251)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,37).s().p("AkDAvQhrgTAAgcQAAgaBrgUQBtgUCWAAQCXAABsAUQBsAUAAAaQAAAchsATQhsAUiXAAQiWAAhtgUg");
	this.shape.setTransform(0,38.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.7,32,73.5,13.5);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0.5,0,41.5,0).s().p("AmOd7MAAAg71IMdAAMAAAA71g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-191.4,80,383);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.01)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.9,80,80);


(lib.shape19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471A4D").ss(1.5,1,1).p("AjngzQAOhGAyg2QBGhKBhAAQAxAAAqATIAjAUIARAMIAYAXQBGBJAABmQAABnhGBJQhFBKhiAAQg2AAgugYIgXgNIgUgPIgTgRIgFgFQhFhJAAhnQAAgaAFgZg");
	this.shape.setTransform(3.6,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#471A4D").ss(1.5,1,0,3).p("ADZieIg8gtQhQg8hfASQhhARg5BUQgdArgKAwAg0D6IhAgwQhQg8gQhmQgJgvAKgu");
	this.shape_1.setTransform(-5.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E3399").s().p("AjVBHQAKgwAcgpQA6hUBggSQBfgRBRA8IA8AtIgjgUQgrgTgyAAQhgAAhFBIQgzA2gOBGg");
	this.shape_2.setTransform(-5.2,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78297E").s().p("AhBDiIgXgOIgUgOIgSgRIgFgFQhFhJAAhnQAAgaAEgZQAOhGAzg2QBGhJBgAAQAxgBArAUIAjATIARAMIAYAXQBFBKAABlQAABnhFBJQhGBJhiAAQg2AAgugXgAisCWQhQg8gQhkQgIgxAKguIBGA2QgEAZAAAaQAABnBFBJIAFAFIASARgAjEgzg");
	this.shape_3.setTransform(0,5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,-25.2,54.6,55.3);


(lib.shape17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#561F07").ss(1.5,1,1).p("AiskSIERAAIBHAyICKD5IiKD6IkQAAIhIgyIiJj4gAhkjgIEQAAAhkETIiKj6ICKj5");
	this.shape.setTransform(0,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#561F07").ss(1.5,1,0,3).p("AAgiVIBIAyAggCWIhHgy");
	this.shape_1.setTransform(-20.5,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA4F14").s().p("AhkAZIhHgxIEQAAIBHAxg");
	this.shape_2.setTransform(0,-22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB4912").s().p("AhnBkICHj5IBIAyIiID5g");
	this.shape_3.setTransform(-20.5,-9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF4010").s().p("AhkD5IiKj5ICKj4IEQAAICKD4IiKD5gAisDIIiJj4IBHAwICKD5g");
	this.shape_4.setTransform(0,5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-24.9,62.1,55);


(lib.shape15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#876B01").ss(1.5,1,1).p("AAkjgID5C/IhfE0IkzAAIhHgyIhgk0ID6i/gAjVghID5i/AjVghIBgE0");
	this.shape.setTransform(0,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#876B01").ss(1.5,1,0,3).p("AgigYIBFAx");
	this.shape_1.setTransform(-24.9,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED945").s().p("AifBGID4i9IBHAyIj4C9g");
	this.shape_2.setTransform(-12.4,-12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("Ah0D5IhhkzID4i+ID6C+IhgEzgAi8DIIhgk0IBHAyIBhEzg");
	this.shape_3.setTransform(0,5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-24.9,57.1,55);


(lib.shape13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#346501").ss(1.5,1,0,3).p("AkQkOIHaAAIBHAyIAAHyInZAAIhIgyIAAnyIBIAyIHZAAAjIEWIAAny");
	this.shape.setTransform(0,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77EC02").s().p("AjIAZIhHgxIHYAAIBHAxg");
	this.shape_1.setTransform(0,-22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#73E302").s().p("AgiDhIAAnzIBFAzIAAHxg");
	this.shape_2.setTransform(-23.6,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AjsD5IAAnxIHZAAIAAHxg");
	this.shape_3.setTransform(3.6,5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,-24.9,54.6,55);


(lib.shape11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#142D63").ss(1.5,1,0,3).p("AjvEUIhHgyIESnyIBFAyIETHyIojAAIEQny");
	this.shape.setTransform(0.2,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#406FD9").s().p("AirDhIEQnzIBHAzIkQHxg");
	this.shape_1.setTransform(-13.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2756C5").s().p("AkRD5IERnxIESHxg");
	this.shape_2.setTransform(3.6,5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-24.9,62.1,55);


(lib.shape9 = function() {
	this.initialize();

	// Layer 48
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AgNABQAAgVAXAJIADADIACAIIgDAKIgMAFg");
	this.shape.setTransform(111,39.5);

	// Layer 47
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("AgNAAQgBgIADgDIAVgBIACACIACAKIgCAIIgMAFg");
	this.shape_1.setTransform(86,13.6);

	// Layer 46
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgOAAQAAgIADgDIAVgBIACACIACAKIgCAIIgMAFg");
	this.shape_2.setTransform(20.5,19.1);

	// Layer 45
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_3.setTransform(480.9,184.6);

	// Layer 44
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_4.setTransform(315.4,17.1);

	// Layer 43
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_5.setTransform(346.9,211.6);

	// Layer 42
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AgOAAQAAgHAFgEIAUgBIACACIABAKIgCAIIgMAFg");
	this.shape_6.setTransform(282.4,164.1);

	// Layer 41
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("AgOAAQAAgHAFgEIAUgBIACACIACAKIgDAIIgMAFg");
	this.shape_7.setTransform(364.4,146.6);

	// Layer 40
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.302)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_8.setTransform(387.4,135.6);

	// Layer 39
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgOABQAAgVAYAJIADADIACAIIgDAKIgMAFg");
	this.shape_9.setTransform(185.5,82.5);

	// Layer 38
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.302)").s().p("AgNAAQAAgIACgDIAVgBIADACIACAKIgDAIIgMAFg");
	this.shape_10.setTransform(173,117.1);

	// Layer 37
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgIACgDIAVgBIADACIACAKIgDAIIgMAFg");
	this.shape_11.setTransform(156,109.1);

	// Layer 36
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.302)").s().p("AgOAAQAAgHAFgEIAUgBIACACIACAKIgDAIIgMAFg");
	this.shape_12.setTransform(463.4,10.1);

	// Layer 35
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_13.setTransform(459.4,107.1);

	// Layer 34
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.149)").s().p("AgOAAQAAgHAFgEIAUgBIACACIABAKIgCAIIgMAFg");
	this.shape_14.setTransform(399.4,39.6);

	// Layer 33
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_15.setTransform(262.4,109.1);

	// Layer 32
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_16.setTransform(233.4,92.1);

	// Layer 31
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("AgOAAQABgHAEgEIAUgBIACACIACAKIgDAIIgMAFg");
	this.shape_17.setTransform(285.4,78.6);

	// Layer 30
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAAQAAgHADgEIAVgBIACACIABAKIgCAIIgMAFg");
	this.shape_18.setTransform(233.4,22.1);

	// Layer 29
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.498)").s().p("AgOABQAAgUAYAIIACADIACAIIgCAJIgMAFg");
	this.shape_19.setTransform(109.5,205.9);

	// Layer 28
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.498)").s().p("AgOAAQABgIACgDIAVgBIACACIADAKIgDAIIgMAFg");
	this.shape_20.setTransform(30.5,171.1);

	// Layer 27
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("AgNAAQAAgIACgDIAVgBIADACIACAKIgDAIIgMAFg");
	this.shape_21.setTransform(51.5,110.1);

	// Layer 26
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.302)").s().p("AgYAIIgFgGQAAgOAIgIQANgOAeAKIAEAHQADAFAAAMIgEATIgJAEIgQAGg");
	this.shape_22.setTransform(205,44);

	// Layer 25
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.302)").s().p("AgYAIQgEgFgBgCQAAgoAzAQIAEAGQADAEAAANIgEASIgJAEIgQAGg");
	this.shape_23.setTransform(484,59);

	// Layer 24
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.149)").s().p("AgYAIIgEgGQAAgNAHgJQANgOAeAKIAEAHQADAFAAAMIgEATIgJAEIgQAGg");
	this.shape_24.setTransform(163,30);

	// Layer 23
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.2)").s().p("AgYAJQgEgFAAgCQAAgNAHgJQANgOAeAKIAEAHQADAFAAANIgEASIgJAEIgQAGg");
	this.shape_25.setTransform(28,90.9);

	// Layer 22
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.149)").s().p("AgOAbIgLgHIgBgGIgCgOQAAgfAcADQAdACAAAaQABAJgIAJQgIAMgOAAg");
	this.shape_26.setTransform(476,88.8);

	// Layer 21
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.149)").s().p("AgOAbIgLgHIgBgGIgCgOQAAgeAcABQAdACAAAbQABAKgIAJQgJALgNAAg");
	this.shape_27.setTransform(369,43);

	// Layer 20
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.102)").s().p("AgOAaIgLgHIgCgGIgBgOQAAgYAcgCQAdgDABAeQgBAJgGAJQgJALgOAAg");
	this.shape_28.setTransform(218,153);

	// Layer 19
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(216,218,226,0.102)").s().p("AqGIXQCkBZDKAAQFAAADkjkQDkjkAAlAQAAlCjkjkIgfgdQBiA1BUBUQDlDkAAFCQAAFAjlDkQjkDklAAAQkrAAjajFg");
	this.shape_29.setTransform(58.2,1.1);

	// Layer 18
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(210,143,43,0.302)").s().p("AkiLTID6ALQCNAGCPAAQhzAliBAAQibAAiHg2gADUKcQkigfklgtIiagUIgYgXIgPgRIHpAAQE5gBE5AQIgCACQhTBTheA1gAEUG9ImVgrQk1gmkWg5IgPgoIFFgKQFSgIFRABIHVABQgnB1hQBmgACvChIr5gHIiygJQgMhHAAhKIAAgCIBTgEQEjgQEjADII3ADIFBgNIAAAdQAABWgQBQQklgBklgEgAGOhWQmMgImKgjQi5gOi0giQAKgwASgtQDTAHDVgBIKqgEIFigCQAhBaAJBjQi7gCi8gDgAIJk1QmCgDl/gSIm9gXQAcg2AmgzQEWgKEZAEIGgAJIESgLQA9BPAmBagAooohIADgEQDkjjFBAAQFBAADkDjIAIAIg");
	this.shape_30.setTransform(45.2,-3.3);

	// Layer 17
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(177,91,35,0.251)").s().p("AgoJ9Ij6gLQiAgzhrhkICaAUQElAtEiAfICgARQg+AihCAVQiPAAiNgGgAhLGzInpAAQhjhng1h6QEWA5E1AmIGVArIFXAZQgfAnglAmQk5gQk5ABgAr8AwICyAJIL5AHQElAEElABIgXBVInVgBQlRgBlSAIIlFAKQgVg7gMg/gAr1kSQC0AiC5AOQGKAjGMAIQC8ADC7ACIAEA0IlBANIo3gDQkjgDkjAQIhTAEQABhcAShTgArZlvQAPgrAVgoIG9AXQF/ASGCADIDIAMIAKAbIliACIqqAEIg5AAQi4AAi3gGgAhEoxQkZgEkWAKQAhgtAqgqIRVAEQAjAkAeAnIkSALg");
	this.shape_31.setTransform(45.2,6.3);

	// Layer 16
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(216,218,226,0.051)").s().p("AhPBDIAeAEQAoAAAagcQAbgbAAgmQAAgngbgcIgDgCQAVAHARAQQAcAcAAAnQAAAmgcAcQgcAbgmAAQgmAAgbgZg");
	this.shape_32.setTransform(408.5,102.8);

	// Layer 15
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(216,218,226,0.051)").s().p("AhBBCQgcgcAAgmQAAgmAcgcQAbgcAmAAQAnAAAcAcQAbAcABAmQgBAmgbAcQgcAdgnAAQgmAAgbgdg");
	this.shape_33.setTransform(407,102.6);

	// Layer 14
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C5C8D3").s().p("AAeAxQhGgDgygQQgygSABgTQABgMASgJQABARAqANQAtAPA9ADQAIATATALgAgngNQgfgIABgKQAAgJAfgGIBJgDQAsABAfAJQAeAIAAAKQAAAKggAFIhLAEg");
	this.shape_34.setTransform(305.6,311.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D8DAE2").s().p("AAOA8QgRgLgIgTQg/gDgtgPQgqgNgBgRIgBgCQABgTAugLQAvgMBAADQA/ADAtAPQAtAPgBATIAAACQARAKgBAMQgBAVgzAMQgoAKg0AAIgFAAgAhQgkQgfAGAAAJQgBAKAfAIIBKAJIBJgEQAggDAAgKQAAgKgegIQgfgJgqgBg");
	this.shape_35.setTransform(309.8,310.7);

	// Layer 13
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C5C8D3").s().p("AAeAxQhGgDgygQQgygSABgTQABgMASgJQABARAqANQAtAPA9ADQAIATATALgAgngNQgfgIABgKQAAgJAfgGIBJgDQAsABAfAJQAeAIAAAKQAAAKggAFIhLAEQgqgCgegJg");
	this.shape_36.setTransform(459.1,315.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D8DAE2").s().p("AAOA8QgRgLgIgTQg/gDgtgPQgqgNgBgRIgBgCQABgTAugLQAvgMBAADQA/ADAtAPQAtAPgBATIAAACQARAKgBAMQgBAVgzAMQgoAKg0AAIgFAAgAhQgkQgfAGAAAJQgBAKAfAIQAeAHAsACIBJgEQAggDAAgKQAAgKgegIQgfgJgqgBg");
	this.shape_37.setTransform(463.3,314.2);

	// Layer 12
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C5C8D3").s().p("AhYApQg1gNgBgVQAAgLARgLQADAQAtALQAvALA+gCQAKATAWAJIgbACIgeABQg1AAgqgLgAgpgGQgfgGgBgKQAAgKAfgJQAggIArgCIBNADQAgAHABAKQAAAKggAIIhMAKg");
	this.shape_38.setTransform(2.1,320.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D8DAE2").s().p("AgJAhQhAACgvgLQgtgLgDgQIAAgCQgBgUAugPQAvgQBCgDQBAgDAwAMQAvALABAUIAAACQATAKAAAKQABAWgzARQgqAPg4AEQgVgJgJgTgAhVgdQgfAJAAAKQABAKAfAEIBOADIBKgIQAggIAAgKQgBgKgggHIhLgDQgtACggAIg");
	this.shape_39.setTransform(6.4,319);

	// Layer 11
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C5C8D3").s().p("AhYApQg1gNgBgVQAAgLARgLQADAQAtALQAvALA+gCQAKATAWAJIgbACIgeABQg1AAgqgLgAgpgGQgfgGgBgKQAAgKAfgJQAggIArgCIBNADQAgAHABAKQAAAKggAIQgfAIgtACg");
	this.shape_40.setTransform(123.6,307.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D8DAE2").s().p("AgJAhQhAACgvgLQgtgLgDgQIAAgCQgBgUAugPQAvgQBCgDQBAgDAwAMQAvALABAUIAAACQATAKAAAKQABAWgzARQgqAPg4AEQgVgJgJgTgAhVgdQgfAJAAAKQABAKAfAEIBOADQArgCAfgGQAggIAAgKQgBgKgggHIhLgDQgtACggAIg");
	this.shape_41.setTransform(127.9,306);

	// Layer 10
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C5C8D3").s().p("AA8BkQiNgGhkgjQhkgiACgoQABgYAkgTQADAjBVAcQBYAdB8AHQAQAmAnAXgAhQgbQg9gQABgUQABgUA+gKICUgHQBYADA9AQQA+ARgBAUQgBAUg/ALIiWAHQhWgEg9gRg");
	this.shape_42.setTransform(379.3,302.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D8DAE2").s().p("AgYA9Qh+gGhYgeQhVgcgDgjIAAgEQABgmBdgWQBcgXCBAGQB/AFBaAfQBaAfgBAmIgBAEQAiAUgBAYQgCAqhmAZQhUAVhuAAQglgXgQgmgAihhJQg+ALgBATQgBAUA9ARQA9AOBYAEICUgHQA/gJABgUQABgTg+gRQg9gQhWgEg");
	this.shape_43.setTransform(387.7,300.7);

	// Layer 9
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C5C8D3").s().p("AjeBpQiEghgDg2QgBgdAsgcQAIArBwAbQB1AdCggHQAYAvA1AZIhEAEQglABgiAAQiJAAhqgZgAhngRQhQgOgBgaQgBgZBOgVQBPgVBvgFIDBAJQBRAOABAZQABAahPAVQhPAVhxAFIg3ABQhMAAg8gKg");
	this.shape_44.setTransform(59.9,307.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8DAE2").s().p("AgXBSQiiAHh0gdQhxgcgIgrIgBgFQgCgxB0gnQB0goClgHQClgHB3AdQB2AdACAxIAAAFQAuAYACAeQACA2iAArQhpAkiNAMQg0gYgXgvgAjWhLQhPAWABAZQABAZBRAMQBQAPBwgFQBvgFBQgUQBOgVgBgZQgBgZhRgPIi+gJQhxAFhPAVg");
	this.shape_45.setTransform(70.7,304.4);

	// Layer 8
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C5C8D3").s().p("Aj9BmQiRgrAAg7QgBgiAygdQAHAyB8AjQB/AlCzABQAYA1A6AeIhLABQjMAAiQgqgAhzgcQhZgUAAgcQAAgcBZgUQBYgTB8AAQB+AABYATQBZAUgBAcQABAchZAUQhYAUh+AAQh8AAhYgUg");
	this.shape_46.setTransform(252,298.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D8DAE2").s().p("AgeBYQi0AAiAgmQh8gkgGgwIgBgGQAAg2CDgmQCCgnC5AAQC2AACDAnQCCAmAAA2IAAAGQAyAdAAAhQAAA8iRAqQh2AjidAHQg4gfgYg1gAjrhfQhYAUAAAcQAAAcBYATQBZATB9AAQB8AABYgTQBZgTAAgcQAAgchZgUQhYgTh8AAQh9AAhZATg");
	this.shape_47.setTransform(264,295.6);

	// Layer 7
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8DAE2").s().p("EgnDAD0IAAlmUAqcgECAjrAECIAAFmg");
	this.shape_48.setTransform(250,315.6);

	// Layer 6
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(216,218,226,0.051)").s().p("AifCGQAcAJAgAAQBOAAA2g4QA4g4AAhMQAAhPg4g4IgFgEQAqANAiAhQA4A4AABPQAABNg4A3Qg4A4hMAAQhMAAg3gzg");
	this.shape_49.setTransform(58.1,137.5);

	// Layer 5
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(216,218,226,0.051)").s().p("AiFCGQg3g3gBhPQABhNA3g4QA4g4BNAAQBOAAA4A4QA4A4gBBNQABBPg4A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_50.setTransform(55,137);

	// Layer 4
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#252D49").s().p("AsmDsQgQg3DghsQBjgvB4grQABAlAIAlIgDACQiQA/AIAbQAIAbCbgaIAKgBQCYgZDKg8QDUg9CQg+IAEgBQCMg9gIgbQgHgZiPAVQgNglgVghQB0gYBlgNQD4geAQA2QAQA3jhBrQhkAwh5AsQiYA6i7A2QivA0iZAhQiIAdh1AOQhaAMg8AAQhnAAgKgjg");
	this.shape_51.setTransform(444.2,156.8);

	// Layer 3
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(216,218,226,0.051)").s().p("Ak3EOQBPApBgAAQCbAABvhvQBwhvAAicQAAidhwhvIgYgXQAzAbArArQBwBvAACeQAACbhwBvQhvBwibAAQiNAAhohZg");
	this.shape_52.setTransform(451,156.1);

	// Layer 2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(228,208,35,0.102)").s().p("AkLEMQhwhvAAidQAAicBwhvQBvhvCcgBQCdABBvBvQBwBvAACcQAACdhwBvQhvBvidABQicgBhvhvg");
	this.shape_53.setTransform(444.2,154.1);

	// Layer 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#263362","#111222"],[0,1],-2.9,142.9,-2.9,-172.9).s().p("EgnDAakMAAAg1HMBOHAAAMAAAA1Hg");
	this.shape_54.setTransform(250,170);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-81.1,557.7,421.2);


(lib.shape8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAkIgPgJIgCgIIgCgUQAAgoAmADQAnACAAAkQABANgKAMQgMAPgSAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,8,8);


(lib.shape6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBiQgZgZAAgjQAAgXALgQQgIgRAAgTQAAgkAZgZQAZgYAjAAQAfAAAVATIAVgCQApAAAeAdQAdAeAAApQAAAogdAdQgeAdgpAAIgMAAIgGAFQgWAZgkAAQgjAAgZgZg");
	this.shape.setTransform(0.5,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);


(lib.sprite76 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape77("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,336);


(lib.sprite70 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape71("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite67 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape68("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{point:1,loss:8});
  var self = this;
	// timeline functions:
	this.frame_0 = function(){this.stop()}
	
	this.frame_1 = function() {
		playSound("sound69");
	}
	this.frame_7 = function(){
   this.stop ();
   if (this.parent.gameWin)
   {
    // this.parent.parent.GameEndClip.gotoAndPlay("GameWonPlayground");
    this.parent.parent.GameWon = true;
    for (var i = 1; i <= 5; i++)
    {
        var curPos = this.parent.parent["pos" + i];
        curPos.removeAllEventListeners();
    } // end of for
   } // end if	
	}
	this.frame_8 = function() {
		playSound("sound73");
    var damp = 7.000000E-001;
    for (var i = 1; i <= 20; i++)
    {
      this["puff" + i] = new lib.sprite5Puff();   //attachMovie("Puff", "puff" + i, i);
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
        if (evt.currentTarget.scaleY <= 0)
        {
           self.removeChild(evt.currentTarget); //this.removeMovieClip();
           delete evt.currentTarget;
           evt.remove()
        } // end if
    });
} // end of for		
	}
  this.frame_14 = function(){
   this.parent.gotoAndStop(this.parent.currentFrame - 1); //prevFrame();
   this.parent.lose();  
  }
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(6).call(this.frame_14));

	// Layer 3
	this.instance = new lib.sprite67();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).to({scaleX:1.13,scaleY:1.13},1).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(8));

	// Layer 2
	this.instance_1 = new lib.sprite70();
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.75},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:1},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).to({scaleX:1.07,scaleY:1.07},1).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_2 = new lib.shape72("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,38.5,36.6);


(lib.sprite65 = function(mode,startPosition,loop) {
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
  this.frame6 = function(){this.gameWin = true}
	// Layer 5
	this.star5 = new lib.sprite66();
	this.star5.setTransform(152.2,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star5}]}).wait(6));

	// Layer 4
	this.star4 = new lib.sprite66();
	this.star4.setTransform(113.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star4}]}).wait(6));

	// Layer 3
	this.star3 = new lib.sprite66();
	this.star3.setTransform(74.4,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star3}]}).wait(6));

	// Layer 2
	this.star2 = new lib.sprite66();
	this.star2.setTransform(35.5,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star2}]}).wait(6));

	// Layer 1
	this.star1 = new lib.sprite66();
	this.star1.setTransform(-3.3,-3.2,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1}]}).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(5).call(this.frame6))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-18.2,187.3,30.1);


(lib.sprite48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape49("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape50("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-8.3,17.3,16.8);


(lib.sprite44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape45("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape46("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-7.4,12.9,14.9);


(lib.sprite40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape41("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape42("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.8,11.9,13.7);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape37("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape38("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-6.9,15,13.9);


(lib.sprite32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){this.stop()}
	// Layer 2
	this.instance = new lib.shape33("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shape34("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0,_off:false},0).wait(6));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-6.9,12.1,13.9);


(lib.sprite30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var self = this;
  this.frame1 = function(){
   this.stop ();
   this.eyes = this.eyes_1; this.glow = this.glow_1;
   this.on("tick",  function ()
   {
    if (Math.random() * 100 < 1)
    {
        self.eyes.play();
    } // end if
   });
  }

  this.frame2 = function(){this.eyes = this.eyes_2;this.glow = this.glow_2}
  this.frame3 = function(){this.eyes = this.eyes_0;this.glow = this.glow_3}
  this.frame4 = function(){this.eyes = this.eyes_3;this.glow = this.glow_4}
  this.frame5 = function(){this.eyes = this.eyes_4;this.glow = this.glow_5}
	// Layer 3
	this.eyes_0 = new lib.sprite40();
	this.eyes_0.setTransform(0.3,-27.7);
	this.eyes_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyes_0).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 2
	this.eyes_1 = new lib.sprite32();
	this.eyes_1.setTransform(0.7,-27.8);

	this.eyes_2 = new lib.sprite36();
	this.eyes_2.setTransform(0.2,-27.8);

	this.instance = new lib.shape39("synched",0);

	this.eyes_3 = new lib.sprite44();
	this.eyes_3.setTransform(0.8,-27.6);

	this.eyes_4 = new lib.sprite48();
	this.eyes_4.setTransform(-0.1,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1}]}).to({state:[{t:this.eyes_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.eyes_3}]},1).to({state:[{t:this.eyes_4}]},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.shape31("synched",0);

	this.instance_2 = new lib.shape35("synched",0);

	this.instance_3 = new lib.shape43("synched",0);

	this.instance_4 = new lib.shape47("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
  
  //Layer 0
  
	this.glow_1 = new lib.shape31("synched",0);

	this.glow_2 = new lib.shape35("synched",0);

  this.glow_3 = new lib.shape39("synched",0);
	
	this.glow_4 = new lib.shape43("synched",0);

	this.glow_5 = new lib.shape47("synched",0);
  
  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glow_1}]}).to({state:[{t:this.glow_2}]},1).to({state:[{t:this.glow_3}]},1).to({state:[{t:this.glow_4}]},1).to({state:[{t:this.glow_5}]},1).wait(1));
  
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(1).call(this.frame2).wait(1).call(this.frame3).wait(1).call(this.frame4).wait(1).call(this.frame5))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-49.2,51.4,54.4);


(lib.sprite27 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape28("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-2.5,11.1,4.4);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,run:1});
  this.frame1 = function(){this.stop()}
  this.frame8 = function(){this.gotoAndPlay("run")}
	// Layer 6
	this.body = new lib.sprite30();
	this.body.setTransform(0,21.1,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body}]}).wait(8));

	// Layer 5
	this.instance = new lib.sprite27();
	this.instance.setTransform(7.6,36.5,1.25,1.25,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,skewX:-23.6,skewY:156.2,x:15.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,skewX:-0.5,skewY:179.3,x:6.3,y:36.4},0).wait(1).to({skewX:-0.5,x:-7.3},0).wait(1).to({skewX:42.4,skewY:222.5,x:-11,y:31.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,skewX:23.1,skewY:203.2,x:3.2,y:29.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,skewX:-3.5,skewY:176.3,x:10.8,y:32.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,skewX:-23.6,skewY:156.2,x:15.1,y:36.5},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.shape29("synched",0);

	this.instance_2 = new lib.shape52("synched",0);

	this.instance_3 = new lib.shape54("synched",0);

	this.instance_4 = new lib.shape56("synched",0);

	this.instance_5 = new lib.shape58("synched",0);

	this.instance_6 = new lib.shape60("synched",0);

	this.instance_7 = new lib.shape62("synched",0);

	this.instance_8 = new lib.shape64("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 3
	this.instance_9 = new lib.sprite27();
	this.instance_9.setTransform(-6.6,36.5,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({scaleX:0.9,scaleY:1.25,skewX:71,skewY:-108.8,x:-17.7,y:31.5},0).wait(1).to({scaleX:0.89,scaleY:1.24,skewX:29.6,skewY:-150.2,x:-6.1,y:30.1},0).wait(1).to({scaleX:0.89,scaleY:1.24,skewX:-15.5,skewY:-195.6,x:0.3,y:32.9},0).wait(1).to({scaleX:0.9,scaleY:1.25,skewX:-35.4,skewY:-215.5,x:4.7,y:38},0).to({scaleX:0.89,scaleY:1.24,skewX:-18.5,skewY:-198.6,x:-3.9},1).wait(1).to({scaleY:1.24,skewX:-1.5,skewY:-181.6,x:-12.7},0).wait(1).to({scaleX:0.9,scaleY:1.25,skewX:71,skewY:-108.8,x:-17.7,y:31.5},0).wait(1));

	// Layer 2
	this.instance_10 = new lib.shape26("synched",0);

	this.instance_11 = new lib.shape51("synched",0);

	this.instance_12 = new lib.shape53("synched",0);

	this.instance_13 = new lib.shape55("synched",0);

	this.instance_14 = new lib.shape57("synched",0);

	this.instance_15 = new lib.shape59("synched",0);

	this.instance_16 = new lib.shape61("synched",0);

	this.instance_17 = new lib.shape63("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).wait(1));

	// Layer 1
	this.instance_18 = new lib.shape25("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(8));
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(7).call(this.frame8))
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-40.4,73.5,86);


(lib.sprite22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape23("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-191.4,80,383);


(lib.sprite20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
  this.frame1 = function(){
    this.stop();
    if(this.shape) this.shape.body.glow.uncache();    
  }
	// Layer 1
	this.instance = new lib.shape21("synched",0);

	this.instance_1 = new lib.sprite22();
	this.instance_1.setTransform(0,-151.4,0.163,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:0.163}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.628}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.907}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.901}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.507}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.113}}]},1).wait(1));

	//this.instance = new lib.shape21("synched",0);

	//this.instance_1 = new lib.sprite22();
	//this.instance_1.setTransform(0,-151.5,0.163,1);
	//this.instance_1._off = true;

	//this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	//this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.63},0).wait(1).to({scaleX:0.91},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.9},0).wait(1).to({scaleX:0.51},0).wait(1).to({scaleX:0.11},0).wait(1));

  this.timeline.addTween(cjs.Tween.get(this).call(this.frame1).wait(8))

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.9,80,80);


(lib.sprite18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape19("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,-25.2,54.6,55.3);


(lib.sprite16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape17("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-24.9,62.1,55);


(lib.sprite14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape15("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-24.9,57.1,55);


(lib.sprite12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape13("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,-24.9,54.6,55);


(lib.sprite10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-24.9,62.1,55);


(lib.sprite7Piece = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape8("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,8,8);


(lib.sprite5Puff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.5,26.3,24.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;