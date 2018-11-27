<template>
  <div>
    <div style="height: 300px;width:300px;border:1px solid black;float: left;">

     
          <router-link :to="{ name:'index'}">index</router-link><br/>
          <router-link :to="{ name:'manage'}">manage</router-link><br/>
          <router-link :to="{ name:'admin'}">admin</router-link><br/>
         
          
    </div>
    <div style="height: 300px;width: 400px;border:1px solid red;float: left;">
         <router-view></router-view>
    </div>
   <div id="table">
      <el-table
      :data="tableData"
      :fit='true'
      :highlight-current-row='true'
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
   </div>
      <div v-for=" (item,index) in items">
            <input type="text" name="" v-model="name">
            <ul>
              <li>{{index}}</li>
              <li>{{item}}</li>
              <li>{{name}}</li>
            </ul>
          </div>
  </div>
    
  </template>

  <script>
 import pageAside from "../views/aside";
    export default {
       components:{
           pageAside
       },
      data() {
        return {
             name:"",
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          items:[
            {key:1},
            {key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},
             {key:1},
            {key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},
             {key:1},
            {key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},{key:1},
            
          ]
        }
      },
      beforeRouteEnter :(to, from, next) =>{
            next(vm=>{
              
            })
        }
    }
  </script>
  <style scoped>
    #table > .el-table{
       padding: 40px !important;
    } 
    ul,input{
      width:200px;
      float: left;
    }
    ul li{
      float: left;

    }
  </style>