import React,{Component} from 'react';
import Navbar from "../../../Components/MainNavbar/Navbar";
import Sider from '../../../Components/Siders/CustomerSider';
import CustomerBody from "../../../Components/MiddleComponent/CustomerBody";
import ItemBody from "../../../Components/MiddleComponent/ItemBody";
import {connect} from "react-redux";


class App extends Component{
    render(){
        console.log("Customer: "+this.props.customer);
        console.log("Item: "+this.props.item);
        console.log("PlaceOrder: "+this.props.placeorder);

        let bodyShow = null;

        if(this.props.customer){
            bodyShow = <CustomerBody/>
        }else if(this.props.item){
            bodyShow = <ItemBody/>
        }else if(this.props.placeorder){

        }


        return(
            <div>
                <Navbar/>

                {bodyShow}

            </div>
        )
    }
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


    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);