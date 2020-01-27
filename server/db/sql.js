var mysql   =  require('mysql')
// 连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'miao',
    password: 'miao',
    database: 'myemployees'
})

module.exports = connection;