/** Vueアプリの生成 */
function createApp(){
  new Vue({
    el: "#wrapper",
    data: {}
  })
}

/** 初期化 */
function initialize(){
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))