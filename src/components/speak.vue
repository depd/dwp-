<template>
  <div class="content">
      <div class="speak-study">
            <div class="speak-web">{{webLoad}}</div>
            <div class="change-echarts">
                <p 
                    @click="changeClick('bar')" 
                    :class="{mouseColor:isMouseColor=='柱状图',clickColor:isClickColor=='柱状图'}"
                    @mouseenter="pEnter('柱状图')"
                    @mouseleave="pLeave"
                    >
                    柱状图
                    </p>
                <p @click="changeClick('line')"
                    :class="{mouseColor:isMouseColor=='折线图',clickColor:isClickColor=='折线图'}"
                    @mouseenter="pEnter('折线图')"
                    @mouseleave="pLeave"
                >
                折线图
                </p>
            </div>
            <div class="speal-highCharts" id="my-charts">
                  
            </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'speak',
    data(){
        return {
            webLoad:"study之旅",
            drawLineType:"bar",
            isMouseColor:"柱状图",
            isClickColor:"柱状图",
        }
    },
    mounted () {
        this.drawLine();
    },
    methods: {
        pEnter(data){
            this.isMouseColor = data
        },
        pLeave(data){
            (this.isMouseColor!=this.isMouseColor)?true:false;
            this.isMouseColor = ""
        },
        drawLine(){
            let drawLineType = this.drawLineType;
            // 基于准备好的DOM，初始化echarts实例
            let myCharts = this.$echarts.init(document.getElementById("my-charts"));
            // 回执图标
            myCharts.setOption({
                title:{
                    text:'我的学习之旅',
                    subtext:"很苦逼",
                    textStyle:{
                        width:'100%',
                        color:'#f00',
                        // align无效？
                        align:"center"
                    }
                },
                // 提示框组件。
                tooltip:{},
                xAxis:{
                    data:["html5","css3","js","es6","jquery","vue"]
                },
                yAxis:{
                    type:'value',
                    name:'小时'
                },
                series:[{
                    name:"时间",
                    type:drawLineType,
                    data:[5,20,36,10,10,40]
                }]
            })
        },
        changeClick(data){
            data === 'bar'?this.isClickColor = '柱状图':this.isClickColor = '折线图';
            this.drawLineType = data;
            this.drawLine();
        }
    }
}
</script>
<style scoped>
    .content{
        min-height:600px;
    }
    .speak-web{
        width:100%;
        font-size:24px;
        padding:20px 0;
        color:#f00;
    }
    .change-echarts{
        width:300px;
        height:60px;
        margin:10px auto;
        display:flex;
        justify-content:space-around;
        cursor:pointer;
    }
    .speal-highCharts{
        width:80%;
        height:600px;
        border:1px solid #ccc;
        margin:20px auto;
    }
    .mouseColor{
        color:#ca6360;
    }
    .clickColor{
        color:#f00;
    }
</style>

