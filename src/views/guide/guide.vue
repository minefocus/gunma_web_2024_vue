<template>
  <div style="width: 100%; height: calc(100% - 50px - 29px);" class="flex_c">

<div class="top_div" style="font-size:14px">
       <el-row style="width: 100%;">
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
        <img style="width:40px" class="rending_img " src="@/assets/img/icon.png" alt="">&nbsp;&nbsp;開設口座案内
        </div>
      </el-col>
    </el-row>
   
     
    <div class="back_" style="width: 100%;background-color: #f7f7f7;padding: 10px;">
    <div class="line">
      口座開設のお手続きが完了しました。<br>
      開設された口座情報は次の通りです。<br>
      ただし、キャッシュカードを受け取りになるまでは口座をご利用にならないでください。<br>
      （カードをお受け取りいただけなかった場合、当行にてカードを廃棄し、口座開設を取り消しさせていただきますのでご注意ください）
    </div>
 

    </div>
  <div style="width:100%;margin-top: 15px;" class="back_img_">

      <el-row class="flex_item_center border_ margin_1 mobile_margin back_all ">
        <el-col :xs="24" :sm="6" class="border_r">
          <div class="flex_center tittle_out">
            <span class="flex_title font_w" style="font-size: 16px;">支店コード
              <!-- <span class="flex_center border_red_around" style="font-weight: normal">必須</span> -->
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
                      <span style="font-size: 16px;">{{store_number}}</span>
                    </div>
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
            <span class="flex_title font_w" style="font-size: 16px;">口座番号
              <!-- <span class="flex_center border_red_around" style="font-weight: normal">必須</span> -->
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
                      <span  style="font-size: 16px;">{{account_number}} </span>
                    </div>
                  </el-col>
                
                </el-row>
              </el-col>
           
            </el-row>
          </div>
        </el-col>
      </el-row>
      <!--------------------------------------------------------------------------->
     

    </div>
</div>

 

  </div>
</template>

<script>
import { GET_ACCOUNT } from "@/api/account/api.js";
import { startLoading, endLoading } from "@/utils/loading";
import {mapGetters,mapMutations}from 'vuex'
import { MESSAGE, popMessageFromApi } from "@/utils/message.js";
    export default {
        data(){
            return {
                  store_number:"",
                  account_number:""
            }
        },
        computed:{
         ...mapGetters("user", ["getSeqNo","getApplication"]),
        },
        mounted(){
            this.init()
        },
        methods:{

          init(){
            try {
                let param ={
                  seq_no:this.getSeqNo
                }
                startLoading()
                GET_ACCOUNT(param).then((res)=>{
                    popMessageFromApi(res)
                    endLoading()
                    if(res.success){
                      this.store_number = res.data.store_number
                      this.account_number = res.data.account_number
                    }
                      
                }).catch((error)=>{

                  endLoading()
                })

            } catch (error) {

                  endLoading()
            }
          }
   
        }

    }
</script>

<style lang="scss" scoped>
    .line{
            width: 100%;
            line-height: 25px;
    }
</style>