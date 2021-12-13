import React, { Component } from 'react';
import './App.css';
import Inscript from './bigreact/Inscript.js';
import Proreact from './bigreact/Proreact.js'

class App extends Component {
  render(){
  return (
    <div>
    <Proreact/>
    <Inscript/>
    </div>
  );
}
}
export default App;
