import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div class="player">
	    <canvas></canvas>
		<div class="song">
			<div class="artist">Kavinsky</div>
			<div class="name">Odd Look ft. The Weeknd</div>
		</div>
		<div class="playarea">
			<div class="prevSong"></div>
			<div class="play"></div>
			<div class="pause"></div>
			<div class="nextSong"></div>
		</div>
		<div class="soundControl"></div>
		<div class="time">00:00</div>
	</div>
    );
  }
}

export default App;
