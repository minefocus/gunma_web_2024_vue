import router from './router'


// import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { asyncRoutes } from '@/router'



const whiteList = ['/login'] // no redirect whitelist

// リフレッシュ状態フラグ
let refreshFlag = true
let sendFlag = false
window.onpopstate = () => { // 历史条目 更改时 操作
    const path = location.href.split('#')
    history.pushState(null, null, path[0] + '#' + path[1])
    history.forward() // 定位到下一个条目
        // window.history.pushState(null, null, document.URL);
}

router.beforeEach(async(to, from, next) => {
    
    const path = location.href.split('#')
    history.pushState(null, null, path[0] + '#' + to.fullPath)
    if (refreshFlag) {
        refreshFlag = false
        next(to)
        history.back()
    } else {
        if (refreshFlag) {
            refreshFlag = false
            history.back()
        }
    }
    next()
})



router.afterEach((to,from) => {
    setTimeout(()=>{
        if(to.path=='/authentication'|| to.path=='/guide' || to.path=='/error_page'){ 
            document.title = '開設口座案内'
        }else if(to.path=='/notice'){
            document.title = '郵送されるキャッシュカード等のお受取りに関するご注意事項'
        } else{
            document.title = '口座開設申込'
        }
    },10)
   
    // let dom =document.getElementsByClassName('body_')
    // if(document.getElementsByClassName('body_').length!=0){
    //     document.getElementsByClassName('body_')[0].scrollTo(0, 0)
    // }
    

})