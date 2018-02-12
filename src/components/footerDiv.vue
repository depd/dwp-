<template>
  <div id="footers">
        <div>{{footerMsg}}</div>
  </div>
</template>
<script> 
    export default {
        name:"footers",
        data(){
            return {
                footerMsg:"这已经是底部了，你还想要怎样？"
            }
        }
    }   
</script>
<style scoped>
     #footers{
        width:100%;
        height:80px;
        background: #010101;
    }
    #footers div{
        color:#ccc;
        font-size:16px;
        text-align:center;
        line-height:80px;
    }
</style>

