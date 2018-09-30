'use strict';
import React from 'react';
import { connect } from 'react-redux';

import { requestData } from '../../store/main/action'
import Header from '../../component/common/header';
import Navigation from '../../component/common/navigation'
import Body from './body';
import Footer from "../../component/common/footer";

class Home extends React.Component {
    static propTypes = {
    }

    componentDidMount(){
        //set cookie
        this.props.requestData("1", "dataList");
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let _navigation_ = this.props.children.props.location.state;
        if(_navigation_ == undefined) {
            _navigation_ = [{text: "数据统计"}]
        }
        return (
            <div className={"main"}>
                <Header />
                <div className={"body"}>
                    <Navigation _navigation_={_navigation_} />
                    <div className={"line"}></div>
                    <div className={"body-context"}>
                        { this.props.children.props.location.pathname == '/' ? <Body /> : this.props.children }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state => ({
    mainData: state.mainData,
}), {
    requestData
})(Home);