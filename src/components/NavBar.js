import React, {Component} from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <section className="navBar jumbotron">
            Tiny Lasagna Song Title Creator
          </section>
        </div>
      </div>
    );
  }
}
