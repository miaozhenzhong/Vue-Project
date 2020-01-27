<template>
  <div class="main">
      <div class="left">
        <Left></Left>
      </div>
      <div class="right">
        <div class="top">
            <img src="../../../static/img/1.jpg">
        </div>
        <div class="bottom">
          <Right></Right>
        </div>
      </div>
  </div>
</template>
<script>
  import Left from './left.vue'
  import Right from './Right.vue'
  export default {
    name: "a2",
    components: {
      Left,
      Right
    },
    methods: {
    },
    mounted() {
      
    }
  };
</script>
<style scoped>
  .top img {
    height: 200px;
    width: 1000px
  }
  .main {
    width: 1200px;
    margin: 20px auto
  }
  .right {
    width: 1000px;
    float: right;
  }
  .left {
    width: 150px;
    float: left;
  }
  .left,.right {
    background-color: #f5f5f5;
    height: 500px;
  }
  * {
    padding: 0;
    margin: 0
  }
</style>