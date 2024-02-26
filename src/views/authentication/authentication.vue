<template>
  <div style="width: 100%;padding-bottom:50px">

    <el-row>
      <el-col :xs="24" :sm="24">
         <div class="tittle_all flex_start_f" style="padding: 10px 0 0 0  !important;">
        <img style="width:40px" class="rending_img " src="../../assets/img/icon.png" alt="">&nbsp;&nbsp;開設口座案内
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" class="confirm_waring">
        口座開設のお申込みの際に設定された、お名前と生年月日を入力してください。
      </el-col>
    </el-row>

    <div style="width:100%;" class="back_img_">

      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">受付番号
              <!-- <span class="flex_center border_red_around" style="font-weight: normal">必須</span> -->
            </span>
          </div>
        </el-col>
        
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
            &nbsp; {{seq_no_show}}
           
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!--------------------------------------------------------------------------->
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お名前（フリガナ）
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="11">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="4">
                    <div class="tittle_out_in">
                      <span class="flex_title">セイ </span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="kana_last_name" id="kana_last_name" class="input_inner_100"
                      v-model="form.kana_last_name" placeholder="15文字まで（例）アワ" :maxlength="15"
                      @blur="changeLastKanaName('kana_last_name')" @input="kanaOnInput('kana_last_name','kana_last_name')">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :xs="24" :sm="11" class="padidng_left">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="4">
                    <div class="tittle_out_in">
                      <span class="flex_title">メイ </span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="kana_first_name" id="kana_first_name" class="input_inner_100"
                      v-model="form.kana_first_name" :maxlength="15" @blur="changeLastKanaName('kana_first_name')"
                      placeholder="15文字まで（例）タロウ" @input="kanaOnInput('kana_first_name','kana_first_name')"></el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- -------------- -->

      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">生年月日
              <span class="flex_center border_red_around" style="font-weight: normal;">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c " id="birthday">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="11">
                <el-row class="row_height_100 flex_center"  ref="birthday">
                  <el-col :xs="0" :sm="4">
                    <div class="">
                      <span class="flex_title">&nbsp;</span>
                    </div>
                  </el-col>
                  <el-col :xs="0" :sm="20" class="show_birthday ">
                    <el-date-picker ref="birthday01" id="birthday01" v-model="birthday" type="date" format="yyyy/MM/dd"
                      placeholder="生年月日" @change="confirm">
                    </el-date-picker>
                  </el-col>
                  <el-col :xs="24" :sm="0" class="flex_center date_input_a show_birthday">
                    <el-input ref="birthday02" id="birthday02" class="input_inner_100" readonly v-model="birthday"
                      @focus="show = true" placeholder="生年月日">
                    </el-input>
                    <van-popup v-model="show" position="bottom">
                      <van-datetime-picker v-model="currentDate" type="date" title="" :min-date="minDate"
                        :max-date="maxDate" @confirm="confirm($event)" @cancel="show = false" />
                    </van-popup>
                  </el-col>
                </el-row>
              </el-col>

            </el-row>
          </div>
        </el-col>

      </el-row>


    </div>
    <!-- -------------- -->

    <el-row style="height: 90px;">
      <el-col :xs="24" :sm="24" class="flex_center">

    
      <van-button class="flex_center button_All  position_R" type="primary"  @click="lockInfo" >
          <span>次へ</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import SetDom from "@/utils/setDomErr.js";
