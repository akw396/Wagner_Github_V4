var btnClicked = "-1";
var shiftY;
var shiftX;
var shiftSigY;
var shiftSigX;
	 
function resizeInteraction(thewidth,theheight) {
	var scale = 0;
	thewidth = String(thewidth).replace("px","");
	theheight = String(theheight).replace("px","");
	/*if(thewidth<theheight){
	 scale = thewidth / (680+70);
	}else{
	 scale = theheight/ (500);
	}*/
	
	/**********************/
	//Modification made for Presenter same logic holds good for Captivate
	var scaleW = thewidth / (720);
	var scaleH = theheight/ (480);
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	/*********************/
	
	var margins = Math.round(10 * scale);
	var marginsLeft = Math.round(20 * scale);
	var bgWidth = ((682) * scale) + "px";
	var bgHeight = (436 * scale) + "px";
	
	margins+="px"
	scale = "scale(" + scale + ")";
	$('#reveal').css('-webkit-transform', scale);
	$('#reveal').css('-moz-transform', scale);
	$('#reveal').css('-o-transform', scale);
	$('#reveal').css('-ms-transform', scale);
	
	$('#reveal').css('-moz-transform-origin', '0 0');
	$('#reveal').css('-webkit-transform-origin', '0 0');
	$('#reveal').css('-moz-transform-origin', '0 0');
	$('#reveal').css('-o-transform-origin', '0 0');
	$('#reveal').css('-ms-transform-origin', '0 0');
	
	
	$('#popreveal').css('-webkit-transform', scale);
	$('#popreveal').css('-moz-transform', scale);
	$('#popreveal').css('-o-transform', scale);
	$('#popreveal').css('-ms-transform', scale);
	
	$('#popreveal').css('-moz-transform-origin', '0 0');
	$('#popreveal').css('-webkit-transform-origin', '0 0');
	$('#popreveal').css('-moz-transform-origin', '0 0');
	$('#popreveal').css('-o-transform-origin', '0 0');
	$('#popreveal').css('-ms-transform-origin', '0 0');
	
	

	var bgScale = bgWidth + " " + bgHeight;
	//alert(bgScale);
	//$('#content_bg').css('background-size', bgScale);

	$('#reveal').css('margin-top', margins);
	$('#reveal').css('margin-left', marginsLeft);
	//$('#popreveal').css('margin-top', margins);
	
	var scaleToMoveX = 220*scaleW;
	var scaleToMoveY = 120*scaleH;
	$('#popreveal').css('top',scaleToMoveY+'px');
	$('#popreveal').css('left',scaleToMoveX+'px');
}

function updateVariablePos(){
	//var shiftY;
	//var shiftX;
	shiftSigY = 0;
	shiftSigX = 0;
	switch(parseInt(currentTheme)){
		case 1:
			shiftY = -50;
			shiftX = 5;//.9?
			shiftSigY = -11;
		break;
		case 2:
			shiftY = -46;
			shiftX = 0;//.9?	
			shiftSigY = -11;
		break;
		case 3:
			shiftY = -42;
			shiftX = -10;//.9?
			shiftSigY = -20;
		break;
		case 4:
			shiftY = -48;
			shiftX = 10;//.9?
		break;
		case 5:
			shiftY = -28;
			shiftX = 20;//.9?
			$('#sig').css('display', 'none');
		break;
		case 6:
			shiftY = -32;
			shiftX = 0;//.9?
			shiftSigY = 13;
		break;
		case 7:
			shiftY = -35;
			shiftX = 0;//.9?
			shiftSigY = -32;
		break;
		case 8:
			shiftY = -51;
			shiftX = 23;//.9?	
			shiftSigY = -21;
		break;
		case 9:
			shiftY = -37;
			shiftX = 6;//.9?
			shiftSigY = -7;
		break;
		case 10:
			shiftY = -20;
			shiftX = 20;//.9?
			$('#sig').css('display', 'none');
		break;
		case 11:
			shiftY = -32;
			shiftX = -5;//.9?
			shiftSigY = -7;
		break;
		case 12:
			shiftY = -40;
			shiftX = 0;//.9?
		break;
		case 13:
			shiftY = -21;
			shiftX = 18;//.9?
			$('#sig').css('display', 'none');
		break;
		case 14:
			shiftY = -57;
			shiftX = 3;//.9?
			shiftSigY = -17;
		break;
		case 15:
			shiftY = -31;
			shiftX = 3;//.9?
		break;
		case 16:
			shiftY = -33;
			shiftX = -12;//.9?
			shiftSigY = 7;
		break;
		case 17:
			shiftY = -25;
			shiftX = 18;//.9?
			$('#sig').css('display', 'none');
		break;
		case 18:
			shiftY = -27;
			shiftX = -4;//.9?
		break;
	}
	
	$('#custom').css('width',"300px")
	//$('#custom').css('text-align',"left")
				
	setNamePos(
		(parseFloat(generalStyles.nameX)+shiftX),
		(parseFloat(generalStyles.nameY)+shiftY)
	);
	setDatePos(
		(parseFloat(generalStyles.dateX)+shiftX),
		(parseFloat(generalStyles.dateY)+shiftY - 2)
	);
	setCustomPos(
		(parseFloat(generalStyles.customX)+shiftX-20),
		(parseFloat(generalStyles.customY)+shiftY)
	);
	setScorePos(
		(parseFloat(generalStyles.scoreX)+shiftX),
		(parseFloat(generalStyles.scoreY)+shiftY)
	);
	setSigPos(
		(parseFloat(450)+shiftSigX),
		(parseFloat(328)+shiftSigY)
	);	
}

