
const login=require('./static/data/login.json');

module.exports={
  baseUrl:"/",
  outputDir:"dist",
  assetsDir:"assets",//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave:false,//是否开启eslint保存检测，有效值：true||false||"error"
  devServer:{
      open:true,
      host:'localhost',
      port:8080,
      https:false,
      hotOnly:false,
      proxy: {
          '/api': {
            target: 'http://localhost:8080/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
            '^/api': ''
             }
          }
        },
      before(app){
        app.get('/api/login', function(req, res) {
          res.json(login);
        });
      }
    }
}