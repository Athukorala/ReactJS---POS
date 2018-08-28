import React, {Component} from 'react';
import Input from "../../Common/TextField/Input";
import Button from "../../Common/Button/Button";
import axios from "../../../axios/axios-customer";
import * as actionCreators from "../../../store/action";
import connect from "react-redux/es/connect/connect";
import swal from "sweetalert";

class App extends Component {
    state = {
        name: '',
        address: '',
        submit: false,
        customerDetails: []
    };

    componentDidMount() {
        this.didMountTick();

    };

    didMountTick = () => {
        this.props.start(true);
        axios.get(`customers`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    customerDetails: response.data
                });

                if (response.data.length !== 0) {
                    document.getElementById("example1").value=response.data[0].id;
                    axios.get(`customers/` + response.data[0].id)
                        .then(response => {
                            console.log(response.data);
                            this.setState({
                                name: response.data.name,
                                address: response.data.address
                            })
                        })

                        .catch(error => {
                            console.log("error: " + error)
                        });
                }
                this.props.stop(true);
            })

            .catch(error => {
                console.log("error: " + error)
            });


    };

    submit = () => {
        // this.props.start(true);
        if (this.state.name.trim() === '') {
            this.isNameBackground();
        } else {
            this.noNameBackground();
        }

        if (this.state.address.trim() === '') {
            this.isAddressBackground();
        } else {
            this.noAddressBackground();
        }

        if (this.state.name.trim() !== '' && this.state.address.trim() !== '') {
            let id = document.getElementById("example1").value;

            const customerObj={
                id:id,
                name:this.state.name,
                address:this.state.address
            };
            axios.post(`customers/`+id,customerObj)
                .then(response => {

                    if(response.status === 200){

                        swal({
                            text: "Updated!",
                            icon: "success",
                            button: "Okay!",
                        });

                        this.didMountTick();
                        this.props.stop(true);
                    }

                })
                .catch(error => {
                    console.log(error)
                });


        }else{
            swal({
                text: "Please fill all textfield...!",
                icon: "warning",
                button: "Okay!",
            });
        }
    };

    removesubmit = () => {
        this.props.start(true);
        let id = document.getElementById("example1").value;
        console.log(id);

        axios.delete(`customers/` + id)
            .then(response1 => {
                swal({
                    text: "Removed!",
                    icon: "success",
                    button: "Okay!",
                });

                this.didMountTick()
            })

            .catch(error => {
                console.log("error: " + error)
            });
    };


    nameInput = (event) => {
        this.setState({name: event});
        this.noNameBackground();
    };

    addressInput = (event) => {
        this.setState({address: event})
        this.noAddressBackground();
    };

    idChange = (event) => {
        console.log(event.target.value);
        axios.get(`customers/` + event.target.value)
            .then(response => {
                console.log(response.data);
                this.setState({
                    name: response.data.name,
                    address: response.data.address
                })
            })

            .catch(error => {
                console.log("error: " + error)
            });
    };

    render() {

        let options = this.state.customerDetails.map((row, index) => (
            <option key={index}>
                {row.id}
            </option>
        ));

        return (
            <div style={{marginLeft: '10%', marginTop: '5%'}}>
                <div className="form-group">
                    <label htmlFor="example1">Select Id</label>
                    <select onChange={(event) => this.idChange(event)} className="form-control" id="example1"
                            style={{
                                width: '30%',
                                borderRadius: '20px',
                                background: 'linear-gradient(to right, rgb(219, 230, 246), rgb(197, 121, 109))'
                            }}>
                        {options}

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Customer name</label>
                    <Input value={this.state.name} onChange={(event) => this.nameInput(event.target.value)}
                           id="exampleFormControlInput1"
                           placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Customer Address</label>
                    <Input value={this.state.address} onChange={(event) => this.addressInput(event.target.value)}
                           id="exampleFormControlInput2"
                           placeholder="Address"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-3" style={{marginBottom: '5%'}}>
                        <Button onClick={this.submit} width="100%" children="Update Customer"/>
                    </div>
                    <div className="col-sm-3">
                        <Button onClick={this.removesubmit} width="100%"
                                background="linear-gradient(to top, #9796f0, #fbc7d4)"
                                children="Remove Customer"/>
                    </div>

                </div>


            </div>

        )
    }

    isNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background = "white";
    };

    isAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background = "white";
    };

}

const mapDispatchToProps = (dispatch) => {
    return {

        start: (data) => dispatch(actionCreators.startLoading(data)),
        stop: (data) => dispatch(actionCreators.stopLoading(data)),

    }
};

export default connect(null,mapDispatchToProps)(App);