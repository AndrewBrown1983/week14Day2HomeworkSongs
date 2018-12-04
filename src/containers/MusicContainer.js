import React, {Component} from 'react';
import SongList from '../components/SongList';

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []

    }
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())

    .then(data => this.setState({songs: data.feed.entry}))



  }
  render(){
    return(
      <div className="song-container">
        <h1>UK Top 20 Songs</h1>
        <SongList list={this.state.songs}/>
      </div>
    )
  }
}

export default MusicContainer;
