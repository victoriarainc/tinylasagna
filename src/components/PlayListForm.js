import React, {Component} from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.addToList = this.addToList.bind(this);


  this.state = {
    userName: '',
    songTitle: '',
    songArtist: '',
    songNote: ''
  }

  }

  handleNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleArtistChange(event) {
    this.setState({
      songArtist: event.target.value
    });
  };

  handleTitleChange(event) {
    this.setState({
      songTitle: event.target.value
    });
  };

  handleNotesChange(event) {
    this.setState({
      songNotes: event.target.value
    });
  };

  addToList(event) {
    event.preventDefault();
    this.setState({
      userName: this.state.userName,
      songTitle: this.state.songTitle,
      songArtist: this.state.songArtist,
      songNotes: this.state.songNotes,
    })
    let listItem = JSON.stringify(this.state);
    console.log(listItem);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    this.setState({
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card">
            <div className="card-block">
              <section className="playListForm">
                <h1 className="card-block create-song">Create a Song</h1>
                <form className="form-group form-center" onSubmit={this.addToList}>
                    <input className="form-control" value={this.state.userName} onChange={this.handleNameChange} name="userName" type="text" placeholder="Username"/>
                    <input className="form-control" value={this.state.songArtist} onChange={this.handleArtistChange} name="songArtist" type="text" placeholder="Artist/Band"/>
                    <input className="form-control" value={this.state.songTitle} onChange={this.handleTitleChange} name="songTitle" type="text" placeholder="Song Title"/>
                    <textarea className="form-control" value={this.state.songNotes} onChange={this.handleNotesChange} name="songNotes" type="text" placeholder="Notes"/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
