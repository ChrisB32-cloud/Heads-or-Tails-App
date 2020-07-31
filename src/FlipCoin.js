import React, { Component } from 'react';
import Coin from './Coin';
import './FlipCoin.css';

class FlipCoin extends Component {
  constructor() {
    super();
    this.state = {
      flip: 0,
      count: 0,
      heads: 0,
      tails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onFlip(curCount) {
    let rand = Math.floor(Math.random() * 2) + 1;

    if (rand === 1) {
      return {
        flip: rand,
        heads: curCount.heads + 1,
        count: curCount.count + 1
      };
    }
    if (rand === 2) {
      return {
        flip: rand,
        tails: curCount.tails + 1,
        count: curCount.count + 1
      };
    }
  }

  handleClick() {
    this.setState(this.onFlip);
  }

  pickPic() {
    let pic;

    if (this.state.flip === 1) {
      pic = <img alt="" src={this.props.headCoin} />;
    }
    if (this.state.flip === 2) {
      pic = <img alt="" src={this.props.tailCoin} />;
    }

    return pic;
  }

  render() {
    let rick = this.pickPic();

    return (
      <div>
        <h1>Let's Flip a coin</h1>
        {rick}
        <br></br>
        <button onClick={this.handleClick}>Flip Coin</button>
        <Coin
          vals={this.state.count}
          vals2={this.state.heads}
          vals3={this.state.tails}
        />
      </div>
    );
  }
}

export default FlipCoin;

// flipFunc() {
//   console.log('flipFunc', this.state.flip);
//   return { flip: Math.floor(Math.random() * 2) + 1 };
// }

// coinCount(curCount) {
//   // console.log({ count: curCount.count + 1 });
//   console.log('count', this.state.count);
//   return { count: curCount.count + 1 };
// }

// headsTails(curCount) {
//   console.log('head', this.state.heads);
//   console.log('tail', this.state.tails);

//   if (this.state.flip === 1) {
//     return { heads: curCount.heads + 1 };
//   }
//   if (this.state.flip === 2) {
//     return { tails: curCount.tails + 1 };
//   }
// }
