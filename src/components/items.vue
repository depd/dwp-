<template>
    <div class="content">
        <h2 class="work-exprice">工作经历</h2>
        <div class="items-exprice">
            <table border="1">
                <thead>
                    <tr>
                        <th v-for="(item,index) in itemsHrad" :key="index">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(itemToby,index) in itemsTbody" :key="index">
                        <td>{{itemToby.time}}</td>
                        <td>{{itemToby.adress}}</td>
                        <td class="items-tab-things">{{itemToby.somethings}}</td>
                        <td>{{itemToby.itemUrl}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import bgImg from '@/assets/bg.jpg';
export default {
    name:"items",　　
    data(){
        return {
            itemsHrad:['时间','地点','事件','链接'],
            itemsTbody:[
                {time:'15.11-16-6',adress:'北京',somethings:'美人贷，主要负责公司官网，产品，后台的网页，主要用jquery',itemUrl:'null'},
                {time:'16.7-至今',adress:'北京',somethings:'乐学通，主要负责公司官网，产品，后台的网页以及合作方的页面',itemUrl:'www.400669696.com'},
                {time:'业余时间',adress:'随地',somethings:'利用vue做一些业余网页',itemUrl:'github'},
                {time:'业余时间',adress:'随地',somethings:'做一些小程序页面',itemUrl:'github'}
            ]
        }
    },
    mounted () {
        this.$nextTick(function(){
            document.getElementsByClassName("content")[0].style.backgroundImage = 'url(' + bgImg + ')';
        });
    }
}
</script>
<style scoped>
    .work-exprice{
        margin:20px auto;
    }
    .items-exprice{
        width:60%;
        margin:0 auto;
        text-align:left;
    }
    .items-exprice table{
        margin-top:20px;
        width:100%;
        text-align:center;
        color:#000;
    }
    .items-exprice table th{
        padding:10px 0;
    }
    .items-exprice table td{
        padding:20px 10px;
    }
    .items-exprice table .items-tab-things{
        width:40%;
        text-align:left;
    }
</style>

