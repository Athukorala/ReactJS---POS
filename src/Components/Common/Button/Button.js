import React, {Component} from 'react';
import Radium from 'radium';

class App extends Component {
    render() {
        return (
            <div>
                <button type={this.props.btnType} className="btn btn-primary" onClick={this.props.onClick}
                        data-toggle={this.props.toggle} data-target={this.props.target}

                        style={{
                            width: this.props.width ? this.props.width : '30%',
                            borderRadius: '25px',
                            height: this.props.height ? this.props.height : '40px',
                            // backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#00C853',
                            background: this.props.background ? this.props.background : 'linear-gradient(to left, #ed4264, #ffedbc)',
                            // borderColor: this.props.backgroundColor ? '#abebab' : '#00C853',
                            color: this.props.color ? this.props.color : 'white',
                            borderColor: this.props.backgroundColor ? '#abebab' : 'white',
                            outline: 'none',
                            marginBottom: '5%',
                            ":hover": {
                                background: 'linear-gradient(to right, #3e5151, #decba4)'
                            }

                        }} disabled={this.props.disabled}>{this.props.children}</button>
            </div>

        )
    }

}

export default Radium(App);