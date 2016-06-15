$(document).ready(function () {
	//All variables
	var APP = {};
	APP.count = 0;
	APP.color;
	APP.color2;
	APP.first;
	APP.second;
	APP.imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

	//Method for shuffle image indexes
	Array.prototype.shuffle = function () {
		return this.sort(function () {
			return 0.5 - Math.random();
		});
	};
	APP.imageIndex.shuffle();
	
	//Adding random photos
	var li = $("li").length;
	for (var i = 0; i < li; i++) {
		$("body li:eq(" + i + ")").attr("data-number", APP.imageIndex[i]++);
	}



	//Event
	$("li").on("click", flipOver);

	function flipOver() {
		if (APP.count === 0) {
			APP.count++;
			//var count = 0;
			APP.first = $(this);
			APP.color = $(this).attr("data-number");
			$(this).addClass("clicked");

			$(this).css({
				background: "url(images/" + APP.color + ".jpg)"
			});
		} else {
			if ($(this).hasClass("clicked")) {
				return false
			}
			APP.first.removeClass("clicked");
			APP.count = 0;
			//var count = 0;
			APP.second = $(this);
			APP.color2 = $(this).attr("data-number");

			$(this).css({
				background: "url(images/" + APP.color2 + ".jpg)"
			});

			//Time Out for that we can see the second card
			setTimeout(function () {
				if (APP.color === APP.color2) {
					APP.first.addClass("clicked");
					APP.second.addClass("clicked");
					APP.first.animate({
						opacity: "0"
					},300);
					APP.second.animate({
						opacity: "0"
					},300);
				} else {
					APP.first.css({
						background: "url('images/card-cover.jpg')"
					});
					APP.second.css({
						background: "url('images/card-cover.jpg')"
					});
				}
			}, 700);
		}

	}
});

