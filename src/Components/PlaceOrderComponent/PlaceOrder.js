import React, {Component} from 'react';
import Input from "../Common/TextField/Input";
import Button from "../Common/Button/Button";
import classes from "./style.css";
import {DatePicker} from 'antd';

class App extends Component {
    render() {
        return (
            <div className={classes.mainDiv}>
                <div style={{borderBottom: '2px solid burlywood', paddingTop: '1%', paddingLeft: '1%'}}>
                    <label htmlFor="exampleFormControlInput1">Place - Order</label>
                </div>
                <div style={{marginLeft: '10%'}}>
                    <div className="row" style={{paddingTop: '3%'}}>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Customer Id</label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                        style={{width: '50%', borderRadius: '20px'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Customer Name</label>
                                <Input disabled="true" width="100%" id="exampleFormControlInput1"
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
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Item Id</label>
                                <select className="form-control" id="exampleFormControlSelect1"
                                        style={{width: '50%', borderRadius: '20px'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Description</label>
                                <Input disabled="true" width="100%" id="exampleFormControlInput1"
                                       placeholder="Description"/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Qty</label>
                                <Input width="100%" id="exampleFormControlInput1" placeholder="Qty"/>
                            </div>
                        </div>
                        <div className="col-sm-2" style={{marginBottom: '3%'}}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Price</label>
                                <Input disabled="true" width="100%" id="exampleFormControlInput1" placeholder="Price"/>
                            </div>
                        </div>


                        {/*--- placeorder table --*/}

                        <table className="table table-hover"
                               style={{width: '88%', backgroundColor: 'white', color: 'black', marginLeft: '2%'}}>
                            <thead>
                            <tr>

                                <th scope="col">Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {/*----- table row ---*/}


                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>


                    <br/>
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Full Total</label>
                                <Input disabled="true" width="50%" id="exampleFormControlInput1"
                                       placeholder="Full Total"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <br/>
                            <Button width="100%" children="Create Order"/>
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

const popup = {
    width: '40px',
    height: '50px'
}
const dark = {
    opacity: '1',
    width: '100%'

}
export default App;