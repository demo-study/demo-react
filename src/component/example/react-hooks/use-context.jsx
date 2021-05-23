/*
使用 useContext ，来获取父级组件传递过来的 context 值
这个当前值就是最近的父级组件 Provider 设置的 value 值
seContext 参数一般是由 createContext 方式引入 ,也可以父级上下文 context 传递 ( 参数为 context )。
useContext 可以代替 context.Consumer 来获取 Provider 中保存的 value 值
 */

import React, {useContext} from "react";
import {withRouter} from "react-router-dom";

const Context = React.createContext()

/* 用useContext方式 */
const DemoContext = ()=> {
    const value = useContext(Context)
    /* my name is alien */
    return <div> my name is { value.name }</div>
}

/* 用Context.Consumer 方式 */
const DemoContext1 = ()=>{
    return <Context.Consumer>
        {/*  my name is alien  */}
        { (value)=> <div> my name is { value.name }</div> }
    </Context.Consumer>
}

function UseContext(props) {
    return <div>
        <Context.Provider value={{ name:'alien' , age:18 }} >
            <DemoContext />
            <DemoContext1 />
        </Context.Provider>
    </div>
}

export default withRouter(UseContext)