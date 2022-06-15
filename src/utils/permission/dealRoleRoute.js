
import { allAsyncRoutes } from '@/router/index'
import { deepClone } from '../deepClone'
//根据登录人员路由信息处理对应动态路由
/**
 * 
 * @param {Array} roleRoute  登录人员路由信息
 */
export const execAsyncRoute = function(roleRoute){
    const roleR = deepClone(roleRoute)
    const asyncR = deepClone(allAsyncRoutes)

    let addR = []
    //角色路由名list
    const roleRNameList = roleR.map(v=>v.name)
    
    asyncR.forEach(element => {
        if(roleRNameList.includes(element.name)){
            //添加权限列表
            roleR.forEach(v=>{
                if(v.name == element.name&&v.rights){
                    // element.meta = {}
                    element.meta.rights = v.rights
                }
            })
            addR.push(element)
        }
    });
    //递归实现多级路由
    const loopAdd = (addR)=>{
        addR.forEach(ele=>{
            if(ele.children){
                let temp =[]
                ele.children.forEach(v=>{
                    //添加权限列表
                    roleR.forEach(k=>{
                        if(v.name == k.name&&k.rights){
                            // v.meta = {}
                            v.meta.rights = k.rights
                        }
                    })
                    roleRNameList.includes(v.name)?temp.push(v):''
                })
                ele.children = temp

                loopAdd(ele.children)
            }
            return
        })
    }

    loopAdd(addR)
    // console.log(addR);
    return addR
}