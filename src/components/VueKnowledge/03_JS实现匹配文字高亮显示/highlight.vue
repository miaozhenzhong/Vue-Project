<template>
    <div>
        <div class="operation">
            <input type="text" id="text" placeholder="请输入关键字"/>
            <el-button @click="highlightBtn">高亮</el-button>
        </div>
        
        <div id="content">
            js实现代码高亮显示
            无忧无虑 自由自在 幼稚可笑 挺胸碘肚
            牙牙学语 嘻嘻哈哈 你追我赶 抱头鼠窜
            逃之夭夭 穷追猛打 乱作一团 鸡飞狗跳
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        highlightBtn() {
            var content = document.getElementById("content");
            var contents = content.innerHTML;
            var text = document.getElementById("text");
            var value = text.value;
            var values = contents.split(value);
            content.innerHTML = values.join('<span style="background:red;">' + value + '</span>');
        }
    }
}
</script>
<style scoped>
.operation {
    margin-bottom: 20px;
}
#text {
    width: 400px;
    height: 33px;
    border-radius: 0.5em;
    border: 1px solid #409eff;
}
</style>