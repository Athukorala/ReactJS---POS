import React,{Component} from 'react';
import Input from '../../Common/TextField/Input';
import Button from '../../Common/Button/Button';

class App extends Component{
    render(){
        return(
            <div style={{ marginLeft: '10%',marginTop:'3%'}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Item Description</label>
                    <Input id="exampleFormControlInput1" placeholder="description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Item Qty</label>
                    <Input id="exampleFormControlInput2" placeholder="Qty"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Item Price</label>
                    <Input id="exampleFormControlInput2" placeholder="Price"/>
                </div>
                <br/>
                <Button backgroundColor="black" children="Save Item"/>


            </div>

        )
    }

}

export default App;