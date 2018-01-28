<template>
    <div class="content">
        <h1>本人：董伟朋</h1>
        <h2>93年，本科（12-16）</h2>
        <h3>从事前端工作2年（15年底-至今）</h3>
        <h4>技术如下：</h4>
        <ul>
            <li v-for="item in items" :key="item.id">{{item.skill}}</li>
        </ul>
        <div class="canvas-circle">
            <!-- <canvas v-for="(value,index) in canvasData" :id="value" :key="index"></canvas> -->
            <canvas width="300px" height="300px" id="ss"></canvas>
        </div>
    </div>
</template>
<script>
// 角度和弧度的换算（角度换弧度）
let lineDeg = function(deg){
    let circleDeg = 2*Math.PI*deg/360;
    return circleDeg
};
// 封装canvas画圆方法
    // id: DOM的id
    // lineColor:线的颜色
    // startDeg:开始角度
    // endDeg:结束角度
    // boolen:true为逆时针 false为顺时针
let canvasFun = function(id,lineColor,startDeg,endDeg,boolen){
    // 获取画布canvas对象
    let canvas = document.getElementById(id);
    if(canvas.getContext){
        let ctx = canvas.getContext("2d");
        // 开始绘画路径
        ctx.beginPath();
        // 设置弧线的颜色
        ctx.strokeStyle = lineColor;
        let circle = {
            x:100,      // 圆心的x轴坐标值
            y:100,      // 圆心的x轴坐标值
            r:50        // 圆的半径
        };
        //  以canvas中的坐标点(100,100)为圆心，绘制一个半径为50px的圆形
        ctx.arc(circle.x,circle.y,circle.r,lineDeg(startDeg),lineDeg(endDeg),boolen);
        //  按照指定路径绘制弧线
        ctx.stroke();
    }
};
export default {
    name:'home',
    data(){
        return {
            items:[
                {skill:"熟练掌握html5，css3，js"},
                {skill:"能看懂es6写的东西，但是还只是个二吊子，目前还在study"},
                {skill:"掌握vue,以及一些vue的vue-router,vuex,vue-cli"},
                {skill:"会用webpack,git,node的npm"},
                {skill:"做过一些微信小程序，链接在项目那一栏"},
            ],
            canvasData:[
                {context:"html5",skill:"90%"},
                {context:"css3",skill:"90%"},
                {context:"jquery",skill:"90%"},
                {context:"es6",skill:"90%"},
                {context:"js",skill:"90%"},
                {context:"git",skill:"90%"},
                {context:"vue",skill:"90%"},
            ]
        }
    },
    mounted () {
        canvasFun("ss","blue",270,260,false);
    }
}
</script>
<style>
    .content{
        min-height:600px;
        box-sizing:border-box;
        padding:20px 0;
    }
</style>

