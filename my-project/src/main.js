// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' 
Vue.use(MintUI)
Vue.config.productionTip = false

// axios
import Axios from 'axios';
// 引入全局css样式
import golobe from '../static/css/golobe.css'



// 引入自己写的公共组件
import myul from './components/common/myul';
import myli from './components/common/myli';
import v_header from './components/common/v-header.vue';
import comment from './components/common/comment.vue';
import my_swiper from './components/common/my-swiper.vue'
Vue.component(myul.name,myul);
Vue.component(myli.name,myli);
Vue.component(v_header.name,v_header);
Vue.component(comment.name,comment);
Vue.component(my_swiper.name,my_swiper)
// 给Vue的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://www.sinya.online/api/'; 
// axios请求前拦截器
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  MintUI.Indicator.open({
    text: '玩儿命加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// axios请求后拦截器
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  MintUI.Indicator.close();
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});



/* eslint-disable no-new */
// 定义全局过滤器
import Moment from 'moment';
Moment.locale('zh-cn');
//  日期格式化
Vue.filter('commentsTime', function(time,str) {
  return Moment(time).format(str); 
});
// 相对时间
Vue.filter("formNow",function(time){
  return  Moment(time).fromNow();
})

Vue.filter("splicStr",function(val,num){
    // 如果当前字符串小于num,返回原值
    if (val.length <=num ) {
      return val;
    }
    // 如果当前字符串大于num,截取0-num-1位
    if (val.length >num) {
      return val.substr(0,num-1) + '...';
    }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

