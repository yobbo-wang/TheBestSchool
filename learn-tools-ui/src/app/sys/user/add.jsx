'use strict';
import React from 'react';
import {Dialog, Button, Form, Input, Checkbox, Message} from 'element-react'
import {saveUser} from "../../../store/sys/user/action";
import {inputErrorMsg} from "../../../utils/errorMsgUtil";

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false,
            form: {},
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: inputErrorMsg('name.cannot.null'), trigger: 'blur' }
                ],
                mobilePhone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ],
                email: [
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ],
                roles: [
                    {validator: (rule, value, callback) => {
                        if(this.state.roleGroup.length == 0){
                            callback(new Error('请至少选择一个角色'));
                        }else{
                            callback();
                        }
                    }}
                ]
            },
            roleGroup: [],
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps.row
        })
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    roleChange(value){
        let ids = [];
        for(let i=0;i<value.length;i++){
            for(let j=0;j<this.props.roles.length;j++){
                if(value[i] == this.props.roles[j].name){
                    ids.push(this.props.roles[j].id);
                }
            }
        }
        this.onChange('roleIds', ids);
    }

    save(e){
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({ saving: true });
                saveUser(this.state.form).then(()=>{
                    Message({ showClose: true, message: '恭喜您，保存成功！', type: 'success' });
                    this.onClose()
                    this.setState({ saving: false });
                    this.props.callback(); // callback fetch menu list
                }).catch(e=>{
                    console.log(e)
                    this.setState({ saving: false });
                    Message({ showClose: true, message: e.errorCode + ": " + e.errorMsg, type: 'error' });
                })
            }
        });

    }

    onClose() {
        this.refs.form.resetFields();
        this.setState({roleGroup: [], dialogVisible: false})
        this.props.callback(false);
    }

    render(){
        return (
            <Dialog
                title="用户编辑"
                visible={ this.state.dialogVisible }
                onCancel={ this.onClose.bind(this) }
                onClose={ this.onClose.bind(this) }
            >
                <Dialog.Body>
                    <Form ref="form" model={this.state.form} labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="用户名" prop="username">
                            <Input  value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} placeholder="用户名由英文、数字、字符组成且长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="姓名" prop="name">
                            <Input  value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} placeholder="姓名长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="手机号码" prop="mobilePhone">
                            <Input value={this.state.form.mobilePhone} onChange={this.onChange.bind(this, 'mobilePhone')} placeholder="姓名长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="邮箱" prop="email">
                            <Input defaultValue={this.state.form.email} min={"1"} onChange={this.onChange.bind(this, 'email')} placeholder="姓名长度在15以内" />
                        </Form.Item>
                        <Form.Item label="角色" prop={"roles"}>
                            <Checkbox.Group value={this.state.roleGroup} onChange={this.roleChange.bind(this)}>
                                {
                                    this.props.roles.map((data, index) => {
                                        return <Checkbox.Button key={index} label={data.name}>{data.name}</Checkbox.Button>
                                    })
                                }
                            </Checkbox.Group>
                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ this.onClose.bind(this)} >取 消</Button>
                    <Button type="primary" onClick={ this.save.bind(this) } loading={this.state.saving}>{ this.state.saving ? '保存中...' : '确 定'}</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default Add;