define(['jquery','template','bootstrap'],function($,template){
	// console.log(11111111);
   // 请求后台接口获取列表数据
   $.ajax({
   	 type:'get',
   	 url:'/api/teacher',
   	 dataType:'json',
   	  success : function(data){
      // 解析数据渲染页面
      var html = template('teacherTpl',{list : data.result});
      $('#teacherInfo').html(html);
      // 绑定预览点击事件
      $('.preview').click(function(){
      	// console.log(111);
      	// 通过后台接口获取数据
      	var tcId=$(this).closest('td').attr('data-tcId');
      	// console.log(tcId);
      	$.ajax({
      		type:'get',
      		url:'/api/teacher/view',
      		data:{tc_id:tcId},
      		dataType:'json',
      		success:function(data){
                // console.log(data);
                // 解析数据渲染页面
               var html=template('modelTpl',data.result);
               // console.log(html);
               $('#modelInfo').html(html);
               $('#teacherModal').modal();
      		}
      	})
      })
   	 }
   });
});
	
