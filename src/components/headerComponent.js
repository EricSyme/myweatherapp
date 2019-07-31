import React, { Component } from 'react';

class Header extends React.Component {
    render() {
      return (
        <div>

                <h1 className="title-container__title">My 1st Weather App </h1>
                <p className="title-container__subtitle"> Find the current weather in your city.  </p>
            </div>
      )
    }
  }

export default Header;