<template>
  <div
    style="width: 100%; padding-bottom: 50px"
    class="position_B_R expal_height"
  >
    <div class="top_div">
      <el-row>
        <el-col :xs="24" :sm="24">
          <div class="tittle_all flex_start_f">
            <img
              style="width: 40px"
              class="rending_img"
              src="../../assets/img/icon.png"
              alt=""
            />&nbsp;&nbsp;Visaデビット申込
          </div>
        </el-col>
      </el-row>
      <el-row style="">
        <el-col :xs="0" :sm="24">
          <div
            style="
              width: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
            "
          >
            <img
              style="width: 100%; height: 100%"
              class="rending_img"
              src="../../assets/steps/step_pc_02@3x.png"
              alt=""
            />
          </div>
        </el-col>
      </el-row>
      <el-row style="">
        <el-col :xs="24" :sm="0">
          <div
            style="
              width: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
            "
          >
            <img
              style="width: 100%; height: 100%"
              class="rending_img"
              src="../../assets/steps/step_02@3x.png"
              alt=""
            />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :span="24"
          class="flex_center"
          style="font-size: 14px; width: 100%"
        >
          <div
            class=" "
            style="
              background-color: #f7f7f7;
              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              margin: 10px 0;
              padding: 10px;
              width: 100%;
            "
          >
            <div>以下の本人確認書類のいずれかをご用意ください。</div>
            <div style="padding: 20px; width: 100%" class="flex_s_c">
              <div class="mar_l_r flex_c_c" style="width: 200px">
                <img class="rending_img width_img" :src="url01" />
                <div class="flex_center" style="width: 100%; padding: 10px 0">
                  運転免許証
                </div>
              </div>
              <div class="mar_l_r flex_c_c" style="width: 200px">
                <img class="rending_img width_img" :src="url03" />
                <div class="flex_center" style="width: 100%; padding: 10px 0">
                  マイナンバーカード
                </div>
              </div>
              <div class="mar_l_r flex_c_c" style="width: 200px">
                <img class="rending_img width_img" :src="url02" />
                <div class="flex_center" style="width: 100%; padding: 10px 0">
                  運転経歴証明書
                </div>
              </div>
            </div>
            <div>
              本人確認書類を撮影する際は、記載事項がはっきり読み取れるように撮影してください。不鮮明な場合はお手続きができず、再度お申込みをお願いすることがあります。
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col
          :span="24"
          class="flex_center"
          style="font-size: 14px; width: 100%"
        >
          <div
            class=" "
            style="
              background-color: #f7f7f7;
              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              margin: 10px 0;
              padding: 10px;
              width: 100%;
            "
          >
            <div style="font-size: 13px">
              さらに、目的に応じて以下の書類をご用意ください。
            </div>
            <div style="padding: 20px 0; width: 100%" class="flex_s_c">
              <div class="title_3">
                A） 徳島県内の大学等に在学、または進学予定の方
              </div>
              <div
                class="mar_l_r flex_c_c flex_center"
                style="width: 100%; flex-direction: column"
              >
                <img class="rending_img width_img_2" :src="url01_2" />
                <div class="flex_center" style="width: 100%; padding: 10px 0">
                  学生証、または、合格通知書
                </div>
              </div>
              <div class="title_3">B） 給与振込受取口座を開設したい方</div>
              <div
                class="mar_l_r flex_c_c flex_center"
                style="width: 100%; flex-direction: column"
              >
                <div class="flex_center" style="width: 100%; padding: 10px 30px">
                  ※ 会社が指定する振込先金融機関に、阿波銀行が含まれていることをご確認ください。
                </div>
                <img class="rending_img width_img_2" :src="url03_2" />
                <div class="flex_center" style="width: 100%; padding: 10px 0">
                  社員証、または、保険証、または内定通知書
                </div>
              </div>
              <div class="title_3">C） 口座引落し用口座を開設したい方</div>
              <div
                class="mar_l_r flex_c_c flex_center"
                style="width: 100%; flex-direction: column"
              >
                <img class="rending_img width_img_2" :src="url02_2" />
                <div
                  class="flex_center"
                  style="width: 100%; padding: 10px 0; flex-direction: column"
                >
                  <span>引落し対象の料金等がわかる書類</span>
                  <span>（公共料金の領収書、不動産賃貸契約書など）</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="btom_div position_B_R">
      <el-row style="height: 90px">
        <el-col :xs="24" :sm="24" class="flex_center">
          <div class="flex_center btnw">
            <!-- <van-button
              class="flex_center button_All_ position_R application_w"
              type="primary"
              @click="goBack()"
            >
              <span class="position_R_">〈</span>
              <span>戻る</span>
            </van-button> -->
            <van-button
              class="flex_center button_All position_R application_w"
              type="primary"
              @click="getUrl"
            >
              <span>撮影する</span>
              <span class="position_L">〉</span>
            </van-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
