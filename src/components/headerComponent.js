import React, { Component } from 'react';

class Header extends React.Component {
    render() {
      return (
        <div>

                <h1 className="title-container__title">Weather Scanner </h1>
                <p className="title-container__subtitle"> Helps you find weather conditions in cities...  </p>
            </div>
      )
    }
  }

export default Header;