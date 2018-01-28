<template>
  <div class="content">
        <div class="slide" @mouseenter = 'stop()' @mouseleave = 'move()'>
            <div class="slid-show">
                <transition-group tag="ul" name="list">
                    <li
                    v-for="(item,index) in pictureItems" 
                    :key="'a'+index" 
                    v-show="index == mark"
                    >
                        <a href="#">
                            {{index + 1}}
                            <img :src="item.url" alt="">
                        </a>
                    </li>
                </transition-group>
            </div>
            <!-- 轮播按钮 -->
            <div class="bar">
                <div
                class="origin-color"
                v-for = '(btn,index) in pictureItems.length'
                :key = 'index'
                :class = '{mouseColor:isMouseColor == index,clickColor:isClickColor == index}'
                @mouseenter = 'btnEnter(index)'
                @mouseleave = 'btnLeave()'
                @click = 'change(index)'
                >{{index + 1}}</div>
            </div>
        </div>
  </div>
</template>
<script>
// 导入图片(从这边导入)
import a from '../assets/logo.png';
export default {
    data(){
        return {
            // 索引mark
            mark:0,
            // 图片路径
            pictureItems:[
                {url:'http://dummyimage.com/1745x492/f1d65b'},
                {url:'http://dummyimage.com/1745x492/40b7ea'},
                {url:'http://dummyimage.com/1745x492/e3c933'},
                {url:'http://dummyimage.com/1745x492/f1d65b'},
            ],
            // 定时器
            timer:null,
            // 按钮索引
            isMouseColor:null,
            isClickColor:0
        }
    },
    methods:{
        //  mark++
        autoplay () {
            this.mark ++;
            if(this.mark == this.pictureItems.length){
                this.mark = 0;
            }
        },
        //  动画停止
        stop () {
            clearInterval(this.timer)
        },
        //  动画运行
        move () {
            this.timer = setInterval(this.autoplay,2500)
        },
        //  锁定到当前索引的图片
        change(data){
            this.mark = data;
            this.isClickColor = data
        },
        btnEnter(data){
            this.isMouseColor = data
        },
        btnLeave(){
            this.isMouseColor = null
        }
    },
    created () {
        // this.$nextTick(() => {
        //     this.timer = setInterval(() => {
        //         this.autoplay()
        //     },2500)
        // })
        this.stop()
    }
}
</script>
<style scoped>
    .content{
        min-height:600px;
    }
    .slide{
        width:400px;
        height:200px;
        overflow:hidden;
        margin:0 auto;
        position:relative;
    }
    .slid-show{
        width:1000%;
        height:200px;
        display:flex;
    }
    .slid-show li{
        width:400px;
    }
    .bar{
        width:200px;
        height:30px;
        position:absolute;
        bottom:0;
        left:100px;
        display:flex;
        justify-content:space-around;
        z-index:100000;
    }
    .bar .origin-color{
        width:40px;
        height:20px;
        background:#ccc;
        cursor:pointer;
    }
    .bar .mouseColor{
        background:rgb(151, 151, 236);
        color:#fff;
    }
    .bar .clickColor{
        background:rgb(1, 1, 238);
        color:#fff;
    }
    /*  轮播动画CSS */
    .list-enter-active{
        transform:translateX(0);
        transition:all 1.5s ease; 
    }
    .list-leave-active{
        transform:translateX(-100%);
        transition:all 1.5s ease; 
    }
    .list-enter{
        transform:translateX(-100%);
    }
    .list-leave{
        transform:translate(0);
    }
</style>

 