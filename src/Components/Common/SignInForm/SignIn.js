import React, {Component} from 'react';
import Image from '../../../Content/images/image1.jpg';

const antModalStyle = {opacity: '0.3'};
const documentStyle = {
    width: '50%',
    transformOrigin: '245px 476px 0px',
    top: '15%',

};
const liStyle = {
    marginBottom: '1%',
    fontFamily: 'unset'

};

const modalBody = {
    backgroundImage: 'url(../src/Content/images/maxresdefault.jpg)',
    height: '350px'
}
const spanStyle = {border: 'none', outline: 'none'};

class SignIn extends Component {
    state = {
        modalVisible: false,
        select: true
    };

    setModalVisible = () => {

        this.props.click();

    };
    leave = () => {
        document.getElementById('closeBtn').style.backgroundColor = "lightgray";
    };

    enter = () => {
        document.getElementById('closeBtn').style.backgroundColor = "#f95757";
    };
    onFailed = () => {
        console.log("failed")
    };

    onSuccess = () => {
        console.log("Success");
    };

    render() {


        let modal = null;

        modal = <div>

            <div tabIndex="-1" style={{zIndex: '10000'}} className="ant-modal-wrap vertical-center-modal" role="dialog">

                <div role="document" className="ant-modal" style={documentStyle}>
                    <div style={antModalStyle} onClick={() => this.setModalVisible()}>
                    </div>
                    <div className="ant-modal-content">
                        <button
                            aria-label="Close" className="ant-modal-close">

                                <span id="closeBtn"
                                      style={spanStyle}
                                      className="ant-modal-close-x"
                                      onClick={() => this.setModalVisible()}>
                            </span>
                        </button>
                        <div className="ant-modal-body" style={modalBody}>
                            <div className="row">
                                <div className="col-sm-1">

                                </div>
                                <div className="col-sm-10">
                                    <img src={Image} width="100%" height="100%" alt="image"/>
                                    <br/><br/>
                                    <center>
                                        <small style={{color:'white',fontSize:'14px'}}>Smarter Shopping, Better Living!</small>

                                    </center>

                                </div>
                                <div className="col-sm-1">

                                </div>
                            </div>

                        </div>
                    </div>
                    {/*<div tabIndex="0" >sentinel</div>*/}
                </div>
            </div>
        </div>


        return modal

    }


};

const customHeader = {
    color: 'black'
};


export default SignIn;
