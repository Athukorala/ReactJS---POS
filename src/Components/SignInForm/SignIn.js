import React, {Component} from 'react';
import Image from '../../Content/images/ab.jpg';
import Button from "../Common/Button/Button";

const antModalStyle = {opacity: '1'};
const documentStyle = {
    width: '50%',
    transformOrigin: '245px 476px 0px',
    top: '8%',

};
const liStyle = {
    marginBottom: '1%',
    fontFamily: 'unset'

};

const modalBody = {
    // backgroundImage: 'url(../src/Content/images/maxresdefault.jpg)',
    height: '350px',
    opacity: 1
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
    render() {


        let modal = null;

        modal = <div>

            <div tabIndex="-1" style={{zIndex: '10000'}} className="ant-modal-wrap vertical-center-modal" role="dialog">
               <br/>
                <center>
                    <small style={{color:'black',fontSize:'16px'}}>Smarter Shopping, Better Living!</small>

                </center>
                <div role="document" className="ant-modal" style={documentStyle}>
                    <div style={antModalStyle} onClick={() => this.setModalVisible()}>
                    </div>
                    <div className="ant-modal-content" style={{border:'3px solid lightgray'}}>
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
