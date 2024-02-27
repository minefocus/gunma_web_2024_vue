<template>
  <div style="width:100%;padding-bottom: 50px;">
   <el-row>
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
        <img style="width:40px" class="rending_img " src="../../assets/img/icon.png" alt="">&nbsp;&nbsp;口座開設申込
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="0" :sm="24">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_pc_01@3x.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="24" :sm="0">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_01@3x.png" alt="">
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" class="top_waring" style="color:black">
        以下のチェック項目について、確認し、同意のチェックをお願いします。
      </el-col>
    </el-row>
    <el-checkbox-group v-model="checkList">
      <el-row class="backcolor">
        <el-col :span="24" class="flex_center">
          <div class="result_ font_16" style="padding: 30px 10px;height: auto;color:#606266">
            <el-row>
              <el-col :span="24">
                <el-checkbox label="1" class='checkbox_wi_mar' fill="#01216b">
                  <div class="font_16 check_tittle">以下１～４のすべてに該当する。</div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">１. 阿波銀行の普通預金口座を保有していない、もしくは１口座のみ保有している。 </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">２. 事業用の口座ではない。 </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">３. 年齢が満１５歳以上（中学生は除く)７０歳未満の個人で国籍が日本である。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%"> ４. 居住地（本人確認書類のご住所）が以下のいずれかである。</div>
              </el-col>
            </el-row> 
             <el-row style="">
              <el-col :span="24" class="padding_l_20" >
                <div style="width:100%">(１)徳島県内に在住している。</div>
              </el-col>
          </el-row>
            <el-row style="">
              <el-col :span="24" class="padding_l_20" >
                <div style="width:100%">(２)徳島県外に在住している場合は、以下のいずれかに該当する。</div>
              </el-col>
          </el-row>
          <el-row style="padding-left: 15px;">
              <el-col :span="24" class="padding_l_20" >
                <div style="width:100%">①徳島県内の大学等に在学、または進学予定である。（両親を含みます）
                </div>
              </el-col>
            </el-row>
               <el-row style="padding-left: 15px;">
              <el-col :span="24" class="padding_l_20" >
                <div style="width:100%">②阿波銀行のお客さま（法人・個人）からの給与振込受取口座・口座振替引落し口座である。</div>
              </el-col>
            </el-row>

          </div>
        </el-col>
      </el-row>



      <el-row class="backcolor">
        <el-col :span="24" class="flex_center">
          <div class="result_ font_16" style="padding: 30px 10px;height: auto;color:#606266">
            <el-row>
              <el-col :span="24">
                <el-checkbox label="2" class='checkbox_wi_mar' >
                  <div class="font_16 check_tittle" >実特法（※１）の規定にもとづき、以下１、２のとおり申告・同意する。</div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">１. 居住地国（※２）は日本のみである。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">２. 居住地国（※２）に変更が生じた場合は、３ヶ月以内に届出る。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">※１ 租税条約等の実施に伴う所得税法、法人税法及び地方税の特例等に関する法律</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">※２ 税務上の居住地国として、所得税法（に相当する税）を課される国</div>
              </el-col>
            </el-row>

          </div>
        </el-col>
      </el-row>

      <el-row class="backcolor">
        <el-col :span="24" class="flex_center">
          <div class="result_ font_16" style="padding: 30px 10px;height: auto;color:#606266">
            <el-row>
              <el-col :span="24">
                <el-checkbox label="13" class='checkbox_wi_mar' >
                  <div class="font_16 check_tittle" >以下について理解し同意のうえ申込みする。</div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">１. 銀行の預金口座・キャッシュカードの譲渡・売買は法令（※１）で禁止されています。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">２. 他人に譲り渡す目的で口座を開設する行為や他人・架空名義の口座を開設する行為は、詐欺罪に問われます。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">３. 転居等により預金口座が不要になった場合、口座解約をお願いします。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">４. 口座管理法（※２）に基づく預貯金口座への付番をご希望の場合は、お手数ですが最寄りの支店窓口での手続きをお願いします。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">※１ 犯罪収益移転防止法</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="padding_l_20">
                <div style="width:100%">※２ 預貯金者の意思に基づく個人番号の利用による預貯金口座の管理等に関する法律</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <el-row  class="backcolor">
        <el-col :span="24" class="flex_center">
          <div class="result_" style="padding:30px 10px;height: auto;">

            <el-row class="margin_top_down">
              <el-col>
                <el-checkbox label="9" class='checkbox_wi_mar' >
                  <div class="font_16 check_tittle">以下の「個人情報の利用目的」、「反社会的勢力ではないことの表明・確約」について、内容を閲覧・確認し、同意する。</div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row style="margin">
              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;" class="m_b_15px">
                <van-button class="button_" type="primary" style="position: relative;"
                  color="linear-gradient(#FFFFFF, #FFFFFF)" @click="open('https://www.awabank.co.jp/policy/privacy/')">
                  <span class="btn_font">個人情報の利用目的</span>
                  <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/policy/antisocial/')"><span
                    class="btn_font">反社会的勢力でないことの表明・確約</span>
                      <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>
            </el-row>

            <el-row class="margin_top_down margin_top_50">
              <el-col>
                <el-checkbox label="11" class='checkbox_wi_mar' >
                  <div class="font_16 check_tittle" >以下の「外国政府における重要な公的地位にある者とは」を確認し、これらの公人に該当しないことに同意する。</div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/kojin/aimo/peps/')"><span
                    class="btn_font">外国政府における重要な公的地位にある者とは</span>
                    <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>
            </el-row>

            <el-row class="margin_top_down margin_top_50">
              <el-col>
                <el-checkbox label="12" class='checkbox_wi_mar' >
                  <div class="font_16 check_tittle" >以下の各種規定を閲覧・確認し、同意のうえで、「普通預金口座の開設」、「あわぎん個人向けインターネット・モバイルバンキング」、「ａｉ－ｍｏ通帳」および「あわぎんＷｅｂ照会サービス（Ｗｅｂで残高照会ができるサービス）」を申込む。																			
                  </div>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-row>
           <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)" @click="open(documentUrl07)">
                  <span class="btn_font">あわぎんWeb口座開設利用規定</span>
                  <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)" @click="open(documentUrl08)">
                  <span class="btn_font">あわぎんWeb口座開設に係る特約</span>
                  <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/assets/kitei_futsuyokin.pdf')"><span
                    class="btn_font">普通預金規定</span>
                    <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/assets/tokuyaku_aimo_tsucho.pdf')"><span
                    class="btn_font">あわぎんai-mo通帳特約</span>
                    <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>



              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)" @click="open('https://www.awabank.co.jp/assets/kitei_ic_cashcard.pdf')">
                  <span class="btn_font">ICキャッシュカード規定</span>
                  <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/assets/kitei_payeasy.pdf')"><span
                    class="btn_font">ペイジー口座振替受付サービス規定</span>
                    <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>

              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/assets/inbankitei.pdf')"><span
                    class="btn_font">あわぎん個人向けインターネット・モバイルバンキング利用規定</span>
                    <span class="btn_w_p" >PDF</span>
                </van-button>
              </el-col>

            <!-- <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/kojin/aimo/service/')"><span
                    class="btn_font">あわぎん個人向けインターネット・モバイルバンキングのサービスのご案内</span>
                    <span class="btn_w_p" >PDF</span>
                </van-button>
              </el-col> -->
              <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/assets/kitei_web_syokai.pdf')">
                  <!-- todo 缺 url -->
                  <span class="btn_font">あわぎんＷｅｂ照会サービス利用規定</span>
                      <span class="btn_w" >外部リンク</span>
                </van-button>
              </el-col>
              
            </el-row>
              <el-row class="margin_top_down" style="font-size: 14px;
    margin-bottom: 16px;
    color: #01216b !important;
    font-weight: bolder;text-indent: 15px;">
              <el-col>
                各サービスの詳細は以下を参照
              </el-col>
            </el-row>
             <el-row>
               <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/kojin/aimo/service/')">
                  <span class="btn_font">あわぎん個人向けインターネット・モバイルバンキング</span>
       
                </van-button>
              </el-col>

                 <el-col :xs="24" :sm="12" style="display: flex;align-items: center;justify-content: center;margin-bottom: 16px;">
                <van-button class="button_" type="primary" color="linear-gradient(#FFFFFF, #FFFFFF)"
                  @click="open('https://www.awabank.co.jp/kojin/benri/web_syoukai')">
                  <span class="btn_font">あわぎんＷｅｂ照会サービス</span>
     
                </van-button>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-checkbox-group>
   
    
    <el-row style="height: 90px;margin-bottom: 20px;">
      <el-col :xs="24" :sm="24" class="flex_center">

        <van-button class="flex_center button_All  position_R" type="primary"  @click="nextPage()">
          <span>同意して始める</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapMutations, mapGetters } from "vuex";
  import { isEmpty, validMailAddress } from "@/utils/validate.js";
  import { MESSAGE, showMessage, popMessageFromApi, ErrMessage } from "@/utils/message.js";
  import SetDom from "@/utils/setDomErr.js";
  import { startLoading, endLoading } from '@/utils/loading'
  import { AGREE_INIT_POST, GET_DOCUMENTS,UPT_AGREEN_AT } from '@/api/account/api.js'
  import myMixin from '../mixin.js';
  export default {
    data() {
      return {
        email: "",
        DomList: [],
        checkList: [],
        seq_no: '',
        url: '',
        documentUrl07:'',
        documentUrl08:''
      };
    },
    computed: {
      ...mapGetters('user', ['getSeqNo',])
    },
     mixins: [myMixin],
    created(){
      },
    mounted() {
      if(!this.$store.state.page.isPc){ 
        
        this.url = this.$route.fullPath
        if (this.$route.query.hasOwnProperty('seq_no')) {
        if (!isEmpty(this.$route.query.seq_no)) {
          this.seq_no = decodeURIComponent(this.$route.query.seq_no)
        }
      }
      this.setSeq()
      }
     
    },
    components: {},
    methods: {
      setSeq() {


        this.setSeqNo(this.seq_no)

        this.InitAgree()
      },
      ...mapMutations({  setSeqNo: "user/setSeqNo" }),
      open(url) {
        window.open(url, '_blank')
      },
      nextPage() {
        try {
           if (this.checkList.length != 6) {
          showMessage(MESSAGE.MSGTypeError, MESSAGE.MsgErrCheck017);
          return
        }
      let data={
        seq_no:this.getSeqNo
      }
      startLoading()
      UPT_AGREEN_AT(data).then((res)=>{
        popMessageFromApi(res)
        endLoading()
        if(res.success){
          this.toPage()
        }
      }).catch((error)=>{
         endLoading()

      })
        } catch (error) {

        }
      
      },
      InitAgree() {
        let params = {
          "seq_no": this.getSeqNo
        }
        startLoading()
        AGREE_INIT_POST(params).then((res) => {
          // popMessageFromApi(res)
          if (!res.success) {
            this.openMsg(res)
            
          }else{
          this.GetDocument()
          }
          
          endLoading()
        }).catch((err) => {
          endLoading()


        })
      },
      openMsg(res) {
        ErrMessage(res, () => { this.$router.push({ name: "registerMail", params: {}, }) });
      },
      GetDocument() {
        let data = {
          "seq_no": this.getSeqNo
        }
        GET_DOCUMENTS(data).then((res) => {
          popMessageFromApi(res)
          if (res.success) {
                let documents = res.data.documents;
              for(let document of documents){
                if(document.document_type == '07'){
                  this.documentUrl07 = document.reference_url
                }else  if(document.document_type == '08'){
                  this.documentUrl08 = document.reference_url
                }
                
              }
          }
          endLoading()
        }).catch((err) => {
          endLoading()


        })
      },
      toPage() {
        this.$router.push({
          name: "explanation",
          params: {},
        });
      },
    },
  };
