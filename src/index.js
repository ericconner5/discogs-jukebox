import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
// import WebFont from 'webfontloader';

const store = createStore(rootReducer);
// const store = createStore(reducer);

const render = (Component) => {
  // WebFont.load({
  //   custom: {
  //     families: ['BeautySchoolDropoutII'],
  //     urls: ['./fonts/BEAUTYSC.TTF']
  //   }
  // });
  const containerStyles = {
    margin: 'none'
  };
  ReactDOM.render(
    <Provider store={store}>
      <App />
    <Component style={containerStyles} />,
    </Provider>,
    document.getElementById('root')
  );

};

render(App);
