import React, { Component } from 'react';
import Review from './component/review';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() { 
    return (
      <main className='container'>
        <Review/>
      </main>
    );
  }
}
 
export default App;