<template>
    <div>
        <div class="LeftMenu">
            <LeftMenu></LeftMenu>
        </div>
        <div class="RightMenu">
            <RightMenu></RightMenu>
        </div>
    </div>
</template>
<script>
import LeftMenu from './BusHomeContentLeftMenu'
import RightMenu from './BusHomeContentRightMenu'
export default {
    components: {
        LeftMenu,
        RightMenu
    }
}
</script>
<style scoped>
    .RightMenu {
        width: 950px;
        height: 300px;
        background-color: yellow;
        float: right
    }
    .LeftMenu {
        width: 200px;
        height: 300px;
        background-color: rgb(141, 141, 141);
        float: left
    }
</style>