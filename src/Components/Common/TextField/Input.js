import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <input className="form-control"
                       id={this.props.id}
                       placeholder={this.props.placeholder}

                       style={{
                           color: this.props.color ? this.props.color: 'black',
                           width: this.props.width ? this.props.width : '50%',
                           height: this.props.height ? this.props.height : '38px',
                           borderRadius: '20px',
                           boxShadow:'none',
                           background:this.props.background?this.props.background:'linear-gradient(to left, antiquewhite,white)'
                       }}
                       disabled={this.props.disabled}
                       onChange={this.props.onChange}
                       value={this.props.value}
                       type={this.props.type}
                />
            </div>

        )
    }

}

export default App;