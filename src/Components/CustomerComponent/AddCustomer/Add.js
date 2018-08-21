import React,{Component} from 'react';
import Input from '../../Common/TextField/Input';
import Button from '../../Common/Button/Button';

class App extends Component{

    state={
        name:'',
        address:'',
        submit:false
    };

    isNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background="linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noNameBackground = () => {
        document.getElementById("exampleFormControlInput1").style.background="white";
    };

    isAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background="linear-gradient(to left, #ba5370, #f4e2d8)";
    };

    noAddressBackground = () => {
        document.getElementById("exampleFormControlInput2").style.background="white";
    };

    submit = () => {
        if(this.state.name.trim() === ''){
            this.isNameBackground();
        }else{
            this.noNameBackground();
        }

        if(this.state.address.trim() === ''){
            this.isAddressBackground();
        }else{
            this.noAddressBackground();
        }

        if(this.state.name.trim() !== '' && this.state.address.trim() !== '' ){
            console.log("correct")
        }
    };

    nameInput = (event) => {
        this.setState({name:event});
        this.noNameBackground();
    };

    addressInput = (event) => {
        this.setState({address:event})
        this.noAddressBackground();
    };

    render(){
        return(
            <div style={{ marginLeft: '10%',marginTop:'5%'}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Customer name</label>
                    <Input onChange={(event)=>this.nameInput(event.target.value)} id="exampleFormControlInput1" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Customer Address</label>
                    <Input onChange={(event)=>this.addressInput(event.target.value)} id="exampleFormControlInput2" placeholder="Address"/>
                </div>
                <br/>
                <Button onClick={this.submit} children="Save Customer"/>


            </div>

        )
    }

}

export default App;