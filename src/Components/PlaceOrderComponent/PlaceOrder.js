import React, {Component} from 'react';
import Input from "../Common/TextField/Input";
import Button from "../Common/Button/Button";
import classes from "./style.css";
import {DatePicker} from 'antd';
import axiosCustomer from "../../axios/axios-customer";
import axiosItem from "../../axios/axios-item";
import * as actionCreators from "../../store/action";
import connect from "react-redux/es/connect/connect";

let totalPrice = 0

class App extends Component {

    state = {
        customerDetails: [],
        itemDetails: [],
        totalAmount: 0,

        // --- for order --
        orderDate: '',

        //-- customer
        cusName: '',

        // --items
        itemDescription: '',
        itemQty: '',
        itemPrice: '',

        enterQty: '',

        // place order table

        tableValue: [
            // {
            //     "code": 1, "description": "abc", "qty": 3, "amount": 340
            // },
            // {
            //     "code": 2, "description": "xyz", "qty": 21, "amount": 120
            // }
        ]

    };

    componentDidMount() {
        this.didMountTick();
    }

    didMountTick = () => {
        // this.props.start(true);

        // customers get id

        axiosCustomer.get(`customers`)
            .then(response => {
                this.setState({
                    customerDetails: response.data
                });

                if (response.data.length !== 0) {
                    document.getElementById("example1").value = response.data[0].id;
                    axiosCustomer.get(`customers/` + response.data[0].id)
                        .then(response => {
                            console.log(response.data);
                            this.setState({
                                cusName: response.data.name,

                            })
                        })

                        .catch(error => {
                            console.log("error: " + error)
                        });
                }
                this.props.stop(true);

                this.props.stop(true);
            })

            .catch(error => {
                console.log("error: " + error)
            });

        // items get id
        axiosItem.get(`items`)
            .then(response => {
                this.setState({
                    itemDetails: response.data
                });
                if (response.data.length !== 0) {
                    axiosItem.get(`items/` + response.data[0].code)
                        .then(response => {
                            console.log(response.data);
                            this.setState({
                                itemDescription: response.data.description,
                                itemPrice: response.data.unitprice,
                                itemQty: response.data.qty,
                                enterQty: response.data.qty,
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

    datePicker = (date, stringDate) => {
        this.setState({
            orderDate: stringDate
        })
    };

    customerIdChange = (event) => {
        console.log(event.target.value);
        axiosCustomer.get(`customers/` + event.target.value)
            .then(response => {
                console.log(response.data);
                this.setState({
                    cusName: response.data.name
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });
    };

    itemIdChange = (event) => {
        let key=event.target.value;
        // console.log("event.target.value: "+event.target.value);
        axiosItem.get(`items/` + key)
            .then(response => {

                let inputQty=0;
                let reallQty=0;
                let letNewQty=0;

                let valid=false;

                if(this.state.tableValue.length !== 0){
                    this.state.tableValue.map((row, index) => {

                        // console.log("input key key: "+key)
                        // console.log("check key: "+row.code)
                        if(key === row.code){
                            valid=true;
                            inputQty=row.qty;
                            reallQty=response.data.qty;
                            letNewQty=reallQty-inputQty;

                            this.setState({

                                itemQty: letNewQty,
                                enterQty: letNewQty,
                            });
                            this.forceUpdate();

                        }
                    });

                }

                if(!valid){
                    this.setState({
                        itemDescription: response.data.description,
                        itemPrice: response.data.unitprice,

                        itemQty: response.data.qty, // qty handling
                        enterQty: response.data.qty,
                    });

                    this.forceUpdate();
                }


            })

            .catch(error => {
                console.log("error: " + error)
            });
    };

    qtyOnchange = (event) => {
        this.setState({
            enterQty: event
        })
    };

    moveTable = () => {
        let count = 0;

        const array = this.state.tableValue;
        console.log(this.state.tableValue);
        let obj = null;

        if (this.state.itemQty >= this.state.enterQty) {
            let itemCode = document.getElementById("itemKeyGen").value;
            let description = this.state.itemDescription;
            let itemQty = this.state.enterQty;

            //amount
            let inPrice = this.state.itemPrice;
            let price = this.state.enterQty * this.state.itemPrice;

            obj = {
                "code": itemCode, "description": description, "qty": itemQty, "amount": price
            };

            array.push(obj);

            this.setState({

                    tableValue: array
                }
            )

        } else {
            alert("Invalid qty")
        }

        // calculate price

        if (this.state.tableValue.length !== 0) {

            this.state.tableValue.map((row, index) => (
                count = count+row.amount
            ));
            this.setState({
                totalAmount: count
            })
        } else {
            this.setState({
                totalAmount: 0
            })
        }

    };

    submit = () => {
        console.log("clikc")
        if(this.state.orderDate === '' || this.state.totalAmount === 0 || this.state.cusName === ''){
            alert("Please fill all inputs..")
        }else{
            console.log("valid")

        }
    };

    render() {

        // console.log(this.state.tableValue)
        let tableBody = null;
        if (this.state.tableValue !== 0) {
            tableBody = this.state.tableValue.map((row, index) => (
                <tr key={index}>
                    <td>
                        {row.code}
                    </td>
                    <td>
                        {row.description}
                    </td>
                    <td>
                        {row.qty}
                    </td>
                    <td>
                        {row.amount}
                    </td>
                </tr>
            ));
        }

        let customerOptions = this.state.customerDetails.map((row, index) => (
            <option key={index}>
                {row.id}
            </option>
        ));

        let itemOptions = this.state.itemDetails.map((row, index) => (
            <option key={index}>
                {row.code}
            </option>
        ));


        return (
            <div className={classes.mainDiv}>
                <div style={{borderBottom: '2px solid burlywood', paddingTop: '1%', paddingLeft: '1%'}}>
                    <label htmlFor="exampleFormControlInput1">Place - Order</label>
                </div>
                <div style={{marginLeft: '10%'}}>
                    <div className="row" style={{paddingTop: '3%'}}>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="example1">Select Customer Id</label>
                                <select onChange={(event) => this.customerIdChange(event)} className="form-control"
                                        id="example1"
                                        style={{width: '50%', borderRadius: '20px'}}>

                                    {customerOptions}

                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Customer Name</label>
                                <Input background="black" color="white" value={this.state.cusName} disabled="true"
                                       width="100%" id="exampleFormControlInput1"
                                       placeholder="Customer Name"/>
                            </div>
                        </div>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-2">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Select Date</label>
                                <DatePicker popupStyle={popup} onChange={this.datePicker} style={dark}/>
                            </div>
                        </div>
                        <div className="col-sm-1">

                        </div>
                    </div>
                    {/*-- item category ---*/}

                    <div className="row" style={{paddingTop: '3%'}}>
                        <div className="col-sm-2">
                            <div className="form-group">
                                <label htmlFor="itemKeyGen">Select Item Id</label>
                                <select onChange={(event) => this.itemIdChange(event)} className="form-control"
                                        id="itemKeyGen"
                                        style={{width: '100%', borderRadius: '20px'}}>
                                    {itemOptions}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="itemDes">Description</label>
                                <Input id="itemDes" background="black" color="white" value={this.state.itemDescription}
                                       disabled="true" width="100%"
                                       placeholder="Description"/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Qty</label>
                                <Input onChange={(event) => this.qtyOnchange(event.target.value)}
                                       value={this.state.enterQty} width="100%" id="exampleFormControlInput1"
                                       placeholder="Qty"/>
                            </div>
                        </div>
                        <div className="col-sm-2" style={{marginBottom: '3%'}}>
                            <div className="form-group">
                                <label htmlFor="itemPrice">Price</label>
                                <Input id="itemPrice" background="black" color="white" value={this.state.itemPrice}
                                       disabled="true"
                                       width="100%" placeholder="Price"/>
                            </div>
                        </div>

                        <div onClick={this.moveTable} className="col-sm-1">
                            <i style={fontawesomStyle} className="fa fa-sign-in" aria-hidden="true">
                            </i>
                        </div>

                        {/*--- placeorder table --*/}

                        <table className="table table-hover"
                               style={{width: '88%', backgroundColor: 'white', color: 'black', marginLeft: '2%'}}>
                            <thead>
                            <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>

                            {/*----- table row ---*/}

                            {tableBody}


                            </tbody>
                        </table>
                    </div>


                    <br/>
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Full Total</label>
                                <Input background="black" color="white" value={this.state.totalAmount} disabled="true"
                                       width="50%" id="exampleFormControlInput1"
                                       placeholder="Full Total"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <br/>
                            <Button onClick={this.submit} width="100%" children="Create Order"/>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

const fontawesomStyle = {
    marginTop: '75%',
    fontSize: '200%',
    transform: 'rotate(30deg)',
    color: 'bisque',
    cursor: 'pointer'
}

const popup = {
    width: '40px',
    height: '50px'
};
const dark = {
    opacity: '1',
    width: '100%'

};


const mapDispatchToProps = (dispatch) => {
    return {

        start: (data) => dispatch(actionCreators.startLoading(data)),
        stop: (data) => dispatch(actionCreators.stopLoading(data)),

    }
};

export default connect(null, mapDispatchToProps)(App);