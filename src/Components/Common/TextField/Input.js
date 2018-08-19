import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <input className="form-control"
                       id={this.props.id}
                       placeholder={this.props.placeholder}

                       style={{

                           width: this.props.width ? this.props.width : '50%',
                           height: this.props.height ? this.props.height : '38px',
                           borderRadius: '20px',
                       }}
                       disabled={this.props.disabled}
                />
            </div>

        )
    }

}

export default App;