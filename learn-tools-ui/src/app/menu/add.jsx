'use strict';
import React from 'react';
import {Dialog, Button, Form, Input, InputNumber, Message} from 'element-react'
import { saveMenu } from '../../store/menu/action';

export default class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false,
            saving: false,
            form: {},
            rules: {
                text: [
                    { required: true, message: '请输入菜单名', trigger: 'blur' },
                ]
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.row.type && (nextProps.row.type == 'menu' || nextProps.row.type == 'auth')){
            if(!nextProps.row.sort) nextProps.row.sort = 1;
            this.setState( {
                dialogVisible: true,
                form: nextProps.row
            } );
        }
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    save(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if(valid){
                this.setState({ saving: true });
                saveMenu(this.state.form).then(() => {
                    this.setState({ saving: false, dialogVisible: false });
                    Message({ showClose: true, message: '恭喜您，保存成功！', type: 'success' });
                    this.props.callback(); // callback fetch menu list
                }).catch((e) => {
                    console.log(e)
                    this.setState({ saving: false });
                    Message({ showClose: true, message: '保存失败！', type: 'error'  });
                });
            }
        });
    }

    render(){
        return (
            <Dialog
                title="菜单编辑"
                visible={ this.state.dialogVisible }
                onCancel={ () => this.setState({ dialogVisible: false }) }
                onClose={ () => this.setState({ dialogVisible: false }) }
            >
                <Dialog.Body>
                    <Form model={this.state.form} ref="form" labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="菜单名" prop="text">
                            <Input value={this.state.form.text} icon="menu" onChange={this.onChange.bind(this, 'text')} placeholder="菜单名字数最多15个字" />
                        </Form.Item>
                        <Form.Item label="菜单url">
                            <Input value={this.state.form.url} onChange={this.onChange.bind(this, 'url')} placeholder="菜单url只能为英文、数字、字符组成"></Input>
                        </Form.Item>
                        <Form.Item label="序号" prop="sort">
                            <InputNumber value={this.state.form.sort} min={"1"} onChange={this.onChange.bind(this, 'sort')}></InputNumber>
                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => this.setState({ dialogVisible: false }) }>取 消</Button>
                    <Button type="primary" onClick={ this.save.bind(this) } loading={this.state.saving} >{ this.state.saving ? '保存中...' : '确 定'}</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}