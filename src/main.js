import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import VueResource from 'vue-resource'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
