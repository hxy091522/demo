$(function(){
	$("body").append(footer());
})
function footer() {
	return "<div class='footer'>"+
			"<div class='footer-box'>"+
			"<div class='footer-logo'><img src='imgs/footer-logo.png' alt=''></div>"+
			"<ul class='footer-list'>"+
			"<li>关于我们</li>"+
			"<li>|</li>"+
			"<li>联系我们</li>"+
			"<li>|</li>"+
			"<li>帮助中心</li>"+
			"<li>|</li>"+
			"<li>版本更新</li>"+
			"<li>|</li>"+
			"<li>在线交流</li>"+
			"<li>|</li>"+
			"<li>常见问题</li>"+
			"<li>|</li>"+
			"<li>服务热线：0592-3660007 (9:00 -18:00)</li></ul>"+
			"<div class='clearfloat bq'>©2002-2016 昱利信息版权所有 闽ICP备16002989号-1</div>"+
			"</div></div>";
}