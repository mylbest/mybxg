define(['jquery','cookie'],function($){
  
	       $('#loginBtn').click(function(){
	            $.ajax({
	                type:'post',
	                url:'/api/login',
	                data: $('#loginForm').serialize(),
	                dataType:'json',
	                success:function(data){
	                    if(data.code==200){
	                   // 存储用户信息到cookie
	                   $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
	                        //登录成功
	                        location.href='/main/index';
	                    }else{
	                        alert('用户名或者密码错误');
	                    }
	                }
	            })
	            
	              // console.log(123);
	               return false;
	         })
	   });
	       
       