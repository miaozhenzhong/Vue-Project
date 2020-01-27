<template>
  <div>
      <ul>
          <li v-for="(item,index) in items" :key="index">
              {{item.title}}
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            items:[
                {
                    title: '1、vue事件总线(实现跳转切换内容传值)',
                    content: 'mzz521'
                },
                {
                    title: '2、封装组件标签',
                    content: 'mzz522'
                }
            ]
        }
    }
}
</script>

<style>
ul li {
    list-style: none;
}
</style>