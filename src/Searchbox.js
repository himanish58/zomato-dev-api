import React, { Component } from 'react';
import { Input } from 'react-toolbox/lib/input';

class Searchbox extends Component {

    render() {
        return (
            <div>
                <Input type='text' label='Search for Restaurants' onChange={(value) => this.props.handleChange(value)} />
            </div>
        );
    }
}

export default Searchbox;