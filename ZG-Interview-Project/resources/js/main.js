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
});