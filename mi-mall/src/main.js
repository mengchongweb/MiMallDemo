import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {Swiper, SwiperSlider} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default{
  components: {Swiper, SwiperSlider}
}
