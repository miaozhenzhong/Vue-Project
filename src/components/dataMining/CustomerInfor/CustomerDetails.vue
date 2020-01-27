<template>
    <div>
        <div class="infoTop">
            <div class="clientname clearfix" @click="test">
                <ul class="titleClientName">
                    <li><span class="ClientName">北方联合电力有限公司</span></li>
                    <li style="margin-top: 5px;"><span class="existence">存续</span></li>
                </ul>
            </div>
            <div class="clientContent">
                <ul class="clientInfo">
                    <div class="clientContentLeft">
                        <li><span class="clientField">客户号:</span><span class="clientValue">329873</span></li>
                        <li><span class="clientField">行业(CRM数据):</span><span class="clientValue">火力发电</span></li>
                        <li><span class="clientField">客户信用级别:</span><span class="clientValue">AA</span></li>
                        <li><span class="clientField">组织机构代码:</span><span class="clientValue">756668318</span></li>
                    </div>
                    <div class="clientContentRight">
                        <li><span class="clientField">核心客户号:</span><span class="clientValue">009360</span></li>
                        <li><span class="clientField">行业(工商数据):</span><span class="clientValue">电力、热力、燃气及水的供应业</span></li>
                        <li><span class="clientField">评级展望:</span><span class="clientValue">稳定</span></li>
                        <li><span class="clientField">经营范围:</span><span class="clientValue">许可经营项目；无  一般经营项目： 开发、投资、建设、运营电力、热力...</span></li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="content">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 基本信息</span>
                    <p class="titleLabel">基本信息</p>
                    <table border="1" width="1000">
                        <tr>
                            <th>客户名称</th>
                            <td>海南省扶贫开发投资有限公司</td>
                            <th>客户号</th>
                            <td>1000033003</td>
                        </tr>
                        <tr>
                            <th>行业门类</th>
                            <td>租赁和商务服务业</td>
                            <th>组织机构代码</th>
                            <td>MA4G6J6K</td>
                        </tr>
                        <tr>
                            <th>注册号</th>
                            <td>46738393837383</td>
                            <th>经营状态</th>
                            <td>在营(开业)</td>
                        </tr>
                        <tr>
                            <th>住址</th>
                            <td>海南省海口市滨海大道</td>
                            <th>注册资本币种</th>
                            <td>人民币</td>
                        </tr>
                        <tr>
                            <th>企业名称</th>
                            <td>海南省扶贫开发投资有限公司</td>
                            <th>登记机关</th>
                            <td>海口市市场监督管理局</td>
                        </tr>
                        <tr>
                            <th>企业(机构)类型</th>
                            <td>有限责任公司</td>
                            <th>成立时间</th>
                            <td>2019-12-20</td>
                        </tr>
                        <tr>
                            <th>法人代表</th>
                            <td>陈小聪</td>
                            <th>经营期限自</th>
                            <td>2019-12-20</td>
                        </tr>
                        <tr>
                            <th>注册资本(万元)</th>
                            <td>20000.000</td>
                            <th>经营期限至</th>
                            <td>长期</td>
                        </tr>
                        <tr>
                            <th>经营(业务)范围及方法</th>
                            <td>负责海南省异地扶贫搬迁工程</td>
                            <th>统一社会信用代码</th>
                            <td>9483797893293</td>
                        </tr>
                        <tr>
                            <th>最后年检年度</th>
                            <td>2019</td>
                            <th>国民经济行业</th>
                            <td>投资与资产管理</td>
                        </tr>
                    </table>
                    <p class="titleLabel">法人治理结构</p>
                    <el-table
                        :data="corporateGovernance"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="shareholderName"
                            label="股东名称">
                        </el-table-column>
                        <el-table-column
                            prop="contributiveRatio"
                            label="出资比例">
                        </el-table-column>
                        <el-table-column
                            prop="subcribeForehead"
                            label="认缴出资额(万元)">
                        </el-table-column>
                        <el-table-column
                            prop="subcribeCurrency"
                            label="认缴出资币种">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="出资日期">
                        </el-table-column>
                    </el-table>
                    <p class="titleLabel">企业高管</p>
                    <el-table
                        :data="seniorInfo"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="name"
                            label="姓名">
                        </el-table-column>
                        <el-table-column
                            prop="position"
                            label="职位">
                        </el-table-column>
                    </el-table>
                    <p class="titleLabel">客户关系图谱</p>
                    <img src="../../../assets/gxt.png" width="1000px">
                    <p class="titleLabel">集团客户关系</p>
                    <img src="../../../assets/gxt.png" width="1000px">
                </el-tab-pane>
                <el-tab-pane label="司法信息">
                    <p class="titleLabel">行政处罚</p>
                    <el-table
                        :data="administrativePenalty"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="data"
                            label="处罚决定日期">
                        </el-table-column>
                        <el-table-column
                            prop="referenceNumber"
                            label="决定书文号">
                        </el-table-column>
                        <el-table-column
                            prop="reasons"
                            label="处罚事由">
                        </el-table-column>
                        <el-table-column
                            prop="result"
                            label="处罚结果">
                        </el-table-column>
                        <el-table-column
                            prop="office"
                            label="处罚机关">
                        </el-table-column>
                        <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <p class="titleLabel">失信被执行人</p>
                    <el-table
                        :data="breakPerson"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="releaseDate"
                            label="发布日期">
                        </el-table-column>
                        <el-table-column
                            prop="recordDate"
                            label="立案日期">
                        </el-table-column>
                        <el-table-column
                            prop="caseNo"
                            label="案号">
                        </el-table-column>
                        <el-table-column
                            prop="executiveCourt"
                            label="执行法院">
                        </el-table-column>
                        <el-table-column
                            prop="performCase"
                            label="履行情况">
                        </el-table-column>
                        <el-table-column
                            prop="performNum"
                            label="执行依据文号">
                        </el-table-column>
                        <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <p class="titleLabel">企业异常</p>
                    <el-table
                        :data="breakPerson"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="releaseDate"
                            label="发布日期">
                        </el-table-column>
                        <el-table-column
                            prop="recordDate"
                            label="立案日期">
                        </el-table-column>
                        <el-table-column
                            prop="caseNo"
                            label="案号">
                        </el-table-column>
                        <el-table-column
                            prop="executiveCourt"
                            label="执行法院">
                        </el-table-column>
                        <el-table-column
                            prop="performCase"
                            label="履行情况">
                        </el-table-column>
                        <el-table-column
                            prop="performNum"
                            label="执行依据文号">
                        </el-table-column>
                        <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <p class="titleLabel">诉讼</p>
                    <el-table
                        :data="breakPerson"
                        height="250"
                        border
                        style="width: 100%">
                        <el-table-column
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="releaseDate"
                            label="发布日期">
                        </el-table-column>
                        <el-table-column
                            prop="recordDate"
                            label="立案日期">
                        </el-table-column>
                        <el-table-column
                            prop="caseNo"
                            label="案号">
                        </el-table-column>
                        <el-table-column
                            prop="executiveCourt"
                            label="执行法院">
                        </el-table-column>
                        <el-table-column
                            prop="performCase"
                            label="履行情况">
                        </el-table-column>
                        <el-table-column
                            prop="performNum"
                            label="执行依据文号">
                        </el-table-column>
                        <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="经营状况">经营状况</el-tab-pane>
                <el-tab-pane label="财务数据">财务数据</el-tab-pane>
                <el-tab-pane label="周边舆情">周边舆情</el-tab-pane>
                <el-tab-pane label="评级记录">评级记录</el-tab-pane>
                <el-tab-pane label="评审项目">评审项目</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 失信被执行人
            breakPerson: [
                {
                    releaseDate: '2020-01-14',
                    recordDate: '20-01-14',
                    caseNo: '(2020)京01执1014号',
                    executiveCourt: '北京市第一中级人民法院',
                    performCase: '全部未履行',
                    performNum: '(2019)京73民初551号'
                },
                {
                    releaseDate: '2020-01-14',
                    recordDate: '20-01-14',
                    caseNo: '(2020)京01执1014号',
                    executiveCourt: '北京市第一中级人民法院',
                    performCase: '全部未履行',
                    performNum: '(2019)京73民初551号'
                },
                {
                    releaseDate: '2020-01-14',
                    recordDate: '20-01-14',
                    caseNo: '(2020)京01执1014号',
                    executiveCourt: '北京市第一中级人民法院',
                    performCase: '全部未履行',
                    performNum: '(2019)京73民初551号'
                }
            ],
            // 行政处罚
            administrativePenalty: [
                {
                    data: '2020-01-14',
                    referenceNumber: '京工商海处字【2018】第2286号',
                    reasons: '经营者与消费者采用格式条款订立合同',
                    result: '1、予以警告； 2、罚款1000元。',
                    office: '北京市工商行政管理局海淀分局'
                },
                {
                    data: '2020-01-13',
                    referenceNumber: '京工商海处字【2018】第1583号',
                    reasons: '不参加促销活动的柜台或商品',
                    result: '罚款1980元',
                    office: '北京市工商行政管理局海淀分局'
                },
                {
                    data: '2020-01-12',
                    referenceNumber: '京工商海处字【2018】第2286号',
                    reasons: '经营者与消费者采用格式条款订立合同',
                    result: '1、予以警告； 2、罚款1000元。',
                    office: '北京市工商行政管理局海淀分局'
                },
            ],
            // 高管信息
            seniorInfo: [
                {
                    name: '饶苏波',
                    position: '懂事',
                },
                {
                    name: '叶才',
                    position: '监事',
                },
                {
                    name: '戴新民',
                    position: '监事',
                },
                {
                    name: '邓东伟',
                    position: '监事',
                },
                {
                    name: '孙福忠',
                    position: '监事',
                }
            ],
            corporateGovernance: [
                {
                    shareholderName: '中国华能集团有限公司',
                    contributiveRatio: '70.00%',
                    subcribeForehead: '7000.000',
                    subcribeCurrency: '人民币',
                    date: '2020-01-03',
                },
                {
                    shareholderName: '广东能源集团有限公司',
                    contributiveRatio: '20.00%',
                    subcribeForehead: '2000.000',
                    subcribeCurrency: '人民币',
                    date: '2020-01-02',
                },
                {
                    shareholderName: '北方联合电力有限公司',
                    contributiveRatio: '70.00%',
                    subcribeForehead: '7000.000',
                    subcribeCurrency: '人民币',
                    date: '2016-05-03',
                },
                {
                    shareholderName: '大唐',
                    contributiveRatio: '70.00%',
                    subcribeForehead: '7000.000',
                    subcribeCurrency: '人民币',
                    date: '2016-05-03',
                }
            ]
        }
    },
    methods: {
        test(){
            this.$router.push({ path:'/test0115'})
        },
        handleClick(row) {
            console.log(row);
        }
    },
}
</script>
<style scoped>
    .clientField {
        color: black;
        margin-left: 10px;
        text-indent : 20px;
        height: 30px;
        line-height: 30px;
    }
    .clientValue {
        color: #6d6d6d;
        margin-left: 10px;
        height: 30px;
        line-height: 30px;
    }
    .clientContentLeft {
        margin-left: 20px;
    }
    .clientContentRight {
        margin-left: 50px;
    }
    .clientContent .clientInfo {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .clientContent {
        background-color: rgba(243, 250, 255, 1);
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .ClientName {
        padding-top: 20px;
        padding-left: 20px;
        font-size: 24px;
        font-weight: bold;
    }
    .titleClientName {
        display: flex;
        flex-direction: row;
        padding-top: 5px;
    }
    li {
        padding: 0px;
        margin: 0px;
    }
    ul {
        padding: 0px;
        margin: 0px;
    }
    .infosWidth{
      max-width: 60%;
      float: left;
    }
    /* .clientname {
        padding-left: 10px;
        font-size: 20px;
    } */
    table tr th {
        background-color: rgba(243, 250, 255, 1)
    }
    table tr {
        height: 50px;
    }
    table,tr,td{
        border: 1px solid rgba(243, 250, 255, 1);
    }
    table{ 
        border-collapse:collapse;
    }
    .titleLabel {
        border-bottom: 1px solid #409eff;
        border-radius: 4px;
        color: #409eff;
        font-size: 18px;
    }
    .existence {
        background-color: #d6f1c9;
        color: #67c23a;
        padding: 1px 5px;
        margin-left: 10px;
        font-weight: bold;
    }
    .type {
        margin-left: 10px;
        padding: 1px 5px;
        color: #67c23a;
        background-color: #d6f1c9;
    }
    ul li {
        list-style: none;
        /* float: left */
    }
    .infoTop {
        height: 200px;
        background-color: #fff;
        margin-bottom: 20px;
        border-radius: 4px;
    }
</style>