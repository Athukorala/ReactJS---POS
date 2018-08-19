import React, {Component} from 'react';

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Eux from "./hoc/Eux/Eux";
import MainLayout from "./Container/Layout/MainLayout/MainLayout";


class App extends Component {

    state = {};


    render() {

        return (
            <Eux>
                <MainLayout/>
            </Eux>

        );
    }
}

const mapStateToProps = (state) => {

    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));