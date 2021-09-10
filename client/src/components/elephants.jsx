import React from 'react';
import { Component } from 'react';

class Elephant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elephant: {},
    };
  }
  render() {
    return (

        <div>
            {this.props.name}
            <ul>
                <li>{this.props.sex}</li>
                <li>{this.props.species}</li>
                <li>{this.props.note}</li>
            </ul>
            <img src={this.props.image}></img>

        </div>
    )
  }
}

export default Elephant;
// module.exports.Elephant = Elephant;
