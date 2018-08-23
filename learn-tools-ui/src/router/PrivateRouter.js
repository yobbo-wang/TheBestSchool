import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import{checkCookie}  from '../utils/cookieUtil'

class PrivateRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: checkCookie('uid') ? true : false
        };
    }

    componentDidMount() {
        console.log(this.props)
        if(!this.state.isAuthenticated){
            this.props.history.push({ pathname: `/login`, state: {path: this.props.path}})
        }
    }

    render() {
        let { component: Component} = this.props;
        return  this.state.isAuthenticated ?
            (<Route render={(props) => ( <Component {...props} />  )}/> ) : null
    }
}

export default withRouter(PrivateRouter);