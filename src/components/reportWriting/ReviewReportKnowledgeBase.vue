<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/main' }">评审报告查询</el-breadcrumb-item>
            <el-breadcrumb-item>详情信息</el-breadcrumb-item>
            <el-breadcrumb-item>客户信息</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图区 -->
        <el-card>
            <!-- 搜索与添加区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <!-- 搜索与添加区域 -->
                    <el-input placeholder="请输入内容" v-model="queryInfo.query">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            >
                        </el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addUserBtn"> 添加用户 </el-button>
                </el-col>
            </el-row>
            <!-- 列表区域 -->
            <el-table
                :data="userlistArr"
                style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="电话">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱">
                </el-table-column>
                <el-table-column
                    label="状态">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.state"
                            @change="userStateChanged(scope.row)"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template>
                        <!-- 修改 -->
                        <el-tooltip content="修改" placement="top" :enterable="false">
                            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        </el-tooltip>
                        <!-- 删除 -->
                        <el-tooltip content="删除" placement="top" :enterable="false">
                            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                        </el-tooltip>
                        <!-- 分配角色按钮 -->
                        <el-tooltip content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页区域 -->
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                queryInfo: {
                    query: ''
                },
                userlistArr: []
            }
        },
        created() {
            this.getUserListArr()
        },
        methods: {
            // 添加用户
            addUserBtn() {
                // newCustomer = {
                //     name: this.cus.name
                // }
                // this.$http.post('users',newCustomer).then(function (res){

                // })
            },
            getUserListArr() {
                var _this =this
                this.$axios.get('/api/users').then(function (res){
                    console.log(res,'获取页码')
                    _this.userlistArr = res.data
                    console.log(_this.userlistArr,"获取用户数组")
                })
            },
            // 监听switch开关状态的改变
            userStateChanged(userinfo){
                console.log(userinfo,'开关')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>