</script>

<style scoped>
  /* /deep/.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color: #409EFF !important;
  background-color: #409EFF !important;
} */
/deep/.el-checkbox__inner:hover {
  border-color: #01216b !important;
}
/deep/.el-checkbox__inner {
  border-color: #01216b !important;
}
.top_waring {
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content:flex-start;
  margin: 15px 0;
  font-size: 14px;
}
.button_02{
  width: 210px;
  border-radius: 5px !important;
  height: 35px !important;
}
 .check_tittle{
  width:100%;
  font-weight: bold;

 }
.margin_top_down{
  /* margin: 20px 0 10px 0; */
}
.checkbox_wi_mar{
  width: 100%;
  margin-bottom: 16px;
}
.margin_top_50{
  margin-top: 50px;
}
  .btn_w {
    display: none !important;
    color: rgb(255, 255, 255);
    font-size: 10px;
    position: absolute;
    background-color: #EF7700;
    top: 0;
    right: 0;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
  }
  .btn_w_p{
    display: none !important;
    color: rgb(255, 255, 255);
    font-size: 10px;
    position: absolute;
    background-color: #ff1109;
    top: 0;
    right: 0;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
  }
  .button_ {
    min-height: 40px;
    padding: 15px 5px;
    height: 58px !important;
    position: relative;
     border: 1px solid #F2F2F2 !important;
     border-radius: 0 !important;

  }

  .btn_font {
    color: #007BF5;
    font-weight: bold;
    border-bottom: 1px solid #007BF5;
    font-size: 16px;
    font-weight: bolder;
  }

  @media screen and (max-width: 767px) {
    .btn_font{
      font-size: 14px !important;
    }
    .font_16 {
    font-size: 14px !important;
  }
    /* .backcolor{
    margin: 10px 0;
  } */
    .redio_center {
      display: flex;
      justify-content: center;
    }

    .date_input_e {
      display: none;
    }

    .button_ {
      width: 100%;
    }
  .m_b_15px{
    margin-bottom:15px
  }
  }

  @media screen and (min-width: 768px) {
    /* .backcolor{
    margin: 20px 0;
  } */
    .date_input_a {
      display: none;
    }

    .button_ {
      width: 90%;
     
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

  .font_16 {
    font-size: 14px;
  }

  .padding_l_20 {
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .backcolor{
    background-color: #FAFAFA;
    border-radius: 5px;
  }
  .el-checkbox{
    color: #01216b !important;
  }
</style>