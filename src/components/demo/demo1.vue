<template>
    <div class="demo1">
        <ul>
            <li> 1.导航栏切换不同内容；</li>
            <li>
                <p>2.通过事件总线完成传值；创建EventBus.js文件</p>
                <p>
                    import Vue from 'vue'
                    export default new Vue
                </p>
            </li>
            <li>
                <p>3. EventBus.$emit("val","1") 意思是：$emit触发on事件的，第一个参数：参数名；第二个参数: 参数值</p>
                <p>
                    EventBus.$on('val',function(m){} // $on接收
                </p>
            </li>
        </ul>
        <router-link to="/JD">京东商城</router-link>
    </div>
</template>
<script>
export default {
    methods: {
    }
}
</script>
<style scoped>
    .demo1 ul li{
        list-style: none;
    }
</style>