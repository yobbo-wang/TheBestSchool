'use strict';
import React from 'react';
import { Layout, Menu, Table,Upload } from 'element-react';
import '../resources/styles/common.scss';

export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [ {label: "标题", prop: "title", width: 180 },
                {  label: "文件大小", prop: "fileSize", width: 180 },
                { label: "状态",  prop: "fileStatus"},
                { label: "操作",  prop: "fileOperation"}
            ],
            data: [],
            uploadData: {}
        };
    }

    render(){
        return(
            <div>
                <Layout.Row gutter="20" className="header">
                    <Layout.Col span="4" className="header-col"><div>&nbsp;</div></Layout.Col>
                    <Layout.Col span="12" className="header-col">
                        <h1>
                            <img src={require('../resources/images/logo.svg')} />
                        </h1>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <Menu defaultActive="1" theme="dark" className="el-menu-demo" mode="horizontal">
                            <Menu.Item index="1">帮助中心</Menu.Item>
                        </Menu>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span="4"><div className="grid-content bg-purple">&nbsp;</div></Layout.Col>
                    <Layout.Col span="16">
                        <div style={{border: 'solid 1px #eaeefb', borderRadius: 4, transition: '0.2s', marginBottom:24, marginTop: 20}}>
                            <div style={{padding: 5}}>
                                <div style={{verticalAlign:'top',paddingTop:100,paddingLeft:20,width: '50%',boxSizing:'border-box',display: 'inline-block'}}>
                                    <h2 style={{color:'#1f2f3d',fontWeight:'normal',fontSize:28}}>Wi-Fi导入模式开启</h2>
                                    <h3 style={{paddingTop:3, paddingBottom:3,color:'#1f2f3d',fontWeight:'normal',fontSize:18}}>已连接到同局域网的名为"LY" 的iPad设备上</h3>
                                   <p style={{paddingTop:3, paddingBottom:3,color:'#5e6d82',fontSize:14}}>手机与电脑须在同一个Wi-Fi内，并且局域网连接上网。传输过程中请勿关闭手机上的Wi-Fi页面，否则传输会中断。</p>
                                </div>
                                <div style={{width: '50%',padding:'20px 0',textAlign:'center',boxSizing:'border-box',display: 'inline-block'}}>
                                    <Upload
                                        action={""}
                                        drag
                                        multiple
                                        autoUpload={false}
                                        showFileList={false}
                                        data={this.state.uploadData}
                                        tip={<div className="el-upload__tip">支持上传txt、pdf、ppt、word、excel等</div>}
                                    >
                                        <i className="el-icon-upload"></i>
                                        <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                        <Table
                            style={{width: '100%'}}
                            columns={this.state.columns}
                            maxHeight={200}
                            data={this.state.data}
                            border={true}
                        />
                    </Layout.Col>
                    <Layout.Col span="4"><div className="grid-content bg-purple">&nbsp;</div></Layout.Col>
                </Layout.Row>
            </div>

        )
    }
}