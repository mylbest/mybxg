define(['jquery','template','util','bootstrap'],function($,template,util){
	// console.log(11111111);
   // 请求后台接口获取列表数据
    util.setMenu(location.pathname);
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
      $('.eod').click(function(){
      	// console.log(12345);
      	var td=$(this).closest('td')
      	var tcId=td.attr('data-tcId');
      	var tcStatus=td.attr('data-status');
      	var that=this;
      	$.ajax({
      		type:'post',
      		url:'/api/teacher/handle',
      		data:{tc_id:tcId,tc_status:tcStatus},
      		dataType:'json',
      		success:function(data){
      			// console.log(data);
      			td.attr('data-status',data.result.tc_status); 
      		    if(data.result.tc_status==0){
      		    	$(that).html('注销');
      		    }else{
                    $(that).html('启用');
      		    }
      		}
      	})
      })
   	 }
   });
});
	
