/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
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
const Menu = asyncComponent(() => import('../app/menu/index'));

export default () => (
    <HashRouter>
        <Switch>
            <PrivateRouter path={"/"} exact component={Index}/>
            <PrivateRouter path={"/courseware"} component={Courseware}/>
            <PrivateRouter path={"/upcourseware"} component={Upcourseware}/>
            <PrivateRouter path={"/menu"} component={Menu} />
            <Route path={"/404"} component={NotFound} />
            <Route path={"/login"} component={Login} />
            <Route component={NotFound} />
            <Redirect to="/" />
        </Switch>
    </HashRouter>
)