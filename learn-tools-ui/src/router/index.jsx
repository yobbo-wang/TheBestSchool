/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

import Header from '../component/common/header'
import Body from '../component/main/body';
import Footer from '../component/common/footer';
import {getToken} from "../api/environment";
import PrivateRouter from './PrivateRouter';

const Login = asyncComponent(() => import('../component/common/Login'));
const NotFound = asyncComponent(() => import('../component/common/NotFound'));
const Courseware = asyncComponent(() => import('../component/courseware/index'));
const Upcourseware = asyncComponent(() => import('../component/upcourseware/index'));
const Menu = asyncComponent(() => import('../component/system/menu/index'));
const User = asyncComponent(() => import('../component/system/user/index'));
const Role = asyncComponent(() => import('../component/system/role/index'));

export default () => {
    const authorization =  localStorage.getItem("auth"); // token
    const expiryDate = localStorage.getItem("expiryDate");
    // TODO 计算有效时间
    if(!authorization) {
        return (
            <article>
                <HashRouter>
                    <div>
                        <Route path={"/login"} component={Login}/>
                        <Route component={NotFound}/>
                    </div>
                </HashRouter>
            </article>
        )
    }

    return(
        <div className={"main"}>
            <HashRouter>
                <div>
                    <Route component={Header}/>
                    <div className={"body"}>
                        <Switch>
                            <Route path={"/"} exact component={Body} />
                            <Route path={"/courseware"} children={() => (
                                <Switch>
                                    <Route exact path={"/courseware"} component={Courseware}/>
                                    <Route component={NotFound} />
                                </Switch>
                            )} />
                            <Route path={"/upcourseware"} children={() => (
                                <Switch>
                                    <Route exact path={"/upcourseware"} component={Upcourseware}/>
                                    <Route component={NotFound} />
                                </Switch>
                            )} />
                            <Route path={"/menu"} children={() => (
                                <Switch>
                                    <Route exact path={"/menu"} component={Menu}/>
                                    <Route component={NotFound} />
                                </Switch>
                            )} />
                            <Route path={"/user"} children={() => (
                                <Switch>
                                    <Route exact path={"/user"} component={User}/>
                                    <Route component={NotFound} />
                                </Switch>
                            )} />
                            <Route path={"/role"} children={() => (
                                <Switch>
                                    <Route exact path={"/role"} component={Role}/>
                                    <Route component={NotFound} />
                                </Switch>
                            )} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        </div>
    )
}