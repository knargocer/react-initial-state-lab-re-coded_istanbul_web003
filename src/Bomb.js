// your Bomb code here!

import React from 'react';
 
export default class Bomb extends Component{
    constructor(props) {
        super()
        this.state = {secondsLeft : props.initialCount}
      }
      
      render() {
        const first = '<h1>Boom!</h1>';
        const second = '<h1>{this.secondsLeft} seconds left before I go boom!</h1>';
        
        return(this.secondsLeft===0?first:second)          
    }
}
