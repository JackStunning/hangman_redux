import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div id="Header">
        <Header/>
      </div>
      <div id="Body">
        <Body/>
      </div>
      <div id="Footer">
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
