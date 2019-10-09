// 负责和用户数据操作相关的代码
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'albx_38'
});

module.exports = {
    //用户登陆所需的方法
    //根据邮箱获取一个用户的信息
    getUserByEmail(email,callback){
        console.log(email)
        let sql = `SELECT * FROM USERS WHERE email='${email}'`;
        //执行sql语句
        connection.query(sql,(e,r)=>{
            e && console.log(e);
            // console.log(r[0]);
            
            callback(r[0]);
        })
    }
}