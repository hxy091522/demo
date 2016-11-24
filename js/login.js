$(function(){
	$(".btn2").click(function(){
		$(".login").hide();
		$(".regist").show();
		$(".title img").attr("src","imgs/logo2.png")
	});
	$(".btn2").click(function(){
		$(".login").hide();
		$(".regist").show();
	});
})

function regist() {
	var user = $("#user").val();
	var password1 = $("#password1").val();
	var password1 = $("#password2").val();
	var email = $("#user").val();
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
	}else if(email == null || "" == email){
		alert("邮箱为空");
		return false;
	}else{
		$.ajax({
		type:"get",
		url:"",
		success:function(){
			window.location.href = "";
		},error:function(){
			alert("服务器异常，请联系管理员");
		}
		});
	}
	
}

function login(){
	var user = $("#user").val();
	var password = $("#password").val();
	if(user == null || user == ""){
		alert("用户名不能为空");
		return false;
	}else if(password == null || password == ""){
		alert("密码为空");
		return false;
	}else{
		$.ajax({
		type:"get",
		url:"",
		success:function(){
			window.location.href = "sort.html";
		},error:function(){
			alert("服务器异常，请联系管理员");
		}
		});
	}
}