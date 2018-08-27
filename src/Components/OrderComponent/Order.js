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
        axios.get(`orders/getAll`)
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
        let get=null;
        if(this.state.orderDetails.length!==0){
           get= this.state.orderDetails.map((row,index)=>{
                // console.log(row[0])
                // console.log(row[1])
                // console.log(row[2])
                return <ImageCard id={row[0]}  key={row[0]} details={"Order price: "+row[2]}  date={row[1]} image={Image}/>

            })
        }

        return(
            <div className={classes.mainDiv}>
                <div className="row" style={{marginLeft:'10px'}}>
                    {get}
                    {/*<ImageCard id="1" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="2" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="3" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="4" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="5" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="6" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                    {/*<ImageCard id="7" details="POS" date="xx-xx-xxxx" image={Image}/>*/}
                </div>

            </div>
        )
    }
}

export default App;