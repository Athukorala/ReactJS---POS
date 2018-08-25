import React, {Component} from 'react';
import classes from './Navbar.css';
import * as actionCreators from "../../store/action/BodyActions";
import connect from "react-redux/es/connect/connect";
import customerAxios from "../../axios/axios-customer";
import itemAxios from "../../axios/axios-item";
import {Menu} from "antd";

class App extends Component {
    state = {
        customerDetails: [],
        itemDetails: []
    };

    componentDidMount(){
        this.tick();
        setInterval(this.tick, 5000);

    };

    tick = () => {
        customerAxios.get(`customers`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    customerDetails: response.data
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });

        itemAxios.get(`items`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    itemDetails: response.data
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });
    }

    cus = () => {
        this.props.customerBodyHandler(true);
    }

    item = () => {
        this.props.itemBodyHandler(true);
    }

    placeorder = () => {
        this.props.placeorderBodyHandler(true);
    }

    render() {
        let customerNumbers = this.state.customerDetails.length;
        let itemsNumbers = this.state.itemDetails.length;

        return (
            <div className={classes.nav} style={{
                backgroundColor:'#001529',width:'100%',zIndex:'10',borderBottom:'1px solid burlywood'
                // position:'fixed'
            }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a style={{color:'gray',width:'15%',textAlign:'center'}} className="navbar-brand">
                        මේක මගේ කඩේ
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float:'right'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link"> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a onClick={this.cus} style={aStyle} className="nav-link active">
                                    CUSTOMER
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a onClick={this.item} style={aStyle} className="nav-link">
                                    ITEM
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a onClick={this.placeorder} style={aStyle} className="nav-link">
                                    PLACE-ORDER
                                </a>
                            </li>
                            <li className="nav-item">
                                <a style={aStyle} className="nav-link">
                                    ORDERS
                                </a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav" style={{float: 'right'}}>

                                <li className="nav-item" style={{float: 'right'}}>
                                    <a className="nav-link js-scroll-trigger"  style={{color:"pink",marginLeft:'0px',fontSize:'12px'}}>
                                        <i className="fa fa-id-card" aria-hidden="true">
                                        </i>&nbsp;&nbsp;&nbsp;CUSTOMERS&nbsp;{customerNumbers}&nbsp;&nbsp;</a>
                                </li>
                                <li  className="nav-item" style={{float: 'right'}}>
                                    <a className="nav-link js-scroll-trigger" style={{color:"pink",fontSize:'12px'}}>
                                        <i className="fa fa-sitemap" aria-hidden="true">
                                        </i>
                                        &nbsp;&nbsp;&nbsp;ITEMS&nbsp;{itemsNumbers}&nbsp;&nbsp;</a>
                                </li>
                                <li className="nav-item" style={{float: 'right'}}>

                                </li>
                            </ul>

                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
const aStyle={
    color:'rgb(189, 189, 189)',fontSize:'14px'
}

const mapStateToProps = (state) => {

    return {
        customer: state.isBodyReducer.customerDashbord,
        item: state.isBodyReducer.itemDashbord,
        placeorder: state.isBodyReducer.placeorderDashbord,
    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        customerBodyHandler: (data) => dispatch(actionCreators.customerHandler(data)),
        itemBodyHandler: (data) => dispatch(actionCreators.itemHandler(data)),
        placeorderBodyHandler: (data) => dispatch(actionCreators.placeorderHandler(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
