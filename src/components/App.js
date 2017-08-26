import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
// import PlayListItem from './PlayListItem';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <NavBar />
        <PlayListForm name={this.state.value} handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} pilot={this.state.pilot}/>
        <PlayList />
      </div>
    );
  }
}

export default App;
