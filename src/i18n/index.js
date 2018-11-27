import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import zh from './config/zh';
import en from './config/en';

const i18n = new VueI18n({
      //定义默认语言
	  locale: navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2), 
	  messages:{
	  	zh,en
	  }
});
export default i18n;