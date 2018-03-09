<template>
    <div class="content">
        <h2 class="work-exprice">个人介绍</h2>
        <div class="home-header">
            <div class="font-left">姓名：董伟朋<span>93年，本科（12-16）</span></div>
            <div class="font-left">从事前端工作2年（15年底-至今）</div>
            <div class="font-left">技术如下：</div>
            <ul style="text-indent:5em;">
                <li v-for="item in items" :key="item.id">{{item.skill}}</li>
            </ul>
        </div>
        <div class="canvas-circle">
            <canvas 
            v-for="(value,index) in canvasData"
            width="200" height="200"  
            :id="'canvas' + index" 
            :key="index.id"
            ></canvas>
        </div>
    </div>
</template>
<script>
import bgImg from '@/assets/bg.jpg';
let canvasData = [
                {context:"html5",skill:"95"},
                {context:"css3",skill:"94"},
                {context:"jquery",skill:"93"},
                {context:"es6",skill:"80"},
                {context:"js",skill:"90"},
                {context:"git",skill:"86"},
                {context:"vue",skill:"97"},
                {context:"小程序",skill:"60"},
            ]
// 角度和弧度的换算（角度换弧度）
let lineDeg = function(deg){
    let circleDeg = 2*Math.PI*deg/360;
    return circleDeg
};
// 封装canvas画圆方法
let canvasFun = function(arr){
    for(let i = 0; i < arr.length; i++){
        // 获取画布canvas对象
        let canvas = document.getElementById('canvas' + i);
        if(canvas.getContext){
            let ctx = canvas.getContext("2d");
            // 中心x坐标
            let circleX = canvas.width/2;
            // 中心y坐标
            let circleY = canvas.height/2;
            // 开始百分比
            let process = 0;
            // 开始绘画路径
            ctx.beginPath();
            // 当前线条的宽度
            ctx.lineWidth = 10;
            // 设置弧线的颜色
            // ctx.strokeStyle = "red";
            // 画灰色的圆
            ctx.arc(circleX, circleY, 80, 0, Math.PI*2);
            ctx.strokeStyle = '#ccc';  
            ctx.stroke();
            function animate(){
                requestAnimationFrame(function(){
                    process = process + 1;
                    drawCricle(ctx,process);
                    if(process < arr[i].skill){
                        animate();
                    }
                })
            };
            function drawCricle(ctx,percent){
                // 圆环进度
                ctx.beginPath();
                ctx.arc(circleX, circleY,80, Math.PI * 1.5, Math.PI * (1.5 + 2 * percent / 100 ));  
                ctx.strokeStyle = '#ff6100';
                ctx.stroke();   

                // 画内填充圆   (主要用来覆盖下面的文字)
                ctx.beginPath();  
                ctx.arc(circleX, circleX, 75, 0, Math.PI * 2);  
                ctx.fillStyle = '#fff';  
                ctx.fill(); 

                // 填充文字  
                ctx.font = "20px Microsoft YaHei";   
                ctx.fillStyle = '#ff6100';  
                ctx.textAlign = 'center';    
                ctx.textBaseline = 'middle';   
                ctx.fillText( arr[i].context, circleX, circleY-20);
                ctx.fillText( percent + '%', circleX, circleY+20);
            }
            animate();
        }
    }
};
export default {
    name:'home',
    data(){
        return {
            items:[
                {skill:"熟练掌握html5，css3，js"},
                {skill:"掌握es6"},
                {skill:"掌握vue,以及一些vue的vue-router,vuex,vue-cli"},
                {skill:"会用webpack,git,node的npm"},
                {skill:"做过一些微信小程序，链接在项目那一栏"},
            ],
            canvasData
        }
    },
    mounted () {
        canvasFun(canvasData);
        this.$nextTick(function(){
            document.getElementsByClassName("content")[0].style.backgroundImage = 'url(' + bgImg + ')';
        });
    }
}
</script>
<style>
    html{
        height:100%;
    }
    .content{
        min-height:800px;
        box-sizing:border-box;
        padding:20px 0;
    }
    .font-left{
        padding-left:10px;
    }
    .home-header{
        width:800px;
        height:auto;
        margin:10px auto;
        text-align:left;
        padding-left:14px;
        box-sizing:border-box;
    }
    .home-header h1,.home-header h3,.home-header h4,.home-header ul{
        margin-top:10px;
    }
    .home-header ul li{
        margin-top:10px;
    }
    .home-h2{
        font-size:24px;
        font-weight:bold;
        margin-left:30px;
    }
    .canvas-circle{
        margin:40px auto;
        /* width:60%;*/
        width:800px;
        height:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    .canvas-circle canvas{
        width:200px;
        height:200px;
    }
</style>

