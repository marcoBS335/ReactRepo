import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BodyComponent from './components/BodyComponent'
// import { useState } from 'react';

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
