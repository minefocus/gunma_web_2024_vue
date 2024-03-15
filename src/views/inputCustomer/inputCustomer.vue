<template>
  <div style="width: 100%;padding-bottom:50px">

    <el-row>
      <el-col :xs="24" :sm="24">
         <div class="tittle_all flex_start_f">
        <img style="width:40px" class="rending_img " src="../../assets/img/icon.png" alt="">&nbsp;&nbsp;Visaデビット申込
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="0" :sm="24">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="../../assets/steps/step_pc_03@3x.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="24" :sm="0">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="../../assets/steps/step_03@3x.png" alt="">
        </div>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="top_waring">
        撮影した書類から読み取った情報が、入力フィールドに反映されています。誤りがないかご確認いただき、必要に応じて修正をお願いいたします。
      </el-col>
    </el-row>
  <el-row>
      <el-col :span="24" class="top_waring" style="margin-top:0px">
        お名前の漢字が当行システムにおいて取扱うことができない場合、平易な漢字に代えて口座開設させていただきますので、あらかじめご了承ください。
      </el-col>
    </el-row>
    <div style="width:100%" class="back_img_">
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お名前（漢字）
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
                      <span class="flex_title">姓</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="name_last" id="name_last" class="input_inner_100" v-model.trim="form.name_last"
                      placeholder="10文字まで（例）群馬" :maxlength="10" @blur="halfToFull('name_last')"
                      @input="deleteAllBackgroundColor(['name_last']),noPlace('name_last')">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :xs="24" :sm="11" class="padidng_left">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="4">
                    <div class="tittle_out_in">
                      <span class="flex_title">名</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="name_first" id="name_first" class="input_inner_100" v-model.trim="form.name_first"
                      :maxlength="10" @blur="halfToFull('name_first')" placeholder="10文字まで（例）太郎"
                      @input="deleteAllBackgroundColor(['name_first']),noPlace('name_first')"></el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
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
                      v-model.trim="form.kana_last_name" placeholder="20文字まで（例）グンマ" :maxlength="20"
                      @blur="changeLastKanaName('kana_last_name'),jatoEn()" @input="kanaOnInput('kana_last_name','kana_last_name')">
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
                      v-model.trim="form.kana_first_name" :maxlength="20" @blur="changeLastKanaName('kana_first_name'),jatoEn()"
                      placeholder="20文字まで（例）タロウ" @input="kanaOnInput('kana_first_name','kana_first_name')"></el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <!--------------------------------------------------------------------------->
 <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お名前（英文表記）
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
   
                  </el-col>
                  <el-col :xs="24" :sm="20" class="">
                    <el-input ref="name_en" id="name_en" class="input_inner_100"  v-model="form.name_en"
                      placeholder="18文字まで（例）TARO GUNMA" :maxlength="50" @blur="trimandUpdace()"
                      @input="deleteAllBackgroundColor(['name_en']),EN()">
                    </el-input>
                  </el-col>
                </el-row>
              <el-row class="flex_bet padding_row">
              <el-col :xs="24" :sm="24" style="flex-direction: column">
                <span class="_waring" style="color: red">姓名合わせて18文字以内で入力ください。<br>
                文字数が足りない場合は、名をイニシャルにしてください。<br>
                例）TAROU　GUNMAMAEBASHI<br>
                　　→　T　GUNMAMAEBASHI
                </span>
                </el-col>
            </el-row>
              </el-col>

            </el-row>
          </div>
        </el-col>
      </el-row>
      <!--------------------------------------------------------------------------->
    
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
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
                <el-row class="row_height_100 flex_center"  ref="birthday" id="birthday">
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
             <el-row v-if="age == 15" class="flex_bet">
              <el-col :xs="24" :sm="11">
                 <el-checkbox ref="studentCode" id="studentCode" v-model="studentCode" style="margin:10px 5px 0">私は中学生ではありません</el-checkbox>
              </el-col>
            </el-row>
          </div>
        </el-col>

      </el-row>
      <!---------------------->
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">性别
              <span class="flex_center border_red_around" style="font-weight: normal;">必須</span>
            </span>
          </div>
        </el-col>
        <el-col ref='sex' :xs="24" :sm="18" class="back_wight border_l">
          <div  id="sex" class="content_ input_01 flex_center_start"
            style=" display: flex; align-items: center;height: 70px;position: relative;">
            <el-radio v-model="sex" label="1">男性</el-radio>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-radio v-model="sex" label="2">女性</el-radio>
            <div class="tips_top _err_01" id="p1_i7" style=""></div>
          </div>

        </el-col>
      </el-row>
      <!-------------------------------------------------------------------->
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">自宅住所（漢字）
              <!-- <span class="flex_center border_red_around" style="font-weight: normal">必須</span> -->
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">郵便番号</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="15">
                    <el-row class="flex_center" style="justify-content: flex-start;">
                      <el-col :xs="16" :sm="16" class="">
                        <el-input ref="zip_code" id="zip_code" class="input_inner_100" v-model="form.zip_code" type='tel'
                          placeholder="半角数字７文字（ハイフンなし）" :maxlength="7" @input="deleteAllBackgroundColor(['zip_code']),replaceNum('zip_code')" @blur="toSBCNum('zip_code')">
                        </el-input>
                      </el-col>
                      <el-col :xs="8" :sm="5" class="flex_center">
                        <van-button plain style="height:35px;border-radius: 5px;margin-left: 10px;" type="info" @click="getAddress()">住所検索
                        </van-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">都道府県</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">

                    <el-select ref="address_pref" id="address_pref" v-model="form.address_pref" placeholder="選択してください"
                      style="width: 100%" @change="deleteAllBackgroundColor(['address_pref'])">
                      <el-option-group v-for="group in address_pref_list" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.label" :label="item.label"
                          :value="item.label">
                        </el-option>
                      </el-option-group>
                    </el-select>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">市区町村</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="address_city" id="address_city" class="input_inner_100" v-model="form.address_city"
                      placeholder="20文字まで" :maxlength="20" @blur="halfToFull('address_city')"
                      @input="deleteAllBackgroundColor(['address_city'])">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">丁目・地番</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="address_number" id="address_number" class="input_inner_100" v-model="form.address_number"
                      placeholder="20文字まで" :maxlength="20" @blur="halfToFull('address_number')"
                      @input="deleteAllBackgroundColor(['address_number'])">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in">
                      <span class="flex_title_2 ">マンション・部屋番号</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="address_other" id="address_other" class="input_inner_100"
                      v-model="form.address_other" placeholder="80文字まで" :maxlength="80"
                      @blur="halfToFull('address_other')" @input="kanaOnInput01('address_other','address_other')">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

          </div>
        </el-col>
      </el-row>
       <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">自宅住所（フリガナ）
              <span class="flex_center border_red_around" style="font-weight: normal;">必須</span>
            </span>
          </div>
        </el-col>
        <el-col ref='sex' :xs="24" :sm="18" class="back_wight border_l">
           <div class="content_ input_01 flex_c_c">
           <el-input ref="kana_address" id="kana_address" class="input_inner_100"
                      v-model.trim="form.kana_address" :maxlength="130" @blur="changeLastKanaName('kana_address')"
                      placeholder="130文字まで" @input="kanaOnInput('kana_address','kana_address')"></el-input>
           </div>
        </el-col>
      </el-row>
      <!---------------------->
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all"  ref="tele_flg_checkbox" id="tele_flg_checkbox">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">電話番号
              <span  class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
           

            <el-row class="flex_bet padding_row" >
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100 p3_padding_15">
                  <el-col :xs="24" :sm="7">
                    <el-row>
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32 flex_title p_l_10">
                          <span class="flex_title">自宅（固定電話）
                              </span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>

                  <el-col :xs="24" :sm="16">
                    <el-row class="tips_top_row">
                      <el-col :span="24"><span class="_waring" style="">半角数字10-11桁</span>
                      </el-col>
                    </el-row>
                    <el-row class="flex_center_start">
                      <el-col :xs="6" :sm="4" class="">
                        <el-input ref="tele_number" id="tele_number" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.tele_number" placeholder="" @blur="toSBCNum('tele_number')" @input="
                            deleteAllBackgroundColor([
                              'tele_number',
                              'tele_number_2',
                              'tele_number_3',
                            ]),replaceNum('tele_number')
                          ">
                        </el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="tele_number_2" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.tele_number_02" placeholder="" @blur="toSBCNum('tele_number_02')" @input="
                            deleteAllBackgroundColor([
                              'tele_number',
                              'tele_number_2',
                              'tele_number_3',
                            ]),replaceNum('tele_number_02')
                          "></el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="tele_number_3" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.tele_number_03" placeholder="" @blur="toSBCNum('tele_number_03')" @input="
                            deleteAllBackgroundColor([
                              'tele_number',
                              'tele_number_2',
                              'tele_number_3',
                            ]),replaceNum('tele_number_03')
                          "></el-input>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet padding_row">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100 p3_padding_15">
                  <el-col :xs="24" :sm="7" class="p_l_10">
                    <el-row>
                      <el-col :span="24">
                        <div class="tittle_out_in padding_t_32 flex_title">
                          <span class="flex_title">携帯 
                              </span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>

                  <el-col :xs="24" :sm="16">
                    <el-row class="tips_top_row">
                      <el-col :span="24"><span class="_waring" style="">半角数字11桁</span>
                      </el-col>
                    </el-row>
                    <el-row class="flex_center_start">
                      <el-col :xs="6" :sm="4" class="">
                        <el-input ref="id_phone_number" id="id_phone_number" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.phone_number01" placeholder="" @blur="toSBCNum('phone_number01')" @input="
                            deleteAllBackgroundColor([
                              'id_phone_number',
                              'id_phone_number_2',
                              'id_phone_number_3',
                            ]),replaceNum('phone_number01')
                          ">
                        </el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="id_phone_number_2" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.phone_number02" placeholder="" @blur="toSBCNum('phone_number02')" @input="
                            deleteAllBackgroundColor([
                              'id_phone_number',
                              'id_phone_number_2',
                              'id_phone_number_3',
                            ]),replaceNum('phone_number02')
                          "></el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="id_phone_number_3" class="input_inner_100" :maxlength="4" type='tel'
                          v-model="form.phone_number03" placeholder="" @blur="toSBCNum('phone_number03')" @input="
                            deleteAllBackgroundColor([
                              'id_phone_number',
                              'id_phone_number_2',
                              'id_phone_number_3',
                            ]),replaceNum('phone_number03')
                          "></el-input>
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
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">ご職業
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l" id="job_kbn">
          <div class="content_ input_01 flex_c_c" style="justify-content: flex-start">
            <el-radio-group v-model="form.job_kbn" @input="radioChange()">
                    <el-radio :label="'1'">会社員・会社役員</el-radio>
                    <el-radio :label="'2'">自営業・自由業</el-radio>
                    <el-radio :label="'3'">年金受給</el-radio>
                    <el-radio :label="'4'">アルバイト・パート・派遣・契約社員</el-radio>
                    <el-radio :label="'5'">無職</el-radio>
                    <el-radio :label="'6'">学生</el-radio>
                    <el-radio :label="'7'">公務員</el-radio>
                    <el-radio :label="'8'">医師・弁護士・公認会計士・司法書士・税理士・一級建築士・大学教授</el-radio>
                  </el-radio-group>

          </div>
        </el-col>
      </el-row>

        <el-row v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 " class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先名・学校名呼称
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l" id="checkList">
          <div class="content_ input_01 flex_c_c" style="justify-content: flex-start">

              <el-row class="mar_top_15" style="color:red;">
              <el-col :xs="24" :sm="16">
                <el-row class="flex_center_start" >
                  <el-col :xs="24" :sm="24" class="">
                    <div class="waring_01"></div>
                           <el-select ref="work_name_code" id="work_name_code"
                          v-model="form.work_name_code" placeholder="選択してください" style="width: 100%" >
                          <el-option v-for="item in store_list" :key="item.store_number"
                            :label="item.store_nm" :value="item.store_number" />
                        </el-select>

                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <!-- -------------- -->
      <el-row v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 " class="flex_item_center border_ margin_1 mobile_margin back_all"  ref="checkList01">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先・学校名（漢字）
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row>
              <el-col :span="24" class="waring_01" style="color:red"><span>支社や営業所名までご入力ください。</span>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24" class="waring_01" style="color:red"><span>学生の方は、学校名をご入力ください。</span>
              </el-col>
            </el-row>
    

            <el-row>
              <el-col :span="24" class="waring_01" style="color:red"><span>無職の方は「無職」とご入力ください。</span>
              </el-col>
            </el-row>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="16">
                    <el-row class="flex_center_start">
                      <el-col :xs="24" :sm="24" class="" style="padding-top: 5px">
                        <el-input ref="id_work_name" id="id_work_name" @blur="halfToFull('work_name')" class="" 
                          maxlength="10" v-model="form.work_name" placeholder="10文字まで（例）○○商事"
                          @input="deleteAllBackgroundColor(['id_work_name'])">
                        </el-input>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 " class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先・学校名（フリガナ）
              <span class="flex_center border_red_around" style="font-weight: normal;">必須</span>
            </span>
          </div>
        </el-col>
        <el-col ref='sex' :xs="24" :sm="18" class="back_wight border_l">
           <div class="content_ input_01 flex_c_c">
           <el-input ref="work_name_kana" id="work_name_kana" class="input_inner_100"
                      v-model.trim="form.work_name_kana" :maxlength="20" @blur="changeLastKanaName('work_name_kana')"
                      placeholder="20文字まで（例）○○ショウジ" @input="kanaOnInput('work_name_kana','work_name_kana')"></el-input>
           </div>
        </el-col>
      </el-row>
      <!-- -------------- -->
      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先電話番号
              <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="16">
                    <el-row class="tips_top_row">
                      <el-col :span="24" class="waring_01" style="color:red"><span>学生や無職の方は、自宅電話番号もしくは携帯電話番号をご入力ください。</span>
                      </el-col>
                      <el-col :span="24"><span class="_waring" style="">半角数字10-11桁</span>
                      </el-col>
                    </el-row>
                    <el-row class="flex_center_start">
                      <el-col :xs="6" :sm="4" class="">
                        <el-input ref="id_work_tele_number" id="id_work_tele_number" class="input_inner_100"  type="tel"
                          v-model="form.work_tele_number01" maxlength="4" @blur="toSBCNum('work_tele_number01')"
                          placeholder="" @input="
                            deleteAllBackgroundColor([
                              'id_work_tele_number',
                              'id_work_tele_number_1',
                              'id_work_tele_number_2',
                            ]),replaceNum('work_tele_number01')
                          "></el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="id_work_tele_number_1" class="input_inner_100" v-model="form.work_tele_number02" type="tel"
                          maxlength="4" @blur="toSBCNum('work_tele_number02')" placeholder="" auto-complete="" @input="
                            deleteAllBackgroundColor([
                              'id_work_tele_number',
                              'id_work_tele_number_1',
                              'id_work_tele_number_2',
                            ]),replaceNum('work_tele_number02')
                          "></el-input>
                      </el-col>
                      <el-col :xs="2" :sm="2" class="flex_center">ー</el-col>
                      <el-col :xs="6" :sm="4" class="">
                        <el-input id="id_work_tele_number_2" class="input_inner_100" v-model="form.work_tele_number03"  type="tel"
                          maxlength="4" @blur="toSBCNum('work_tele_number03')" placeholder="" @input="
                            deleteAllBackgroundColor([
                              'id_work_tele_number',
                              'id_work_tele_number_1',
                              'id_work_tele_number_2',
                            ]),replaceNum('work_tele_number03')
                          "></el-input>
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
       <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先・学校住所（漢字）
            </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">郵便番号</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="15">
                    <el-row class="flex_center" style="justify-content: flex-start;">
                      <el-col :xs="16" :sm="16" class="">
                        <el-input ref="work_zip_code" id="work_zip_code" class="input_inner_100" v-model="form.work_zip_code" type='tel'
                          placeholder="半角数字７文字（ハイフンなし）" :maxlength="7" @input="deleteAllBackgroundColor(['work_zip_code']),replaceNum('work_zip_code')" @blur="toSBCNum('work_zip_code')">
                        </el-input>
                      </el-col>
                      <el-col :xs="8" :sm="5" class="flex_center">
                        <van-button plain style="height:35px;border-radius: 5px;margin-left: 10px;" type="info" @click="getAddress()">住所検索
                        </van-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">都道府県</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">

                    <el-select ref="work_address_pref" id="work_address_pref" v-model="form.work_address_pref" placeholder="選択してください"
                      style="width: 100%" @change="deleteAllBackgroundColor(['work_address_pref'])">
                      <el-option-group v-for="group in address_pref_list" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.label" :label="item.label"
                          :value="item.label">
                        </el-option>
                      </el-option-group>
                    </el-select>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">市区町村</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="work_address_city" id="work_address_city" class="input_inner_100" v-model="form.work_address_city"
                      placeholder="20文字まで" :maxlength="20" @blur="halfToFull('work_address_city')"
                      @input="deleteAllBackgroundColor(['work_address_city'])">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in flex_between p_l_10">
                      <span class="flex_title_2 ">丁目・地番</span>
                      <span class="flex_center border_red_around" style="font-weight: normal">必須</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="work_address_number" id="work_address_number" class="input_inner_100" v-model="form.work_address_number"
                      placeholder="20文字まで" :maxlength="20" @blur="halfToFull('work_address_number')"
                      @input="deleteAllBackgroundColor(['work_address_number'])">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="flex_bet" style="margin:10px 0">
              <el-col :xs="24" :sm="24">
                <el-row class="row_height_100">
                  <el-col :xs="24" :sm="9">
                    <div class="tittle_out_in">
                      <span class="flex_title_2 ">マンション・部屋番号</span>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="10" class="">
                    <el-input ref="work_address_other" id="work_address_other" class="input_inner_100"
                      v-model="form.work_address_other" placeholder="80文字まで" :maxlength="80"
                      @blur="halfToFull('work_address_other')" @input="kanaOnInput01('work_address_other','work_address_other')">
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
        <el-row class="flex_item_center border_ margin_1 mobile_margin back_all">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お勤め先・学校住所（フリガナ）
              <span class="flex_center border_red_around" style="font-weight: normal;">必須</span>
            </span>
          </div>
        </el-col>
        <el-col ref='sex' :xs="24" :sm="18" class="back_wight border_l">
           <div class="content_ input_01 flex_c_c">
           <el-input ref="work_kana_address" id="work_kana_address" class="input_inner_100"
                      v-model.trim="form.work_kana_address" :maxlength="130" @blur="changeLastKanaName('work_kana_address')"
                      placeholder="130文字まで" @input="kanaOnInput('work_kana_address','work_kana_address')"></el-input>
           </div>
        </el-col>
      </el-row>
    </div>
    <!-- -------------- -->

    <el-row style="height: 90px;">
      <el-col :xs="24" :sm="24" class="flex_center">
      <van-button class="flex_center button_All  position_R" type="primary"  @click="toPage()" >
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
import {isEmpty,checkHalNum,toSBC,halfToFull,toSBCNum,Symbol02,changeToDBC,toKatakanaCase,checkHal02,strto,PATTERFULL,kanaToRoman,FullTohalf,getUserAge } from "@/utils/validate.js";
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
import { CUSTOMER_INPUT_INIT_POST,GET_ADDRESS,CHECK_AGE } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import {constants} from '@/utils/constants.js'
import myMixin from '../mixin.js';
import {decrypt} from '../../utils/jse'
export default {
  data() {
    return {
      value: "",
      show: "",
      checkList: [],
      store_list:[
        {store_number:"011",store_nm:"株式会社○○○○"},
        {store_number:"012",store_nm:"○○○○株式会社"},
        {store_number:"021",store_nm:"有限会社○○○○"},
        {store_number:"022",store_nm:"○○○○有限会社"},
        {store_number:"361",store_nm:"合同会社○○○○"},
        {store_number:"362",store_nm:"○○○○合同会社"},
        {store_number:"061",store_nm:"医療法人○○○○"},
        {store_number:"101",store_nm:"学校法人○○○○"},
        {store_number:"000",store_nm:"その他（勤務先名と併せて入力してください）"},
      ],
      form: {
        work_name_code:'',
        name_first: '',
        name_last: '',
        kana_last_name: "",
        kana_first_name: "",
        address_city: "", //住所（市区町村）
        address_pref: "", //住所（都道府県）
        address_number:"",
        zip_code: "", //郵便番号
        address_other: "", //マンション・部屋番号
        job_kbn:'',
        work_name: "",
        work_name_kana:"",
        work_address: "",
        phone_number01: "",
        phone_number02: "",
        phone_number03: "",
        tele_number: "",
        tele_number_02: "",
        tele_number_03: "",
        work_tele_number01: "",
        work_tele_number02: "",
        work_tele_number03: "",
        name_en:'',
        kana_address:'',
        work_zip_code:'',
        work_address_pref:'',
        work_address_city:'',
        work_address_number:'',
        work_address_other:'',
        work_kana_address:''
      },
      address_pref_list: constants.prefecturesCodeList,
      DomList: [],
      id_document_type_1: "", //本人確認書類コード
      id_document_type_2: "", //本人確認書類コード
      birthday: "", //生年月日
      address: "", // 住所
      sex: "", //性別
      currentDate: new Date(),
      minDate: new Date(1945, 0, 1),
      maxDate: new Date(2999, 10, 1),
      show: false,
      initApiflg: '',
      studentCode:false,
      age:0,
      application_seq:''
    };
  },
  mixins:[myMixin],
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication","getAllVlues","getApplication_2"]),
  },
  created() {
  },
  mounted() {
    document.getElementsByClassName('body_')[0].scrollTo(0, 0)
   if(!this.$store.state.page.isPc){
    // if (this.$route.query.hasOwnProperty('seq_no')) {
    //   this.setSeqNo(decodeURIComponent(this.$route.query.seq_no));
    // }
     if (this.$route.query.hasOwnProperty('application_seq') &&   this.$route.query.hasOwnProperty('application_id')) {
          this.application_seq = this.$route.query.application_id;
          if( this.application_seq == 1){
              this.setApplication_1(this.$route.query.application_id);   
          }else{
              this.setApplication_2(this.$route.query.application_id);
          }
     }
 

    this.getState();
    if (!this.initApiflg=='1') {
      this.init();
    }
    }
  },
  components: {
  },
  methods: {
    ...mapMutations({
      setSeqNo: "user/setSeqNo",
      setApplication_1: "user/setApplication_1",
      setApplication_2: "user/setApplication_2",
      setState:"user/setState",
    }),
  noPlace(key){
     this.form[key] = this.form[key].replace(/\s*/g,"")
    },
  replaceNum(key) {
        let num = this.form[key]+'';
        this.form[key] = num.replace(/[^0-9]/g, "");
    },
  EN() {
        let num = this.form.name_en+'';
        console.log(this.form.name_en);
        this.form.name_en = num.replace(/[^a-zA-Z\s]/g, '');
    },
  trimandUpdace(){
    this.form.name_en =  this.form.name_en.trim().toLocaleUpperCase()

  },
      //kana入力限制
  kanaOnInput(eventName,id) {
    this.deleteBackgroundColor(eventName,id)
    this.form[eventName] = this.form[eventName].replace(/[^\u30A0-\u30FF\u3040-\u309Fa-zA-Zａ-ｚＡ-Ｚ]/g, '');
  },
    //kana入力限制
  kanaOnInput01(eventName,id) {
    this.deleteBackgroundColor(eventName,id)
    this.form[eventName] = this.form[eventName].replace(/[^ぁ-んァ-ン一-龥〃仝々ゞゝゐゔゑヾヽヷヰヸヴヱヹヲヺヶa-zA-Zａ-ｚＡ-Ｚ0-9\uFF10-\uFF19（）ー\(\)\-\−\－\―]/g,'')
  },
  //kana入力限制
  kanaOnInput02(eventName,id) {
    this.deleteBackgroundColor(eventName,id)
    this.form[eventName] = this.form[eventName].replace(/[^\u30A0-\u30FF\u3040-\u309F0-9\uFF10-\uFF19a-zA-Z（）ー\(\)\-\−\－\―]|[・]/g, '');
  },
  changeLastKanaName(eventName) {
    this.halfToFull(eventName)
    this.form[eventName]= changeToDBC(toKatakanaCase(this.form[eventName]))
  },
    getAddress(){
      try {
        let params = {
          seq_no:this.getSeqNo,
          zip_code_pre:this.form.zip_code
        }
        startLoading();
        GET_ADDRESS(params).then((res)=>{
          popMessageFromApi(res)
          endLoading()
          if(res.success){
            this.deleteAllBackgroundColor(['address_pref','address_city'])
            if(!isEmpty(res.data.address_pref)){
              this.form.address_pref= res.data.address_pref
            }
            if(!isEmpty(res.data.address_city)){
                this.form.address_city= res.data.address_city
            }
          }
      }).catch((error)=>{
          endLoading()
      })
      } catch (error) {
         endLoading()
      }
    },
    init() {
      let applicationId ="";
          if(this.application_seq == 1){
              applicationId = this.getApplication
          }else{
              applicationId = getApplication_2
          }
      
      let params = {
        application_id: applicationId,
      };
      startLoading();
      CUSTOMER_INPUT_INIT_POST(params)
        .then((res) => {
          this.initApiflg = '1'
          popMessageFromApi(res,() => { this.$router.push({ name: "explanation", params: {}, }) });
          endLoading();
          if (res.success) {
              if(this.application_seq == 1){
              this.id_document_type_1 = res.data.id_document_type; //本人確認書類コード
          }else{
              this.id_document_type_2 = res.data.id_document_type; //本人確認書類コード
          }
           
            this.form.name_last = res.data.name_last; //姓
            this.form.name_first = res.data.name_first; //名
            this.birthday = res.data.birthday; //生年月日
            this.birthday = this.birthday.replace(/(.{6})/, "$1/").replace(/(.{4})/, "$1/")
            this.address = res.data.address; // 住所
            this.sex = res.data.sex; //性別
            this.form.zip_code = res.data.zip_code; //郵便番号
            this.form.address_pref = res.data.address_pref; //住所（都道府県）
            this.form.address_city = res.data.address_city; //住所（市区町村）
          }
        })
        .catch((err) => {
          endLoading();
        });
    },
    toPage() {
      this.setValues();
      // if (this.check()) {
      //   startLoading();
      //   let data = {
      //     seq_no:this.getSeqNo,
      //     birthday:this.birthday.replace(/\//g, '')
      //   }
      //     CHECK_AGE(data).then(res=>{
      //       popMessageFromApi(res);
      //       endLoading();
      //         if(res.success){
      //           this.setValues();
      //           this.$router.push({
      //           name: "inputApplication",
      //           params: {},
      //         });
      //       }
      //     }).catch(err=>{
      //       endLoading();
      //     })
    
      // }
    },

    // 半角 转 全角
    halfToFull(key) {
      this.form[key] = halfToFull(this.form[key].trim());
    },
    // 全角转半角
    toSBCNum(key) {
      this.form[key] = toSBC(this.form[key].trim());
    },
    jatoEn(){
      if(isEmpty( this.form.name_en) && !isEmpty(this.form.kana_last_name)&&!isEmpty(this.form.kana_first_name)){
          this.form.name_en = kanaToRoman(this.form.kana_last_name+' '+this.form.kana_first_name).toUpperCase()
      }
      
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
      this.currentDate = new Date(year, mouth-1, day);
      this.show = false
      this.age = getUserAge(this.birthday,true);
      console.log(this.age);
    },
    radioChange(){
      this.form.work_name_code = ""
      this.form.work_name = ""

    },
    deleteBackgroundColor(id) {
      SetDom.deleteBackgroundColor(id);
    },
    deleteAllBackgroundColor(ids) {
      SetDom.deleteAllBackgroundColor(ids);
    },
    Err(id, msg, ref) {

      this.$message.error(msg);
      this.DomList = SetDom.changeBackgroundColor(this.DomList, id);
      this.scrollTop(id)
    },
   
    ErrOnlyColor(id, ref) {
      this.DomList = SetDom.changeBackgroundOnlyColor(this.DomList, id);

    },
    Errs(ids, msg, ref) {

      this.$message.error(msg);
      for (let id of ids) {
        this.DomList = SetDom.changeBackgroundColor03(this.DomList, id);
      }
      this.scrollTop(ref)
    },
     scrollTop(id){
      setTimeout(()=>{
       let dom = document.getElementById(id)
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
    banjiao(){
     console.log(this.form.kana_last_name+" "+this.form.kana_first_name);
     console.log(FullTohalf(this.form.kana_last_name+" "+this.form.kana_first_name)); 
    },
    check() {
      this.deleteAllBackgroundColor(['name_first', 'sex', 'name_last', 'kana_last_name', 'kana_first_name', 'birthday01', 'birthday02', 'id_phone_number', "id_phone_number_2",
        "id_phone_number_3","address_number", "tele_number", "tele_number_2", "tele_number_3", 'p3_i4', 'id_work_name',
        "id_work_tele_number", "id_work_tele_number_1", "id_work_tele_number_2",]);

      // お名前（漢字）			
      if (isEmpty(this.form.name_last)) {
        this.Err("name_last", MESSAGE.MsgErrCheck026, "name_last");
        return false;
      } else if (this.form.name_last.length > 10|| !PATTERFULL(this.form.name_last)) {
        this.Err("name_last", MESSAGE.MsgErrCheck027, "name_last");
        return false;
      }

      if (isEmpty(this.form.name_first)) {
        this.Err("name_first", MESSAGE.MsgErrCheck028, "name_first");
        return false;
      } else if (this.form.name_first.length > 10|| !PATTERFULL(this.form.name_first)) {
        this.Err("name_first", MESSAGE.MsgErrCheck029, "name_first");
        return false;
      }

      if((this.form.name_last+"　"+this.form.name_first).length>10){
       this.Errs(["name_last", "name_first"],MESSAGE.MsgErrCheck077,"name_last");
        return false;
      }

      //お名前（フリガナ）
      if (isEmpty(this.form.kana_last_name)) {
        this.Err("kana_last_name", MESSAGE.MsgErrCheck030, "kana_last_name");
        return false;
      } else if (this.form.kana_last_name.length > 20 || checkHal02(this.form.kana_last_name) || !PATTERFULL(this.form.kana_last_name)) {
        this.Err("kana_last_name", MESSAGE.MsgErrCheck031, "kana_last_name");
        return false;
      }


      if (isEmpty(this.form.kana_first_name)) {
        this.Err("kana_first_name", MESSAGE.MsgErrCheck032, "kana_first_name");
        return false;
      } else if (this.form.kana_first_name.length > 20 || checkHal02(this.form.kana_first_name) || !PATTERFULL(this.form.kana_first_name)) {
        this.Err("kana_first_name", MESSAGE.MsgErrCheck078, "kana_first_name");
        return false;
      }
      //全角カナの姓と名合わせて２０文字以下								
     if((this.form.kana_last_name+"　"+this.form.kana_first_name).length>20){
        this.Errs(["kana_last_name", "kana_first_name"],MESSAGE.MsgErrCheck079,"kana_last_name");
        return false;
     }
     //半角表現で２０文字を超過
     if(FullTohalf(this.form.kana_last_name+" "+this.form.kana_first_name).length>20){
        this.Errs(["kana_last_name", "kana_first_name"],MESSAGE.MsgErrCheck080,"kana_last_name");
        return false;
     }


    // お名前（英語表記）
    if (isEmpty(this.form.name_en)) {
        this.Err("name_en", MESSAGE.MsgErrCheck081, "name_en");
        return false;
      } else if (this.form.name_en.length > 18|| !PATTERFULL(this.form.kana_first_name)) {
        this.Err("name_en", MESSAGE.MsgErrCheck082, "name_en");
        return false;
      }else if(this.form.name_en.indexOf(' ') ==-1){
        this.Err("name_en", MESSAGE.MsgErrCheck083, "name_en");
        return false;
      }



      //生日
      if (isEmpty(this.birthday)) {
        this.$message.error(MESSAGE.MsgErrCheck033);
        this.ErrOnlyColor("birthday01", "birthday01");
        this.ErrOnlyColor("birthday02", "birthday02");

        this.scrollTop('birthday')
        return false;
      }
      if(this.age < 15){
        this.ErrOnlyColor("birthday01", "birthday01");
        this.ErrOnlyColor("birthday02", "birthday02");
        return false;
      }
      if(this.age == 15 && !this.studentCode){
        this.Err("studentCode", MESSAGE.MsgErrCheck085, "studentCode");
        return false;
      }
      
      //性別
      if (isEmpty(this.sex)) {
        this.$message.error(MESSAGE.MsgErrCheck034);
        this.scrollTop('sex')
        return false;
      }
      //郵便番号
      if (isEmpty(this.form.zip_code)) {
        this.Err("zip_code", MESSAGE.MsgErrCheck035, "zip_code");
        return false;
      } else if (!checkHalNum(this.form.zip_code)||this.form.zip_code.length != 7) {
        this.Err("zip_code",MESSAGE.MsgErrCheck036, "zip_code");
        return false;
      }


      //都道府県
      if (isEmpty(this.form.address_pref)) {
        this.Err("address_pref", MESSAGE.MsgErrCheck037, "address_pref");
        return false;
      }
      //市区町村・番地										
      if (isEmpty(this.form.address_city)) {
        this.Err("address_city", MESSAGE.MsgErrCheck038, "address_city");
        return false;
      } else if (this.form.address_city > 20 || !PATTERFULL(this.form.address_city)) {
        this.Err("address_city",  MESSAGE.MsgErrCheck039, "address_city");
        return false;
      }

      if (isEmpty(this.form.address_number)) {
        this.Err("address_number",'丁目・地番を入力してください', "address_number");
        return false;
      } else if (this.form.address_number > 20 || !PATTERFULL(this.form.address_number)) {
        this.Err("address_number",'丁目・地番は全角20文字まで入力してください', "address_number");
        return false;
      }

      //マンション・部屋番号
      if (!isEmpty(this.form.address_other)) {
        if(this.form.address_other > 80 || !Symbol02(toSBC(this.form.address_other.trim())) || !PATTERFULL(this.form.address_other)){
        this.Err("address_other", MESSAGE.MsgErrCheck084, "address_other");
        return false;
        }

      }

    if(halfToFull(this.form.zip_code+"　"+this.form.address_pref+"　"+this.form.address_city+"　"+this.form.address_number+"　"+this.form.address_other).length>80){
      this.$message.error(MESSAGE.MsgErrCheck086);
        this.scrollTop('job_kbn')        
        return false;
    }


       if (isEmpty(this.form.kana_address)) {
          this.Err("kana_address",'自宅住所（フリガナ）のメイを入力してください', "kana_address");
          return false;
        } else if(this.form.kana_address > 130 || checkHal02(this.form.kana_address)|| !PATTERFULL(this.form.kana_address)){
          this.Err("kana_address",'自宅住所（フリガナ）は全角130文字まで入力してください', "kana_address");
          return false;
        }else if (FullTohalf(this.form.kana_address) > 130) {
          this.Err("kana_address",'自宅住所（フリガナ）は半角カナに変換した際に、130文字以内になるように入力してください。', "kana_address");
          return false;
        }
      

        let num03 =this.form.tele_number +this.form.tele_number_02 +this.form.tele_number_03;
        if (!isEmpty(num03)) {
          if (!checkHalNum(num03) || num03.length < 10 ||num03.length > 11) {
          this.Errs(["tele_number", "tele_number_2", "tele_number_3"],MESSAGE.MsgErrCheck044,"tele_number");
          return false;
        }
        } 

        let num01 =this.form.phone_number01 +this.form.phone_number02 + this.form.phone_number03;
        if (isEmpty(num01)) {
          this.Errs(["id_phone_number", "id_phone_number_2", "id_phone_number_3"],MESSAGE.MsgErrCheck045,"id_phone_number");
          return false;
        } else if (!checkHalNum(num01) || num01.length != 11) {
          this.Errs(["id_phone_number", "id_phone_number_2", "id_phone_number_3"],MESSAGE.MsgErrCheck046,"id_phone_number");
          return false;
        }else if(num01.slice(0,3)=="090"||num01.slice(0,3)=="080"||num01.slice(0,3)=="070"||num01.slice(0,3)=="050"||num01.slice(0,3)=="020"){
          this.Errs(["id_phone_number", "id_phone_number_2", "id_phone_number_3"],MESSAGE.MsgErrCheck093,"id_phone_number");
          return false;  
        }

        if (!isEmpty(num03) && num03 == num01) {
         this.Errs(["id_phone_number", "id_phone_number_2", "id_phone_number_3"],MESSAGE.MsgErrCheck094,"id_phone_number");
          return false;  
        }
      //ご職業
      if (isEmpty(this.form.job_kbn)) {
        this.$message.error(MESSAGE.MsgErrCheck047);
        this.scrollTop('job_kbn')        
        return false;
      }
      //お勤め先名・学校名呼称  todo
      if(this.form.job_kbn == 1 ||this.form.job_kbn == 2 ||this.form.job_kbn ==4 ||this.form.job_kbn ==6 ||this.form.job_kbn ==7||this.form.job_kbn == 8){
       if (isEmpty(this.form.work_name_code)) {
        this.Err("work_name_code", "ご職業を選択してください", "work_name_code");
        return false;
      } 
      
      //お勤め先・学校名（漢字）
      
      if (isEmpty(this.form.work_name)) {
          this.Err("id_work_name", 'お勤め先・学校名（漢字）を入力してください', "id_work_name");
          return false;
        } else if ( this.form.work_name.length > 10 || !PATTERFULL(this.form.work_name)) {
        this.Err("id_work_name", 'お勤め先（学校名）は全角10文字まで入力してください', "id_work_name");
        return false;
      }
      //お勤め先・学校名（フリガナ）
      if (isEmpty(this.form.work_name_kana)) {
          this.Err("work_name_kana", 'お勤め先・学校名（フリガナ）を入力してください', "work_name_kana");
          return false;
        } else if ( this.form.work_name_kana.length > 20 || checkHal02(this.form.work_name_kana)|| !PATTERFULL(this.form.work_name_kana)) {
        this.Err("work_name_kana", 'お勤め先・学校名（フリガナ）は全角20文字まで入力してください', "work_name_kana");
        return false;
      }else if (FullTohalf(this.form.work_name_kana) > 20) {
          this.Err("kana_address",'お勤め先・学校名（フリガナ）は半角カナに変換した際に、20文字以内になるように入力してください。', "kana_address");
          return false;
        }
      
      }
      //お勤め先電話番号
      let num02 = this.form.work_tele_number01 + this.form.work_tele_number02 + this.form.work_tele_number03;

      if (isEmpty(num02)) {
        this.Errs(["id_work_tele_number", "id_work_tele_number_1", "id_work_tele_number_2",], MESSAGE.MsgErrCheck051, "id_work_tele_number");
          return false;
        } else if (!isEmpty(num02) && (!checkHalNum(num02) || num02.length < 10 || num02.length > 11)) {
        this.Errs(["id_work_tele_number", "id_work_tele_number_1", "id_work_tele_number_2",], MESSAGE.MsgErrCheck052, "id_work_tele_number");
        return false;
      }


      //郵便番号
      if (isEmpty(this.form.work_zip_code)) {
        this.Err("work_zip_code", MESSAGE.MsgErrCheck035, "work_zip_code");
        return false;
      } else if (!checkHalNum(this.form.work_zip_code)||this.form.work_zip_code.length != 7) {
        this.Err("work_zip_code",MESSAGE.MsgErrCheck036, "work_zip_code");
        return false;
      }


      //都道府県
      if (isEmpty(this.form.work_address_pref)) {
        this.Err("work_address_pref", MESSAGE.MsgErrCheck037, "work_address_pref");
        return false;
      }
      //市区町村・番地										
      if (isEmpty(this.form.work_address_city)) {
        this.Err("work_address_city", MESSAGE.MsgErrCheck038, "work_address_city");
        return false;
      } else if (this.form.work_address_city > 20 || !PATTERFULL(this.form.work_address_city)) {
        this.Err("work_address_city",  MESSAGE.MsgErrCheck039, "work_address_city");
        return false;
      }

      if (isEmpty(this.form.work_address_number)) {
        this.Err("work_address_number",'丁目・地番を入力してください', "work_address_number");
        return false;
      } else if (this.form.work_address_number > 20 || !PATTERFULL(this.form.work_address_number)) {
        this.Err("work_address_number",'丁目・地番は全角20文字まで入力してください', "work_address_number");
        return false;
      }

      //マンション・部屋番号
      if (!isEmpty(this.form.work_address_other)) {
        if(this.form.work_address_other > 80 || !Symbol02(toSBC(this.form.work_address_other.trim())) || !PATTERFULL(this.form.work_address_other)){
        this.Err("work_address_other", MESSAGE.MsgErrCheck084, "work_address_other");
        return false;
        }

      }

    if(halfToFull(this.form.work_zip_code+"　"+this.form.work_address_pref+"　"+this.form.work_address_city+"　"+this.form.work_address_number+"　"+this.form.work_address_other).length>80){
      this.$message.error(MESSAGE.MsgErrCheck087);
        this.scrollTop('job_kbn')        
        return false;
    }

    if (isEmpty(this.form.work_kana_address)) {
          this.Err("work_kana_address", '自宅住所（フリガナ）を入力してください', "work_kana_address");
          return false;
      } else if ( this.form.work_kana_address.length > 130 || checkHal02(this.form.work_kana_address)|| !PATTERFULL(this.form.work_kana_address)) {
        this.Err("work_kana_address", '自宅住所（フリガナ）は全角130文字まで入力してください', "work_kana_address");
        return false;
      }else if (FullTohalf(this.form.work_kana_address) > 130) {
          this.Err("work_kana_address",'自宅住所（フリガナ）は半角カナに変換した際に、130文字以内になるように入力してください。', "work_kana_address");
          return false;
      }



      return true;
    },
    showredio() {
      this.deleteAllBackgroundColor([
        "id_phone_number",
        "id_phone_number_2",
        "id_phone_number_3",
        "tele_number",
        "tele_number_2",
        "tele_number_3",
      ]);

      this.form.phone_number01 = "";
      this.form.phone_number02 = "";
      this.form.phone_number03 = "";
      this.form.tele_number = "";
      this.form.tele_number_02 = "";
      this.form.tele_number_03 = "";
    },
    //store设置值保存
    setValues() {


      // if(this.form.zip_code !=decrypt(this.$store.state.user.zip_code)){

      //  this.setState({
      //     job_kbn:'',
      //     job_kbn_other:'',
      //  })
      // }
      this.setState({
        id_document_type_1: this.id_document_type_1,  //本人確認書類コード id_document_type_1_1
        id_document_type_2: this.id_document_type_2,  //本人確認書類コード id_document_type_1_1
        birthday: this.birthday,  //生年月日
        address: this.address,// 住所
        sex: this.sex, //性別
        zip_code: this.form.zip_code,//郵便番号
        address_pref: this.form.address_pref, //住所（都道府県）
        address_city: this.form.address_city, //住所（市区町村）
        address_number: this.form.address_number,
        address_other: this.form.address_other,//住所（その他）
        kana_address:this.form.kana_address,
        name_first: this.form.name_first,
        name_last: this.form.name_last,
        kana_last_name: this.form.kana_last_name,
        kana_first_name: this.form.kana_first_name,
        name_en:this.form.name_en,
        phone_number01: this.form.phone_number01,
        phone_number02: this.form.phone_number02,
        phone_number03: this.form.phone_number03,
        tele_number01: this.form.tele_number,
        tele_number02: this.form.tele_number_02,
        tele_number03: this.form.tele_number_03,
        job_kbn: this.form.job_kbn,
        work_name_code: this.form.work_name_code,
        work_name: this.form.work_name,
        work_tele_number01: this.form.work_tele_number01,
        work_tele_number02: this.form.work_tele_number02,
        work_tele_number03: this.form.work_tele_number03,
        initApiflg:this.initApiflg,
        work_address:this.form.work_address,
        work_name_kana:this.form.work_name_kana,
        work_zip_code:this.form.work_zip_code,
        work_address_pref:this.form.work_address_pref,
        work_address_city:this.form.work_address_city,
        work_address_number:this.form.work_address_number,
        work_address_other:this.form.work_address_other,
        work_address_other:this.form.work_address_other,
        work_kana_address:this.form.work_kana_address
      });
    },
    getState() {

      this.initApiflg =decrypt(this.$store.state.user.initApiflg);
      this.form.name_first = decrypt(this.$store.state.user.name_first);
      this.form.name_last = decrypt(this.$store.state.user.name_last);
      this.form.kana_last_name = decrypt(this.$store.state.user.kana_last_name);
      this.form.kana_first_name = decrypt(this.$store.state.user.kana_first_name);
      this.form.name_en = decrypt(this.$store.state.user.name_en);
      this.birthday = decrypt(this.$store.state.user.birthday);
      let date = this.birthday.split('/')
      this.currentDate = new Date(date[0], date[1]-1, date[2]);
      this.sex = decrypt(this.$store.state.user.sex);
      this.form.zip_code = decrypt(this.$store.state.user.zip_code);
      this.form.address_pref = decrypt(this.$store.state.user.address_pref);
      this.form.address_city = decrypt(this.$store.state.user.address_city);
      this.form.address_number = decrypt(this.$store.state.user.address_number);
      this.form.address_other = decrypt(this.$store.state.user.address_other);
      this.form.kana_address =  decrypt(this.$store.state.user.kana_address);
      this.form.phone_number01 = decrypt(this.$store.state.user.phone_number01);
      this.form.phone_number02 = decrypt(this.$store.state.user.phone_number02);
      this.form.phone_number03 = decrypt(this.$store.state.user.phone_number03);
      this.form.tele_number = decrypt(this.$store.state.user.tele_number01);
      this.form.tele_number_02 = decrypt(this.$store.state.user.tele_number02);
      this.form.tele_number_03 = decrypt(this.$store.state.user.tele_number03);
      this.form.job_kbn = decrypt(this.$store.state.user.job_kbn);
      this.form.work_name_code = decrypt(this.$store.state.user.work_name_code);
      this.form.work_name = decrypt(this.$store.state.user.work_name);
      this.form.work_tele_number01 = decrypt(this.$store.state.user.work_tele_number01);
      this.form.work_tele_number02 = decrypt(this.$store.state.user.work_tele_number02);
      this.form.work_tele_number03 = decrypt(this.$store.state.user.work_tele_number03);
      this.form.work_address = decrypt(this.$store.state.user.work_address);
      this.id_document_type_1 = decrypt(this.$store.state.user.id_document_type_1);
      this.id_document_type_2 = decrypt(this.$store.state.user.id_document_type_2);
      this.form.work_name_kana = decrypt(this.$store.state.user.work_name_kana);
      this.form.work_zip_code = decrypt(this.$store.state.user.work_zip_code);
      this.form.work_address_pref = decrypt(this.$store.state.user.work_address_pref);
      this.form.work_address_city = decrypt(this.$store.state.user.work_address_city);
      this.form.work_address_number = decrypt(this.$store.state.user.work_address_number);
      this.form.work_address_other = decrypt(this.$store.state.user.work_address_other);
      this.form.work_kana_address = decrypt(this.$store.state.user.work_kana_address);
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
  .mar_top_15{
    margin-top: 15px;
  }
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
.el-radio-group{
  display: flex;
  flex-direction: column;
}

</style>