import {isEmpty,checkHalNum,toSBC,halfToFull,toSBCNum,Symbol02,changeToDBC,toKatakanaCase,checkHal02} from "@/utils/validate.js";
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
import { AUTHENTICATION_INIT,CHECK_LOCK_INFO } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import {decrypt} from '../../utils/jse'
export default {
  data() {
    return {
        seq_no:'',
        seq_no_show:'',
      form: {
       
        kana_last_name: "",
        kana_first_name: "",
       
      },
      show:false,
      DomList: [],
      birthday: "", //生年月日
      currentDate: new Date(),
      minDate: new Date(1945, 0, 1),
      maxDate: new Date(2999, 10, 1),

    };
  },
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication"]),
  },
  created() {
    
  },
  mounted() {
    this.setPageNum(true)
    if (this.$route.query.hasOwnProperty('seq_no')) 
    {
      this.setSeqNo(this.$route.query.seq_no);
    }
    this.seq_no = this.$route.query.seq_no   
    this.getState();
    this.init()

  },
  components: {
  },
  methods: {
    ...mapMutations({
      setSeqNo: "user/setSeqNo",
      setApplication: "user/setApplication",
      setPageNum: "page/setPageNum"
    }),
      //kana入力限制
  kanaOnInput(eventName,id) {
    this.deleteBackgroundColor(eventName,id)
    this.form[eventName] = this.form[eventName].replace(/[^\u30A0-\u30FF\u3040-\u309Fa-zA-Zａ-ｚＡ-Ｚ]/g, '');
  },

  changeLastKanaName(eventName) {
    this.form[eventName]= changeToDBC(toKatakanaCase(this.form[eventName]))
  },
    init(){
       let params = {
        seq_no: this.getSeqNo
      };
      startLoading();
      AUTHENTICATION_INIT(params).then((res) => {
   
          popMessageFromApi(res);
          endLoading();
          if (res.success) {
            this.seq_no_show = res.data.seq_no
          }
        }).catch((err) => {

          endLoading();
        });
    },
    lockInfo() {
        if (!this.check()) {
          return
        }

      let params = {
        seq_no: this.getSeqNo,
        kana_last_name:	this.form.kana_last_name,		
        kana_first_name:	this.form.kana_first_name,		
        birthday:	this.birthday

      };
      startLoading();
      CHECK_LOCK_INFO(params).then((res) => {
   
          popMessageFromApi(res);
          endLoading();
          if (res.success) {
            this.toPage()
          }
        }).catch((err) => {

          endLoading();
        });
      
    },
    toPage() {
    
        this.setState();
        this.$router.push({
          name: "guide",
          params: {},
        });
      
    },

    // 半角 转 全角
    halfToFull(key) {
      this.form[key] = halfToFull(this.form[key].trim());
    },
    // 全角转半角
    toSBCNum(key) {
      this.form[key] = toSBC(this.form[key].trim());
    },
    confirm(value) {

      this.deleteAllBackgroundColor(["birthday01"]);
      this.deleteAllBackgroundColor(["birthday02"]);
      let year = value.getFullYear();
      let mouth = value.getMonth() + 1;
      let day = value.getDate();

      if (mouth.toString().length == 1) {
        mouth = '0' + mouth
      }
      if (day.toString().length == 1) {
        day = '0' + day
      }
      this.birthday = year + '/' + mouth + '/' + day
       this.currentDate = new Date(year, mouth, day);
      this.show = false
    },
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
    ErrOnlyColor(id, ref) {
      this.DomList = SetDom.changeBackgroundOnlyColor(this.DomList, id);

    },
    Errs(ids, msg, ref) {
      this.$message.error(msg);
      for (let id of ids) {
        this.DomList = SetDom.changeBackgroundColor03(this.DomList, id);
      }
      // this.$refs[ref].focus();
    },
    check() {
      this.deleteAllBackgroundColor(['kana_last_name', 'kana_first_name', 'birthday01', 'birthday02']);

    

      if (isEmpty(this.form.kana_last_name)) {
        this.Err("kana_last_name", 'お名前（フリガナ）を入力してください', "kana_last_name");
        return false;
      } else if (this.form.kana_last_name.length > 15 || checkHal02(this.form.kana_last_name)) {
        this.Err("kana_last_name", 'お名前（フリガナ）はそれぞれ全角カナ15文字までで入力してください', "kana_last_name");
        return false;
      }


      if (isEmpty(this.form.kana_first_name)) {
        this.Err("kana_first_name", 'お名前（フリガナ）を入力してください', "kana_first_name");
        return false;
      } else if (this.form.kana_first_name.length > 15 || checkHal02(this.form.kana_first_name)) {
        this.Err("kana_first_name", 'お名前（フリガナ）はそれぞれ全角カナ15文字までで入力してください', "kana_first_name");
        return false;
      }

      //生日
      if (isEmpty(this.birthday)) {
        this.$message.error('生年月日を入力してください');
        this.ErrOnlyColor("birthday01", "birthday01");
        this.ErrOnlyColor("birthday02", "birthday02");
        document.getElementById('birthday').scrollIntoView();

        return false;
      }
      
      return true;
    },

    //store设置值保存
    setState() {
      this.$store.commit("user/setState", {
        birthday: this.birthday,  //生年月日
        kana_last_name: this.form.kana_last_name,
        kana_first_name: this.form.kana_first_name,
       

      });
    },
    getState() {
      this.seq_no = this.$store.state.user.seq_no;
      this.form.kana_last_name = decrypt(this.$store.state.user.kana_last_name);
      this.form.kana_first_name = decrypt(this.$store.state.user.kana_first_name);
      this.birthday = decrypt(this.$store.state.user.birthday);
     
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
.font_p{
    height: 25px;
}
@media screen and (max-width: 767px) {
  .padding_m_pc{
    padding-left: 25px;
  }
    .font_p_1{
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
  .font_p{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

@media screen and (min-width: 768px) {
   .padding_m_pc{
    padding-right: 23px;
  }
   .font_p{
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