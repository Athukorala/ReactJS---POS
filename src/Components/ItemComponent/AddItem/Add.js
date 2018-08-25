import React, {Component} from 'react';
import Input from '../../Common/TextField/Input';
import Button from '../../Common/Button/Button';
import itemAxios from "../../../axios/axios-item";
import ImageUpload from "../../Common/ImageUpload/ImagUpload";

class App extends Component {

    state = {
        name: '',
        qty: '',
        price: '',
        submit: false
    };

    submit = () => {
        if (this.state.name.trim() === '') {
            this.isNameBackground();
        } else {
            this.noNameBackground();
        }

        if (this.state.qty.trim() === '') {
            this.isQtyBackground();
        } else {
            this.noQtyBackground();
        }

        if (this.state.price.trim() === '') {
            this.isPriceBackground();
        } else {
            this.noPriceBackground();
        }


        if (this.state.name.trim() !== '' && this.state.qty.trim() !== '' && this.state.price.trim() !== '') {
            console.log("correct")
            const itemObj = {
                code: 0,
                description: this.state.name,
                qty: this.state.qty,
                unitprice: this.state.price
            };
            itemAxios.put(`items`, itemObj)
                .then(response => {

                    if (response.status === 200) {
                        this.setState({
                            name: '',
                            qty: '',
                            price: ''
                        });
                        this.isNameBackground();
                        this.isQtyBackground();
                        this.isPriceBackground();
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

    qtyInput = (event) => {
        this.setState({qty: event})
        this.noQtyBackground();
    };

    priceInput = (event) => {
        this.setState({price: event})
        this.noPriceBackground();
    };

    render() {
        return (
            <div style={{marginLeft: '10%', marginTop: '3%'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Item Description</label>
                            <Input width="100%" value={this.state.name} onChange={(event) => this.nameInput(event.target.value)} id="exampleFormControlInput1"
                                   placeholder="description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput2">Item Qty</label>
                            <Input width="100%" type="number" value={this.state.qty} onChange={(event) => this.qtyInput(event.target.value)} id="exampleFormControlInput2"
                                   placeholder="Qty"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput3">Item Price</label>
                            <Input type="number" width="100%" value={this.state.price} onChange={(event) => this.priceInput(event.target.value)} id="exampleFormControlInput3"
                                   placeholder="Price"/>
                        </div>
                        <br/>
                        <Button width="50%" onClick={this.submit} children="Save Item"/>

                    </div>
                    <div className="col-sm-6">
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

    isQtyBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noQtyBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "white";
    };

    isPriceBackground = () => {
        document.getElementById("exampleFormControlInput3").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noPriceBackground = () => {
        document.getElementById("exampleFormControlInput3").style.background = "white";
    };

}

export default App;