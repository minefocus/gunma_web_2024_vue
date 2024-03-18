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
          style="
            font-size: 14px;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 15px;
          "
        >
          <div style="font-size: 17px; font-weight: bold; color: #03a369">
            続いて、在留カードを撮影します。
          </div>
          <div
            class=" "
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background-color: #f7f7f7;
              margin: 10px 0;
              padding: 10px;
              width: 100%;
            "
          >
            <div
              style="margin: 15px 0; padding: 0 10px; width: 100%"
              class="flex_s_c"
            >
              <div
                class="flex_center"
                style="width: 100%; padding: 10px 0; color: red"
              >
                在留資格が「永住者」以外の方はお申込みできません。群馬銀行本支店で受付をいたします
              </div>
              <div class="mar_l_r flex_c_c" style="width: 200px">
                <img class="rending_img width_img" :src="url01" />
              </div>
            </div>
            <div style="padding: 0 10px">
              本人確認は株式会社Liquidの「本人認証サ一ビス」にて行います。これより、株式会社Liquidのペ一ジへ遷移します。
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="btom_div position_B_R">
      <el-row style="height: 90px">
        <el-col :xs="24" :sm="24" class="flex_center">
          <div class="flex_center btnw">
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
import { mapGetters,mapMutations } from "vuex";
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
import { startLoading, endLoading } from "@/utils/loading";
import { TAKE_PHOTO_POST,EKYC_BACK_INIT } from "@/api/account/api.js";
import urlImage01 from "@/assets/img/img_residence@3x.png";

import myMixin from "../mixin.js";
import { decrypt } from "../../utils/jse";
export default {
  data() {
    return {
      url01: urlImage01,
      form: {
        introduce_flg: "",
        application_seq:'',
        application_id:''
      },
      id_document_type_1:''
    };
  },
  mixins: [myMixin],
  computed: {
    ...mapGetters("user", ["getSeqNo"]),
  },
  mounted() {
    if (this.$route.query.hasOwnProperty('application_id')) {
      this.form.application_id = this.$route.query.application_id
    }else{
        this.form.application_id = decrypt(this.$store.state.user.application_id_1);
    }
    this.setState();
    this.getMsg();
  },
  methods: {
    ...mapMutations({
      setSeqNo: "user/setSeqNo",
      setApplication_1: "user/setApplication_1",
      setState:"user/setState"
    }),
    getMsg(){

      let params = {
        application_id:this.form.application_id
      };
      startLoading();
      EKYC_BACK_INIT(params).then((res) => {
          popMessageFromApi(res,() => { this.$router.push({ name: "explanation", params: {} }) });
          endLoading();
          if (res.success) {
            this.id_document_type_1 = res.data.id_document_type;
          }
        })
        .catch((err) => {
          endLoading();
        });
    },
    getUrl() {
      let params = {
        seq_no: this.getSeqNo,
        redirect_url: "/gunmab/visa/#/inputCustomer",
        application_seq: "2"
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
    setState() {
      this.setState({
        application_id_1: this.form.application_id,
        // id_document_type_1: this.id_document_type_1
    })
    }
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
