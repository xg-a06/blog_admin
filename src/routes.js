
import Layout from './pages/layout';
import AritcleList from './pages/aritcle/list';
import AritcleDetail from './pages/aritcle/detail';
import TagList from './pages/tag';
import Login from './pages/login';

const RouteConfig = [
  {
    title: "登陆",
    path: "/login",
    key: 'Login',
    component: Login,
  },
  {
    title: "首页",
    path: "/",
    key: 'Layout',
    component: Layout,
    beforeEnter () {

      return true;
    },
    routes: [
      {
        title: "文章列表",
        path: "/aritcle/list",
        key: 'AritcleList',
        component: AritcleList,
      },
      {
        title: "文章详情",
        path: "/aritcle/detail",
        key: 'AritcleDetail',
        component: AritcleDetail,
      },
      {
        title: "标签管理",
        path: "/tag/list",
        key: 'TagList',
        component: TagList,
      },
    ]
  }
]

export default RouteConfig;
