import $ from 'jquery'
import Vue from 'vue'; //引入vue
//必须实例化 Vue

const utils = {
    
    setErr(massage, elementId) {
        let Object = $('#' + elementId)
        if (Object !== null) {
            Object.empty()
            Object.append(`${massage}`)
        }
    },
    clearErr(elementId) {
        let Object = $('#' + elementId)
        if (Object !== null) {
            Object.empty()
        }
    },
    clearErrs(elementIds) {
        for (let ele of elementIds) {
            let Object = $('#' + ele)
            if (Object !== null) {
                Object.empty()
            }
        }
    },
    changeBackgroundColor(waitForDelBackground, elementId) {
        for (let item of waitForDelBackground) {
            this.deleteBackgroundColor(item)
        }
        waitForDelBackground = []
        let Object = document.getElementById(elementId)
        if (Object != null) {
            Object.style.backgroundColor = "#ffe7e7";
        }
        waitForDelBackground.push(elementId)
        return waitForDelBackground
    },

    changeBackgroundOnlyColor(waitForDelBackground, elementId) {

        waitForDelBackground = []
        let Object = document.getElementById(elementId)
        if (Object != null) {
            Object.style.backgroundColor = "#ffe7e7";
        }
        waitForDelBackground.push(elementId)
        return waitForDelBackground
    },
    changeBackgroundColor03: function(waitForDelBackground, elementId) {
        let Object = document.getElementById(elementId)
        if (Object != null) {
            Object.style.backgroundColor = "#ffe7e7";
        }
        waitForDelBackground.push(elementId)
        return waitForDelBackground
    },

    deleteBackgroundColor(elementId) {
        let Object = document.getElementById(elementId)
        if (Object != null) {
            Object.style.backgroundColor = "#fff";
        }
    },
    deleteAllBackgroundColor(waitForDelBackground) {
        for (let item of waitForDelBackground) {
            this.deleteBackgroundColor(item)
        }
    },
    scallto(el){
        let vm = new Vue();
        let searchText = el
          let height = this.offsetTop(searchText)
          window.scrollTo(0, height);
      },
      offsetTop(elements) {
        let h1 = document.body.clientHeight;
        var top = elements.$el.offsetTop;
        return top - h1;
      }

}
export default utils;