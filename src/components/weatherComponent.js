import React, {Component} from 'react';

class Weather extends Component{
    
    
    render(){
        const kelvin = this.props.temperature;
        const celsius = kelvin - 273;
        let fahrenheit = celsius * (9/5) + 32;

        fahrenheit = Math.floor(fahrenheit);
        
        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                        <span className="weather__value">  {fahrenheit}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity: 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;