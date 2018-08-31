'use strict';
import React from 'react';
import { Layout, Menu, Badge } from 'element-react';
import { NavLink } from 'react-router-dom';

/**
 * TODO 实现动态菜单
 */
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menuDefaultActive : "1",
            onSelectSettingActive : "1"
        };
    }

    onSelectMenu(index){
        this.setState({ menuDefaultActive : index  });
    }

    onSelectSetting(index){
        this.setState({ onSelectSettingActive : index  });
    }

    render(){
        return(
            <Layout.Row gutter="20" className="header">
                <Layout.Col span="5" className="header-col">
                    <h1>
                        <img src={require('../../resource/images/logo.svg')} />
                    </h1>
                </Layout.Col>
                <Layout.Col span="14" className="header-col">
                    <Menu defaultActive={this.state.menuDefaultActive} theme="dark" className="nav" mode="horizontal" onSelect={this.onSelectMenu.bind(this)}>
                        <Menu.Item index="1" className="nav-customer" ><NavLink to={"/"} exact style={{textDecoration:'none',display:"block"}}>数据统计</NavLink></Menu.Item>
                        <Menu.SubMenu index="2" title="学习资料">
                            <Menu.Item index="2-1"><NavLink to={"/courseware"} exact style={{textDecoration:'none',display:"block"}}>精品课件</NavLink></Menu.Item>
                            <Menu.Item index="2-2">实验讲义</Menu.Item>
                            <Menu.Item index="2-3">精选视频</Menu.Item>
                            <Menu.Item index="2-4">网络精品课</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu index={"3"} title={"系统设置"} >
                            <Menu.Item index="3-1">授课教师</Menu.Item>
                            <Menu.Item index="3-2">院系维护</Menu.Item>
                            <Menu.Item index="2-1"><NavLink to={"/menu"} exact style={{textDecoration:'none',display:"block"}}>菜单管理</NavLink></Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
                <Layout.Col span="5" className = "header-col">
                    <Menu defaultActive={this.state.onSelectSettingActive} theme="dark" className="nav float-right" mode="horizontal" onSelect={this.onSelectSetting.bind(this)}>
                        <Menu.Item index="1" className="nav-customer">
                            <Badge isDot>
                                待办
                            </Badge>
                        </Menu.Item>
                        <Menu.Item index="2" className="nav-customer">
                            <Badge isDot>
                                消息
                            </Badge>
                        </Menu.Item>
                        <Menu.SubMenu index="3" title="张飞">
                            <Menu.Item index="3-1" style={{minWidth: '80px'}}>基本资料</Menu.Item>
                            <Menu.Item index="3-2" style={{minWidth: '80px'}}>修改密码</Menu.Item>
                            <Menu.Item index="3-3" style={{minWidth: '80px'}}>退出</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
            </Layout.Row>
        )
    }
}

export default Header;