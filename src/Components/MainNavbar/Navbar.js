import React,{Component} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import connect from "react-redux/es/connect/connect";

const { Header, Content, Footer } = Layout;
import * as actionCreators from "../../store/action/BodyActions";
import customerAxios from "../../axios/axios-customer";
import itemAxios from "../../axios/axios-item";

class App extends Component{

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

    render(){

        let customerNumbers = this.state.customerDetails.length;
        let itemsNumbers = this.state.itemDetails.length;

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
                    <Menu.Item key="4" >Orders</Menu.Item>


                    <Menu.Item key="7" style={{color:'pink'}}>
                        <i className="fa fa-id-card" aria-hidden="true">
                        </i>
                        &nbsp;&nbsp;
                        Customers
                        &nbsp;&nbsp;
                        {customerNumbers}

                    </Menu.Item>

                    <Menu.Item key="8" style={{color:'pink'}}>
                        <i className="fa fa-sitemap" aria-hidden="true">
                        </i>
                        &nbsp;&nbsp;
                        Items
                        &nbsp;&nbsp;
                        {itemsNumbers}

                    </Menu.Item>


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