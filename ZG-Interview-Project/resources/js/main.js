$(document).ready(function() {
	/* show/hide the login div*/
	$(".toggleLogin").click(function (){
		$("#loginDiv").slideToggle("fast");
  });
  /*placeholder js becase placeholder attribute not suppored in ie8*/
  var placeholders = {};
  placeholders.loginEmail = "email";
  placeholders.loginPassword = "password";
  placeholders.newsletterFormInput = "Sign up for newsletter";
  $(".inputPlaceholders").click(function(){
		var thisID = $(this).attr("id");
		if ($("#"+thisID).val()===placeholders[thisID]) {
			$("#"+thisID).val("");
		}
	});
  /* custom zoom js desktop*/
	$("#popUpZoomImageDesktop").mousemove(function(event) {
    var xPos,yPos;
    // Firefox bug fix for offset x and y
    if(event.offsetX===undefined) {
      xPos = event.pageX-$(this).offset().left;
      yPos = event.pageY-$(this).offset().top;
    } else {
      xPos = event.offsetX;
      yPos = event.offsetY;
    }
    var xPercentage = parseInt(((xPos*100)/$(this).width()),10);
    var yPercentage = parseInt(((yPos*100)/$(this).height()),10);
    $(this).css({"background-position":xPercentage+"% "+yPercentage+"%"});
  });
  /* mobile zoom, TODO: currently working on touch screen functionality */
  $(".popUpZoomArrow").click(function (){
    var xAdd,yAdd,xPercentage,yPercentage;
    switch($(this).attr("id")){
      case "popUpZoomRight":
      xAdd = 25;
      yAdd = 0;
      break;
      case "popUpZoomDown":
      xAdd = 0;
      yAdd = 25;
      break;
      case "popUpZoomLeft":
      xAdd = -25;
      yAdd = 0;
      break;
      case "popUpZoomUp":
      xAdd = 0;
      yAdd = -25;
    }
    var backgroundPos = $("#popUpZoomImageTouchScreen").css("background-position").split(" ");
    if (backgroundPos[0].indexOf("px") !== -1) {
      xPercentage = parseInt(((backgroundPos[0].slice(0,-2)*100)/$("#popUpZoomImageTouchScreen").width()),10)+xAdd;
    } else {
      xPercentage = parseInt(backgroundPos[0].slice(0,-1),10)+xAdd;
    }
    if (backgroundPos[1].indexOf("px") !== -1) {
      yPercentage = parseInt(((backgroundPos[1].slice(0,-2)*100)/$("#popUpZoomImageTouchScreen").height()),10)+yAdd;
    } else {
      yPercentage = parseInt(backgroundPos[1].slice(0,-1),10)+yAdd;
    }
    $("#popUpZoomImageTouchScreen").css({"background-position":xPercentage+"% "+yPercentage+"%"});
    (xPercentage<=0) ? $("#popUpZoomLeft").hide() : $("#popUpZoomLeft").show();
    (xPercentage>=100) ? $("#popUpZoomRight").hide() : $("#popUpZoomRight").show();
    (yPercentage<=0) ? $("#popUpZoomUp").hide() : $("#popUpZoomUp").show();
    (yPercentage>=100) ? $("#popUpZoomDown").hide() : $("#popUpZoomDown").show();
  });
	// show and hide custom zoom
  $(".showHideideCustomZoom").click(function (){
		$("#popUpDivOpaque,#popUpZoomImage,#zoomCancel").toggle();
  });
  // show large image title
  $(".tileItem2").hover( function() {
     $("#tilePopUpText").animate({"right":"0"}, { duration: 200 });
  }, function() {
    $("#tilePopUpText").animate({"right":"-75%"}, { duration: 200 });
  });
  //hover prce display
  $(".hoverPrice").mouseenter(function() {
    $(this).children(":first").addClass("tileBackgroundImage");
    $(this).children(":first").next().show();
  }).mouseleave(function() {
    $(this).children(":first").removeClass("tileBackgroundImage");
    $(this).children(":first").next().hide();
  });
});
