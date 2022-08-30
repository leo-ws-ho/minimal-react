import React from 'react';
import ReactDOM from 'react-dom/client';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
  }

  handleClick() {
    console.log('clicked!');
    // set the state so that the render will display correct color.
    let n = this.state.numClicks;

    n = (n + 1) % 3;
    this.setState( {numClicks: n} );
  }

  render() {
    let currentStyle = {};

    if (this.state.numClicks === 0)
      currentStyle.backgroundColor = 'green';
    else if (this.state.numClicks === 1)
      currentStyle.backgroundColor = 'red';
    else if (this.state.numClicks === 2) {
      currentStyle.backgroundColor = 'yellow';
    }

    // set the background color according to state.
    // *** never set the state inside render(); ***
    return (
      <button 
        onClick={ () => this.handleClick() } 
        // arrow function preserves the 'this' binding.  
        // in this code, 'this' refers to this 'Button' Component.
        style={ currentStyle }
      >Click!</button>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Button></Button>
);
