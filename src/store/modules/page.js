
const state = {
  errorMsg:'',
  isPc:true,
  key:'',
  pageNum:false
  }
  
  const mutations = {
    SET_ERROR_MESSAGE:(state,msg)=>{
      state.errorMsg = msg
    },
    setPcStatus:(state,boolean)=>{
      //true 为PC端 false 为 移动端
      state.isPc = boolean
    },
    setKey:(state,key)=>{
      //设置 Key
      state.key = key
    },
    setPageNum:(state,num)=>{
      //设置 Key
      state.pageNum = num
    }
  }
  
  const actions = {
    errorMessage({ commit }, error_message) {
      commit('SET_ERROR_MESSAGE', error_message)
    },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  