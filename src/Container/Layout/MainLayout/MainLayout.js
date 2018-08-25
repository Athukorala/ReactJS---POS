import React,{Component} from 'react';
import Navbar from "../../../Components/MainNavbar/Navbar";
import CustomerBody from "../../../Components/MiddleComponent/CustomerBody";
import ItemBody from "../../../Components/MiddleComponent/ItemBody";
import {connect} from "react-redux";
import PlaceOrder from "../../../Components/PlaceOrderComponent/PlaceOrder";
import LoadingBar from "../../../Components/Common/LoadingBar/LoadingBar";
import Footer from "../../../Components/Common/Footer/Footer";

class App extends Component{
    render(){
        let bodyShow = null;

        if(this.props.customer){
            bodyShow = <CustomerBody/>
        }else if(this.props.item){
            bodyShow = <ItemBody/>
        }else if(this.props.placeorder){
            bodyShow = <PlaceOrder/>
        }


        return(
            <div>
                <LoadingBar show={this.props.result}/>
                <Navbar/>
                {bodyShow}
                <Footer/>

            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        customer: state.isBodyReducer.customerDashbord,
        item: state.isBodyReducer.itemDashbord,
        placeorder: state.isBodyReducer.placeorderDashbord,

        // loading changes

        result: state.isLoad.start
    }
};


const mapDispatchToProps = (dispatch) => {

    return {


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);