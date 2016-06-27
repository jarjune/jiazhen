$(document).ready(function(){
	$("#ulid li a").click(function(){
		$("#ulid li a").removeClass("color-cd0000");
		$(this).addClass("color-cd0000");
	});
});