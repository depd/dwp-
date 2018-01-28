<template>
    <div class="content">
        <div class="logo-content">
            <div class="">工作经历</div>
            <div>
                <ul>
                    <li v-for="item in logoItems" :key="item.id">{{item.itemLi}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
    data(){
        return {
            logoItems:[
                {itemLi:"15.11-16.6，主要负责公司美人贷的页面制作以及后台页面的搭建"},
                {itemLi:"16.7-至今，负责公司A轮融资的所有页面，包括公司官网、产品、后台数据、合作方的页面的搭建"},
            ]
        }
    }
}
</script>
<style scoped>
    .content{
        min-height:600px;
    }
</style>

