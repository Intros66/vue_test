//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes: [{
            name: 'about',
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [{
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻',
                    },
                    beforeEnter: (to, from, next) => {
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) { // 判断是否需要鉴权
                            if (localStorage.getItem('school') === '尚') {
                                next()
                            } else {
                                alert('无权限')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [{
                        name: 'detail',
                        path: 'detail/:id/:title', //使用占位符声明params参数
                        component: Detail,
                        meta: {
                            isAuth: true,
                            title: '详情'
                        },
                        //props的第一种写法，值为对象，该对象中的所有key value都会以props形式传给Detail组件
                        // props: {a:1,b:'hello'}

                        //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props形式传给Detail组件
                        // props: true

                        //props的第三种写法，值为函数
                        props($route) {
                            return {
                                id: $route.params.id,
                                title: $route.params.title
                            }
                        }
                    }]
                }
            ]


        }
    ]
})

//全局前置路由守卫-----初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    if (to.meta.isAuth) { // 判断是否需要鉴权
        if (localStorage.getItem('school') === '尚') {
            next()
        } else {
            alert('无权限')
        }
    } else {
        next()
    }
}) */

//全局前置路由守卫-----初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    if(to.meta.title){
        document.title = to.meta.title
    }else {
        document.title = 'vue_test'
    }
})


export default router