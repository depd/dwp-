<template>
  <div id="app">
    <header class="header">
        <router-link id="logo" to="home" tag="div" @click.native="homeEnter">
            <img :src="headerMsg" alt="">
        </router-link>
        <ul class="nav">
            <router-link
            tag="li"
            v-for="(item,index) in items" 
            :class="{liactive:isliactive == index,changeColor:isChangeColor==index}" 
            :key="item.id" 
            @mouseenter.native="enter(index)"
            @mouseleave.native="leave()" 
            @click.native="changeColor(index)" :to="{path:item.link}">{{item.li}}</router-link>
        </ul>
    </header>
    <!-- 利用keep-alive 缓存需要缓存的页面 -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import footerDiv from '@/components/footerDiv';
import logoImg from '@/assets/logo.jpg';
import bgImg from '@/assets/bg.jpg';

export default {
    name: 'App',
    data () {
        return {
            headerMsg:logoImg,
            urls: 'url(' + bgImg + ')',
            items: [
                { 
                    li:"主页" ,
                    link:"home"
                },
                { 
                    li:"项目",
                    link:"items"
                },
                { 
                    li:"说说",
                    link:"speak"
                },
                { 
                    li:"相册",
                    link:"picture"
                },
                { 
                    li:"日志",
                    link:"logo"
                }
            ],
            // 划入改变字体颜色
            isliactive:0,
            // 点击改变字体颜色
            isChangeColor:0
        }
    },
    methods:{
        enter(index){
            this.isliactive = index;
        },
        leave(){
            this.isliactive = null;
        },
        changeColor(index){
            this.isChangeColor = index;
        },
        homeEnter(){
            this.isChangeColor = 0;
        },
    },
    components: {
        footerDiv
    },
    mounted () {                                                                                                                                                                                                                                                                                                                                             
        this.$nextTick(function(){n 
            this.isChangeColor = 0; 
            document.getElementsByClassName("conten  t")[0].style.backgroundImage = this.urls;
        });
    }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color:#ccc;
    }
    .header{
        height:80px;
        display:flex;
        justify-content:space-between;
        background:#010101;
    }
    .content{
        color:#ff6100;
        min-height:800px;
        overflow: hidden;
    }
    #logo,.nav{
        line-height:80px;
        height:100%;
    }
    #logo{
        width:120px;
        cursor:pointer;
        margin-left:40px;
    }
    #logo img{
        width:120px;
        height:80px;
    }
    .nav{
        width:40%;
        display:flex;
        list-style:none;
        justify-content: space-around;
        margin-right:40px;
        box-sizing:border-box;
    }
    .nav li{
        cursor: pointer;
        height:100%;
        width:20%;
    }
    .liactive{
        color:blueviolet;
    }
    .changeColor{
        background:blueviolet;
        color:#fff;
    }
    router-view{
        min-height:800px;
    }
</style>