import { startLoading, endLoading } from "@/utils/loading";
import { TAKE_PHOTO_POST } from "@/api/account/api.js";
import urlImage01 from "@/assets/img/img_driver.png";
import urlImage02 from "@/assets/img/img_driver_exper.png";
import urlImage03 from "@/assets/img/img_number.png";
import urlImage01_2 from "@/assets/img/img_student.png";
import urlImage02_2 from "@/assets/img/img_receipt.png";
import urlImage03_2 from "@/assets/img/img_work.png";
import myMixin from "../mixin.js";
import { decrypt } from "../../utils/jse";
export default {
  data() {
    return {
      url01: urlImage01,
      url02: urlImage02,
      url03: urlImage03,
      url01_2: urlImage01_2,
      url02_2: urlImage02_2,
      url03_2: urlImage03_2,
      toUrl: "",
      form:{
        tokushima_flg:'',
        introduce_flg:'',
        introduce_cd :''
      }
    };
  },
  mixins: [myMixin],
  computed: {
    ...mapGetters("user", ["getSeqNo"]),
  },
  mounted() {
    // this.getUrl()
    this.getState()
  },
  methods: {
    getUrl() {
      let params = {
        seq_no: this.getSeqNo,
        redirect_url: "/awab/kouzakaisetu/#/inputCustomer",
        introduce_cd:this.form.introduce_cd,
        tokushima_flg:this.form.tokushima_flg
      };
      startLoading();
      TAKE_PHOTO_POST(params)
        .then((res) => {
          popMessageFromApi(res);
          endLoading();
          if (res.success) {
            this.toUrl = res.data.application_url;
            // window.open(this.toUrl);
            this.toUrl = res.data.application_url;
            let a = document.createElement("a");
            a.setAttribute("href", this.toUrl);
            // a.setAttribute('target','_blank');
            document.body.appendChild(a);
            a.click();
            a.remove();
          }
        })
        .catch((err) => {
          endLoading();
        });
    },
    goBack() {
        this.$router.push({
          name: "explanation",
          params: {},
        });
      },
    goUrl() {
      window.open(this.toUrl);
    },
    getState() {

      this.form.tokushima_flg = decrypt(this.$store.state.user.tokushima_flg);
      this.form.introduce_flg = decrypt(this.$store.state.user.introduce_flg);
      this.form.introduce_cd = decrypt(this.$store.state.user.introduce_cd);
      
    },
  },
};
</script>

<style scoped>
.title_3 {
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
}
.mar_l_r {
  margin: 10px 10px;
}
.width_img {
  width: 200px;
}
.width_img_2 {
  width: 260px;
}
@media screen and (max-width: 767px) {
      .btnw {
      width: 100%;
    }
    .application_w {
      width: 150px;
    }
  .flex_s_c {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }
  .position_B_ {
  }
  .top_div {
    /* width: 100%;
  height: 530px;
  overflow-y: auto; */
  }
  .btom_div {
    /* width: 100%;
  min-height: 100px;
  height: calc(100% - 430px); */
  }
}

@media screen and (min-width: 768px) {
  .top_div {
    width: 100%;
    overflow-y: auto;
  }
  .btom_div {
    width: 100%;
    min-height: 100px;
    /* height: calc(100% - 480px); */
  }

  .position_B_ {
    position: absolute;
    bottom: 40px;
  }
  .expal_height {
    height: calc(100% - 50px - 29px);
  }
  .date_input_a {
    display: none;
  }
  .flex_s_c {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
