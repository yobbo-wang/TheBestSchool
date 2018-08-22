'use strict';
import React from 'react';
import {Layout,Steps,Button }from 'element-react';
import FillIn from './FillIn'
import './index.scss'

export default class Body extends React.Component{
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
                    <Steps space={100} active={this.state.active} finishStatus="success" style={{marginTop:15, marginLeft: '20%'}}>
                        <Steps.Step title="填写课件信息"></Steps.Step>
                        <Steps.Step title="上传课件"></Steps.Step>
                        <Steps.Step title="等待审核"></Steps.Step>
                        <Steps.Step title="审核通过"></Steps.Step>
                    </Steps>
                    <FillIn callback={this.fillInCallback}/>
                </Layout.Col>
                <Layout.Col span="4"><div className="grid-content bg-purple">&nbsp;</div></Layout.Col>
            </Layout.Row>
        )
    }
}


