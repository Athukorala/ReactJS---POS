import React, {Component} from 'react';
import Input from "../../Common/TextField/Input";
import Button from "../../Common/Button/Button";
import axios from "../../../axios/axios-item";
import * as actionCreators from "../../../store/action";
import connect from "react-redux/es/connect/connect";
import swal from "sweetalert";

class App extends Component {

    state = {
        name: '',
        qty: '',
        price: '',
        itemDetails: [],
        submit: false,
        image:[]
    };

    componentDidMount() {
        this.didMountTick();

    };

    componentDidUpdate() {

    }

    didMountTick = () => {
        // this.props.start(true);
        axios.get(`items`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    itemDetails: response.data
                });

                if (response.data.length !== 0) {
                    document.getElementById("example1").value = response.data[0].code;
                    axios.get(`items/` + response.data[0].code)
                        .then(response => {
                            console.log(response.data);
                            this.setState({
                                name: response.data.description,
                                price: response.data.unitprice,
                                qty: response.data.qty,
                                image: response.data.image

                            })
                        })

                        .catch(error => {
                            console.log("error: " + error)
                        });
                }
                this.props.stop(true);
            })

            .catch(error => {
                console.log("error: " + error)
            });


    };

    submit = () => {
        if (this.state.name.trim() === '') {
            this.isNameBackground();
        } else {
            this.noNameBackground();
        }

        if (this.state.qty === '') {
            this.isQtyBackground();
        } else {
            this.noQtyBackground();
        }

        if (this.state.price === '') {
            this.isPriceBackground();
        } else {
            this.noPriceBackground();
        }

        let id = document.getElementById("example1").value;

        if (this.state.name.trim() !== '' && this.state.qty !== '' && this.state.price !== '' && id !== '') {

            const itemObj = {
                code: id,
                description: this.state.name,
                qty: this.state.qty,
                unitprice: this.state.price,
                image:this.state.image
            };
            axios.post(`items/` + id, itemObj)
                .then(response => {

                    if (response.status === 200) {
                        this.didMountTick();
                        this.props.stop(true);

                        swal({
                            text: "Added Successfully!",
                            // text: "You clicked the button!",
                            icon: "success",
                            button: "Okay!",
                        });
                    }else{
                        swal({
                            text: "Failed!",
                            icon: "warning",
                            button: "Okay!",
                        });
                    }

                })
                .catch(error => {
                    console.log(error)
                });
        }else{
            swal({
                text: "Please fill all field...!",
                icon: "warning",
                button: "Okay!",
            });
        }
    };

    nameInput = (event) => {
        this.setState({name: event});
        this.noNameBackground();
    };

    qtyInput = (event) => {
        this.setState({qty: event});
        this.noQtyBackground();
    };

    priceInput = (event) => {
        this.setState({price: event});
        this.noPriceBackground();
    };

    idChange = (event) => {
        axios.get(`items/` + event.target.value)
            .then(response => {
                this.setState({
                    name: response.data.description,
                    price: response.data.unitprice,
                    qty: response.data.qty,
                    image:response.data.image
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });
    };

    removesubmit = () => {

        let id = document.getElementById("example1").value;
        console.log(id);
        if(id!=="") {
            axios.delete(`items/` + id)
                .then(response1 => {

                    swal({
                        text: "Removed!",
                        icon: "success",
                        button: "Okay!",
                    });

                    this.didMountTick()
                })

                .catch(error => {
                    console.log("error: " + error)
                });
        }else{
            swal({
                text: "Please select id...!",
                icon: "warning",
                button: "Okay!",
            });
        }
    };

    render() {

        let options = this.state.itemDetails.map((row, index) => (
            <option key={index}>
                {row.code}
            </option>
        ));

        return (
            <div style={{marginLeft: '10%', marginTop: '3%'}}>
                <div className="form-group">
                    <label htmlFor="example1">Select Id</label>
                    <select onChange={(event) => this.idChange(event)} className="form-control" id="example1" style={{
                       height:'34px',width: '30%',background:'linear-gradient(to left, antiquewhite, white)'
                    }}>
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Item Description</label>
                    <Input value={this.state.name} onChange={(event) => this.nameInput(event.target.value)}
                           id="exampleFormControlInput1" placeholder="description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Item Qty</label>
                    <Input type="number" value={this.state.qty} onChange={(event) => this.qtyInput(event.target.value)}
                           id="exampleFormControlInput2" placeholder="Qty"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput3">Item Price</label>
                    <Input type="number" value={this.state.price} onChange={(event) => this.priceInput(event.target.value)}
                           id="exampleFormControlInput3" placeholder="Price"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-3" style={{marginBottom: '5%'}}>
                        <Button onClick={this.submit} width="100%" children="Update Item"/>
                    </div>
                    <div className="col-sm-3">
                        <Button onClick={this.removesubmit} width="100%"
                                background="linear-gradient(to top,#9796f0,#fbc7d4)"
                                children="Remove Item"/>
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

const mapDispatchToProps = (dispatch) => {
    return {

        start: (data) => dispatch(actionCreators.startLoading(data)),
        stop: (data) => dispatch(actionCreators.stopLoading(data)),

    }
};

export default connect(null, mapDispatchToProps)(App);