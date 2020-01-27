<template>
    <div>
        <div class="LeftMenu">
            <ul>
                <li @click="basicInfoBtn">基本信息</li>
                <li @click="judicialInfoBtn">司法信息</li>
                <li @click="stateOperationBtn">经营状况</li>
                <li @click="financialDataBtn">财务数据</li>
                <li @click="publicSentimentBtn">周边舆情</li>
                <li @click="RatingRecordBtn">评级记录</li>
            </ul>
        </div>
    </div>
</template>
<script>
import EventBus from './EventBus.js'
export default {
    data(){
        return{
            basicInfo: '基本信息',
            judicialInfo: '司法信息',
            stateOperation: '经营状况',
            financialData: '财务数据',
            publicSentiment: '周边舆情',
            RatingRecord: '评级记录'
        }
    },
    created() {
        this.test()
    },
    methods: {
        test() {
            console.log('基本信息')
        },
        basicInfoBtn() {
            console.log()
            EventBus.$emit("val", this.basicInfo)
        },
        judicialInfoBtn() {
            EventBus.$emit("val", this.judicialInfo)
        },
        stateOperationBtn() {
            EventBus.$emit("val", this.stateOperation)
        },
        financialDataBtn() {
            EventBus.$emit("val", this.financialData)
        },
        publicSentimentBtn() {
            EventBus.$emit("val", this.publicSentiment)
        },
        RatingRecordBtn() {
            EventBus.$emit("val", this.RatingRecord)
        }
    }
}
</script>
<style scoped>
    li:hover {
        background-color: red
    }
    .LeftMenu li {
        list-style: none;
        cursor: pointer;
        color: #fff;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    ul,li {
        padding: 0px;
        margin: 0px;
    }
</style>