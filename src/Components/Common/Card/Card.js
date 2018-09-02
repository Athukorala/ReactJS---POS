import React, {Component} from 'react';
import classes from './ImageCard.css';
import axios from "../../../axios/axios-order";
import swal from "sweetalert";
// add style objects to components

const card = {
    // boxShadow: '0 2px 20px rgba(0,0,0,0.3), 0 1px 1px rgba(0,0,0,0.3)',
    // boxShadow: '0px 1px 10px #C9C9C9',
    // boxShadow: '1px 2px rgba(0,0,0,0.3)',
    width: '12rem',
    cursor: 'pointer'
};


// image card make

class ImageCard extends Component {

    state = {
        itemDetails: [],
        print:''
    }

    rowSelector = () => {
        let rowSe = document.getElementById(this.props.id);
        rowSe.style.boxShadow = 'rgb(201, 201, 201) 0px 0px 20px 2px';

        let rowSe1 = document.getElementById(this.props.id + "image");

    };

    rowUnSelector = () => {

        let rowSe = document.getElementById(this.props.id);
        rowSe.style.boxShadow = '0px 1px 10px #C9C9C9';

        let rowSe1 = document.getElementById(this.props.id + "image");


    };

    searchOrder = (id) => {
        console.log("Order id: " + id);
        axios.get(`orderdetails/` + id)
            .then(response => {


                this.setState({
                    itemDetails: response.data
                });
                this.forceUpdate()

                this.search();

            })
            .catch(error => {
                console.log(error)
            });
    }

    search = () => {


        let msg = ' ';

        if (this.state.itemDetails.length !== 0) {
            this.state.itemDetails.map((row, index) => {
                console.log(row[0]);
                // console.log(row[1]);
                console.log(row[2]);
                console.log(row[3]);

                axios.get(`items/` + row[0])
                    .then(response => {

                        msg = msg+"  "+response.data.description + "   , price: " + row[2] + "    , qty: " + row[3] + '\n'
                        console.log(msg);

                        swal({
                            text: msg,
                            icon: "data:image/png;base64,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",
                            button: "Okay!",
                        });

                        this.setState({
                            print: msg
                        });
                    })

                    .catch(error => {
                        console.log("error: " + error)
                    });

            });
        }

    };

    render() {

        return (

            <div onClick={() => this.searchOrder(this.props.id)} className="col-sm-3" style={colStyle}>
                <div id={this.props.id} className="card" style={card} onMouseEnter={this.rowSelector}
                     onMouseLeave={this.rowUnSelector}>
                    <div className={classes.div} style={{height: '150px'}}>

                        <img id={this.props.id + "image"} className={classes.img} src={this.props.image} alt="Summary"
                             style={imgStyle}/>

                    </div>
                    <div className="card-body" style={cardBodyStyle}>
                        <br/>
                        <center>
                            <small style={smallStyle}>
                                {this.props.name}
                            </small>
                            <br/><br/>
                        </center>
                        <small style={idStyle}>
                            {"Order id: " + this.props.id}
                        </small>
                        <br/>
                        <small style={dateStyle}>
                            {this.props.date}
                        </small>
                        <br/>
                        <small style={smallTextStyle} className="card-text">{this.props.details}</small>
                    </div>
                </div>

            </div>

        )
    }

};

const smallStyle = {
    color: 'dimgray',
    padding: '7px',
    // border: '1px solid lightgray',
    fontSize: '15px'};
const cardBodyStyle = {margin: '0', paddingTop: '5%', paddingBottom: '5%'};
const smallTextStyle = {margin: '0', color: 'black', fontSize: '13px'};
const idStyle = {color: 'red'};
const imgStyle = {width: '100%', height: '100%', maxWidth: '100%',objectFit:'contain'};
const dateStyle = {color: 'black', fontSize: '14px'};
const colStyle = {marginBottom: '10px', marginTop: '10px'};

export default ImageCard;