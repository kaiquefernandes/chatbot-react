import React from 'react'
import logo from '../logo.svg';

const Header = props => {
    return(
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            chatbot teste
          </p>
        </header>
    )
}

export default Header;