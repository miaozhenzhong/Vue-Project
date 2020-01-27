<template>
    <div>
        {{kk}}
    </div>
</template>
<script>
import Msg from './msg.js'
export default {
    data(){
        return {
            kk: 0
        }
    },
    mounted: function(){
        var _this = this
        Msg.$on('val',function(m){ // $on接收
            _this.kk = m
        })
    }
}
</script>
<style scoped>
</style>