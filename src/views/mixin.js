
let mixin = {
    data() {
      return {
  
      }
    },
    created() {

      if(this.$store.state.page.isPc){

        this.$router.push({
            name: "Pcerror",
            params: {},
          });
      }
    
    },
    methods: {
     
    }
  }
  export default mixin;