$(function(){
	$(".last").hover(function(){
		$(".list").show(200);
	},function(){
		$(".list").hide(200);
	});
	$(".shenhe li").click(function(){
		var index = $(this).index();
		$(".shenhe li").removeClass("on");
		$(this).addClass("on").siblings().removeClass("on");
		$(".nothing").hide();
		$(".xinxi").eq(index).show().siblings(".xinxi").hide();
		
	});
})
function man(){
	window.location.href = "login.html";
}
function shop(){
	window.location.href = "login.html";
}
