const log4js=require("log4js");

//设置打印的级别
const levels={
    off:log4js.levels.OFF,
    trace:log4js.levels.TRACE,
    debug:log4js.levels.DEBUG,
    info:log4js.levels.INFO,
    warn:log4js.levels.WARN,
    error:log4js.levels.ERROR,
    fatal:log4js.levels.FATAL,
    all:log4js.levels.ALL
};

//log4js内部的配置
log4js.configure({

    //配置打印的名字和参数
    appenders:{

        //添加一个console的名字
        console:{type:"console"}
    },
    
    //把配置的参数挂载到对象上
    categories:{

        //默认的输出类型，必写
        default:{
            appenders:["console"],
            level:"debug"
        },
        error:{
            appenders:["console"],
            level:["error"]
        },
        info:{
            appenders:["console"],
            level:["info"]
        }
    }
});

exports.error=(content)=>{
    const logger=log4js.getLogger("error");
    logger.error(content);
};

exports.info=(content)=>{
    const logger=log4js.getLogger("info");
    logger.info(content);
};

exports.debug=(content)=>{
    const logger=log4js.getLogger();
    logger.error(content);
};

//优先级从高到低依次为:OFF FATAL ERROR WARN INFO DEBUG TRACE ALL

//ALL    最低等级的用于打开所有日志记录
//TRACE  很低的日志级别一般不会使用
//DEBUG  指出细粒度信息事件对调试应用程序是非常有帮助的 主要用于开发过程中打印一些运行

//只能打印比当前等级大的