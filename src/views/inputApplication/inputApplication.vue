<template>
  <div style="width: 100%; padding-bottom: 50px">
    <el-row>
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
          <img style="width: 40px" class="rending_img" src="../../assets/img/icon.png" alt="" />&nbsp;&nbsp;Visaデビット申込
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="0" :sm="24">
        <div style="
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          ">
          <img style="width: 100%; height: 100%" class="rending_img" src="@/assets/steps/step_pc_04@3x.png" alt="" />
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="24" :sm="0">
        <div style="
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          ">
          <img style="width: 100%; height: 100%" class="rending_img" src="@/assets/steps/step_04@3x.png" alt="" />
        </div>
      </el-col>
    </el-row>
    <div style="width: 100%; margin-top: 10px" class="back_img_">
     <el-row class="border_ margin_1 mobile_margin back_all
            flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">カードデザイン
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="" ref="cord_type" id="cord_type">
              <el-row class="" ref="cord_type" id="cord_type">
                <el-col :xs="24" :sm="12" class="flex_center" style="height: 180px">
                    <img style="height: 170px; width: 280px" :src="url01" />
                </el-col>
              </el-row>
            </el-row>
          </div>
        </el-col>
      </el-row>
    <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">決済口座情報
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="11">
                <el-row class="row_height_100">
                    <el-col :span="24">
                    <div class="">
                      <div class="p4_err">確認のため、再度ご入力ください。</div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="4">
                    <div class="tittle_out_in">
                      <span class="flex_title">店舗</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                      <el-select ref="account_store_number" id="account_store_number"
                          v-model="form.account_store_number" placeholder="選択してください" style="width: 100%" 
                          @change="deleteAllBackgroundColor(['account_store_number'])" 
                          @input="deleteAllBackgroundColor(['account_store_number'])">
                          <el-option v-for="item in store_list" :key="item.store_number"
                            :label="item.store_name" :value="item.store_number" />
                        </el-select>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :xs="24" :sm="11" class="padidng_left">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="4">
                    <div class="tittle_out_in">
                      <span class="flex_title">口座番号
                  </span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="account_number" id="account_number" class="input_inner_100" v-model.trim="form.account_number"
                      :maxlength="7" @blur="halfToFull('account_number')" placeholder="半角数字７桁"
                      @input="deleteAllBackgroundColor(['account_number'])"></el-input>
                  </el-col>
                </el-row>
              </el-col>
              
            </el-row>
               <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="">
                  <el-col :xs="24" :sm="24">
                    <div class="tittle_out_in">
                      <div class="weight">キャッシュカード暗証番号</div>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="flex_bet">
                  <el-col :xs="24" :sm="24">
                    <el-row class="">
                      <el-col :xs="24" :sm="16" class="">
                        <el-input ref="id_security_password" id="id_security_password" v-model="form.security_password"
                          type="password" class="input_inner_100" maxlength="4" placeholder="半角数字４桁" show-password
                          @blur="toSBCNum('security_password')" @input="
                              deleteAllBackgroundColor(['id_security_password'])
                              " />
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row>
                  <el-col :span="24">
                    <div class="tittle_out_in padding_t_32">
                      <div class="weight">キャッシュカード暗証番号（確認）</div>
                    </div>
                    <div class="tittle_out_in">
                      <div class="p4_err">確認のため、再度ご入力ください。</div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="16">
                    <el-row class="flex_center_start">
                      <el-col :xs="24" :sm="24" class="">
                        <el-input ref="id_security_password02" id="id_security_password02"
                          v-model="form.security_password02" type="password" class="input_inner_100" maxlength="4"
                          placeholder="半角数字4桁" show-password @blur="toSBCNum('security_password02')" @input="
                                deleteAllBackgroundColor(['id_security_password02'])
                                " />
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="border_ margin_1 mobile_margin back_all
                flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">デビットカード暗証番号
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c" style="justify-content: flex-start">

            <el-row >
              <el-col :span="24">
                <el-row class="flex_bet" >
                  <el-col :xs="24" :sm="24">
                    <el-row>
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32">
                          <div >
                           デビットカード利用時に使用する暗証番号を数字４桁で入力してください。規則的な数字や生年月日等は使用できません。
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="16">
                        <el-row class="flex_center_start">
                          <el-col :xs="24" :sm="24" class="">
                            <el-input ref="id_debit_password" id="id_debit_password" v-model="form.debit_password" 
                              type="password" class="input_inner_100" maxlength="4" placeholder="半角数字4桁" show-password
                              @blur="toSBCNum('debit_password')" @input="deleteAllBackgroundColor(['id_debit_password'])" />
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row class="flex_bet">
                  <el-col :xs="24" :sm="24">
                    <el-row>
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32">
                          <div>
                           確認のため、再度入力してください
                          </div>
                        </div>
                      </el-col>

                      <el-col :xs="24" :sm="16">
                        <el-row class="flex_center_start">
                          <el-col :xs="24" :sm="24" class="">
                            <el-input ref="id_debit_password02" id="id_debit_password02"
                              v-model="form.debit_password02" type="password" class="input_inner_100" maxlength="4"
                              placeholder="半角数字4桁" show-password @blur="toSBCNum('debit_password02')" @input="
                                          deleteAllBackgroundColor([
                                          'id_debit_password02',
                                          ])
                                          " />
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-row style="height: 90px">
      <el-col :xs="24" :sm="24" class="flex_center">
        <div class="flex_between btnw">
          <van-button class="flex_center button_All_ position_R
                          application_w" type="primary" @click="goBack()">
            <span class="position_R_">〈</span>
            <span>戻る</span>
          </van-button>
          <van-button class="flex_center button_All position_R
                          application_w" type="primary" @click="toPage()" s>
            <span>次へ</span>
            <span class="position_L">〉</span>
          </van-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import urlImage01 from "../../assets/img/card_visa@3x.png";
  import urlImage02 from "../../assets/img/picture02.png";
  import {isEmpty,checkHalNum,toSBC,halfToFull,PasswordCheck} from "@/utils/validate.js";
  import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
  import SetDom from "@/utils/setDomErr.js";
  import { SALES_STORE_SEARCH } from "@/api/account/api.js";
  import { startLoading, endLoading } from "@/utils/loading";
  import myMixin from "../mixin.js";
  import { mapMutations, mapGetters } from 'vuex';
  import {decrypt} from '../../utils/jse'
  export default {
    components: {},
    data() {
      return {
        url01: urlImage01,
        url02: urlImage02,
        form: {
          security_password: "",
          security_password02: "",
          debit_password: "",
          debit_password02: "",
          account_store_number: "",
          account_number:''
        },
        store_list:[],
        DomList: [],
      };
    },
    mixins: [myMixin],
    created() { },
    computed:{
          ...mapGetters("user", ["getSeqNo", "getApplication"]),
    },
    mounted() {
      document.getElementsByClassName('body_')[0].scrollTo(0, 0)
      if (!this.$store.state.page.isPc) {
        this.getList();
      }
    },
    methods: {
      replaceNum(key) {
        this.form[key] = parseInt(this.form[key])
        let num = this.form[key]+'';
        this.form[key] = num.replace(/[^0-9]/g, "");

      },
      clear(key){
        this.form[key] = this.form[key].replace(/,/g, "");
      },
      money(key){
          this.form[key] = this.form[key].replace(/(?=(\B)(\d{3})+$)/g, ',')
      },
      replaceNum02(key) {

        let num = this.form[key]+'';
        this.form[key] = num.replace(/[^0-9]/g, "");
      },
       getList() {
        this.getState();
        try {
          let params = {
            search_flag:'0'
          }
          startLoading();
          SALES_STORE_SEARCH(params)
            .then((res) => {
              popMessageFromApi(res);
              if (res.success) {
                this.store_list = res.data.store_list
              }
              endLoading();
            })
            .catch((err) => {
              endLoading();
            });
        } catch (error) { }
      },

      toPage() {
        if (this.check()) {
          this.setState();
          // this.$router.push({
          //   name: "confirm",
          //   params: {},
          // });
        }
      },
      goBack() {
        // this.$router.go(-1)
        this.setState();
        this.$router.push({
          name: "inputCustomer",
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


      deleteBackgroundColor(id) {
        SetDom.deleteAllBackgroundColor(id);
      },
      deleteAllBackgroundColor(ids) {
        SetDom.deleteAllBackgroundColor(ids);
      },
      Err(id, msg, ref) {
        this.$message.error(msg);
        this.DomList = SetDom.changeBackgroundColor(this.DomList, id);
        this.scrollTop(id)
        // this.$refs[ref].focus();
      },
      Errs(ids, msg, ref) {
        this.$message.error(msg);
        for (let id of ids) {
          this.DomList = SetDom.changeBackgroundColor03(this.DomList, id);
        }
          this.scrollTop(ref)
        // this.$refs[ref].focus();
      },
      scrollTop(id){
      setTimeout(()=>{
       let dom = document.getElementById(id)
      //  dom.scrollIntoView()
        var scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scroll_top = document.documentElement.scrollTop;
        } else if (document.getElementsByClassName('body_')) {

          scroll_top = document.getElementsByClassName('body_')[0].scrollTop;
        }

        const { top, height } = dom.getBoundingClientRect();
        // 元素的中心高度
        const elCenter = top + height / 2;
        // 窗口的中心高度
        const center = window.innerHeight / 2;

        setTimeout(()=>{
          document.getElementsByClassName('body_')[0].scrollTo({
          top: scroll_top - (center - elCenter),
          behavior: 'smooth'
        });
        },100)
      },300)
    },
      check() {
        //店舗
        if(isEmpty(this.form.account_store_number)){
            this.Err("account_store_number",MESSAGE.MsgErrCheck089,"account_store_number");
            return false;
        }
        //口座番号
        if(isEmpty(this.form.account_number)){
            this.Err("account_number",MESSAGE.MsgErrCheck090,"account_number");
            return false;
        }else if(this.form.account_number.length>7){
            this.Err("account_number",MESSAGE.MsgErrCheck091,"account_number");
            return false;
        }

        //キャッシュカード暗証番号
        if (isEmpty(this.form.security_password)) {
          this.Err("id_security_password",MESSAGE.MsgErrCheck061,"id_security_password");
          return false;
        } else if (!checkHalNum(this.form.security_password) ||this.form.security_password.length != 4 ) {
          this.Err( "id_security_password", MESSAGE.MsgErrCheck062, "id_security_password" );
          return false;
        }

        //キャッシュカード暗証番号（確認）
        if (isEmpty(this.form.security_password02)) {
          this.Err("id_security_password02", MESSAGE.MsgErrCheck063, "id_security_password02");
          return false;
        } else if (!checkHalNum(this.form.security_password02) || this.form.security_password02.length != 4 ) {
          this.Err( "id_security_password02", MESSAGE.MsgErrCheck064, "id_security_password02");
          return false;
        } else if (this.form.security_password02 != this.form.security_password) {
           this.Err("id_security_password02", MESSAGE.MsgErrCheck065,"id_security_password02"
          );
          return false;
        }

          //デビットカード暗証番号
          if (isEmpty(this.form.debit_password)) {
            this.Err("id_debit_password",MESSAGE.MsgErrCheck068,"id_debit_password");
            return false;
          } else if (this.form.debit_password.length != 4 ||!checkHalNum(this.form.debit_password)) {
            this.Err("id_debit_password",MESSAGE.MsgErrCheck069, "id_debit_password");
            return false;
          }

          if (isEmpty(this.form.debit_password02)) {
            this.Err("id_debit_password02",MESSAGE.MsgErrCheck070,"id_debit_password02");
            return false;
          } else if (this.form.debit_password02.length != 4 ||!checkHalNum(this.form.debit_password02)) {
            this.Err("id_debit_password02",MESSAGE.MsgErrCheck071,"id_debit_password02");
            return false;
          } else if (this.form.debit_password02 != this.form.debit_password) {
            this.Err("id_debit_password02",MESSAGE.MsgErrCheck072,"id_debit_password02");
            return false;
          }else if (PasswordCheck(this.form.debit_password02)){
            this.Errs(["id_debit_password", "id_debit_password02"],MESSAGE.MsgErrCheck092,"id_debit_password");
            return false;
          }
        
        return true;
      },
      getName(code) {
        if (!isEmpty(code)) {
          let i =1;
          let name ='';
          for (let res of this.store_list) {
            i++
            if (res.store_number == code) {
              name = res.store_nm;
              break;
            }
          }
          return name;
        } else {
          return "";
        }
      },
      //store设置值保存
      setState() {
       let account_store_nm = this.getName(this.form.account_store_number);
        this.$store.commit("user/setState", {
          // introduce_list: JSON.stringify(this.account_store_number_list_all),
          account_store_number: this.form.account_store_number,
          account_number: this.form.account_number,
          account_store_nm: account_store_nm,
          security_password: this.form.security_password,
          security_password02: this.form.security_password02,
          debit_password: this.form.debit_password,
          debit_password02: this.form.debit_password02
        });
      },
      getState() {
        this.form.account_store_number =decrypt(this.$store.state.user.account_store_number);
        this.form.account_number  =decrypt(this.$store.state.user.account_number);
        this.form.security_password = decrypt(this.$store.state.user.security_password);
        this.form.security_password02 =decrypt(this.$store.state.user.security_password02);
        this.form.debit_password = decrypt(this.$store.state.user.debit_password);
        this.form.debit_password02 = decrypt(this.$store.state.user.debit_password02);

      },
    }
  };
</script>
<style scoped>
  /deep/.el-radio{
    padding: 5px 0;
  }
  .check01 {
    border: 5px solid #03A369;
    border-radius: 10px;
  }

  .check02 {
    border: 5px solid #03A369;
    border-radius: 10px;
  }

  .err {
    border: 5px solid rgb(255, 0, 0) !important;
    border-radius: 10px !important;
  }

  .nocheck {
    border: 5px solid rgba(70, 157, 251, 0);
    border-radius: 10px;
  }

  .p4_err {
    font-size: 14px;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 767px) {
    .application_w {
      width: 150px;
    }

    .redio_center {
      display: flex;
      justify-content: center;
    }

    .date_input_e {
      display: none;
    }

    .padding_checkbox {
      padding: 5px 0;
    }

    .btnw {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .date_input_a {
      display: none;
    }

    .padding_checkbox {
      padding: 5px 0;
    }

    .check_no_center {
      justify-content: flex-start;
    }

    .btnw {
      width: 50%;
    }
  }
    /deep/.el-checkbox__label {
    width: 95%;
    display: inline-grid;
    white-space: pre-line;
    word-wrap: break-word;
    overflow: hidden;
    line-height: 20px;
  }
  /deep/ .el-radio__label{
    display: inline-grid;
    white-space: pre-line;
    word-wrap: break-word;
    overflow: hidden;
    line-height: 20px;
  }

</style>