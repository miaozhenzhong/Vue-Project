<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/logo.png" alt="" style="height: 50px; width: 50px">
                <span>后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px': '200px'">
                <div class="toggle-button" @click="toggleCollapse"> ||| </div>
                <el-menu
                    :default-active="activePath"
                    :router="true"
                    :collapse-transition="false"
                    :collapse="isCollapse"
                    :unique-opened="true"
                    background-color="#37485a"
                    text-color="#fff"
                    active-text-color="#409EFF">
                    <!-- 一级菜单 -->
                    <el-submenu :index="item.id + ''" v-for= "item in getMenuListArr" :key="item.id">
                        <!-- 一级菜单模版区 -->
                        <template slot="title">
                            <!-- 图标 class="el-icon-location" -->
                            <i :class="iconsObj[item.id]"> </i>
                            <!-- 文本 -->
                            <span> {{item.name}} </span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item
                         :index="'/' + subItem.path" 
                         v-for="subItem in item.children" 
                         :key="subItem.id"
                         @click="saveNavState('/' + subItem.path)"
                         >
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span> {{ subItem.name }} </span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 内容区 -->
            <el-main>
                <!-- 放一个路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import navData from '../json/nav.json'
    export default {
        data() {
            return {
                getMenuListArr: [],
                iconsObj: {
                    '1': 'el-icon-location',
                    '2': 'el-icon-eleme',
                    '3': 'el-icon-phone',
                    '4': 'el-icon-cpu',
                    '5': 'el-icon-user'
                },
                // 是否折叠
                isCollapse: false,
                // 被激活的链接地址
                activePath: ''
            }
        },
        created() {
            this.getMenuList()
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            // 退出
            logout() {
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            // 获取左侧菜单
            async getMenuList() {
                // const {data: res} = await this.$http.get('getlunbo')
                // console.log(res,'左侧菜单栏')
                // if(res.status !== 0) return this.$message.error('获取失败')
                // this.getMenuListArr = res.message
                this.getMenuListArr = navData
                console.log(this.getMenuListArr,'获取Menu数据')
                
            },
            // 点击按钮切换菜单的折叠及展开
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            },
            // 保存链接的激活状态
            saveNavState(activePath) {
                window.sessionStorage.setItem('activePath',activePath)
                this.activePath = activePath
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-container {
        height: 100%
    }
    .el-header {
        background-color: #409EFF;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;
        > div {
            display: flex;
            align-items: center;
            span {
                margin-left: 15px;
            }
        }
        
    }
    .el-aside {
        background-color: #37485a;
        .el-menu {
            border-right: none
        }
    }
    .el-main {
        background-color: #f9f8f8
    }
    .toggle-button {
        background-color: #4A5064;
        font-size: 10px;
        line-height: 24px;
        color:#fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
</style>