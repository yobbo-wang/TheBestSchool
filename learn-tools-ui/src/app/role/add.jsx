'use strict';
import React from 'react';
import {Dialog, Button, Form, Input, Checkbox } from 'element-react'

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                authMenu: []
            },
            rules: {
                name: [
                    { required: true, message: '请输入角色名', trigger: 'blur' }
                ],
                authMenu: [
                    { type: 'array', required: true, message: '请至少选择一个功能权限', trigger: 'change' }
                ]
            },
            checkAll: false,
            isIndeterminate: true,
            menus: ['用户管理', '角色管理', '菜单管理'],
            checkedCities: [],

        };
        this.options = {
            label: 'name',
            children: 'zones'
        }
    }



    onClose() {
        this.props.callback(false);
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleCheckedMenusChange(value) {
        const checkedCount = value.length;
        const citiesLength = this.state.menus.length;

        this.setState({
            checkedCities: value,
            checkAll: checkedCount === citiesLength,
            isIndeterminate: checkedCount > 0 && checkedCount < citiesLength,
        });
    }

    render(){
        return (
            <Dialog
                title="菜单编辑"
                visible={ this.props.dialogVisible }
                onCancel={ this.onClose.bind(this) }
                onClose={() => this.onClose.bind(this)}
            >
                <Dialog.Body>
                    <Form model={this.state.form} labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="角色名" prop="name">
                            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} placeholder="角色名有中文、数组、英文组成且长度不超过15"/>
                        </Form.Item>
                        <Form.Item label="功能权限" prop="authMenu" >
                            <div style={{border: 'solid 1px #eaeefb', borderRadius: 4, padding: 5, marginBottom: 5}}>
                                <Checkbox
                                    checked={this.state.checkAll}
                                    indeterminate={this.state.isIndeterminate}
                                    onChange={()=>{}}>系统管理</Checkbox>
                                <Checkbox.Group
                                    value={this.state.menus}
                                    onChange={this.handleCheckedMenusChange.bind(this)}>
                                    {
                                        this.state.menus.map((item, index) =>
                                            <Checkbox key={index} label={item}></Checkbox>
                                        )
                                    }
                                </Checkbox.Group>
                            </div>
                            <div style={{border: 'solid 1px #eaeefb', borderRadius: 4, padding: 5, marginBottom: 5}}>
                                <Checkbox
                                    checked={this.state.checkAll}
                                    indeterminate={this.state.isIndeterminate}
                                    onChange={()=>{}}>系统管理</Checkbox>
                                <Checkbox.Group
                                    value={this.state.menus}
                                    onChange={this.handleCheckedMenusChange.bind(this)}>
                                    {
                                        this.state.menus.map((item, index) =>
                                            <Checkbox key={index} label={item}></Checkbox>
                                        )
                                    }
                                </Checkbox.Group>
                            </div>

                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ this.onClose.bind(this) }>取 消</Button>
                    <Button type="primary" onClick={ this.onClose.bind(this) }>确 定</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default Add;