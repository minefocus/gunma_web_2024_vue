<template>
  <div id="app" >
    <router-view />
  
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'App',

  mounted(){
    this._isMobile()


  },
  methods:{
    ...mapMutations({setPcStatus:'page/setPcStatus'}),
     _isMobile() {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	 
   if(flag){
    this.setPcStatus(false)

   }else{
     this.setPcStatus(true)

   }
}

  }
}
</script>
<style scoped>
[v-cloak]{
display:none;
}
</style>
