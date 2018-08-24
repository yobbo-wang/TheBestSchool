/**
 * Created by hao.cheng on 2018/8/8.
 */
import React from 'react';
import {setCookie} from "../../utils/cookieUtil";
import {Form ,Input,Button }from 'element-react';
import '../../resource/styles/login.css';
import loginImg from  '../../resource/images/login-img.png';
import logo from '../../resource/images/login_logo.png';
import http from '../../api/http';
import {environment} from '../../api/environment';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                username: '',
                pwd: '',
            },
            rules: {
                username: [{require: true, message: '请输入用户名',trigger: 'blur'}],
                pwd: [{require: true, message: '请输入密码',trigger: 'blur'}]
            },
            loginIng: false
        }
    }
    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({loginIng: true});
                /******************** 调用远程api登录 *********************/
                // let result = http.post(environment.url.login, {params: {username: this.state.form.username, password: this.state.form.pwd}});
                // result.then((data) => {
                //     setCookie('auth', data.Authorization, new Date().getTime() + 7*24*60*60*1000)
                //     let path = this.props.location.state && this.props.location.state.path ? this.props.location.state.path : '/'
                //     this.props.history.push({ pathname: `${path}`, state: {}})
                // }, error => {
                //     this.setState({loginIng: false});
                //     alert('登录失败！')
                // });
                /******************** 调用远程api登录结束 *********************/
                setCookie('auth', '10000001111', new Date().getTime() + 7*24*60*60*1000)
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    render() {
        console.log()
        return (
        <div className={"login-layout"}>
            <div className="login_box">
                <div className="login_l_img"><img src={loginImg}/></div>
                <div className="login">
                    <div className="login_logo"><a href="#"><img src={logo} /></a></div>
                    <div className="login_name">
                        <p>后台管理系统</p>
                    </div>
                    <Form ref="form" model={this.state.form} rules={this.state.rules}>
                        <Form.Item prop="username">
                            <Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} placeholder="用户名"></Input>
                        </Form.Item>
                        <Form.Item prop="pwd">
                            <Input type="password" value={this.state.form.pwd} onChange={this.onChange.bind(this, 'pwd')} placeholder="密码"></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" loading={this.state.loginIng} onClick={this.handleSubmit.bind(this)}>{this.state.loginIng ? '登录中': '登录'}</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="copyright">创优科技 版权所有©2018-2019 技术支持电话：000-00000000</div>
            </div>
        </div>
        )
    }
}