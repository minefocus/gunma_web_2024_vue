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
                    <el-row v-if="this.form.student_flg" class="third_text">
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

                <!-- <el-row class="second_title" v-if="form.contractor_flg !='0'">
                  <el-col :xs="24" :sm="24" style="display: flex;justify-content: space-between;">
                    <div class=" ">
                      <span class="" style="">インターネットバンキング暗証番号</span>
                    </div>
                  </el-col>
                </el-row> -->
                <el-row class="third_text" v-if="form.contractor_flg != '0'">
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

  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { popMessageFromApi, ErrMessage } from "@/utils/message.js";
import { ACCOUNT_APPLICATION_POST } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import urlImage01 from "../../assets/img/card_visa@3x.png";
import { isEmpty,FullTohalf,toBig } from "@/utils/validate.js";
import myMixin from "../mixin.js";
import { decrypt } from "../../utils/jse";
export default {
  data() {
    return {
      url01: urlImage01,
      form: {
      },

    };
  },
  mixins: [myMixin],
  created() {},
  computed: {
    ...mapGetters("user", ["getSeqNo", "getApplication","getDatas","getApplication_2"]),
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
        seq_no: this.getSeqNo,
        application_id_1: this.getApplication,
        id_document_type_1: decrypt(this.$store.state.user.id_document_type_1),
        application_id_2: this.getApplication_2,
        id_document_type_2: decrypt(this.$store.state.user.id_document_type_2),
        name_first: this.form.name_first,
        name_last:this.form.name_last,
        kana_last_name:  FullTohalf(toBig(this.form.kana_last_name)),
        kana_first_name:  FullTohalf(toBig(this.form.kana_first_name)),
        name_en: this.form.name_en,
        birthday: this.form.birthday.replace(/\//g, ""),
        student_flg: this.form.student_flg?'0':'1',
        sex: this.form.sex,
        zip_code: this.form.zip_code,
        address_pref: this.form.address_pref,
        address_city: this.form.address_city,
        address_number: this.form.address_number,
        address_other: this.form.address_other,
        kana_address: FullTohalf(toBig(this.form.kana_address)),
        tele_number: tele_number,
        phone_number: phone_number,
        job_kbn: this.form.job_kbn,
        work_name_code:this.form.work_name_code,
        work_name: this.form.work_name,
        work_name_kana:FullTohalf(toBig(this.form.work_name_kana)),
        work_tele_number: work_tele_number,
        work_zip_code:this.form.work_zip_code,
        work_address_pref:this.form.work_address_pref,
        work_address_city:this.form.work_address_city,
        work_address_number:this.form.work_address_number,
        work_address_other:this.form.work_address_other,
        work_kana_address:FullTohalf(toBig(this.form.work_kana_address)),
        account_store_number: this.form.account_store_number,
        account_number:this.form.account_number,
        security_password: this.form.security_password,
        debit_password:this.form.debit_password,
        account_store_nm: this.form.account_store_nm

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
