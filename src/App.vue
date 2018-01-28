<template>
  <div id="app">
    <header class="header">
        <router-link id="logo" to="home" tag="div">{{headerMsg}}</router-link>
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
    <router-view></router-view>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import footerDiv from '@/components/footerDiv';

export default {
  name: 'App',
  data () {
    return {
        headerMsg:"我是logo",
        items: [
            { 
                li:"主页" ,
                link:"home"
            },
            { 
                li:"日志", 
                link:"logo"
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
                li:"项目",
                link:"items"
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
    }
  },
  components: {
    footerDiv
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
        background:#27303f;
    }
    .content{
        color:#000;
    }
    #logo,.nav{
        line-height:80px;
        height:100%;
    }
    #logo{
        width:80px;
        cursor:pointer;
        margin-left:40px;
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
        min-height:600px;
    }
</style>
