import React from 'react';
import "./timer.css"

export default class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {counter : 0}
    }
    render(){
        return (
            <div className="main">
                <div>
                <input type="text" id="timerValue" name = "timerValue"/>
                <button> Go ..! </button>
                </div>
                <span>{this.state.counter}</span>
            </div>
        )
    }
}