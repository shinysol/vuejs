import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
// Global component
Vue.component('app-server', Home);
new Vue({
  el: '#app',
  render: h => h(App),
})
