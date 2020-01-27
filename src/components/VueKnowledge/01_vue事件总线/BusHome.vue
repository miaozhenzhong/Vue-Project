<template>
    <div id="BusHome">
        <div class="top">
            <BusHomeTop></BusHomeTop>
        </div>
        <div class="content">
            <BusHomeContent></BusHomeContent>
        </div>
    </div>
</template>
<script>
    // 导入顶部区域
    import BusHomeTop from './BusHomeTop.vue'
    // 导入内容区域
    import BusHomeContent from './BusHomeContent.vue'

    export default {
        components: {
            BusHomeTop,
            BusHomeContent
        }
    }
</script>
<style scoped>
    .top {
        width: 100%;
        height: 200px;
        background-color: red;
        background-color: #ffffff;
        border-bottom: 2px solid #e1e1e1;
    }
    .content {
        width: 100%;
        height: 500px;
        background-color: #ffffff
    }
    #BusHome {
        background-color: #e1e1e1;
    }
    * {
        padding: 0;
        margin: 0
    }
</style>