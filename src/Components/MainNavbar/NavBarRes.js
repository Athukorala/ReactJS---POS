import React, {Component} from 'react';
import classes from './Navbar.css';
import * as actionCreators from "../../store/action/BodyActions";
import connect from "react-redux/es/connect/connect";
import customerAxios from "../../axios/axios-customer";
import itemAxios from "../../axios/axios-item";
import icon from '../../Content/images/ab.png';

class App extends Component {
    state = {
        customerDetails: [],
        itemDetails: []
    };

    componentDidMount(){
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
    }

    cus = () => {
        this.hideColor();
        document.getElementById("cusNav").style.color=" rgb(255, 237, 188";
        this.props.customerBodyHandler(true);
    }

    item = () => {
        this.hideColor();
        document.getElementById("itemNav").style.color=" rgb(255, 237, 188";
        this.props.itemBodyHandler(true);
    }

    placeorder = () => {
        this.hideColor();
        document.getElementById("placeNav").style.color=" rgb(255, 237, 188";
        this.props.placeorderBodyHandler(true);
    }

    render() {
        let customerNumbers = this.state.customerDetails.length;
        let itemsNumbers = this.state.itemDetails.length;

        return (
            <div className={classes.nav} style={{
                backgroundColor:'#001529',width:'100%',zIndex:'10',borderBottom:'1px solid  rgb(255, 237, 188'
                // position:'fixed'
            }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a style={{color:'gray',width:'10%',textAlign:'center',border:'1px solid'}} className="navbar-brand">
                        {/*මේක මගේ කඩේ*/}
                        <img src={icon} alt="Icon" style={{width:'20%',height:'2%'}}/>
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
                                <a id="orderNav" style={aStyle} className="nav-link">
                                    ORDERS
                                </a>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav" style={{float: 'right'}}>

                                <li className="nav-item" style={{float: 'right',border:'1px solid '}}>
                                    <a className="nav-link js-scroll-trigger"  style={{color:"pink",marginLeft:'0px',fontSize:'12px'}}>
                                        <i className="fa fa-id-card" aria-hidden="true">
                                        </i>&nbsp;&nbsp;&nbsp;CUSTOMERS&nbsp;{customerNumbers}&nbsp;&nbsp;</a>
                                </li>
                                &nbsp;
                                <li  className="nav-item" style={{float: 'right',border:'1px solid '}}>
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
    hideColor = () => {
        document.getElementById("cusNav").style.color="rgb(189, 189, 189)";
        document.getElementById("itemNav").style.color="rgb(189, 189, 189)";
        document.getElementById("orderNav").style.color="rgb(189, 189, 189)";
        document.getElementById("placeNav").style.color="rgb(189, 189, 189)";
        //  rgb(255, 237, 188
    }
}



const aStyle={
    color:'rgb(189, 189, 189)',fontSize:'14px'
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

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
