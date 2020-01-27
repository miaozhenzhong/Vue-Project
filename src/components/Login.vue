<template>
  <div class="login_container">
      <div style="min-height:730px; height:100px">
        <div id="particles-js">
            <div class="login_box">
                <!-- 头像区域 -->
                <div class="avatar_box">
                    <img src="../assets/logo.png" />
                </div>
                <!-- 登陆表单区域 -->
                <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                        <!-- 用户名 -->
                        <el-form-item prop="username">
                            <el-input v-model="loginForm.username" prefix-icon="el-icon-search"></el-input>
                        </el-form-item>
                        <!-- 密码 -->
                        <el-form-item prop="password">
                            <el-input  v-model="loginForm.password" prefix-icon="el-icon-search" type="password"></el-input>
                        </el-form-item>
                        <!-- 按钮区域 -->
                        <el-form-item class="btns">
                            <el-button type="primary" @click="login">登录</el-button>
                            <el-button type="info" @click="resetLoginForm">重置</el-button>
                        </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import particlesJs from "particles.js";
    import particlesConfig from "../json/particles.json";
    export default {
        data() {
            return {
                // 这是登录表单的数据绑定对象
                loginForm: {
                    username: 'zsf',
                    password: '123456'
                },
                // 表单验证规则对象
                loginFormRules: {
                    // 验证用户名是否合法
                    username: [
                        { required: true, message: "请输入登陆名称", trigger: "blur" },
                        { min: 3, max: 10, message: "长度在3到10个字符之间", trigger: "blur"}
                    ],
                    // 验证密码是否合法
                    password: [
                        { required: true, message: "请输入登陆密码", trigger: "blur" },
                        { min: 6, max: 15, message: "长度在6到10个字符之间", trigger: "blur"}
                    ]
                }
            }
        },
        mounted(){
            particlesJS("particles-js", particlesConfig);
        },
        methods: {
            login(){
                // 表单预验证
                this.$refs.loginFormRef.validate(async valid => {
                    console.log(valid,'321')
                    if(!valid) return;
                    console.log(this.loginForm,'332211')
                    const {data: res} = await this.$axios.get('/api/sessionstorage',this.loginForm)
                    console.log(res,'2211')
                    // if(res.status !== 200) return this.$message.error('登录失败')
                    this.$message.success('登录成功')

                    // 1. 将登录成功之后的 token,保存到客户端的 sessionStorage中；
                    //    1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
                    //    1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
                    window.sessionStorage.setItem("token", 'mzz')
                    // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                    this.$router.push("/home")
                })
            },
            // 表单重置
            resetLoginForm() {
                console.log(this,"23")
                this.$refs.loginFormRef.resetFields();
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../assets/css/styleOflogin.css";
    .login_container {
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .avatar_box {
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;  // 文本框超出区域
    }

    .btns {
        display: flex;
        justify-content: flex-end
    }
</style>