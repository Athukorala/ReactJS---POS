import React,{Component} from 'react';
import Input from "../../Common/TextField/Input";
import Button from "../../Common/Button/Button";

class App extends Component{
    render(){
        return(
            <div style={{ marginLeft: '10%',marginTop:'5%'}}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select Id</label>
                    <select className="form-control" id="exampleFormControlSelect1" style={{width:'30%',borderRadius:'20px'}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Customer name</label>
                    <Input id="exampleFormControlInput1" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Customer Address</label>
                    <Input id="exampleFormControlInput2" placeholder="Address"/>
                </div>
                <br/>
                <Button backgroundColor="black" children="Update Customer"/>



            </div>

        )
    }

}

export default App;