import Vue from 'vue'
import App from './App.vue'
import GlobalVaraible from './components/GlobalVaraible';

Vue.config.productionTip = false

const eventBus = (Vue.prototype.$eventBus = new Vue(
  GlobalVaraible
).$mount());
document.body.appendChild(eventBus.$el);

new Vue({
  render: h => h(App),
}).$mount('#app')
