import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config'
// @ts-ignore
import VueHighcharts from 'vue3-highcharts'

const app = createApp(App)
  .use(VueHighcharts)
  .use(router)
  .use(PrimeVue)
  

app.mount("#app")


// https://smithalan92.github.io/vue3-highcharts/
// https://www.npmjs.com/package/vue3-highcharts
// https://www.vuescript.com/rendering-highcharts-js-charts/