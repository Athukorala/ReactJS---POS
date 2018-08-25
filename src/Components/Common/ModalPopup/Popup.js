import React, {Component} from 'react';
import {connect} from "react-redux";

const antModalStyle = {opacity: '1.2'};
const documentStyle = {width: '20%', transformOrigin: '245px 476px 0px', top: '2%', borderRadius: '18px'};

const spanStyle = {
    // background: 'lightgray',border:'none',outline:'none'
};

class App extends Component {
    state = {
        modalVisible: false,
        select:true
    };

    setModalVisible =()=> {

        let loc = window.location.href;
        if(loc.split('//')[1].split('/')[1]=== 'tc'){
            // window.location='/'
            this.props.history.push('/')
        }else{
            this.props.close();
            this.setState({
                select:false
            })
        }

    };
    leave = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "lightgray";
    };

    enter = () => {
        // document.getElementById('closeBtn').style.backgroundColor = "#f95757";
    };

    render() {

        let modal = null;

        if(this.state.select){
            modal=<div>

                <div className="ant-modal-mask" style={antModalStyle} onClick={() => this.setModalVisible()}>
                </div>

                <div tabIndex="-1"  style={{zIndex:'10000'}} className="ant-modal-wrap vertical-center-modal" role="dialog">
                    <div role="document" className="ant-modal" style={documentStyle}>
                        <div className="ant-modal-content">
                            <button
                                onMouseLeave={this.leave}
                                onMouseEnter={this.enter}
                                style={spanStyle}
                                aria-label="Close" className="ant-modal-close">

                                <span id="closeBtn"

                                      className="ant-modal-close-x"
                                      onClick={() => this.setModalVisible()}>
                            </span>
                            </button>
                            <div className="ant-modal-body">
                                <div>
                                    <center>
                                        <p style={{
                                            // fontFamily: 'unset',
                                            fontSize: '18px',
                                            // boxShadow: '0px 0px 5px -1px inset',
                                            marginLeft: '2%',
                                            padding: '1%',
                                            width: '97%'
                                        }}>↬ මේක මගේ කඩේ ↫  </p>

                                    </center>
                                    <br/>

                                </div>

                            </div>
                        </div>
                        {/*<div tabIndex="0" >sentinel</div>*/}
                    </div>
                </div>
            </div>
        }

        return modal

    }


};

const customHeader={
    color:'black'
};

// style objects add to components

const mapStateToProps = (state) => {


};

export default connect(mapStateToProps, null)(App);
