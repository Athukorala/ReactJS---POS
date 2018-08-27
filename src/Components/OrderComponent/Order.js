import React,{Component} from 'react';
import classes from "./style.css";
import ImageCard from "../Common/Card/Card";
import Image from "../../Content/images/ab.jpg"
import axios from "../../axios/axios-order";

class App extends Component{

    state={
        orderDetails:[]
    }

    componentDidMount(){
        this.tick();
    }

    tick = () => {
        axios.get(`orders/ab`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    orderDetails:response.data
                })

            })
            .catch(error => {
                console.log(error)
            });
    }

    render(){
        return(
            <div className={classes.mainDiv}>
                <div className="row" style={{marginLeft:'10px'}}>
                    <ImageCard id="1" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="2" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="3" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="4" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="5" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="6" details="POS" date="xx-xx-xxxx" image={Image}/>
                    <ImageCard id="7" details="POS" date="xx-xx-xxxx" image={Image}/>
                </div>

            </div>
        )
    }
}

export default App;