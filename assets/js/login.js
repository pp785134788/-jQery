/* 实现注册 */
// 1 给按钮注册点击事件
$('#btn').on('click', function () {
    //验证邮箱
    let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
    let email = $('#email').val();

    if (!reg.test(email)) {
        $('#modelId').modal();
        return;
    }

    // 2 收集表单数据
    let data = $('.login-wrap').serialize(); //jq里面封装好的收集用户表单的数据的办法
    //serialize方法收集表单数据的原理根据表单元素的name和value属性组成的键值对

    // 3 发送ajax请求
    $.ajax({
        url: '/admin/user/userLogin',
        type: 'post',
        data,
        success(res) {
            // console.log(res);
            if (res.code === 200) {
                // 登录成功
                $('.container-fluid').text('登录成功');
                $("#modelId").modal();
                isLogin = true;
            } else {
                // 提示失败
                $('.container-fluid').text('登录失败');
                $("#modelId").modal();
            }
        }
    });
});

//定义一个变量，记录登陆失败还是成功
let isLogin = false;
//点击确定或者是关闭的时候，如果是登陆成功了的，需要跳转到主页
$('.model-footer').on('click', function () {
    //判断是否成功，如果是成功就跳转
    if (isLogin) {
        location.href = 'http://127.0.0.1:8080/admin/index.html'
    }
})