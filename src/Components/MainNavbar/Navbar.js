import React,{Component} from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component{
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
                    <Menu.Item key="1">Customer</Menu.Item>
                    <Menu.Item key="2">Item</Menu.Item>
                    <Menu.Item key="3">Place-Order</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default App;