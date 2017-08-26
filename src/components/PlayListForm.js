import React, {Component} from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="card">
            <div className="card-block">
              <section className="playListForm">
                <form class="form-group form-center" onSubmit={this.props.handleSubmit}>
                    Username: <input className="form-control" onChange={this.props.handleNameChange} value={this.props.name} name="username" type="text" placeholder="Username"/>
                    Artist/Band: <input className="form-control" onChange={this.props.handleNameChange} value={this.props.name} name="artist" type="text" placeholder="Artist/Band"/>
                    Song Title: <input className="form-control" onChange={this.props.handleNameChange} value={this.props.name} name="title" type="text" placeholder="Song Title"/>
                    Notes: <textarea className="form-control" onChange={this.props.handleNameChange} value={this.props.name} name="notes" type="text" placeholder="Notes"/>
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
