import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    };

    onInputChange = (text) => {
        this.setState({text});
        this.props.onInputChange(text);
    };

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={e => this.onInputChange(e.target.value)} />
            </div>
        );
    };
}