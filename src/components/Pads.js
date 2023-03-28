import React from "react";

class Pads extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div id="pad-container">
          <button className="drum-pad" id="Q" onClick={this.props.updateState}><h2>Q</h2></button>
          <button className="drum-pad" id="W" onClick={this.props.updateState}><h2>W</h2></button>
          <button className="drum-pad" id="E" onClick={this.props.updateState}><h2>E</h2></button>
          <button className="drum-pad" id="A" onClick={this.props.updateState}><h2>A</h2></button>
          <button className="drum-pad" id="S" onClick={this.props.updateState}><h2>S</h2></button>
          <button className="drum-pad" id="D" onClick={this.props.updateState}><h2>D</h2></button>
          <button className="drum-pad" id="Z" onClick={this.props.updateState}><h2>Z</h2></button>
          <button className="drum-pad" id="X" onClick={this.props.updateState}><h2>X</h2></button>
          <button className="drum-pad" id="C" onClick={this.props.updateState}><h2>C</h2></button>
        </div>
      )
    }
}
export default Pads;