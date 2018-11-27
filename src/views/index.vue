<template>
	<el-container>
	  <el-header>
	  	   <page-header/>
	  </el-header>
	  <el-container>
	    <el-aside width="200px">
	    	<page-aside/>
	    </el-aside>
	    <el-main>
	    	<router-view/>
	    </el-main>
	  </el-container>
	</el-container>
</template>
<script>

import pageHeader from "./header";
import pageAside from "./aside";
export default {
    components:{
       pageHeader,
       pageAside
		},
		data(){
			return {}
		},
     beforeRouteEnter :(to, from, next) => {
      next(vm => {})
     }
}
</script>



<style scoped>
   .el-container.is-vertical{
   	height: 100% !important;
   }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0 !important;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
  }
  


</style>