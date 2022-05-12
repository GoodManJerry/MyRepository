import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from '../router'
import store from '../store'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to,from,next) => {
  // store.commit('getToken')
  // const token = store.state.user.token
  const username = store.state.user.username
  const password = store.state.user.password
  if(!username&& !password && to.name !== 'login'){
    next({ name:'login'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
