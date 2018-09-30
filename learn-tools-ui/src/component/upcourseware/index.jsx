'use strict';
import React from 'react';
import {Layout,Steps }from 'element-react';
import Add from './add'
import './index.scss'

export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        };
    }

    fillInCallback() {

    }

    render(){
        return(
            <Layout.Row gutter="20">
                <Layout.Col span="4"><div className="grid-content bg-purple">&nbsp;</div></Layout.Col>
                <Layout.Col span="16">
                    <Steps space={100} active={this.state.active} finishStatus="success" style={{marginLeft: '20%'}}>
                        <Steps.Step title="填写课件信息"></Steps.Step>
                        <Steps.Step title="上传课件"></Steps.Step>
                        <Steps.Step title="等待审核"></Steps.Step>
                        <Steps.Step title="审核通过"></Steps.Step>
                    </Steps>
                    <Add callback={this.fillInCallback}/>
                </Layout.Col>
                <Layout.Col span="4"><div className="grid-content bg-purple">&nbsp;</div></Layout.Col>
            </Layout.Row>
        )
    }
}