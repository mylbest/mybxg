define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
 // 设置导航菜单选中
 util.setMenu('/teacher/list');
 // 获取编辑讲师的ID
 var tcId=util.qs('tc_id');
 // 根据ID查询对应的讲师详细信息
 if(tcId){
 	//编辑讲师
 	$.ajax({
  	type:'get',
  	url:'/api/teacher/edit',
  	data:{tc_id:tcId},
  	dataType:'json',
  	success:function(data){
  		// console.log(data);
  		// 解析数据渲染页面
  		data.result.operate='讲师编辑';
  		var html=template('teacherTpl',data.result);
  		$('#teacherInfo').html(html);
  		// 编辑讲师的提交功能
  		submitForm('/api/teacher/update');
  	}
  });
 }else{
 	var html=template('teacherTpl',{operate:'讲师添加',tc_gender:1});
 	$('#teacherInfo').html(html);
 	// 添加讲师的提交功能
 	submitForm('/api/teacher/add');
 }
 // 实现表单提交功能
       function submitForm(url){
      	 $('#formId').validate({
           sendForm : false,
           valid : function(){
           	//提交表单
           	$(this).ajaxSubmit({
           		type:'post',
           		url:url,
           		success:function(data){
           			// console.log(data);
           			if(data.code==200){
           				location.href='/teacher/list';
           			}
           		}
           	});
           // console.log(12345);
           },
           description:{
           	tc_name:{
           		required:'用户名不能为空',
           		valid:'用户名可以使用'
           	},
           	tc_pass:{
           		required:'密码不能为空',
           		pattern:'必须是6位数字',
           		valid:'密码正确'
           	},
           	 tc_join_date : {
           		required:'入职日期不能为空',
           		valid:'日期有效'
           	}
           }
      	});
      }
  //   function submitForm(url){
  //   $('#formBtn').click(function(){
  //     $.ajax({
  //       type : 'post',
  //       url : url,
  //       data : $('#formId').serialize(),
  //       dataType : 'json',
  //       success : function(data){
  //         if(data.code == 200){
  //           location.href = '/teacher/list';
  //         }
  //       }
  //     });
  //   });
  // }
  
})