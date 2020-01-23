import Vue from 'vue'
import App from '@/components/App'
import store from './store'
import './assets/tailwind.css'
import VueResource from 'vue-resource'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
