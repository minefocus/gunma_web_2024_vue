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
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お取引の目的
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c check_no_center">
            <el-row>
              <el-col :span="24" class="waring_01" style="color: red; line-height: 20px">
                <span>該当する項目をすべてチェックしてください。<br />※事業費決済は受付できません</span>
              </el-col>
            </el-row>
            <el-row ref="checklist" id="checklist">
              <el-col :xs="24" :sm="24">
                <div>
                  <el-checkbox-group v-model="checklist">
                    <el-row>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="01">生計費決済</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="02">事業費決済</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="03">給与受取</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="04">年金受取</el-checkbox>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="05">仕送り</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="06">貯蓄</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="07">資産運用</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="08">融資返済用口座</el-checkbox>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="09">外国為替取引</el-checkbox>
                      </el-col>
                      <el-col :xs="24" :sm="6" class="padding_checkbox">
                        <el-checkbox label="99" @change="showInput1()">その他</el-checkbox>
                      </el-col>
                    </el-row>
                  </el-checkbox-group>

                  <el-row>
                    <el-col :xs="24" :sm="24" class="padding_checkbox">
                    </el-col>
                  </el-row>

                  <el-row v-if="checklist.includes('99')">
                    <el-col :xs="24" :sm="16">
                      <el-row>
                        <el-col :span="24" class="waring_01" style="color: red"><span>その他をご選択の場合はご入力ください。</span>
                        </el-col>
                      </el-row>
                      <el-row class="flex_center_start" style="margin: 5px 0 0 0">
                        <el-col :xs="24" :sm="24" class="">
                          <el-input ref="id_account_purpose_other" id="id_account_purpose_other"
                            class="input_inner_100 position_ab" v-model="form.account_purpose_other"
                            @blur="halfToFull('account_purpose_other')" maxlength="20" placeholder="20文字まで" @input="
                            deleteAllBackgroundColor([
                            'id_account_purpose_other',
                            ])
                            ">
                          </el-input>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <!-- -------------- -->
      <el-row  class="border_ margin_1 mobile_margin back_all flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">口座開設する店舗
              <span   class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c" style="justify-content: flex-start;">
            <el-row >
              <el-col :span="24">{{form.introduce_nm}}</el-col>
            </el-row>
            <el-row v-if="flg" class="flex_bet" >
              <el-col :xs="24" :sm="24">
                <el-row>
                  <el-col :xs="24" :sm="16">
                    <el-row class="flex_center_start">
                      <el-col :xs="24" :sm="24" class="">
                        <el-select ref="account_store_number" id="account_store_number"
                          v-model="form.account_store_number" placeholder="選択してください" style="width: 100%" @change="
                            deleteAllBackgroundColor([
                            'account_store_number',
                            ])
                            " @input="
                            deleteAllBackgroundColor([
                            'account_store_number',
                            ])
                            ">
                          <el-option v-for="item in store_list" :key="item.store_number"
                            :label="item.store_nm" :value="item.store_number" />
                        </el-select>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="" style="margin: 10px 0;padding-top:5px">
              <el-col :span="24">
                <div class="weight">当行で口座開設する理由をお選びください。</div>
              </el-col>
            </el-row>
             <el-row  ref="account_reason" id="account_reason" style="margin-top: 10px;">
              <el-col :xs="24" :sm="24">
                <div>

                  <el-radio-group v-model="account_reason" @change="clean()">
                    <el-radio :label="'01'">徳島県内の大学等に入学予定</el-radio>
                    <el-radio :label="'02'">徳島県内の大学等に在学中（本人確認書類の住所が徳島県外）</el-radio>
                    <el-radio :label="'03'">徳島県内の会社に就職予定</el-radio>
                    <el-radio :label="'04'">徳島県内の会社で就業中（本人確認書類の住所が徳島県外）</el-radio>
                    <el-radio :label="'05'">徳島県内の会社・個人との口座振替引落し口座</el-radio>
                    <el-radio :label="'99'">その他</el-radio>
                  </el-radio-group>

                  <el-row style="padding:10px 0" v-if="account_reason === '99'">
                    <el-col :xs="24" :sm="16">
                      <el-row>
                        <el-col :span="24" class="waring_01" style="color: red"><span>その他をご選択の場合はご入力ください。</span>
                        </el-col>
                      </el-row>
                      <el-row class="flex_center_start" style="margin: 5px 0 0 0">
                        <el-col :xs="24" :sm="24" class="">
                          <el-input ref="account_reason_other" id="account_reason_other"
                            class="input_inner_100 position_ab" v-model="form.account_reason_other"
                            @blur="halfToFull('account_reason_other')" maxlength="50" placeholder="50文字まで" @input="
                            deleteAllBackgroundColor([
                            'account_reason_other',
                            ])
                            ">
                          </el-input>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row class="border_ margin_1 mobile_margin back_all
            flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">キャッシュカード情報入力
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="">
              <el-col :span="24">
                <div class="weight">カードデザイン</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="waring_01" style="color: red; margin-bottom: 20px">
                <span>どちらかのカードデザインをお選びください。</span>
              </el-col>
            </el-row>
            <el-row class="" ref="cord_type" id="cord_type">
              <el-row class="" ref="cord_type" id="cord_type">
                <el-col :xs="24" :sm="12" class="flex_center" style="height: 180px">
                  <div class="flex_center" style="height: 180px; width: 290px; overflow: hidden" :class="{
                        check01: cord_type == '0',
                        nocheck: cord_type != '0',
                        err:
                        (cord_type != '0' || cord_type != '1') && cord_type_err,
                        }">
                    <img style="height: 170px; width: 280px" :src="url01" @click="cord_typeBtn('0')" />
                  </div>
                </el-col>
                <el-col :xs="24" :sm="12" class="flex_center" style="height: 180px">
                  <div class="flex_center" style="height: 180px; width: 290px; overflow: hidden" :class="{
                        check02: cord_type == '1',
                        nocheck: cord_type != '1',
                        err:
                        (cord_type != '0' || cord_type != '1') && cord_type_err,
                        }">
                    <img style="height: 170px; width: 280px" :src="url02" @click="cord_typeBtn('1')" />
                  </div>
                </el-col>
              </el-row>
            </el-row>

            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="">
                  <el-col :xs="24" :sm="24">
                    <div class="tittle_out_in">
                      <div class="weight">キャッシュカード暗証番号</div>
                    </div>
                    <div class="tittle_out_in">
                      <div class="p4_err">
                        以下の番号は、暗証番号としてご登録いただけませんのでご注意ください。
                      </div>
                      <div class="p4_err">
                        ・自宅電話番号、携帯電話番号の連続する４桁
                      </div>
                      <div class="p4_err">
                        ・同一数字の連続番号（1111など）
                      </div>
                      <div class="p4_err">
                        ・西暦、和暦で表示した生年月日の組合せ（昭和55年8月4日の場合、5584、0804、5508など）
                      </div>
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

      <!-- -------------- -->
      <el-row class="border_ margin_1 mobile_margin back_all
                flex_center_web">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">インターネットバンキング
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c" style="justify-content: flex-start">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row>
                  <el-col :span="24">
                    <div class="tittle_out_in">
                      <div class="weight">ご契約済みですか？</div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="16" style="margin-top: 15px" id="contractor_flg_id">
                    <el-row class="flex_center_start">
                      <el-col :xs="24" :sm="6">
                        <el-radio v-model="contractor_flg" label="0" @change="showInputF()">はい</el-radio>
                      </el-col>
                      <el-col :xs="24" :sm="6">
                        <el-radio v-model="contractor_flg" label="1" @change="showInputF()">いいえ</el-radio>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12"> </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-row v-show="contractor_flg == '1'">
              <el-col :span="24">
                <el-row class="flex_bet">
                  <el-col :xs="24" :sm="24">
                    <el-row>
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32">
                          <div class="weight">1日あたりの振込限度額</div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="tips_top waring_font">
                          振込・払込限度額を0円から100万円の範囲内で設定してください。
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="16">
                        <el-row class="flex_center_start">
                          <el-col :xs="20" :sm="20" class="">
                            <el-input ref="id_creditlimit" id="id_creditlimit" v-model="form.creditlimit"
                              class="input_inner_100" maxlength="7" placeholder="半角数字（0～1000000）" type="tel"
                              @focus="clear('creditlimit')"
                              @blur="toSBCNum('creditlimit'),money('creditlimit')" @input="
                                      deleteAllBackgroundColor(['id_creditlimit']),
                                      replaceNum('creditlimit')
                                      " />
                          </el-col>
                          <el-col :xs="4" :sm="4" class="">
                            &nbsp;&nbsp;円
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>

                <el-row class="flex_bet" style="margin-top: 20px
                            !important">
                  <el-col :xs="24" :sm="24">
                    <el-row>
                      <el-col :span="24">
                        <div class="">
                          <div class="p4_err waring_font">
                            ※パスワード盗用による不正防止のため、適切な金額を設定してください。
                          </div>
                          <div class="p4_err waring_font">
                            ※ご利用口座間の「お振替え」は含みません。
                          </div>
                          <!-- <div class="p4_err waring_font">
                            パスワードには電話番号や生年月日など他人にわかり
                          </div> -->
                          <div class="p4_err waring_font">
                            ※サービス利用開始後、振込・払込限度額の変更が可能です。引上げについては、ワンタイムパスワードのご利用が必要となります。
                          </div>
                        </div>
                      </el-col>
               
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32">
                          <div style="padding-bottom: 10px" class="weight">
                            インターネットバンキング暗証番号
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="">
                          <div class="p4_err waring_font">
                            インターネットバンキング用のパスワードをご登録ください。
                          </div>
                          <div class="p4_err waring_font">
                            インターネットバンキングをご利用の際に必要となりますので、お忘れにならないようご注意ください。
                          </div>
                          <div class="p4_err waring_font">
                            パスワードには電話番号や生年月日など他人にわかりやすい番号はお避けください。
                          </div>

                          <div class="p4_err waring_font">
                            また「000000」「999999」以外の数字をご記入ください。
                          </div>
                        </div>
                      </el-col>
                      <el-col :xs="24" :sm="16">
                        <el-row class="flex_center_start">
                          <el-col :xs="24" :sm="24" class="">
                            <el-input ref="id_online_password" id="id_online_password" v-model="form.online_password" 
                              type="password" class="input_inner_100" maxlength="6" placeholder="半角数字6桁" show-password
                              @blur="toSBCNum('online_password')" @input="
                                        deleteAllBackgroundColor(['id_online_password'])
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
                          <div style="padding-bottom: 10px" class="weight">
                            インターネットバンキング暗証番号（確認）
                          </div>
                          <div class="">
                            <div class="p4_err waring_font">
                              確認のため、再度ご入力ください。
                            </div>
                          </div>
                        </div>
                      </el-col>

                      <el-col :xs="24" :sm="16">
                        <el-row class="flex_center_start">
                          <el-col :xs="24" :sm="24" class="">
                            <el-input ref="id_online_password02" id="id_online_password02"
                              v-model="form.online_password02" type="password" class="input_inner_100" maxlength="6"
                              placeholder="半角数字6桁" show-password @blur="toSBCNum('online_password02')" @input="
                                          deleteAllBackgroundColor([
                                          'id_online_password02',
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
  import urlImage01 from "../../assets/img/picture01.png";
  import urlImage02 from "../../assets/img/picture02.png";
  import {isEmpty,checkHalNum,toSBC,halfToFull,toSBCNum,similarBirthday,isSimilarToPhoneNumber,repeatNum,PATTERFULL} from "@/utils/validate.js";
  import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
  import SetDom from "@/utils/setDomErr.js";
  import { GET_ACCOUNT_STORE } from "@/api/account/api.js";
  import { startLoading, endLoading } from "@/utils/loading";
  import myMixin from "../mixin.js";
  import { mapMutations, mapGetters } from 'vuex';
  import {decrypt} from '../../utils/jse'
  export default {
    components: {},
    data() {
      return {
        textarea: "",
        f_value: "",
        value: "",
        valuedate: "",
        show1: false,
        show2: false,
        date: "",
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(2999, 10, 1),
        currentDate: new Date(),
        year: "",
        month: "",
        day: "",
        options: [{ label: "1", value: "1" }],
        url01: urlImage01,
        url02: urlImage02,
        checklist: [],
        account_reason:"",
        form: {
          value1: "",
          security_password: "",
          security_password02: "",
          value4: "",
          value5: "",
          value6: "",
          creditlimit: "",
          online_password: "",
          online_password02: "",
          account_purpose_other: "",
          introduce_cd: "",
          account_store_number: "",
          account_reason_other:"",
          tokushima_flg:'',
          introduce_flg:'',
          introduce_nm:''
        },
        contractor_flg: "",
        account_store_number_list: [],
        account_store_number_list_all: [],
        store_list:[],
        DomList: [],

        cord_type: "0",
        cord_type_err: false,
        flg:false,
        flg_2:false,
        flg_3:false,
        introduce_nm:""
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
        this.cord_typeBtn("0");
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
        try {
          let zip_code = decrypt(this.$store.state.user.zip_code);
          let params = {
            seq_no:this.getSeqNo,
            zip_code_pre: zip_code.substring(0, 3),
          };
          startLoading();
          GET_ACCOUNT_STORE(params)
            .then((res) => {
              popMessageFromApi(res);
              
              if (res.success) {
                this.account_store_number_list = res.data.store_list;
                this.account_store_number_list_all = res.data.all_store_list;
                this.getState();
              }
              endLoading();
            })
            .catch((err) => {

              endLoading();
            });
        } catch (error) { }
      },
      cord_typeBtn(value) {
        this.cord_type_err = false;
        this.cord_type = value;
      },
      showInput1() {
        this.form.account_purpose_other = "";
      },

      toPage() {
        if (this.check()) {
          this.setState();
          this.$router.push({
            name: "confirm",
            params: {},
          });
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
      showInputF() {
        // this.form.contractor_number = '';
        this.form.creditlimit = "";
        this.form.online_password = "";
        this.form.online_password02 = "";
      },

    clean(){
      this.form.account_reason_other = ''
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
        //お取引の目的
        if (isEmpty(this.checklist)) {
          this.$message.error(MESSAGE.MsgErrCheck054);
          // SetDom.scallto(this.$refs.checklist);
          this.scrollTop('checklist');
          return false;
        }

        if (this.checklist.includes("99")) {
          if (isEmpty(this.form.account_purpose_other)) {
            this.Err(
              "id_account_purpose_other",
              MESSAGE.MsgErrCheck055,
              "id_account_purpose_other"
            );
            return false;
          } else if (this.form.account_purpose_other.length > 20 || !PATTERFULL(this.form.account_purpose_other)) {
            this.Err("id_account_purpose_other",MESSAGE.MsgErrCheck056,"id_account_purpose_other");
            return false;
          }
        }


      if(this.form.tokushima_flg === '0'  || this.form.introduce_flg ==='1' || (this.form.introduce_flg === '0' && this.form.introduce_cd === '0172')){
            if(isEmpty(this.form.account_store_number)){
             this.Err("account_store_number",MESSAGE.MsgErrCheck060,"account_store_number");
             return false;
            }
        }

        if((this.form.introduce_flg === '0' && this.form.introduce_cd === '0172') || this.form.introduce_flg ==='1'){
            if(isEmpty(this.account_reason)){
            this.$message.error(MESSAGE.MsgErrCheck074);
            this.scrollTop('account_reason');
            return false;
            }
            
        if (this.account_reason.includes("99")) {
          if (isEmpty(this.form.account_reason_other)) {
            this.Err(
              "account_reason_other",
              MESSAGE.MsgErrCheck075,
              "account_reason_other"
            );
            return false;
          } else if (this.form.account_reason_other.length > 50|| !PATTERFULL(this.form.account_reason_other)) {
            this.Err(
              "account_reason_other",
              MESSAGE.MsgErrCheck076,
              "account_reason_other"
            );
            return false;
          }
        }
        }



        if (isEmpty(this.cord_type)) {
          this.$message.error(MESSAGE.MsgErrCheck004);
          SetDom.scallto(this.$refs.cord_type);
          this.cord_type_err = true;

          return false;
        }
        //キャッシュカード暗証番号
        if (isEmpty(this.form.security_password)) {
          this.Err(
            "id_security_password",
            MESSAGE.MsgErrCheck061,
            "id_security_password"
          );
          return false;
        } else if (
          !checkHalNum(this.form.security_password) ||
          this.form.security_password.length != 4 

        ) {
          this.Err(
            "id_security_password",
            MESSAGE.MsgErrCheck062,
            "id_security_password"
          );
          return false;
        }else if(
          similarBirthday(this.form.security_password) ||
          isSimilarToPhoneNumber(this.form.security_password) ||
          repeatNum(this.form.security_password)){
             this.Err(
            "id_security_password",
            MESSAGE.MsgErrCheck073,
            "id_security_password"
          );
          return false;  
        }
        //キャッシュカード暗証番号（確認）
        if (isEmpty(this.form.security_password02)) {
          this.Err(
            "id_security_password02",
            MESSAGE.MsgErrCheck063,
            "id_security_password02"
          );
          return false;
        } else if (
          !checkHalNum(this.form.security_password02) ||
          this.form.security_password02.length != 4
        ) {
          this.Err(
            "id_security_password02",
            MESSAGE.MsgErrCheck064,
            "id_security_password02"
          );
          return false;
        } else if (this.form.security_password02 != this.form.security_password) {
          this.Err("id_security_password02", MESSAGE.MsgErrCheck065,"id_security_password02"
          );
          return false;
        }
        //ご契約済みかどうか選択してください
         if (isEmpty(this.contractor_flg)) {
          this.$message.error('ご契約済みかどうか選択してください');
        
          return false
         }
        //1日あたりの振込限度額
        if (this.contractor_flg == "1") {
          if (isEmpty(this.form.creditlimit)) {
            this.Err("id_creditlimit", MESSAGE.MsgErrCheck066, "id_creditlimit");
            return false;
          } else if (this.form.creditlimit.replace(/,/g,'') < 0 || this.form.creditlimit.replace(/,/g,'') > 1000000) {
            this.Err("id_creditlimit", MESSAGE.MsgErrCheck067, "id_creditlimit");
            return false;
          }
          //インターネットバンキング暗証番号
          if (isEmpty(this.form.online_password)) {
            this.Err("id_online_password",MESSAGE.MsgErrCheck068,"id_online_password");
            return false;
          } else if (this.form.online_password.length != 6 ||!checkHalNum(this.form.online_password)) {
            this.Err("id_online_password",MESSAGE.MsgErrCheck069, "id_online_password");
            return false;
          }else if(this.form.online_password=="000000" || this.form.online_password=="999999"){
            this.Err("id_online_password",MESSAGE.MsgErrCheck073, "id_online_password");
            return false;
          }

          if (isEmpty(this.form.online_password02)) {
            this.Err(
              "id_online_password02",
              MESSAGE.MsgErrCheck070,
              "id_online_password02"
            );
            return false;
          } else if (this.form.online_password02.length != 6 ||!checkHalNum(this.form.online_password02)) {
            this.Err("id_online_password02",MESSAGE.MsgErrCheck071,"id_online_password02");
            return false;
          } else if (this.form.online_password02 != this.form.online_password) {
            this.Err(
              "id_online_password02",
              MESSAGE.MsgErrCheck072,
              "id_online_password02"
            );
            return false;
          }
        }
        return true;
      },
      getName(code) {
        if (!isEmpty(code)) {
          let i =1;
          let name ='';
          for (let res of this.account_store_number_list_all) {
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
        let introduce_nm = this.getName(this.form.introduce_cd.substring(1,4));
        let account_store_nm = this.getName(this.form.account_store_number);
        this.$store.commit("user/setState", {
          cord_type: this.cord_type,
           introduce_list: JSON.stringify(this.account_store_number_list_all),
          introduce_cd: this.form.introduce_cd,
          introduce_nm: introduce_nm,
          account_store_number: this.form.account_store_number,
          account_store_nm: account_store_nm,
          security_password: this.form.security_password,
          security_password02: this.form.security_password02,
          contractor_flg: this.contractor_flg,
          creditlimit: this.form.creditlimit,
          online_password: this.form.online_password,
          online_password02: this.form.online_password02,
           account_purpose: JSON.stringify(this.checklist.sort((a, b) => {
            return a - b;
          })),
          account_reason:this.account_reason,
          account_purpose_other: this.form.account_purpose_other,
          account_reason_other: this.form.account_reason_other,
        });
      },
      getState() {
        this.form.account_store_number =decrypt(this.$store.state.user.account_store_number);
        this.form.introduce_cd = decrypt(this.$store.state.user.introduce_cd);
        this.form.security_password = decrypt(this.$store.state.user.security_password);
        this.form.security_password02 =decrypt(this.$store.state.user.security_password02);
        this.contractor_flg = decrypt(this.$store.state.user.contractor_flg);
        this.form.creditlimit = decrypt(this.$store.state.user.creditlimit);
        this.form.online_password = decrypt(this.$store.state.user.online_password);
        this.form.online_password02 = decrypt(this.$store.state.user.online_password02);
        this.cord_type = decrypt(this.$store.state.user.cord_type);
          if(isEmpty(this.cord_type)){
          this.cord_type = '0'
        }
        this.checklist = decrypt(this.$store.state.user.account_purpose)==''?[]:JSON.parse(decrypt(this.$store.state.user.account_purpose));
        this.form.account_purpose_other =decrypt(this.$store.state.user.account_purpose_other);
        this.account_reason = decrypt(this.$store.state.user.account_reason)
        this.form.account_reason_other =decrypt(this.$store.state.user.account_reason_other);
        // 徳島県
        this.form.tokushima_flg = decrypt(this.$store.state.user.tokushima_flg);
        // 紹介コードはお持ちですか？
        this.form.introduce_flg = decrypt(this.$store.state.user.introduce_flg);
        // 绍介code显示
        this.form.introduce_cd = decrypt(this.$store.state.user.introduce_cd);
        // 名称
       this.form.introduce_nm = decrypt(this.$store.state.user.introduce_nm);
       console.log(this.form.tokushima_flg,this.form.introduce_flg,this.form.introduce_cd);
        if(this.form.tokushima_flg === '0'  || this.form.introduce_flg ==='1'){
          this.flg = true
          this.store_list = this.account_store_number_list
        }
        if(this.form.introduce_flg === '0' && this.form.introduce_cd === '0172'){
          this.flg = true
          this.store_list = this.account_store_number_list_all
        }
        if((this.form.introduce_flg === '0' && this.form.introduce_cd === '0172') || this.form.introduce_flg ==='1'){
          this.flg_2 = true
        
        }
        if(this.form.introduce_flg === '0' && this.form.introduce_cd !== '0172'){
           this.flg_3 = true
        }
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