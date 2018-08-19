import React,{Component} from 'react';


import { Layout, Menu,  Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider: CustomerSider } = Layout;

class App extends Component{
    render(){
        return(
            <div>
            <CustomerSider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ borderRight: 0 ,height:'100%'}}
                >
                    <SubMenu key="sub1" title={<span><Icon type="laptop" />Management</span>}>
                        <Menu.Item key="1">Manage Customers</Menu.Item>
                        <Menu.Item key="2">View Customers</Menu.Item>

                    </SubMenu>

                </Menu>
            </CustomerSider>
            </div>
        )
    }
}
 export default App;