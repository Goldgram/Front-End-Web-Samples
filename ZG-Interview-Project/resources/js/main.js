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
  /* custom zoom js */
	$("#popUpZoomImage").mousemove(function(event) {
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
  })
  .mouseleave(function() {
    $(this).children(":first").removeClass("tileBackgroundImage");
    $(this).children(":first").next().hide();
  });
});
