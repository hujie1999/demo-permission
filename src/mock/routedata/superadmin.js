//模拟网络请求发回的super admin路由数据

export const superAdminRoutesData = {
    'meta':{
        'msg': '获取super admin菜单成功',
        'status':200
    },
    'code': 1000,
    'success': true,
    'routsData': [
        {
            name: 'users',
        },
        {
            name: 'students',
            rights: ['add','delete','update','search']
        },
        // {
        //     name: 'girls'
        // },
        // {
        //     name: 'boys'
        // },
        {
            name: 'teachers',
            rights: ['add','delete','update','search']
        },
        {
            name: 'roles',
            rights: ['add','delete','update','search']
        },
        {
            name: 'goods',
        },
        {
            name: 'books',
            rights: ['add','delete','update','search']
        },
        {
            name: 'desks',
            rights: ['add','delete','update','search']
        }
    ]
}