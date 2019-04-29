import React, { Component } from 'react';
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';
import {Provider} from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className ='conteudo'>
              <Header></Header>
              <Home></Home>
              <Chatbot></Chatbot>
              <Footer></Footer>
          </div>
        </Provider>
    );
  }
}

export default App;
