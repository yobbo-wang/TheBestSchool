/**
 * 填写表单
 */
'use strict';
import React from 'react';
import {Select,Form,Switch,Button,Input,Tag }from 'element-react';

export default class Add extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            dynamicTags: [{key: 1, name: '品质保障', type: 'primary'}, {key: 2, name: '实战教学', type: 'success'}],
            inputVisible: false,
            inputValue: '',
            form: {
                city: '',
                province: '',
                school: '',
                department: '',
                tag: '',
                profession:'',
                name: '',
                courseName:'',
                region: '',
                date1: null,
                date2: null,
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                let active = this.state.active + 1;
                if (active > 4) {
                    //提交审核
                }
                this.setState({ active });
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    getCity() {
        const cityS = [{name:'北京',value:'beijing'},{name:'上海',value:'shanghai'},{name:'黑龙江',value:'heikongjiang'}];
        return(
            cityS.map((item) => {
                return(
                    <Select.Option key={item.value} label={item.name} value={item.value}></Select.Option>
                )
            })
        )
    }

    handleClose(tag) {
        const { dynamicTags } = this.state;
        dynamicTags.splice(dynamicTags.map(el => el.key).indexOf(dynamicTags.key), 1);
        this.setState({ tag });
    }

    handleInputConfirm() {
        let inputValue = this.state.inputValue;
        if (inputValue) {
            this.state.dynamicTags.push(inputValue);
        }
        this.state.inputVisible = false;
        this.state.inputValue = '';
        this.forceUpdate();
    }

    getTag() {
        return(
            <div>
                {
                    this.state.dynamicTags.map((tag) => {
                        return (
                            <Tag
                                style={{marginRight: 10}}
                                key={tag.key}
                                type={tag.type}
                                closable={true}
                                closeTransition={false}
                                onClose={this.handleClose.bind(this, tag)}>{tag.name}</Tag>
                        )
                    })
                }
                {
                    this.state.inputVisible ? (
                            <Input
                                className="input-new-tag"
                                value={this.state.inputValue.name}
                                ref="saveTagInput"
                                size="mini"
                                onChange={ (value) =>{this.setState({ inputValue: {key:Math.random(), type: 'primary', name: value } })}}
                                onKeyUp={ (e)=>{if (e.keyCode === 13) { this.handleInputConfirm();}}}
                                onBlur={this.handleInputConfirm.bind(this)}
                                style={{width: 100}}
                            />
                        ) :
                        <Button className="button-new-tag" size="small"
                                onClick={()=>{this.setState({ inputVisible: true }, () => {this.refs.saveTagInput.focus();});}}>添加标签</Button>
                }
            </div>
        )
    }

    render(){
        return(
            <div className="grid-content bg-purple" style={{marginTop:25}}>
                <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                    <Form.Item label="选择地区" prop="city">
                        <Select value={this.state.form.city} onChange={this.onChange.bind(this, 'city')} filterable={true} placeholder="请选择地区">
                            {this.getCity()}
                        </Select>
                        <Select value={this.state.form.province} placeholder="请选择省份" filterable={true} onChange={this.onChange.bind(this, 'province')} style={{marginLeft: 10}}>
                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                            <Select.Option label="区域二" value="beijing"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="学校院系" required={true}>
                        <Select value={this.state.form.school} placeholder="请选择学校" filterable={true} onChange={this.onChange.bind(this, 'school')}>
                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                            <Select.Option label="区域二" value="beijing"></Select.Option>
                        </Select>
                        <Select value={this.state.form.department} placeholder="选择院系" filterable={true} onChange={this.onChange.bind(this, 'department')} style={{marginLeft: 10}}>
                            <Select.Option label="区域一" value="shanghai"></Select.Option>
                            <Select.Option label="区域二" value="beijing"></Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="立马推荐" prop="delivery">
                        <Switch value={this.state.form.delivery} onChange={this.onChange.bind(this, 'delivery')}></Switch>
                    </Form.Item>
                    <Form.Item label="推荐标签" prop="tag">
                        {this.getTag()}
                    </Form.Item>
                    <Form.Item label="院系专业" prop="profession">
                        <Input value={this.state.form.profession} placeholder="请输入专业" onChange={this.onChange.bind(this, 'profession')}className="input"></Input>
                    </Form.Item>
                    <Form.Item label="课程名称">
                        <Input value={this.state.form.courseName} placeholder="请输入课程名称" onChange={this.onChange.bind(this, 'courseName')}className="input"></Input>
                    </Form.Item>
                    <Form.Item label="课件描述" prop="desc">
                        <Input type="textarea" value={this.state.form.desc} onChange={this.onChange.bind(this, 'desc')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>立即创建</Button>
                        <Button onClick={this.handleReset.bind(this)}>重置</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}