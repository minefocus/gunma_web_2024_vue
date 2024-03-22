import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import LogUtil from '@/utils/log-util'
import { MESSAGE ,popMessageFromApi} from '@/utils/message'
// import { getToken } from '@/utils/auth'

// 创建 axios 对象
const service = axios.create({
    // 设置 请求 头
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // baseURL: ' https://mock.tools.minefocus.jp/mock/5e9d3a3f0ae814576f4626f8', // url = base url + request url  目前使用的easymock接口地址
    //  baseURL: ' https://mock.tools.minefocus.jp/mock/5e9d3a3f0ae814576f4626f8',
    //moke path
    // baseURL: 'http://192.168.103.124:7300/mock/5efab45f3148910d640acf5c/', // url = base url + request url
    // baseURL: 'http://localhost:8080/iyobank/iyoapp/admin/',
    // baseURL: 'http://3.112.7.228:8088/iyo/cbapp/admin/',
    // baseURL: 'http://ingress4-919eeb5a1600880c.elb.ap-northeast-1.amazonaws.com/iyo/cbapp/admin/', // url = base url + request url    // /iyo/cbapp
    // baseURL: 'http://vpn-test-manage.tandiic.co.jp/iyo/cbapp/admin/', // url = base url + request url    // /iyo/cbapp
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 240000 // request timeout
})

// requst 拦截器
service.interceptors.request.use(
    config => {
        //判断 token 是否超时
        // if (store.getters.token) {
        //     //将token 塞入 Authorization 请求头
        //     config.headers['Authorization'] = 'Bearer ' + store.getters.token
        // }
        return config
    },
    error => {
        // do something with request error
        return Promise.reject(error)
    }
)

// response  拦截器
service.interceptors.response.use(

    response => {
        // jwt 30分钟时效  moke数据时需注释掉X-Authorization-Token
        if (typeof response.headers['x-authorization-token'] === 'undefined') {
          // 查询 user的stor 的 参数 S0010_AUTH_JWT  为空时  token 过期
        //   store.dispatch('user/pushToken', '')
        } else {
         store.dispatch('user/pushToken', decodeURIComponent(response.headers['x-authorization-token']))
        }

        try {
            // popMessageFromApi(response.data)
            // 如果是以下 url  返回值 respose 不做处理 直接返回
            // if (response.config.url === response.config.baseURL + '/' + API_PATH.S0240_DOWNLOAD_FILE_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0100_DOWNLOAD_ACCOUNT_APP_PDF_FILE_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0100_DOWNLOAD_ACCOUNT_APP_LIST_FILE_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0101_DOWNLOAD_ACCOUNT_APP_PDF_FILE_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0101_DOWNLOAD_ACCOUNT_APP_LIST_FILE_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0170_DOWNLOAD_NOTICES_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0300_DOWNLOAD_OUTPUT_INFO_URL ||
            //   response.config.url === response.config.baseURL + '/' + API_PATH.S0100_ACCOUNT_APP_LIST_REPORT_URL) {
            //   return response
            // }
            // 其他 url 做处理 返回 data字段的数据
            return response.data
        } catch (err) {
            LogUtil.info('axios utils/request  service.interceptors.response', err)
        }

    },
    error => {

        try {
            store.dispatch('page/errorMessage', MESSAGE.errorMsg)
            if (typeof error.response === undefined) {
                store.dispatch('page/errorMessage', error.message)
                if(store.state.page.pageNum){
                    router.push('/error_page')
                }else{
                    // router.push('/account_error_page')
                }
                
            } else {
                // error.response.data.message.messageId
                // let data = error.response.data;
                // let statusText = ''
                // if(data.hasOwnProperty('message')){
                //     if(data.message.description !=="" || data.message.description !==null || data.message.description!==undefined){
                //         statusText = data.message.description
                //     }else{
                //         statusText = MESSAGE.HttpErrorCode
                //     }
                    
                // }else{
                //     statusText = MESSAGE.HttpErrorCode
                // }
               
                // switch (error.response.status) {
                //     case 400:
                //         statusText = MESSAGE.HttpCode400
                //         break
                //     case 403:
                //         statusText = MESSAGE.HttpCode403
                //         break
                //     case 404:
                //         statusText = MESSAGE.HttpCode404
                //         break
                //     case 500:
                //         statusText = MESSAGE.HttpCode500
                //         break
                //     case 502:
                //         statusText = MESSAGE.HttpCode502
                //         break
                //     case 503:
                //         statusText = MESSAGE.HttpCode503
                //         break
                //     case 504:
                //         statusText = MESSAGE.HttpCode504
                //         break
                //     default:
                //         statusText = error.response.statusText + '(' + error.response.status + ')'
                //         break
                // }
                // // store.dispatch('page/errorMessage', statusText)
                // if(hasOwnProperty('seq_no')){
                    
                // }
                let code = ''
                if(error.response.data.message != undefined){
                    let msg = error.response.data.message
                    if(msg.hasOwnProperty('message_id')){
                        code = msg.message_id
                    }
                };
   
                    // 口座
                    if(code === 'SE00003'){
                        store.dispatch('page/errorMessage', MESSAGE.timeOut)
                        router.push('/account_error_page')
                    }else{
                        store.dispatch('page/errorMessage', MESSAGE.errorMsg)
                        router.push('/account_error_page')
                    }

                
            }
        } catch (err) {   
            LogUtil.info('axios utils/request  service.interceptors.error', err)
        }
        return Promise.reject(error)
    }
)

export default service