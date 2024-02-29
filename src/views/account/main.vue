<template>
  <div class="body_">
    <div class="inner_border">
      <div class="tittle flex_center_start_02 mar_top logo_height" >
        <img class="logo"   src="@/assets/logo@3x.png">
        <div class="tittle_font" style="display:flex;padding-left: 15px;">金融機関コード: 0128</div>
      </div>
      <el-divider></el-divider>
      <!-- <component :is="currentTabComponent"></component> -->
      <router-view />
    </div>
  </div>
</template>
<script>
import { Agent } from 'http';
import { mapGetters, mapMutations } from 'vuex';
export default {

  data() {
    return {
      textarea: '',
      f_value: '',
      value1: '',
      currentTabComponent: 'Fist',
      active: 2

    }
  },
  components: {

  },
  watch: {

  },
  computed: {
    ...mapGetters(['pagenum'])
  },
  methods: {

  
  }
}
</script>

<style scoped>
/deep/ .el-divider--horizontal{
  margin: 14px 0;
}
@media screen and (max-width: 767px) {
  .logo_height{
    height: 35px;
  }
}
@media screen and (min-width: 768px) {
  .logo_height{
   height: 50px;
  }
}
</style>
