<template>
    <div class="jd">
        <ul>
            <li @click="mobileBtn">手机</li>
            <li @click="computerBtn">电脑</li>
        </ul>
    </div>
</template>
<script>
// 导入事件总线- bus.js
import EventBus from './EventBus.js'
export default {
    methods: {
        mobileBtn() {
            EventBus.$emit("val","手机页面")   // $emit触发on事件的，第一个参数：参数名；第二个参数: 参数值
        },
        computerBtn() {
            EventBus.$emit("val","电脑页面")   // $on接收
        }
    }
}
</script>
<style scoped>
    .jd ul li{
        list-style: none;
    }
</style>