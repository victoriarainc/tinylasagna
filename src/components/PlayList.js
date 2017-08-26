import React, {Component} from 'react';
import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render() {
    let items = this.state.songs.map((song) => {
      if (song.songTitle) {
        return(
          <PlayListItem key={song._id} song={song} />
        );
      }
    });
    console.log(items);
    return (
      <div className="col-md-10 offset-md-1">
        <div className="playList row">
          {items}
        </div>
      </div>
    );
  }
}
