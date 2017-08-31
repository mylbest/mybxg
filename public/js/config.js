require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery.min',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap:'bootstrap/js/bootstrap.min',
    common : '../js/common',
    login : '../js/login',
    index:'../js/index',
    util:'../js/util',
    teacherlist:'../js/teacher-list',
    teacheradd:'../js/teacher-add'
   },
   shim : {
    bootstrap : {
      deps : ['jquery']
    }
  }
});