<template>
  <div class="body_">
    <div class="inner_border">
<div style="width: 100%; padding-top: 50px;" class="flex_c">

<div class="top_div" style="font-size:16px">
       <el-row style="width: 100%;">
      <el-col :xs="24" :sm="24">
        <div class=" tittle_all flex_start_f line_height" >
        <!-- <img style="width:40px" class="rending_img " src="../../assets/img/icon.png" alt="">&nbsp;&nbsp; -->
        郵送されるキャッシュカード等のお受取りに関するご注意事項
        </div>
      </el-col>
    </el-row>
   
     
    <div class="back_" style="background-color: #ffffff;padding: 10px 0 !important;">
    <div style="width: 100%;color: red;overflow: hidden;word-break: break-all;color:black;background-color: #ffffff;font-size:16px;line-height: 25px;" >
     <!-- 【郵送されるキャッシュカード等のお受取りに関するご注意事項】<br> -->
    <div class="line_height">１．カードのお届けは、郵便の事情により多少前後することがありますのでご了承ください。</div>
    <div class="line_height">２．カードをお受け取りいただけなかった場合の取扱は、次のとおりとさせていただきます。</div>
    <div class="line_height" style="padding-left: 20px;">(1)宛先不明（転送扱を含む）でお受け取りいただけなかった場合</div>
    <div class="line_height" style="padding-left: 40px;">当行にてカードを廃棄し、今回の口座開設のお申し込みを取り消しさせていただきます。（口座番号、ai-moが使えなくなります）</div>
    <div class="line_height" style="padding-left: 40px;">(注)転送届により、お届けのご住所以外で郵便物をお受け取りになっている場合につきましても、当行のカードは全て「転送不要扱」で郵送しておりますので、宛先不明となりお受け取りになれません。</div>
    <div class="line_height" style="padding-left: 20px;">(2)ご不在（留置期間経過）でお受け取りいただけなかった場合</div>
    <div class="line_height" style="padding-left: 40px;">当行にてカードを廃棄し、今回の口座開設のお申し込みを取り消しさせていただきます。（口座番号、ai-moが使えなくなります）</div>
    <div class="line_height">３．当行でカードを廃棄し口座開設のお取引を取り消しさせていただいたのちに、改めて口座開設を希望される場合は、当サービスまたは当行本支店窓口でお手続きをお願いいたします。</div>

    </div>
    </div>
</div>

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
.line_height{
    line-height: 30px;
}
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
    line-height: 25px;
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

  overflow-y: auto;
}
  .btom_div {
  width: 100%;

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