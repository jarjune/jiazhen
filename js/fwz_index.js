$(document).ready(function(){
	var this_val = 0;
	var this_price = 0;
	var this_num = 1;
	$(".p-title .p-title-1").click(function(){
		index = $(".p-title .p-title-1").index($(this));
		$(this).addClass("bg").siblings().removeClass("bg");
		if(index == 0){
			$(".list-all-1").show();
			$(".list-all-2,.list-all-3").hide();
		}
		if(index == 1){
			$(".list-all-2").show();
			$(".list-all-1,.list-all-3").hide();
		}
		if(index == 2){
			$(".list-all-3").show();
			$(".list-all-1,.list-all-2").hide();
		}
	});
	$(".popup-head i").click(function(){
		$(".popup,.zhezhao").hide();
	});
	$(".list a").click(function(){
		this_val = $(this).siblings(".list-info").find("#info-name").text();
		this_price = $(this).siblings(".list-price").find("#info-price").text();
		this_num = $("#popup-num").val();

		$("#popup-name").text(this_val);
		$("#popup-price").text(this_price);
		$("#popup-new-price").text(this_price*this_num);
		$(".popup,.zhezhao").show();
	});
	$("#popup-num").keyup(function(){
		this_num = $(this).val();
		$("#popup-new-price").text(this_price*this_num);
	});
	$(".popup-body form").submit(function(){
		
		if ($("#popup-time").val()!="" && $("#popup-num").val()>0 && $("#popup-num").val()!="") {
			return true;
		}
		else
			return false;
	});
});