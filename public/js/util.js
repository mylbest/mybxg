define(['jquery'],function($){
  // 工具函数
  return{
  	setMenu:function(path){
  	  $('.nav a[href="'+path+'"]').addClass('active');
  	},
  	qs:function(key){
       var param=location.search.substring(1);//删除参数的第一个问号
       var result=null;
       if(param){
       	var kvs=param.split('&');
       	$.each(kvs,function(i,item){
       		var kv=item.split('=');
       		if(key==kv[0]){
       			// 找到对应参数
       			result=kv[1];
       			return false;//终止循环
       		}
       	});
       }
       return result;
  	}
  }
});