var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

var myWidgetiFrame;
var myWidgetFrameParentDiv
var newheight

var movieWidth;
var movieHeight;

var width
var height

var handle;
resourceUse1 = {
	onLoad: function(){
		if ( ! this.captivate )
			return;
			
		handle = this.captivate.CPMovieHandle;
			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if ( ! this.movieProps )
				return;
			this.varHandle = this.movieProps.variablesHandle;
			//this.eventDisp = this.movieProps.eventDispatcher;
			evtHandle = this.movieProps.eventDispatcher;
			mainCPNamespace = this.movieProps.getCpHandle();
			isResponsiveProject = mainCPNamespace.responsive;
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
			this.internalImage = '';
			this.externalImage = '';
			this.description = '';
			this.myVar = '';
			this.myVar1 = '';
			var size = this.OpenAjax.getSize();
			width = size.width;
			height = size.height;
			this.ta_fontname = '';
			this.ta_fontsize = '';
			this.ta_bold = '';
			this.ta_underline = '';
			this.ta_italic = '';
			this.ta_align = '';
			this.ta_textcolr = '';
			this.ta_highlightcolor = '';
			
			movieWidth = parseInt(size.width.split("px")[0]);
			movieHeight = parseInt(size.height.split("px")[0]);
			
			//Captivate Event listener
			evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			this.updateData();
			//this.doUpdate();
			var tempmyWidgetiFrame = (window.parent.document.getElementById(window.name))
			if(handle.isWidgetVisible() == false){
				tempmyWidgetiFrame.style.visiblility = false;
			}else{
				tempmyWidgetiFrame.style.visiblility = true;
			}
		
	},

	updateData: function(){
		var id = 0;
		var result = jQuery.parseXML( this.xmlStr );
		var resultDoc = jQuery( result );
		var strProp = resultDoc.find( 'string' ).text();
		
		this.myVar = $(strProp).find('defaultText').text();
		this.ta_fontname = $(strProp).find('font').attr('face');
		this.ta_fontsize = $(strProp).find('font').attr('size');
		this.ta_bold = $(strProp).find('textDecoration').attr('bold');
		this.ta_underline = $(strProp).find('textDecoration').attr('underline');
		this.ta_italic = $(strProp).find('textDecoration').attr('italic');	
		this.ta_align = $(strProp).find('textDecoration').attr('align');	
		this.ta_textcolr = $(strProp).find('color').attr('textColor');
		this.ta_highlightcolor = $(strProp).find('color').attr('highlightColor');
		this.noborderVar = $(strProp).find('color').attr('highlightColor')
		
		var elem = document.getElementById( 'textarea_display' );
		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		myWidgetiFrame = window.parent.document.getElementById(window.name);
		if(myWidgetiFrame){
			var h = myWidgetiFrame.style.height + 30 + "px";
			var w = myWidgetiFrame.style.width;
		}
		myWidgetFrameParentDiv = myWidgetiFrame.parentElement.parentElement;
			
		if ( elem ) {
			elem.innerHTML = this.myVar;
			
			$(elem).width("100%");
			var hg = myWidgetFrameParentDiv.style.height 
			$(elem).height(hg );
			//$('#textarea_display').change(function(){$(this).css("font",this.ta_fontname)});
			elem.style.fontFamily = this.ta_fontname;
			//elem.style.fontSize =  Number(this.ta_fontsize);
			elem.style.fontSize =  this.ta_fontsize * "0.06" +"em";
		
			if(this.ta_underline == "true")	{
				elem.style.textDecoration = "underline";
			}
			if(this.ta_bold == "true"){
				elem.style.fontWeight = "bold";
			}
			if(this.ta_italic == "true"){
				elem.style.fontStyle = "italic";
			}
			
			elem.style.textAlign = this.ta_align;
			
			var color = this.ta_textcolr ;
			elem.style.color = toHex(color) ;
			
			var checkNoHighlight = $(strProp).find('nohighlight').text();
			if(checkNoHighlight == "true"){
				elem.style.backgroundColor =  "transparent"
			}else{
				elem.style.backgroundColor = toHex(this.ta_highlightcolor );
			}
			elem.style.overflow = "auto";
			
			var noborder = $(strProp).find('noborder').text();
			if(noborder == "true"){
				elem.style.border =  "none";
			}else{
				elem.style.border =  "show"
			}
			
		}
		
		var checkreadonly = $(strProp).find('readonly').text();	
		if(checkreadonly == "true"){
			document.getElementById("textarea_display").readOnly =  true;
		}else{
			document.getElementById("textarea_display").readOnly =  false;
		}
		
		this.myVar1 = $(strProp).find('varName').text();	
		var msg = this.myVar;
		msg = msg.replace(/\n/g,"<br />");
		if(this.varHandle[this.myVar1] != ''){
			msg = this.varHandle[this.myVar1];
			$("#textarea_display").html(msg)
		}
		this.varHandle[this.myVar1] = msg;
		var self = this;
	
		$("#textarea_display").on("input" , function(){	
			console.log('sdf')
			var msg1 = this.value;
			msg1 = msg1.replace(/\n/g,"<br />");	
			self.varHandle[self.myVar1] = msg1;
		});
		
		elem = null;
		
		var hgt = myWidgetFrameParentDiv.style.height.split("px");
		newheight = parseInt(hgt) + 30 ;
		myWidgetiFrame.style.width = myWidgetFrameParentDiv.style.width;
		myWidgetiFrame.style.height = newheight + "px"
		
		resizeInteraction(width,height);
	},

	doUpdate: function(){
	}
};

toHex = function(myColor){
	var col = myColor.split('x');
	var retString = "#";
	if(col[1].length < 6)
					for(var i = col[1].length;i<6;i++)
									retString = retString+"0";
	return retString + col[1];
}

resource_use = function ()
{
	return resourceUse1;
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}	

function resizeInteraction(thewidth, theheight){

    /*var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    } else {
        scale = theheight / (movieHeight);
    }
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";*/
	
	var hgt = myWidgetFrameParentDiv.style.height.split("px");
	var	newheight = parseInt(hgt) -30;
	var wdt = myWidgetFrameParentDiv.style.width.split("px");
	var	newWidth = parseInt(wdt) -30;
	
	$('#textarea_display').css('height',newheight+"px")
	$('#textarea_display').css('width',newWidth+"px")
	
	/*$('#textarea_display').parent().css('-webkit-transform', scale);
    $('#textarea_display').parent().css('-moz-transform', scale);
    $('#textarea_display').parent().css('-o-transform', scale);
    $('#textarea_display').parent().css('-ms-transform', scale);
    $('#textarea_display').parent().css('-moz-transform-origin', '0 0');
    $('#textarea_display').parent().css('-webkit-transform-origin', '0 0');
    $('#textarea_display').parent().css('-moz-transform-origin', '0 0');
    $('#textarea_display').parent().css('-o-transform-origin', '0 0');
    $('#textarea_display').parent().css('-ms-transform-origin', '0 0');*/
	//console.log($("#textarea_display").css('height'))
}