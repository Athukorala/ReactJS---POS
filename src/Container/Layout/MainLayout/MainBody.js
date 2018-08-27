import React,{Component} from 'react';
import CustomerBody from "../../../Components/MiddleComponent/CustomerBody";
import ItemBody from "../../../Components/MiddleComponent/ItemBody";
import {connect} from "react-redux";
import PlaceOrder from "../../../Components/PlaceOrderComponent/PlaceOrder";
import ImageCard from "../../../Components/Common/Card/Card";
import Order from "../../../Components/OrderComponent/Order";

class App extends Component{
    render(){
        let bodyShow = null;

        if(this.props.customer){
            bodyShow = <CustomerBody/>
        }else if(this.props.item){
            bodyShow = <ItemBody/>
        }else if(this.props.placeorder){
            bodyShow = <PlaceOrder/>
        }else if(this.props.order){
            bodyShow = <Order/>
        }


        return bodyShow
    }
}


const mapStateToProps = (state) => {

    return {
        customer: state.isBodyReducer.customerDashbord,
        item: state.isBodyReducer.itemDashbord,
        placeorder: state.isBodyReducer.placeorderDashbord,
        order: state.isBodyReducer.orderDashbord,

        // loading changes

        result: state.isLoad.start
    }
};


const mapDispatchToProps = (dispatch) => {

    return {


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);