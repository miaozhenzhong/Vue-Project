<template>
    <div>
        <div class="title">热门推荐</div>
        <ul class="menu">
            <li @click="menu1">笔记本电脑</li>
            <li @click="menu2">手机</li>
            <li>服饰</li>
            <li>手表</li>
            <li>书籍</li>
            <li>玩具</li>
            <li>小家电</li>
            <li>学习用品</li>
        </ul>
    </div>
</template>
<script>
    import  Msg from './msg.js' // 视线总线
    export default {
        methods: {
            menu1(){
                Msg.$emit("val","1")    // $emit触发on事件的，第一个参数：参数名；第二个参数: 参数值
            },
            menu2(){
                Msg.$emit("val","2")    // $emit触发on事件的，第一个参数：参数名；第二个参数: 参数值
            }
        }
    }
</script>
<style scoped>
    .title {
        margin: 0 auto;
        width: 100px;
        height: 20px;
        line-height: 20px;
        color: red;
    }
    .menu li {
        list-style: none;
        height: 50px;
        line-height: 50px;
        margin-bottom: 2px;
        background-color: white;
        margin-left: -43px;
        text-align: center
    }
</style>