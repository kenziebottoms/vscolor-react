import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './Palette.css';

class Palette extends Component {
  state = {
    colors: ['#fff'],
    active: 0
  };

  change = (c, e) => {
    let colors = this.state.colors;
    colors[this.state.active] = c.hex;
    this.setState({ colors });
  };

  add = e => {
    let colors = this.state.colors.slice();
    let active = colors.push('#fff') - 1;
    this.setState({ colors, active });
  };

  render() {
    let swatches = this.state.colors.map((c, i) => {
      return <div className='swatch' key={i} style={{ background: c }}></div>;
    });
    return (
      <div className='picker'>
        <ChromePicker
          color={this.state.colors[this.state.active]}
          onChangeComplete={this.change}
        />
        <div className='colors'>
          {swatches}
          <div className='swatch new' onClick={this.add}>
            +
          </div>
        </div>
      </div>
    );
  }
}

export default Palette;
