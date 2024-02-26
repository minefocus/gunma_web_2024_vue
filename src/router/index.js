import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import errorPath from '../views/error.vue'
export const constantRoutes = [
        {
        path: '/error',
        name: 'error',
        component: errorPath,
        },
       {
        path: '/',
        redirect: '/registerMail',
        component: () =>import ('@/views/account/main.vue'),
        children: [
            {
                path: 'inputCustomer',
                name: 'inputCustomer',
                component: () =>import ('@/views/inputCustomer/inputCustomer.vue'),
            },
            {
                path: 'inputApplication',
                name: 'inputApplication',
                component: () =>import ('@/views/inputApplication/inputApplication.vue'),
            },
            {
                path: 'confirm',
                name: 'confirm',
                component: ()=>import ('@/views/confirm/confirm.vue')
            }, {
                path: 'confirm02',
                name: 'confirm02',
                component: ()=>import ('@/views/confirm02/confirm.vue') 
            },
            {
                path: 'registerMail',
                name: 'registerMail',
                component: ()=>import ('@/views/registerMail/registerMail.vue') 
            },
            {
                path: 'agree',
                name: 'agree',
                component:()=>import ('@/views/agree/agree.vue') 
            }, {
                path: 'advance',
                name: 'advance',
                component:()=>import ('@/views/advance/advance.vue') 
            },
            
            {
                path: 'explanation',
                name: 'explanation',
                component: ()=>import ('@/views/explanation/explanation.vue') 
            },  {
                path: 'finish',
                name: 'finish',
                component: ()=>import ('@/views/finish/finish.vue') 
            }, {
                path: 'Pcerror',
                name:'Pcerror',
                component: ()=>import ('@/views/PcError.vue') 
            },  {
                path: 'maileResult',
                name:'maileResult',
                component:()=>import ('@/views/maileResult.vue') 
            }, {
                path: 'authentication',
                name:'authentication',
                component: ()=>import ('@/views/authentication/authentication.vue')
            }, {
                path: 'guide',
                name:'guide',
                component: ()=>import ('@/views/guide/guide.vue')
            },{
                path: 'account_error_page',
                name:'account_error_page',
                component: ()=>import ('@/views/accountErrorPage.vue')
            },{
                path: 'error_page',
                name:'error_page',
                component: ()=>import ('@/views/errorPage.vue')
            }
            
        ]
    },{
        path: '/notice',//匹配未定义的路由
        name:'notice',
        component: ()=>import ('@/views/notice/notice.vue')
    },{
        path: '*',//匹配未定义的路由
        redirect: '/error'//重定向
    }

]



const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ x: 0, y: 0 }),
    // base: '/iyo/',
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default router