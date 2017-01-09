import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {numOfBoxes : 0};
    this.go = this.go.bind(this);
  }

  getColors(){
    // write some awesome random code....
    let temp = (Math.random() * 1);
    console.log(temp)
    return {r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b:  Math.floor(Math.random() * 256), a: temp};
  }
  go(){
      
    this.timer = setInterval(()=>{
      const start = +this.numOfBoxes.value;
      this.setState({numOfBoxes: start});
    }, 1000);
  }
  
  render(){
    return (
      <div>
        <h1>Boxes</h1>
        <div>
            <input type = "text" ref={node => this.numOfBoxes = node} onChange={this.go}/>
        </div>
        {
          Array(this.state.numOfBoxes).fill(null).map((_, i) =>{
            return <Box key={i} colors={this.getColors()} />;
          })
        }
      </div>
    );
  }
}