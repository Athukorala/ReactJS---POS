import React, {Component} from 'react';
import classes from './Navbar.css';
import * as actionCreators from "../../store/action/BodyActions";
import connect from "react-redux/es/connect/connect";
import customerAxios from "../../axios/axios-customer";
import itemAxios from "../../axios/axios-item";
import axios from "../../axios/axios-order";
import * as actionCreator from '../../store/action/index';

class App extends Component {
    state = {
        customerDetails: [],
        itemDetails: [],
        count: 0
    };

    componentDidMount() {
        this.tick();
        setInterval(this.tick, 5000);
        this.cus();

    };


    tick = () => {
        customerAxios.get(`customers`)
            .then(response => {

                this.setState({
                    customerDetails: response.data
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });

        itemAxios.get(`items`)
            .then(response => {

                this.setState({
                    itemDetails: response.data
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });

        axios.get(`orders/getFullCount`)
            .then(response => {
                this.setState({
                    count: response.data
                })

            })
            .catch(error => {
                console.log(error)
            });
    }

    cus = () => {
        const urlArray=[];
        this.props.imageHandler(urlArray)
        this.hideColor();
        document.getElementById("cusNav").style.color = " rgb(255, 237, 188";
        this.props.customerBodyHandler(true);
    }

    item = () => {
        const urlArray=[];
        this.props.imageHandler(urlArray)
        this.hideColor();
        document.getElementById("itemNav").style.color = " rgb(255, 237, 188";
        this.props.itemBodyHandler(true);
    }

    placeorder = () => {
        this.hideColor();
        document.getElementById("placeNav").style.color = " rgb(255, 237, 188";
        this.props.placeorderBodyHandler(true);
    }

    order = () => {

        this.hideColor();
        document.getElementById("orderNav").style.color = " rgb(255, 237, 188";
        this.props.orderBodyHandler(true);
    }

    render() {
        let customerNumbers = this.state.customerDetails.length;
        let itemsNumbers = this.state.itemDetails.length;

        return (
            <div className={classes.nav} style={{
                backgroundColor: '#001529', width: '100%', zIndex: '10', borderBottom: '1px solid  rgb(255, 237, 188',
                position: 'fixed', marginTop: '-7%'
            }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a style={{color: 'gray', width: '10%', textAlign: 'center', border: '1px solid'}}
                       className="navbar-brand">
                        {/*මේක මගේ කඩේ*/}
                        <img src="http://www.pos-ks.com/wp-content/uploads/2017/10/pos_logo_square_blue.png" alt="user"
                             style={{width: '50%'}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float: 'right'}}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link"> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a id="cusNav" onClick={this.cus} style={aStyle} className="nav-link active">
                                    CUSTOMER
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a id="itemNav" onClick={this.item} style={aStyle} className="nav-link">
                                    ITEM
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a id="placeNav" onClick={this.placeorder} style={aStyle} className="nav-link">
                                    PLACE-ORDER
                                </a>
                            </li>
                            <li className="nav-item">
                                <a id="orderNav" onClick={this.order} style={aStyle} className="nav-link">
                                    ORDERS
                                </a>
                            </li>


                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav" style={{float: 'right'}}>

                                <li className="nav-item" style={{float: 'right'}}>
                                    <a onClick={this.cus} className="nav-link js-scroll-trigger" style={{
                                        marginTop: '6%',
                                        color: "pink",
                                        marginLeft: '0px',
                                        fontSize: '12px',
                                        border: '1px solid black'
                                    }}>
                                        <i className="fa fa-id-card" aria-hidden="true">
                                        </i>&nbsp;&nbsp;&nbsp;CUSTOMERS&nbsp;{customerNumbers}&nbsp;&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a onClick={this.item} className="nav-link js-scroll-trigger" style={{
                                        marginTop: '8%',
                                        color: "pink",
                                        fontSize: '12px',
                                        border: '1px solid black'
                                    }}>
                                        <i className="fa fa-sitemap" aria-hidden="true">
                                        </i>
                                        &nbsp;&nbsp;&nbsp;ITEMS&nbsp;{itemsNumbers}&nbsp;&nbsp;</a>
                                </li>
                                &nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <a onClick={this.order} className="nav-link js-scroll-trigger" style={{
                                        marginTop: '6%',
                                        color: "pink",
                                        marginLeft: '0px',
                                        fontSize: '12px',
                                        border: '1px solid black'
                                    }}>
                                        <i className="fa fa-id-card" aria-hidden="true">
                                        </i>&nbsp;&nbsp;&nbsp;ORDERS&nbsp;{this.state.count}&nbsp;&nbsp;</a>
                                </li>

                                &nbsp;&nbsp;
                                <li className="nav-item" style={{float: 'right'}}>
                                    <i className="nav-link js-scroll-trigger"
                                           style={{cursor: 'pointer', color: "pink", fontSize: '12px'}}>
                                        <a href="https://www.linkedin.com/in/tharinduathukorala" target="_blank">
                                            <img height="30px" style={{borderRadius: '20px'}}
                                                 src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t1.0-9/40143726_1000077100153006_6694312692435386368_n.jpg?_nc_cat=0&oh=1eb11266b0cc87e535e6ba7a8d42e84e&oe=5BFD3168"
                                                 alt="user"/>
                                        </a>
                                        </i>

                                    {/*</li>*/}
                                </li>
                            </ul>

                        </form>
                    </div>
                </nav>
            </div>
        )
    }

    hideColor = () => {
        document.getElementById("cusNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("itemNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("orderNav").style.color = "rgb(189, 189, 189)";
        document.getElementById("placeNav").style.color = "rgb(189, 189, 189)";
        //  rgb(255, 237, 188
    }
}


const aStyle = {
    color: 'rgb(189, 189, 189)', fontSize: '14px'
};

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
        orderBodyHandler: (data) => dispatch(actionCreators.orderHandler(data)),
        imageHandler: (image) => dispatch(actionCreator.imageHandler(image))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
