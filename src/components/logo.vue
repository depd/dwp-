<template>
    <div class="content">
        <div class="logo-content">
            <h2>遇到的问题以及解决方法</h2>
            <ul class="logo-question">
                <li
                v-for="(logoItem,index) in logoItmes"
                :key="index.id"
                class="logo-li"
                :class="{addLogoLi:isLiActive == index}"
                @mouseenter = logoEnter(index)
                @mouseleave = logoLeave()
                >
                    {{logoItem.text}}
                    
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import bgImg from '@/assets/bg.jpg';
export default { 
    data(){
        return {
            isLiActive:null,
            logoItmes:[
                { 
                    text:
                    '在view-link上添加方法（click，mouseenter等），需要在方法后面添加.native，否则设置的方法无效'
                },
                {
                    text:
                    '如果有需要引用到图片，先import过来。'
                },
                {
                    text:
                    '首页的圆环：操作的DOM的ID，动态设置ID， :id=\" \'canvas\' + index\"（用到v-for），设置有规律一点，否则获取有点麻烦'
                },
                {
                    text:
                    '圆环的字：用canvas的ctx.fillText设置文字，若是动态的话，需要没设置一次就要画一个与背景色相同的圆环，把上个圆环的字盖住，不然渲染的文字会在前一个文字的基础上继续渲染。'
                },
                {
                    text:
                    '说说组件中：使用echarts中动态改变series.type，需要首先在vue组件的data中先声明出来'
                },
                {
                    text:
                    'view-link中间的content的背景图片，先拿到（import），(再在data里面声明/ 可有可无)，最后在mounted中设置'
                },
                {
                    text:
                    '在使用swiper时，修改下面小圆圈的样式，在下面style中修改不起作用，会被swiper自带的样式覆盖，在自带的方法里面用字符串的形式修改style'
                },
                {
                    text:
                    '在使用echarts时，X轴与Y轴的文字大小颜色无效，可以倾斜（暂无法解决）'
                }
            ]    
        }
    },
    methods:{
        logoEnter(index){
                        
            if(this.isLiActive != index){
                this.isLiActive = index;
            }
        },
        logoLeave(){
            this.isLiActive = null
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
    .content{
        overflow:hidden;
    }   
    .logo-content h2{
        margin-top:20px;
    }
    .logo-question{
        width:50%;
        margin:0 auto;
    }
    .logo-question li.logo-li{
        color:#ff6100;
        width:100%;
        margin:20px auto;
        text-align:left;
        font-size:20px;
    }
    .logo-question li.addLogoLi{
        color:blueviolet;
    }
</style>

