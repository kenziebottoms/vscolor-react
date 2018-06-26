import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Swatch from './Swatch.js';
import './Palette.css';

class Palette extends Component {
  state = {
    colors: ['#fff'],
    active: 0
  };

  // change active swatch
  change = (c, e) => {
    let colors = this.state.colors.slice();
    colors[this.state.active] = c.hex;
    this.setState({ colors });
  };

  // add new blank swatch
  add = e => {
    let colors = this.state.colors.slice();
    let active = colors.push('#fff') - 1;   // push returns the new length of the array
    this.setState({ colors, active });
  };

  // handle swatch click
  click = (i, e) => {
    if (this.state.active === i) {
      let colors = this.state.colors.slice();
      colors.splice(i, 1);
      this.setState({ colors, active: colors.length - 1 });
    } else {
      this.setState({ active: i });
    }
  };

  // make a swatch for each color in state.colors
  renderSwatches = () => {
    return this.state.colors.map((c, i) => {
      return <Swatch key={i} color={c} active={i === this.state.active} onClick={() => this.click(i)} />;
    });
  };

  render() {
    return (
      <div className='picker'>
        <ChromePicker
          color={this.state.colors[this.state.active]}
          onChangeComplete={this.change}
        />
        <div className='palette'>
          {this.renderSwatches()}
          <Swatch key={'new'} active={false} new={true} onClick={() => this.add()} />
        </div>
      </div>
    );
  }
}

export default Palette;
