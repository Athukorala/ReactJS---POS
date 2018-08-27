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

            <div className="col-sm-3" style={{marginBottom: '10px',marginTop: '10px'}}>
                 <div id={this.props.id} className="card" style={card} onMouseEnter={this.rowSelector} onMouseLeave={this.rowUnSelector}>
                        <div className={classes.div} style={{height:'150px'}}>

                            <img id={this.props.id+"image"} className={classes.img} src={this.props.image} alt="Summary"
                                 style={{width:'100%',height:'100%',maxWidth: '100%'}}/>

                        </div>
                        <div className="card-body" style={{margin:'0',paddingTop:'5%',paddingBottom:'5%'}}>
                            <small style={{color: 'red'}}>
                                {"Order id: "+this.props.id}
                            </small>
                            <br/>
                            <small style={{color: 'black',fontSize:'14px'}}>
                                {this.props.date}
                            </small>
                            <br/>
                            <small  style={{margin:'0',color: 'black',fontSize:'13px'}} className="card-text">{this.props.details}</small>
                        </div>
                    </div>

            </div>

        )
    }

};
export default ImageCard;