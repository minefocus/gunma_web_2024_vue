
const getters = {
  token: state => state.user.token,
  pagenum: state => state.page.pageNum,
  error_message:state=>state.page.errorMsg
}
export default getters
