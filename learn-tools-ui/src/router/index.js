/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
 *  每增加一个路由需要去数据维护url，和组件，以便于做权限控制
 */
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import PrivateRouter from './PrivateRouter';

import Index from '../app/main/Index';
const Login = asyncComponent(() => import('../app/container/Login'));
const NotFound = asyncComponent(() => import('../app/container/NotFound'));
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
    <HashRouter>
        <Switch>
            <PrivateRouter path={"/"} exact component={Index}/>
            {
                authS.map((item, i) => {
                    return <PrivateRouter path={item.path} key={i} component={eval(item.component)} />
                })
            }
            <Route path={"/404"} component={NotFound} />
            <Route path={"/login"} component={Login} />
            <Route component={NotFound} />
            <Redirect to="/" />
        </Switch>
    </HashRouter>
)