<template>
    <div>
        <router-link to="/a2?321"> 转向a2 </router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "a1",
  methods: {
  },
  mounted() {
  }
};
</script>
<style scoped>
  a {
    background-color: blue
  }
</style>