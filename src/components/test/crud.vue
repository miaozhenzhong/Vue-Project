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
                    <el-input placeholder="请输入内容" v-model="queryInfoModel">
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="queryBtn"
                            >
                        </el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addUserDialog = true"> 添加用户 </el-button>
                </el-col>
            </el-row>
            

            <!-- 修改用户 - 模态框 -->
            <el-dialog 
                title="添加用户" 
                :visible.sync="changeUserDialog"
                >
                <el-form :model="changeUserForm">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="changeUserForm.cFirst_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="changeUserForm.cEmail" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" :label-width="formLabelWidth">
                        <el-input v-model="changeUserForm.cPhone_number" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addUserDialog = false">取 消</el-button>
                    <el-button type="primary" @click="changeSubmitBtn">提 交</el-button>
                </div>
            </el-dialog>
            <!-- 添加用户 - 模态框 -->
            <el-dialog 
                title="添加用户" 
                :visible.sync="addUserDialog"
                >
                <el-form :model="addUserForm">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="addUserForm.first_name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="addUserForm.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码" :label-width="formLabelWidth">
                        <el-input v-model="addUserForm.phone_number" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addUserDialog = false">取 消</el-button>
                    <el-button type="primary" @click="submitBtn">提 交</el-button>
                </div>
            </el-dialog>

            <!-- 列表区域 -->
            <el-table
                :data="userListArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    width="50">
                    <template slot-scope="scope">
                        <span v-text="getIndex(scope.$index)"></span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="first_name"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱">
                </el-table-column>
                <el-table-column
                    prop="phone_number"
                    label="电话号码">
                </el-table-column>
                <el-table-column
                    prop="hiredate"
                    :formatter="dateFormat"
                    label="日期">
                </el-table-column>
                <!-- <el-table-column
                    label="状态">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.state"
                            @change="userStateChanged(scope.row)"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column> -->
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <!-- 修改 -->
                        <el-tooltip content="修改" placement="top" :enterable="false">
                            <el-button 
                                type="primary" 
                                icon="el-icon-edit" 
                                size="mini"
                                @click.native.prevent="changeBtn(scope.$index,userListArr[scope.$index])"
                                >
                            </el-button>
                        </el-tooltip>
                        <!-- 删除 -->
                        <el-tooltip content="删除" placement="top" :enterable="false">
                            <el-button
                                type="danger" 
                                icon="el-icon-delete" 
                                size="mini" 
                                @click.native.prevent="delBtn(scope.$index,userListArr)"
                                >
                            </el-button>
                        </el-tooltip>
                        <!-- 分配角色按钮 -->
                        <el-tooltip content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页区域 -->
            <el-pagination 
                class="pageStyle"
                background
                layout="prev, pager, next"
                @current-change = "current_change"
                :total="totalItems">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "crud",
        data() {
            return {
                totalItems: 1000, // 默认数据总数
                pagesize:10,//每页的数据条数 - 当前显示数据条数
                currentPage:1,//默认开始页面 - 当前页
                addUserDialog: false,
                changeUserDialog: false,
                ids: '',
                filterTableDataEnd: [],
                changeUserForm: {
                    cFirst_name: '', //名
                    cEmail: '', //邮箱
                    cPhone_number: '', //电话号码
                    cHiredate: '' //入职日期
                },
                addUserForm: {
                    first_name: '', //名
                    email: '', //邮箱
                    phone_number: '', //电话号码
                    hiredate: '' //入职日期
                },
                formLabelWidth: '120px',
                queryInfoModel: '',
                userListArr: [],
                searchList: [],
                options: [
                    {
                        value: 1,
                        label: '测试1'
                    },
                    {
                        value: 2,
                        label: '测试2'
                    }
                ],
            }
        },
        created() {
            // this.getUserListArr()
            this.searchUserList()
        },
        methods: {
            searchUserList(resultList) {
                if(resultList != null) {
                    this.userListArr = resultList
                } else {
                    this.getUserListArr()
                }
            },
            // 查询
            queryBtn() {
                var target = this.queryInfoModel
                var _this = this
                if(target){
                    var newUlArr = []
                    this.userListArr.forEach(function (item) {
                        if(item.first_name.indexOf(target) > -1){
                            newUlArr.push(item)
                        }
                    })
                    this.searchUserList(newUlArr)
                } else {
                    this.searchUserList(this.userListArr)
                }
            },
            // 更改-提交事件
            changeSubmitBtn() {
                // 当前行索引
                var currentLine = this.ids 
                 // 包装成list要求的对象
                this.userListArr[currentLine] = {
                    first_name: this.changeUserForm.cFirst_name,
                    email: this.changeUserForm.cEmail,
                    phone_number: this.changeUserForm.cPhone_number
                }
                // 关闭模态框
                this.changeUserDialog = false
                // 清空文本框中的数据
                this.changeUserForm.cFirst_name = ''
                this.changeUserForm.cEmail = ''
                this.changeUserForm.cPhone_number = ''
            },
            // 更改 - 按钮
            changeBtn(index,infoRow) {
                console.log(infoRow,'infoRow该行信息')
                this.ids = index
                this.changeUserForm.cFirst_name = infoRow.first_name
                this.changeUserForm.cEmail = infoRow.email
                this.changeUserForm.cPhone_number = infoRow.phone_number
                this.changeUserDialog = true
            },
            // 删除 - 按钮
            delBtn(index, rows) {
                rows.splice(index, 1);
            },
             //时间格式化
            dateFormat:function(row,column){
                var t=new Date(row.hiredate);//row 表示一行数据, hiredate 表示要格式化的字段名称
                return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"."+t.getMilliseconds();
            },
            // 表格序列号
            getIndex($index) {
                console.log($index,"序号")
                // 表格序号
                // (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1
                return (this.currentPage-1)*this.pagesize + $index +1
            },
            // 当前页码
            current_change(currentPage) {
                this.currentPage = currentPage
            },
            // 提交用户
            submitBtn() {
                 // 包装成list要求的对象
                var newInfo = {
                    first_name: this.addUserForm.first_name,
                    email: this.addUserForm.email,
                    phone_number: this.addUserForm.phone_number
                }
                this.userListArr.push(newInfo)
                // 关闭模态框
                this.addUserDialog = false
                // 清空文本框中的数据
                this.addUserForm.first_name = ''
                this.addUserForm.email = ''
                this.addUserForm.phone_number = ''
            },
            // 获取员工信息
            getUserListArr() {
                var _this =this
                this.$axios.get('/api/employees').then(function (res){
                    console.log(res,'获取页码')
                    _this.userListArr = res.data
                    _this.totalItems = _this.userListArr.length
                    console.log(_this.totalItems,"当前页码")
                    console.log(_this.userListArr,"获取员工信息")
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
    .pageStyle {
        text-align:center;
        margin-top:30px;
    }
</style>