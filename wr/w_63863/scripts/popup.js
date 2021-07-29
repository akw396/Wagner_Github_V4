(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.CertificateHtml = function() {
	this.initialize();
	// Layer 1
	this.addDef = new lib.AddSliverButton();
	this.addDef.setTransform(195.1,147.1,1,1,0,0,0,30.6,10.5);
	new cjs.ButtonHelper(this.addDef, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvhBaIAAiyIfDAAIAACyg");
	this.shape.setTransform(150.5,95.9,0.679,0.997);

	this.text = new cjs.Text(ID_Name+":", "14px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 42;
	this.text.setTransform(35.3,84.4);

	this.text_1 = new cjs.Text(ID_Pleaseenteryour, "14px 'Tahoma'", "#FFFFFF");
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 190;
	this.text_1.setTransform(31.9,26.1);

	this.instance = new lib.AddTermBG();
	this.instance.setTransform(158,125.7,1,1,0,0,0,160.5,127.1);
	this.instance.shadow = new cjs.Shadow("rgba(58,58,58,0.749)",0,0,12);

	this.addChild(this.instance,this.text_1,this.text,this.addDef);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(128.5,103.1,247,198);


// symbols:
(lib.SliverButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AEyAFQAAApgeAeQgdAdgpAAImbAAQgpAAgdgdQgegeAAgpIAAgJQAAgpAegdQAdgeApAAIGbAAQApAAAdAeQAeAdAAApg");
	this.shape.setTransform(46.1,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BABCBE","#FFFFFF"],[0,1],0,10.5,0,-10.5).s().p("AjNBpQgpgBgdgdQgdgdgBgqIAAgIQABgpAdgdQAdgdApgBIGaAAQAqABAdAdQAdAdAAApIAAAIQAAAqgdAdQgdAdgqABg");
	this.shape_1.setTransform(46.1,26);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.5,14.5,63.2,23);


(lib.AddTermBG = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AXIw1MAAAAhrQAAAcgZAUQgZATgjAAMgrlAAAQgjAAgZgTQgZgUAAgcMAAAghrQAAgcAZgUQAZgTAjAAMArlAAAQAjAAAZATQAZAUAAAcg");
	this.shape.setTransform(127.5,101.5,0.777,0.777);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("A1yR5QgjAAgYgTQgZgUAAgdMAAAghpQAAgdAZgTQAYgUAjAAMArkAAAQAkAAAZAUQAZATAAAdMAAAAhpQAAAdgZAUQgZATgkAAg");
	this.shape_1.setTransform(127.5,101.5,0.777,0.777);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.5,10.5,232,182);


(lib.AddSliverButton = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(ID_Ok, "bold 12px 'Arial'", "#414141");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 52;
	this.text.setTransform(22.4,1);

	this.instance = new lib.SliverButton();
	this.instance.setTransform(24.1,10.5,1,1,0,0,0,46.1,26);
	this.instance.shadow = new cjs.Shadow("rgba(58,58,58,0.749)",0,0,15);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-8.5,82,41);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;