$(document).ready(function () {

	var count = 0;
	var color;
	var color2;
	var first;
	var second;

	$("li").click(function () {
		if (count === 0) {
			count++;
			//var count = 0;
			first = $(this);
			color = $(this).attr("data-color");

			$(this).css({
				backgroundColor: color
			});
		} else {
			count = 0;
			//var count = 0;
			second = $(this);
			color2 = $(this).attr("data-color");

			$(this).css({
				backgroundColor: color2
			});
			if (color === color2) {
				first.css({
					opacity: "0"
				});
				second.css({
					opacity: "0"
				});
			} else {
				first.css({
					backgroundColor: "aqua"
				});
				second.css({
					backgroundColor: "aqua"
				});
			}
		}

	});
});