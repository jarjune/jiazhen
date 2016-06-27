$(document).ready(function(){
	$(".city a").click(function(){
		$(".city a").removeClass("click-text");
		$(this).addClass("click-text");
	});
	$(".company a").click(function(){
		$(".company a").removeClass("click-text");
		$(this).addClass("click-text");
	});
});