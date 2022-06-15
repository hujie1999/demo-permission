//模拟网络请求发回的admin02路由数据

export const admin02RoutesData = {
    'meta':{
        'msg': '获取 admin02 菜单成功',
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
        }
    ]
}