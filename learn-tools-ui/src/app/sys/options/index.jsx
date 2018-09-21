'use strict';
import React from 'react';
import {Tabs} from 'element-react';
import SystemOptions from './system/index';
import MsgTemplate from './msgtemplate/index';

/**
 * 配置系统相关组件
 * <p>
 *     包括：域名、系统相关参数、数据字典等
 */
class Index extends React.Component {
    render(){
        return(
            <Tabs type="border-card" activeName="1">
                <Tabs.Pane label="系统信息配置" name="1">
                    {<SystemOptions />}
                </Tabs.Pane>
                <Tabs.Pane label="消息模板配置" name="2">
                    {<MsgTemplate />}
                </Tabs.Pane>
            </Tabs>
        )
    }
}

export default Index;