import React, {Component} from 'react';
import classes from './ImageCard.css';
// add style objects to components

const card = {
    // boxShadow: '0 2px 20px rgba(0,0,0,0.3), 0 1px 1px rgba(0,0,0,0.3)',
    // boxShadow: '0px 1px 10px #C9C9C9',
    // boxShadow: '1px 2px rgba(0,0,0,0.3)',
    width: '12rem',
    cursor:'pointer'
};


// image card make

class ImageCard extends Component {

    rowSelector = () => {
        let rowSe = document.getElementById(this.props.id);
        rowSe.style.boxShadow='rgb(201, 201, 201) 0px 0px 20px 2px';

        let rowSe1 = document.getElementById(this.props.id+"image");

    };

    rowUnSelector = () => {

        let rowSe = document.getElementById(this.props.id);
        rowSe.style.boxShadow= '0px 1px 10px #C9C9C9';

        let rowSe1 = document.getElementById(this.props.id+"image");


    };

    render() {
        return (

            <div className="col-sm-3" style={colStyle}>
                 <div id={this.props.id} className="card" style={card} onMouseEnter={this.rowSelector} onMouseLeave={this.rowUnSelector}>
                        <div className={classes.div} style={{height:'150px'}}>

                            <img id={this.props.id+"image"} className={classes.img} src={this.props.image} alt="Summary"
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
                                {"Order id: "+this.props.id}
                            </small>
                            <br/>
                            <small style={dateStyle}>
                                {this.props.date}
                            </small>
                            <br/>
                            <small  style={smallTextStyle} className="card-text">{this.props.details}</small>
                        </div>
                    </div>

            </div>

        )
    }

};

const smallStyle={color: 'dimgray',padding:'7px',border:'1px solid lightgray',fontSize:'15px'};
const cardBodyStyle = {margin:'0',paddingTop:'5%',paddingBottom:'5%'};
const smallTextStyle = {margin:'0',color: 'black',fontSize:'13px'};
const idStyle = {color: 'red'};
const imgStyle = {width:'100%',height:'100%',maxWidth: '100%'};
const dateStyle = {color: 'black',fontSize:'14px'};
const colStyle = {marginBottom: '10px',marginTop: '10px'};

export default ImageCard;