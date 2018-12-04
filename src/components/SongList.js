import React, {Component} from 'react';
import SongDetail from './SongDetail';

class SongList extends React.Component{
  render(){
    const songList = this.props.list.map((song, index) =>{
      return(
        <SongDetail value= {index} key={index} song={song}/>
      )
    })
    return(
      <div className="song-list">
        {songList}

      </div>
    )
  }
}

export default SongList;
