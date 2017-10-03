import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home />
          </div>
        </div>
        <div className="Row">
          <Footer />
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'));