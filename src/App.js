import React, {Component} from 'react';

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Eux from "./hoc/Eux/Eux";
import MainLayout from "./Container/Layout/MainLayout/MainLayout";
import SignIn from "./Components/Common/SignInForm/SignIn";


class App extends Component {

    state = {
        signin:true,
        main:false
    };

    main = () => {
        this.setState({
            signin:false,
            main:true
        })
    }

    render() {

        let showModal = null;

        if(this.state.signin){
            showModal =<SignIn click={this.main}/>
        }else if(this.state.main){
            showModal =<MainLayout/>
        }

        return (
            <Eux>
                {showModal}
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