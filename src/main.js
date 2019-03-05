import Vue from 'vue'
import App from './App.vue'
import { Button, Cell, CellGroup, Checkbox, CheckboxGroup, Field, Icon, Dialog, Notify, Toast } from 'vant'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Notify)
Vue.use(Toast)
Toast.setDefaultOptions({
  duration: 1500
})

new Vue({
  render: h => h(App)
}).$mount('#app')
