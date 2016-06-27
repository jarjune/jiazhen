$(document).ready(function(){
	$(".mmr1 i").mouseenter(function(){
		$(".mmr1 i").css("color","#aaa");
		//获得评分分数
		score = $(".mmr1 i").index($(this))+1;
		$("#score").val(score);
		$(".mmr1 i:lt("+score+")").css("color","red");
	});
	$(".mmr2 textarea").keyup(function(){
		len = $(this).val().length
		if(len<=100)
			$(".mmr2 b").text(100-len)
		else
			$(".mmr2 b").text(0)
	});
	$(".mmr2 form").submit(function(){
		if ($("#score").val()>0 && $("#pj").val().length<=100 && $("#pj").val().length>0)
			return true;
		else
			return false;
	});
});