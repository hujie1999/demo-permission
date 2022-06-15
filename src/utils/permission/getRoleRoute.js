import { superAdminRoutesData } from '@/mock/routedata/superadmin'
import { admin01RoutesData } from '@/mock/routedata/admin01'
import { admin02RoutesData } from '@/mock/routedata/admin02'
import { user01RoutesData } from '@/mock/routedata/user01'


/**
 *  @param {string} username  
 * 根据登录者姓名获取对应路由信息
 */
export const getRoleRoute = (username) =>{
    let roleRoute = []
    switch (username) {
        case 'superadmin':
          roleRoute = superAdminRoutesData
          break;
        case 'admin01':
          roleRoute = admin01RoutesData
          break;
        case 'admin02':
          roleRoute = admin02RoutesData
          break;
        case 'user01':
          roleRoute = user01RoutesData
          break;
        default:
          break;
      }

      return roleRoute
}