$(function(){
	$(".last").hover(function(){
		$(".list").show(200);
	},function(){
		$(".list").hide(200);
	});
})
function quit(){
	window.location.href = "login.html";
}
function tips() {
	alert("项目正在进行中，尽请期待！")
}