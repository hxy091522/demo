
var timer=60; 
var btn = $("#code"); 
function time() {
	if(timer==0){
		btn.removeAttr("disabled");
		btn.val("获取验证码");
		timer = 60;	
	}else {
		btn.attr("disabled",true);
		btn.val("重新获取（"+timer+"）");
		timer--;
		setTimeout(time,1000);	
	}
}

function confirm() {
	var user = $("#user").val();
	var yzm = $("#yzm").val();
	var password1 = $("#password1").val();
	var password1 = $("#password2").val();
	if(user == null || user == ""){
		alert("用户名不能为空");
		return false;
	}else if(password1 == null || password1 == ""){
		alert("密码为空");
		return false;
	}else if(password2 == null || password2 == ""){
		alert("密码为空");
		return false;
	}else if(password1 != password2){
		alert("您输入的密码不一致，请重新输入");
		return false;
	}else{
		$.ajax({
			type:"get",
			url:"",
			success:function(){
				alert("恭喜您设置密码成功");
			},error:function(){
				alert("服务器异常，请联系管理员");
			}
		});
	}
}
