import React,{Component} from 'react';
import Navbar from "../../../Components/MainNavbar/Navbar";
import Sider from '../../../Components/Siders/CustomerSider';
import CustomerBody from "../../../Components/MiddleComponent/CustomerBody";


class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                {/*<Sider/>*/}
                <CustomerBody/>
            </div>
        )
    }
}

export default App;