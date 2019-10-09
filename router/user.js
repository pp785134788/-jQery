// 负责跟用户操作相关的路由
// 引入第三方 express 模块
const express = require('express');
//创建路由对象
const router = express.Router();
const userController = require('../controller/user');

//监听 用户 登陆的页面请求
router.get('/login.html',userController.getLoginPage);

//用户请求登陆
router.post('/userLogin',userController.userLogin)

//暴露路由对象
module.exports = router;