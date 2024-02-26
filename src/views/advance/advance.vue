<template>
  <div style="width: 100%; padding-bottom: 50px">
    <el-row>
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
          <img
            style="width: 40px"
            class="rending_img"
            src="../../assets/img/icon.png"
            alt=""
          />&nbsp;&nbsp;口座開設申込
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="0" :sm="24">
        <div
          style="
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          "
        >
          <img
            style="width: 100%; height: 100%"
            class="rending_img"
            src="../../assets/steps/step_account_pc702@3x.png"
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
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          "
        >
          <img
            style="width: 100%; height: 100%"
            class="rending_img"
            src="../../assets/steps/step_account_m702@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>

    <div style="width: 100%; margin-top: 10px" class="back_img_">
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w"
              >登録住所
              <span
                class="flex_center border_red_around"
                style="font-weight: normal"
                >必須</span
              >
            </span>
          </div>
        </el-col>
        <el-col ref="tokushima_flg" :xs="24" :sm="18" class="back_wight border_l">
          <div
            id="tokushima_flg"
            class="content_ input_01 "
          >
            <el-row>
            <el-col :span="24">
                <span class="_normal" style="font-weight: bolder;font-size:14px">本人確認書類（運転免許証やマイナンバーカード）に記載されている住所は徳島県内ですか？</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="flex_center" style="justify-content: space-around;margin: 10px 0;">
            <el-radio v-model="form.tokushima_flg" label="0" @change="clear()">はい</el-radio>
            <el-radio v-model="form.tokushima_flg" label="1" @change="clear()"> いいえ</el-radio>
            </el-col>
          </el-row>

          </div>
        </el-col>
      </el-row>

      <el-row v-if="form.tokushima_flg == 1" class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w"
              >紹介コード
              <span
                class="flex_center border_red_around"
                style="font-weight: normal"
                >必須</span
              >
            </span>
          </div>
        </el-col>
        <el-col ref="introduce_flg" :xs="24" :sm="18" class="back_wight border_l">
          <div id="introduce_flg" class="content_ input_01 " >
            <el-row>
            <el-col :span="24">
                <span class="_normal" style="font-weight: bolder;font-size:14px">紹介コードはお持ちですか？</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="margin: 10px 0;">
                <span class="_normal" style="color:red;">※紹介コードとは、本サービスで申込をスムーズに行うため、取引店の担当者が事前にご案内させていただいたコードです。</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="flex_center" style="justify-content: space-around;margin: 10px 0;">

            <el-radio v-model="form.introduce_flg" label="0" @change="clear02()">はい</el-radio>
            <el-radio v-model="form.introduce_flg" label="1" @change="clear02()"> いいえ</el-radio>
            </el-col>
          </el-row>
            <el-row v-if="form.introduce_flg === '0'" style="margin-bottom: 10px;">
            <el-col :span="24">
                <span class="_normal" style="font-weight: bolder;font-size:14px;">紹介コードを入力してください</span>
            </el-col>
          </el-row>
          <el-row v-if="form.introduce_flg === '0'">
              <el-col :span="24">
                    <el-input ref="introduce_cd" id="introduce_cd" v-model="form.introduce_cd" type="tel"
                          class="input_inner_100" maxlength="4" placeholder="半角数字4桁" @blur="toSBCNum('introduce_cd')"
                          @input="deleteAllBackgroundColor(['introduce_cd']),replaceNum02('introduce_cd')" />
              </el-col>
          </el-row>

          </div>
        </el-col>
      </el-row>
    </div>

    <el-row style="height: 90px">
      <el-col :xs="24" :sm="24" class="flex_center">
        <van-button
          class="flex_center button_All position_R"
          type="primary"
          @click="toPage()"
        >
          <span>次へ</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import myMixin from "../mixin.js";
import SetDom from "@/utils/setDomErr.js";
import {isEmpty,checkHalNum,toSBC,halfToFull,toSBCNum,similarBirthday,isSimilarToPhoneNumber,repeatNum} from "@/utils/validate.js";
import { decrypt } from "../../utils/jse";
import { GET_ACCOUNT_STORE } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
  import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
