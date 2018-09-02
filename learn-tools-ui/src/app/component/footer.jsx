/**
 * footer
 */
'use strict';
import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div style={{bottom:'5px',position:'absolute',width:'auto',left:0,right:0}}>
                <div className="line" style={{marginLeft: 0}}></div>
                <div style={{marginTop:'10px',color:'#898ea4',"textAlign": "center",fontSize: "12px"}}>创优科技 版权所有©2018-2019 技术支持电话：000-00000000</div>
            </div>
        )
    }
}