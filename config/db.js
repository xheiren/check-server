const mongoose=require("mongoose");

const config=require("./index");
const log4js=require("../utils/log4j");

//连接数据库
mongoose.connect(config.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//监听数据库是否连接成功
const db =mongoose.connection;
db.on("error",()=>{
    log4js.error("数据连接失败");
});
db.on("open",()=>{
    log4js.info("数据库连接成功");
});