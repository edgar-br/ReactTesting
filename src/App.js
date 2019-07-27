import React, { Component } from 'react';
import Products from './components/Products';
import Toolbar from './components/Toolbar';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Products />
      </div>
    );
  }
}

export default App;
