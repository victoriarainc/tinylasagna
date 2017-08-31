import React, {Component} from 'react';

export default class PlayLIstItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-6 card">
        <div className="card-block">
          <ul className="list-group">
            <li className="list-group-item">
              Name: {this.props.song.userName}
            </li>
            <li className="list-group-item">
              Artist/Band: {this.props.song.songArtist}
            </li>
            <li className="list-group-item">
              Song Title: {this.props.song.songTitle}
            </li>
            <li className="list-group-item">
              Notes: {this.props.song.songNotes}
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

//     <div className="card-block">
//       <p>
//         Vehicle: {vehicle.name}
//       </p>
//       <p>
//         Model: {vehicle.model}
//       </p>
//       <div className="card">
//         <ul className="list-group">
//           <li className="list-group-item">
//             Manufacturer: {vehicle.manufacturer}
//           </li>
//           <li className="list-group-item">
//             Class: {vehicle.class}
//           </li>
//           <li className="list-group-item">
//             Passengers: {vehicle.passengers}
//           </li>
//           <li className="list-group-item">
//             Crew: {vehicle.crew}
//           </li>
//           <li className="list-group-item">
//             Length: {vehicle.length}
//           </li>
//           <li className="list-group-item">
//             Max-Speed: {vehicle.max_atmosphering_speed}
//           </li>
//           <li className="list-group-item">
//             Cargo-Capactiy: {vehicle.cargo_capacity}
//           </li>
//           </ul>
//       </div>
//     </div>
//   </div>
// </div>
