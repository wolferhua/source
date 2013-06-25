/*!
 * Functions 
 * http://jquery.com/
 *
 * Copyright 2013, hua wu 
 * 
 *
 * Date: 2013-6-25
 */
var func_timerCaches = {};
//**
//* 优化的缓存定时器
//* fun mixed 要执行的函数
//* time unint 间隔时间
function timerCache(fun,time){
    if(fun== null) return false;
    if(time==null){
        if( func_timerCaches[fun] ){
            clearTimeout(func_timerCaches[fun]);
        }
        func_timerCaches[fun] = false;
    }else{
        timerCache(fun);
        func_timerCaches[fun] = setTimeout(fun,time);
        return func_timerCaches[fun];
    }
}   