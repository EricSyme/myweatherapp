import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponent';
import WeatherCard from './components/weatherCardComponent';
import Weather from './components/weatherComponent';



class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
  
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${'8b601678a038152bbb08d49fb2949ad4'}`);
  
    const response = await api_call.json();
    
  if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  } else {
    this.setState({
      error: "Please enter the values..."
    })
  }

    console.log(response);
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Header />
              </div>
              <div className="col-xs-5 form-container">
                <WeatherCard loadWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default App;