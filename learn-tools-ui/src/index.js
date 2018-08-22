'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import 'element-theme-default';
import './resource/styles/common.scss';
import './resource/styles/prism.css';
import Route  from './router';
import store from './store/store';

// console.log(store.getState())
// listen store
store.subscribe(() => {
  console.log('store is change......');
});

const render = Component => {
    ReactDom.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}

render(Route);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./router', () => {
        render(Route);
    });
}