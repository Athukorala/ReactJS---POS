import React,{Component} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import connect from "react-redux/es/connect/connect";

const { Header, Content, Footer } = Layout;
import * as actionCreators from "../../store/action/BodyActions";
class App extends Component{

    cus = () => {
        this.props.customerBodyHandler(true);
    }

    item = () => {
        this.props.itemBodyHandler(true);
    }

    placeorder = () => {
        this.props.placeorderBodyHandler(true);
    }

    render(){
        return(
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1" onClick={this.cus}>Customer</Menu.Item>
                    <Menu.Item key="2" onClick={this.item}>Item</Menu.Item>
                    <Menu.Item key="3" onClick={this.placeorder}>Place-Order</Menu.Item>
                </Menu>
            </Header>
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
        customerBodyHandler: (data) => dispatch(actionCreators.customerHandler(data)),
        itemBodyHandler: (data) => dispatch(actionCreators.itemHandler(data)),
        placeorderBodyHandler: (data) => dispatch(actionCreators.placeorderHandler(data)),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);