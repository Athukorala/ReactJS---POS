import React, {Component} from 'react';
import Input from '../../Common/TextField/Input';
import Button from '../../Common/Button/Button';
import * as actionCreators from '../../../store/action/index';

// axios call---

import customerAxios from '../../../axios/axios-customer';
import uploadAxios from '../../../axios/axios-imageupload';
import {connect} from "react-redux";
import ImageUpload from "../../Common/ImageUpload/ImagUpload";
// import AB from "../../Common/ImageUpload/AB";

const bodyFormData=new FormData();

class App extends Component {

    state = {
        name: '',
        address: '',
        submit: false
    };



    submit = () => {

        /*
        if(this.props.image.length !== 0){
            // bodyFormData.set("file",this.props.image[0].result.split('base64,')[1]);
            // bodyFormData.set("file",this.props.image[0].originFileObj);
            bodyFormData.set("file",this.props.image);
            console.log(bodyFormData)

            uploadAxios.post(`/customer`,bodyFormData)
                .then(response => {
                    console.log(response)
                })

                .catch(error => {
                    console.log("error: " + error)
                });

        }
        */

        if (this.state.name.trim() === '') {
            this.isNameBackground();
        } else {
            this.noNameBackground();
        }

        if (this.state.address.trim() === '') {
            this.isAddressBackground();
        } else {
            this.noAddressBackground();
        }

        if (this.state.name.trim() !== '' && this.state.address.trim() !== '') {
            console.log("correct");
            //this.props.start(true);
            const customerObj={
                id:0,
                name:this.state.name,
                address:this.state.address
            };
            customerAxios.put(`customers`,customerObj)
                .then(response => {

                    if(response.status === 200){
                        this.setState({
                            name: '',
                            address: ''
                        });
                        this.isNameBackground();
                        this.isAddressBackground();
                        // this.props.stop(true);
                    }

                })
                .catch(error => {
                    console.log(error)
                });
        }
    };

    nameInput = (event) => {
        this.setState({name: event});
        this.noNameBackground();
    };

    addressInput = (event) => {
        this.setState({address: event})
        this.noAddressBackground();
    };

    render() {
        return (
            <div style={{marginLeft: '10%', marginTop: '5%'}}>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Customer name</label>
                            <Input width="100%" value={this.state.name} onChange={(event) => this.nameInput(event.target.value)} id="exampleFormControlInput1"
                                   placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput2">Customer Address</label>
                            <Input width="100%" value={this.state.address} onChange={(event) => this.addressInput(event.target.value)} id="exampleFormControlInput2"
                                   placeholder="Address"/>
                        </div>
                        <br/>
                        <Button width="50%" onClick={this.submit} children="Save Customer"/>

                    </div>
                    <div className="col-sm-6">
                        {/*<AB/>*/}
                        <ImageUpload/>
                    </div>
                </div>


            </div>

        )
    }

    isNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background = "white";
    };

    isAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "white";
    };

}
const mapStateToProps = (state) => {

    return {
        image: state.isImageReducer.image
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        start: (data) => dispatch(actionCreators.startLoading(data)),
        stop: (data) => dispatch(actionCreators.stopLoading(data)),

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);