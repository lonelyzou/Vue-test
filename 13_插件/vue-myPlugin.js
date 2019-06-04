(function (w) {
    const MyPlugin ={ }
    MyPlugin.install =  function (Vue, options) {
      Vue.myGlobaMethod = function () {
          console.log('Vue的myGlobalMethod()')
      }

      Vue.directive('my-directive',function (el,binding) {
          el.textContent = 'my-directive ---' + binding.value
      })

        Vue.prototype.$myMethod = function () {
            console.log('vm的$myMethod()')
        }
   }
   w.MyPlugin = MyPlugin
})(window)