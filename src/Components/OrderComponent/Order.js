import React, {Component} from 'react';
import classes from "./style.css";
import ImageCard from "../Common/Card/Card";
import Image from "../../Content/images/ab.jpg"
import axios from "../../axios/axios-order";

class App extends Component {

    state = {
        orderDetails: []
    }

    componentDidMount() {
        this.tick();
    }

    tick = () => {
        axios.get(`orders/getAll`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    orderDetails: response.data
                })

            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        let get = null;
        if (this.state.orderDetails.length !== 0) {
            get = this.state.orderDetails.map((row, index) => {

                return <ImageCard id={row[0]} key={row[0]} name={row[3].name} details={"Order price: " + row[2]}
                                  date={row[1]} image={Image}/>
            })
        }

        return (
            <div className={classes.mainDiv}>
                <div className="row" style={{marginLeft: '10px'}}>
                    {get}
                </div>

            </div>
        )
    }
}

export default App;