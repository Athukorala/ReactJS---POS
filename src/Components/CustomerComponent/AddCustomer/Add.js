import React,{Component} from 'react';
import Input from '../../Common/TextField/Input';
import Button from '../../Common/Button/Button';

class App extends Component{
    render(){
        return(
            <div style={{ marginLeft: '10%',marginTop:'5%'}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Customer name</label>
                    <Input id="exampleFormControlInput1" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Customer Address</label>
                    <Input id="exampleFormControlInput2" placeholder="Address"/>
                </div>
                <br/>
                <Button backgroundColor="black" children="Save Customer"/>


            </div>

        )
    }

}

export default App;