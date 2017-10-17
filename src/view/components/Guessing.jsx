import React from 'react';
import '../css/guessing.css';

export default class Guessing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        let submit = this.props.onClick(this.state.value);
        this.setState({value:''});
    }

    render() {
        return (
            <div className="guess-zone">
                <div className="guess-zone-container">
                    <label className="guess-zone-label">New letter:</label>
                    <input type="text"
                           id="guess"
                           size="1"
                           maxLength={1}
                           value={this.state.value}
                           placeholder="_"
                           className="guess-box"
                           onChange={this.handleChange}
                    />
                    <button 
                        onClick={this.handleSubmit}
                        className="submit-button">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}