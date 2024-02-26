<template>
  <div style="width: 100%; height: calc(100% - 50px - 29px);" class="flex_c">

<div class="top_div" style="font-size:14px">
       <el-row style="width: 100%;">
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
        <img style="width:40px" class="rending_img " src="../assets/img/icon.png" alt="">&nbsp;&nbsp;口座開設申込
        </div>
      </el-col>
    </el-row>
    <div style="width:100%;height:25px;background:red;color: white;" class="flex_start_err_tittle">
     スマートフォンで操作してください
    </div>
     
    <div class="back_">
    <div style="width: 100%;color: red;overflow: hidden;word-break: break-all;padding: 0 10px;" >
    口座開設のお申込みでは、本人確認書類を撮影するため、スマートフォンでの操作が必要です。<br>
    スマートフォンをご利用ください。


    </div>
    <br>
   
    </div>
</div>

 

  </div>
</template>

<script>
import {mapGetters}from 'vuex'
    export default {
        data(){
            return {
               
            }
        },
        computed:{
            ...mapGetters([ 'error_message'])
        },
        mounted(){
          
        },
        methods:{
    closeWindow(){
      if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {    //适用于ie6不带提示关闭窗口
            window.opener = null;
            window.close();
        } else {
            window.open('', '_top');         //ie7之后不提示关闭窗口
            window.top.close();
        }
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {        //Firefox不提示关闭窗口
        window.location.href = 'about:blank ';
    } else {
        window.location.href="about:blank";
        window.opener = null;
        window.open('', '_self', '');        //其他浏览器
       
        window.close();
    }

    },
        }

    }
</script>

<style lang="scss" scoped>
.flex_c{
    display:flex;
    align-items: center;
    flex-direction: column;
}
.flex_start_err_tittle{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
}
.back_{
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    background-color: #f7f7f7;
}
    div.da-wrapper {
        width: 100%;
        height: auto;
        min-height: 100%;
        position: relative;
        min-width: 320px
    }
    
    div.da-wrapper .da-container {
        width: 100%;
        margin: auto
    }
    
 
@media screen and (max-width: 767px) {
  .redio_center {
    display: flex;
    justify-content: center;

  }

  .date_input_e {
    display: none;
  }
   .btn_w_ {
    width: 250px;
  }

      .top_div {
  width: 100%;
  height: 390px;
  min-height: 390px;
  overflow-y: auto;
}
  .btom_div {
  width: 100%;
  min-height: 300px;
//   height: calc(100% - 390px);
}
}

@media screen and (min-width: 768px) {
     .top_div {
  width: 100%;
  height: 340px;
  min-height: 340px;
  overflow-y: auto;
}
  .btom_div {
  width: 100%;
  min-height: 300px;
//   height: calc(100% - 340px);
}
   .btn_w_ {
    width: 250px;
  }
  .date_input_a {
    display: none;
  }
}
    div.da-error-wrapper {
        width: 320px;
        padding: 30px 0;
        margin: auto;
        position: relative
    }
    
    div.da-error-wrapper .da-error-heading {
        color: #e15656;
        text-align: center;
        font-size: 24px;
        font-family: Georgia, "Times New Roman", Times, serif
    }
    
    @-webkit-keyframes error-swing {
        0% {
            -webkit-transform: rotate(1deg)
        }
        100% {
            -webkit-transform: rotate(-2deg)
        }
    }
    
    @-moz-keyframes error-swing {
        0% {
            -moz-transform: rotate(1deg)
        }
        100% {
            -moz-transform: rotate(-2deg)
        }
    }
    
    @keyframes error-swing {
        0% {
            transform: rotate(1deg)
        }
        100% {
            transform: rotate(-2deg)
        }
    }
    
    div.da-error-wrapper .da-error-code {
        width: 100%;
        height: 300px;
        padding: 127px 16px 0 16px;
        position: relative;
        margin: auto;
        margin-bottom: 20px;
        z-index: 5;
        line-height: 1;
        font-size: 32px;
        text-align: center;
        background: url("../assets/img/error-pin.png") no-repeat center center;
        -webkit-transform-origin: center top;
        -moz-transform-origin: center top;
        transform-origin: center top;
        -webkit-animation: error-swing infinite 2s ease-in-out alternate;
        -moz-animation: error-swing infinite 2s ease-in-out alternate;
        animation: error-swing infinite 2s ease-in-out alternate
    }
    
    div.da-error-wrapper .da-error-code .tip {
        padding-top: 2px;
        color: #e15656;
    }
    
    div.da-error-wrapper .da-error-code .tip2 {
        padding-top: 15px;
    }
    
    div.da-error-wrapper .da-error-code .tip3 {
        padding-top: 20px;
        font-size: 16px;
        color: #e15656;
    }
    
    div.da-error-wrapper .da-error-pin {}
    
    p {
        margin: 0;
        padding: 0;
    }
</style>