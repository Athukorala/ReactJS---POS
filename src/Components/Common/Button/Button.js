import React,{Component} from 'react';

class App extends Component{
    render(){
        return(
            <div>
                <button type={this.props.btnType} className="btn btn-primary" onClick={this.props.onClick} data-toggle={this.props.toggle} data-target={this.props.target} style={{
                    width: this.props.isWidth ? this.props.width : '30%',
                    borderRadius:'25px',
                    height: this.props.isHeight ? this.props.height:'40px',
                    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#00C853' ,
                    borderColor: this.props.backgroundColor ? '#abebab' : '#00C853',
                    color: this.props.color,
                    outline:'none',
                    marginBottom:'5%'


                }} disabled={this.props.disabled}>{this.props.children}</button>
            </div>

        )
    }

}

export default App;