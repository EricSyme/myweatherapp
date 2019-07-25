import React, { Component } from 'react';
import { Media } from 'reactstrap';

class WeatherCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <h1>City:</h1>
                </div>
                <div className="row">
                    <h4>Current Weather</h4>
                </div>
            </div>
        );
    }
}

export default WeatherCard;