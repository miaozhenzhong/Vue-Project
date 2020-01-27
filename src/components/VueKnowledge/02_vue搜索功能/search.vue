<template>
    <div>
        <div class="inputStyle">
            <el-input v-model="inputModel" placeholder="请输入内容" style="margin-right: 5px"></el-input>
            <el-button type="primary" @click="searchQuery">搜索</el-button>
        </div>
        <div>
            <ul v-for="(list,id) in searchData" :key="id" >
                <li>
                    <span>{{list.type}}</span>
                    <span>{{list.title}}</span>
                    <span>{{list.courtyard}}</span>
                    <span>{{list.referenceNum}}</span>
                    <span>{{list.data}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputModel: '',
            searchData: '',
            // 假数据
            writInfo: [
                {
                    id: '1',
                    type: '刑事',
                    title: '故意伤害刑事通知书',
                    courtyard: "中级人民法院",
                    referenceNum: '(2020）最高法刑申111号',
                    data: '2020-01-13'
                },
                {
                    id: '2',
                    type: '民事',
                    title: '故意杀人刑事通知书',
                    courtyard: "最高人民法院",
                    referenceNum: '(2020）最高法刑申222号',
                    data: '2020-01-12'
                }
            ]
        }
    },
    methods:{
        searchQuery(){
            var search = this.inputModel;
                if (search) {
                    this.searchData =  this.writInfo.filter(function(writInfo) { // filter - 过滤
                        console.log(writInfo,'过滤信息')
                        return Object.keys(writInfo).some(function(key) {
                        console.log(key,'字段')
                        return String(writInfo[key]).toLowerCase().indexOf(search) > -1
                    })
                })
			}
			
  	    }
    }
}
</script>
<style scoped>
    ul li {
        list-style: none;
    }
    .inputStyle {
        width: 500px;
        display: flex;
        margin: 0 auto;
    }
</style>