function setNamePos(x, y){$('#name').css('left',x+'px');$('#name').css('top', y+'px');}
function setScorePos(x, y){$('#score').css('left',x+'px');$('#score').css('top', y+'px');}
function setCustomPos(x, y){$('#custom').css('left',x+'px');$('#custom').css('top', y+'px');}
function setDatePos(x, y){$('#date').css('left',x+'px');$('#date').css('top', y+'px');}
function setSigPos(x, y){$('#sig').css('left',x+'px');$('#sig').css('top', y+'px');}

function updateVariableVisibility(){
	if(generalStyles.nameOn=="false"){$('#name').css('display','none');}else{$('#name').css('display','visible');}
	if(generalStyles.dateOn=="false"){$('#date').css('display','none');}else{$('#date').css('display','visible');}
	if(generalStyles.customOn=="false"){$('#custom').css('display','none');}else{$('#custom').css('display','visible');}
	if(generalStyles.scoreOn=="false"){$('#score').css('display','none');}else{$('#score').css('display','visible');}
}

//$(document).ready(function() {
function addClickHandlers() {
	
	$("#reveal").fadeIn();
	
	
	 //$('ul#tools').prepend('<li class="print"><a href="#print">Click me to print</a></li>');
	 $('#print').click(function() {	
	 $("#popreveal").hide();					
	   	 	var scale = $('#reveal').css('-webkit-transform');
	 	$('#reveal').css('-webkit-transform' , "scale(1)");
	 	window.print();
	 	$('#reveal').css('-webkit-transform' , scale);	
	   return false;
	 });
	 
	 $('#printtxt').click(function() {	
	 $("#popreveal").hide();					
	   	 	var scale = $('#reveal').css('-webkit-transform');
	 	$('#reveal').css('-webkit-transform' , "scale(1)");
	 	window.print();
	 	$('#reveal').css('-webkit-transform' , scale);	
	   return false;
	 });
	

	$(document).keydown(function(e){	
	//console.log("key press",btnClicked,e.target.firstChild,e.keyCode)
		if(!stillEditing){
			$("#popreveal").hide();
			if(e.keyCode  == 13 || e.keyCode  == 32) {
			
				var scale = $('#reveal').css('-webkit-transform');
			$('#reveal').css('-webkit-transform' , "scale(1)");
			window.print();
			$('#reveal').css('-webkit-transform' , scale);	
		   return false;
		}
	 }});
	
}

//sound values
var theSnd = null;
function pauseSound() {
	if(theSnd != null) // && theSnd.src != wavePath)
	{ theSnd.pause();}
}

function play_sound(url){
	theSnd = new Audio(url);
	theSnd.load();
	theSnd.play();	
}
////////////////////////////////////////////////////////

function setupCustomStyles() {
	$('.items').css('font-weight', 'bold');
	$('#print').css('cursor', 'pointer');
	
	//disbaling selection on text
	$('#Description').disableTextSelect();
	$('#name').disableTextSelect();
	$('#score').disableTextSelect();
	$('#date').disableTextSelect();
	$('#custom').disableTextSelect();
	$('#sig').disableTextSelect();
	$('#intTitle').disableTextSelect();
	
	if(ID_Print.length<=5){
		$('#printtxt').css('margin-right', '-80px');
	}else{
		$('#printtxt').css('margin-right', '-90px');
	}
	$('#printtxt').text(ID_Print);
}