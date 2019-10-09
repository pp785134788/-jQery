// 负责跟用户操作相关的路由
// 引入第三方 express 模块
const express = require('express');
//创建路由对象
const router = express.Router();

//监听 用户 登陆的页面请求
router.get('/login.html',(req,res)=>{
    //返回一个登陆用的页面
    res.render('admin/login');
});

//暴露路由对象
module.exports = router;