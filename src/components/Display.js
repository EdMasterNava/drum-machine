import React from "react";

class Display extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div id="display">
          <h1 id="display-name">{this.props.name}</h1>
          <div id="bank">
            <h2 id="bank-name">Bank
              <button id="bank-switch" onClick={this.props.toggleBank}>
                {this.props.bank === 1 ? <strong>A</strong>: <strong>B</strong>}
              </button>
            </h2>
          </div>
        </div>
      )
    }
}
export default Display;