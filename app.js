// 负责开启服务器+注册中间件

// 引入第三方 express 模块
const express = require('express');
//引入第三方 bodyParser 模块
const bodyParser = require('body-parser');
//引入第三方 session 模块
const session = require('exporess-session');
//引入 ./router/user 分支路由
const userRouter = require('./router/user');
//引入 ./router/index 分支路由
const indexRouter = require('./router/index');
//创建服务器框架
const app = express();

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
});

//处理静态资源
app.use('/assets',express.static('assets'));

//注册body-parser的中间件
app.use(bodyParser.urlencoded({extended:false}));

//注册session中间件
app.use(session({
    secret:'嘿嘿',
    resave:false,
    saveUninitialized:false
}))

//设置 ejs 为默认的模板引擎，但是这个模板引擎的目的不是为了做服务器渲染，而是为了返回页面更加方便
app.set('view engine','ejs');


//注册路由
/*
    分支路由：
        注册的方式和以前的一个路由稍有不同
        app.use('/以书面开头',router对象);
 */
app.use('/admin/user',userRouter);
app.use('/admin',indexRouter);
