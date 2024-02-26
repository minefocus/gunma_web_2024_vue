<template>
  <div style="width:100%;">

    <el-row >
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
        <img style="width:40px" class="rending_img " src="../../assets/img/icon.png" alt="">&nbsp;&nbsp;口座開設申込
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="0" :sm="24" style="">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_pc_05@3x.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" style="">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_05@3x.png" alt="">
        </div>

      </el-col>
    </el-row>
        <el-row>
      <el-col :span="24" class="confirm_waring">
        ご入力内容をご確認いただき、よろしければ「この内容で申込む」ボタンを押してください。<br>
        ご入力いただいた内容を修正される場合は、「修正」ボタンを押してください。
      </el-col>
    </el-row>
    <div style="width:100%;margin-top:15px" class="back_img_">
      <el-row class="border_ margin_1 mobile_margin back_all flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="tittle_out flex_center">
            <span class="flex_title font_w">お客さま情報</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">

            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="flex_center">
                      <span class="font_weight_bold">お名前（漢字）</span>
                    </div>
                    <van-button round plain style="height:25px;border: 1px solid rgb(1 33 107);background-color:rgb(1 33 107);color: rgb(255 255 255);" type="info"
                      @click="toPage('inputCustomer')">修正</van-button>
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span>姓</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span>名</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>


            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="flex_center">
                      <span class="font_weight_bold">お名前（フリガナ）</span>
                    </div>
                    <!-- <van-button round plain style="height:25px;border: 1px solid #969799;color: #a3a3a3;" type="info" @click="toPage('inputCustomer')">修正</van-button> -->
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span>セイ</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                   XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span  style="margin-right:20px">メイ</span>
                      
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

              <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class="">
                      <span class="font_weight_bold">性别</span>
                    </div>
                  </el-col>
                </el-row>
             
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                   XXX
                  </el-col>
                </el-row>
            
              </el-col>
            </el-row>


        <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class="">
                      <span class="font_weight_bold">生年月日</span>
                    </div>
                  </el-col>
                </el-row>
          
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                  XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

     
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="">
                      <span class="font_weight_bold">住所</span>
                    </div>
                    <!-- <van-button round plain style="height:25px;border: 1px solid #969799;color: #a3a3a3;" type="info" @click="toPage('inputCustomer')">修正</van-button> -->
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" >郵便番号</span>

                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="margin-right:20px">都道府県</span>
    
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                   XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">市区町村・番地</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                   XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">マンション・部屋番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">マンション・部屋番号（フリガナ）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="">
                      <span class="font_weight_bold">電話番号</span>
                    </div>
                    <!-- <van-button round plain style="height:25px;border: 1px solid #969799;color: #a3a3a3;" type="info" @click="toPage('inputCustomer')">修正</van-button> -->
                  </el-col>
                </el-row>
    
                <el-row class="second_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">自宅（固定電話）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
                <el-row class="second_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">携帯</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">ご職業</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    <div  :key="item" style="margin-bottom: 10px">XXX
                      <span >&nbsp;&nbsp;(XXX)</span></div>

                  </el-col>
                </el-row>


              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">お勤め先（学校名）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">お勤め先電話番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">お勤め先（学校）住所</span>
                    </div>
                  </el-col>
                </el-row>
                <!-- <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">郵便番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{pageF.work_zip_code| NOVALUE}}
                  </el-col>
                </el-row> -->

                 <!-- <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">住所</span>
                    </div>
                  </el-col>
                </el-row> -->
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- -------------- -->
      <el-row class="row_height_650px border_ margin_1 mobile_margin  back_all flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お申込み情報
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="">
                      <span class="font_weight_bold">お取引の目的</span>
                    </div>
                    <van-button round plain style="height:25px;border: 1px solid rgb(1 33 107);background-color:rgb(1 33 107);color: rgb(255 255 255);" type="info"
                      @click="toPage('inputApplication')">修正</van-button>
                  </el-col>
                </el-row>

                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    <div style="margin-bottom: 10px">XXX<br>XXX<br>XXX<br>XXX<br>XXX<br>XXX <span
                       >&nbsp;&nbsp;(XXX)</span></div>
                  </el-col>
                </el-row>

                <el-divider></el-divider>
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">口座開設する店舗</span>
                    </div>
                  </el-col>
                </el-row>
                  <el-row class="third_text" v-if="pageS.introduce_flg =='0'">
                  <el-col :xs="24" :sm="24" class="">
                    {{pageS.introduce_nm}}
                  </el-col>
                </el-row>
                 <!-- <el-row class="second_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span style="">口座開設する店舗</span>
                    </div>
                  </el-col>
                </el-row> -->
                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    XXX
                  </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-row class="first_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="m_15px">
                      <span class="font_weight_bold">キャッシュカード情報入力</span>
                    </div>
                  </el-col>
                </el-row>


                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span  style="">カードデザイン</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    <img style="height: 160px" :src="url01" />
                  </el-col>
                </el-row>
                <el-row class="third_text" v-if="pageS.cord_type!='' && pageS.cord_type =='1'">
                  <el-col :xs="24" :sm="24" class="">
                    <img style="height: 160px" :src="url02" />
                  </el-col>
                </el-row>




                <el-row class="second_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">キャッシュカード暗証番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    <!-- {{pageS.security_password| NOVALUE}} -->****
                  </el-col>
                </el-row>


                <el-divider ></el-divider>
                <el-row class="first_title"  >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="m_15px">
                      <span class="font_weight_bold">インターネットバンキング</span>
                    </div>
                  </el-col>
                </el-row>
               
                <el-row class="second_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">1日あたりの振込限度額</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    XXX<span >&nbsp;&nbsp;円</span>
                  </el-col>
                </el-row>
                <el-row class="second_title" >
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">インターネットバンキング暗証番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text" >
                  <el-col :xs="24" :sm="24" class="">
                    <!-- {{pageS.online_password| NOVALUE}} -->******
                  </el-col>
                </el-row>
                <!-- <el-divider></el-divider>
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class="m_15px">
                      <span class="font_weight_bold">アンケート</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{pageS.questionnaire | Questions}}<span v-if="pageS.questionnaire=='9'">&nbsp;&nbsp;(
                      {{pageS.questionnaire_other| NOVALUE}})</span>

                  </el-col>
                </el-row> -->
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
 <el-row style="height: 90px;margin-bottom: 20px;">
      <el-col :xs="24" :sm="24" class="flex_center">
    <van-button class="flex_center button_All  position_R" type="primary"  @click="confirmData()" >
          <span>この内容で申込む</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
    <el-dialog title="" :visible.sync="centerDialogVisible" class="width_w_m" center>
      <span>{{description}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeWindow()">を選択して</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import urlImage01 from "../../assets/img/picture01.png";
import urlImage02 from "../../assets/img/picture02.png";
import myMixin from '../mixin.js';
export default {
  data() {
    return {
     
      pageF: {
        name_last: '',
        kana_last_name: "",
        kana_first_name: "",
        address_city: "", //住所（市区町村）
        address_pref: "", //住所（都道府県）
        zip_code: "", //郵便番号
        address_other: "", //マンション・部屋番号
        kana_address_other: "",//マンション・部屋番号（フリガナ）
        birthday: "",
        tele_flg: '',
        phone_number01: '',
        phone_number02: '',
        phone_number03: '',
        tele_number: '',
        tele_number_02: '',
        tele_number_03: '',
        checkList: [],
        other_ite: '',
        work_name: '',
        work_tele_number01: '',
        work_tele_number02: '',
        work_tele_number03: '',
        work_address: '',
        // work_zip_code:''
      },
      pageS: {
        introduce_flg: '',
        introduce_cd: '',
        introduce_nm:'',
        account_address_pref: '',
        account_address_city: '',
        account_store_number: '',
        account_store_nm:'',
        account_reason: '',
        security_password: '',
        security_password02: '',
        contractor_flg: '',
        contractor_number: '',
        creditlimit: '',
        online_password: '',
        online_password02: '',
        // questionnaire: '',
        // questionnaire_other: '',
        checklist: [],
        account_purpose_other: '',
        cord_type: '',
        introduce_list: []
      },
      url01: urlImage01,
      url02: urlImage02,
      centerDialogVisible:false,
      description:''
    }
  },
  mixins:[myMixin],
  created() {

  },
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication"]),
  },
  mounted() {
    this.getState()
  },
  components: {  },
  methods: {

    confirmData() {
      location.href = ""
    },
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
        window.location.href = 'about:blank';
    } else {
        window.opener = null;
        window.open('', '_self', '');        //其他浏览器
        window.close();
    }

    },
    toPage(path) {
      this.$router.push({
        name: path,
        params: {}
      })
    },
    getState() {
      this.pageF.name_first = this.$store.state.user.name_first;
      this.pageF.name_last = this.$store.state.user.name_last;
      this.pageF.kana_last_name = this.$store.state.user.kana_last_name;
      this.pageF.kana_first_name = this.$store.state.user.kana_first_name;
      this.pageF.address_city = this.$store.state.user.address_city;
      this.pageF.address_pref = this.$store.state.user.address_pref;
      this.pageF.zip_code = this.$store.state.user.zip_code;
      this.pageF.address_other = this.$store.state.user.address_other;
      this.pageF.kana_address_other = this.$store.state.user.kana_address_other;
      this.pageF.birthday = this.$store.state.user.birthday;
      this.pageF.sex = this.$store.state.user.sex;
      this.pageF.tele_flg = this.$store.state.user.tele_flg;
      this.pageF.phone_number01 = this.$store.state.user.phone_number01;
      this.pageF.phone_number02 = this.$store.state.user.phone_number02;
      this.pageF.phone_number03 = this.$store.state.user.phone_number03;
      this.pageF.tele_number = this.$store.state.user.tele_number01;
      this.pageF.tele_number_02 = this.$store.state.user.tele_number02;
      this.pageF.tele_number_03 = this.$store.state.user.tele_number03;
      this.pageF.checkList = this.$store.state.user.job_kbn;
      this.pageF.other_item = this.$store.state.user.job_kbn_other;
      this.pageF.work_name = this.$store.state.user.work_name;
      this.pageF.work_tele_number01 = this.$store.state.user.work_tele_number01;
      this.pageF.work_tele_number02 = this.$store.state.user.work_tele_number02;
      this.pageF.work_tele_number03 = this.$store.state.user.work_tele_number03;
      this.pageF.work_address = this.$store.state.user.work_address;
      // this.pageF.work_zip_code= this.$store.state.user.work_zip_code;


   
      this.pageS.account_store_number = this.$store.state.user.account_store_number;
      this.pageS.account_store_nm = this.$store.state.user.account_store_nm;

      this.pageS.introduce_flg = this.$store.state.user.introduce_flg;

        this.pageS.introduce_cd = this.$store.state.user.introduce_cd;
        this.pageS.introduce_nm = this.$store.state.user.introduce_nm;

      this.pageS.introduce_list = this.$store.state.user.introduce_list;
      this.pageS.security_password = this.$store.state.user.security_password;
      this.pageS.security_password02 = this.$store.state.user.security_password02;
      this.pageS.contractor_flg = this.$store.state.user.contractor_flg;

      this.pageS.creditlimit = this.$store.state.user.creditlimit;
      this.pageS.online_password = this.$store.state.user.online_password;
      this.pageS.online_password02 = this.$store.state.user.online_password02;
      // this.pageS.questionnaire = this.$store.state.user.questionnaire;
      // this.pageS.questionnaire_other = this.$store.state.user.questionnaire_other;
      this.pageS.checklist = this.$store.state.user.account_purpose;
      this.pageS.account_purpose_other = this.$store.state.user.account_purpose_other;
      this.pageS.cord_type = this.$store.state.user.cord_type;

    },

  }
}
</script>

<style scoped>
/deep/ .el-divider--horizontal{
  margin: 10px 0;
}
.first_title{
  font-size: 16px;
  margin: 15px 0 10px 0;
}
.second_title{
  font-size: 11px;
    color: #818181;
    margin: 13px 0 0 0;
}
.third_text{
  margin-bottom: 10px;
  font-size:16px;
}
@media screen and (max-width: 767px) {
  /deep/.el-dialog{
    width: 90%;
  }
  .redio_center {
    display: flex;
    justify-content: center;

  }

  .date_input_e {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  /deep/.el-dialog{
    width: 50%;
  }
  .date_input_a {
    display: none;
  }
}


.m_15px {
  margin-top: 15px;
}
</style>
