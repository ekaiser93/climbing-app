// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes.js'
import Navbar from './components/utilComponents/Navbar.vue'
import SampleComponent from './components/utilComponents/SampleComponent.vue'

Vue.config.productionTip = false

// register global components here
Vue.component('sample-component', SampleComponent)
Vue.component('Navbar', Navbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
