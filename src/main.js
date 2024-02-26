// 兼容ie
import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import * as Allfilters from '@/filter/index'
import '@/utils/mouse-event'

import { Locale } from 'vant';
import '@/permission'
// 引入英文语言包
import jaJP from 'vant/es/locale/lang/ja-JP';
import jquery from "jquery";
Vue.prototype.$ = jquery;
Locale.use('ja-JP', jaJP);
Vue.use(Vant);
Vue.use(babelPolyfill)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.filter('moneyFormat', money => {
    if (!money) {
        return ''
    }
    return String(money).replace(/(?=(\B)(\d{3})+$)/g, ',')
})
Object.keys(Allfilters.filters).forEach(key => {
    Vue.filter(key, Allfilters.filters[key])
})
const IE11RouterFix = {
    methods: {
        hashChangeHandler: function() { this.$router.push(window.location.hash.substring(1, window.location.hash.length)) },
        isIE11: function() { return !!window.MSInputMethodContext && !!document.documentMode }
    },
    mounted: function() { if (this.isIE11()) { window.addEventListener('hashchange', this.hashChangeHandler) } },
    destroyed: function() { if (this.isIE11()) { window.removeEventListener('hashchange', this.hashChangeHandler) } }
}
new Vue({
    el: '#app',
    router,
    store,
    mixins: [IE11RouterFix],
    render: h => h(App)
})