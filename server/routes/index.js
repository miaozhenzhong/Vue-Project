var express = require('express');
var router = express.Router();
// 引入sql.js文件
var connection = require('../db/sql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mysql-数据库' });
});

/**
 * 位置表 (locations) - mysql中的表
 * location_id - 位置编号
 * street_address - 街道
 * postal_code - 邮编
 * city - 城市
 * state_province - 州/省
 * country_id - 国家编号
 */
router.get('/api/locations', function(req, res, next) {
  connection.query("select * from locations",function(error,results,fields){
    console.log(results)
    res.json(results)
  })
});

/**
 * 工种 (jobs) - mysql中的表
 * job_id - 工种编号
 * job_title - 工种名称
 * min_salary - 最低工资
 * max_salary - 最高工资
 */
router.get('/api/jobs', function(req, res, next) {
  connection.query("select * from jobs",function(error,results,fields){
    console.log(results)
    res.json(results)
  })
});

/**
 * 部门表 (departments) - mysql中的表
 * department_id - 部门编号
 * department_name - 部门名称
 * manager_id - 部门领导的员工编号
 * location_id - 位置编号
 */
router.get('/api/departments', function(req, res, next) {
  connection.query("select * from departments",function(error,results,fields){
    console.log(results)
    res.json(results)
  })
});


/**
 * 员工表 (employess) - mysql中的表
 *  imployee_id - 员工编号
 *  first_name - 名；last-name - 姓；
 *  email - 邮箱； phone_number - 电话号码；
 *  job_id - 工种编号；salary - 月薪；
 *  commission_pct - 奖金率；manager_id - 上级领导的员工编号；
 *  department_id - 部门编号；hiredate - 入职日期
 */
router.get('/api/employees', function(req, res, next) {
  connection.query("select * from employees",function(error,results,fields){
    console.log(results)
    res.json(results)
  })
});

// 登录sessionstorage
router.get('/api/sessionstorage', function(req, res, next) {
  res.json(
      [
          {
              name:"小明",
              age:20,
              address:'北京'
          },
          {
              name:"小敏",
              age:23,
              address:'上海'
          }
      ]
  );
});

module.exports = router;
