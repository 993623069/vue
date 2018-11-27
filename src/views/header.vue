<template>
  <div>
      <el-tag >{{url}}</el-tag>
      <p style="position: absolute;font-size: 30px;color: black;
    z-index: 111;" v-change="" v-on:click="hide">{{  "1" | toString('没')}}</p>

      <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="false">
  
        <el-menu-item index="/">
                      {{ $t("header.sign") }}
                    </el-menu-item>
        <el-menu-item index="/" >
                      {{ $t("header.signOut") }}
                    </el-menu-item>
        <el-submenu index="3">
            <template slot="title">
                      {{ $t("header.language") }}
            </template>
            <el-menu-item index="zh">
                          中文</el-menu-item>
            <el-menu-item index="en">
                          English</el-menu-item>
        </el-submenu>
</el-menu>

  </div>
   
</template>
<script>


  export default {

    data() {
      return {
        activeIndex: '1',
        url:process.env.VUE_APP_URL,
        price:95,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if(keyPath.length>1){
           this.$i18n.locale=key;
        }
      }
    }
  }
</script>
<style>
  .el-menu-demo{
    float: right;
  }
  .el-menu-demo .el-menu-item{
    width: 150px;
  }
</style>