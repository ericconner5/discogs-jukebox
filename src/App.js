import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import YouTubePlayer from './components/YouTubePlayer';
import PlaylistDisplay from './components/PlaylistDisplay';
import CurrentlyPlayingDetails from './components/CurrentlyPlayingDetails';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBox/>
        <YouTubePlayer/>
        <PlaylistDisplay/>
        <CurrentlyPlayingDetails/>
        <Footer/>
      </div>
    );
  }
}

export default App;
