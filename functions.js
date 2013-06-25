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
//* �Ż��Ļ��涨ʱ��
//* fun mixed Ҫִ�еĺ���
//* time unint ���ʱ��
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