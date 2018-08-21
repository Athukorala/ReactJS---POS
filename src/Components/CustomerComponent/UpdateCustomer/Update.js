import React, {Component} from 'react';
import Input from "../../Common/TextField/Input";
import Button from "../../Common/Button/Button";

class App extends Component {
    state = {
        name: '',
        address: '',
        submit: false
    };

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

    submit = () => {
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
            console.log("correct")
        }
    };

    removesubmit = () => {

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
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select Id</label>
                    <select className="form-control" id="exampleFormControlSelect1"
                            style={{width: '30%', borderRadius: '20px'}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Customer name</label>
                    <Input onChange={(event) => this.nameInput(event.target.value)} id="exampleFormControlInput1"
                           placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Customer Address</label>
                    <Input onChange={(event) => this.addressInput(event.target.value)} id="exampleFormControlInput2"
                           placeholder="Address"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-3" style={{marginBottom: '5%'}}>
                        <Button onClick={this.submit} width="100%" children="Update Customer"/>
                    </div>
                    <div className="col-sm-3">
                        <Button onClick={this.removesubmit} width="100%" background="linear-gradient(to top, #9796f0, #fbc7d4)"
                                children="Remove Customer"/>
                    </div>

                </div>


            </div>

        )
    }

}

export default App;