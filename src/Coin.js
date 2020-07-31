import React, { Component } from 'react';

class Coin extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // const { count, heads, tails } = this.props.vals;

    return (
      <div>
        <p>
          Out of {this.props.vals} flips, there have been {this.props.vals2}{' '}
          heads and {this.props.vals3} tails{' '}
        </p>
      </div>
    );
  }
}

export default Coin;

// let pic;

// if (flip === 1) {
//   pic = <img alt="" src={this.props.headCoin} />;
// }
// if (flip === 2) {
//   pic = <img alt="" src={this.props.tailCoin} />;
// }
