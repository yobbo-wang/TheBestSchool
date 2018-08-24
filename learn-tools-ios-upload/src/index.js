'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import 'element-theme-default';
import Index from './app/index';

const render = Component => {
    ReactDom.render(
        <Component />,
        document.getElementById('root')
    )
}

render(Index);