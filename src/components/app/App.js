import React, { Component } from 'react';
import DefaultTitle from '../../parts/text/defaultTitle/DefaultTitle';
import Footer from '../footer/Footer'
import logo from './logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DefaultTitle title="Welcome to the Test App" />
        </header>
        <p className="App-paragraph">
          Please look at the components at <code>./src/components/</code>
        </p>
        <p className="App-paragraph">
          parts/controls/molecules at <code>./src/parts/</code>
        </p>
        <p className="App-paragraph">
          containers at <code>./src/containers/</code>
        </p>
        <p className="App-paragraph">
          And Footer in particular <code>./src/components/footer/</code>
        </p>
        <p className="App-paragraph">
          Thank you!
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
