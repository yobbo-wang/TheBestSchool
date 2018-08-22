'use strict';
import React from 'react';
import { NavLink } from 'react-router-dom'
import { Breadcrumb } from 'element-react';

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getItem(){
        const _navigation_ = this.props._navigation_;
        return(
            <Breadcrumb separator="/">
                {
                    _navigation_.map((item) => {
                        return(
                            item.url ?
                                <Breadcrumb.Item key={item.text}><NavLink to={item.url} exact style={{textDecoration:'none'}}>{item.text}</NavLink></Breadcrumb.Item> :
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