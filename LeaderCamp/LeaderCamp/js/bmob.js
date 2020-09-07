Bmob.initialize("b92001779135a1f5", "123654");

function jumpSecondPage(event) {
	var a = document.getElementById("U").value;
	var b = document.getElementById("P").value;
	event.preventDefault(event);	
	if (a == "") {
		alert('请输入账号')
		
	}
	if (b == "") {
		alert('请输入密码')
		
	} else {
		//以用户名+密码的方式进行登陆
		Bmob.User.login(a, b).then(res => {
			
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');

			//若登陆成功更新用户缓存
			Bmob.User.updateStorage(res.objectId).then(res => {
				//更新缓存成功，跳转页面
				//跳转到第二个页面-不传参数，href请使用相对路径
				window.location.href = "home.html";
				
				
			}).catch(err => {
				
			});
		}).catch(err => {
			
			alert('账号或密码错误')
			
		});
	}


}
