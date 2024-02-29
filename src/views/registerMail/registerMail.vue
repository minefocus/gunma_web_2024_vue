<template>
  <div style="width: 100%;">
  
      <el-row>
        <el-col :xs="24" :sm="24">
          <div class="tittle_all flex_start_f" style="">
            <img
              style="width: 40px"
              class="rending_img"
              src="../../assets/img/icon.png"
              alt=""
            />&nbsp;&nbsp;Visaデビット申込
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="flex_center">
          <div
            class="msgCenter"
            style="width: 100% !important; padding: 10px; font-size: 14px"
          >
            メールにてお申込みページのURLをご案内いたします。
            <br>以下の入力フォームにメールアドレスをご入力いただき、「送信する」をタップしてください。<br>
            迷惑メール対策を実施している場合は、「@gunmabank.co.jp」からのメールを受信できるように設定変更をお願いします。

          </div>
        </el-col>
         <el-col :span="24" class="flex_center"  v-if="$store.state.page.isPc">
          <div
            class="msgCenter"
            style="width: 100% !important; padding: 10px; font-size: 14px;color:red"
          >
            本口座開設サービスはパソコンからはお申込いただけません。<br>お持ちのスマートフォンからお申込みください。
          </div>
        </el-col>
      </el-row>

      <!-- -------------- -->
      <el-row class="mobile_margin flex_center" style="margin: 35px 0">
        <el-col :xs="24" :sm="12">
          <el-row class="flex_center_m_w">
            <el-col :xs="24" :sm="6">
              <div class="tittle_out flex_title_mail">
                <span class=""> メールアドレス </span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <div class="tittle_out flex_title_mail">
                <el-input
                  ref="email_01"
                  :maxlength="255"
                  id="email_01"
                  class="input_inner_100"
                  v-model.trim="email"
                  placeholder="例：gunma_tarou@mail.jp"
                  @input="deleteAllBackgroundColor(['email_01'])"
                  @blur="toSBCNum"
                ></el-input>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
  
 <el-row class="mobile_margin flex_center" style="margin: 45px 0">
         <van-button class="flex_center button_All  position_R" type="primary"  @click="sendMail()" >
          
          <span>送信</span>
          <span class="position_L">〉</span>
          
        </van-button>
 </el-row>
<!-- <Login :show='centerDialogVisible'/> -->
  </div>

</template>
<script>
import { isEmpty, validMailAddress, toSBC } from "@/utils/validate.js";
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
import SetDom from "@/utils/setDomErr.js";
import { MAILE_APPLY_POST } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import { TimeFormat } from "@/utils/date-time.js";
export default {
  data() {
    return {
      centerDialogVisible:false,
      email: "",
      DomList: [],
    };
  },
  created() {
    let year = new Date();
    let value = TimeFormat(year, "yyyyMMdd");
   
  },
  mounted(){
    this.centerDialogVisible = true
  },
  methods: {
    deleteBackgroundColor(id) {
      SetDom.deleteAllBackgroundColor(id);
    },
    deleteAllBackgroundColor(ids) {
      SetDom.deleteAllBackgroundColor(ids);
    },
    Err(id, msg, ref) {
      this.$message.error(msg);
      this.DomList = SetDom.changeBackgroundColor(this.DomList, id);
      // this.$refs[ref].focus();

      
    },
    Errs(ids, msg, ref) {
      this.$message.error(msg);
      for (let id of ids) {
        this.DomList = SetDom.changeBackgroundColor03(this.DomList, id);
      }
      // this.$refs[ref].focus();
    },
    // 全角转半角
    toSBCNum(key) {
      this.email = toSBC(this.email.trim().replace(/" "/g, ""));
    },
    sendMail() {
      this.toSBCNum();
      if (isEmpty(this.email)) {
        this.Err("email_01", MESSAGE.MsgErrCheck024, "email_01"); //メールアドレスを入力してください
        return false;
      } else if (!validMailAddress(this.email)) {
        this.Err("email_01", MESSAGE.MsgErrCheck025, "email_01"); //メールアドレスに使用できない文字が含まれています
        return false;
      }
      let params = {
        mail_address: this.email,
      };
      startLoading();
      MAILE_APPLY_POST(params)
        .then((res) => {
          popMessageFromApi(res);
          endLoading();
         if(res.success){
          this.toPage();
          }

        })
        .catch((err) => {
          endLoading();

        });
    },

    toPage() {
      this.$router.push({
        name: "maileResult",
        params: {},
      });
    },
  },
};
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
  /* height: 430px; */
  /* overflow-y: auto; */
}
  .btom_div {
  width: 100%;
  /* min-height: 100px; */
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
