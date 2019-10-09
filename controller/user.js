//  负责用户的操作的逻辑处理
const userModel = require('../model/user');

module.exports = {
    getLoginPage(req, res) {
        //返回一个登陆用的页面
        res.render('admin/login');
    },
    //用户请求登陆的处理
    userLogin(req, res) {
        //处理登陆的请求
        // 1 获取邮箱和密码
        let {
            email,
            password
        } = req.body;
        // console.log(email);
        // console.log(password);
        // console.log(req.body);
        
        

        // 2 对比邮箱和密码是否正确 - 把邮箱给sql语句作为条件获取用户信息即可
        userModel.getUserByEmail(email, r => {
            //如果r有数据，就是用户名是对的，但是密码不一定是对的
            if (r) {
                //还要判断密码
                if (r.password === password) {
                    //密码正确了  - 登陆成功
                    res.send({
                        code: 200,
                        msg: 'ok'
                    });
                } else {
                    //登陆失败
                    res.send({
                        code: 400,
                        msg: '密码错误'
                    })
                }
            } else {
                //邮箱不正确
                res.send({
                    code: 400,
                    msg: '邮箱错误'
                })
            }
        })
    }
}