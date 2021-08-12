import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BodyComponent from './components/BodyComponent'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState } from 'react';
// import $ from 'jquery';
// import Popper from 'popper.js';

function App() {

  return (
    <div className="App">
      <Header/>
      <BodyComponent/>
      <Footer/>
    </div>
  );
}

export default App;
