import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
// import WebFont from 'webfontloader';



const render = (Component) => {
  const containerStyles = {
    margin: 'none'
  };
  ReactDOM.render(
    <Component style={containerStyles} />,
    document.getElementById('root')
  );

};

render(App);
