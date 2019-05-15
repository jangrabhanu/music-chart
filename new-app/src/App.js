import React, { Component } from 'react';
import './App.js';
import CountryForm from './components/CountryForm';
import PopularSongs from './components/PopularSongs';


const API_KEY="1bc6f6a80a10d9a0000b301bcd894c44";


class App extends Component{
state = {
  tracks:[]
}
  getMusic = async (e) => {
    const country = e.target.elements.selectCountry.value;
    e.preventDefault();
    console.log(country);
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json`);
    
    const data = await api_call.json();
    this.setState({tracks:data.tracks.track});
    console.log(this.state.tracks);

  }
render()
{
  return (
    <div className="App">
    <header className="App-header">
  <center><h1 className="App-title">TOP TRACKS IN INDIA</h1></center>
    </header>
    <CountryForm getMusic={this.getMusic}/>
     {/* <div id="box">
        { this.state.tracks.map((song) => {
          console.log(song);
          return(
            <div key={song.url}>
            <img src={song.image[2]['#text']} alt={song.name}/>
            <p> {song.name} </p>
            </div>
          );
        }) }
     </div> */}
     <PopularSongs tracks={this.state.tracks}/>
    </div>
    );
}
}

export default App;
