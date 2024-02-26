<template>
  <div style="width: 100%; height: calc(100% - 50px - 29px)" class="position_B_R">
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
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_pc_06@3x.png" alt="">
        </div>
      </el-col>
    </el-row>
  
    <el-row style="">
      <el-col :xs="24" :sm="0">
        <div style="width:100%;height:100%;overflow: hidden;display:flex;justify-content: center;">
          <img style="width: 100%;height:100%" class="rending_img" src="@/assets/steps/step_06@3x.png" alt="">
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="flex_center" style="width: 100%;">
        <div class="" style="line-height: 25px;margin: 15px 0;background-color: #f7f7f7;padding: 25px;font-size:14px;width: 100%;">
          お申込みありがとうございました。<br> <br> 
            受付番号：{{custome_id}}<br><br> 
            ご入力いただいたメールアドレスに、受付確認のメールを送信いたしましたので、ご確認ください。<br>
            なお、当行の総合的な判断により、口座開設をお断りする場合がございます。<br><br>
            口座開設の手続き完了後、「キャッシュカード」「インターネットバンキングご利用カード」（既にインターネットバンキングのご契約がある場合は、キャッシュカードのみ）を<span style="color:red;border-bottom: 1px red solid;">それぞれ個別に簡易書留郵便（転送不要扱）にて</span>郵送いたします。
            <span style="color:red;border-bottom: 1px red solid;">なお、各カードは1週間から10日程度でお届けしますが、郵便の事情により多少前後することがありますのでご了承ください。</span><br><br>
            郵便物をお受取りいただけなかった場合、お申込みを無効とし、口座開設を取消しさせていただきます。あらかじめご了承ください。<br>

        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import myMixin from '../mixin.js';
import {mapMutations} from 'vuex';
export default {
  data() {
    return {
      email:'',
      DomList:[],
      custome_id:''
    }
  },
  mixins:[myMixin],
  created() {
  },
  mounted(){
    if(this.$route.params.hasOwnProperty("custome_id")){
      this.custome_id=this.$route.params.custome_id
      }
      this.initial()
  },
  components: {},
  methods: {
    ...mapMutations({ initial: "user/initial" })
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
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
  .date_input_a {
    display: none;
  }
}
</style>
