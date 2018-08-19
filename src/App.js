import React, {Component} from 'react';

import {withRouter} from "react-router-dom";


class App extends Component {

    state = {
       

        
    };

    
    render() {
        
        return (
            <Eux>

                <main>
            <h1>React POS </h1>
            </main>

            </Eux>

        );
    }
}

const mapStateToProps = (state) => {

    return {
        
        isFailedReg: state.helpRed.failedReg,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
        onTCHandler: (data) => dispatch(actions.tcPage(data)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));