import React, { Component } from 'react';
import Header from '../../components/header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} />
            </div>

        )
    }

}