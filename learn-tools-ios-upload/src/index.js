'use strict';
import React from 'react';
import ReactDom from 'react-dom';
// import 'element-theme-default';
import 'element-theme-default/lib/table.css';
import  'element-theme-default/lib/button.css';
import  'element-theme-default/lib/upload.css';
import  'element-theme-default/lib/loading.css';
import  'element-theme-default/lib/form.css';
import  'element-theme-default/lib/col.css';
import  'element-theme-default/lib/row.css';
import  'element-theme-default/lib/icon.css';
import  'element-theme-default/lib/menu.css';
import  'element-theme-default/lib/menu-item.css';
import Index from './app/index';

const render = Component => {
    ReactDom.render(
        <Component />,
        document.getElementById('root')
    )
}

render(Index);