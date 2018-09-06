'use strict';
import React from 'react';
import { Layout, Menu, Badge } from 'element-react';
import { NavLink } from 'react-router-dom';

/**
 * menu
 */
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            onSelectSettingActive : "1",
            menuDefaultActive: "",
            menu: [],
        };
    }

    componentDidMount(){
        let menu = [
            {id: "AAA1", text: "数据统计", url: "/", children: []},
            {id: "2AA", text: "学习资料", url: "", children:[
                    {id: "2aaa1", text: "精品课件", url: "/courseware", children: []},
                    {id: "2aa1aaa", text: "实验讲义", url: "", children: []},
                ]},
            {id: "aa3aaa", text: "系统设置", url: "", children:[
                    {id: "a2a22", text: "用户管理", url: "/user", children: []},
                    {id: "aaaa", text: "角色管理", url: "/role", children: []},
                    {id: "3aaaa2", text: "菜单管理", url: "/menu", children: []},
                ]},
        ];
        this.setState({
            menu: menu,
            menuDefaultActive: menu[0].id
        });
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
                        {
                            this.state.menu.map((item, index) => {
                                return(
                                    item.children.length == 0 ?
                                        <Menu.Item key={item.id} index={item.id} className="nav-customer" ><NavLink to={item.url} exact style={{textDecoration:'none',display:"block"}}>{item.text}</NavLink></Menu.Item>
                                        :
                                        <Menu.SubMenu key={item.id} index={item.id} title={item.text}>
                                            {
                                                item.children.map((item_c, index_c) => {
                                                    return <Menu.Item key={item_c.id} index={item_c.id}><NavLink to={item_c.url} exact style={{textDecoration:'none',display:"block"}}>{item_c.text}</NavLink></Menu.Item>
                                                })
                                            }
                                        </Menu.SubMenu>
                                )
                            })
                        }
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
