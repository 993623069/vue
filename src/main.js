import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import './plugins/element.js'
import './assets/common/reset.css';
import Axios from 'axios';
import filters from "./filters";
import directives from "./directives";
import mixins from "./mixins";
/**********axios全局配置************/
Vue.prototype.$axios=Axios;
/*Vue.prototype.HOST="api";*/
Axios.defaults.baseURL=process.env.VUE_APP_URL;
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers['XPS-Version'] = '1.0.0';
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
});

new Vue({
	 router,
	 i18n,
     render: h => h(App),
     created: function() {
     	    let  getRouterElement = (element) =>{
		            if(element.children){
		              let routerElement=[];
		                  element.children.forEach((el, index, array)=>{ 
		                      routerElement.push(getRouterElement(el)); 
		                  })
		               return {
		                       path:element.path,
		                       name:element.name,
		                       component:() => import("@/" + element.component),
		                       children:routerElement
		                      }
		            }else{
		               return {
		                       path:element.path,
		                       name:element.name,
		                       component:() => import("@/"+element.component)
		                    }
		              }
		          }
		          this.$axios.get("api/login")
			      .then((res)=>{
			          var routerElement=[];
			          res.data.forEach((element, index, array)=>{
			               routerElement.push(getRouterElement(element));
			          });
			          router.options.routes[0].children=routerElement;
			          router.addRoutes(router.options.routes);
			       }).then(function(err){
			          console.log(err)
			       })
    }
}).$mount('#app');



