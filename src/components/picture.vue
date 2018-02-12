<template>
    <div class="content">
        <h2 class="picture-header">使用swiper轮播</h2>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                v-for="str in listImg"
                :key="str.id"
                :style="{backgroundImage:'url(' + str.url + ')'}"
                >
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
            <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// 导入图片(从这边导入)
import bgImg from '@/assets/bg.jpg';
import a from '@/assets/1.jpg';
import b from '@/assets/2.jpg';
import c from '@/assets/3.jpg';
import d from '@/assets/4.jpg';
import icons from '@/assets/icons.png';
export default {
    data(){
        return {
            listImg:[
                {url:a},
                {url:b},
                {url:c},
                {url:d}
            ]    
        }
    },
    mounted () {
        this.$nextTick(function(){
            document.getElementsByClassName("content")[0].style.backgroundImage = 'url(' + bgImg + ')';
        });
        let swiper = new Swiper('.swiper-container',{
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClikable:true,
            // 原本slide前后复制若干个slide
            loop:true,
            // 所要用到的loop个数(一般设置为本来slide的个数)
            loopedSlides: 4,
            speed:1000,
            // 自动执行
            autoplay:true,
            // 使用前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 获取分页器导航的容器元素 下面的小圆圈
            pagination:{
                el: '.swiper-pagination',
                clickable :true,
                renderBullet(index, className) {
                    return '<span style="width:20px; height:20px;opacity:1;" class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            onTouchEnd(){
                swiper.startAutoplay()
            }
        });
    }
}
</script>
<style scoped>
    /*  轮播动画CSS */
    /* .list-enter-active{
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
    } */
    .picture-header{
        margin: 20px auto;
    }
    .swiper-container{
        width: 60%;
        height: 600px;
    }
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        display: inline-block;
        background: #7c5e53;
    /* }
    .swiper-button-prev {
        left: -30px;
        width: 45px;
        height: 45px;
        background: url(icons.png) no-repeat;
        background-position: 0 0;
        background-size: 100%;
    }
    .swiper-button-prev:hover {
        background-position: 0 -46px;
        background-size: 100%
    }
    .swiper-button-next {
        right: -30px;
        width: 45px;
        height: 45px;
        background: url(/icons.png) no-repeat;
        background-position: 0 -93px;
        background-size: 100%;
    }
    .swiper-button-next:hover {
        background-position: 0 -139px;
        background-size: 100% */
    }
</style>



 