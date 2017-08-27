
<?php
$dir='main';//默认文件夹名称
$filename='index';//默认文件名称

// 判断路径是否存在
if(array_key_exists('PATH_INFO',$_SERVER)){
	// 获取URL中的路径
	 $path = $_SERVER['PATH_INFO'];
	 // 去掉第一个斜杠 main/index
	 $str = substr($path, 1);
	 // 按照斜杠分割目录名称和文件名称
	 $arr = explode('/', $str);
	 if(count($arr) == 2){
	 	// 覆盖默认的目录名称
	 	$dir =$arr[0];
	 	$filename=$arr[1];
	 }else{
	 	// 跳转到登录页面
	 	$filename='login';
	 }
	 
}

// 嵌入一个子页面
     // include('./views/'.$dir.'/'.$filename.'.html');
        include('./views/'.$dir.'/'.$filename.'.html');
  
  // echo 123;

?>