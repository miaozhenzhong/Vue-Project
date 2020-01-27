<template>
    <div>
        <el-button @click="getData">获取mock数据</el-button>
         <template>
            <el-table
            :data="articles"
            style="width: 100%">
            <el-table-column
                prop="title"
                label="标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="author_name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="date"
                label="时间">
            </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articles: []
        }
    },
    methods: {
        getData () {
            this.$axios.get('/api/articles')
                .then(e => {
                let data = e.data
                if (data.data && Array.isArray(data.data)) {
                    this.articles = data.data
                }
                    console.log(this.articles)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>