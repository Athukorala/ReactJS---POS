import React, {Component} from 'react';
import classes from './style.css';
import Add from "../ItemComponent/AddItem/Add";
import Update from "../ItemComponent/UpdateItem/Update";
import View from "../ItemComponent/ViewItem/View";

const col = {
    marginTop: '2%',
    textAlign: 'center',
    height: '40px', borderBottom: '1px solid lightgray', cursor: 'pointer'
};

class App extends Component {

    state = {
        add: true,
        update: false,
        view: false
    };

    componentDidMount(){
        this.setAddBorder();
    }

    closeModal = () => {
        this.setState({
            add: false,
            update: false,
            view: false
        })
    };

    add = () => {
        this.setAddBorder();
        this.closeModal();
        this.setState({
            add: true,

        })
    };

    update = () => {
        this.setUpdateBorder();
        this.closeModal();
        this.setState({
            update: true,

        })
    };

    view = () => {
        this.setViewBorder();
        this.closeModal();
        this.setState({
            view: true,

        })
    };

    setAddBorder = () => {
        this.clearBorders();
        document.getElementById("add").style.borderBottom = "3px solid aquamarine"
    };

    setUpdateBorder = () => {
        this.clearBorders();
        document.getElementById("update").style.borderBottom = "3px solid aquamarine"
    };

    setViewBorder = () => {
        this.clearBorders();
        document.getElementById("view").style.borderBottom = "3px solid aquamarine"
    };

    clearBorders = () => {
        document.getElementById("add").style.borderBottom = "1px solid lightgray"
        document.getElementById("update").style.borderBottom = "1px solid lightgray"
        document.getElementById("view").style.borderBottom = "1px solid lightgray"
    };

    render() {

        let showModal = null;

        if (this.state.add) {
            showModal = <Add/>
        } else if (this.state.update) {
            showModal = <Update/>
        } else if (this.state.view) {
            showModal = <View/>
        }


        return (

            <div className={classes.mainDiv}>
                <center>
                    <div className="row" style={{margin: '0'}}>

                        <div id="add" onClick={this.add} className="col-sm-4" style={col}>
                            Add Item
                        </div>

                        <div id="update" onClick={this.update} className="col-sm-4" style={col}>
                            Update Item
                        </div>

                        <div id="view" onClick={this.view} className="col-sm-4" style={col}>
                            View Item
                        </div>

                    </div>
                </center>
                <div className="container">
                    {showModal}
                </div>

            </div>

        )
    }

}

export default App;