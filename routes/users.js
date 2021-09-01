const router = require('koa-router')();
const User=require("./../models/userSchema");
const log4js=require("../utils/log4j");
const util=require("../utils/util");

router.prefix('/api/users');

router.post('/login', async function (ctx, next) {
  
  const {userName,userPwd} = ctx.request.body;
  try{
    let res=await User.findOne({
      userName,
      userPwd
    });
    if(res){
      ctx.body=util.success(res,"请求成功");
    }else{
      ctx.body=util.fail("**查询数据库失败**");
    }
  }catch(err){
    ctx.body=util.fail("**查询数据库失败**");
  };
  
});

module.exports = router;
