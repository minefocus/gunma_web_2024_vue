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
          />&nbsp;&nbsp;Visaデビット申込
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="0" :sm="24" style="">
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
            src="@/assets/steps/step_pc_05@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="0" style="">
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
            src="@/assets/steps/step_05@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="confirm_waring">
        ご入力内容をご確認いただき、よろしければ「この内容で申込む」ボタンを押してください。<br />
        ご入力いただいた内容を修正される場合は、「修正」ボタンを押してください。
      </el-col>
    </el-row>
    <div style="width: 100%; margin-top: 15px" class="back_img_">
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
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="flex_center">
                      <span class="font_weight_bold">お名前（漢字）</span>
                    </div>
                    <van-button
                      round
                      plain
                      style="
                        height: 25px;
                        border: 1px solid #03a369;
                        background-color: #03a369;
                        color: rgb(255 255 255) !important;
                      "
                      type="info"
                      @click="toPage('inputCustomer')"
                      >修正</van-button
                    >
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span>姓</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.name_last | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span>名</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.name_first | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-divider></el-divider>
             <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="flex_center">
                      <span class="font_weight_bold">お名前（フリガナ）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span>セイ</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.kana_last_name | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span style="margin-right: 20px">メイ</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.kana_first_name | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="flex_center">
                      <span class="font_weight_bold">お名前（英文表記）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="second_title"> </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.name_en | NOVALUE }}
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
                    {{ form.birthday | NOVALUE }}
                  </el-col>
                </el-row>
                    <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    私は中学生ではありません
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
                    {{ form.sex == "1" ? "男性" : "女性" }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="">
                      <span class="font_weight_bold">自宅住所（漢字）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="">郵便番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.zip_code | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="margin-right: 20px">都道府県</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.address_pref | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">市区町村</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.address_city | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">丁目・地番</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.address_number | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">マンション・部屋番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.address_other | NOVALUE }}
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
                      <span class="font_weight_bold">自宅住所（フリガナ）</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                     {{ form.kana_address | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="">
                      <span class="font_weight_bold">電話番号</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">自宅（固定電話）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.tele_number_content | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">携帯</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.phone_number_content | NOVALUE }}
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
                    {{ form.job_kbn | Jobs }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 "></el-divider>
            <el-row class="flex_bet" v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 ">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class="">
                      <span class="font_weight_bold">お勤め先名・学校名呼称</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                     {{ form.work_name_code | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 "></el-divider>
            <el-row class="flex_bet" v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 ">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">お勤め先・学校名（漢字）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_name | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          <el-divider v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 "></el-divider>
            <el-row class="flex_bet" v-if="form.job_kbn==1 ||form.job_kbn==2 ||form.job_kbn==4 ||form.job_kbn==6 ||form.job_kbn==7 ||form.job_kbn==8 ">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col :xs="24" :sm="24">
                    <div class=" ">
                      <span class="font_weight_bold">お勤め先・学校名（フリガナ）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_name_kana | NOVALUE }}
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
                    {{ form.work_tele_number_content | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="">
                      <span class="font_weight_bold">お勤め先（学校）住所</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="">郵便番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_zip_code | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="margin-right: 20px">都道府県</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_address_pref | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">市区町村</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_address_city | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">丁目・地番</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_address_number | NOVALUE }}
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">マンション・部屋番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_address_other | NOVALUE }}
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
                      <span class="font_weight_bold">お勤め先・学校住所（フリガナ）</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.work_kana_address | NOVALUE }}
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- -------------- -->
      <el-row
        class="row_height_650px border_ margin_1 mobile_margin back_all flex_center_web"
      >
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w">お申込み情報 </span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" class="back_wight border_l">
          <div class="content_ input_01 flex_c_c">
            <el-row class="flex_bet">
              <el-col :xs="24" :sm="24">

              <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="flex_center">
                      <span class="font_weight_bold">カードデザイン</span>
                    </div>
                    <van-button
                      round
                      plain
                      style="
                        height: 25px;
                        border: 1px solid #03a369;
                        background-color: #03a369;
                        color: rgb(255 255 255) !important;
                      "
                      type="info"
                      @click="toPage('inputApplication')"
                      >修正</van-button
                    >
                  </el-col>
                </el-row>

                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="" style="margin: 10px">
                    <img style="height: 160px" :src="url01" />
                  </el-col>
                </el-row>
                 <el-divider ></el-divider>
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="font_weight_bold">決済口座情報</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">店舗</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.account_store_nm | NOVALUE }}
                  </el-col>
                </el-row>

                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">口座番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class="">
                    {{ form.account_number | NOVALUE }}
                  </el-col>
                </el-row>

                <el-row class="second_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class=" ">
                      <span class="" style="">キャッシュカード暗証番号</span>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="third_text">
                  <el-col :xs="24" :sm="24" class=""> **** </el-col>
                </el-row>

                <el-divider ></el-divider>
                <el-row class="first_title">
                  <el-col
                    :xs="24"
                    :sm="24"
                    style="display: flex; justify-content: space-between"
                  >
                    <div class="m_15px">
                      <span class="font_weight_bold"
                        >デビットカード暗証番号</span
                      >
                    </div>
                  </el-col>
                </el-row>

                <!-- <el-row class="second_title" v-if="pageS.contractor_flg !='0'">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">インターネットバンキング暗証番号</span>
                    </div>
                  </el-col>
                </el-row> -->
                <el-row class="third_text" v-if="pageS.contractor_flg != '0'">
                  <el-col :xs="24" :sm="24" class=""> ****** </el-col>
                </el-row>
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
          @click="confirmData()"
        >
          <span>この内容で申込む</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>

    <!-- <el-dialog title="" :visible.sync="centerDialogVisible" class="width_w_m" center>
      <span>{{description}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeWindow()">閉じる</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { MESSAGE, popMessageFromApi, ErrMessage } from "@/utils/message.js";
import { ACCOUNT_APPLICATION_POST } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import urlImage01 from "../../assets/img/card_visa@3x.png";
import urlImage02 from "../../assets/img/picture02.png";
import { isEmpty } from "@/utils/validate.js";
import myMixin from "../mixin.js";
import {constants} from "@/utils/constants.js";
import { decrypt } from "../../utils/jse";
export default {
  data() {
    return {
      address_pref_list: constants.prefecturesCodeList,
      pageF: {
        name_first: "",
        name_last: "",
        kana_last_name: "",
        kana_first_name: "",
        address_city: "", //住所（市区町村）
        address_number: "",
        address_pref: "", //住所（都道府県）
        address_pref_name: "",
        zip_code: "", //郵便番号
        address_other: "", //マンション・部屋番号
        kana_address_other: "", //マンション・部屋番号（フリガナ）
        birthday: "",
        tele_flg: "",
        phone_number01: "",
        phone_number02: "",
        phone_number03: "",
        phone_number_content: "",
        tele_number: "",
        tele_number_02: "",
        tele_number_03: "",
        tele_number_content: "",
        checkList: [],
        other_item: "",
        work_name: "",
        work_tele_number01: "",
        work_tele_number02: "",
        work_tele_number03: "",
        work_tele_number_content: "",
        work_address: "",
      },
      pageS: {
        introduce_flg: "",
        introduce_nm: "",
        account_address_pref: "",
        account_address_city: "",
        account_store_number: "",
        account_store_nm: "",
        account_reason: "",
        security_password: "",
        security_password02: "",
        contractor_flg: "",
        contractor_number: "",
        creditlimit: "",
        online_password: "",
        online_password02: "",
        checklist: [],
        account_reason: [],
        account_purpose_other: "",
        account_reason_other: "",
        cord_type: "",
        introduce_list: [],
      },
      url01: urlImage01,
      url02: urlImage02,
      centerDialogVisible: false,
      description: "",
      form: {
        introduce_flg: "",
      },
      flg: false,
      flg_2: false,
      flg_3: false,
    };
  },
  mixins: [myMixin],
  created() {},
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication","getDatas"]),
  },
  mounted() {
    document.getElementsByClassName("body_")[0].scrollTo(0, 0);
    this.getState();
  },
  components: {},
  methods: {
    confirmData() {
      let tele_number = "";
      let phone_number = "";
      let work_tele_number = "";
      if (
        !isEmpty(decrypt(this.$store.state.user.tele_number01)) &&
        !isEmpty(decrypt(this.$store.state.user.tele_number02)) &&
        !isEmpty(decrypt(this.$store.state.user.tele_number03))
      ) {
        tele_number =
          decrypt(this.$store.state.user.tele_number01) +
          "-" +
          decrypt(this.$store.state.user.tele_number02) +
          "-" +
          decrypt(this.$store.state.user.tele_number03);
      }
      if (
        !isEmpty(decrypt(this.$store.state.user.phone_number01)) &&
        !isEmpty(decrypt(this.$store.state.user.phone_number02)) &&
        !isEmpty(decrypt(this.$store.state.user.phone_number03))
      ) {
        phone_number =
          decrypt(this.$store.state.user.phone_number01) +
          "-" +
          decrypt(this.$store.state.user.phone_number02) +
          "-" +
          decrypt(this.$store.state.user.phone_number03);
      }
      if (
        !isEmpty(decrypt(this.$store.state.user.work_tele_number01)) &&
        !isEmpty(decrypt(this.$store.state.user.work_tele_number02)) &&
        !isEmpty(decrypt(this.$store.state.user.work_tele_number03))
      ) {
        work_tele_number =
          decrypt(this.$store.state.user.work_tele_number01) +
          "-" +
          decrypt(this.$store.state.user.work_tele_number02) +
          "-" +
          decrypt(this.$store.state.user.work_tele_number03);
      }

      let data = {
        //管理番号	-		yyyyMMddHHmmss{２桁乱数} ※暗号化
        seq_no: this.getSeqNo,
        //連携ID1	20
        application_id_1: this.getApplication,
        //連携ID1本人確認書類コード	5
        id_document_type_1: decrypt(this.$store.state.user.id_document_type_1),
        //氏名
        name_first: this.pageF.name_first,
        name_last: this.pageF.name_last,
        //生年月日
        birthday: this.pageF.birthday.replace(/\//g, ""),
        //性別
        sex: this.pageF.sex,
        //郵便番号
        zip_code: this.pageF.zip_code,
        //住所（都道府県）
        address_pref: this.pageF.address_pref,
        //住所（市区町村）
        address_city: this.pageF.address_city,
        address_number: this.pageF.address_number,
        //住所（その他）
        address_other: this.pageF.address_other,
        //マンション・部屋番号（フリガナ）
        kana_address_other: this.pageF.kana_address_other,
        //お名前_セイ
        kana_last_name: this.pageF.kana_last_name,
        //お名前_メイ
        kana_first_name: this.pageF.kana_first_name,
        //電話番号flg			0：自宅（固定電話）と携帯電話を持っています 1：自宅（固定電話）しか持っていません 2：携帯電話しか持っていません
        tele_flg: this.pageF.tele_flg,
        //自宅電話番号

        tele_number: tele_number,
        //携帯電話番号
        phone_number: phone_number,
        //	職業	256		list 1:会社役員・団体役員   2:会社員・団体職員   3:公務員　　4:個人事業主・自営業　　5:パート・アルバイト　6:派遣・嘱託・契約社員　7:主婦・主夫　8:年金受給者　9:学生　10:無職 11:その他         カンマで区切る
        job_kbn: this.pageF.checkList.join(),
        //その他職業	60
        job_kbn_other: this.pageF.other_item,
        //勤務先名
        work_name: this.pageF.work_name,
        //勤務先電話番号
        work_tele_number: work_tele_number,
        //お勤め先住所
        work_address: this.pageF.work_address,
        account_store_number: this.pageS.account_store_number,
        account_store_nm: this.pageS.account_store_nm,
        //カードデザイン	1
        cord_type: this.pageS.cord_type,
        //キャッシュカード暗証番号
        security_password: this.pageS.security_password,
        //契約持ちflg			０：はい　１：いいえ
        contractor_flg: this.pageS.contractor_flg,
        //契約者番号
        //1日あたりの振込限度額
        creditlimit: this.pageS.creditlimit.replace(/,/g, ""),
        //インターネットバンキング暗証番号
        online_password: this.pageS.online_password,

        //アンケート	1		1:WEBのニュース   2:新聞・雑誌広告   3:阿波銀行ホームページ  4:知人・友人の紹介   5:LINE・Twitter・Facebookなど   6:店頭   7: ATMコーナー  8:WEB検索  9:その他

        //その他アンケート	60
        //取引目的	256		1:生活費決済   2:給料受取 3:年金受取   4:仕送り   5:貯蓄   6:資産運用  7:融資返済用口座  8:外国為替取引  9:その他
        account_purpose: this.pageS.checklist.join(),
        account_reason: this.pageS.account_reason,
        // その他取引目的	60
        account_purpose_other: this.pageS.account_purpose_other,
        account_reason_other: this.pageS.account_reason_other,
        introduce_flg: this.pageS.introduce_flg,

        introduce_nm: this.pageS.introduce_nm,

      };
      startLoading();
      ACCOUNT_APPLICATION_POST(data)
        .then((res) => {
          endLoading();
          if (res.success) {
            this.$router.push({
              name: "finish",
              params: { custome_id: res.data.seq_no },
            });
          } else {
            if (res.message.open_message_type !== "pop") {
              popMessageFromApi(res);
            } else {
              ErrMessage(res);
            }
          }
        })
        .catch((err) => {
          endLoading();
        });
    },
    closeWindow() {
      this.centerDialogVisible = false;
    },
    toPage(path) {
      this.$router.push({
        name: path,
        params: {},
      });
    },
    getState() {
      this.form = this.getDatas;
      console.log(this.form);
      if(!isEmpty(this.form.phone_number01)&&!isEmpty(this.form.phone_number02)&&!isEmpty(this.form.phone_number03)){
        this.form.phone_number_content = this.form.phone_number01+'-'+this.form.phone_number02+'-'+this.form.phone_number03
      }else{
        this.form.phone_number_content = ''
      }
      if(!isEmpty(this.form.tele_number01)&&!isEmpty(this.form.tele_number02)&&!isEmpty( this.form.tele_number03)){
          this.form.tele_number_content = this.form.tele_number01 + "-" + this.form.tele_number02 + "-"+ this.form.tele_number03
      }else{
          this.form.tele_number_content =''
      }
      if(!isEmpty(this.form.work_tele_number01)&&!isEmpty(this.form.work_tele_number02)&&!isEmpty(this.form.work_tele_number03)){
      this.form.work_tele_number_content = this.form.work_tele_number01 + "-"+ this.form.work_tele_number02 + "-" + this.form.work_tele_number03
      }else{
        this.form.work_tele_number_content = ''
      }
      
    },
  },
};
</script>

<style scoped>
/deep/ .el-divider--horizontal {
  margin: 10px 0;
}
.first_title {
  font-size: 16px;
  margin: 15px 0 10px 0;
}
.second_title {
  font-size: 11px;
  color: #818181;
  margin: 13px 0 0 0;
}
.third_text {
  margin-bottom: 10px;
  font-size: 16px;
}
@media screen and (max-width: 767px) {
  /deep/.el-dialog {
    width: 90%;
  }
  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }
  .btn_w_ {
    width: 200px;
  }
}

@media screen and (min-width: 768px) {
  .btn_w_ {
    width: 200px;
  }
  /deep/.el-dialog {
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
