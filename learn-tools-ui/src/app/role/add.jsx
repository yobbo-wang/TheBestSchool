'use strict';
import React from 'react';
import {Button, Checkbox, Dialog, Form, Input} from 'element-react'

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogVisible: false,
            saving: false,
            form: {
                name: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入角色名', trigger: 'blur' }
                ]
            },
        };
    }

    onClose() {
        this.props.callback(false);
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleCheckAllChange(index, checked){
        if(this.props.menuList[index].children.length == 0){
            this.setState({
                ['isIndeterminate'+index]: false,
                ['check'+index]: checked,
                ['checkAuth'+index]: [].push(this.props.menuList[index].text)
            })
        }else{
            let _c_ = [];
            for(let i=0;i<this.props.menuList[index].children.length;i++){
                _c_.push(this.props.menuList[index].children[i].text);
            }
            const checkAuth = checked ? _c_ : [];
            this.setState({
                ['isIndeterminate'+index]: false,
                ['check'+index]: checked,
                ['checkAuth'+index]: checkAuth
            })
        }
    }

    handleCheckedAuthChange(index, value){
        const checkCount = value.length;
        const authLength = this.props.menuList[index].children.length;
        this.setState({
            ['checkAuth'+index]: value,
            ['check'+index]: checkCount === authLength,
            ['isIndeterminate'+index]: checkCount > 0 && checkCount < authLength,
        });
    }

    save(e){
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                let i = 0, menuAuth = [];
                while (this.state['checkAuth' + i]){
                    if(this.props.menuList[i].children.length == 0 && this.props.menuList[i].text == this.state['checkAuth' + i][0]) {
                        menuAuth.push(this.props.menuList[i].id);
                        continue;
                    }
                    menuAuth.push(this.props.menuList[i].id);
                    for(let k=0;k<this.state['checkAuth' + i].length;k++){
                        for(let j=0;j<this.props.menuList[i].children.length;j++){
                            if(this.props.menuList[i].children[j].text == this.state['checkAuth' + i][k]){
                                menuAuth.push(this.props.menuList[i].children[j].id); //添加子功能菜单id
                            }
                        }
                    }
                    i++;
                }
                let params = {
                    name: this.state.form.name,
                    auths: menuAuth
                };
                //TODO 保存
            }
        });
    }

    render(){
        return (
            <Dialog
                title="角色编辑"
                visible={ this.props.dialogVisible }
                onCancel={ this.onClose.bind(this) }
                onClose={() => this.onClose.bind(this)}
            >
                <Dialog.Body>
                    <Form model={this.state.form} ref="form" labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="角色名" prop="name">
                            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} placeholder="角色名有中文、数组、英文组成且长度不超过15"/>
                        </Form.Item>
                        <Form.Item label="功能权限" >
                            {
                                this.props.menuList.map((item, index) => {
                                    return (
                                        <div  key={index} style={{border: 'solid 1px #eaeefb', borderRadius: 4, padding: 5, marginBottom: 5}}>
                                            <Checkbox checked={this.state['check'+index]}
                                                      indeterminate={this.state['isIndeterminate'+index]}
                                                      onChange={this.handleCheckAllChange.bind(this, index)}
                                            >
                                                {item.text}
                                            </Checkbox>
                                            {
                                                item.children.length > 0 ?
                                                <Checkbox.Group
                                                    value={this.state['checkAuth'+index]}
                                                    onChange={this.handleCheckedAuthChange.bind(this, index)}
                                                >
                                                    {
                                                        item.children.map((item_c, index_c) => {
                                                            return <Checkbox key={index_c} label={item_c.text} />
                                                        })
                                                    }
                                                </Checkbox.Group>
                                                : null
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ this.onClose.bind(this) }>取 消</Button>
                    <Button type="primary" onClick={ this.save.bind(this) } loading={this.state.saving}>{ this.state.saving ? '保存中...' : '确 定'}</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default Add;