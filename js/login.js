$(document).ready(function(){
	var i = 1;
	setInterval(function(){
		$(".img-all img").not(i).css(
			"display", "none").eq(i).css(
			"display", "block");
		i++;
		if(i==$(".img-all img").length)
			i=0;
	},3000);
});