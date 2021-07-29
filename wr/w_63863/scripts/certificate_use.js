//holder arrays
var nodeLeftProperty;
var textArray = [];
var buttonArray = [];
var imageIDArray = [];
var soundIDArray = [];
var imageArray = [];
var soundArray = [];
var buttonXArray= [];
var picAlignArray=[];
var color;
var face;
var style;
var size;
var align;
var contentStyles = new Object();
var buttonStyles = new Object();
var headerStyles = new Object();
var instStyles = new Object();
var generalStyles = new Object();
var sigStyles = new Object();
var width;
var height;
var customVar; 
var sigVar; 
var scoreVar;
var nameVar;
var handle;
var tabindex = 1000;
var ID_January
var ID_February
var ID_March
var ID_April
var ID_May
var ID_June
var ID_July
var ID_August
var ID_September
var ID_October
var ID_November
var ID_December
var ID_Print
var ID_Pleaseenteryour
var ID_Ok
var ID_Name

var isDevice = false

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

var myWidgetiFrame;
var divSlide;
var currentOrientation;
var deviceType = "";
var isPresenter = false;

var stillEditing = false;
		
certificateUse1 = {
	onLoad: function(){
		if ( ! this.captivate )
			return;
		
		handle = this.captivate.CPMovieHandle;
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			deviceType = navigator.platform
			isDevice = true;
		}
		if(typeof this.captivate.CPMovieHandle.isPresenter == 'function')
			isPresenter = this.captivate.CPMovieHandle.isPresenter();	
		
		currentOrientation = window.orientation;

		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		//this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		mainCPNamespace = this.movieProps.getCpHandle();
		isResponsiveProject = mainCPNamespace.responsive;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.content = '';
		this.currentTheme
		this.updateData();
		this.doUpdate();                               

		//Captivate Event listener
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		
	},

	updateData: function(){
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text();
		
		var ID_January_txt = initresultDoc.find('#ID_January');
        if (ID_January_txt){
            if (ID_January_txt.find('string')){
                ID_January = ID_January_txt.find('string').text();
            }
        }
		
		var ID_February_txt = initresultDoc.find('#ID_February');
        if (ID_February_txt){
            if (ID_February_txt.find('string')){
                ID_February = ID_February_txt.find('string').text();
            }
        }
		
		var ID_March_txt = initresultDoc.find('#ID_March');
        if (ID_March_txt){
            if (ID_March_txt.find('string')){
                ID_March = ID_March_txt.find('string').text();
            }
        }
		
		var ID_April_txt = initresultDoc.find('#ID_April');
        if (ID_April_txt){
            if (ID_April_txt.find('string')){
                ID_April = ID_April_txt.find('string').text();
            }
        }
		
		var ID_May_txt = initresultDoc.find('#ID_May');
        if (ID_May_txt){
            if (ID_May_txt.find('string')){
                ID_May = ID_May_txt.find('string').text();
            }
        }
		
		var ID_June_txt = initresultDoc.find('#ID_June');
        if (ID_June_txt){
            if (ID_June_txt.find('string')){
                ID_June = ID_June_txt.find('string').text();
            }
        }
		
		var ID_July_txt = initresultDoc.find('#ID_July');
        if (ID_July_txt){
            if (ID_July_txt.find('string')){
                ID_July = ID_July_txt.find('string').text();
            }
        }
		
		var ID_August_txt = initresultDoc.find('#ID_August');
        if (ID_August_txt){
            if (ID_August_txt.find('string')){
                ID_August = ID_August_txt.find('string').text();
            }
        }
		
		var ID_September_txt = initresultDoc.find('#ID_September');
        if (ID_September_txt){
            if (ID_September_txt.find('string')){
                ID_September = ID_September_txt.find('string').text();
            }
        }
		
		var ID_October_txt = initresultDoc.find('#ID_October');
        if (ID_October_txt){
            if (ID_October_txt.find('string')){
                ID_October = ID_October_txt.find('string').text();
            }
        }
		
		var ID_November_txt = initresultDoc.find('#ID_November');
        if (ID_November_txt){
            if (ID_November_txt.find('string')){
                ID_November = ID_November_txt.find('string').text();
            }
        }
		
		var ID_December_txt = initresultDoc.find('#ID_December');
        if (ID_December_txt){
            if (ID_December_txt.find('string')){
                ID_December = ID_December_txt.find('string').text();
            }
        }
		
		var ID_Print_txt = initresultDoc.find('#ID_Print');
        if (ID_Print_txt){
            if (ID_Print_txt.find('string')){
                ID_Print = ID_Print_txt.find('string').text();
            }
        }
		
		var ID_Pleaseenteryour_txt = initresultDoc.find('#ID_Pleaseenteryour');
        if (ID_Pleaseenteryour_txt){
            if (ID_Pleaseenteryour_txt.find('string')){
                ID_Pleaseenteryour = ID_Pleaseenteryour_txt.find('string').text();
            }
        }
		
		var ID_Ok_txt = initresultDoc.find('#ID_Ok');
        if (ID_Ok_txt){
            if (ID_Ok_txt.find('string')){
                ID_Ok = ID_Ok_txt.find('string').text();
            }
        }
		
		var ID_Name_txt = initresultDoc.find('#ID_Name');
        if (ID_Name_txt){
            if (ID_Name_txt.find('string')){
                ID_Name = ID_Name_txt.find('string').text();
            }
        }
		
		//Few lines of code added to cater to additions made fro theme colors and to retain the old XML structure 
		var tempStringStartLoc = thexml.indexOf("<");
		var tempStringEndLoc = thexml.lastIndexOf(">")+1;
		thexml = thexml.substring(tempStringStartLoc, tempStringEndLoc)  
		
		var result = jQuery.parseXML( thexml );
		var resultDoc = jQuery( result );
		//alert(jQuery.isXMLDoc(resultDoc));
		
		//var theButtons = resultDoc.find( 'buttons' ); 
		var theTextProps = resultDoc.find( 'textProperties' );
		var theContentProps = resultDoc.find( 'buttonContent' );
		var theButtonProps = resultDoc.find( 'buttonLabel' );
		var theHeaderProps = resultDoc.find( 'certifTitle' );
		var theSigProps = resultDoc.find( 'certifSig' );
		var theInstProps = resultDoc.find( 'certificate' );
		currentTheme = theInstProps.attr("id"); //theTextProps.children('general').attr("themeNum");
			
		headerStyles.color = theHeaderProps.children('color').attr("textColor");
		headerStyles.face = theHeaderProps.children('font').attr("face");
		headerStyles.italic = theHeaderProps.children('textDecoration').attr("italic");
		headerStyles.bold = theHeaderProps.children('textDecoration').attr("bold");
		headerStyles.size = theHeaderProps.children('font').attr("size");
		headerStyles.align = theHeaderProps.children('font').attr("align");	
		
		instStyles.color = theContentProps.children('color').attr("textColor");
		instStyles.face = theContentProps.children('font').attr("face");
		instStyles.italic = theContentProps.children('textDecoration').attr("italic");
		instStyles.bold = theContentProps.children('textDecoration').attr("bold");
		instStyles.size = theContentProps.children('font').attr("size");
		instStyles.align = theContentProps.children('font').attr("align");	
		
		sigStyles.color = theSigProps.children('color').attr("textColor");
		sigStyles.face = theSigProps.children('font').attr("face");
		sigStyles.italic = theSigProps.children('textDecoration').attr("italic");
		sigStyles.bold = theSigProps.children('textDecoration').attr("bold");
		sigStyles.size = theSigProps.children('font').attr("size");
		sigStyles.align = "left"//theSigProps.children('font').attr("align");
		
		generalStyles.date = theTextProps.children('general').attr('date');
		generalStyles.customOn = theTextProps.children('general').attr('cOn');
		generalStyles.customX = theTextProps.children('general').attr('customX');
		generalStyles.customY = theTextProps.children('general').attr('customY');
		generalStyles.scoreOn = theTextProps.children('general').attr('sOn');
		generalStyles.scoreX = theTextProps.children('general').attr('scoreX');
		generalStyles.scoreY = theTextProps.children('general').attr('scoreY');
		generalStyles.dateOn = theTextProps.children('general').attr('dOn');
		generalStyles.dateX = theTextProps.children('general').attr('dateX');
		generalStyles.dateY = theTextProps.children('general').attr('dateY')-12;
		generalStyles.nameOn = theTextProps.children('general').attr('nOn');
		generalStyles.nameX = theTextProps.children('general').attr('nameX');
		generalStyles.nameY = theTextProps.children('general').attr('nameY');
		generalStyles.sigOn = theTextProps.children('general').attr('sigOn');
		generalStyles.sigX = theTextProps.children('general').attr('sigX');
		generalStyles.sigY = theTextProps.children('general').attr('sigY')
		generalStyles.customVarHolder = theTextProps.children('general').attr('customVar');
		generalStyles.sigHolder = theTextProps.children('general').attr('sigVar');
		
		if((currentTheme == "1") || (currentTheme == "9") || (currentTheme == "11") || (currentTheme == "15") || (currentTheme == "18"))
		{
			this.title = theInstProps.attr("headerOne");
			generalStyles.certif = theInstProps.attr("one");
			generalStyles.sig = theInstProps.attr("signature");
		}
		if((currentTheme == "2") || (currentTheme == "3") || (currentTheme == "12"))
		{
			this.title = theInstProps.attr("headerThree");
			generalStyles.certif = theInstProps.attr("three");
			generalStyles.sig = theInstProps.attr("signature");
		}
		if((currentTheme == "4") || (currentTheme == "6") || (currentTheme == "7") || (currentTheme == "8") || (currentTheme == "14") || (currentTheme == "16"))
		{
			this.title = theInstProps.attr("headerFour");
			generalStyles.certif = theInstProps.attr("four");
			generalStyles.sig = theInstProps.attr("signature");
		}
		if((currentTheme == "5") || (currentTheme == "10") || (currentTheme == "13") || (currentTheme == "17"))
		{
			this.title = theInstProps.attr("headerFive");
			generalStyles.certif = theInstProps.attr("five");
			generalStyles.sig = theInstProps.attr("signature");
		}
		
		var oldstring = escape(generalStyles.certif);
		generalStyles.certif = unescape(oldstring.replace(/%0A/gi,"<br>").replace(/%0D/gi,"<br>").replace(/%20/gi,"&nbsp;"));
		
		oldstring = escape(generalStyles.sig);
		generalStyles.sig = unescape(oldstring.replace(/%0A/gi,"<br>").replace(/%0D/gi,"<br>"));
		
		sigVar = generalStyles.sigHolder
				
		//score
		if(!isPresenter){
			scoreVar = this.varHandle.cpInfoPercentage;
			nameVar = this.varHandle.cpQuizInfoStudentName;
			//custom
			var customVarName = generalStyles.customVarHolder
			customVar = this.varHandle[customVarName];	
		}	
	},
	
	doUpdate: function() {
		updateVariablePos();
		updateVariableVisibility();
		//alert(currenttheme);
		
		//init the other elements on the page		
		var elem = document.getElementById('intTitle');
		elem.innerHTML = this.title;
		elem.tabIndex = tabindex
		elem = document.getElementById('Description');
		elem.innerHTML = '<p style="word-wrap: break-word;">'+ generalStyles.certif + '</p>';
		elem.tabIndex = tabindex + 1;
		
		//setup months
		var monthArray=new Array();
		monthArray[1]= ID_January;
		monthArray[2]= ID_February;
		monthArray[3]= ID_March;
		monthArray[4]= ID_April;
		monthArray[5]= ID_May;
		monthArray[6]= ID_June;
		monthArray[7]= ID_July;
		monthArray[8]= ID_August;
		monthArray[9]= ID_September;
		monthArray[10]= ID_October;
		monthArray[11]= ID_November;
		monthArray[12]= ID_December;
		

		//setupdate
		var currentTime = new Date()
		var month = currentTime.getMonth() + 1
		var day = currentTime.getDate()
		var year = currentTime.getFullYear()
		var dateVal;
		
		
		if (generalStyles.date == 1) {
			dateVal = monthArray[month] + " " + day + ", " + year
		} else if (generalStyles.date == 2) {
			dateVal = month + "/" + day + "/" + year
		} else if (generalStyles.date == 3) { 
			dateVal = day + "/" + month + "/" + year
		} else if (generalStyles.date == 4) {
			dateVal = year + "-" + month + "-" + day
		} else {
			dateVal = day + " " + monthArray[month] + " " + year
		}
	


		elem = document.getElementById('date');
		elem.innerHTML += "<div class='items' tabindex="+(tabindex+5)+">" + dateVal + "</div>";			
		
		//setup sig
		elem = document.getElementById('sig');
		elem.innerHTML += "<div class='items1'  tabindex="+(tabindex+4)+">" + generalStyles.sig + "</div>";			
					
		var button_elem;
		var body;
		var tabCount = textArray.length;
		var header
		//600, 14, 4
		
		changeTheme("themes/certificateTheme" + currentTheme + ".css", "");
		
		elem = document.getElementById("content_holder");
		elem.innerHTML = "<img src=\"images/Theme" + currentTheme + ".png\"></img>";
		
		setupStyle("#intTitle", headerStyles)
		setupStyle("#Description", instStyles)
		setupStyle(".items", instStyles)
		setupStyle(".items1", sigStyles)
		setupCustomStyles();
		
		//setup score
		if(!isPresenter){
			//setup name
			if (nameVar != undefined) {
				elem = document.getElementById('name');
				elem.innerHTML += "<div class='items' id='setname' tabindex="+(tabindex+2)+">" + nameVar + "</div>";			
			}
			$("#popreveal").hide();
		}else{
			certificateInit();
		}
		
		if (scoreVar != undefined) {
			elem = document.getElementById('score');
			elem.innerHTML += "<div class='items' tabindex="+(tabindex+3)+">" + scoreVar + "%</div>";			
		}
			
		//setup custom
		if (customVar != undefined) {
			elem = document.getElementById('custom');
			elem.innerHTML += "<div class='items1'  tabindex="+(tabindex+6)+">" + customVar + "</div>";			
		}		
		resizeInteraction(width,height);
		addClickHandlers(); //setup the click handlers
		
	}
};

certificate_use = function (){
	return certificateUse1;
}


var nametextField
function certificateInit(){
	canvas = document.getElementById("popup");
	exportRoot = new lib.CertificateHtml();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	nametextField = document.getElementById("nameText")
	
	nametextField.defaultValue = ID_Name
	openPopUp();
	exportRoot.addDef.addEventListener("click", setname);
	if(isDevice){
		$("#name").click(function(){
		  openPopUp()
		});
	}else{
		$("#name").dblclick(function(){
		  openPopUp()
		});
	}
	
}

function openPopUp(){
	stillEditing = true;
	$("#popreveal").show();
}

function setname(){
	stillEditing = false;
	$("#popreveal").hide();
	if($(nametextField).val() == ""){
		nametextField.value = "Name"
	}
	nameVar = $(nametextField).val();	
	elem = document.getElementById('name');
	elem.innerHTML += "<div class='items' id='setname' tabindex="+(tabindex+2)+">" + nameVar + "</div>";
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}