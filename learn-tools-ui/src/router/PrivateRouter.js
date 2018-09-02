import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {environment ,getToken} from "../api/environment";
import http from '../api/http';

/**
 * 每次进去项目之前校验auth可用性
 */
class PrivateRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    componentDidMount() {
        /**************** 开启api校验 ****************/
        const authorization =  getToken().authorization;
        if(authorization == "") {
            this.props.history.push({ pathname: `/login`, state: {path: this.props.path}})
        }
        let options = {
            headers: {
                Authorization: authorization
            }
        }
        http.head(environment.url.checkAuth, options).then(() => {
           this.setState({
               isAuthenticated: true
           })
        }).catch(() => {
            this.setState({
                isAuthenticated: false
            })
            this.props.history.push({ pathname: `/login`, state: {path: this.props.path}})
        })
        /*******************************************/

        /*********关闭api校验*********/
            // this.setState({
            //     isAuthenticated: true
            // })
        /*****************/
    }

    render() {
        let { component: Component} = this.props;
        return  this.state.isAuthenticated ?
            (<Route render={(props) => ( <Component {...props} />  )}/> ) : null
    }
}

export default withRouter(PrivateRouter);