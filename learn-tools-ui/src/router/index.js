/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
 *  每增加一个路由需要去数据维护url，和组件，以便于做权限控制
 */
import React from 'react';
import { Router, Route, Redirect, hashHistory,IndexRoute,useRouterHistory } from 'react-router';
import asyncComponent from '../utils/asyncComponent';
import PrivateRouter from './PrivateRouter';

import Index from '../app/main/Index';
const Login = asyncComponent(() => import('../app/component/Login'));
const NotFound = asyncComponent(() => import('../app/component/NotFound'));
const Courseware = asyncComponent(() => import('../app/courseware/index'));
const Upcourseware = asyncComponent(() => import('../app/Upcourseware/index'));
const Menu = asyncComponent(() => import('../app/sys/menu/index'));
const User = asyncComponent(() => import('../app/sys/user/index'));
const Role = asyncComponent(() => import('../app/sys/role/index'));

const authS = [
    {path: "/courseware", component : "Courseware"},
    {path: "/upcourseware", component : "Upcourseware"},
    {path: "/menu", component : "Menu"},
    {path: "/user", component : "User"},
    {path: "/role", component : "Role"},
];

export default () => (
    <Router history={hashHistory} >
        <PrivateRouter path={"/"} component={Index}>
            <IndexRoute component={Index} />
        {
            authS.map((item, i) => {
                return <PrivateRouter path={item.path} key={i} component={eval(item.component)} />
            })
        }
        </PrivateRouter>
        <Route path={"/404"} component={NotFound} />
        <Route path={"/login"} component={Login} />
        <Route component={NotFound} />
        <Redirect to="/" />
    </Router>
)