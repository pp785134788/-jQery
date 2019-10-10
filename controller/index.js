module.exports = {
    getIndexPage(req, res) {
        if (req.session.siLogin) {
            res.render('admin/index');
        }else{
            //强制用户到登录页登陆
            res.send('<script>location.href="http://127.0.0.1:8080/admin/user/login.html"</script>')
        }
    }
}