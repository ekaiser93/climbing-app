// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router/routes.js'
import Navbar from './components/utilComponents/Navbar.vue'
import SampleChart from './components/utilComponents/SampleChart.vue'
import VueCharts from 'vue-chartjs'
import planetChartData from './chart-data.js'

Vue.use(VueCharts)

Vue.config.productionTip = false

// register global components here
Vue.component('planetChartData', planetChartData)
Vue.component('Navbar', Navbar)
Vue.component('SampleChart', SampleChart)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
