// 全屏幕loading动画制御效果
// 使用方法:
// import { startLoading, endLoading } from '@/utils/loading'   // 引入样式配置常量
// startLoading()      // 打开loading效果
// endLoading()        // 关闭loading效果

import { Loading } from 'element-ui'

let loading
export function startLoading() {
  loading = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, .7)',
    text: 'Loading'
  })
  let BOX = document.querySelector(".el-loading-mask");
BOX .style.zIndex = "999999";//固定一个最大值，是字符串

}

export function endLoading() {
  setTimeout(function() { loading.close() }, 1000);


  loading.close()
}
