'use strict';
import React from 'react';
import { instanceOf } from 'prop-types';

import Header from '../component/header';
import Navigation from '../component/navigation'
import Body from './body';
import Footer from "../component/footer";

class Index extends React.Component {
    static propTypes = {
    }

    componentDidMount(){
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const _navigation_ = [{text: "首页", url: "/"}, {text: "精品课件"}]
        return (
            <div className={"main"}>
                <Header />
                <div className={"body"}>
                    <Navigation _navigation_={_navigation_} />
                    <div className={"line"}></div>
                    <div className={"body-context"}>
                        <Body />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index;