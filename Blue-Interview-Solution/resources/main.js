function users(dataUrl,elementId,presentation, animate) {// users list class for multiple instances
	/* perameters for the url of the data, 
		then the elemnet that the list will be added to,
		then the html to fill with the JSON, 
		and finally animation true/false
	*/
	var usersData = null, view = null;

	var drawList = function(elementId) {// draw user list to elementId param
		var userList = "";
		for(i in usersData) {
			userList+="<li class='usersClickEvent' usersJsHandler='showCard' usersId='"+i+"' ><p>"+usersData[i].name+"</p></li>";
		}
		$("#"+elementId).html("<ul class='usersList'>"+userList+"<ul/>");
	};

	var eventHandler = function(e) {// show/hide card event handler
		var target = $(this);
		if (target.attr("usersJsHandler")==="showCard") {
			showCard(target.attr("usersId"));
		} else {
			hideCards();
		}
	};

	var showCard = function(id) {
		if (!$(".usersCardContainer.for"+elementId).length) {
			if ($(".usersCardContainer").length) {//hide other types of cards
				hideCards();
			}
			var animateNow = true;
			$("#"+elementId).prepend("<div class='usersCardContainer for"+elementId+"' style='display:"+(animate ? "none" : "inline")+";'>"+view+"</div>");
		}
		// add any element attributes that match the JSON data
		for (i in usersData[id]) {
			if (i==="images") {
				for (j in usersData[id]["images"]) {
					for (k in usersData[id]["images"][j]) {
						$(".usersCardContainer ."+j).attr(k,usersData[id]["images"][j][k]);
					}
				}
			} else {
				$(".usersCardContainer ."+i).text(usersData[id][i]);
			}
		}
		if (animate && animateNow) { $(".usersCardContainer").fadeIn("slow"); }
	};

	var hideCards = function() { $(".usersCardContainer").remove(); };

	$.getJSON( dataUrl, function(data) {//get JSON data
		usersData = data;
		drawList(elementId);
	});
	$.get(presentation, function(data) { view = data; });//get presentation layer
	$(document).on("click", "#"+elementId+" .usersClickEvent", eventHandler);//add handler for this class instance
}
var heroes = new users("resources/heroData.json","heroList","heroCard.html",false);
var villain = new users("resources/villainData.json","villainList","villainCard.html",true);

