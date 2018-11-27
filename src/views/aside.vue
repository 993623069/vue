<template>
	<el-aside width="200px"      
	          style="background-color: rgb(238, 241, 246)"
	          >
    <el-menu :default-openeds="['1']"
             :router="true">
      <el-submenu index="1">
        <el-menu-item-group>
          <el-menu-item index="/table">table</el-menu-item>
          <el-menu-item index="/from">from</el-menu-item>
          <el-menu-item index="/cards">cards</el-menu-item>
          <el-menu-item index="/carousel">carousel</el-menu-item>
          <el-menu-item index="/collapse">collapse</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
  
      return {
       
      }
    }
  };
</script>