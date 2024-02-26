(function(window) {
  // elementui的NavMenu在折叠之后,鼠标滑过menu时会出力下面js错误：
  // Error in v-on handler: "TypeError: このオブジェクトではサポートされていない操作です。"
  // 原因在于element-ui的submenu代码中多处使用了new MouseEvent('mouseenter')，但是ie中不支持该种操作
  // 所以给widows添加MouseEvent方法
  // Polyfills DOM4 MouseEvent
  var MouseEvent = function(eventType, params) {
    params = params || { bubbles: false, cancelable: false }
    var mouseEvent = document.createEvent('MouseEvent')
    mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    return mouseEvent
  }
  MouseEvent.prototype = Event.prototype
  window.MouseEvent = MouseEvent
}(window))
