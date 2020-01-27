<template>
    <div>
        <div class="inputStyle">
            <el-input v-model="inputModel" placeholder="请输入内容" style="margin-right: 5px"></el-input>
            <el-button type="primary" @click="searchQuery">搜索</el-button>
        </div>
        <div class="ClientList" @click="CustomerDetailsBtn">
            <ul v-for="(list,id) in searchData" :key="id" >
                 <p>{{ list.title }}</p>
                <div class="ClientInfoField">
                    <li><span>客户号:</span><span>{{list.ClientNum}}</span></li>
                    <li><span>核心客户号:</span><span>{{list.KernelClientNum}}</span></li>
                    <li><span>法人代表:</span><span>{{list.legalPerson}}</span></li>
                    <li><span>成立时间:</span><span>{{list.SetUpTime}}</span></li>
                    <li><span>注册资本(万元):</span><span>{{list.RegisteredCapital}}</span></li>
                    <li><span>注册资本币种:</span><span>{{list.RegisteredCurrency}}</span></li>
                    <li><span>组织机构代码:</span><span>{{list.OrganCode}}</span></li>
                    <li><span>信用等级:</span><span>{{list.CreditRating}}</span></li>
                    <li><span>企业(机构)类型:</span><span>{{list.enterpriseType}}</span></li>
                    <li><span>经营状态:</span><span>{{list.ManageState}}</span></li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            IfShow: false,
            inputModel: '',
            searchData: '',
            // 假数据
            writInfo: [
                {
                    title: '北方联合电力有限公司',
                    ClientNum: '37369',
                    KernelClientNum: '009360',
                    legalPerson: '李向良',
                    SetUpTime: '2020-01-16',
                    RegisteredCapital: '10000000.00000',
                    RegisteredCurrency: '人民币',
                    OrganCode: '75668311',
                    CreditRating: 'AA',
                    enterpriseType: '其他有限责任公司',
                    ManageState:'在业(开业)'
                },
                {
                    title: '中国广核电力有限公司',
                    ClientNum: '37369',
                    KernelClientNum: '009360',
                    legalPerson: '李向良',
                    SetUpTime: '2020-01-16',
                    RegisteredCapital: '10000000.00000',
                    RegisteredCurrency: '人民币',
                    OrganCode: '75668311',
                    CreditRating: 'AA',
                    enterpriseType: '其他有限责任公司',
                    ManageState:'在业(开业)'
                },
                {
                    title: '北京电子科技',
                    ClientNum: '37369',
                    KernelClientNum: '009360',
                    legalPerson: '李向良',
                    SetUpTime: '2020-01-16',
                    RegisteredCapital: '10000000.00000',
                    RegisteredCurrency: '人民币',
                    OrganCode: '75668311',
                    CreditRating: 'AA',
                    enterpriseType: '其他有限责任公司',
                    ManageState:'在业(开业)'
                }
            ]
        }
    },
    methods:{
        CustomerDetailsBtn(){
            this.$router.push({ path:'/CustomerDetails'})
        },
        searchQuery(){
            var search = this.inputModel;
                if (search) {
                    this.searchData =  this.writInfo.filter(function(writInfo) { // filter - 过滤
                        console.log(writInfo,'过滤信息')
                        return Object.keys(writInfo).some(function(key) {
                        console.log(key,'字段')
                        return String(writInfo[key]).toLowerCase().indexOf(search) > -1
                    })
                })
			}
			
  	    }
    }
}
</script>
<style scoped>
.ClientTitle {
    padding-top: 1px;
}
.ClientList ul li {
    float:left;
    padding-left: 10px;
}
.ClientList {
    background-color: #fff;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    height: 120px;
}
    .typeList,.courtyardList,.referNumList {
        margin-left: 20px;
        margin-right: 20px;
    }
    .listStyle span {
        letter-spacing:2px
    }
    .listStyle .dataList {
        float: right
    }
    .listStyle {
        padding: 10px;
    }
    ul li {
        list-style: none;
        height: 30px;
        line-height: 30px;
        padding-right: 20px;
    }
    .inputStyle {
        width: 500px;
        display: flex;
        margin: 0 auto;
    }
</style>