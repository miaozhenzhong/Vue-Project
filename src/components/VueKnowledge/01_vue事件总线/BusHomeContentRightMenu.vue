<template>
    <div>
        <div class="RightMenu">
            <p> {{ ss }} </p>
        </div>
    </div>
</template>
<script>
import EventBus from './EventBus.js'
export default {
    data(){
        return {
            ss: 0
        }
    },
    mounted(){
        let _this = this
        EventBus.$on('val',function(m){
            console.log('接受:+',m)
            _this.ss = m
        })
    }
}
</script>
<style scoped>
</style>