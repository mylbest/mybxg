define(['jquery','cookie'], function($) {
  // NProgress.start();
  // NProgress.done();

  // 控制左侧导航菜单折叠展开
  $('.navs ul').prev('a').on('click', function() {
    $(this).next().slideToggle();
  });

  // 实现退出功能
  $('#logoutBtn').click(function() {
    $.ajax({
      type: 'post',
      url: '/api/logout',
      dataType: 'json',
      success: function(data) {
        if (data.code == 200) {
          // 退出成功
          location.href = '/main/login';
        }
      }
    });
    return false;
  });

  //验证是否登录
  var seesionId=$.cookie('PHPSESSID');
  // console.log(seesionId);
  if(!seesionId && location.pathname!='/main/login'){
    location.href='/main/login';
  }

  // 获取用户信息
  var loginInfo=JSON.parse($.cookie('loginInfo'));
  // console.log(loginInfo);
  $('.profile img').attr('src',loginInfo.tc_avater);
  $('.profile h4').html(loginInfo.tc_name);


});
