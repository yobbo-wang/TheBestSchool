'use strict';
import React from 'react';
import { Link } from 'react-router'
import { Breadcrumb } from 'element-react';

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getItem(){
        const _navigation_ = [{text: "首页", url: "/"}, ...this.props._navigation_];
        console.log(_navigation_)
        return(
            <Breadcrumb separator="/">
                {
                    _navigation_.map((item) => {
                        return(
                            item.url ?
                                <Breadcrumb.Item key={item.text}><Link to={item.url} style={{textDecoration:'none'}}>{item.text}</Link></Breadcrumb.Item> :
                                <Breadcrumb.Item key={item.text}>{item.text}</Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
        )
    }

    render(){
        return(
            <div className="navigation">
                <Breadcrumb separator="/">
                    {this.getItem()}
                </Breadcrumb>
            </div>
        )
    }
}