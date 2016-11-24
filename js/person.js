$(function(){
	$(".last").hover(function(){
		$(".list").show(200);
	},function(){
		$(".list").hide(200);
	});

	var m = 3;
	$(".num").click(function(){
		$(".num").removeClass("on");
		$(this).addClass("on");
		m = $(this).index();
	});
	$(".right").click(function(){
		if(m<$(".page li").length-4) {
			m = m+1;
		}else{
			m = $(".page li").length-4;
		}
		$(".page li").removeClass("on");
		$(".page li").eq(m).addClass("on");
	});
	$(".left").click(function(){
		if(m>3) {
			m = m-1;
		}else{
			m = 3;
		}
		$(".page li").removeClass("on");
		$(".page li").eq(m).addClass("on");
	});
	$(".first").click(function(){
		$(".page li").eq(3).addClass("on").siblings().removeClass("on");
		m = $(this).index()+2;
	});
	$(".last").click(function(){
		$(".page li").eq($(".page li").length-4).addClass("on").siblings().removeClass("on");
		m = $(this).index()-2;
	});
})
function quit(){
	window.location.href = "login.html";
}
function detail(){
	window.location.href = "person-detail.html";
}