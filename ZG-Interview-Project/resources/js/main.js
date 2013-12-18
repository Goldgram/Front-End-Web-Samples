$(document).ready(function() {
	/* show/hide the login div*/
	$("#toggleLogin").click(function (){
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
    var xPercentage = parseInt((event.offsetX*100)/$(this).width());
    var yPercentage = parseInt((event.offsetY*100)/$(this).height());
    $(this).css('backgroundPosition', xPercentage+"% "+yPercentage+"%");
  });
	// show and hide custom zoom
  $(".showHideideCustomZoom").click(function (){
		$("#popUpDivOpaque,#popUpZoomImage,#zoomCancel").toggle();
  });
});
