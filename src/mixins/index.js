import Vue from 'vue';
Vue.mixin({
     methods:{
	    show:()=>{
			alert("show");
		},
		hide:()=>{
			alert("hide");
		}
	 }
})