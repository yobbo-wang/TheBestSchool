'use strict';
import React from 'react';
import { Layout, Menu, Badge } from 'element-react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import {queryMenuByUID} from "../../store/sys/menu/action";

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

    componentDidMount() {
        // query menu bu current uid
        queryMenuByUID().then(menu => {
            this.setState({
                menu: menu,
                menuDefaultActive: menu[0].id
            });
        }).catch(e => {
        })
    }

    onSelectMenu(index){
        this.setState({ menuDefaultActive : index  });
    }

    onSelectSetting(index){
        this.setState({ onSelectSettingActive : index  });
    }

    render(){
        const _navigation_ = [{text: "数据统计"}];

        return(
             <div>
                 <Layout.Row gutter="20" className="header">
                     <Layout.Col span="5" className="header-col">
                         <h1>
                             <img src={require('../../resource/images/logo.svg')} />
                         </h1>
                     </Layout.Col>
                     <Layout.Col span="14" className="header-col">
                         <Menu defaultActive={this.state.menuDefaultActive} theme="dark" className="nav" mode="horizontal" onSelect={this.onSelectMenu.bind(this)}>
                             {
                                 this.state.menu.map((item) => {
                                     return(
                                         item.children.length == 0 ?
                                             <Menu.Item key={item.id} index={item.id} className="nav-customer" >
                                                 <Link to={{ pathname:item.url, state:[{text: item.text, url: item.url}]}} style={{textDecoration:'none',display:"block"}}>{item.text}</Link>
                                             </Menu.Item>
                                             :
                                             <Menu.SubMenu key={item.id} index={item.id} title={item.text}>
                                                 {
                                                     item.children.map((item_c) => {
                                                         return (
                                                             <Menu.Item key={item_c.id} index={item_c.id}>
                                                                 <Link to={{ pathname:item_c.url, state:[{text: item.text, url: item.url},{text: item_c.text}]}} style={{textDecoration:'none',display:"block"}}>{item_c.text}</Link>
                                                             </Menu.Item>
                                                         )
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
                 <Navigation _navigation_={_navigation_} />
                 <div className={"line"} />
             </div>
        )
    }
}

export default Header;
