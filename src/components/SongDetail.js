import React, {Component} from 'react';

class SongDetail extends React.Component{

  render(){
    return(
        <div className="song-display">
          <h3>{this.props.song.title["label"]}</h3>

          <p>Chart Pos: {this.props.song.value}</p>


        </div>
      )
  }

}




export default SongDetail;
