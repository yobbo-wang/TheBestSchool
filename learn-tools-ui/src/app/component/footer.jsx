/**
 * footer
 */
'use strict';
import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div style={{bottom:'5px',position:'absolute',width:'auto',left:0,right:0}}>
                <div className="line"></div>
                <div style={{marginTop:'10px',color:'#898ea4',"textAlign": "center",fontSize: "12px"}}>Copyright @ 2018 版权归创优科技所有</div>
            </div>
        )
    }
}