<template>
  <div class="content">
      <div class="speak-study">
            <h2>学习之旅</h2>
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
            <div class="speal-highCharts" id="my-charts" style="background:#fff;">
                  
            </div>
      </div>
  </div>
</template>
<script>
import bgImg from '@/assets/bg.jpg';
import echartsData from '@/echartsData';

export default {
    name:'speak',
    data(){
        return {
            drawLineType:"bar",
            isMouseColor:"柱状图",
            isClickColor:"柱状图",
            echartsData
        }
    },
    methods: {
        pEnter(data){
            this.isMouseColor = data
        },
        pLeave(){
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
                    subtext:"very hehe",
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
                    data:['html5','css3','js','es6','jquery','vue','git','小程序','echarts'],
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color:'#f00',
                            fontSize:'40'
                        }
                    }
                },
                yAxis:{
                    type:'value',
                    name:'小时',
                    yxisLabel:{
                        show:true,
                        textStyle:{
                            color:'#f00',
                            fontSize:'20'
                        }
                    }
                },
                series:[{
                    name:"时间",
                    type:drawLineType,
                    data:[5,10,36,29,36,42,51,60,84]
                }]
            })
        },
        changeClick(data){
            data === 'bar'?this.isClickColor = '柱状图':this.isClickColor = '折线图';
            this.drawLineType = data;
            this.drawLine();
            // echarts会覆盖设置的背景色，因此在这边再设置一次
            document.getElementById("my-charts").style.backgroundColor = '#fff';
        }
    },
    mounted () {
        this.drawLine(); 
        this.$nextTick(function(){
            document.getElementsByClassName("content")[0].style.backgroundImage = 'url(' + bgImg + ')';
            document.getElementById("my-charts").style.backgroundColor = '#fff';
        });
    }
}
</script>
<style scoped>
    .speak-study h2{
        margin:20px auto;
        color:#ff6100;
    }
    .change-echarts{
        width:300px;
        height:60px;
        margin:10px auto;
        display:flex;
        justify-content:space-around;
        cursor:pointer;
        color:#f00;
    }
    .speal-highCharts{
        width:70%;
        height:600px;
        margin:20px auto;
    } 
    .mouseColor{
        color:rgb(236, 113, 133);
    }
    .clickColor{
        color:#ff6100;
    }
</style>

