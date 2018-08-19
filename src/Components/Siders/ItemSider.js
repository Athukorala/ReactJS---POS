import React,{Component} from 'react';


import { Layout, Menu,  Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class App extends Component{
    render(){
        return(
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height:'100%' ,borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="laptop" />Management</span>}>
                        <Menu.Item key="1">Manage Items</Menu.Item>
                        <Menu.Item key="2">View Items</Menu.Item>

                    </SubMenu>

                </Menu>
            </Sider>
        )
    }
}
export default App;