$(document).ready(function () {
	//All variables
	var APP = {};
	APP.count = 0;
	APP.color;
	APP.color2;
	APP.first;
	APP.second;

	//Event
	$("li").on("click", flipOver);
	
	function flipOver() {
		if (APP.count === 0) {
			APP.count++;
			//var count = 0;
			APP.first = $(this);
			APP.color = $(this).attr("data-color");
			$(this).addClass("clicked");

			$(this).css({
				background: "url(images/" + APP.color + ".jpg)" 
			});
		} else {
			if($(this).hasClass("clicked")){
				return false
			}
			$("li").removeClass("clicked");
			APP.count = 0;
			//var count = 0;
			APP.second = $(this);
			APP.color2 = $(this).attr("data-color");

			$(this).css({
				background: "url(images/" + APP.color2 + ".jpg)" 
			});
			
			//Time Out for that we can see the second card
			setTimeout(function(){
			if (APP.color === APP.color2) {
				APP.first.css({
					opacity: "0"
				});
				APP.second.css({
					opacity: "0"
				});
			} else {
				APP.first.css({
					background: "url('../images/card-cover.jpg')"
				});
				APP.second.css({
					background: "url('../images/card-cover.jpg')"
				});
			}
			},700);
		}

	}
});