/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
 */
import React from 'react';
import {hashHistory, IndexRoute, Redirect, Route, Router} from 'react-router';
import asyncComponent from '../utils/asyncComponent';
import {checkToken} from './checkToken';

import Index from '../app/main/Index';

const Login = asyncComponent(() => import('../app/component/Login'));
const NotFound = asyncComponent(() => import('../app/component/NotFound'));
const Courseware = asyncComponent(() => import('../app/courseware/index'));
const Upcourseware = asyncComponent(() => import('../app/Upcourseware/index'));
const Menu = asyncComponent(() => import('../app/sys/menu/index'));
const User = asyncComponent(() => import('../app/sys/user/index'));
const Role = asyncComponent(() => import('../app/sys/role/index'));
const Options = asyncComponent(() => import('../app/sys/options/index'));

export default () => {
    return(
        <Router history={hashHistory} >
            <Route path={"/"} component={Index} onEnter={checkToken}>
                <IndexRoute component={Index} />
                <Route path={"/menu"} component={Menu} />
                <Route path={"/user"} component={User} />
                <Route path={"/role"} component={Role} />
                <Route path={"/options"} component={Options} />
                <Route path={"/courseware"} component={Courseware} />
                <Route path={"/upcourseware"} component={Upcourseware} />
                <Route path={"*"} component={NotFound} />
            </Route>
            <Route path={"/404"} component={NotFound} />
            <Route path={"/login"} component={Login} />
            <Route component={NotFound} />
            <Redirect to="/" />
        </Router>
    )
}