export default {
  data() {
    return {
      DomList:[],
      account_store_number_list_all:[],
      form: {introduce_cd:'',tokushima_flg:'',introduce_flg:''},
      account_reason:'',
      account_reason_other:'',
      account_store_number:''
    };
  },
  mixins: [myMixin],
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication", "getAllVlues"]),
  },
  created() {},
  mounted() {
    document.getElementsByClassName("body_")[0].scrollTo(0, 0);
    if (!this.$store.state.page.isPc) {
      this.getList();
      this.getState();
   
    }
  },
  components: {},
  methods: {
    ...mapMutations({
      setSeqNo: "user/setSeqNo",
      setApplication: "user/setApplication",
      setState: "user/setState",
    }),

    init() {
    },
    clear(){
       this.form.introduce_cd = ''
       this.form.introduce_flg = ''
       console.log(this.form);
    },
    clear02(){
       this.form.introduce_cd = ''
       console.log(this.form);
    },
    getList() {
        try {
          let params = {
            seq_no:this.getSeqNo,
            zip_code_pre: '770',
          };
          startLoading();
          GET_ACCOUNT_STORE(params)
            .then((res) => {
              popMessageFromApi(res);
              endLoading();
              if (res.success) {
                this.account_store_number_list_all = res.data.all_store_list;
              }
            }).catch((err) => {
              console.log(err);
                endLoading();
            });
        } catch (error) { 
          console.log(error);
        }
      },
    toPage() {
      if(this.check()){
        this.setValues()
          this.$router.push({
            name: "explanation"
          });
      }
 
    },

    scrollTop(id) {
      setTimeout(() => {
        let dom = document.getElementById(id);
        var scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scroll_top = document.documentElement.scrollTop;
        } else if (document.getElementsByClassName("body_")) {
          scroll_top = document.getElementsByClassName("body_")[0].scrollTop;
        }
        const { top, height } = dom.getBoundingClientRect();
        // 元素的中心高度
        const elCenter = top + height / 2;
        // 窗口的中心高度
        const center = window.innerHeight / 2;
        setTimeout(() => {
          document.getElementsByClassName("body_")[0].scrollTo({
            top: scroll_top - (center - elCenter),
            behavior: "smooth",
          });
        }, 100);
      }, 300);
    },
    toSBCNum(key) {
      this.form[key] = toSBC(this.form[key].trim());
    },
    replaceNum02(key) {
        let num = this.form[key]+'';
        this.form[key] = num.replace(/[^0-9０-９]/g, "");
    },
    Err(id, msg, ref) {
      this.$message.error(msg);
      this.DomList = SetDom.changeBackgroundColor(this.DomList, id);
      this.scrollTop(id)
    },
    deleteAllBackgroundColor(ids) {
      SetDom.deleteAllBackgroundColor(ids);
    },
    check() {
      if(isEmpty(this.form.tokushima_flg)){
        this.$message.error('本人確認書類に記載の住所が徳島県内かどうか選択してください');
        this.scrollTop('tokushima_flg')
        return fasle;
      }
      
      if(this.form.tokushima_flg == '1' && isEmpty(this.form.introduce_flg)){
        this.$message.error('紹介コードをお持ちかどうか選択してください');
        this.scrollTop('introduce_flg')
          return fasle;
      }

      if(this.form.introduce_flg === '0'){
        if(isEmpty(this.form.introduce_cd)){
       this.Err("introduce_cd",'紹介コードを入力してください', "introduce_cd");
        return false;
      }
        if (this.form.introduce_cd.length != 4 || !checkHalNum(this.form.introduce_cd)) {
            this.Err("introduce_cd","紹介コードの入力に誤りがあります。","introduce_cd");
            return false;
      }
    
    

       let firstNum = this.form.introduce_cd.charAt(0);
       let stfNum = this.form.introduce_cd.substring(1, 4);
       let hasB = false;
       let hasA = false;
          if(firstNum == "0"){
              if(this.form.introduce_cd == '0172'){
                 hasA = true
                 
                }else{
                for (let item of this.account_store_number_list_all) {
                if (item.store_number == stfNum) {
                  hasB = true;
                  break;
                } else {
                  hasB = false;
                  continue;
                }
              }
                }

            
            if(!hasA && !hasB){
              this.Err("introduce_cd","紹介コードの入力に誤りがあります。","introduce_cd");
            return false; 
            }
          }else{
            this.Err("introduce_cd","紹介コードの入力に誤りがあります。","introduce_cd");
            return false; 
          }
  }
      return true;
    },
   getName(code) {
        if (!isEmpty(code)) {
          let i =1;
          let name ='';
          if(code !== '0172'){
          for (let res of this.account_store_number_list_all) {
            i++
            if (res.store_number == code) {
              name = res.store_nm;
              break;
            }
          }
          }
          return name;
        } else {
          return "";
        }
      },
    //store设置值保存
    setValues() {
        let introduce_nm = this.getName(this.form.introduce_cd.substring(1,4));
        this.$store.commit("user/setState", {
          tokushima_flg:this.form.tokushima_flg,
           introduce_flg: this.form.introduce_flg,
           introduce_list: JSON.stringify(this.account_store_number_list_all),
          introduce_cd: this.form.introduce_cd,
          introduce_nm: introduce_nm,
          account_store_number: '',
          account_reason:'',
          account_reason_other:'',
        });
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
.top_waring {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  font-size: 14px;
}

.height_100 {
  height: 100%;
}

.height_40 {
  height: 40px;
}

.msg_font {
  font-size: 12px;
}

.height_40px {
  height: 40px;
}

.padding_5px {
  padding: 5px;
}
.font_p {
  height: 25px;
}
@media screen and (max-width: 767px) {
  .padding_m_pc {
    padding-left: 25px;
  }
  .font_p_1 {
    margin-bottom: 25px;
  }

  .p_t_m {
    border-top: 1px solid #e6e6e6;
  }

  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }

  .flex_center_mobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .btn_w_ {
    width: 200px;
  }
  .font_p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

@media screen and (min-width: 768px) {
  .mar_top_15 {
    margin-top: 15px;
  }
  .padding_m_pc {
    padding-right: 23px;
  }
  .font_p {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .btn_w_ {
    width: 200px;
  }

  .p_l_10 {
    padding-right: 10px;
  }

  .date_input_a {
    display: none;
  }

  .padding_checkbox {
    padding: 0px 0;
  }

  .position_ab {
    position: absolute;
  }

  .position_ {
    position: absolute;
    top: 0;
    left: 0;
  }

  .position_01 {
    left: 0;
    top: 60px;
  }

  .position_02 {
    left: 0;
    top: 50px;
  }

  .flex_center_mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .border_r_01 {
    border-right: 1px solid #e6e6e6;
  }
}
</style>
