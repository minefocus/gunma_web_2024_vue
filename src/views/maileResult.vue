<template>
  <div style="width: 100%; height: calc(100% - 50px - 29px)">
    <div class="top_div">
      <el-row>
        <el-col :xs="24" :sm="24">
          <div class="tittle_all flex_start_f" style="">
            <img
              style="width: 40px"
              class="rending_img"
              src="@/assets/img/icon.png"
              alt=""
            />&nbsp;&nbsp;口座開設申込
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="flex_center">
          <div
            class="msgCenter"
            style="width: 100% !important; padding: 10px; font-size: 14px">
             メールを送信しました。<br>

            メールに記載されているリンクをタップして、お申込みを続けてください。<br>

            しばらくたってもメールが届かない場合は、メールアドレスに誤りがないか、拒否するよう設定されていないか、ご確認ください。<br>
          </div>
    
        </el-col>
        <el-col :span="24" class="flex_center" v-if="$store.state.page.isPc">
           <div
            class="msgCenter"
            style="width: 100% !important; padding: 10px; font-size: 14px;color:red ">
                口座開設のお申込みでは、本人確認書類を撮影するため、スマートフォンでの操作が必要です。<br>
                これ以降の操作は、スマートフォンをご利用ください。
          </div>
        </el-col>
      </el-row>


     
    </div>


  </div>
</template>
<script>

</script>

<style scoped>


@media screen and (max-width: 767px) {
  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }
  .flex_title_mail {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .flex_center_m_w {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
    .top_div {
  width: 100%;
  height: 430px;
  overflow-y: auto;
}
  .btom_div {
  width: 100%;
  min-height: 100px;
  /* height: calc(100% - 430px); */
}
}

@media screen and (min-width: 768px) {
  .top_div {
  width: 100%;
  height: 340px;
  overflow-y: auto;
}
  .btom_div {
  width: 100%;
  min-height: 100px;
  /* height: calc(100% - 340px); */
}
  .flex_title_mail {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .date_input_a {
    display: none;
  }
  .flex_center_m_w {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.msgCenter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f7f7f7;
  line-height: 30px;
}
</style>

