/**
 * @file routes
 * @author niminjie
 */

const Home = () => import('@/views/Home');

export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Home
    },
    {
        path: '/list',
        name: '列表',
        children: [
            {
                path: '/simple',
                name: '简单列表',
                component: Home,
                meta: {
                    hasPermission: user => true
                }
            },
            {
                path: '/filter',
                name: '筛选分页列表',
                component: Home
            }
        ]
    },
    {
        path: '/form',
        name: '表单',
        children: [
            {
                path: '/simple',
                name: '简单表单',
                component: Home
            },
            {
                path: '/syncvalidation',
                name: '同步验证表单',
                component: Home
            },
            {
                path: '/asyncvalidation',
                name: '异步验证表单',
                component: Home
            }
        ]
    },
];

// export default [
//     {
//         path: '/',
//         name: '首页',
//         component: Home,
//         meta: {
//             hasPermission: user => true
//         }
//     },
//     {
//         path: '/plan',
//         name: '计划',
//         component: Home,
//         meta: {
//             breadcrumbs: [
//                 {name: '首页'}
//             ],
//             hasPermission: user => true
//         }
//     },
//     {
//         path: '/plan/list',
//         name: '计划列表',
//         component: PlanList,
//         meta: {
//             breadcrumbs: [
//                 {name: '首页'},
//                 ({planName}) => planName
//             ],
//             hasPermission: user => true
//         }
//     }
// ];
